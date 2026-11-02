import React from 'react'
import './focuspin-case.css'
import FocusPinChapters from './FocusPinChapters'
import { FocusPinOverview } from './FocusPinProcess'

const hero = `${window.location.protocol === 'file:' ? './public/' : '/'}projects/focuspin/focuspin-hero-user.png`
const features = [
  ['Context Pin', '固定当前任务语境。', '在开始工作时建立当前任务与相关材料之间的关联。'],
  ['Smart Return', '快速回到工作现场。', '当工作被中断后，帮助用户重新找到之前的任务位置。'],
  ['Relevant Cues', '提供关键提示。', '呈现当前任务、先前步骤和继续工作所需的相关线索。'],
  ['Workflow Fit', '融入现有工作流程。', '以轻量化的交互形式配合现有工作环境，而不是要求用户进入另一套完整的任务管理系统。'],
]

export default function FocusPinCase() {
  return <article className="focuspin-case" id="case-focuspin">
    <div className="fp-wrap">
      <a className="fp-back" href="#projects">← 返回项目目录</a>
      <section className="fp-hero" aria-labelledby="fp-title">
        <div className="fp-hero-copy">
          <p className="fp-eyebrow">00 / FOCUSPIN</p>
          <h1 id="fp-title">Focus<span>Pin</span></h1>
          <h2>重新找回被中断的工作思路。</h2>
          <p className="fp-product-type">Task-Context Support Tool</p>
          <p className="fp-description">FocusPin 是一款轻量化任务上下文支持工具，旨在帮助设计学生在频繁切换资料和工作软件后，重新找到当前任务的工作进度、相关线索及下一步行动。</p>
        </div>
        <figure className="fp-product">
          <a href={hero} target="_blank" rel="noreferrer" aria-label="查看 FocusPin 产品主视觉原图"><img src={hero} width="3030" height="2188" fetchPriority="high" alt="FocusPin 笔记本主视觉：通过 Re-enter Current Focus 面板回到当前任务" /></a>
          <figcaption><span>FocusPin / Re-enter Current Focus</span><span>设计概念 · 交互原型</span></figcaption>
        </figure>
        <div className="fp-key-features" aria-labelledby="fp-features-title">
          <h2 id="fp-features-title">核心特征 <span>KEY FEATURES</span></h2>
          <ol className="fp-features">{features.map(([title, copy, detail], i) => <li key={title}><span className="fp-feature-no">0{i + 1}</span><h3>{title}</h3><div><strong>{copy}</strong><p>{detail}</p></div></li>)}</ol>
        </div>
      </section>

      <FocusPinOverview />
      <FocusPinChapters />
      <footer className="fp-footer"><a href="#projects">← 返回项目目录</a><a href="#case-pinsight">下一项目 / PinSight ↗</a></footer>
    </div>
  </article>
}
