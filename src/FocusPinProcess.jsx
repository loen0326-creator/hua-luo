import React from 'react'
import './focuspin-process.css'

const asset = `${window.location.protocol === 'file:' ? './public/' : '/'}projects/focuspin/`
function Heading({ n, label, title, children }) {
  return <header className="fpp-heading"><p className="fpp-kicker">{n} / {label}</p><h2>{title}</h2><p className="fpp-intro">{children}</p></header>
}
function Material({ kind, name, children }) {
  return <div className={`fpp-window fpp-${kind}`}><div className="fpp-window-bar"><i aria-hidden="true" /><span>{name}</span></div><div className="fpp-window-content">{children}</div></div>
}
function Paper() { return <div className="fpp-paper" aria-hidden="true"><b /><i /><i /><i /><em /><i /><i /></div> }
function Thumbnails() { return <div className="fpp-thumbnails" aria-hidden="true"><i><b /></i><i><b /></i><i><b /></i></div> }
function Canvas() { return <div className="fpp-canvas" aria-hidden="true"><aside><i /><i /><i /></aside><div><b /><span>→</span><b /></div></div> }

export function FocusPinOverview() {
  return <section className="fp-process" id="fp-overview">
    <Heading n="01" label="PROJECT OVERVIEW" title="项目概览">一个帮助设计学生重新进入当前任务的轻量化工具。FocusPin 关注分散材料背后的任务语境，而不只是窗口或文件本身。</Heading>
    <figure className="fpp-material-figure">
      <div className="fpp-figure-heading"><h3>一个任务，多个分散的工作环境。</h3><span>WORK CONTEXT</span></div>
      <div className="fpp-material-map">
        <svg className="fpp-relations" viewBox="0 0 1200 660" preserveAspectRatio="none" aria-hidden="true"><path d="M290 130H380L490 265M850 145H795L710 265M350 445H390L490 370M925 430H815L710 370M600 500V385" /><circle cx="600" cy="395" r="4" /></svg>
        <Material kind="brief" name="Assignment Brief"><Paper /><p>目标 / 任务要求 / 交付内容</p></Material>
        <Material kind="notes" name="Lecture Notes"><div className="fpp-note-lines" aria-hidden="true"><i /><i /><i /><i /></div><p>课堂要点与讨论记录</p></Material>
        <div className="fpp-current"><span>CURRENT TASK</span><strong>当前设计任务</strong><p>材料分散，工作目标相同。</p></div>
        <Material kind="references" name="Visual References"><Thumbnails /><p>构图、视觉与交互参考</p></Material>
        <Material kind="screenshots" name="Screenshots"><div className="fpp-capture" aria-hidden="true"><i /><b /><i /></div><p>临时截取的工作线索</p></Material>
        <Material kind="figma" name="Figma"><Canvas /><p>设计文件与原型工作区</p></Material>
      </div>
      <figcaption>工作材料与当前任务的关系示意。</figcaption>
    </figure>
    <ol className="fpp-overview-points">{[
      ['项目背景','多个工作材料共同支持一个复杂设计任务。'],
      ['设计目标','在工作中断后，重新找到当前任务的工作上下文。'],
      ['设计方向','提供轻量化的任务上下文支持，而非另一套完整的任务管理平台。'],
    ].map(([title,copy],i)=><li key={title}><span className="fpp-kicker">0{i+1}</span><h3>{title}</h3><p>{copy}</p></li>)}</ol>
    <p className="fpp-direction"><span>项目起点</span>从“材料在哪里”，进一步追问“怎样接回刚才的工作思路”。</p>
  </section>
}

function WorkScene() {
  return <figure className="fpp-scene-figure">
    <div className="fpp-scene-context"><span>同一个设计任务</span><span>工作环境变化 / 自我观察示意</span></div>
    <div className="fpp-workscene">
      <div className="fpp-work-start"><header><span className="fpp-kicker">01 / IN CONTEXT</span><h3>正常工作</h3></header><div className="fpp-scene-stage"><div className="fpp-background-tabs"><span>Brief</span><span>Notes</span><span>References</span></div><div className="fpp-work-canvas"><span>Figma / 当前设计任务</span><Canvas /><div className="fpp-focus-mark">正在进行的步骤</div></div></div><p>相关材料支持当前工作，思路连续。</p></div>
      <div className="fpp-work-switch"><header><span className="fpp-kicker">02 / SWITCHING</span><h3>频繁切换</h3></header><div className="fpp-switch-stack"><Material kind="scene-brief" name="Assignment Brief"><Paper /></Material><Material kind="scene-notes" name="Lecture Notes"><div className="fpp-note-lines"><i /><i /><i /></div></Material><Material kind="scene-references" name="Visual References"><Thumbnails /></Material><Material kind="scene-shots" name="Screenshots"><div className="fpp-capture"><i /><b /></div></Material></div><p>窗口逐一来到前台，当前工作退到身后。</p></div>
      <div className="fpp-work-return"><header><span className="fpp-kicker">03 / CONTEXT LOSS</span><h3>上下文丢失</h3></header><div className="fpp-scene-stage"><div className="fpp-background-tabs"><span>Brief</span><span>Notes</span><span>References</span></div><div className="fpp-return-outline"><span>Figma / 回到同一个任务</span><Canvas /><div className="fpp-missing-step">刚才做到哪里了？</div></div></div><p>材料仍然可见，却需要重新确认工作落点。</p></div>
    </div>
    <figcaption>同一任务的三种工作状态，依据个人经历与自我观察整理。</figcaption>
  </figure>
}

function InteractionFlow() {
  const node=(x,y,w,title,sub,extra='')=><g className={`fpp-flow-node ${extra}`}><rect x={x} y={y} width={w} height="70" rx={extra==='terminal'?35:3}/><text x={x+w/2} y={y+29} textAnchor="middle">{title}<tspan x={x+w/2} dy="24">{sub}</tspan></text></g>
  return <figure className="fpp-flow-figure">
    <p className="fpp-flow-hint">左右滑动，查看完整流程与条件分支。</p>
    <div className="fpp-flow-scroll" role="region" aria-label="完整交互流程图，可左右滚动" tabIndex={0}>
    <svg className="fpp-flow-desktop" viewBox="0 0 1280 800" role="img" aria-labelledby="fpp-flow-title fpp-flow-desc">
      <title id="fpp-flow-title">任务中断与重新进入的条件流程</title><desc id="fpp-flow-desc">开始作业、明确当前任务、切换材料。若上下文未中断，继续工作并回到中断判断；若中断，出现 Context Anchor、展示任务提示。暂不选择提示时，入口保持可用；选择后恢复上下文、重新连接任务、继续原有工作。</desc>
      <defs><marker id="fpp-arrow" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0 0L7 3.5L0 7" fill="#77dcec" /></marker></defs>
      <g className="fpp-lane-label"><text x="0" y="25">01 / 正常工作</text><text x="0" y="320">02 / 任务中断</text><text x="0" y="635">03 / 任务恢复</text></g>
      <g className="fpp-lane-rule"><path d="M170 19H850M170 314H1280M170 629H1280" /></g>
      <g className="fpp-flow-path" markerEnd="url(#fpp-arrow)">
        <path d="M80 130H115" /><path d="M305 130H340" /><path d="M540 130H575" /><path d="M775 130H830" />
        <path d="M1050 130H1090" /><path d="M1175 165V245H1276V45H940V65" />
        <path d="M940 195V275H120V430" /><path d="M240 465H330" /><path d="M570 465H650" />
        <path d="M890 465H1000" /><path d="M1110 430V370H450V430" />
        <path d="M770 535V585H120V690" /><path d="M240 725H450" /><path d="M690 725H1000" />
      </g>
      {node(0,95,80,'开始','Start','terminal')}{node(115,95,190,'开始作业','Begin Assignment')}{node(340,95,200,'明确当前任务','Current Task')}{node(575,95,200,'切换工作材料','Switch Materials')}
      <g className="fpp-flow-decision"><path d="M940 65L1050 130L940 195L830 130Z"/><text x="940" y="125">上下文中断？<tspan x="940" dy="24">Context Breaks?</tspan></text></g>
      {node(1090,95,170,'继续工作','Continue Working')}
      {node(0,430,240,'上下文入口出现','Context Anchor Appears')}{node(330,430,240,'展示任务提示','Show Task Cues')}
      <g className="fpp-flow-decision"><path d="M770 395L890 465L770 535L650 465Z"/><text x="770" y="460">选择任务提示？<tspan x="770" dy="24">Select Cue?</tspan></text></g>
      {node(1000,430,220,'入口保持可用','Anchor Remains')}{node(0,690,240,'恢复上下文','Restore Context')}{node(450,690,240,'重新连接任务','Reconnect to Task')}{node(1000,690,260,'继续原有工作','Workflow Resumes','terminal')}
      <g className="fpp-flow-branch"><text x="1053" y="112">否</text><text x="960" y="230">是 / YES</text><text x="921" y="450">否 / NO</text><text x="789" y="566">是 / YES</text></g>
      <g className="fpp-flow-annotation"><text x="600" y="355">入口保持可用 · 再次展示的触发方式待确认</text><text x="15" y="795">任务恢复由用户选择触发，而不是强制切换工作。</text></g>
    </svg>
    </div>
    <figcaption>依据《Return to Task》第 15 页 Core Interaction Flow；回路保留，但原始资料未注明再次展示提示的触发方式。</figcaption>
  </figure>
}

export default function FocusPinProcess() {
  return <>
    <section className="fp-process" id="fp-discovery">
      <Heading n="02" label="PROBLEM DISCOVERY" title="切换之后，工作思路在哪里断开？">起点来自我完成设计作业时的个人经历与自我观察，而非针对其他用户开展的正式研究。</Heading>
      <WorkScene />
      <ol className="fpp-cause-chain">{[
        ['Switching','频繁切换','切换打断连续性。'],['Context Loss','思路断开','需要重建工作落点。'],['Workarounds','留下工作痕迹','依赖窗口与截图留存线索。'],['Mental Load','额外认知负担','线索累积，重新定位更费力。'],
      ].map(([en,title,copy],i)=><li key={en}><span className="fpp-cause-dot">0{i+1}</span><p className="fpp-kicker">{en}</p><h3>{title}</h3><p>{copy}</p></li>)}</ol>
      <div className="fpp-insight"><span className="fpp-kicker">CORE INSIGHT</span><h3>丢失的不是任务本身，<br />而是继续完成任务所需要的<span>上下文。</span></h3><p>如何支持用户在工作被中断后，快速重新进入当前任务？</p></div>
    </section>
    <section className="fp-process" id="fp-concepts">
      <Heading n="03" label="CONCEPT EXPLORATION" title="从任务管理，转向任务重新进入。">设计判断的变化，不是增加更多管理功能，而是缩小工具的边界：在需要继续工作时，提供恰当的线索。</Heading>
      <div className="fpp-reframe"><div><span className="fpp-kicker">初始方向 / ORGANISE</span><h3>组织任务与相关材料</h3><p>让信息更完整、更有序。</p></div><span className="fpp-reframe-arrow" aria-hidden="true">→</span><div><span className="fpp-kicker">重新定义 / RE-ENTER</span><h3>恢复当前任务的工作上下文</h3><p>让中断后的工作可以继续。</p></div></div>
      <figure className="fpp-sketch"><div className="fpp-sketch-labels"><span>01 / Task Dashboard</span><span>02 / Reminder Tool</span><span>03 / Context Support</span></div><a href={`${asset}original-concept-sketch.webp`} target="_blank" rel="noreferrer" aria-label="查看原始概念草图"><img src={`${asset}original-concept-sketch.webp`} width="1408" height="768" loading="lazy" alt="Return to Task 原始草图：Task Dashboard、Reminder Tool、Context Support 三个探索方向" /></a><figcaption>原始概念草图 / 《Return to Task》第 9 页内嵌素材。上方编号对应下方概念比较，不覆盖或改动原图；点击可查看完整原图。</figcaption></figure>
      <div className="fpp-comparison" role="table" aria-label="三个概念如何回应任务重新进入"><div className="fpp-comparison-labels" role="row"><span role="columnheader">探索方向</span><span role="columnheader">支持方式</span><span role="columnheader">对重新进入任务的支持与边界</span></div>{[
        ['01','Task Dashboard','集中组织任务与材料','提供整体概览，但范围较广，容易转向完整的任务管理。'],
        ['02','Reminder Tool','提醒用户注意当前任务','能够唤起注意，但提醒本身不足以恢复具体的工作上下文。'],
        ['03','Context Support','提供当前任务、先前步骤与材料线索','直接回应任务重新进入；以少量相关线索保持轻量。'],
      ].map(([n,title,support,judgment])=><div className={`fpp-comparison-row ${n==='03'?'is-selected':''}`} role="row" key={n}><h3 role="rowheader"><small>{n}</small>{title}</h3><p role="cell">{support}</p><p role="cell">{judgment}</p></div>)}</div>
      <div className="fpp-selection"><div><p className="fpp-kicker">选择依据 / 定性设计判断</p><p>聚焦当前任务<br />提供恢复线索<br />保持轻量与用户控制</p></div><div className="fpp-selection-result"><span>早期选定方向</span><h3>Context Anchor <b>→</b> FocusPin</h3><p>从上下文支持概念，发展为最终展示中的轻量桌面工具。</p></div></div>
    </section>
    <section className="fp-process" id="fp-flow"><Heading n="04" label="INTERACTION FLOW" title="中断之后，保留一条可选择的返回路径。">未发生中断时继续工作；需要帮助时选择线索。暂时不使用提示，也应能够保留自主工作的空间。</Heading><InteractionFlow /><p className="fpp-source-note">流程边界：此处保留早期 Context Anchor 的核心路径。最终 FocusPin 原型进一步展示任务建立、暂停与保存等状态，未将这些扩展倒推为早期流程。</p></section>
    <section className="fp-process" id="fp-mechanism">
      <Heading n="05" label="CORE MECHANISM" title="让上下文成为可以重新接起的线索。">三个机制分别回答：如何建立语境、如何保持可访问、如何支持重新进入。以下均为交互概念与信息结构示意，而非已验证的技术能力。</Heading>
      <div className="fpp-mechanism fpp-pin">
        <header><p className="fpp-kicker">01 / PIN THE CONTEXT</p><h3>将任务与材料，固定在同一语境中。</h3><p>建立任务，关联工作材料；查看并调整上下文计划，再确认进入工作。</p></header>
        <div className="fpp-pin-diagram"><div className="fpp-pin-binding"><div className="fpp-pin-materials"><span>任务要求<small>界定目标</small></span><span>参考线索<small>支持判断</small></span><span>设计文件<small>承接工作</small></span></div><div className="fpp-pin-focus"><span className="fpp-kicker">CURRENT TASK</span><h4>当前任务</h4><p>只关联此刻需要的材料</p></div><p className="fpp-binding-note">从“保存全部信息”到“建立任务关联”</p></div><div className="fpp-pin-link"><span>形成语境</span><i aria-hidden="true" /><small>原型中的上下文分析</small></div><div className="fpp-context-plan"><span className="fpp-kicker">TASK CONTEXT PLAN</span><h4>可查看、可调整的任务计划</h4><ol><li>当前步骤<span>确定工作的落点</span></li><li>计划依据<span>保留相关线索</span></li><li>关联材料<span>支持继续工作</span></li></ol><p>用户确认 → 进入工作</p></div></div>
      </div>
      <div className="fpp-mechanism fpp-stay"><header><p className="fpp-kicker">02 / STAY ANCHORED</p><h3>保持可访问，不占据工作中心。</h3><p>Floating Anchor 位于工作环境边缘；当前任务状态、暂停与保存，为后续返回留下入口。</p></header><div className="fpp-anchor-composition"><div className="fpp-desktop-model"><div className="fpp-window-bar"><i /><span>当前工作环境 / 位置示意</span></div><div className="fpp-desktop-work"><div className="fpp-desktop-doc"><Paper /></div><div className="fpp-desktop-design"><Canvas /></div><div className="fpp-edge-anchor"><span>Floating Anchor</span><strong>当前任务 · 当前步骤</strong><i aria-hidden="true" /></div></div></div><dl className="fpp-anchor-notes"><div><dt>工作中心</dt><dd>继续使用原有材料与设计工具。</dd></div><div><dt>边缘入口</dt><dd>任务线索保持可访问，不过度占据工作区。</dd></div><div><dt>上下文保存</dt><dd>通过暂停与保存，保留下一次返回的线索。</dd></div></dl></div></div>
      <div className="fpp-mechanism fpp-return"><header><p className="fpp-kicker">03 / SMART RETURN</p><h3>接回思路，而不只是回到窗口。</h3><p>以当前任务为中心，将过去的进度、现在的位置与下一步行动连接起来。</p></header><figure className="fpp-cue-map"><div className="fpp-cue-focus"><span className="fpp-kicker">CURRENT FOCUS / 确认目标</span><h4>当前任务</h4><p>先明确：我正在继续哪一项工作？</p></div><ol className="fpp-cue-timeline"><li className="cue-past"><span className="fpp-kicker">LAST STEP</span><h4>此前完成的步骤</h4><p>保留已经建立的工作进度</p><div className="fpp-cue-progress" aria-hidden="true"><i /><i /><i /></div></li><li className="cue-now"><span className="fpp-kicker">CURRENT STEP</span><h4>当前步骤</h4><p>定位中断时的工作落点</p><strong>从这里接回工作</strong></li><li className="cue-next"><span className="fpp-kicker">NEXT ACTION</span><h4>下一步行动</h4><p>给出可以继续执行的方向</p><div className="fpp-cue-forward" aria-hidden="true">→</div></li></ol><div className="fpp-cue-resources"><div><span className="fpp-kicker">RELEVANT MATERIALS</span><h4>相关工作材料</h4><p>材料不是另一份清单，而是当前步骤的依据。</p></div><div className="fpp-cue-documents"><span>相关参考<small>找回判断依据</small></span><span>设计文件<small>返回工作位置</small></span></div></div><div className="fpp-cue-choice"><span>用户保留决定权</span><p>返回当前任务 <b>或</b> 调整计划</p></div><figcaption>任务线索的信息关系示意，依据最终展示文档的 Smart Return 说明；不复刻产品界面，也不表示已验证的自动恢复效果。</figcaption></figure></div>
      <div className="fpp-principles"><p className="fpp-kicker">交互原则 / RETURN TO TASK · P14</p><ul><li>降低认知负担</li><li>保持轻量化</li><li>保留用户控制</li><li>聚焦任务重新进入</li></ul></div>
    </section>
  </>
}
