import React from 'react'
import {
  ArrowRight, Bookmark, CheckCircle2, Clock3, CreditCard, Eye, Filter,
  Gift, Image, Instagram, Layers3, Link2, MessageCircle, PackageCheck,
  ScanSearch, ShoppingBag, SlidersHorizontal, Smartphone, Type, WifiOff,
} from 'lucide-react'
import './masterworks-reference.css?v=masterworks-04-20261010'

const ROOT = '/projects/masterworks/'
const UI_ROOT = `${ROOT}final-ui/`
const EVIDENCE_ROOT = `${ROOT}evidence/`
const screenAssets = {
  splash: 'splash.png', onboarding: 'onboarding-explore.png', onboardingCollect: 'onboarding-collect.png', onboardingCurate: 'onboarding-curate.png', signin: 'sign-in.png', signup: 'sign-up.png',
  home: 'home-beeple.png', homeAsh: 'home-ash-thorp.png', homeOtomo: 'home-katsuhiro-otomo.png', homeMead: 'home-sydney-mead.png', homeKusama: 'home-yayoi-kusama.png', artist: 'artist-beeple.png', artwork: 'artwork-dance.png',
  artworkAlt: 'artwork-industrial-grade.png', artworkDead: 'artwork-already-dead.png', artworkVenus: '../ui/img-624.jpg', artworkMicrochip: '../ui/img-710.jpg', product: 'product.png', personalise: 'personalise.png',
  preview: 'live-preview.png', cart: 'cart.png', checkout: 'checkout.png',
  processing: 'processing-payment.png', confirmation: 'order-confirmation.png',
}

function Screen({ name, label, className = '', eager = false }) {
  const src = `${UI_ROOT}${screenAssets[name]}`
  return <figure className={`mw3-screen ${className}`}><a href={src} target="_blank" rel="noreferrer" aria-label={`查看完整界面：${label}`}><img src={src} alt={label} width="855" height="1736" loading={eager ? 'eager' : 'lazy'} /></a><figcaption>{label}</figcaption></figure>
}

function Crop({ name, label, position = 'center', className = '' }) {
  const src = `${UI_ROOT}${screenAssets[name]}`
  return <figure className={`mw3-crop ${className}`}><a href={src} target="_blank" rel="noreferrer" aria-label={`查看完整界面：${label}`}><img src={src} alt="" width="855" height="1736" loading="lazy" style={{ objectPosition: position }} /></a><figcaption>{label}</figcaption></figure>
}

function Wireframe({ index, label }) {
  return <figure className="mw3-wireframe"><img src={`${EVIDENCE_ROOT}lowfi-${index}.png`} alt={`${label} 低保真线框`} loading="lazy" /><figcaption>{label}</figcaption></figure>
}

function PdfPage({ page, label, className = '' }) {
  const src = `${ROOT}pdf-pages/page-${String(page).padStart(2, '0')}.png`
  return <figure className={`mw3-pdf-page ${className}`}><a href={src} target="_blank" rel="noreferrer"><img src={src} alt={label} loading="lazy" /></a><figcaption>{label}</figcaption></figure>
}

function SectionIntro({ number, cn, en, title, body }) {
  return <header className="mw3-intro"><p className="mw3-index"><b>{number}</b><span>{cn}</span><em>{en}</em></p><h2 id={`mw3-title-${number}`}>{title}</h2>{body && <p className="mw3-lead">{body}</p>}</header>
}

function Section({ number, cn, en, title, body, className = '', children }) {
  return <section id={`masterworks-${number}`} data-masterworks-chapter={number} className={`mw3-section ${className}`} aria-labelledby={`mw3-title-${number}`}><SectionIntro number={number} cn={cn} en={en} title={title} body={body} />{children}</section>
}

export default function MasterWorksCase({ nextProject }) {
  const projectIndex = [
    ['01', '项目背景'], ['02', '用户情境'], ['03', '信息架构与用户流程'], ['04', '低保真与交互设计'],
    ['05', '视觉语言与可访问性'], ['06', '核心体验与最终界面'], ['07', '交互原型与用户测试'], ['08', '设计反思与未来演进'],
  ]

  const handleIndexNavigation = (event, number) => {
    const target = document.getElementById(`masterworks-${number}`)
    if (!target) return
    event.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
    window.history.replaceState(null, '', `#masterworks-${number}`)
  }

  return <article className="masterworks-case masterworks-v3" id="case-spatial">
    <a className="mw3-back" href="#projects">← 返回项目目录</a>

    <header id="masterworks-00" data-masterworks-chapter="00" className="mw3-hero">
      <div className="mw3-hero-art" aria-hidden="true" />
      <div className="mw3-hero-copy">
        <p className="mw3-index"><b>00</b><span>封面</span><em>CYBERPUNK EDITION</em></p>
        <h1>MasterWorks</h1>
        <p className="mw3-hero-edition">Cyberpunk Edition</p>
        <p className="mw3-hero-sub">从艺术探索，<br />到属于自己的展览纪念品。</p>
        <p className="mw3-hero-note">为展览移动端体验设计，<br />连接作品发现、个性化表达与纪念品购买。</p>
        <dl className="mw3-meta"><div><dt>角色</dt><dd>UI/UX 设计</dd></div><div><dt>平台</dt><dd>iOS</dd></div><div><dt>类型</dt><dd>移动端展览体验</dd></div><div><dt>关键词</dt><dd>个性化 / 电商</dd></div></dl>
      </div>
      <div className="mw3-hero-stage">
        <Screen name="home" label="主页 / Home" className="mw3-hero-primary" eager />
        <Screen name="artwork" label="作品详情 / Artwork" className="mw3-hero-left" eager />
        <Screen name="cart" label="购物车 / Cart" className="mw3-hero-right" eager />
      </div>
      <a className="mw3-scroll" href="#masterworks-01">向下浏览 <span>↓</span></a>
    </header>

    <nav id="masterworks-index" className="mw3-project-index" aria-labelledby="mw3-project-index-title">
      <header>
        <p><span>PROJECT INDEX</span>项目目录</p>
        <h2 id="mw3-project-index-title">从问题定义，<br />到设计演进。</h2>
        <small>MASTERWORKS / 01—08</small>
      </header>
      <ol>
        {projectIndex.map(([number, label]) => <li key={number}>
          <a href={`#masterworks-${number}`} onClick={(event) => handleIndexNavigation(event, number)}>
            <span>{number}</span><strong>{label}</strong><em aria-hidden="true">↘</em>
          </a>
        </li>)}
      </ol>
    </nav>

    <Section number="01" cn="项目背景与问题界定" en="PROJECT CONTEXT" title={<>从作品探索，<br />到一段可以带走的展览记忆。</>} body={<>MasterWorks 是为 MOHA 特别展览设计的移动端体验，面向以视觉体验为导向、习惯移动端操作的年轻观众。<br /><br />项目希望连接作品发现、个性化纪念与礼品购买，让观展体验能够延续到离开展览之后。</>} className="mw3-overview mw3-problem-context">
      <figure className="mw3-context-friction" aria-labelledby="mw3-context-friction-title">
        <img className="mw3-context-friction-image" src="/images/masterworks/context-friction.png" alt="两侧未来艺廊被中央裂谷分隔，表达作品探索与纪念延伸之间的体验断层" width="1122" height="1402" />
        <figcaption className="mw3-context-friction-head">
          <p>CONTEXT &amp; FRICTION</p>
          <h3 id="mw3-context-friction-title">一次观展体验，<br />在作品与纪念之间断开。</h3>
        </figcaption>
        <div className="mw3-context-friction-labels" aria-label="体验情境标签">
          <div className="mw3-context-label mw3-context-label-left"><strong>作品探索</strong><i /><span>发现作品<br />继续探索</span></div>
          <div className="mw3-context-label mw3-context-label-rift"><strong>体验断层</strong><i /><span aria-hidden="true" /></div>
          <div className="mw3-context-label mw3-context-label-right"><strong>纪念延伸</strong><i /><span>个性化表达<br />带走纪念</span></div>
          <ol className="mw3-context-path" aria-label="从展览现场到带走纪念的情境路径">
            <li>展览现场</li><li>发现作品</li><li>继续探索</li><li>观展之后</li><li>个性化表达</li><li>带走纪念</li>
          </ol>
        </div>
      </figure>

      <section className="mw3-brief-problems" aria-labelledby="mw3-brief-problems-title">
        <header><small>BRIEF-DEFINED PROBLEMS</small><h3 id="mw3-brief-problems-title">关键问题索引</h3></header>
        <ol>
          <li><small>01</small><strong>体验割裂</strong><p>作品浏览与礼品购买分属不同流程，缺少连续性。</p></li>
          <li><small>02</small><strong>定制复杂</strong><p>过多选择增加理解与决策负担。</p></li>
          <li><small>03</small><strong>结果不明确</strong><p>用户难以预判个性化内容的最终呈现。</p></li>
          <li><small>04</small><strong>完成路径过长</strong><p>从发现作品到完成购买步骤较多，容易产生中断。</p></li>
        </ol>
      </section>

      <div className="mw3-use-conditions" aria-label="使用条件与项目范围">
        <article><small>USE CONDITION 01</small><h3>展览现场</h3><p>单手操作 / 时间有限 / 网络可能不稳定</p></article>
        <article><small>USE CONDITION 02</small><h3>观展之后</h3><p>比较方案 / 继续未完成操作 / 更充分查看内容</p></article>
        <article><small>SCOPE</small><h3>体验范围</h3><p>作品探索 / 个性化纪念 / 购物与结账</p></article>
        <article><small>OUT OF SCOPE</small><h3>非本期范围</h3><p>完整账户系统 / AR 试用</p></article>
      </div>

      <div className="mw3-design-task">
        <p><span>DESIGN TASK</span>设计任务</p>
        <h3>在有限的观展时间与移动使用条件下，<br />建立一条从作品发现到个性化纪念的清晰路径，<br />同时减少步骤、选择负担与结果的不确定性。</h3>
      </div>
    </Section>

    <Section number="02" cn="用户与使用情境" en="USERS & CONTEXT" title={<>不同的用户动机，<br />在不同情境中完成。</>} body="本节使用项目 Brief 中的 Micro-persona Snapshot 与使用情境，分别说明用户是谁、想完成什么，以及环境对体验提出的要求。" className="mw3-context mw3-users-context">
      <section className="mw3-ref-personas" aria-labelledby="mw3-personas-title">
        <header className="mw3-ref-section-head"><div><p>A / MICRO-PERSONAS</p><h3 id="mw3-personas-title">用户快照</h3></div><span>三种不同的用户动机，代表了对个性化纪念的不同期待。</span></header>
        <div className="mw3-ref-persona-grid">
          {[
            { id:'01', key:'nova', name:'NOVA', type:'学生 / 创作者', motive:'个性化表达', goal:'制作一个带有简短文字的抱枕，并选择合适的字体。', tags:['深色模式','快速预设','即时预览'], Icon:Type },
            { id:'02', key:'leo', name:'LEO', type:'礼物选购者', motive:'简化决策', goal:'选择画框、托特包或抱枕作为礼物，并添加简短赠言。', tags:['清晰选项','减少选择负担','简短赠言'], Icon:Gift },
            { id:'03', key:'aya', name:'AYA', type:'设计敏感型游客', motive:'延续探索', goal:'比较不同艺术家，保存抱枕设计，并在之后继续完成。', tags:['精致视觉呈现','便于保存','可分享性'], Icon:Bookmark },
          ].map(({id,key,name,type,motive,goal,tags,Icon}) => <article className={`mw3-ref-persona mw3-ref-persona-${key}`} key={name}>
            <div className="mw3-ref-image" role="img" aria-label={`${name} 的概念使用情境插画`} />
            <div className="mw3-ref-persona-name"><small>{id}</small><h4>{name}</h4><span>{type}</span></div>
            <h5><Icon aria-hidden="true" />{motive}</h5><p>{goal}</p>
            <ul>{tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </article>)}
        </div>
      </section>

      <section className="mw3-ref-contexts" aria-labelledby="mw3-contexts-title">
        <header className="mw3-ref-section-head"><div><p>B / USE CONTEXTS</p><h3 id="mw3-contexts-title">使用情境</h3></div><span>不同使用环境带来不同操作条件，需要在产品体验中一并考虑。</span></header>
        <div className="mw3-ref-context-grid">
          <article className="mw3-ref-context mw3-ref-context-gallery"><div className="mw3-ref-image" role="img" aria-label="展览现场的移动使用情境插画" /><header><small>01</small><h4>展览现场</h4><span>IN-GALLERY</span></header><ul><li><Clock3 />停留时间有限</li><li><Smartphone />单手操作</li><li><WifiOff />网络可能不稳定</li></ul></article>
          <article className="mw3-ref-context mw3-ref-context-home"><div className="mw3-ref-image" role="img" aria-label="观展之后通过手机继续比较作品与完成设计的情境插画" /><header><small>02</small><h4>观展之后</h4><span>LATER CONTINUATION</span></header><ul><li><Clock3 />更充分地查看内容</li><li><Layers3 />比较艺术家与商品</li><li><Bookmark />保存设计并继续完成</li></ul></article>
        </div>
        <div className="mw3-ref-social">
          <header><small>03</small><h4>社交触点</h4><span>SOCIAL TOUCHPOINTS</span><p>分享个性化结果或订单确认，<br />并通过链接返回相关作品。</p></header>
          <div className="mw3-ref-social-flow" aria-label="个性化抱枕预览或订单确认，经由 Instagram 或微信分享，并通过链接返回相关艺术作品">
            <div className="mw3-ref-social-sources">
              <div className="mw3-ref-social-source mw3-ref-social-source-preview"><span aria-hidden="true" /><small>个性化抱枕预览</small></div>
              <b aria-hidden="true">或</b>
              <div className="mw3-ref-social-source mw3-ref-social-source-order"><span aria-hidden="true"><PackageCheck /></span><small>订单确认</small></div>
            </div>
            <ArrowRight className="mw3-ref-social-arrow" aria-hidden="true" />
            <div className="mw3-ref-social-node mw3-ref-social-share"><span><Instagram aria-hidden="true" /><MessageCircle aria-hidden="true" /></span><small>分享至 Instagram / 微信</small></div>
            <ArrowRight className="mw3-ref-social-arrow" aria-hidden="true" />
            <div className="mw3-ref-social-node mw3-ref-social-artwork"><span className="mw3-ref-social-thumb" aria-hidden="true" /><Link2 aria-hidden="true" /><small>链接返回相关艺术作品</small></div>
          </div>
          <p>Brief 中的社交使用情境设想，<br />不代表功能已经开发完成。</p>
        </div>
      </section>

      <section className="mw3-ref-scenarios" aria-labelledby="mw3-scenarios-title">
        <header className="mw3-ref-section-head"><div><p>C / KEY SCENARIOS</p><h3 id="mw3-scenarios-title">典型任务</h3></div><span>基于不同的使用条件，形成两种典型的任务路径。</span></header>
        <div className="mw3-ref-scenario-grid">
          <article className="mw3-ref-scenario mw3-ref-scenario-onsite"><header><small>01</small><h4>现场快速礼赠</h4><span>QUICK GIFT ON SITE</span><i>iOS · MOBILE</i><p>时间有限，需要快速完成。</p></header><ol>{[[ScanSearch,'识别作品'],[Gift,'选择礼品与规格'],[Type,'添加简短文字'],[Type,'选择字体'],[Image,'预览效果'],[CreditCard,'支付']].map(([Icon,label])=><li key={label}><Icon/><span>{label}</span></li>)}</ol></article>
          <article className="mw3-ref-scenario mw3-ref-scenario-home"><header><small>02</small><h4>回家后继续</h4><span>LATER AT HOME</span><i>iOS · MOBILE</i><p>较从容地比较并继续完成。</p></header><ol>{[[Image,'浏览五位艺术家'],[Filter,'筛选作品'],[SlidersHorizontal,'预设个性化'],[ShoppingBag,'加入购物车'],[PackageCheck,'结账']].map(([Icon,label])=><li key={label}><Icon/><span>{label}</span></li>)}</ol></article>
        </div>
      </section>

      <section className="mw3-ref-requirements" aria-labelledby="mw3-requirements-title">
        <header className="mw3-ref-section-head"><div><p>D / SHARED DESIGN REQUIREMENTS</p><h3 id="mw3-requirements-title">共同设计要求</h3></div><span>基于以上用户动机与使用条件，梳理出本项目的核心设计要求。</span></header>
        <ol>{[
          ['01',ScanSearch,'明确主操作','每个阶段保持一个清晰的主要行动。'],
          ['02',Layers3,'简化选择','利用有限预设降低个性化负担。'],
          ['03',Eye,'即时反馈','让用户理解选择对结果的影响。'],
          ['04',Bookmark,'支持连续完成','适应现场与展后的不同操作节奏。'],
          ['05',CheckCircle2,'保证可读与可操作','文字、状态和操作目标保持清晰。'],
        ].map(([id,Icon,title,copy])=><li key={id}><small>{id}</small><Icon aria-hidden="true"/><strong>{title}</strong><span>{copy}</span></li>)}</ol>
      </section>
    </Section>

    <Section number="03" cn="信息架构与用户流程" en="INFORMATION ARCHITECTURE & USER FLOW" title={<>页面如何组织，<br />任务如何完成。</>} body="以真实的页面职责建立信息结构，再用核心任务路径解释用户如何从发现作品走向购买完成。" className="mw3-architecture mw3-architecture-reference mw3-reframed">
      <section className="mw3-ia-reference" aria-labelledby="mw3-ia-title">
        <header className="mw3-architecture-head"><div><small>A / INFORMATION ARCHITECTURE</small><h3 id="mw3-ia-title">移动端信息架构</h3></div><p>06 个核心页面 · 03 组信息职责<br />功能分组是作品集中的梳理方式，并非独立导航入口</p></header>
        <div className="mw3-ia-tree" aria-label="MasterWorks App 的六个核心页面按三个功能领域组织">
          <div className="mw3-ia-root"><b>M</b><span><strong>MASTERWORKS APP</strong><small>iOS · MOBILE EXPERIENCE</small></span></div>
          <div className="mw3-ia-groups">
            <article className="mw3-ia-group mw3-ia-discover"><header><small>01 / DISCOVER</small><h4>内容探索</h4><p>CONTENT DISCOVERY</p><span>2 PAGES</span></header><div className="mw3-ia-page"><small>P01</small><strong>Home</strong><p>精选艺术家与代表作品<br />分类浏览、作品搜索</p></div><div className="mw3-ia-page"><small>P02</small><strong>Artwork Detail</strong><p>作品介绍、艺术家信息<br />相关衍生品与购买入口</p></div></article>
            <article className="mw3-ia-group mw3-ia-manage"><header><small>02 / MANAGE</small><h4>商品管理</h4><p>PRODUCT MANAGEMENT</p><span>1 PAGE + 1 FUNCTION</span></header><div className="mw3-ia-page"><small>P03</small><strong>My Cart</strong><p>商品列表、数量调整<br />价格合计与结账入口</p></div><aside><span>FUNCTION / PERSONALISATION</span><b>非独立页面</b><strong>个性化功能</strong><p>商品规格 · 简短文字 · 字体选择<br />实时预览商品效果</p><em>功能归属展示 · 实际操作发生在加入购物车之前</em></aside></article>
            <article className="mw3-ia-group mw3-ia-complete"><header><small>03 / COMPLETE</small><h4>订单处理</h4><p>ORDER &amp; PAYMENT</p><span>3 PAGES</span></header><div className="mw3-ia-page"><small>P04</small><strong>Checkout</strong><p>配送信息、支付方式与订单确认</p></div><div className="mw3-ia-page"><small>P05</small><strong>Processing Payment</strong><p>付款处理中 · 系统状态反馈</p></div><div className="mw3-ia-page"><small>P06</small><strong>Order Confirmation</strong><p>购买结果 · 返回浏览 / 查看订单</p></div></article>
          </div>
        </div>
        <footer className="mw3-ia-foot"><p>页面层级与信息归属是重点；具体操作顺序见下方 User Flow。</p><div><span>核心页面</span><span>功能说明</span></div></footer>
      </section>
      <section className="mw3-flow-reference" aria-labelledby="mw3-flow-title">
        <header className="mw3-architecture-head"><div><small>B / USER FLOW</small><h3 id="mw3-flow-title">从浏览作品到订单确认</h3></div><p>原 PDF 第 13 页的主购物路径<br />个性化功能依据第 18–19 页补充说明</p></header>
        <div className="mw3-flow-stages" aria-hidden="true"><span>01 / DISCOVER · 作品浏览</span><span>02 / SELECT · 选择与管理</span><span>03 / CHECKOUT · 支付与确认</span></div>
        <ol className="mw3-flow-track">{[
          ['发现作品','HOME','浏览艺术家','选择感兴趣的内容'],['查看详情','ARTWORK DETAIL','了解作品与','相关衍生品'],['选择商品','PRODUCT SELECTION','按需要设置','规格与个性化内容'],['加入购物车','MY CART','确认商品、数量','进入结账'],['填写并支付','CHECKOUT','配送信息 · 支付方式','提交订单'],['订单确认','PROCESSING → SUCCESS','系统处理支付','呈现订单结果']
        ].map(([title,label,line1,line2],index)=><li key={title}><small>{String(index+1).padStart(2,'0')}</small><strong>{title}</strong><em>{label}</em><p>{line1}<br />{line2}</p>{index<5&&<i aria-hidden="true">→</i>}{index===4&&<span className="mw3-processing-state">Processing Payment<br />系统处理中</span>}</li>)}</ol>
        <div className="mw3-key-interaction"><strong>KEY INTERACTION</strong><p>个性化可介入商品选择与加入购物车之间：规格 → 文字 → 字体 → 实时预览。</p><span>功能衔接，不代表新增 IA 页面</span></div>
        <footer className="mw3-flow-foot"><p>把页面归属与任务顺序分开表达。<br />结构决定信息在哪里，流程说明操作如何向前推进。</p><span>MASTERWORKS / 03</span></footer>
      </section>
    </Section>

    <Section number="04" cn="低保真与交互设计" en="WIREFRAMES & INTERACTION DESIGN" title={<>从页面结构，<br />到具体的内容与操作布局。</>} body={<>在原始低保真中梳理内容顺序、页面布局与操作入口，<br />让信息架构真正落实到移动端界面。</>} className="mw3-wireframes mw3-wireframes-reference mw3-reframed">
      <div className="mw3-wireframe-summary" aria-label="本章内容概览"><span><strong>12</strong>ORIGINAL WIREFRAMES</span><span><strong>03</strong>FOCUS AREAS</span><span><strong>iOS</strong>MOBILE EXPERIENCE</span></div>
      <section className="mw3-original-wireframes" aria-labelledby="mw3-original-wireframes-title">
        <header className="mw3-wire-section-head"><div><small>A / ORIGINAL WIREFRAMES</small><h3 id="mw3-original-wireframes-title">完整的页面骨架，<br />构成主要任务的操作基础。</h3></div><p>直接使用原始设计文件中的 12 张真实线框，完整保留页面状态与布局。这里呈现的是真实低保真，而非重新生成的示意界面。</p></header>
        {[{id:'01',en:'ENTRY & SETUP',title:'入口与准备',copy:'启动、三段引导及登录相关状态，构成进入产品的前置界面。',items:[[1,'SPLASH'],[2,'ONBOARD 01'],[3,'ONBOARD 02'],[4,'ONBOARD 03'],[5,'SIGN IN'],[6,'SIGN UP']]},{id:'02',en:'CORE EXPERIENCE',title:'探索与完成任务',copy:'从作品与艺术家浏览进入商品配置，再衔接购物车入口。',items:[[7,'HOME'],[8,'ARTIST'],[9,'ARTWORK DETAIL'],[10,'PRODUCT / PERSONALISE'],[11,'MY CART'],[12,'PRODUCT DETAIL']]}].map(group=><div className="mw3-wire-row" key={group.id}><header><small>{group.id} / {group.en}</small><h4>{group.title}</h4><p>{group.copy}</p></header><div>{group.items.map(([index,label])=><figure key={index}><img src={`${EVIDENCE_ROOT}lowfi-${index}.png`} alt={`${label} 原始低保真界面`} loading="lazy" /><figcaption><span>{label}</span><small>{String(index).padStart(2,'0')}</small></figcaption></figure>)}</div></div>)}
        <footer><span>原始来源：Prototype — line drawing / PDF 第 21 页</span><i aria-hidden="true" /><span>保留全部 12 个页面状态</span></footer>
      </section>
      <section className="mw3-interaction-decisions mw4-key-wireflow" aria-labelledby="mw3-interaction-decisions-title">
        <header className="mw4-flow-head"><div><small>B / WIREFLOW <span>INTERACTION STRUCTURE</span></small><h3 id="mw3-interaction-decisions-title">从作品浏览，<br />到个性化纪念与购买。</h3></div><p>基于原始低保真与 PDF 中定义的任务路径，<br />以真实页面及操作触点，说明关键页面的衔接。<br /><strong>一条主路径 · 一条快捷分支 · 一个同页反馈状态</strong></p></header>

        <section className="mw4-flow-stage mw4-flow-discover" aria-labelledby="mw4-discover-title">
          <header><div><small>01 / DISCOVER &amp; SELECT</small><h4 id="mw4-discover-title">浏览与选择</h4></div><p>通过艺术家进入作品详情；首页精选作品也可直接进入详情。</p></header>
          <div className="mw4-grid-track mw4-grid-track-discover">
            {[
              {id:'01',cn:'发现内容',image:7,name:'Home',sub:'首页 · Browse',copy:'浏览艺术家与精选作品。',link:'选择艺术家'},
              {id:'02',cn:'浏览艺术家',image:8,name:'Artist',sub:'艺术家 · View works',copy:'查看艺术家及其作品集合。',link:'选择作品'},
              {id:'03',cn:'理解作品',image:9,name:'Artwork Detail',sub:'作品详情 · Details',copy:'查看作品信息与商品入口。',link:'Make a Gift'},
              {id:'04',cn:'选择商品',image:12,name:'Product Details',sub:'商品详情 · Select',copy:'确认商品与规格，进入个性化。'}
            ].map(node=><article className="mw4-grid-node" key={node.id}>
              <header><small>{node.id} / {node.cn}</small><h5>{node.name}</h5><p>{node.sub}</p></header>
              <img src={`${EVIDENCE_ROOT}lowfi-${node.image}.png`} alt={`${node.name} 原始低保真界面`} loading="lazy" />
              <p className="mw4-node-copy">{node.copy}</p>
              {node.link&&<div className="mw4-grid-link" aria-hidden="true"><span>{node.link}</span><i /></div>}
            </article>)}
          </div>
          <div className="mw4-optional-route"><small>OPTIONAL PATH / 快捷路径</small><p><b>Home</b><i>→</i><b>Artwork Detail</b><span>从首页精选作品直接查看详情</span></p></div>
        </section>

        <div className="mw4-stage-continuation" aria-label="商品详情进入同页个性化配置状态"><span>Product Details</span><i aria-hidden="true">↓</i><strong>继续定制 · 同页状态延续</strong></div>

        <section className="mw4-flow-stage mw4-flow-configure" aria-labelledby="mw4-configure-title">
          <header><div><small>02 / CONFIGURE &amp; CONTINUE</small><h4 id="mw4-configure-title">配置与购买</h4></div><p>商品页内完成规格、文字和字体设置；预览结果后加入购物车。</p></header>
          <div className="mw4-grid-track mw4-grid-track-configure">
            <article className="mw4-grid-node is-personalise">
              <header><small>04b / 同页配置</small><h5>Product · Configure</h5><p>规格 · 文字 · 字体</p></header>
              <img src={`${EVIDENCE_ROOT}lowfi-10.png`} alt="包含商品规格、个性化文字与字体选择的原始低保真界面" loading="lazy" />
              <p className="mw4-node-copy">选择规格，输入个性化内容并设置字体。</p>
              <div className="mw4-grid-link" aria-hidden="true"><span>实时反馈</span><i /></div>
            </article>
            <article className="mw4-grid-node mw4-preview-node">
              <header><small>STATE / 系统反馈</small><h5>Live Preview</h5><p>同页预览 · No new page</p></header>
              <div className="mw4-preview-state"><Eye aria-hidden="true" /><strong>实时预览</strong><p>每次选择与输入都反馈到商品效果；原低保真没有独立 Preview 页面。</p></div>
              <p className="mw4-node-copy">确认结果后执行加入购物车。</p>
              <div className="mw4-grid-link" aria-hidden="true"><span>确认设计 / 加入购物车</span><i /></div>
            </article>
            <article className="mw4-grid-node">
              <header><small>05 / 确认商品</small><h5>My Cart</h5><p>购物车 · Review cart</p></header>
              <img src={`${EVIDENCE_ROOT}lowfi-11.png`} alt="My Cart 原始低保真界面" loading="lazy" />
              <p className="mw4-node-copy">核对商品与金额，通过 Checkout 继续购买。</p>
            </article>
          </div>
        </section>

        <footer className="mw4-flow-next"><small>NEXT / 后续路径</small><strong>My Cart <i>→</i> Checkout <i>→</i> Processing Payment <i>→</i> Order Confirmation</strong><p>支付与订单确认按 PDF 中的实际流程衔接；此处不伪造缺失的低保真界面。</p></footer>
      </section>
    </Section>

    <Section number="05" cn="视觉语言与可访问性" en="VISUAL SYSTEM & ACCESSIBILITY" title="让视觉规则，成为清晰体验的一部分。" body="以色彩、字体、组件和网格建立统一的移动端视觉语言，并把可读性与操作清晰度落实到真实界面中。" className="mw3-system mw3-reframed mw5-system">
      <section className="mw5-foundations" aria-labelledby="mw5-foundations-title">
        <header className="mw5-block-head"><div><small>A / VISUAL FOUNDATIONS</small><h3 id="mw5-foundations-title">视觉基础</h3></div><p>先建立色彩与字体层级，再让组件与空间规则保持一致。</p></header>

        <div className="mw5-foundation-grid">
          <article className="mw5-palette" aria-labelledby="mw5-palette-title">
            <header><small>01 / COLOR PALETTE</small><h4 id="mw5-palette-title">有限的高亮色，承载明确的状态。</h4></header>
            <div className="mw5-swatches mw5-swatches-primary">
              {[
                ['#00D1FF','RGB 0, 209, 255','SIGNAL CYAN'],
                ['#7A50FF','RGB 122, 80, 255','FUNCTION PURPLE'],
                ['#00031A','RGB 0, 3, 26','DEEP NAVY'],
                ['#FFFFFF','RGB 255, 255, 255','WHITE']
              ].map(([hex,rgb,label])=><div key={hex} style={{'--mw5-swatch':hex}}><span>{label}</span><strong>{hex}</strong><small>{rgb}</small></div>)}
            </div>
            <div className="mw5-neutral-row" aria-label="中性色">
              {['#FAFAFA','#F2F6F9','#E1EAEC','#15222B'].map(hex=><span key={hex} style={{'--mw5-swatch':hex}}><i />{hex}</span>)}
            </div>
            <p className="mw5-caption">青色用于关键操作与当前状态，紫色只承担个性化等功能性强调；深蓝黑与中性色构成主要阅读表面。</p>
          </article>

          <article className="mw5-type" aria-labelledby="mw5-type-title">
            <header><small>02 / TYPOGRAPHY</small><h4 id="mw5-type-title">同一套字阶，建立稳定的阅读顺序。</h4></header>
            <div className="mw5-type-specimen"><b>Aa</b><span><strong>移动端文字层级</strong><small>Sentence case · iOS</small></span></div>
            <div className="mw5-type-scale">
              {[
                ['H1','36 / 44','ExtraBold'],['H2','36 / 44','Regular'],['H3','32 / 40','Bold'],['H4','24 / 30','ExtraBold'],['H5','20 / 26','ExtraBold'],['Body','16 / 22','Medium'],['Small','14 / 17','Regular']
              ].map(([role,size,weight])=><div key={role}><span>{role}</span><strong>{size}</strong><small>{weight}</small></div>)}
            </div>
            <p className="mw5-caption">标题与正文采用稳定的字号、行高和字重关系，让浏览信息、说明文字与操作标签保持清晰层级。</p>
          </article>
        </div>
      </section>

      <section className="mw5-rules" aria-labelledby="mw5-rules-title">
        <header className="mw5-block-head"><div><small>B / SYSTEM IN USE</small><h3 id="mw5-rules-title">组件与空间</h3></div><p>组件先保证动作清楚，网格再负责让内容在不同页面中保持秩序。</p></header>
        <div className="mw5-rules-grid">
          <article className="mw5-components" aria-labelledby="mw5-components-title">
            <header><small>03 / ICONOGRAPHY &amp; COMPONENTS</small><h4 id="mw5-components-title">图标、列表与按钮共享同一种操作语法。</h4></header>
            <div className="mw5-component-stage">
              <div className="mw5-icon-set" aria-label="图标示例"><i><Image /></i><i><Layers3 /></i><i><ShoppingBag /></i><i><Bookmark /></i><i><Eye /></i></div>
              <div className="mw5-component-list"><span><Image /><b>Artwork title</b><small>View details</small></span><span><ShoppingBag /><b>Selected item</b><small>Review cart</small></span></div>
              <div className="mw5-button-set"><button type="button">Primary action</button><button type="button">Secondary</button><button type="button">Text action →</button></div>
            </div>
            <p className="mw5-caption">44px 圆形图标区、明确的文字标签与单一主操作，共同维持一致的操作语法。</p>
          </article>

          <article className="mw5-grid" aria-labelledby="mw5-grid-title">
            <header><small>04 / SPACE &amp; GRID</small><h4 id="mw5-grid-title">四栏网格，把固定结构融入真实页面。</h4></header>
            <div className="mw5-grid-visual">
              <div className="mw5-grid-data">
                <div className="mw5-grid-metrics"><span><small>CANVAS</small><strong>402 × 874</strong></span><span><small>MARGIN</small><strong>20 px</strong></span><span><small>GUTTER</small><strong>20 px</strong></span><span><small>COLUMNS</small><strong>04</strong></span></div>
                <dl className="mw5-structure"><div><dt>44 px</dt><dd>Status bar</dd></div><div><dt>40 px</dt><dd>Navigation</dd></div><div><dt>90 px</dt><dd>Bottom navigation</dd></div></dl>
              </div>
              <figure><img src={`${UI_ROOT}${screenAssets.home}`} alt="应用四栏网格的 MasterWorks 首页" loading="lazy" /><div aria-hidden="true">{[1,2,3,4].map(column=><i key={column} />)}</div></figure>
            </div>
          </article>
        </div>
      </section>

      <section className="mw5-accessibility" aria-labelledby="mw5-accessibility-title">
        <header className="mw5-block-head"><div><small>C / ACCESSIBILITY</small><h3 id="mw5-accessibility-title">可读与可操作，不是附加层。</h3></div><p>已实现的层级、状态与导航规则服务于日常阅读和操作；本项目未将其表述为正式的可访问性合规认证。</p></header>
        <div className="mw5-accessibility-grid">
          <article><Type /><span><strong>稳定的文字层级</strong><p>固定字阶区分标题、正文与辅助信息。</p><div className="mw5-a11y-type" aria-label="文字层级示例"><b>作品名称</b><span>艺术家与作品说明</span><i>辅助信息</i></div></span></article>
          <article><Eye /><span><strong>对比与状态可辨识</strong><p>高对比文字与有限强调色明确当前操作。</p><div className="mw5-a11y-state" aria-label="按钮状态示例"><b>主要操作</b><span>已选择</span><i>次要操作</i></div></span></article>
          <article><Smartphone /><span><strong>直接且一致的导航</strong><p>固定位置与文字标签降低页面切换成本。</p><nav className="mw5-a11y-nav" aria-label="导航组件示例"><span><Image />作品</span><span><Layers3 />艺术家</span><span><ShoppingBag />购物车</span></nav></span></article>
        </div>
        <p className="mw5-accessibility-future"><b>后续增强方向</b><span>可调文字、屏幕阅读器兼容、键盘导航、高对比主题与多语言仍属于计划项，尚未进行正式验证。</span></p>
      </section>

      <section className="mw5-application" aria-labelledby="mw5-application-title">
        <header className="mw5-block-head"><div><small>D / APPLIED SYSTEM</small><h3 id="mw5-application-title">规范如何进入界面</h3></div><p>同一 Home 页面在浅色与深色表面中保持一致的内容层级、组件关系与导航位置。</p></header>
        <div className="mw5-mode-comparison" aria-label="MasterWorks 首页浅色与深色模式对比">
          <figure><img src={`${ROOT}ui/img-094.jpg`} alt="MasterWorks 浅色模式 Home 页面" width="804" height="1748" loading="eager" /><figcaption><small>LIGHT MODE</small><strong>Home</strong></figcaption></figure>
          <figure><img src={`${ROOT}ui/img-096.jpg`} alt="MasterWorks 深色模式 Home 页面" width="804" height="1748" loading="eager" /><figcaption><small>DARK MODE</small><strong>Home</strong></figcaption></figure>
        </div>
        <p className="mw5-application-summary">两种模式共享同一字阶、组件语法与四栏网格，仅通过表面明暗和状态色适配不同阅读环境。</p>
      </section>
    </Section>

    <Section number="06" cn="核心体验与最终界面" en="CORE EXPERIENCE & FINAL UI" title="从发现作品，到完成一件个性化纪念。" body="高保真界面按进入体验、作品探索、个性化设计与购买完成组织，完整呈现移动端设计成果。" className="mw3-final-experience mw3-reframed mw6-final-experience">
      <article className="mw3-final-group mw6-final-group mw6-entry"><header><small>A / ENTRY</small><h3>进入体验</h3><p>Splash、引导与账户入口共同建立首次使用的进入路径。</p></header><div className="mw6-subgroup-head"><strong>START &amp; ONBOARDING</strong><span>产品启动与三段引导</span></div><div className="mw6-screen-grid mw6-entry-start-grid">{[['splash','Splash'],['onboarding','Onboarding 01'],['onboardingCollect','Onboarding 02'],['onboardingCurate','Onboarding 03']].map(([name,label])=><Screen key={name} name={name} label={label} />)}</div><div className="mw6-subgroup-head"><strong>AUTHENTICATION</strong><span>身份验证入口</span></div><div className="mw6-screen-grid mw6-entry-auth-grid">{[['signin','Sign In'],['signup','Sign Up']].map(([name,label])=><Screen key={name} name={name} label={label} />)}</div></article>
      <article className="mw3-final-group mw6-final-group mw6-discover"><header><small>B / DISCOVER</small><h3>作品探索</h3><p>首页内容状态、艺术家页面与作品详情共同支持连续浏览。</p></header><div className="mw6-subgroup-head"><strong>HOME / CONTENT STATES</strong><span>同一首页的五种艺术家内容状态，并非连续操作步骤。</span></div><div className="mw6-screen-grid mw6-home-grid">{[['home','Beeple'],['homeAsh','Ash Thorp'],['homeOtomo','Katsuhiro Otomo'],['homeMead','Sydney Mead'],['homeKusama','Yayoi Kusama']].map(([name,label])=><Screen key={name} name={name} label={`Home / ${label}`} />)}</div><div className="mw6-subgroup-head"><strong>ARTIST &amp; ARTWORK DETAIL</strong><span>从艺术家入口进入不同作品的详细信息。</span></div><div className="mw6-screen-grid mw6-artwork-grid"><Screen name="artist" label="Artist / Beeple" /><Screen name="artworkVenus" label="Artwork / Life on Venus" /><Screen name="artworkAlt" label="Artwork / Industrial Grade" /><Screen name="artworkMicrochip" label="Artwork / 1984 Microchip Friend" /><Screen name="artworkDead" label="Artwork / Already Dead" /><Screen name="artwork" label="Artwork / Dance" /></div></article>
      <article className="mw3-final-group mw6-final-group mw6-personalise"><header><small>C / PERSONALISE</small><h3>个性化设计</h3><p>商品选择、设置与结果预览保持在一条清晰的操作序列中。</p></header><div className="mw6-step-line" aria-label="个性化操作顺序"><span><b>01</b>选择商品</span><i>→</i><span><b>02</b>个性化设置</span><i>→</i><span><b>03</b>实时预览</span></div><div className="mw6-screen-grid mw6-personalise-grid"><Screen name="product" label="Product Selection" /><Screen name="personalise" label="Personalisation" /><Screen name="preview" label="Live Preview" /></div></article>
      <article className="mw3-final-group mw6-final-group mw6-purchase"><header><small>D / PURCHASE</small><h3>购买完成</h3><p>购物车、配送与支付状态连续呈现，保持结果和下一步可见。</p></header><div className="mw6-screen-grid mw6-purchase-grid">{[['cart','My Cart'],['checkout','Checkout'],['processing','Processing Payment'],['confirmation','Order Confirmation']].map(([name,label])=><Screen key={name} name={name} label={label} />)}</div></article>
    </Section>

    <Section number="07" cn="交互原型与用户测试" en="PROTOTYPE & USER TESTING" title="两段视频，分别记录设计演示与真实测试。" body="原型录屏呈现完整交互路径，现场录像记录参与者完成主要任务的过程。" className="mw3-testing mw3-reframed">
      <div className="mw3-video-evidence mw7-video-evidence"><article><header><small>A / PROTOTYPE DEMO</small><h3>交互原型演示</h3></header><video controls playsInline preload="metadata" poster={`${EVIDENCE_ROOT}user-test-poster.png`} src={`${ROOT}Test.mov`}><track kind="captions" /></video><p>竖屏操作录屏，展示作品浏览、个性化、实时预览与购买任务。</p></article><article><header><small>B / USER TEST VIDEO</small><h3>用户测试录像</h3></header><video controls playsInline preload="metadata" poster={`${EVIDENCE_ROOT}prototype-test-poster.png`} src={`${ROOT}User.mp4`}><track kind="captions" /></video><p>记录参与者在原型中完成主要任务的实际操作过程。</p></article></div>
      <div className="mw3-test-record mw7-test-record"><header><small>C / TEST FINDINGS &amp; ADJUSTMENTS</small><h3>测试发现与对应调整</h3><p>把观察到的问题转化为界面层级与反馈方式的具体调整。</p></header><div className="mw7-adjustment-list"><article><div><small>测试发现</small><strong>按钮层级需要更清楚</strong></div><ArrowRight aria-hidden="true" /><div><small>对应调整</small><p>进一步区分主要操作与次要操作的视觉优先级。</p></div></article><article><div><small>测试发现</small><strong>部分文字可见性需要提高</strong></div><ArrowRight aria-hidden="true" /><div><small>对应调整</small><p>优化文字对比、层级与关键信息的呈现清晰度。</p></div></article><article><div><small>测试发现</small><strong>导航与操作反馈需要更易理解</strong></div><ArrowRight aria-hidden="true" /><div><small>对应调整</small><p>保持当前状态、等待过程与完成结果的反馈可见。</p></div></article></div></div>
    </Section>

    <Section number="08" cn="设计反思与未来演进" en="REFLECTION & NEXT STEPS" title={<>让个性化成为<em>表达</em>，<br />而非参数配置。</>} body="个性化不只是参数配置，而是让用户参与作品意义的重新表达。" className="mw3-reflection mw3-reframed">
      <div className="mw3-reflection-split"><section className="mw8-decisions"><small>DESIGN REFLECTION / 设计反思</small><h3>本次设计形成的判断</h3><article><strong>减少配置感</strong><p>用有限选择与清晰主操作降低个性化的操作负担。</p></article><article><strong>让结果始终可见</strong><p>实时预览将输入、选择与最终纪念品直接联系。</p></article><article><strong>让反馈支撑连续任务</strong><p>导航、等待和完成状态帮助用户保持对路径的理解。</p></article></section><section className="mw8-next"><small>NEXT STEPS / 未来演进</small><h3>尚未完成的改进方向</h3><article><strong>平板与更大屏幕适配</strong><p>扩展不同尺寸下的信息布局与操作策略。</p></article><article><strong>文本校验与错误恢复</strong><p>完善输入限制、错误反馈与未完成任务的恢复机制。</p></article><article><strong>辅助技术与多语言</strong><p>继续探索文字缩放、屏幕阅读器、键盘和中英文版本。</p></article></section></div>
    </Section>

    <footer className="mw3-footer"><small>END / NEXT PROJECT</small><a href={nextProject?.href || '#projects'}><span>{nextProject?.title || '返回项目目录'}</span><ArrowRight aria-hidden="true" /></a></footer>
  </article>
}
