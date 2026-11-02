import React from 'react'
import './focuspin-chapters.css'
import FocusPinProcess from './FocusPinProcess'

const base = `${window.location.protocol === 'file:' ? './public/' : '/'}projects/focuspin/`
const ui = {
  start: ['1', 'Start Session · 开始一个任务上下文会话', 2592, 2094],
  setup: ['2', 'New Focus Session · 明确任务并关联工作材料', 2592, 2094],
  analysis: ['3', 'Context Analysis · 原型中的上下文分析状态', 2592, 2094],
  plan: ['4', 'Task Context Plan · 当前步骤、计划依据与关联材料', 2656, 2144],
  activated: ['5', 'Session Activated · 确认当前任务与浮动入口', 2592, 2094],
  active: ['6', 'FocusPin Active · 当前任务、Step 3 of 6 与暂停操作', 2592, 2094],
  next: ['10', 'Next Step Ready · 完成当前步骤后，提示下一步', 2600, 2088],
  paused: ['11', 'Session Paused · 暂停会话并保留上下文', 2616, 2166],
  saved: ['12', 'Session Saved · 保存当前会话的任务线索', 2560, 2048],
  drift: ['7', 'Task Drift Detected · 返回当前任务，或暂时忽略', 2592, 2094],
  return: ['8', 'Re-enter Current Focus · 当前任务、上一步与下一步行动', 2592, 2134],
  restored: ['9', 'Context Restored · 恢复后继续当前工作步骤', 2600, 2088],
}
function Shot({ name, label }) {
  const [file, caption, width, height] = ui[name]
  const src = `${base}final-originals/${file}.png`
  return <figure className="fp-ui-shot"><a href={src} target="_blank" rel="noreferrer" aria-label={`查看完整原图：${label || caption}`}><img src={src} width={width} height={height} alt={label || caption} /></a><figcaption>{label || caption}</figcaption></figure>
}
function Head({ n, label, title, children }) {
  return <header className="fp-chapter-head"><p className="fp-eyebrow">{n} / {label}</p><h2>{title}</h2>{children && <p className="fp-chapter-intro">{children}</p>}</header>
}

export default function FocusPinChapters() {
  return <>
    <FocusPinProcess />
    <section className="fp-chapter fp-final" id="fp-final">
      <Head n="06" label="FINAL UI" title="将任务上下文转化为可恢复的桌面交互体验。">最终展示文档中的 12 张独立界面，按实际画面内容分组。点击图片可查看完整原图。</Head>
      <div className="fp-ui-gallery"><p className="fp-small-label">PIN THE CONTEXT / 01–05</p><div className="fp-ui-gallery-grid"><Shot name="start" label="01 / 开始会话" /><Shot name="setup" label="02 / 新建专注会话" /><Shot name="analysis" label="03 / 上下文分析" /><Shot name="plan" label="04 / 任务上下文计划" /><Shot name="activated" label="05 / 会话已激活" /><Shot name="active" label="06 / 浮动锚点" /><Shot name="drift" label="07 / FocusPin 工作中" /><Shot name="return" label="08 / 步骤完成" /><Shot name="restored" label="09 / 上下文已保存" /><Shot name="next" label="10 / 任务偏移" /><Shot name="paused" label="11 / 智能返回" /><Shot name="saved" label="12 / 上下文已恢复" /></div></div>
    </section>
    <section className="fp-chapter fp-demo" id="fp-demo"><Head n="07" label="PROJECT DEMO" title="完整体验演示。" /><figure><video controls playsInline preload="metadata" aria-label="FocusPin 完整体验演示" src={`${base}focuspin-demo.mp4`} type="video/mp4">你的浏览器不支持内嵌视频，请打开下方原始视频观看。</video><figcaption>FocusPin / 交互原型演示 <a href={`${base}focuspin-demo.mp4`} target="_blank" rel="noreferrer">打开原始视频 ↗</a></figcaption></figure></section>
    <section className="fp-chapter fp-reflection" id="fp-reflection"><Head n="08" label="REFLECTION" title="FocusPin 设计的不是更多任务记录，而是帮助用户在中断后重新找回工作思路。" /><div className="fp-reflection-list">{[
      ['设计认识','重新定义问题，决定了工具的边界。','从任务管理转向任务重新进入，使概念选择不再围绕“组织更多信息”，而是围绕“保留继续工作所需的语境”。'],
      ['交互设计中的权衡','支持工具本身，也可能成为一次中断。','轻量提示需要提供足够的任务线索，同时避免额外的操作负担。信息量、出现时机与用户控制之间仍需要谨慎平衡。'],
      ['局限与后续验证','可恢复的上下文，仍需要在实际工作中检验。','后续需要验证：线索选择是否准确、提醒时机是否适当、跨软件的任务恢复是否清晰，以及用户是否能自主控制提示与返回操作。当前不将这些方向视为已验证成果。'],
    ].map(([label,title,copy],i)=><div key={label}><p className="fp-small-label">0{i+1} / {label}</p><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
  </>
}
