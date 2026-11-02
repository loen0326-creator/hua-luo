import React from 'react'
import PinSightXRCollection from './PinSightXRCollection'
import './pinsight-web-editorial.css'

// Existing project exports, kept at their native aspect ratios.
const xrImages = [
  ['xr-live-feedback.png', '现场反馈', 2560, 2048],
  ['xr-linked-feedback.png', '反馈与作品位置关联', 2560, 2048],
  ['xr-spatial-overview.png', '空间反馈概览', 2592, 2048],
  ['xr-feedback-detail.png', '反馈详情与现场语境', 2576, 2064],
  ['smart-pen-handwriting.png', 'Smart Pen 手写标注', 2590, 2048],
  ['xr-ai-summary.png', '反馈摘要', 2560, 2048],
  ['xr-session-complete.png', 'Session Complete', 2560, 2050],
  ['xr-ask-pinsight.png', 'Ask PinSight', 2560, 2048],
  ['xr-revision-overview.png', 'Revision Overview', 2572, 2102],
]

const webImages = [
  ['web-originals/1.png', '产品首页 · 进入 PinSight 评审体验', 3840, 2758],
  ['web-originals/2.png', '登录 · 使用学生身份进入工作空间', 3840, 2318],
  ['web-originals/3.png', '工作台 · 查看项目、评审会话与修订进度', 3840, 2318],
  ['web-originals/4.png', '创建会话 · 设置评审类型并上传设计作品', 3840, 2318],
  ['web-originals/5.png', '01 / 设备连接中 · 蓝牙配对，进度 68%', 3840, 2318],
  ['web-originals/5-1.png', '02 / 连接进度 100% · 显示 Ready to Use', 3840, 2318],
  ['web-originals/6.png', '现场评审 · 空间标记与实时转录', 3840, 2318],
  ['web-originals/7.png', '修订指南 · 对照反馈位置查看优先级与行动', 3840, 2318],
]

function DesignImage({ item, primary = false }) {
  const [src, caption, width, height] = item
  return <figure className={`ps-restored-image${primary ? ' is-primary' : ''}`}>
    <div className="ps-restored-image-stage"><img src={`/assets/pinsight/${src}`} alt={caption} width={width} height={height} loading="lazy" /></div>
    <figcaption>{caption}</figcaption>
  </figure>
}

export function XRFinalShowcase() {
  return <PinSightXRCollection />
}

export function WebFinalShowcase() {
  return <div className="ps-restored-showcase is-web ps-web-editorial">
    <section className="ps-we-module">
      <header><h3><span>01</span>进入工作空间</h3><p>从工作台查看项目、评审安排与修订进度；官网与登录页提供进入路径。</p></header>
      <DesignImage item={webImages[2]} primary />
      <div className="ps-we-entry-group"><p className="ps-we-label">产品入口</p><div className="ps-we-entry"><DesignImage item={webImages[0]} /><DesignImage item={webImages[1]} /></div></div>
    </section>
    <section className="ps-we-module">
      <header><h3><span>02</span>评审会话与设备准备</h3><p>建立评审会话、上传作品，再确认 AR Glasses 的连接状态。</p></header>
      <div className="ps-we-context"><DesignImage item={webImages[3]} /><div><h4>为本次评审做好准备</h4><p>选择评审类型与日期，上传设计作品；会话预览同时呈现设备连接情况。</p></div></div>
      <div className="ps-we-pair"><DesignImage item={webImages[4]} /><DesignImage item={webImages[5]} /></div>
    </section>
    <section className="ps-we-module">
      <header><h3><span>03</span>反馈回顾与后续修改</h3><p>将现场标记与转录保留在工作界面中，再对照作品查看反馈摘要与修订行动。</p></header>
      <div className="ps-we-context ps-we-review-context"><DesignImage item={webImages[6]} /><div><h4>从现场记录到修订行动</h4><p>现场界面呈现位置标记、实时转录与讨论主题。修订指南将反馈摘要、作品位置和优先级放在一起，支持后续修改。</p></div></div>
      <div className="ps-we-guide"><h4>AI Summary &amp; Revision Action Guide</h4><DesignImage item={webImages[7]} primary /></div>
    </section>
  </div>
}

export function ProjectDemo() {
  return <section className="ps-section ps-restored-demo" id="pinsight-demo" aria-labelledby="pinsight-demo-title">
    <header><small>Project Demo</small><h2 id="pinsight-demo-title">完整体验演示</h2><p>通过项目演示视频，完整呈现 PinSight 的核心交互与使用场景。</p></header>
    <video controls playsInline preload="metadata" poster="/assets/pinsight/xr-live-feedback.png" aria-label="PinSight 完整项目演示视频">
      <source src="/assets/pinsight/video/pinsight-xr-demo.mp4" type="video/mp4" />
      您的浏览器不支持视频播放。<a href="/assets/pinsight/video/pinsight-xr-demo.mp4">打开原始项目视频</a>
    </video>
  </section>
}
