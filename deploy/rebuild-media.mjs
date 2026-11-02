import { createReadStream, createWriteStream, existsSync, mkdirSync, readdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { pipeline } from 'node:stream/promises'

const media = [
  {
    chunks: 'deploy-assets/masterworks-user',
    output: 'public/projects/masterworks/User.mp4',
  },
  {
    chunks: 'deploy-assets/pinsight-xr-demo',
    output: 'public/assets/pinsight/video/pinsight-xr-demo.m4v',
  },
]

for (const item of media) {
  const output = resolve(item.output)
  if (existsSync(output)) continue

  const chunkDirectory = resolve(item.chunks)
  const chunks = readdirSync(chunkDirectory)
    .filter((name) => name.endsWith('.part'))
    .sort()

  if (!chunks.length) {
    throw new Error(`No deployment chunks found in ${item.chunks}`)
  }

  mkdirSync(dirname(output), { recursive: true })
  const destination = createWriteStream(output)

  for (const chunk of chunks) {
    await pipeline(createReadStream(join(chunkDirectory, chunk)), destination, { end: false })
  }

  destination.end()
  await new Promise((resolveDone, reject) => {
    destination.on('finish', resolveDone)
    destination.on('error', reject)
  })
}
