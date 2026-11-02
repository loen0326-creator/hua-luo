import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, CheckCircle2, CircleDot, CircleX, Glasses, Hand, HelpCircle, MapPin, MessageCircle, MessageSquareText, Monitor, MousePointer2, PanelsTopLeft, PenTool, Sparkles, UserRound } from 'lucide-react'
import './pinsight-case.css'
import './pinsight-case-final.css'
import './pinsight-layout-v1.css'
import './pinsight-polish-v31.css'
import './pinsight-editorial-v32.css'
import './pinsight-human-edit-v37.css'
import './pinsight-macro-v41.css'
import './pinsight-layout-cleanup-v48.css'
import './pinsight-apple-restraint-v50.css'
import './pinsight-research-icons.css'
import './pinsight-research-system-final.css'
import './pinsight-problem-final-spec.css'
import './pinsight-system-final-spec.css'
import './pinsight-formation-final.css'
import './pinsight-ia-final.css'
import './pinsight-interaction-flow-v2.css'
import './pinsight-system-architecture-v2.css'
import './pinsight-final-restoration.css'
import './pinsight-reflection-final.css'
import { XRFinalShowcase, WebFinalShowcase, ProjectDemo } from './PinSightFinalShowcase'

const media = name => `/assets/pinsight/${name}`
const links = [['01','Overview','pinsight-research'],['02','Challenge','pinsight-problem'],['03','Feedback Object','pinsight-system'],['04','Interaction Flow','pinsight-xr'],['05','System Architecture','pinsight-lifecycle'],['06','XR Final Design','pinsight-web'],['07','Web Workspace','pinsight-final'],['08','Reflection','pinsight-reflection']]

function Label({ no, children }) { return <div className="ps-label"><span>{no}</span><strong>{children}</strong></div> }
function HeroMetaIcon({ type }) {
  if(type==='xr') return <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M6 3H3v3M12 3h3v3M15 12v3h-3M6 15H3v-3"/><circle cx="9" cy="9" r="2.2"/></svg>
  if(type==='pen') return <svg viewBox="0 0 18 18" aria-hidden="true"><path d="M4 14l1.1-3.8L12.7 2.6a1.4 1.4 0 012 2L7.1 12.2 4 14zM10.9 4.4l2.7 2.7M3.5 15h5"/></svg>
  return <svg viewBox="0 0 18 18" aria-hidden="true"><rect x="2.5" y="4" width="5" height="8" rx="1"/><rect x="10.5" y="6" width="5" height="8" rx="1"/><path d="M7.5 7.5h3M7.5 10.5h3"/><circle cx="9" cy="7.5" r=".7"/><circle cx="9" cy="10.5" r=".7"/></svg>
}
function SectionHead({ no, eyebrow, title, copy, statement=false, level='section' }) { const marker=eyebrow.replace(' / ',' · '); return <header className={`ps-section-head ${statement?'is-statement':''} level-${level}`}><div className="ps-section-rail"><span>{no} /</span><strong>{marker}</strong></div><div className="ps-section-intro"><h2>{title}</h2>{copy&&<p>{copy}</p>}</div></header> }
function Evidence({ src, label, title, copy, className='' }) { return <figure className={`ps-evidence ${className}`}><div className="ps-evidence-media"><img src={media(src)} alt={title} loading="eager" /></div><figcaption>{label&&<small>{label}</small>}<strong>{title}</strong>{copy&&<p>{copy}</p>}</figcaption></figure> }

function XRDemo(){
  const frameRef=useRef(null), videoRef=useRef(null)
  const [ready,setReady]=useState(false), [needsPlay,setNeedsPlay]=useState(false)
  useEffect(()=>{
    const node=frameRef.current
    if(!node) return
    const observer=new IntersectionObserver(([entry])=>{
      if(!entry.isIntersecting) return
      setReady(true)
      observer.disconnect()
    },{rootMargin:'600px 0px'})
    observer.observe(node)
    return()=>observer.disconnect()
  },[])
  useEffect(()=>{
    if(!ready||!videoRef.current) return
    videoRef.current.play().then(()=>setNeedsPlay(false)).catch(()=>setNeedsPlay(true))
  },[ready])
  const play=()=>videoRef.current?.play().then(()=>setNeedsPlay(false))
  return <figure className="ps-xr-demo" ref={frameRef}>
    <div className="ps-xr-demo-frame">
      <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={media('xr-live-feedback.png')} aria-label="PinSight XR interaction demo">
        {ready&&<source src={media('video/pinsight-xr-demo.mp4')} type="video/mp4"/>}
      </video>
      {needsPlay&&<button type="button" onClick={play} aria-label="播放 XR 交互演示"><span>播放交互演示</span></button>}
    </div>
    <figcaption><strong>XR Interaction Demo</strong><p>从现场捕捉到空间定位，完整展示反馈如何被保存并重新找到。</p></figcaption>
  </figure>
}

function HeroExperiencePreview(){
  return <figure className="ps-hero-visual ps-hero-experience">
    <img src={media('hero-20260824-final.png')} alt="PinSight 在设计课堂讲评场景中的 XR 反馈界面" width="1536" height="1152"/>
  </figure>
}

function ExperienceOverview(){
  const steps=[
    ['01','现场讲评','反馈伴随作品位置、语气与手势发生。'],
    ['02','反馈产生','导师与同伴的意见在讨论中持续出现。'],
    ['03','临时记录','学生只能在理解、回应与记录之间切换。'],
    ['04','离开现场','来源、位置与讨论语境开始分离。'],
    ['05','课后难找','留下零散文字，却难以回到原来的问题。']
  ]
  return <div className="ps-experience-overview ps-research-journey"><header><small>体验概览</small><h3>一条反馈离开课堂后，为什么越来越难被重新找到？</h3></header><div className="ps-research-journey-stage"><div className="journey-phase phase-live"><small>课堂现场</small><strong>关系完整，信息密集</strong></div><div className="journey-phase phase-after"><small>课后</small><strong>文字留下，关系消失</strong></div><div className="journey-focus"><span>讨论中的反馈</span><strong>“这里的视觉层级需要更清晰。”</strong><small>作品位置 · 讲述语气 · 手势指向 · 反馈来源</small></div><div className="journey-transition-copy"><span>离开现场</span><strong>上下文逐渐脱离</strong></div><div className="journey-note"><small>零散记录</small><strong>“层级要更清晰”</strong><span>谁提出的？针对哪里？为什么？</span></div><div className="journey-thread" aria-hidden="true"><i/><i/><i/><i/><i/></div><div className="journey-steps">{steps.map((x,i)=><article className={`research-step step-${i+1}`} key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><p>{x[2]}</p></article>)}</div></div></div>
}

function SceneAnalysis(){
  return <figure className="ps-context-model" aria-label="课堂讲评中的现场反馈由人、作品、位置与讨论共同形成">
    <div className="ps-context-side is-left">
      <article className="context-panel context-people" style={{border:0,borderTop:'1px solid rgba(244,242,250,.15)',background:'transparent'}}><header><span>01</span><strong>人</strong></header><p>导师、同伴与学生</p><div className="context-icon context-icon-people" aria-hidden="true"><span><UserRound/><small>导师</small></span><span><UserRound/><small>同伴</small></span><span><UserRound/><small>学生</small></span></div></article>
      <article className="context-panel context-object" style={{border:0,borderTop:'1px solid rgba(244,242,250,.15)',background:'transparent'}}><header><span>02</span><strong>作品</strong></header><p>正在被讨论的设计作品</p><div className="context-icon context-icon-board" aria-hidden="true"><PanelsTopLeft/><span><i/><i/><i/></span></div></article>
    </div>
    <div className="ps-context-model-scene">
      <img src={media('research-feedback-context-map-v5.png')} width="1536" height="1024" alt="俯视课堂讲评现场：男性导师、同伴与学生佩戴轻量 AR 眼镜，导师使用智能笔指向设计作品中的空间锚点"/>
      <div className="ps-context-model-target" aria-hidden="true"><i/><span>Spatial Anchor</span></div>
    </div>
    <div className="ps-context-side is-right">
      <article className="context-panel context-location" style={{border:0,borderTop:'1px solid rgba(195,140,241,.3)',background:'transparent'}}><header><span>03</span><strong>位置</strong></header><p>作品中的具体区域</p><div className="context-icon context-icon-anchor" aria-hidden="true"><PanelsTopLeft/><span/><MapPin/></div></article>
      <article className="context-panel context-discussion" style={{border:0,borderTop:'1px solid rgba(244,242,250,.15)',background:'transparent'}}><header><span>04</span><strong>讨论</strong></header><p>评论、手势与回应</p><div className="context-icon context-icon-discussion" aria-hidden="true"><span><MessageCircle/><small>评论</small></span><ArrowRight/><span><Hand/><small>手势</small></span><ArrowRight/><span><MessageSquareText/><small>回应</small></span></div></article>
    </div>
    <svg className="ps-context-model-links" viewBox="0 0 1200 620" preserveAspectRatio="none" aria-hidden="true"><path d="M202 138 C282 138 294 220 382 230"/><path d="M202 466 C294 466 320 425 432 414"/><path d="M998 140 C926 140 906 238 772 292"/><path d="M998 468 C922 468 896 414 812 386"/><circle cx="382" cy="230" r="4"/><circle cx="432" cy="414" r="4"/><circle cx="772" cy="292" r="4"/><circle cx="812" cy="386" r="4"/></svg>
  </figure>
}

function ResearchEvidenceBoard(){
  const observations=[
    ['现场观察','反馈伴随说话者、手势和作品位置同时发生。'],
    ['记录行为','学生在听、看、回应与记笔记之间持续切换。'],
    ['课后回看','零散文字仍在，但已经难以还原“针对哪里”。']
  ]
  return <div className="ps-research-board"><div className="ps-research-board-scene"><span>课堂讲评现场</span><div className="ps-observation-orbit"><b>作品</b><i>导师反馈</i><i>同伴补充</i><i>手势指向</i><i>学生记录</i></div><small>Qualitative observation synthesis</small></div><div className="ps-research-board-notes">{observations.map((x,i)=><article key={x[0]}><span>0{i+1}</span><strong>{x[0]}</strong><p>{x[1]}</p></article>)}</div><blockquote>当反馈离开现场，最先消失的不是句子，而是句子与人、位置和行动之间的关系。</blockquote></div>
}

function ResearchBlueprint(){
  const findings=[
    ['来源混合','导师、同伴、学生共同产生反馈。','sources'],
    ['对象依附','反馈围绕当前设计作品产生。','object'],
    ['位置依赖','同一句反馈，位置不同，修改行动也不同。','location'],
    ['讨论依赖','反馈意义形成于评论、手势与回应之中。','discussion']
  ]
  const FindingVisual=({type})=>{
    if(type==='sources') return <div className="finding-mini is-sources semantic-mini" aria-hidden="true"><div><span><UserRound/><small>导师</small></span><span><UserRound/><small>同伴</small></span><span><UserRound/><small>学生</small></span></div><ArrowRight/><b><span><MessageSquareText/></span><small>反馈</small></b></div>
    if(type==='object') return <div className="finding-mini is-object semantic-mini" aria-hidden="true"><div><PanelsTopLeft/><span className="board-lines"/></div><ArrowRight/><b><span><MessageCircle/></span><small>反馈</small></b></div>
    if(type==='location') return <div className="finding-mini is-location semantic-mini" aria-hidden="true"><span><PanelsTopLeft/><i/><MapPin/><strong>指向标题区域</strong><small>→ 调整标题层级</small></span><em>同一句反馈</em><span><PanelsTopLeft/><i/><MousePointer2/><strong>指向另一位置</strong><small>→ 调整对应内容层级</small></span></div>
    return <div className="finding-mini is-discussion semantic-mini" aria-hidden="true"><span><MessageCircle/><small>评论</small></span><ArrowRight/><span><Hand/><small>手势</small></span><ArrowRight/><span><HelpCircle/><small>追问</small></span><ArrowRight/><span><MessageSquareText/><small>回应</small></span></div>
  }
  return <div className="ps-blueprint-research">
    <div className="ps-blueprint-research-visual"><SceneAnalysis/></div>
    <header className="ps-findings-head"><h3>从现场中识别出的四个关键信息特征</h3><span>四个要素共同决定一条反馈如何被理解。</span></header>
    <div className="ps-blueprint-findings">{findings.map((x,i)=><article className={`finding-${x[2]}`} style={x[2]==='location'?{border:'1px solid rgba(195,140,241,.38)',background:'rgba(31,22,40,.25)'}:{border:0,borderLeft:i?'1px solid rgba(244,242,250,.1)':'0',background:'transparent'}} key={x[0]}><div className="finding-heading"><span>0{i+1}</span><strong>{x[0]}</strong></div><p>{x[1]}</p><FindingVisual type={x[2]}/></article>)}</div>
    <div className="ps-chapter-insight"><small>核心洞察</small><p><strong>仅保留反馈文字，并不足以支持课后继续修改。</strong><span><small>设计要求</small>PinSight 因此需要同时保留反馈来源、作品位置与讨论语境。</span></p></div>
  </div>
}

function ProblemBlueprint(){
  const steps=[['01','现场反馈','内容与人、位置、语境同时存在'],['02','离开现场','讨论结束，关系开始脱离'],['03','位置丢失','无法回到具体设计区域'],['04','上下文断裂','来源、原因与语气难以恢复'],['05','行动中断','不知道下一步应当修改什么']]
  return <div className="ps-blueprint-problem-flow">{steps.map((x,i)=><React.Fragment key={x[0]}><article><span>{x[0]}</span><strong>{x[1]}</strong><p>{x[2]}</p></article>{i<steps.length-1&&<ArrowRight/>}</React.Fragment>)}</div>
}

function LifecycleBlueprint(){
  const stages=[['01','Capture','xr-live-feedback.png'],['02','Spatial Context','xr-linked-feedback.png'],['03','Feedback Object',null],['04','Web Review','web-review-clean.png'],['05','Revision Action','web-revision-guide.png']]
  return <div className="ps-blueprint-lifecycle">{stages.map((x,i)=><React.Fragment key={x[0]}><article><div><span>{x[0]}</span><strong>{x[1]}</strong></div>{x[2]?<img src={media(x[2])} alt={`${x[1]} 状态`}/>:<FeedbackObject compact/>}</article>{i<stages.length-1&&<ArrowRight/>}</React.Fragment>)}</div>
}

function ContextLoss(){
  const source='problem-critique-editorial-ar-final.png'
  return <figure className="ps-problem-flow-final">
    <article className="problem-stage is-live">
      <header><span>01</span><strong>课堂现场 / 完整语境</strong></header>
      <div className="problem-stage-media">
        <img src={media(source)} alt="男性导师佩戴 AR 眼镜并使用智能笔指向设计作品，学生与同伴参与讨论"/>
        <div className="problem-live-cues" aria-hidden="true"><span className="cue-speaker"><b>导师</b><br/>讲解与指引</span><span className="cue-location"><b>具体区域</b><br/>反馈锚点</span><span className="cue-object"><b>作品</b><br/>设计作品</span><span className="cue-context"><b>学生</b><br/>理解与回应</span></div>
      </div>
      <figcaption><strong>01 / 课堂现场</strong><p>导师围绕作品中的具体区域提出意见，学生依赖说话者、手势、作品位置与现场讨论理解反馈。</p></figcaption>
    </article>
    <ArrowRight className="problem-flow-arrow" aria-hidden="true"/>
    <article className="problem-stage is-decay">
      <header><span>02</span><strong>离开现场 / 语境逐渐脱离</strong></header>
      <div className="problem-stage-media">
        <img src={media(source)} alt="同一课堂讲评场景逐渐失去说话者、作品位置和讨论关系"/>
        <div className="problem-decay-shade" aria-hidden="true"/>
        <div className="problem-decay-anchor" aria-hidden="true"><i/></div>
        <div className="problem-decay-ghosts" aria-hidden="true"><i className="is-speaker" data-loss="说话者"/><i className="is-pointing" data-loss="具体指向"/><i className="is-discussion" data-loss="讨论过程"/></div>
        <div className="problem-decay-breaks" aria-hidden="true"><i/><i/><i/></div>
      </div>
      <figcaption><strong>02 / 离开现场</strong><p>离开课堂后，说话者与讨论过程首先消失，作品与位置的关系也变得模糊。</p></figcaption>
    </article>
    <ArrowRight className="problem-flow-arrow" aria-hidden="true"/>
    <article className="problem-stage is-record">
      <header><span>03</span><strong>课后记录 / 只剩文字</strong></header>
      <aside className="problem-record-panel">
        <small>课后留下的记录</small>
        <blockquote>“这里的视觉层级<br/>需要更清晰。”</blockquote>
        <div className="problem-record-questions"><span>具体哪里？</span><span>为什么？</span><span>接下来怎么改？</span></div>
        <div className="problem-record-missing"><small>缺失的关键信息</small><span><CircleX/>来源不明确</span><span><CircleX/>位置失去参照</span><span><CircleX/>讨论语境缺失</span></div>
      </aside>
      <figcaption><strong>03 / 课后记录</strong><p>最终可能只剩一句反馈文字，却难以重新定位问题并转化为可执行的修改行动。</p></figcaption>
    </article>
  </figure>
}

function ContextLossFactors(){
  const items=[['01','人','提出反馈的人'],['02','作品','反馈对应的设计对象'],['03','位置','作品中的具体空间区域'],['04','讨论上下文','为什么产生这个反馈']]
  return <div className="ps-loss-factors"><small>离开现场后逐渐丢失</small><div>{items.map(([no,title,copy])=><article key={no}><span>{no}</span><strong>{title}</strong><p>{copy}</p></article>)}</div></div>
}

function Reframing(){ const a=[['01','记住反馈','保留课堂中的意见内容。'],['02','保持空间关系','连接反馈与被讨论的设计区域。'],['03','导向修改行动','让课后回顾继续推动下一步设计。']]; return <div className="ps-reframing-v12"><header><small>问题重构</small><h3>从“做更多笔记”，转向“保留反馈之间的关系”。</h3></header><div className="ps-reframe-composition"><div className="is-old"><small>旧问题定义</small><strong>做更多笔记</strong><p>记录更多内容，并不等于保留反馈原来的意义。</p></div><div className="is-turn"><span>转向</span><i/><i/></div><div className="is-new"><small>新的设计焦点</small><strong>保留反馈之间的关系</strong><p>让内容、来源、位置与行动保持连续。</p></div></div><div className="ps-reframe-continuity">{a.map(x=><article key={x[0]}><small>{x[0]}</small><strong>{x[1]}</strong><p>{x[2]}</p></article>)}</div><blockquote><small>设计问题</small><strong>如何让现场讲评中的反馈，在离开讨论以后仍然保留<em>位置</em>与<em>行动上下文</em>？</strong></blockquote></div> }

function ResponseMap(){
  const p=[['01','反馈容易遗失'],['02','不同反馈来源容易混合'],['03','反馈与作品位置关系丢失'],['04','课后信息难整理'],['05','下一步行动不明确']],r=[['捕捉','谁说了什么？','Capture'],['定位','这条反馈针对哪里？','Locate'],['回顾与行动','接下来如何处理？','Review & Act']]
  return <div className="ps-convergence-v12"><header><small>体验断点</small><small>系统响应</small></header><div className="ps-convergence-canvas"><svg viewBox="0 0 1200 580" preserveAspectRatio="none" aria-hidden="true"><path className="problem-leg" d="M360 58 C500 58 520 124 610 124"/><path className="problem-leg" d="M360 174 C500 174 520 124 610 124"/><path className="response-trunk" d="M610 124 C660 124 690 96 760 96"/><path className="response-trunk" d="M360 290 C540 290 610 290 760 290"/><path className="problem-leg" d="M360 406 C500 406 520 464 610 464"/><path className="problem-leg" d="M360 522 C500 522 520 464 610 464"/><path className="response-trunk" d="M610 464 C660 464 690 484 760 484"/><g className="mapping-points"><circle cx="610" cy="124" r="5"/><circle cx="610" cy="464" r="5"/></g></svg><div className="ps-problem-signals">{p.map(x=><article key={x[0]}><span>{x[0]}</span><strong>{x[1]}</strong></article>)}</div><div className="ps-response-decisions">{r.map((x,i)=><article key={x[0]}><span>0{i+1}</span><strong>{x[0]}</strong><p>{x[1]}</p><em>{x[2]}</em></article>)}</div><div className="ps-convergence-label">5 个问题信号收敛为 3 个设计动作</div></div></div>
}

const feedbackFields=[['来源','Tutor / Peer'],['内容','Feedback Content'],['时间','Timestamp'],['空间位置','Design Area'],['类别','Hierarchy / Layout / Colour'],['状态','Captured / Reviewed / Revision']]
function FeedbackObject({compact=false}){ return <div className={`ps-feedback-object ${compact?'is-compact':''}`}><small>CORE INFORMATION OBJECT</small><h3>Feedback Object</h3><p>一条反馈</p><div>{feedbackFields.map(x=><span key={x[0]}><b>{x[0]}</b><em>{x[1]}</em></span>)}</div></div> }

function FeedbackObjectModel(){
  return <div className="ps-feedback-model"><header><small>课堂与课后持续存在</small><h3>Feedback Object</h3><p>同一条反馈，连同它的现场关系一起留下。</p></header><div className="ps-feedback-model-content"><small>反馈内容</small><blockquote>“这里的视觉层级需要更清晰。”</blockquote></div><div className="ps-feedback-model-relations"><div><span>01</span><strong>来源</strong><p>导师 / 同伴</p><small>课堂讲评中</small></div><div><span>02</span><strong>对象与位置</strong><p>设计作品<br/>主标题区域</p><div className="ps-object-location-mini" aria-hidden="true"><PanelsTopLeft/><MapPin/></div></div><div><span>03</span><strong>讨论语境</strong><p>评论、手势、回应</p><div className="ps-discussion-mini" aria-hidden="true"><MessageCircle/><ArrowRight/><Hand/><ArrowRight/><UserRound/></div></div><div><span>04</span><strong>后续行动</strong><p>调整标题与画面的视觉层级</p><small>当前状态：等待修改</small></div></div></div>
}

function FeedbackConcept(){
  const fields=[['01','来源','导师 / 同伴'],['02','空间位置','设计作品 · 主标题区域'],['03','讨论内容','评论 · 手势 · 回应'],['04','后续行动','调整视觉层级']]
  return <div className="ps-concept-definition"><section className="ps-concept-plain"><small>普通反馈</small><blockquote>“这里的视觉层级需要更清晰。”</blockquote><p>一句离开现场的评论</p></section><ArrowRight aria-hidden="true"/><section className="ps-concept-object"><header><small>CORE DESIGN CONCEPT</small><h3>Feedback Object</h3><p>连接现场讨论与后续修改的信息实体</p></header><div>{fields.map(([no,title,copy])=><article key={no}><span>{no}</span><strong>{title}</strong><p>{copy}</p></article>)}</div></section><footer><small>概念定义</small><p>Feedback Object 不只是保存一句话，而是让反馈离开现场后仍保有可理解、可定位、可行动的关系。</p></footer></div>
}

function CoreInnovationDimensions(){
  const dimensions=[
    ['01','人','WHO','谁提出了反馈'],
    ['02','作品','WHAT','反馈对应什么设计对象'],
    ['03','位置','WHERE','具体指向作品中的哪里'],
    ['04','讨论','CONTEXT','为什么产生这条反馈']
  ]
  return <div className="ps-core-dimensions"><small>CORE INNOVATION</small><p>Feedback Object 将一句现场意见，保存为包含完整关系的设计对象。</p><div>{dimensions.map(([no,title,en,copy])=><article key={no}><span>{no}</span><strong>{title}</strong><em>{en}</em><p>{copy}</p></article>)}</div></div>
}

function Architecture(){
  const people=[['导师','提出反馈'],['同伴','补充反馈'],['学生','接收、理解并修改']]
  return <div className="ps-system-response"><svg className="ps-system-links" viewBox="0 0 1200 520" preserveAspectRatio="none" aria-hidden="true"><g className="is-input-links"><path d="M216 156 H230"/><path d="M216 224 H230"/><path d="M216 292 H230"/><path d="M230 156 V292"/><path className="is-trunk" d="M230 224 H260"/><path d="M216 406 H242"/><path d="M216 474 H242"/><path d="M242 406 V474"/><path className="is-trunk" d="M242 440 H260"/></g><g className="is-output-links"><path className="is-trunk" d="M940 260 H962 V150 H984"/></g><g className="ps-link-points"><circle cx="216" cy="156" r="3.5"/><circle cx="216" cy="224" r="3.5"/><circle cx="216" cy="292" r="3.5"/><circle cx="230" cy="224" r="3.5"/><circle cx="260" cy="224" r="3.5"/><circle cx="216" cy="406" r="3.5"/><circle cx="216" cy="474" r="3.5"/><circle cx="242" cy="440" r="3.5"/><circle cx="260" cy="440" r="3.5"/><circle cx="940" cy="260" r="3.5"/><circle cx="962" cy="150" r="3.5"/><circle cx="984" cy="150" r="3.5"/></g></svg><section className="ps-response-side ps-response-input"><header><strong>现场输入</strong></header><div className="ps-response-group"><h4>反馈参与者</h4>{people.map(x=><article key={x[0]}><UserRound/><div><strong>{x[0]}</strong><p>{x[1]}</p></div></article>)}</div><div className="ps-response-group ps-response-tools"><h4>现场工具</h4><article><Glasses/><div><strong>XR</strong><p>现场查看与定位</p></div></article><article><PenTool/><div><strong>Smart Pen</strong><p>标注与空间锚定</p></div></article></div></section><FeedbackObjectModel/><section className="ps-response-side ps-response-continuation"><header><strong>课后延续</strong></header><div className="ps-continuation-flow"><article><Monitor/><div><strong>Web</strong><p>课后回看与修改</p></div></article><ArrowRight/><article><CircleDot/><div><strong>重新定位</strong><p>找到原设计中的具体区域</p></div></article><ArrowRight/><article><PenTool/><div><strong>继续修改</strong><p>根据反馈完成调整</p></div></article><ArrowRight/><article className="is-status"><CheckCircle2/><div><strong>等待修改 <span>→</span> 已处理</strong><p>状态持续跟踪</p></div></article></div></section><div className="ps-system-response-summary ps-chapter-insight"><small>机制回应</small><p>Feedback Object 保存的不只是更多文字，<br/>而是让反馈离开现场后仍然保有来源、位置、讨论语境与后续行动。</p><span>它把一句即时评论，<br/>转化为可以继续理解、定位与修改的信息对象。</span></div></div>
}

function FormationMechanism(){
  const participants=[['导师','提出意见'],['同伴','补充观点'],['学生','理解与回应']]
  const signals=[['评论',MessageCircle],['手势',Hand],['作品指向',MapPin],['Smart Pen 标记',PenTool]]
  const fields=[
    ['01','SOURCE','来源','导师','课堂讲评'],
    ['02','SPATIAL ANCHOR','位置','设计作品','主标题区域'],
    ['03','DISCUSSION CONTEXT','讨论语境','评论 · 手势','回应'],
    ['04','NEXT ACTION','后续行动','调整视觉层级','']
  ]
  const outcomes=[
    ['来源明确','知道谁提出。',UserRound],
    ['位置明确','知道指向哪里。',MapPin],
    ['语境保留','知道为什么提出。',MessageCircle],
    ['行动明确','知道下一步如何处理。',CheckCircle2]
  ]
  return <div className="ps-formation">
    <svg className="ps-formation-links" viewBox="0 0 1200 560" preserveAspectRatio="none" aria-hidden="true">
      <g className="ps-formation-input-lines"><path d="M238 151 H264"/><path d="M238 211 H264"/><path d="M238 271 H264"/><path d="M264 151 V271"/><path d="M264 211 H300"/><path d="M238 367 H278"/><path d="M238 421 H278"/><path d="M238 475 H278"/><path d="M238 529 H278"/><path d="M278 367 V529"/><path d="M278 448 H300"/></g>
      <g className="ps-formation-output-line"><path d="M900 280 H962"/></g>
      <g className="ps-formation-nodes"><circle cx="238" cy="151" r="3"/><circle cx="238" cy="211" r="3"/><circle cx="238" cy="271" r="3"/><circle cx="264" cy="211" r="3.5"/><circle cx="300" cy="211" r="3"/><circle cx="238" cy="367" r="3"/><circle cx="238" cy="421" r="3"/><circle cx="238" cy="475" r="3"/><circle cx="238" cy="529" r="3"/><circle cx="278" cy="448" r="3.5"/><circle cx="300" cy="448" r="3"/><circle cx="900" cy="280" r="3"/><circle cx="962" cy="280" r="3"/></g>
    </svg>
    <section className="ps-formation-input">
      <header><small>INPUT</small><h3>现场输入</h3><p>反馈产生于真实的课堂关系。</p></header>
      <div className="ps-formation-group"><h4>反馈参与者</h4>{participants.map(([name,copy])=><article key={name}><UserRound/><div><strong>{name}</strong><span>{copy}</span></div></article>)}</div>
      <div className="ps-formation-group is-signals"><h4>现场信息</h4>{signals.map(([name,Icon])=><article key={name}><Icon/><strong>{name}</strong></article>)}</div>
    </section>
    <section className="ps-formation-object">
      <header><small>课堂反馈被重新组织为可持续的信息对象</small><h3>Feedback Object</h3></header>
      <div className="ps-formation-quote"><small>原始反馈</small><blockquote>“这里的视觉层级需要更清晰。”</blockquote></div>
      <div className="ps-formation-fields">{fields.map(([no,en,title,line1,line2])=><article key={no}><span>{no}</span><small>{en}</small><strong>{title}</strong><p>{line1}{line2&&<><br/>{line2}</>}</p>{no==='02'&&<div className="ps-formation-anchor" aria-hidden="true"><PanelsTopLeft/><MapPin/></div>}{no==='03'&&<div className="ps-formation-context" aria-hidden="true"><MessageCircle/><i/><Hand/><i/><UserRound/></div>}{no==='04'&&<em><i/>等待修改</em>}</article>)}</div>
    </section>
    <section className="ps-formation-output">
      <header><small>OUTPUT</small><h3>可持续反馈对象</h3><p>生成后的对象保留继续工作的依据。</p></header>
      <div className="ps-formation-output-node"><CircleDot/><span>FEEDBACK OBJECT</span></div>
      <div className="ps-formation-outcomes">{outcomes.map(([title,copy,Icon])=><article key={title}><Icon/><div><strong>{title}</strong><p>{copy}</p></div></article>)}</div>
    </section>
    <footer className="ps-formation-insight"><small>机制洞察</small><p>Feedback Object 保存的不只是反馈内容，<br/>而是让来源、位置与讨论关系共同成为可继续工作的设计信息。</p></footer>
  </div>
}

function InteractionFlow(){
  const Node=({children,en,muted=false})=><div className={`ps-flow-node${muted?' is-muted':''}`}><strong>{children}</strong>{en&&<small>{en}</small>}</div>
  const Arrow=()=> <span className="ps-flow-down" aria-hidden="true">↓</span>
  const nav=['Settings','My Notes','Desk Critique','Projects','Group Critique','Session History','Peer Review']
  return <div className="ps-flow-v2">
    <section className="ps-flow-complete" aria-labelledby="ps-flow-complete-title">
      <header className="ps-flow-block-head"><div><span>完整交互流程</span><h3 id="ps-flow-complete-title">评审准备、现场反馈与课后处理</h3><p>依据原始 User Flow 重组主任务与操作分支，非核心导航保持为次级入口。</p></div><div className="ps-flow-legend" aria-label="图例"><span><i/>主任务</span><span><i/>操作分支</span><span><i/>次级入口</span></div></header>
      <div className="ps-flow-scroll" tabIndex="0" aria-label="PinSight 完整交互流程，可横向浏览">
        <div className="ps-flow-stages">
          <article className="ps-flow-stage is-before">
            <header><span>01</span><div><h4>准备评审</h4><small>BEFORE CRITIQUE</small></div></header>
            <p>进入系统、准备评审并邀请参与者。</p>
            <div className="ps-flow-stack">
              <Node en="Open PinSight">打开 PinSight</Node><Arrow/>
              <div className="ps-flow-fork is-auth"><Node en="Continue as Student">以学生身份继续</Node><Node en="Log In">登录</Node></div><Arrow/>
              <Node en="Prepare Session">准备评审 Session</Node>
              <div className="ps-flow-nav-branch"><small>次级导航分支</small><div>{nav.map(x=><span key={x}>{x}</span>)}</div></div>
              <Arrow/><Node en="Invite Participants">邀请参与者</Node><Arrow/><Node en="Start Critique Session">开始评审</Node>
            </div>
          </article>
          <div className="ps-flow-stage-link" aria-hidden="true"><ArrowRight/></div>
          <article className="ps-flow-stage is-during">
            <header><span>02</span><div><h4>现场反馈</h4><small>DURING CRITIQUE</small></div></header>
            <p>在讨论中捕捉意见，并建立作品位置关联。</p>
            <div className="ps-flow-stack">
              <Node en="Start Critique Session">开始评审</Node><Arrow/><Node en="Live Feedback">实时反馈</Node><Arrow/>
              <div className="ps-flow-branch-box"><small>并行操作分支</small><div className="ps-flow-fork"><Node en="Save & Pin">保存并标记位置</Node><Node en="Edit Tags">编辑标签</Node></div></div>
              <Arrow/><Node en="Capture Feedback">捕捉反馈内容</Node><Arrow/><Node en="Summary of Feedback Details">整理反馈详情</Node>
            </div>
          </article>
          <div className="ps-flow-stage-link" aria-hidden="true"><ArrowRight/></div>
          <article className="ps-flow-stage is-after">
            <header><span>03</span><div><h4>课后处理</h4><small>AFTER CRITIQUE</small></div></header>
            <p>从摘要或空间概览重新进入处理路径。</p>
            <div className="ps-flow-stack">
              <Node en="Feedback Summary">反馈摘要</Node><Arrow/><Node en="Spatial Feedback Overview">空间反馈概览</Node><Arrow/>
              <div className="ps-flow-fork is-review"><Node en="Open My Feedback">打开我的反馈</Node><Node en="View On Web">在 Web 中查看</Node></div><Arrow/>
              <Node en="Review & Act">查看并处理</Node><Arrow/><Node en="Start Revising">进入修改流程</Node>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="ps-flow-branches" aria-labelledby="ps-flow-branches-title">
      <header className="ps-flow-block-head"><div><span>关键交互分支</span><h3 id="ps-flow-branches-title">两个决定反馈能否继续工作的操作节点</h3></div></header>
      <div className="ps-flow-branch-grid">
        <article className="ps-flow-branch-detail is-spatial">
          <header><span>A</span><div><small>现场反馈</small><h4>从记录到空间关联</h4></div></header>
          <p>Save & Pin 与 Edit Tags 是并行选择：一条路径建立空间位置，另一条补充反馈标签。</p>
          <div className="ps-spatial-branch-visual">
            <Node en="Capture Feedback">捕捉反馈</Node><ArrowRight/>
            <div className="ps-spatial-anchor-demo" aria-label="Smart Pen 指向作品区域并建立空间锚点"><PanelsTopLeft/><PenTool/><MapPin/><i/><i/></div><ArrowRight/>
            <div className="ps-tag-options"><span>Composition</span><span>Visual Hierarchy</span><span>Contrast</span></div>
          </div>
          <footer><span>Save & Pin</span><span>Edit Tags</span></footer>
        </article>
        <article className="ps-flow-branch-detail is-review">
          <header><span>B</span><div><small>课后处理</small><h4>从回顾到继续修改</h4></div></header>
          <p>反馈摘要与空间概览提供不同回顾入口，最终汇入 Review & Act，而不是一条无选择的直线路径。</p>
          <div className="ps-review-branch-visual">
            <Node en="Feedback Summary">反馈摘要</Node><ArrowRight/>
            <div className="ps-flow-fork"><Node en="Open My Feedback">打开我的反馈</Node><Node en="View On Web">在 Web 中查看</Node></div><ArrowRight/>
            <div><Node en="Review & Act">查看并处理</Node><Arrow/><Node en="Start Revising">开始修改</Node></div>
          </div>
        </article>
      </div>
    </section>

    <section className="ps-flow-rationale" aria-labelledby="ps-flow-rationale-title"><small>设计说明</small><h3 id="ps-flow-rationale-title">通过整理评审前、中、后的任务路径，将现场反馈记录与课后回顾组织为连续的交互过程。</h3><div><article><span>01</span><strong>阶段清晰</strong><p>用准备、现场与课后三个任务阶段组织完整路径。</p></article><article><span>02</span><strong>操作关系准确</strong><p>现场记录、空间标记与标签编辑保留真实分支关系。</p></article><article><span>03</span><strong>入口保持选择</strong><p>课后可从不同回顾入口继续进入反馈处理。</p></article></div></section>
  </div>
}

function InformationContinuity(){
  const roles=[
    ['导师','Tutor','提出反馈 · 指向设计区域',UserRound],
    ['学生','Student','查看理解 · 参与讨论',UserRound],
    ['同伴','Peers','补充意见 · 参与讨论',UserRound]
  ]
  const actions=[
    ['查看反馈','Review Feedback',MessageSquareText],
    ['整理与修改','Revise Work',PenTool],
    ['跟踪处理','Track Revisions',CheckCircle2]
  ]
  return <div className="ps-system-v2">
    <section className="ps-system-map" aria-label="PinSight 课堂现场、Feedback Object 与课后工作空间关系图">
      <svg className="ps-system-links" viewBox="0 0 1200 660" preserveAspectRatio="none" aria-hidden="true">
        <path className="is-context" d="M128 165 C128 225 250 202 292 282"/>
        <path className="is-context" d="M300 165 V266"/>
        <path className="is-context" d="M472 165 C472 225 370 208 342 282"/>
        <path className="is-device" d="M96 472 C168 472 178 388 254 388"/>
        <path className="is-device" d="M505 486 C445 486 428 402 354 402"/>
        <path className="is-primary" d="M500 358 H642"/>
        <path className="is-primary" d="M760 358 H870"/>
        <circle cx="292" cy="282" r="4"/><circle cx="300" cy="266" r="4"/><circle cx="342" cy="282" r="4"/>
        <circle cx="254" cy="388" r="4"/><circle cx="354" cy="402" r="4"/><circle cx="500" cy="358" r="4"/><circle cx="760" cy="358" r="4"/><circle cx="870" cy="358" r="4"/>
      </svg>

      <article className="ps-system-onsite">
        <header><span>01</span><div><h3>课堂现场</h3><small>ONSITE CRITIQUE</small></div></header>
        <p>导师、学生与同伴围绕同一件设计作品讨论，XR Glasses 与 Smart Pen 分别承担空间呈现和位置标注。</p>
        <div className="ps-system-roles">{roles.map(([title,en,copy,Icon])=><div key={title}><Icon/><strong>{title}</strong><small>{en}</small><p>{copy}</p></div>)}</div>
        <div className="ps-onsite-scene">
          <div className="ps-xr-device"><Glasses/><div><strong>XR Glasses</strong><span>空间信息呈现</span><span>现场反馈可视化</span></div></div>
          <div className="ps-design-object" aria-label="被讨论的设计作品与空间锚点"><small>DESIGN OBJECT</small><div className="ps-design-sheet"><i/><i/><i/><i/></div><div className="ps-design-anchor"><MapPin/><i/><i/></div><span>Spatial Anchor</span></div>
          <div className="ps-pen-device"><PenTool/><div><strong>Smart Pen</strong><span>手写标注</span><span>作品位置指向</span></div></div>
        </div>
      </article>

      <article className="ps-system-object">
        <CircleDot/>
        <small>CONTINUOUS INFORMATION OBJECT</small>
        <h3>Feedback<br/>Object</h3>
        <p>连接现场反馈与课后工作的持续信息对象。</p>
        <span>现场关联保持连续</span>
      </article>

      <article className="ps-system-workspace">
        <header><span>02</span><div><h3>课后工作空间</h3><small>AFTER CLASS WORKSPACE</small></div></header>
        <p>学生通过 Web Platform 回顾已关联的反馈，并继续开展设计修改。</p>
        <div className="ps-web-device" aria-label="简化的 Web Workspace 示意图"><div className="ps-web-browser"><header><i/><i/><i/><span>PinSight Workspace</span></header><main><aside/><section><b/><b/><b/></section></main></div><Monitor/></div>
        <div className="ps-web-platform-copy"><strong>Web Platform</strong><span>反馈回顾 · 修改进度跟踪</span></div>
        <div className="ps-workspace-actions">{actions.map(([title,en,Icon])=><div key={title}><Icon/><strong>{title}</strong><small>{en}</small></div>)}</div>
      </article>
    </section>

    <section className="ps-system-notes"><small>设计要点</small><h3>两种使用空间、多方参与者与一个持续关联的信息对象，共同构成 PinSight 的交互系统。</h3><div><article><span>01</span><strong>多方协作的现场评审</strong><p>导师、学生及同伴围绕设计作品讨论，借助现场设备记录和定位反馈。</p></article><article><span>02</span><strong>跨空间的反馈关联</strong><p>同一个 Feedback Object 连接现场形成的反馈与后续工作。</p></article><article><span>03</span><strong>持续的课后处理</strong><p>学生通过 Web Platform 回顾反馈、理解对应位置并跟踪后续修改。</p></article></div></section>
  </div>
}

function SystemArchitecture(){
  const modules=[
    ['01','XR Experience',Glasses,['空间反馈','实时讨论','视觉提示']],
    ['02','Smart Pen',PenTool,['精确标记','空间定位','作品区域绑定']],
    ['03','Web Workspace',Monitor,['Feedback 管理','上下文查看','修改追踪']]
  ]
  return <div className="ps-ia-architecture">
    <svg viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true"><path d="M214 256 H392"/><path d="M214 388 H336 V344 H392"/><path d="M808 300 H986"/><path d="M600 454 V520"/><circle cx="392" cy="256" r="4"/><circle cx="392" cy="344" r="4"/><circle cx="808" cy="300" r="4"/><circle cx="600" cy="454" r="4"/></svg>
    <section className="ps-ia-arch-modules">{modules.slice(0,2).map(([no,title,Icon,items])=><article key={no}><header><span>{no}</span><Icon/><h3>{title}</h3></header><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</section>
    <section className="ps-ia-arch-core"><small>SHARED INFORMATION ENTITY</small><h3>Feedback Object</h3><p>来源 · 空间位置 · 讨论语境 · 后续行动</p><div><span>Feedback 03</span><strong>“这里的视觉层级需要更清晰。”</strong></div></section>
    <section className="ps-ia-arch-web">{modules.slice(2).map(([no,title,Icon,items])=><article key={no}><header><span>{no}</span><Icon/><h3>{title}</h3></header><ul>{items.map(x=><li key={x}>{x}</li>)}</ul></article>)}</section>
    <footer className="ps-ia-revision-loop"><small>REVISION LOOP</small><div><span>反馈产生</span><ArrowRight/><span>记录</span><ArrowRight/><span>修改</span><ArrowRight/><span>再次讨论</span></div></footer>
  </div>
}

function FinalDesignOverview(){
  const support=[
    ['web-review-clean.png','回到反馈与对应设计位置'],
    ['web-revision-guide.png','从问题优先级进入修订任务'],
    ['web-live-critique.png','现场会话进入 Web'],
    ['web-create-session.png','建立新的 Critique Session']
  ]
  return <div className="ps-web-final-showcase"><figure className="ps-web-final-hero"><img src={media('web-dashboard-final.png')} width="1536" height="1024" loading="lazy" alt="PinSight Web Workspace：Session、反馈与项目进度"/><figcaption>Session、反馈与项目进度</figcaption></figure><div className="ps-web-final-support">{support.map(([src,title])=><figure key={src}><img src={media(src)} width="1536" height="1024" loading="lazy" alt={title}/><figcaption>{title}</figcaption></figure>)}</div><p className="ps-web-final-note">从现场反馈进入修订行动，不再依赖零散记录和回忆。</p></div>
}

function DetailedInteractions(){
  const groups=[
    ['XR FINAL UI',[
      ['xr-live-feedback.png','完整空间反馈体验'],
      ['xr-linked-feedback.png','恢复反馈上下文'],
      ['xr-session-complete.png','Session Complete'],
      ['xr-feedback-detail.png','负载修改方向'],
      ['xr-ask-pinsight.png','Ask PinSight'],
      ['xr-revision-overview.png','Revision Overview']
    ]],
    ['WEB FINAL UI',[
      ['web-review-clean.png','进入修订任务'],
      ['web-revision-guide.png','组织反馈与行动'],
      ['web-create-session.png','Create Critique Session'],
      ['web-dashboard-final.png','Session、反馈与进度'],
      ['web-dashboard-clean.png','连接 XR Glasses'],
      ['web-live-critique.png','现场会话与实时反馈']
    ]]
  ]
  return <div className="ps-complete-ui-gallery">{groups.map(([label,items])=><section key={label}><header><small>{label}</small></header><div>{items.map(([src,title])=><figure key={src}><img src={media(src)} width="1536" height="1024" loading="lazy" alt={title}/><figcaption>{title}</figcaption></figure>)}</div></section>)}</div>
}

function Journey(){ const a=['创建讲评会话','连接 XR 与 Smart Pen','开始 Critique','导师 / 同伴提出反馈','捕捉 Feedback','指向设计区域','生成 Spatial Pin','查看 Feedback Detail','Session 完成并同步','回顾、整理与行动']; return <div className="ps-core-journey"><div className="ps-journey-phases"><span>PREPARE / 准备</span><span>LIVE CRITIQUE / 现场讲评</span><span>REVIEW & ACT / 回顾与行动</span></div><div className="ps-journey-line"/><div className="ps-journey-steps">{a.map((x,i)=><article key={x} className={i===4||i===6||i===9?'is-key':''}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong></article>)}</div></div> }

function StateStrip({question,title,states,accent=''}){ return <div className={`ps-state-strip ${accent}`}><header><small>{question}</small><h3>{title}</h3></header><div>{states.map((x,i)=><React.Fragment key={x}><article><span>0{i+1}</span><strong>{x}</strong></article>{i<states.length-1&&<ArrowRight/>}</React.Fragment>)}</div></div> }

function DetailObject(){ const a=[['来源','Tutor'],['内容','视觉层级需要更清晰'],['设计位置','Main Title Area'],['类别','Visual Hierarchy'],['优先级','High Priority'],['状态','Needs Revision']]; return <div className="ps-feedback-detail-object"><small>FEEDBACK 03 / CONTEXT OBJECT</small><h3>Feedback Detail</h3><p>PinSight 保存的不只是 Transcript，而是能够恢复现场意义的完整上下文。</p><div>{a.map(x=><span key={x[0]}><b>{x[0]}</b><em>{x[1]}</em></span>)}</div></div> }

function Lifecycle(){
  const a=[['01','Feedback Created','导师提出：“这里的视觉层级需要更清晰。”','xr-live-feedback.png'],['02','Capture','来源 Tutor · 内容 · 时间 00:18','xr-live-feedback.png'],['03','Locate','Smart Pen 指向海报标题区域','smart-pen-handwriting.png'],['04','Anchor','Feedback 03 ↔ Main Title Area','xr-linked-feedback.png'],['05','Spatial Pin','在对应设计位置生成反馈 Pin','xr-spatial-overview.png'],['06','Feedback Detail','重新查看谁说的、说了什么、针对哪里','xr-feedback-detail.png'],['07','Organise','进入统一 Feedback Record','xr-ai-summary.png'],['08','Review & Act','强化标题与主体视觉之间的层级差异','web-revision-guide.png']]
  const rhythm=['is-wide','is-small','is-medium','is-large','is-medium','is-large','is-medium','is-wide']
  return <div className="ps-lifecycle-story">{a.map((x,i)=><article key={x[0]} className={rhythm[i]}><div className="ps-life-copy"><span>{x[0]}</span><small>FEEDBACK 03</small><h3>{x[1]}</h3><p>{x[2]}</p></div><figure><img src={media(x[3])} alt={`${x[1]} 最终交互状态`} loading="lazy"/></figure></article>)}</div>
}

function Transformation(){ const a=[['COMMENT','“标题太拥挤”'],['ISSUE','视觉层级'],['PRIORITY','优先处理'],['ACTION','强化标题与主体视觉的层级关系'],['STATUS','待修改']]; return <div className="ps-transformation-model">{a.map((x,i)=><React.Fragment key={x[0]}><article><small>{x[0]}</small><strong>{x[1]}</strong></article>{i<a.length-1&&<ArrowRight/>}</React.Fragment>)}</div> }

function Continuity(){ return <div className="ps-continuity-object"><article><Glasses/><small>XR / IN CLASS</small><h3>Feedback 03</h3><p>现场捕捉并连接 Main Title Area</p></article><div><span>DEVICE CHANGES</span><ArrowRight/><FeedbackObject compact/><ArrowRight/><b>IDENTITY REMAINS</b></div><article><Monitor/><small>WEB / AFTER CLASS</small><h3>Feedback 03</h3><p>Visual Hierarchy · Needs Revision</p></article></div> }

function SpatialLanguage(){ const a=[['01','Feedback Pin',<MapPin/>],['02','Tutor / Peer Label',<UserRound/>],['03','Spatial Anchor',<CircleDot/>],['04','Glass Feedback Card',<MessageSquareText/>],['05','Priority / Status',<CheckCircle2/>],['06','Capture State',<Sparkles/>]]; return <div className="ps-spatial-language">{a.map(x=><article key={x[0]}><span>{x[0]}</span>{x[2]}<strong>{x[1]}</strong></article>)}</div> }

export default function PinSightCase({ nextProject }) {
  useEffect(()=>{ window.scrollTo(0,0) },[])
  return <section className="project-page pinsight-page" id="case-pinsight">
    <div className="project-page-head shell ps-page-head"><a href="#projects">← 返回项目目录</a><span><b>A01</b> 项目案例</span></div>
    <main className="ps-shell">
      <section className="ps-hero" id="pinsight-hero"><div className="ps-hero-copy"><Label no="00">项目封面</Label><h1><span>Pin</span><span>Sight</span></h1><h2><span>面向设计课堂讲评的 <em>XR</em></span><span>空间反馈系统</span></h2><p>将现场讨论中的反馈转化为可追踪、可持续修改的 Feedback Object。</p><div className="ps-hero-tags"><span><HeroMetaIcon type="xr"/><b>XR 交互</b></span><span><HeroMetaIcon type="pen"/><b>Smart Pen</b></span></div></div><div className="ps-hero-path" aria-hidden="true"><i/><i/><i/></div><HeroExperiencePreview/></section>
      <nav className="ps-index" aria-label="PinSight 案例目录"><div className="ps-index-label"><strong>项目路径</strong><small>00 — 08</small></div><div className="ps-index-grid">{links.map(([n,t,id])=><a href={`#${id}`} key={id}><span>{n}</span><strong>{t}</strong></a>)}</div></nav>

      <section className="ps-section ps-chapter-research" id="pinsight-research"><SectionHead no="01" eyebrow="Overview" title="现场反馈不是一句评论，而是由人、作品、位置与讨论共同形成的关系。" copy="课堂讲评中的反馈，依赖说话的人、指向的作品位置，以及讨论时产生的现场语境。"/><ResearchBlueprint/></section>

      <section className="ps-section ps-chapter-problem" id="pinsight-problem"><div className="ps-problem-statement"><small>02 / Challenge</small><h2>一条反馈离开课堂后，<br/>为什么越来越难被重新找到？</h2><p>现场中的反馈依赖说话者、作品、位置与讨论语境共同成立；<br/>一旦这些关系没有被一起保留下来，课后往往只剩一句孤立文字。</p></div><div className="ps-problem-visual"><ContextLoss/></div><ContextLossFactors/><div className="ps-problem-takeaway"><span className="ps-problem-insight-label">核心洞察</span><p>反馈仍然存在，但支撑理解它的<span>现场语境</span>已经不在。</p><small>失去说话者、作品位置与讨论过程后，一句反馈很难重新定位问题并继续形成修改行动。</small></div></section>

      <section className="ps-section ps-chapter-system ps-chapter-concept" id="pinsight-system"><SectionHead no="03" eyebrow="Feedback Object" title="把一句现场意见，保存为可以继续工作的反馈对象。" copy="PinSight 将来源、内容、位置与后续处理状态组织为一个可持续的信息对象，使现场反馈从课堂延续到课后修改。"/><CoreInnovationDimensions/><Architecture/></section>

      <section className="ps-section ps-chapter-xr ps-chapter-interaction-flow" id="pinsight-xr"><SectionHead no="04" eyebrow="交互设计" title={<>从现场反馈到课后处理，<br/>构建设计反馈的完整交互路径。</>} copy="基于原始 User Flow，梳理评审准备、现场反馈与课后处理三个阶段，明确关键任务及不同操作路径之间的关系。"/><InteractionFlow/></section>

      <section className="ps-section ps-chapter-lifecycle ps-chapter-architecture" id="pinsight-lifecycle"><SectionHead no="05" eyebrow="交互系统架构" title={<>XR、Smart Pen 与 Web，<br/>如何协同支持一次设计评审？</>} copy="通过现场设备与课后工作空间的协作，使反馈能够关联具体作品位置，并支持后续回顾与修改。"/><InformationContinuity/></section>

      <section className="ps-section ps-chapter-web ps-chapter-final-design" id="pinsight-web"><SectionHead no="06" eyebrow="Final Design" title="让反馈在空间中呈现。" copy="在课堂评图现场，PinSight 通过 XR 界面采集与记录反馈，将其关联到作品位置，组织为可继续回顾与修改的信息对象。"/><XRFinalShowcase/></section>

      <section className="ps-section ps-chapter-final ps-chapter-details" id="pinsight-final"><SectionHead no="07" eyebrow="WEB WORKSPACE" title="让现场反馈延续至课后。" copy="作为 XR 体验的补充，Web 工作空间支持评审会话准备，并帮助学生在课后回顾反馈、组织后续修改。"/><WebFinalShowcase/></section>

      <ProjectDemo/>

      <section className="ps-section ps-reflection" id="pinsight-reflection">
        <div className="ps-reflection-lead"><small>08 / Reflection</small><h2>PinSight 设计的不是更多记录，而是反馈从现场走向行动的连续性。</h2><p className="ps-reflection-intro">从现场反馈到课后修改，这次设计探索留下了三点思考。</p></div>
        <div className="ps-reflection-essays">
          <article><small>01</small><h3>设计认识</h3><p className="ps-reflection-point">反馈的价值不仅取决于记录了什么，还取决于是否保留了当时的语境。</p><p>将参与者、讨论内容及作品位置建立关联，是 Feedback Object 的重要设计出发点。</p></article>
          <article><small>02</small><h3>交互设计中的权衡</h3><p className="ps-reflection-point">不同使用场景需要承担不同的交互任务。</p><p>XR 侧重现场反馈呈现与空间关联，Web 则支持信息量更大的课后回顾。两个平台不需要采用完全相同的交互方式。</p></article>
          <article><small>03</small><h3>局限与后续验证</h3><p className="ps-reflection-point">如何在保留反馈语境的同时，减少现场操作负担？</p><p>未来仍需通过实际使用验证 XR 界面的信息密度、Smart Pen 的操作便利性，以及 XR 与 Web 之间的任务衔接。</p></article>
        </div>
      </section>
      <footer className="ps-next"><a href="#projects">返回项目目录</a>{nextProject&&<a href={nextProject.href}>下一项目：{nextProject.title} <ArrowUpRight/></a>}</footer>
    </main>
  </section>
}
