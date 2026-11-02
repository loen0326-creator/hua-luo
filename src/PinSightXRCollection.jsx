import React from 'react'
import './pinsight-xr-editorial.css'

// Exact original exports; dimensions checked against the PNG files.
const assets = {
  hero: ['new3333内容修改 布局修改.png', '导师与同伴的反馈，保留在对应的作品位置。', 2592, 2048],
  launcher: ['log in 1.png', '系统入口 · 选择 PinSight', 2561, 2048],
  launch: ['log in 2.png', '启动 · 进入评审工具', 2560, 2048],
  login: ['log In 3.png', '身份 · 学生入口与登录', 2560, 2048],
  create: ['Frame 1.png', '记录 · 创建本次评审笔记', 2560, 2048],
  session: ['log in 7.png', 'Session Info · 设备就绪与参与者邀请', 2560, 2073],
  tags: ['log in 13.png', 'Note Tags · 完成四类标签选择', 2560, 2048],
  tagsEmpty: ['log in 10.png', '01 / 尚未选择', 2560, 2048],
  tagsSource: ['log in 6.png', '02 / 来源：Peer 02', 2560, 2048],
  tagsPriority: ['log in 11.png', '03 / 优先级：Fix Now', 2560, 2048],
  tagsCategory: ['log in 12.png', '04 / 类别：Hierarchy', 2560, 2048],
  transition: ['log in 8.png', '启动过渡', 2560, 2048],
  backgroundNote: ['Frame 2.png', '创建记录 · 场景底图', 2560, 2048],
  backgroundLogin: ['log In 4.png', '登录 · 场景底图', 2560, 2048],
  backgroundSession: ['log in 9.png', '会话准备 · 场景底图', 2561, 2048],
  backgroundTags: ['log in 14.png', '标签设置 · 场景底图', 2560, 2048],
  live: ['课堂录音系统1-1.png', 'Live Feedback · 查看来源、位置与优先级，保存反馈', 2560, 2048],
  transcript: ['课堂录音系统2 new-1.png', 'Live Transcript · 呈现导师发言与同伴评论', 2576, 2064],
  ready: ['课堂录音系统1.png', '评审模式开启 · 显示设备与监听状态', 2560, 2048],
  listening: ['课堂录音系统2 new.png', '现场场景 · 保留语音入口', 2576, 2064],
  linked: ['new 111111 style.png', '位置关联 · 将反馈连接到海报图像区域', 2560, 2048],
  saved: ['new 111111 style-1.png', '反馈卡片 · 显示保存结果与反馈属性', 2560, 2048],
  overview: ['new22222ui design style.png', '空间概览 · 查看作品上的反馈标记', 2576, 2064],
  detail: ['new22222ui design style-1.png', 'Feedback Detail · 查看建议并加入修订指南', 2576, 2064],
  pen: ['new智能笔实时识别1.png', '手写输入 · 保留笔迹、近期标注与识别内容', 2590, 2048],
  penSummary: ['new智能笔实时识别2.png', '识别摘要 · 整合手写笔记与语音评论', 2560, 2048],
  review: ['Feedback Session Summary --17.png', '反馈回顾 · 对照作品理解问题、原因与下一步行动', 2560, 2048],
  wake: ['Ask PinSight.png', 'Ask PinSight · 语音唤醒', 2560, 2048],
  ask: ['newAsk PinSight for Revision Help -- 20.png', 'Ask PinSight · 聆听“打开我的反馈”', 2560, 2048],
  revision: ['new AI总结2-Spatial Feedback Overview --16.png', '修订概览 · 对照空间标记查看行动优先级', 2572, 2102],
  revisionClean: ['new AI总结2-Spatial Feedback Overview --16-1.png', '修订概览 · 不显示定位标签的状态', 2572, 2102],
  complete: ['new AI 总结3Feedback Session Summary --17.png', 'Critique Session Complete · 保存评审记录，同步至 Web 回顾', 2560, 2050],
}

function Shot({ name, className = '' }) {
  const [file, caption, width, height] = assets[name]
  const src = '/assets/pinsight/xr-originals/' + encodeURIComponent(file)
  return <figure className={'ps-xre-shot ' + className} data-xr-asset={name}>
    <a href={src} target="_blank" rel="noreferrer" aria-label={caption + '，打开原图查看'} title="打开完整原图">
      <img src={src} alt={caption} width={width} height={height} loading="lazy" decoding="async" />
    </a>
    <figcaption>{caption}</figcaption>
  </figure>
}
const Shots = ({ names }) => names.map(name => <Shot key={name} name={name} />)
function Heading({ number, title, children }) {
  return <header className="ps-xre-heading"><h3><span>{number}</span>{title}</h3><p>{children}</p></header>
}

export default function PinSightXRCollection() {
  return <div className="ps-xr-collection ps-xre">
    <div className="ps-xre-hero"><Shot name="hero" /></div>
    <section className="ps-xre-module ps-xre-preparation" aria-label="启动与会话准备">
      <Heading number="01" title="启动与会话准备">进入评审、建立记录，再确认参与者与设备状态。</Heading>
      <div className="ps-xre-setup">
        <div className="ps-xre-entry"><Shots names={['launcher', 'launch', 'login', 'create']} /></div>
        <Shot name="session" className="ps-xre-session" />
      </div>
      <div className="ps-xre-tags">
        <div><h4>Note Tags / 反馈标签设置</h4><p>通过来源、优先级、类别及作品位置四个维度，为现场反馈添加结构化标签。</p></div>
        <Shot name="tags" />
      </div>
    </section>
    <section className="ps-xre-module ps-xre-capture" aria-label="记录现场反馈">
      <Heading number="02" title="记录现场反馈">在现场讨论过程中呈现实时反馈，使反馈内容能够被查看、确认与保存。</Heading>
      <div className="ps-xre-feature"><Shot name="live" /></div>
      <div className="ps-xre-support"><Shots names={['ready', 'listening', 'transcript']} /></div>
    </section>
    <section className="ps-xre-module ps-xre-spatial" aria-label="空间定位与 Smart Pen">
      <Heading number="03" title="空间定位与 Smart Pen">反馈不仅被记下，也与作品的具体位置关联。</Heading>
      <div className="ps-xre-spatial-lead"><h4>将反馈关联到空间位置</h4><Shot name="linked" /></div>
      <div className="ps-xre-spatial-states"><div className="ps-xre-saved"><Shot name="saved" /><div><h4>反馈已创建并保存</h4><p>右下方新增 Feedback 03 卡片，以 SAVED 标记确认保存结果，并列出反馈类别、发言者、关联区域与处理优先级。</p></div></div><div className="ps-xre-pair"><Shots names={['overview', 'detail']} /></div></div>
      <div className="ps-xre-pen"><h4>Smart Pen / 手写反馈</h4><p>通过手写标注与位置指向，将反馈内容关联至具体的设计区域。</p><div className="ps-xre-pair"><Shots names={['pen', 'penSummary']} /></div></div>
    </section>
    <section className="ps-xre-module ps-xre-review" aria-label="现场反馈回顾与评审结束">
      <Heading number="04" title="现场反馈回顾与评审结束">回到反馈内容，梳理修改行动，并保存本次评审。</Heading>
      <div className="ps-xre-review-grid"><Shots names={['wake', 'ask', 'revision', 'revisionClean', 'review', 'complete']} /></div>
    </section>
  </div>
}
