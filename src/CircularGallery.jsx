import { Camera, Mesh, Plane, Program, Renderer, Texture, Transform } from 'ogl'
import React from 'react'
import { useEffect, useRef } from 'react'
import './CircularGallery.css'

const lerp = (a, b, t) => a + (b - a) * t

function textTexture(gl, text, color, font) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = 900
  canvas.height = 120
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.font = font
  ctx.fillStyle = color
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.shadowColor = 'rgba(0,0,0,.9)'
  ctx.shadowBlur = 10
  ctx.fillText(text, canvas.width / 2, canvas.height / 2)
  const texture = new Texture(gl, { generateMipmaps: false })
  texture.image = canvas
  return texture
}

class GalleryCard {
  constructor({ gl, geometry, scene, image, text, index, count, viewport, screen, bend, textColor, borderRadius, font }) {
    this.gl = gl
    this.index = index
    this.count = count
    this.viewport = viewport
    this.screen = screen
    this.bend = bend
    this.extra = 0

    const texture = new Texture(gl)
    const img = new Image()
    img.src = image
    img.onload = () => {
      texture.image = img
      this.program.uniforms.uImageSizes.value = [img.naturalWidth, img.naturalHeight]
    }

    this.program = new Program(gl, {
      depthTest: false,
      depthWrite: false,
      transparent: true,
      vertex: `
        precision highp float;
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        uniform float uTime;
        uniform float uSpeed;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 p = position;
          p.z += sin(p.x * 3.5 + uTime) * uSpeed * .35;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
        }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        uniform vec2 uImageSizes;
        uniform vec2 uPlaneSizes;
        uniform float uBorderRadius;
        varying vec2 vUv;
        float roundedBox(vec2 p, vec2 b, float r) {
          vec2 d = abs(p) - b;
          return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r;
        }
        void main() {
          vec2 ratio = vec2(
            min((uPlaneSizes.x / uPlaneSizes.y) / (uImageSizes.x / uImageSizes.y), 1.0),
            min((uPlaneSizes.y / uPlaneSizes.x) / (uImageSizes.y / uImageSizes.x), 1.0)
          );
          vec2 uv = vUv * ratio + (1.0 - ratio) * .5;
          vec4 color = texture2D(tMap, uv);
          // 深色项目封面仍需与首页背景分离，避免被误读为黑色空卡。
          float luminance = dot(color.rgb, vec3(.2126, .7152, .0722));
          float darkMix = 1.0 - smoothstep(.035, .24, luminance);
          vec3 lifted = mix(color.rgb, vec3(.105, .075, .145), darkMix * .72);
          float d = roundedBox(vUv - .5, vec2(.5 - uBorderRadius), uBorderRadius);
          float alpha = 1.0 - smoothstep(-.003, .003, d);
          gl_FragColor = vec4(lifted, alpha);
        }
      `,
      uniforms: {
        tMap: { value: texture },
        uImageSizes: { value: [1200, 800] },
        uPlaneSizes: { value: [0, 0] },
        uBorderRadius: { value: borderRadius },
        uTime: { value: Math.random() * 100 },
        uSpeed: { value: 0 }
      }
    })

    this.plane = new Mesh(gl, { geometry, program: this.program })
    this.plane.setParent(scene)

    const labelProgram = new Program(gl, {
      depthTest: false,
      depthWrite: false,
      transparent: true,
      vertex: `
        attribute vec3 position;
        attribute vec2 uv;
        uniform mat4 modelViewMatrix;
        uniform mat4 projectionMatrix;
        varying vec2 vUv;
        void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }
      `,
      fragment: `
        precision highp float;
        uniform sampler2D tMap;
        varying vec2 vUv;
        void main(){ vec4 c=texture2D(tMap,vUv); if(c.a<.05) discard; gl_FragColor=c; }
      `,
      uniforms: { tMap: { value: textTexture(gl, text, textColor, font) } }
    })
    this.label = new Mesh(gl, { geometry: new Plane(gl), program: labelProgram })
    this.label.setParent(this.plane)
    this.resize()
  }

  resize(screen = this.screen, viewport = this.viewport) {
    this.screen = screen
    this.viewport = viewport
    const mobile = screen.width < 768
    const compactDesktop = screen.width >= 768 && screen.width < 1400
    // 项目带是首屏的辅助索引，不应成为第二个 Hero。
    // 使用横向封面比例，让封面和标题在较低高度里仍然清楚。
    this.plane.scale.x = viewport.width / (mobile ? 2.4 : 5.8)
    this.plane.scale.y = Math.min(this.plane.scale.x / 1.5, viewport.height * .65)
    this.program.uniforms.uPlaneSizes.value = [this.plane.scale.x, this.plane.scale.y]
    // label 是 plane 的子节点，使用局部坐标；此前再次乘 plane 尺寸会导致标题越界。
    this.label.scale.set(.98, .22, 1)
    this.label.position.y = -.65
    const wide = screen.width >= 1700
    this.gap = mobile ? .58 : compactDesktop ? .72 : wide ? .9 : .8
    this.width = this.plane.scale.x + this.gap
    this.totalWidth = this.width * this.count
    this.x = this.width * this.index
  }

  update(scroll, direction) {
    this.plane.position.x = this.x - scroll.current - this.extra
    const x = this.plane.position.x
    const half = this.viewport.width / 2
    const radius = (half * half + this.bend * this.bend) / (2 * Math.abs(this.bend || .001))
    const clamped = Math.min(Math.abs(x), half)
    const arc = radius - Math.sqrt(Math.max(0, radius * radius - clamped * clamped))
    this.plane.position.y = this.bend > 0 ? -arc : arc
    this.plane.rotation.z = (this.bend > 0 ? -1 : 1) * Math.sign(x) * Math.asin(clamped / radius)
    const speed = scroll.current - scroll.last
    this.program.uniforms.uTime.value += .04
    this.program.uniforms.uSpeed.value = speed

    const planeOffset = this.plane.scale.x / 2
    if (direction === 'right' && this.plane.position.x + planeOffset < -half) this.extra -= this.totalWidth
    if (direction === 'left' && this.plane.position.x - planeOffset > half) this.extra += this.totalWidth
  }
}

class GalleryApp {
  constructor(container, options) {
    this.container = container
    this.options = options
    this.scroll = { current: 0, target: 0, last: 0, ease: options.scrollEase }
    this.dragVelocity = 0
    this.momentum = 0
    this.renderer = new Renderer({ alpha: true, antialias: true, dpr: Math.min(devicePixelRatio, 2) })
    this.gl = this.renderer.gl
    this.gl.clearColor(0, 0, 0, 0)
    container.appendChild(this.gl.canvas)
    this.camera = new Camera(this.gl, { fov: 45 })
    this.camera.position.z = 20
    this.scene = new Transform()
    this.geometry = new Plane(this.gl, { widthSegments: 80, heightSegments: 40 })
    this.resize()
    const source = options.items
    this.cards = source.map((item, index) => new GalleryCard({
      gl: this.gl, geometry: this.geometry, scene: this.scene,
      image: item.image, text: item.text, index, count: source.length,
      viewport: this.viewport, screen: this.screen, ...options
    }))
    this.bind()
    this.update()
  }

  resize = () => {
    this.screen = { width: this.container.clientWidth, height: this.container.clientHeight }
    this.renderer.setSize(this.screen.width, this.screen.height)
    this.camera.perspective({ aspect: this.screen.width / this.screen.height })
    const height = 2 * Math.tan((this.camera.fov * Math.PI / 180) / 2) * this.camera.position.z
    this.viewport = { width: height * this.camera.aspect, height }
    this.cards?.forEach(card => card.resize(this.screen, this.viewport))
  }

  wheel = event => {
    if (!this.container.matches(':hover')) return
    event.preventDefault()
    const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX
    this.scroll.target += delta * this.options.scrollSpeed * .012
    this.momentum += delta * .0009
  }

  down = event => {
    this.dragging = true
    this.startX = event.touches?.[0].clientX ?? event.clientX
    this.lastX = this.startX
    this.startTarget = this.scroll.target
    this.hasDragged = false
    this.dragVelocity = 0
    this.momentum = 0
  }

  move = event => {
    if (!this.dragging) return
    const x = event.touches?.[0].clientX ?? event.clientX
    if (Math.abs(x - this.startX) > 5) this.hasDragged = true
    const delta = this.startX - x
    const frameDelta = this.lastX - x
    this.dragVelocity = lerp(this.dragVelocity, frameDelta * .026, .42)
    this.scroll.target = this.startTarget + delta * .026
    this.lastX = x
  }

  up = event => {
    if (!this.dragging) return
    const clientX = event.changedTouches?.[0]?.clientX ?? event.clientX
    if (!this.hasDragged && Number.isFinite(clientX)) this.selectAt(clientX)
    if (this.hasDragged) this.momentum = this.dragVelocity * 11
    this.dragging = false
  }

  selectAt(clientX) {
    if (!this.options.onItemClick || !this.cards?.length) return
    const bounds = this.container.getBoundingClientRect()
    const localX = clientX - bounds.left
    let closest = null
    let closestDistance = Infinity
    this.cards.forEach(card => {
      const screenX = bounds.width / 2 + (card.plane.position.x / this.viewport.width) * bounds.width
      const distance = Math.abs(screenX - localX)
      if (distance < closestDistance) {
        closest = card
        closestDistance = distance
      }
    })
    if (!closest || closestDistance > bounds.width * .22) return
    const index = closest.index % this.options.items.length
    this.options.onItemClick(this.options.items[index], index)
  }

  key = event => {
    if (event.key === 'ArrowRight') this.scroll.target += this.options.scrollSpeed * 2
    if (event.key === 'ArrowLeft') this.scroll.target -= this.options.scrollSpeed * 2
  }

  bind() {
    window.addEventListener('resize', this.resize)
    this.container.addEventListener('wheel', this.wheel, { passive: false })
    this.container.addEventListener('mousedown', this.down)
    window.addEventListener('mousemove', this.move)
    window.addEventListener('mouseup', this.up)
    this.container.addEventListener('touchstart', this.down, { passive: true })
    window.addEventListener('touchmove', this.move, { passive: true })
    window.addEventListener('touchend', this.up)
    this.container.addEventListener('keydown', this.key)
  }

  update = () => {
    if (!this.dragging && Math.abs(this.momentum) > .001) {
      this.scroll.target += this.momentum
      this.momentum *= .91
    }
    this.scroll.current = lerp(this.scroll.current, this.scroll.target, this.scroll.ease)
    const direction = this.scroll.current > this.scroll.last ? 'right' : 'left'
    this.cards?.forEach(card => card.update(this.scroll, direction))
    this.renderer.render({ scene: this.scene, camera: this.camera })
    this.scroll.last = this.scroll.current
    this.raf = requestAnimationFrame(this.update)
  }

  destroy() {
    cancelAnimationFrame(this.raf)
    window.removeEventListener('resize', this.resize)
    this.container.removeEventListener('wheel', this.wheel)
    this.container.removeEventListener('mousedown', this.down)
    window.removeEventListener('mousemove', this.move)
    window.removeEventListener('mouseup', this.up)
    this.container.removeEventListener('touchstart', this.down)
    window.removeEventListener('touchmove', this.move)
    window.removeEventListener('touchend', this.up)
    this.container.removeEventListener('keydown', this.key)
    this.gl.canvas.remove()
  }
}

export default function CircularGallery({
  items,
  bend = 3,
  textColor = '#fff',
  borderRadius = .05,
  font = '600 34px Manrope',
  scrollSpeed = 2,
  scrollEase = .05,
  onItemClick
}) {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current || !items?.length) return
    const app = new GalleryApp(containerRef.current, {
      items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, onItemClick
    })
    return () => app.destroy()
  }, [items, bend, textColor, borderRadius, font, scrollSpeed, scrollEase, onItemClick])

  return (
    <div
      ref={containerRef}
      className="circular-gallery"
      tabIndex={0}
      role="region"
      aria-label="弧形项目画廊，可拖动、滚动或使用左右方向键浏览"
    />
  )
}
