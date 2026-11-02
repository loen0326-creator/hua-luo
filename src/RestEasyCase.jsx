import React, { useEffect, useState } from 'react'

const asset = name => `${window.location.protocol === 'file:' ? './public/' : '/'}${name}`
const restAsset = name => asset(`projects/rest-easy/${name}`)

const restImages = {
  cover: asset('project-rest-web.svg'),
  heroSleepProduct: restAsset('rest-easy-hero-sleep-product.png'),
  formSketchHd: restAsset('rest-easy-form-sketch-hd.png'),
  structureSketchHd: restAsset('rest-easy-structure-sketch-hd.png'),
  whaleReference01Hd: restAsset('rest-easy-whale-reference-01-hd.png'),
  whaleReference02Hd: restAsset('rest-easy-whale-reference-02-hd.png'),
  whaleReference03Hd: restAsset('rest-easy-whale-reference-03-hd.png'),
  sleepScene: restAsset('sleep-product-scene.webp'),
  sketches: restAsset('product-sketches.webp'),
  printing: restAsset('printing-process.webp'),
  whitePrototype: restAsset('white-prototypes.webp'),
  making: restAsset('prototype-making.webp'),
  blackPrototype: restAsset('black-prototypes.webp'),
  prototypeBlackPrimary: restAsset('prototype/black-prototype-primary.png'),
  prototypeBlackAngle: restAsset('prototype/black-prototype-angle.png'),
  prototypeManualDetail: restAsset('prototype/manual-refinement-detail.png'),
  prototypeManualPrimary: restAsset('prototype/manual-refinement-primary.png'),
  prototypeWhitePrimary: restAsset('prototype/white-prototype-primary.png'),
  prototypeWhiteAngle: restAsset('prototype/white-prototype-angle.png'),
  prototypePrintingPrimary: restAsset('prototype/printing-process-primary.png'),
  prototypePrintingReference: restAsset('prototype/printing-equipment-reference.png'),
  finalProduct: restAsset('final-product-render.webp'),
  exploded: restAsset('exploded-structure.webp'),
  explodedHd: restAsset('rest-easy-exploded-view-hd.png'),
  finalProductViewsPrimary: restAsset('final-product-views-primary.png'),
  finalProductView01: restAsset('final-product-view-01.png'),
  finalProductView02: restAsset('final-product-view-02.png'),
  finalProductView03: restAsset('final-product-view-03.png'),
  finalProductView04: restAsset('final-product-view-04.png'),
  finalExperienceSupine: restAsset('final-experience-supine.png'),
  finalExperienceSide: restAsset('final-experience-side.png'),
  wearing: restAsset('wear-use-test.webp'),
  // TODO: Replace with high-resolution original asset.
  formSketchTemp: restAsset('temp/rest-easy-form-sketch-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  formInspirationClean: restAsset('temp/rest-easy-form-inspiration-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  formStructureClean: restAsset('temp/rest-easy-form-structure-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  formSketchClean: restAsset('temp/rest-easy-form-sketch-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  printingTemp: restAsset('temp/rest-easy-printing-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  printingClean: restAsset('temp/rest-easy-printing-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  whiteModelTemp: restAsset('temp/rest-easy-white-model-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  whiteModelClean: restAsset('temp/rest-easy-white-model-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  makingTemp: restAsset('temp/rest-easy-making-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  makingClean: restAsset('temp/rest-easy-making-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  blackModelTemp: restAsset('temp/rest-easy-black-model-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  blackModelClean: restAsset('temp/rest-easy-black-model-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  productFocusTemp: restAsset('temp/rest-easy-product-focus-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  productHeroTemp: restAsset('temp/rest-easy-product-hero-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  heroProductClean: restAsset('temp/rest-easy-hero-product-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  finalProductTemp: restAsset('temp/rest-easy-final-product-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  finalProductClean: restAsset('temp/rest-easy-final-product-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  explodedTemp: restAsset('temp/rest-easy-exploded-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  explodedClean: restAsset('temp/rest-easy-exploded-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  wearingEarTemp: restAsset('temp/rest-easy-wearing-ear-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  wearingEarClean: restAsset('temp/rest-easy-wearing-ear-clean-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  wearingSideTemp: restAsset('temp/rest-easy-wearing-side-temp.jpg'),
  // TODO: Replace with high-resolution original asset.
  wearingBlackClean: restAsset('temp/rest-easy-wearing-black-clean-temp.jpg'),
  wearingWhiteSideHd: restAsset('wearing-check-white-side.png'),
  wearingEarCloseHd: restAsset('wearing-check-ear-close.png'),
  wearingBlackSideHd: restAsset('wearing-check-black-side.png'),
  surveySleep01: restAsset('research/survey-sleep-01.png'),
  surveySleep02: restAsset('research/survey-sleep-02.png'),
  surveySleep03: restAsset('research/survey-sleep-03.png'),
  surveySleep04: restAsset('research/survey-sleep-04.png'),
  personaPhoto: restAsset('research/persona-portrait.png'),
  latentClusterGroundTruth: asset('rest-easy-assets/latent-cluster-ground-truth.png'),
  clusterOutput: restAsset('temp/rest-easy-cluster-output-temp.webp'),
  productAngles: restAsset('temp/rest-easy-product-angles-temp.webp'),
  ...Object.fromEntries(Array.from({ length: 6 }, (_, index) => [
    `storyboard${index + 1}`,
    restAsset(`temp/rest-easy-storyboard-${String(index + 1).padStart(2, '0')}-temp.webp`),
  ])),
}

const restSections = [
  ['00', '项目封面', '#rest-cover'],
  ['01', '调研发现', '#rest-research'],
  ['02', '挑战与机会', '#rest-opportunity'],
  ['03', '音频策略', '#rest-audio'],
  ['04', 'AI 体验流程', '#rest-ai-flow'],
  ['05', '形态探索', '#rest-form'],
  ['06', '实体原型', '#rest-prototype'],
  ['07', '最终体验', '#rest-final'],
  ['08', '项目反思', '#rest-reflection'],
]

function RestEyebrow({ no, label }) {
  return (
    <div className="rest-section-eyebrow">
      <span>{no}</span>
      <small>{label}</small>
    </div>
  )
}

function RestImage({ src, alt, caption, className = '', onOpen }) {
  return (
    <figure className={`rest-image-frame ${className}`}>
      <button type="button" onClick={() => onOpen(src, alt)} aria-label={`放大查看：${alt}`}>
        <img src={src} alt={alt} />
      </button>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

function RestStep({ children, tone = 'default' }) {
  return <span className={`rest-flow-step rest-flow-step-${tone}`}>{children}</span>
}

function RestArrow({ vertical = false }) {
  return <span className={vertical ? 'rest-arrow rest-arrow-vertical' : 'rest-arrow'} aria-hidden="true">→</span>
}

function RestNativeTechVisual() {
  return (
    <div className="rest-native-tech-viz" aria-label="音频生成与聚类分布重绘">
      <div className="rest-native-model-flow">
        {['原始音频', '编码器', '瓶颈层', '解码器', '音频生成'].map((item, index) => (
          <React.Fragment key={item}>
            <b>{item}</b>
            {index < 4 && <i aria-hidden="true">→</i>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

function AudioItem({ title, meta, copy, no, wave = 0 }) {
  return (
    <article className="rest-audio-item">
      <header>
        <i>{no}</i>
        <span>{meta}</span>
      </header>
      <div className={`rest-a03-wave rest-a03-wave-${wave}`} aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => <b key={index} />)}
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </article>
  )
}

function RestFinding({ no, title, copy, implication }) {
  return (
    <article>
      <span>{no}</span>
      <h3>{title}</h3>
      <p>{copy}</p>
      <small>{implication}</small>
    </article>
  )
}

function ClusterDots() {
  const groups = [
    ['noise', 8], ['light', 10], ['classical', 9], ['asmr', 7], ['brain', 8],
  ]
  let index = 0
  return (
    <div className="rest-cluster" aria-label="生成音频类别分布示意">
      {groups.map(([type, count], groupIndex) => (
        <div className={`rest-cluster-group rest-cluster-${type}`} key={type}>
          {Array.from({ length: count }).map(() => {
            index += 1
            return <span key={`${type}-${index}`} style={{ '--i': index, '--g': groupIndex }} />
          })}
          <strong>{type === 'noise' ? '白噪音' : type === 'light' ? '轻音乐' : type === 'classical' ? '古典音乐' : type === 'asmr' ? 'ASMR' : '脑波音乐'}</strong>
        </div>
      ))}
    </div>
  )
}

function AutoencoderFigure() {
  const sources = [
    { name: '小睡眠', en: 'Small Sleep', material: 'Indulgence · Heart Pieces · Night Dream' },
    { name: '睡眠时间', en: 'Sleep Time', material: 'Vitality · Serenity I · Suis-moi' },
    { name: '睡得更好', en: 'Sleep Better', material: 'Air · Adelita · Night Sky' },
    { name: '荒野之旅', en: 'Wild Journey', material: 'Sleep Song · Cradle Song · Mystery Song' },
    { name: '晚安睡眠', en: 'Good Night Sleep', material: 'Sleepy · Moonlight · Lights Off' },
  ]
  const encoderLayers = [
    { x: 330, w: 52, h: 290, nodes: 5 },
    { x: 398, w: 47, h: 218, nodes: 4 },
    { x: 462, w: 42, h: 150, nodes: 3 },
    { x: 522, w: 37, h: 92, nodes: 3 },
  ]
  const decoderLayers = encoderLayers.map((layer, index) => ({
    ...layer,
    x: 842 + index * 62,
    h: encoderLayers[encoderLayers.length - 1 - index].h,
    nodes: encoderLayers[encoderLayers.length - 1 - index].nodes,
  }))
  const centerY = 242
  const plane = ({ x, w, h }) => `${x - w / 2},${centerY - h / 2 + 12} ${x + w / 2},${centerY - h / 2} ${x + w / 2},${centerY + h / 2 - 12} ${x - w / 2},${centerY + h / 2}`
  const waveform = (y, phase = 0, amplitude = 18) => Array.from({ length: 46 }, (_, i) => {
    const x = 1110 + i * 4.7
    const height = 5 + Math.abs(Math.sin((i + phase) * .83) * amplitude) + ((i * 7 + phase) % 8)
    return <line key={`${y}-${i}`} x1={x} x2={x} y1={y - height / 2} y2={y + height / 2} />
  })
  return (
    <figure className="rest-a04-model-figure">
      <h4 className="rest-a04-figure-title">把声音压缩为可生成的潜在表示。</h4>
      <figcaption><span>FIG.01</span><strong>自编码器模型架构</strong><small>Autoencoder Architecture</small></figcaption>
      <svg viewBox="0 35 1360 455" role="img" aria-label="原始声音数据经过多层编码器压缩为潜在表示，再经多层解码器生成多个音频候选">
        <path className="rest-a04-model-axis" d="M270 242 H562 M704 242 H818 M1080 242 H1100" />
        <g className="rest-a04-stage-index">
          <text x="150" y="68" textAnchor="middle">01 INPUT</text>
          <text x="424" y="68" textAnchor="middle">02 ENCODE</text>
          <text x="633" y="68" textAnchor="middle">03 LATENT</text>
          <text x="934" y="68" textAnchor="middle">04 DECODE</text>
          <text x="1202" y="68" textAnchor="middle">05 OUTPUT</text>
        </g>
        <g className="rest-a04-raw-sources">
          {sources.map((source, i) => (
            <g key={source.en} transform={`translate(36 ${108 + i * 62})`}>
              <text x="0" y="0"><tspan>{source.name}</tspan><tspan x="0" dy="15">{source.en}</tspan></text>
              <path d={`M102 0 ${Array.from({ length: 26 }, (_, n) => `L${105 + n * 5.8} ${Math.sin((n + i * 1.7) * 1.24) * (6 + i * 1.3)}`).join(' ')}`} />
              <text className="is-material" x="102" y="22">{source.material}</text>
            </g>
          ))}
        </g>
        {encoderLayers.map(layer => (
          <g className="rest-a04-network-slab is-encoder" key={`encoder-${layer.x}`}>
            <polygon points={plane(layer)} />
            {Array.from({ length: layer.nodes }, (_, i) => {
              const y = centerY - layer.h * .31 + (i * layer.h * .62) / Math.max(1, layer.nodes - 1)
              return <circle key={i} cx={layer.x} cy={y} r="4.8" />
            })}
          </g>
        ))}
        <g className="rest-a04-layer-links">
          <path d="M352 142 L375 168 M352 208 L375 218 M352 275 L375 267 M352 342 L375 316" />
          <path d="M417 178 L439 198 M417 221 L439 228 M417 264 L439 257 M417 307 L439 286" />
          <path d="M477 206 L499 218 M477 242 L499 242 M477 278 L499 266" />
          <path d="M533 220 L576 230 M533 242 L576 242 M533 264 L576 254" />
        </g>
        <g className="rest-a04-latent">
          <rect x="562" y="186" width="142" height="112" rx="7" />
          {[[590,211],[624,207],[665,219],[603,244],[640,246],[678,266],[592,276]].map(([x,y], i) => <circle key={i} cx={x} cy={y} r="5.4" />)}
          <text x="633" y="321" textAnchor="middle">输入声音的压缩表示</text>
        </g>
        <g className="rest-a04-layer-links">
          <path d="M704 226 L820 217 M704 242 L820 242 M704 258 L820 267" />
        </g>
        {decoderLayers.map(layer => (
          <g className="rest-a04-network-slab is-decoder" key={`decoder-${layer.x}`}>
            <polygon points={plane(layer)} />
            {Array.from({ length: layer.nodes }, (_, i) => {
              const y = centerY - layer.h * .31 + (i * layer.h * .62) / Math.max(1, layer.nodes - 1)
              return <circle key={i} cx={layer.x} cy={y} r="4.8" />
            })}
          </g>
        ))}
        <g className="rest-a04-wave-output">
          <text x="1102" y="134"><tspan>白噪音</tspan><tspan x="1102" dy="14">White Noise</tspan></text>{waveform(166, 1, 22)}
          <text x="1102" y="231"><tspan>古典音乐</tspan><tspan x="1102" dy="14">Classical Music</tspan></text>{waveform(263, 5, 17)}
          <text x="1102" y="328"><tspan>轻音乐</tspan><tspan x="1102" dy="14">Light Music</tspan></text>{waveform(360, 9, 13)}
        </g>
        <g className="rest-a04-model-labels">
          <text x="150" y="452" textAnchor="middle"><tspan>原始声音数据</tspan><tspan x="150" dy="20">Raw Data Collection</tspan></text>
          <text x="422" y="452" textAnchor="middle"><tspan>编码器</tspan><tspan x="422" dy="20">Encoder</tspan></text>
          <text className="is-latent" x="633" y="452" textAnchor="middle"><tspan>潜在表示</tspan><tspan x="633" dy="20">Latent Representation</tspan></text>
          <text x="933" y="452" textAnchor="middle"><tspan>解码器</tspan><tspan x="933" dy="20">Decoder</tspan></text>
          <text x="1202" y="452" textAnchor="middle"><tspan>生成音频候选</tspan><tspan x="1202" dy="20">Generated Candidates</tspan></text>
        </g>
      </svg>
      <p>将输入声音编码为潜在表示，再通过解码器生成多个声音候选。</p>
    </figure>
  )
}

function LatentClusterFigure() {
  return (
    <figure className="rest-a04-cluster-figure">
      <h4 className="rest-a04-figure-title">不同声音材料在潜在空间中呈现出不同的分布区域。</h4>
      <figcaption><span>FIG.02</span><strong>潜在空间样本分布</strong><small>Latent Space Sample Distribution · Cluster Distribution</small></figcaption>
      <div className="rest-a04-cluster-layout">
        <div className="rest-a04-cluster-groundtruth" role="img" aria-label="依据原项目输出重绘的五类声音样本潜在空间分布">
          <svg className="rest-a04-cluster-texture" viewBox="0 0 1046 896" aria-hidden="true">
            <defs>
              <filter id="rest-cluster-remove-white" colorInterpolationFilters="sRGB">
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  -.24 -.24 -.24 1 0" />
              </filter>
            </defs>
            <image href={restImages.latentClusterGroundTruth} width="1046" height="896" filter="url(#rest-cluster-remove-white)" preserveAspectRatio="xMidYMid meet" />
          </svg>
          <span className="is-asmr"><b>ASMR</b><small>ASMR</small></span>
          <span className="is-white"><b>白噪音</b><small>White Noise</small></span>
          <span className="is-classical"><b>古典音乐</b><small>Classical Music</small></span>
          <span className="is-brain"><b>脑波音乐</b><small>Brainwave Music</small></span>
          <span className="is-light"><b>轻音乐</b><small>Light Music</small></span>
        </div>
        <aside>
          <span>如何阅读 / How to Read</span>
          <p>五类声音样本在潜在表示中的相对分布。</p>
          <dl>
            <div><dt>01</dt><dd><b>样本</b><small>每个圆点对应一条声音样本在潜在表示中的位置。</small></dd></div>
            <div><dt>02</dt><dd><b>类别</b><small>颜色区分 ASMR、古典、白噪音、脑波与轻音乐。</small></dd></div>
            <div><dt>03</dt><dd><b>分布</b><small>点群呈现相对分区，也保留接近与过渡区域。</small></dd></div>
          </dl>
          <div className="rest-a04-key-observation"><span>核心观察 / Key Observation</span><strong>不同声音材料在潜在表示中呈现出一定的区域差异，说明模型提取的表示能够保留部分声音类型之间的特征差别。</strong></div>
          <small className="rest-a04-cluster-boundary-note">该图用于展示项目中的模型特征分布探索，不代表生成质量、分类准确率或临床效果；图中不补充原项目未说明的坐标含义与降维方法。</small>
        </aside>
      </div>
    </figure>
  )
}

function RestMiniImage({ src, alt, label, onOpen }) {
  return (
    <figure className="rest-mini-evidence">
      <button type="button" onClick={() => onOpen(src, alt)} aria-label={`放大查看：${alt}`}>
        <img src={src} alt={alt} />
      </button>
      {label ? <figcaption>{label}</figcaption> : null}
    </figure>
  )
}

export default function RestEasyCase({ nextProject }) {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    if (!lightbox) return undefined
    const handleKeyDown = event => {
      if (event.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightbox])

  const openImage = (src, title) => setLightbox({ src, title })

  return (
    <section className="project-page archive archive-rest rest-easy-case" id="case-rest-easy">
      <div className="rest-case-orb rest-case-orb-a" aria-hidden="true" />
      <div className="rest-case-orb rest-case-orb-b" aria-hidden="true" />

      <div className="project-page-head shell">
        <a href="#projects">← 返回项目目录</a>
        <span><b>A03</b> 项目案例</span>
      </div>

      <section className="rest-hero shell" id="rest-cover">
        <div className="rest-hero-copy">
          <RestEyebrow no="00" label="项目封面" />
          <h1>Rest<br />Easy</h1>
          <p className="rest-hero-subtitle">AI 驱动的可穿戴睡眠体验</p>
          <p className="rest-hero-intro">
            通过生成式音频与非入耳式可穿戴设备，探索一种减少睡前内容选择负担，并重新思考睡眠场景佩戴方式的产品体验。
          </p>
          <div className="rest-tags" aria-label="项目能力标签">
            <span>AI 体验</span>
            <span>可穿戴交互</span>
            <span>实体原型</span>
          </div>
        </div>
        <div className="rest-hero-visual rest-hero-product-clean" aria-label="Rest Easy 产品主视觉">
          <img src={restImages.heroSleepProduct} alt="Rest Easy 睡眠场景与可穿戴产品主视觉" />
        </div>
      </section>

      <nav className="rest-case-nav shell" aria-label="Rest Easy 案例导航">
        {restSections.slice(1).map(([no, title, href]) => (
          <a href={href} key={href}><span>{no}</span>{title}</a>
        ))}
      </nav>

      <main className="rest-case-content shell">
        <section className="rest-section rest-research" id="rest-research">
          <div className="rest-section-heading">
            <RestEyebrow no="01" label="背景调研与关键发现" />
            <h2>睡前声音不仅是内容问题，也是使用场景问题。</h2>
            <p>
              Rest Easy 的早期调研围绕两个方向展开：一是用户如何寻找睡前声音内容，二是声音设备进入躺卧、侧卧和长时间佩戴场景后，会发生怎样的使用条件变化。
            </p>
          </div>

          <div className="rest-r01-section rest-r01-background" aria-label="背景资料与数据可视化">
            <div className="rest-r01-intro">
              <span className="rest-small-label">背景资料 / Background</span>
              <h3>为什么这个问题值得关注？</h3>
              <p>原始资料将睡眠问题放在压力、生活方式与睡眠状态变化中理解，并进一步观察声音内容与睡眠设备之间的关系。</p>
            </div>

            <div className="rest-r01-context-stats" aria-label="睡眠背景核心比例">
              <div><strong>27%</strong><span>世界卫生组织相关资料中记录的睡眠障碍比例</span></div>
              <div><strong>38.2%</strong><span>原资料中记录的成人失眠相关比例</span></div>
            </div>

            <div className="rest-r01-background-grid">
              <article className="rest-r01-factor-chart">
                <header>
                  <span>Primary Evidence</span>
                  <h4>影响睡眠质量的多重因素</h4>
                </header>
                <div className="rest-r01-bars">
                  {[
                    ['心理压力', 67],
                    ['熬夜习惯', 51],
                    ['饮食习惯', 34],
                    ['环境因素', 34],
                    ['身体因素', 29],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <span>{label}</span>
                      <i><b style={{ width: `${value}%` }} /></i>
                      <em>{value}%</em>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rest-r01-status-chart">
                <header><span>Global Sleep Status</span><h4>全球入睡状态</h4></header>
                <div className="rest-r01-donuts">
                  <div><i style={{ '--value': 30 }}><b>30%</b></i><span>凌晨 1 点后入睡</span></div>
                  <div><i style={{ '--value': 75 }}><b>75%</b></i><span>晚上 11 点后入睡</span></div>
                </div>
              </article>

              <article className="rest-r01-stress-chart">
                <header><span>Sources of Stress</span><h4>睡眠问题相关压力来源</h4></header>
                <div className="rest-r01-column-chart" aria-label="压力来源柱状图">
                  {[
                    ['经济', 29], ['健康', 11], ['工作', 18], ['社交', 36], ['家庭', 6],
                  ].map(([label, value]) => (
                    <div key={label}><em>{value}%</em><i style={{ height: `${value * 2.35}px` }} /><span>{label}</span></div>
                  ))}
                </div>
              </article>

              <article className="rest-r01-generation-chart">
                <header><span>Age Distribution</span><h4>失眠问题人群年代分布</h4></header>
                <div className="rest-r01-column-chart" aria-label="年代分布柱状图">
                  {[
                    ['60s', 6], ['70s', 14], ['80s', 21], ['90s', 32], ['00s', 27],
                  ].map(([label, value]) => (
                    <div key={label}><em>{value}%</em><i style={{ height: `${value * 2.6}px` }} /><span>{label}</span></div>
                  ))}
                </div>
              </article>

              <article className="rest-r01-demographics">
                <header><span>Supporting Stats</span><h4>性别比例与健康产品年龄画像</h4></header>
                <div className="rest-r01-gender">
                  <div><b>58%</b><span>女性</span></div>
                  <i><b style={{ width: '58%' }} /></i>
                  <div><b>42%</b><span>男性</span></div>
                </div>
                <div className="rest-r01-age-profile">
                  {[[48, '年龄组 01'], [28, '年龄组 02'], [24, '年龄组 03']].map(([value, label]) => (
                    <div key={label}><i style={{ '--size': value }}><b>{value}%</b></i><span>{label}</span></div>
                  ))}
                </div>
              </article>
            </div>
          </div>

          <div className="rest-r01-section rest-r01-method" aria-label="方法概览">
            <div className="rest-r01-intro rest-r01-intro-split">
              <div><span className="rest-small-label">方法概览 / Method Overview</span><h3>从背景资料到最终形态，先建立完整的项目路线图。</h3></div>
              <p>方法路径保留原项目中的资料研究、声音实验、用户信息、生成探索与产品落地过程，并按网页阅读顺序重新组织。</p>
            </div>
            <div className="rest-r01-method-path">
              {[
                ['01', '资料建立', ['背景资料', '相关研究']],
                ['02', '声音与用户', ['声音研究', '实验', '小组沟通', '声音筛选', 'Persona']],
                ['03', '生成验证', ['自动音乐生成研究', '数据采集', '模型选择', '生成任务']],
                ['04', '产品落地', ['产品方向', '实体原型', '最终形态']],
              ].map(([no, phase, steps], index) => (
                <React.Fragment key={phase}>
                  <article><span>{no}</span><h4>{phase}</h4><div>{steps.map(step => <b key={step}>{step}</b>)}</div></article>
                  {index < 3 && <i aria-hidden="true">→</i>}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="rest-r01-section rest-r01-related" aria-label="相关资料">
            <div className="rest-r01-intro rest-r01-intro-split">
              <div><span className="rest-small-label">相关资料 / Related Work</span><h3>哪些已有资料为后续设计提供了依据？</h3></div>
              <p>相关资料并非装饰性文献罗列，而是从听觉刺激、睡眠机制与生成式内容三个层面连接后续设计。</p>
            </div>
            <div className="rest-r01-related-map">
              {[
                ['01', '听觉刺激辅助', '摇篮曲、舒缓音乐、钢琴与弦乐等资料共同指向：声音可作为睡前放松场景中的外部刺激。'],
                ['02', '睡眠辅助机制', '声音还涉及调节情绪、遮蔽环境噪音，以及分散对失眠与身体不适的注意。'],
                ['03', 'AI 内容生成', '生成式音频为后续体验提供内容来源：系统可以生成候选，而不是要求用户持续搜索。'],
                ['04', '脑波与睡眠声音', '原资料比较脑波频段与不同声音材料，把脑波音乐纳入声音分析范围。'],
                ['05', '白噪音资料', '相关资料记录白噪音的稳定、连续与环境声音遮蔽特征。'],
                ['06', 'ASMR 与近距离刺激', 'ASMR 强调近距离、细小与重复的听觉刺激，构成另一类睡前声音线索。'],
              ].map(([no, title, copy]) => (
                <article key={title}><span>{no}</span><div className="rest-r01-research-glyph" aria-hidden="true"><i /><i /><i /></div><h4>{title}</h4><p>{copy}</p></article>
              ))}
            </div>
          </div>

          <div className="rest-r01-section rest-r01-audio" aria-label="声音分析">
            <div className="rest-r01-intro rest-r01-intro-split">
              <div><span className="rest-small-label">声音分析 / Audio Analysis</span><h3>五类声音材料被作为研究证据进行比较。</h3></div>
              <p>这里记录原项目中的声音频段、材料特征与听觉特点；它们是 Research Evidence，而不是最终的音频策略结论。</p>
            </div>
            <div className="rest-r01-audio-tracks">
              {[
                ['01', '白噪音', '0–20 kHz', '随机、方差均匀、无固定规律', [18, 20, 19, 21, 20, 18, 22, 19]],
                ['02', '古典音乐', '420–450 kHz（原资料记录）', '结构完整、旋律相对稳定', [9, 17, 25, 14, 28, 20, 12, 22]],
                ['03', '轻音乐', '420–530 kHz（原资料记录）', '结构较短、旋律柔和、低刺激', [8, 13, 18, 24, 17, 12, 16, 10]],
                ['04', 'ASMR', '8–18 kHz', '近距离、细小、重复与自发性刺激', [7, 26, 9, 23, 6, 28, 10, 21]],
                ['05', '脑波音乐', '0.5–13 kHz', '与特定频率和脑波感受相关', [12, 18, 24, 15, 21, 26, 17, 23]],
              ].map(([no, title, frequency, feature, wave]) => (
                <article key={title}>
                  <span>{no}</span><h4>{title}</h4><small>{frequency}</small>
                  <div className="rest-r01-wave" aria-hidden="true">{wave.map((height, index) => <i key={index} style={{ height }} />)}</div>
                  <p>{feature}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="rest-r01-section rest-r01-survey" aria-label="小规模声音偏好记录">
            <div className="rest-r01-intro rest-r01-intro-split">
              <div><span className="rest-small-label">小规模偏好记录 / User Survey</span><h3>四位对象的选择显示，睡前声音并不存在单一答案。</h3></div>
              <p>该部分为小规模早期偏好记录，用于观察不同声音方向之间的选择差异，不用于代表普遍用户结论。</p>
            </div>
            <div className="rest-r01-survey-layout">
              <div className="rest-r01-survey-images" aria-label="四种睡眠状态图像">
                {[restImages.surveySleep01, restImages.surveySleep02, restImages.surveySleep03, restImages.surveySleep04].map((src, index) => (
                  <button type="button" key={src} onClick={() => openImage(src, `睡眠状态图像 ${index + 1}`)} aria-label={`放大查看睡眠状态图像 ${index + 1}`}>
                    <img src={src} alt={`睡眠状态图像 ${index + 1}`} />
                  </button>
                ))}
              </div>
              <div className="rest-r01-preference-wrap">
                <div className="rest-r01-preference-matrix" role="table" aria-label="用户与声音类型偏好矩阵">
                  <div className="head">对象</div>{['白噪音', '轻音乐', '古典音乐', 'ASMR', '脑波音乐'].map(item => <div className="head" key={item}>{item}</div>)}
                  {[
                    ['陈宏辉', [1, 1, 1, 0, 0]],
                    ['谭毅', [0, 1, 1, 1, 0]],
                    ['彭鑫', [1, 1, 1, 0, 0]],
                    ['俞思蕾', [1, 0, 1, 0, 1]],
                  ].flatMap(([name, values]) => [
                    <div className="person" key={`${name}-person`}>{name}</div>,
                    ...values.map((value, index) => <div className={value ? 'selected' : ''} key={`${name}-${index}`}><i aria-label={value ? '选择' : '未选择'} /></div>),
                  ])}
                </div>
                <div className="rest-r01-preference-summary">
                  <span><b>4 / 4</b>古典音乐</span><span><b>3 / 4</b>白噪音</span><span><b>3 / 4</b>轻音乐</span><span><b>1 / 4</b>ASMR</span><span><b>1 / 4</b>脑波音乐</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rest-r01-section rest-r01-persona" aria-label="代表性用户画像">
            <div className="rest-r01-persona-layout">
              <RestMiniImage src={restImages.personaPhoto} alt="代表性用户画像人物照片" onOpen={openImage} />
              <div className="rest-r01-persona-main">
                <span className="rest-small-label">代表性用户画像 / Representative Persona</span>
                <h3>把声音偏好与睡眠问题放回具体使用场景。</h3>
                <h4>邓艺洁，24 岁，设计师</h4>
                <p>拥有自己的设计工作室，工作压力较高，经常熬夜；睡前会使用音乐软件、佩戴耳机，并通过雨声等声音帮助自己进入休息状态。</p>
                <small>基于项目早期睡眠习惯与声音偏好信息整理，用于聚焦具体使用情境，不代表普遍用户结论。</small>
              </div>
              <dl>
                <div><dt>用户状态</dt><dd>工作压力较高，经常熬夜，入睡困难</dd></div>
                <div><dt>使用习惯</dt><dd>睡前听音乐或环境声音，并佩戴耳机</dd></div>
                <div><dt>声音偏好</dt><dd>白噪音、轻音乐、古典音乐；也会播放雨声</dd></div>
                <div><dt>主要需求</dt><dd>减少反复选择，并重新考虑睡眠场景中的耳部接触</dd></div>
              </dl>
            </div>
          </div>

          <div className="rest-r01-section rest-r01-findings" aria-label="关键发现与设计方向">
            <div className="rest-r01-intro">
              <span className="rest-small-label">关键发现 / Key Findings</span>
              <h3>Research 如何影响后续设计？</h3>
              <p>前面的证据在这里统一收束，分别连接音频策略、AI 交互与产品形态。</p>
            </div>
            <div className="rest-r01-finding-map">
              {[
                ['01', '偏好并不统一', '不同声音方向存在选择差异。', '音频策略', 'Audio Strategy'],
                ['02', '寻找声音本身也是操作负担', '搜索、浏览、试听、比较和切换都会增加睡前主动操作。', 'AI 交互', 'AI Interaction'],
                ['03', '睡眠改变了耳机的使用条件', '躺卧、侧卧、耳部接触和枕头接触改变了设备的佩戴条件。', '形态探索', 'Form Exploration'],
              ].map(([no, title, copy, direction, english]) => (
                <article key={title}><span>{no}</span><h4>{title}</h4><p>{copy}</p><i aria-hidden="true">↓</i><strong>{direction}</strong><small>{english}</small></article>
              ))}
            </div>
            <blockquote>这些发现将问题从“设计一副睡眠耳机”，扩展为如何同时组织声音内容、交互选择与佩戴体验。</blockquote>
          </div>

          <div className="rest-r01-references" aria-label="参考资料说明">
            <span className="rest-small-label">参考资料 / References</span>
            <p><b>[01]</b> 世界卫生组织相关睡眠数据（按原作品集记录；原 PDF 未提供完整出版信息）。</p>
            <p><b>[02]</b> Journal of Caring Science 白噪音与睡眠资料线索（按原作品集记录）。</p>
            <p><b>[03]</b> Jennifer Allen 关于 ASMR 的资料线索（按原作品集记录）。</p>
            <small>用户偏好、Persona 与项目内部观察属于原项目资料，不作为外部研究结论。</small>
          </div>
        </section>

        <section className="rest-section rest-opportunity" id="rest-opportunity">
          <div className="rest-section-heading">
            <RestEyebrow no="02" label="挑战与设计机会" />
            <h2>从反复寻找声音，转向快速获得一个合适的开始。</h2>
            <p>
              Rest Easy 从睡前使用声音内容的真实摩擦出发：用户一方面需要放松，另一方面又常常被搜索、比较、试听和设备佩戴重新拉回操作状态。
            </p>
          </div>

          <div className="rest-o02-challenges" aria-label="两类核心设计挑战">
            <article className="rest-o02-challenge rest-o02-content-challenge">
              <header>
                <span className="rest-small-label">A / 内容与交互问题</span>
                <h3>睡前寻找合适声音仍然需要持续做选择</h3>
              </header>
              <div className="rest-o02-process rest-o02-current-process" aria-label="当前声音寻找流程">
                {['搜索', '浏览', '试听', '比较', '切换', '播放'].map((step, index) => (
                  <React.Fragment key={step}>
                    <div className={index < 5 ? 'is-decision' : ''}>
                      <i>{String(index + 1).padStart(2, '0')}</i>
                      <b>{step}</b>
                    </div>
                    {index < 5 && <span aria-hidden="true">→</span>}
                  </React.Fragment>
                ))}
              </div>
              <p>问题不是“没有睡眠声音”，而是用户在睡前仍然需要持续搜索、试听、比较和切换。</p>
              <footer><span>选择负担</span><i /> <small>持续主动操作</small></footer>
            </article>

            <article className="rest-o02-challenge rest-o02-wearing-challenge">
              <header>
                <span className="rest-small-label">B / 可穿戴使用问题</span>
                <h3>耳机进入睡眠环境后，使用条件发生变化</h3>
              </header>
              <div className="rest-o02-wearing-diagram" aria-label="睡眠佩戴情境变化">
                {['普通佩戴', '躺卧', '侧卧', '枕头接触', '接触关系变化'].map((step, index) => (
                  <React.Fragment key={step}>
                    <div className={index === 4 ? 'is-result' : ''}>
                      <i aria-hidden="true"><b /></i>
                      <span>{step}</span>
                    </div>
                    {index < 4 && <em aria-hidden="true" />}
                  </React.Fragment>
                ))}
              </div>
              <p>问题从“播放声音”扩展到设备与耳部、枕头和佩戴姿态之间的关系。</p>
              <footer aria-label="睡眠佩戴条件"><span>接触</span><span>压力</span><span>稳定</span><span>佩戴姿态</span></footer>
            </article>
          </div>

          <div className="rest-o02-design-challenge">
            <span className="rest-small-label">核心设计挑战 / Design Challenge</span>
            <h3>如何同时降低睡前寻找声音的操作负担，并重新思考声音设备在睡眠场景中的佩戴方式？</h3>
          </div>

          <div className="rest-o02-opportunity" aria-label="现有体验与 Rest Easy 路径对比">
            <header>
              <span className="rest-small-label">设计机会 / Design Opportunity</span>
              <h3>不是增加更多声音，而是减少寻找和比较过程。</h3>
            </header>
            <div className="rest-o02-compare-lines">
              <article>
                <div><span>现有体验</span><small>Current Experience</small></div>
                <ol>
                  {['搜索', '浏览', '比较', '试听', '切换', '播放'].map((step, index) => <li key={step}><i>{index + 1}</i><b>{step}</b></li>)}
                </ol>
              </article>
              <article className="is-rest-easy">
                <div><span>Rest Easy</span><small>Generated Starting Point</small></div>
                <ol>
                  {['选择声音方向', '生成', '快速试听', '播放'].map((step, index) => <li key={step}><i>{index + 1}</i><b>{step}</b></li>)}
                </ol>
              </article>
            </div>
          </div>

          <p className="rest-o02-statement">从反复寻找内容，转向快速生成一个合适的开始。</p>
        </section>

        <section className="rest-section rest-audio" id="rest-audio">
          <div className="rest-section-heading rest-heading-compact">
            <RestEyebrow no="03" label="音频策略" />
            <h2>声音类型不是最终答案，而是生成体验的起点。</h2>
            <p>
              01 Research 显示睡前声音偏好不存在统一答案，因此 Rest Easy 不预设一种统一的“最佳声音”，而是把声音类型作为 AI 生成体验的入口。
            </p>
          </div>

          <div className="rest-a03-material-bridge" aria-label="五类研究材料转化为四类生成入口">
            <div className="rest-a03-material-side">
              <span className="rest-small-label">前期声音研究 / Research Materials</span>
              <strong><em>5</em> 类声音材料</strong>
              <ul>
                {['白噪音', '轻音乐', '古典音乐', 'ASMR', '脑波音乐'].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="rest-a03-focus-shift" aria-hidden="true">
              <i />
              <span>体验聚焦</span>
              <i />
            </div>
            <div className="rest-a03-material-side is-output">
              <span className="rest-small-label">产品生成入口 / Generation Directions</span>
              <strong><em>4</em> 类生成方向</strong>
              <p>前期声音研究覆盖 5 类材料，后续产品体验聚焦其中 4 类作为生成入口。</p>
            </div>
          </div>

          <div className="rest-a03-direction-heading">
            <div>
              <span className="rest-small-label">声音方向系统 / Audio Direction System</span>
              <h3>选择的是生成方向，而不是一首具体歌曲。</h3>
            </div>
            <p>四类入口保留各自的声音特征，用于帮助用户先限定内容方向，再进入偏好设置与候选生成。</p>
          </div>

          <div className="rest-audio-spectrum" aria-label="四类声音生成方向">
            <AudioItem no="01" wave={1} title="白噪音" meta="稳定 / 连续" copy="以持续、低变化的声音降低环境突变带来的注意力牵引。" />
            <AudioItem no="02" wave={2} title="轻音乐" meta="柔和 / 低刺激" copy="通过较低刺激的旋律，为睡前状态提供更温和的情绪过渡。" />
            <AudioItem no="03" wave={3} title="古典音乐" meta="结构 / 节奏" copy="利用相对稳定的节奏与结构，让用户更容易形成可预期的听觉环境。" />
            <AudioItem no="04" wave={4} title="ASMR" meta="近距离 / 细节" copy="强调更近距离的听觉刺激，适合偏好细微声音反馈的用户。" />
          </div>

          <div className="rest-a03-strategy-flow" aria-label="声音策略进入 AI 体验的流程">
            <span className="rest-small-label">策略进入体验 / Strategy to Interaction</span>
            <ol>
              {['不预设唯一最佳声音', '选择声音方向', '设置偏好', 'AI 生成候选', '快速试听'].map((step, index) => (
                <li key={step} className={index > 2 ? 'is-ai' : ''}><i>{String(index + 1).padStart(2, '0')}</i><b>{step}</b></li>
              ))}
            </ol>
          </div>

          <div className="rest-a03-next">
            <p>系统不替用户定义“最健康”的声音，而是先缩小选择范围，再提供更容易试听与调整的声音候选。</p>
            <span>下一步：04 AI 体验与交互流程 <i aria-hidden="true">→</i></span>
          </div>
        </section>

        <section className="rest-section rest-ai-flow-section" id="rest-ai-flow">
          <div className="rest-section-heading">
            <RestEyebrow no="04" label="AI 体验与交互流程" />
            <h2>AI 不替用户决定声音，而是帮助缩小选择范围并生成可以快速试听的声音候选。</h2>
            <p>
              这一章重点回答 AI 如何进入体验链路：它承担内容生成、缩小选择范围与提供候选的角色，而不是医疗判断或健康诊断。
            </p>
          </div>

          <div className="rest-a04-interaction" aria-label="用户行为与系统响应的双层交互流程">
            <header>
              <span className="rest-small-label">核心交互流程 / Interaction Experience</span>
              <div className="rest-a04-legend"><i className="is-user" />用户行为<i className="is-system" />系统响应</div>
            </header>

            <div className="rest-a04-lanes">
              <div className="rest-a04-lane-label">
                <span>用户行为</span>
                <small>User Action</small>
              </div>
              <div className="rest-a04-user-flow">
                {[
                  ['01', '进入睡前场景'],
                  ['02', '选择声音方向'],
                  ['03', '设置偏好'],
                  ['04', '等待候选'],
                  ['05', '快速试听'],
                  ['06', '判断'],
                ].map(([no, step], index) => <div key={step} className={index === 5 ? 'is-decision' : ''}><i>{no}</i><b>{step}</b></div>)}
              </div>

              <div className="rest-a04-lane-label is-system">
                <span>系统响应</span>
                <small>System Response</small>
              </div>
              <div className="rest-a04-system-flow">
                {[
                  ['保持低干扰', '等待用户输入'],
                  ['接收方向', '限定声音类别'],
                  ['接收偏好', '缩小生成范围'],
                  ['AI 生成候选', '提供可试听内容'],
                  ['播放预览', '等待用户判断'],
                  ['保持决定权', '不代替用户选择'],
                ].map(([step, note], index) => <div key={step} className={index === 3 ? 'is-ai' : ''}><b>{step}</b><small>{note}</small></div>)}
              </div>
            </div>

            <div className="rest-a04-decision" aria-label="判断分支">
              <div className="rest-a04-decision-origin"><span>用户判断</span><strong>这个声音是否合适？</strong></div>
              <div className="rest-a04-branch is-loop">
                <span>不合适</span><strong>重新生成</strong><p>返回候选生成，不必重新进入大量内容搜索。</p><i aria-hidden="true">↩</i>
              </div>
              <div className="rest-a04-branch is-play">
                <span>合适</span><strong>播放</strong><p>确认候选后进入设备播放。</p><i aria-hidden="true">→</i>
              </div>
              <div className="rest-a04-low-touch">
                <span>低交互状态</span><strong>减少睡前主动操作</strong><p>播放后只保留必要的轻量调整。</p>
                <div><b>保留</b><b>跳过</b><b>更换</b></div>
              </div>
            </div>
          </div>

          <div className="rest-a04-decisions" aria-label="三项交互设计决策">
            <header><span className="rest-small-label">交互设计决策 / Interaction Decisions</span><h3>AI 的角色被限定在候选生成，而最终判断始终由用户完成。</h3></header>
            <div>
              <article><span>01</span><h4>生成候选，不替用户判断</h4><p>用户负责选择方向、试听并判断；AI 根据输入生成可供选择的候选内容。</p></article>
              <article><span>02</span><h4>重新生成，不返回内容海洋</h4><p>不满意时直接重新生成，避免再次经历搜索、浏览和反复比较。</p></article>
              <article><span>03</span><h4>确认后快速进入低交互状态</h4><p>找到合适声音后进入播放，仅保留必要操作，减少睡前主动注意。</p></article>
            </div>
          </div>

          <div className="rest-a04-tech" aria-label="AI 技术探索支持证据">
            <header>
              <div><span className="rest-small-label">技术原型与实现 / Design Prototype &amp; Implementation</span><h3>通过自编码器探索不同声音样本的潜在表示与生成。</h3></div>
            </header>
            <div className="rest-a04-science-figures">
              <AutoencoderFigure />
              <div className="rest-a04-latent-bridge" aria-label="潜在表示与聚类分布的关系">
                <span>潜在表示 / Latent Representation</span><i aria-hidden="true">↓</i><strong>观察不同声音样本在特征空间中的相对分布</strong><i aria-hidden="true">↓</i><small>FIG.02</small>
              </div>
              <LatentClusterFigure />
            </div>
          </div>

          <div className="rest-a04-digital-physical" aria-label="数字体验到实体播放关系">
            <span className="rest-small-label">数字内容 → 实体体验</span>
            <ol>
              {['用户输入', '生成声音候选', '试听与选择', 'Rest Easy 播放'].map((step, index) => <li key={step}><i>{String(index + 1).padStart(2, '0')}</i><b>{step}</b></li>)}
            </ol>
            <p>生成、试听与选择发生在声音内容中，最终声音通过 Rest Easy 进入实际睡眠场景。</p>
          </div>
        </section>

        <section className="rest-section rest-form" id="rest-form">
          <div className="rest-section-heading">
            <RestEyebrow no="05" label="形态探索" />
            <h2>为睡眠重新思考耳机的佩戴方式。</h2>
            <p>
              如果设备需要在躺卧和侧睡状态下使用，它是否仍然应该采用传统深度入耳结构？形态探索围绕这个问题展开。
            </p>
          </div>

          <div className="rest-a05-criteria" aria-label="形态探索设计准则">
            <div className="rest-a05-block-heading">
              <span>01 设计准则 / Design Criteria</span>
              <h3>从睡眠场景中的佩戴条件出发，而不是先决定产品造型。</h3>
            </div>
            <div className="rest-a05-criteria-list">
              {[
                ['01', '减少深度入耳'],
                ['02', '建立外部支撑'],
                ['03', '考虑侧卧与枕头接触'],
                ['04', '考虑长时间佩戴中的接触关系'],
              ].map(([no, label]) => (
                <div key={no}>
                  <span>{no}</span>
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="rest-a05-evidence">
            <div className="rest-a05-block-heading">
              <span>02 形态参考 / Form Reference</span>
              <h3>鲸鱼形态作为早期造型启发。</h3>
            </div>
            <div className="rest-a05-evidence-grid">
              <div className="rest-a05-inspiration-flow">
                <div className="rest-a05-form-reference-group" aria-label="鲸鱼整体形态参考">
                  <div className="rest-a05-form-reference-images" aria-label="PDF 中的鲸鱼形态局部观察">
                    <button type="button" className="is-reference-small" onClick={() => openImage(restImages.whaleReference03Hd, '鲸鱼弯曲姿态参考')} aria-label="放大查看：鲸鱼弯曲姿态参考">
                      <img src={restImages.whaleReference03Hd} alt="鲸鱼身体弯曲与尾部曲线姿态参考" />
                    </button>
                    <button type="button" className="is-reference-medium" onClick={() => openImage(restImages.whaleReference01Hd, '完整鲸鱼形态参考')} aria-label="放大查看：完整鲸鱼形态参考">
                      <img src={restImages.whaleReference01Hd} alt="水下完整鲸鱼主体参考" />
                    </button>
                    <button type="button" className="is-reference-large" onClick={() => openImage(restImages.whaleReference01Hd, '鲸鱼头部与身体前段局部参考')} aria-label="放大查看：鲸鱼头部与身体前段局部参考">
                      <img src={restImages.whaleReference01Hd} alt="鲸鱼头部与身体前段局部放大观察" />
                    </button>
                    <svg viewBox="0 0 700 430" aria-hidden="true">
                      <path d="M108 82 L430 124" />
                      <path d="M446 150 L260 334" />
                      <circle cx="108" cy="82" r="4" />
                      <circle cx="430" cy="124" r="4" />
                      <circle cx="446" cy="150" r="4" />
                      <circle cx="260" cy="334" r="4" />
                    </svg>
                  </div>
                  <div className="rest-a05-form-reference-copy">
                    <p>鲸鱼形态作为早期视觉参考，用于启发后续产品草图探索。</p>
                  </div>
                  <div className="rest-a05-reference-transition" aria-hidden="true">
                    <span>Form Reference</span>
                    <i>→</i>
                    <span>Structure Sketch</span>
                  </div>
                </div>

                <div className="rest-a05-structure-heading">
                  <span>03 结构草图 / Structure Sketch</span>
                  <h3>从外部形态进一步展开内部组件关系。</h3>
                  <p>通过爆炸式结构草图，将外壳与内部组件拆分，进一步梳理扬声器、磁体、电池电路以及整体佩戴概念之间的关系。</p>
                </div>

                <div className="rest-a05-structure-analysis">
                  <div className="rest-a05-structure-board">
                    <article className="rest-a05-structure-note is-magnet">
                      <span>02</span>
                      <h4>磁体 <small>Magnet</small></h4>
                      <p>作为声音单元内部组成部分，与扬声器结构共同纳入内部空间布局，用于探索其在整体形态中的整合关系。</p>
                    </article>
                    <article className="rest-a05-structure-note is-overall">
                      <span>04</span>
                      <em>Concept Note</em>
                      <h4>整体概念 <small>Overall Concept</small></h4>
                      <p>以创新的外置支撑方式结合鲸鱼腔体启发，探索一种非侵入、健康且舒适的耳机佩戴方案。</p>
                    </article>
                    <figure className="rest-a05-structure">
                      <button type="button" onClick={() => openImage(restImages.structureSketchHd, 'Rest Easy 声音单元与环绕壳体结构草图')} aria-label="放大查看：Rest Easy 结构草图">
                        <img src={restImages.structureSketchHd} alt="Rest Easy 声音单元与环绕壳体结构草图" />
                        <svg viewBox="0 0 870 576" aria-hidden="true">
                          <path d="M455 277 L600 214 L870 214" />
                          <path d="M267 312 L138 250 L0 250" />
                          <path d="M370 337 L578 410 L870 410" />
                          <path d="M120 390 L62 448 L0 448" />
                          <circle cx="455" cy="277" r="5" />
                          <circle cx="267" cy="312" r="5" />
                          <circle cx="370" cy="337" r="5" />
                          <circle cx="120" cy="390" r="5" />
                        </svg>
                      </button>
                    </figure>
                    <article className="rest-a05-structure-note is-speaker">
                      <span>01</span>
                      <h4>扬声器 <small>Speaker</small></h4>
                      <p>复合振膜扬声器单元，作为声音输出核心，并在草图阶段同步考虑其与周围组件的装配空间。</p>
                    </article>
                    <article className="rest-a05-structure-note is-battery">
                      <span>03</span>
                      <h4>电池电路 <small>Battery Circuit</small></h4>
                      <p>将供电与电路组件一并纳入结构草图，观察其与声音单元、外壳之间的空间关系。</p>
                    </article>
                  </div>
                  <p className="rest-a05-structure-summary">该草图用于探索外壳与内部组件之间的空间关系，并非最终工程结构。</p>
                </div>

                <div className="rest-a05-form-sketch-heading">
                  <span>04 形态草图 / Form Sketch</span>
                  <h3>通过多组草图探索产品整体体量与不同造型方向。</h3>
                </div>

                <div className="rest-a05-form-sketch-stage">
                  <RestImage
                    src={restImages.formSketchHd}
                    alt="Rest Easy 完整产品形态探索手绘稿"
                    caption="Form Sketch：多组产品造型与整体体量探索。"
                    className="rest-a05-language-sketch"
                    onOpen={openImage}
                  />
                </div>
              </div>
            </div>

            <div className="rest-a05-selected-compact" aria-label="最终形态方向">
              <div>
                <span>05 最终方向 / Selected Direction</span>
                <h3>环绕耳廓的非入耳结构</h3>
                <p>通过耳廓外部建立支撑关系，将主要结构从耳道内部转移至耳廓周围。</p>
              </div>
              <svg viewBox="0 0 360 210" aria-hidden="true">
                <path d="M84 144 C46 105 66 48 132 36 C203 23 292 53 308 104 C321 145 275 177 216 174 C164 171 122 135 84 144 Z" />
                <path d="M136 130 C118 102 135 73 169 68 C205 62 244 81 248 109 C252 135 219 151 188 145 C167 141 150 125 136 130 Z" />
                <path d="M89 144 C116 165 150 176 185 178" />
              </svg>
              <ul>
                <li>减少耳道内部持续接触</li>
                <li>利用耳廓建立支撑关系</li>
                <li>适应更长时间佩戴</li>
                <li>考虑侧卧时设备与枕头之间的关系</li>
              </ul>
            </div>
          </div>

          <p className="rest-a05-transition">
            形态方向确定后，进一步通过实体原型检查尺寸、接触区域与实际佩戴关系。
          </p>
        </section>

        <section className="rest-section rest-prototype" id="rest-prototype">
          <div className="rest-section-heading">
            <RestEyebrow no="06" label="实体原型" />
            <h2>把产品形态推进到可佩戴实体。</h2>
            <p>
              实体原型将前期形态转化为可实际观察和调整的物理模型，为后续佩戴检查提供基础。
            </p>
          </div>

          <div className="rest-a06-process">
            <div className="rest-a06-subhead">
              <span>A / 原型制作过程</span>
              <h3>从数字形态到可检查的实体模型。</h3>
            </div>

            <div className="rest-a06-process-line" aria-label="实体原型制作流程">
              {['3D 建模', '3D 打印', '白色原型', '手工调整', '黑色模型'].map((step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <strong>{step}</strong>
                </div>
              ))}
            </div>

            <div className="rest-a06-process-gallery">
              <article className="rest-a06-process-item is-printing">
                <div className="rest-a06-item-heading">
                  <span>01</span>
                  <div>
                    <h4>3D 打印 <small>3D Printing</small></h4>
                    <p>将数字模型转化为首轮实体原型。</p>
                  </div>
                </div>
                <div className="rest-a06-image-pair is-supporting-first">
                  <RestImage src={restImages.prototypePrintingPrimary} alt="3D 打印过程近景" caption="主过程图 / Primary evidence" onOpen={openImage} />
                  <RestImage src={restImages.prototypePrintingReference} alt="3D 打印设备参考" caption="辅助视角 / Supporting visual" onOpen={openImage} />
                </div>
              </article>

              <article className="rest-a06-process-item is-white-model">
                <div className="rest-a06-item-heading">
                  <span>02</span>
                  <div>
                    <h4>白色原型 <small>White Prototype</small></h4>
                    <p>观察整体体块、尺寸与基本结构关系。</p>
                  </div>
                </div>
                <div className="rest-a06-image-pair is-primary-first">
                  <RestImage src={restImages.prototypeWhitePrimary} alt="白色原型整体关系" caption="主过程图 / Primary evidence" onOpen={openImage} />
                  <RestImage src={restImages.prototypeWhiteAngle} alt="白色原型局部角度" caption="辅助视角 / Supporting visual" onOpen={openImage} />
                </div>
              </article>

              <article className="rest-a06-process-item is-making">
                <div className="rest-a06-item-heading">
                  <span>03</span>
                  <div>
                    <h4>手工调整 <small>Manual Refinement</small></h4>
                    <p>通过手工修整继续调整局部形态与表面。</p>
                  </div>
                </div>
                <div className="rest-a06-image-pair is-primary-first">
                  <RestImage src={restImages.prototypeManualPrimary} alt="手工调整模型过程" caption="主过程图 / Primary evidence" onOpen={openImage} />
                  <RestImage src={restImages.prototypeManualDetail} alt="模型上色细节" caption="局部细节 / Supporting detail" onOpen={openImage} />
                </div>
              </article>

              <article className="rest-a06-process-item is-black-model is-primary">
                <div className="rest-a06-item-heading">
                  <span>04</span>
                  <div>
                    <h4>黑色模型 <small>Black Prototype</small></h4>
                    <p>形成更接近最终产品语言的实体模型。</p>
                  </div>
                </div>
                <div className="rest-a06-image-pair is-primary-first">
                  <RestImage src={restImages.prototypeBlackPrimary} alt="黑色模型主视角" caption="主过程图 / Primary evidence" onOpen={openImage} />
                  <RestImage src={restImages.prototypeBlackAngle} alt="黑色模型补充角度" caption="辅助视角 / Supporting visual" onOpen={openImage} />
                </div>
              </article>
            </div>
          </div>

          <div className="rest-storyboard-section rest-a06-storyboard">
            <div className="rest-a06-subhead">
              <span>B / 使用场景 · Storyboard</span>
              <h3>从睡前难以放松，到选择声音、佩戴设备并进入低交互播放状态。</h3>
            </div>
            <div className="rest-storyboard-grid">
              {[
                [restImages.storyboard1, '睡前仍难以放松', '用户进入睡前场景，但注意力仍停留在入睡困难上。'],
                [restImages.storyboard3, '接触 Rest Easy', '用户获得用于睡前声音体验的实体设备。'],
                [restImages.storyboard5, '佩戴设备', '设备围绕耳廓形成外部支撑关系。'],
                [restImages.storyboard2, '睡前调整', '用户在睡前完成必要的声音与设备调整。'],
                [restImages.storyboard4, '播放偏好声音', '选择并播放更符合当下偏好的声音候选。'],
                [restImages.storyboard6, '进入休息状态', '设计目标是减少后续主动操作，让体验逐渐安静下来。'],
              ].map(([image, title, copy], index) => (
                <article key={title}>
                  <img src={image} alt={`Storyboard ${index + 1}：${title}`} />
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>

          <p className="rest-a06-transition">
            实体原型将形态探索推进到真实佩戴关系，为最终产品体验提供进一步的设计依据。
          </p>
        </section>

        <section className="rest-section rest-final" id="rest-final">
          <div className="rest-section-heading">
            <RestEyebrow no="07" label="最终产品体验" />
            <h2>从数字内容到实体设备，形成一条睡前体验链路。</h2>
            <p>
              Rest Easy 不只是一副耳机，而是一套由数字内容生成、用户选择与实体设备共同构成的睡前产品体验。
            </p>
          </div>

          <div className="rest-a07-product-stage">
            <div className="rest-a07-primary-block">
              <RestImage src={restImages.finalProductViewsPrimary} alt="Rest Easy 最终产品主视角与补充角度" caption="Final Product / 最终产品主视角" className="rest-a07-primary-visual" onOpen={openImage} />
              <div className="rest-a07-product-description">
                <span>Final Product / 最终产品</span>
                <h3>环绕耳廓的非入耳式睡眠设备。</h3>
                <p>最终产品将声音输出端与环绕耳廓的支撑结构整合在同一体量中，使实体设备成为 AI 睡前音频体验的播放端。</p>
              </div>
            </div>
            <div className="rest-a07-support-visual">
              <span className="rest-a07-kicker">Final Views / 产品多角度</span>
              <div className="rest-a07-angle-grid">
                <RestImage src={restImages.finalProductView01} alt="Rest Easy 产品角度一" caption="Angle 01" onOpen={openImage} />
                <RestImage src={restImages.finalProductView02} alt="Rest Easy 产品角度二" caption="Angle 02" onOpen={openImage} />
                <RestImage src={restImages.finalProductView03} alt="Rest Easy 产品角度三" caption="Angle 03" onOpen={openImage} />
                <RestImage src={restImages.finalProductView04} alt="Rest Easy 产品角度四" caption="Angle 04" onOpen={openImage} />
              </div>
            </div>
          </div>

          <div className="rest-a07-subhead">
            <span>Design Decisions</span>
            <h3>最终形态将睡眠场景中的佩戴条件，转化为三个相互关联的产品决策。</h3>
          </div>

          <div className="rest-a07-decisions">
            <article>
              <span>01</span>
              <h3>非入耳结构</h3>
              <p>将主要佩戴关系从深度入耳转向耳廓周围，回应睡眠状态下持续接触与侧卧使用条件。</p>
            </article>
            <article>
              <span>02</span>
              <h3>环绕耳廓支撑</h3>
              <p>利用耳廓建立设备的外部支撑关系，使最终产品与前面形态探索中的佩戴方向保持一致。</p>
            </article>
            <article>
              <span>03</span>
              <h3>紧凑硬件集成</h3>
              <p>将扬声器、电池与内部组件整合在有限体积中，使设备成为睡前数字音频体验的实体输出端。</p>
            </article>
          </div>

          <div className="rest-a07-structure">
            <div className="rest-a07-structure-copy">
              <span className="rest-a07-kicker">Product Structure</span>
              <h3>有限体积中的产品结构</h3>
              <p>结构信息作为实体体验的辅助证据：内部组件共同支持声音播放，但不取代产品体验本身成为页面主角。</p>
            </div>
            <div className="rest-a07-exploded-board">
              <div className="rest-a07-parts is-left" aria-label="左侧结构标注">
                {[
                  ['前壳|Front Shell', '形成声音前侧外壳，并与内部部件共同限定装配关系。', 14],
                  ['磁体|Magnet', '声音单元内部的磁路部分，与扬声器结构共同嵌入有限体积中。', 32],
                  ['铜环|Copper Ring', '位于声音单元附近，用于与周边元件形成配合关系。', 51],
                  ['音圈|Voice Coil', '与磁体和振膜共同构成声音输出结构。', 70],
                ].map(([item, description, y], index) => {
                  const [cn, en] = item.split('|');
                  return <span key={cn} style={{ '--part-y': `${y}%` }}><i>{String(index + 1).padStart(2, '0')}</i><b>{cn}</b><small>{en}</small><p>{description}</p></span>
                })}
              </div>
              <div className="rest-a07-exploded-visual">
                <RestImage src={restImages.explodedHd} alt="Rest Easy 高清结构爆炸图" caption="Exploded View / 产品内部组件与外壳的结构关系" className="rest-a07-exploded" onOpen={openImage} />
              </div>
              <div className="rest-a07-parts is-right" aria-label="右侧结构标注">
                {[
                  ['前腔|Front Horn', '对声音前向传播、流动外形与声路径进行组织。', 29],
                  ['电池电路|Battery Circuit', '为内部声音单元提供供电与控制空间。', 45],
                  ['扬声器|Speaker', '作为主要声音输出单元，被整合在有限体积中。', 62],
                  ['后壳|Back Shell', '完成后部包覆，并连接耳挂区域的支撑结构。', 81],
                ].map(([item, description, y], index) => {
                  const [cn, en] = item.split('|');
                  return <span key={cn} style={{ '--part-y': `${y}%` }}><i>{String(index + 5).padStart(2, '0')}</i><b>{cn}</b><small>{en}</small><p>{description}</p></span>
                })}
              </div>
              <svg className="rest-a07-exploded-callouts" viewBox="0 0 1160 1534" preserveAspectRatio="none" role="img" aria-label="产品部件与两侧说明之间的对应连线">
                {[
                  [478,238,390,238,190,215], [528,405,405,430,190,491],
                  [568,470,425,590,190,782], [608,548,455,785,190,1074],
                  [620,610,770,590,970,445], [658,681,800,710,970,690],
                  [698,775,830,835,970,951], [810,1116,885,1160,970,1243],
                ].map(([x,y,mx,my,tx,ty], index) => <g key={index}><circle cx={x} cy={y} r="4.5"/><path d={`M ${x} ${y} L ${mx} ${my} L ${tx} ${ty}`}/><circle className="is-terminal" cx={tx} cy={ty} r="3"/></g>)}
              </svg>
            </div>
          </div>

          <div className="rest-a07-use-experience">
            <div className="rest-a07-use-heading">
              <span>Wearing &amp; Final Experience / 佩戴与最终体验</span>
              <h3>从真实佩戴关系，进入完整的睡前使用情境。</h3>
              <p>先观察最终形态与耳部、睡姿之间的位置关系，再把数字内容生成、试听与实体播放放回同一条体验链路中。</p>
            </div>

          <div className="rest-a07-wearing rest-a07-experience rest-a06-wearing">
            <div className="rest-a07-combined-label"><span>Wearing Check</span><i /> <span>Final Experience</span></div>
            <div className="rest-a07-use-gallery">
              <RestImage src={restImages.wearingWhiteSideHd} alt="白色 Rest Easy 原型实际佩戴照片" caption="实际佩戴 / 耳廓周围的位置关系" className="is-wearing-main" onOpen={openImage} />
              <RestImage src={restImages.wearingEarCloseHd} alt="白色 Rest Easy 原型耳部佩戴近景" caption="佩戴近景 / 接触区域" className="is-wearing-detail" onOpen={openImage} />
              <RestImage src={restImages.wearingBlackSideHd} alt="黑色 Rest Easy 原型侧卧佩戴照片" caption="侧卧佩戴 / 设备与支撑面的位置" className="is-wearing-side" onOpen={openImage} />
              <RestImage src={restImages.finalExperienceSupine} alt="Rest Easy 仰卧睡眠使用场景" caption="最终情境 / 仰卧" className="is-context-wide" onOpen={openImage} />
              <RestImage src={restImages.finalExperienceSide} alt="Rest Easy 侧卧睡眠使用场景" caption="最终情境 / 侧卧" className="is-context-side" onOpen={openImage} />
            </div>
            <div className="rest-a07-use-notes">
              <div><span>尺寸与接触</span><p>通过真实佩戴照片观察设备与耳廓之间的大致尺寸、接触区域和位置关系。</p></div>
              <div><span>睡眠姿态</span><p>将仰卧与侧卧图像并置，呈现设备进入真实睡前情境后的佩戴关系。</p></div>
              <div><span>体验连接</span><p>佩戴检查与最终场景共同说明数字内容如何通过 Rest Easy 进入睡前使用。</p></div>
            </div>
            <div className="rest-a07-experience-flow" aria-label="最终睡前体验流程">
              {['准备睡觉', '选择声音方向', '设置偏好', 'AI 生成声音', '快速试听', '佩戴 Rest Easy', '播放', '进入低交互睡眠状态'].map((step, index) => (
              <React.Fragment key={step}>
                  <RestStep tone={index === 3 || index === 7 ? 'accent' : 'default'}>{step}</RestStep>
                  {index < 7 && <RestArrow />}
              </React.Fragment>
              ))}
            </div>
            <div className="rest-a07-system-line" aria-label="数字与实体系统关系">
              {['手机 / 数字端', 'AI 音频生成', 'Rest Easy', '用户'].map((step, index) => (
                <React.Fragment key={step}>
                  <strong>{step}</strong>
                  {index < 3 && <RestArrow />}
                </React.Fragment>
              ))}
            </div>
            <blockquote>
              从数字内容到实体设备，Rest Easy 将声音生成、选择与播放组织在同一条睡前体验中。
            </blockquote>
          </div>
          </div>
        </section>

        <section className="rest-section rest-reflection" id="rest-reflection">
          <div className="rest-section-heading">
            <RestEyebrow no="08" label="项目反思" />
            <h2>从可穿戴设备，延展至完整的 AI 睡前体验。</h2>
            <p>
              Rest Easy 最初从睡眠耳机的佩戴问题出发，随后逐渐扩展到声音内容、AI 生成、用户选择与实体设备之间的完整体验关系。这个项目的重点并不是验证某种声音能够改善睡眠，而是探索数字内容与可穿戴设备如何在睡前场景中形成更连贯的交互体验。
            </p>
          </div>

          <div className="rest-a08-explored">
            <article>
              <span>01</span>
              <h3>AI 内容体验</h3>
              <p>从固定内容寻找转向声音方向、AI 生成、快速试听与用户判断，让生成能力进入一条可理解的体验路径。</p>
              <small>声音方向 → AI 生成 → 快速试听 → 用户判断</small>
            </article>
            <article>
              <span>02</span>
              <h3>用户与 AI 的交互边界</h3>
              <p>AI 提供声音候选，用户仍然负责选择、试听和最终判断；系统不替用户进行健康或医疗决策。</p>
              <small>AI 提供候选 / 用户作出判断</small>
            </article>
            <article>
              <span>03</span>
              <h3>数字 × 实体体验</h3>
              <p>将声音内容、AI 生成、用户选择与可穿戴设备放在同一条睡前体验路径中进行设计。</p>
              <small>声音内容 + AI 生成 + 用户选择 + 可穿戴设备</small>
            </article>
          </div>

          <div className="rest-a08-boundaries">
            <div className="rest-a08-boundary-heading">
              <span>Limitations → Next Step</span>
              <h3>明确尚未验证的边界，也让下一步验证方向与之对应。</h3>
              <p>项目没有临床或长期研究证明生成声音能够改善睡眠质量；早期声音偏好记录的样本有限，也不代表更广泛用户群体。</p>
            </div>
            <div className="rest-a08-mapping">
              <article>
                <div><small>仍未验证 01</small><h4>长期佩戴与系统性人体工学关系</h4><p>实体原型尚未完成长期佩戴舒适度、不同耳部尺寸与睡姿条件下的系统验证。</p></div>
                <span aria-hidden="true">→</span>
                <div><small>下一步 01</small><h4>佩戴验证</h4><p>进一步观察不同睡姿、耳部尺寸和持续佩戴情况下的接触区域、尺度与稳定关系。</p></div>
              </article>
              <article>
                <div><small>仍未验证 02</small><h4>生成内容质量尚未系统评价</h4><p>AI 生成探索尚未建立大规模用户评价或生成质量指标。</p></div>
                <span aria-hidden="true">→</span>
                <div><small>下一步 02</small><h4>生成内容评价</h4><p>观察用户如何在声音方向、生成、试听与判断过程中评价不同生成结果。</p></div>
              </article>
              <article>
                <div><small>仍未验证 03</small><h4>低交互体验仍需真实场景观察</h4><p>当前项目尚未证明流程能够降低睡前的主动操作负担。</p></div>
                <span aria-hidden="true">→</span>
                <div><small>下一步 03</small><h4>低交互睡前体验</h4><p>进一步观察真实睡前情境中的搜索、浏览、比较、试听和切换行为。</p></div>
              </article>
            </div>
          </div>

          <blockquote className="rest-a08-final-reflection">
            对我而言，这个项目最重要的变化，是从“设计一个睡眠耳机”转向“设计声音、AI 与可穿戴设备之间的完整体验关系”。
          </blockquote>
        </section>
      </main>

      <footer className="rest-case-footer shell">
        <a href="#projects">返回项目目录</a>
        {nextProject && <a href={nextProject.href}>下一项目：{nextProject.title} ↗</a>}
      </footer>

      {lightbox && (
        <div className="rest-lightbox" role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={() => setLightbox(null)}>
          <button className="rest-lightbox-close" type="button" onClick={() => setLightbox(null)} aria-label="关闭图片">×</button>
          <img src={lightbox.src} alt={lightbox.title} onClick={event => event.stopPropagation()} />
          <span>点击空白或按 ESC 关闭</span>
        </div>
      )}
    </section>
  )
}
