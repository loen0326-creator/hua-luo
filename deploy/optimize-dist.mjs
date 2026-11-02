import { readdir, readFile, rm, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = path.resolve('dist')
const imageExtensions = new Set(['.png', '.jpg', '.jpeg'])
const textExtensions = new Set(['.html', '.css', '.js', '.json', '.svg'])

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const absolute = path.join(directory, entry.name)
    if (entry.isDirectory()) files.push(...await walk(absolute))
    else files.push(absolute)
  }
  return files
}

async function directorySize(directory) {
  const files = await walk(directory)
  let bytes = 0
  for (const file of files) bytes += (await stat(file)).size
  return bytes
}

async function convertImage(file) {
  const output = file.replace(/\.(png|jpe?g)$/i, '.webp')
  await sharp(file, { failOn: 'none' })
    .rotate()
    .resize({
      width: 2560,
      height: 2560,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({
      quality: 88,
      alphaQuality: 100,
      smartSubsample: true,
      effort: 5,
    })
    .toFile(output)
  await rm(file)
}

async function rewriteReferences(file) {
  const content = await readFile(file, 'utf8')
  const next = content
    .replace(/\.png/gi, '.webp')
    .replace(/\.jpe?g/gi, '.webp')
  if (next !== content) await writeFile(file, next)
}

const before = await directorySize(root)
let files = await walk(root)

// Vite copies public/ verbatim. This 63 MB source export is not referenced;
// the site uses the smaller MP4 sibling instead.
await rm(path.join(root, 'assets/pinsight/video/pinsight-xr-demo.m4v'), { force: true })

for (const file of files) {
  if (path.basename(file) === '.DS_Store') await rm(file, { force: true })
}

files = await walk(root)
const images = files.filter(file => imageExtensions.has(path.extname(file).toLowerCase()))
for (let index = 0; index < images.length; index += 4) {
  await Promise.all(images.slice(index, index + 4).map(convertImage))
}

files = await walk(root)
const textFiles = files.filter(file => textExtensions.has(path.extname(file).toLowerCase()))
await Promise.all(textFiles.map(rewriteReferences))

const after = await directorySize(root)
const mb = bytes => (bytes / 1024 / 1024).toFixed(1)
console.log(`Optimized dist: ${mb(before)} MB -> ${mb(after)} MB`)
console.log(`Converted ${images.length} raster images to high-quality WebP.`)
