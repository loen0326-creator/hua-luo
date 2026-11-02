import './pinsight-ui-final-integrate.css';

const A='/assets/pinsight/final-ui/';
const shot=(src,alt,cap,cls='')=>`<figure class="pinsight-ui-final-frame ${cls}"><img src="${A+src}" alt="${alt}" loading="lazy"><figcaption>${cap}</figcaption></figure>`;
const header=(n,title,desc)=>`<header class="pinsight-ui-final-head"><div class="pinsight-ui-final-kicker">${n}</div><h2>${title}</h2><p>${desc}</p></header>`;
const section=(cls,html)=>`<section class="pinsight-ui-final-section ${cls}">${html}</section>`;

function build(){
 return `<div class="pinsight-ui-final" data-pinsight-final-ui>
 ${section('pinsight-spatial',header('06 / 空间反馈交互','把现场的一句话，与具体设计区域和后续行动连接起来。')+`
  <div class="pinsight-ui-final-grid">
   <div class="pinsight-ui-final-copy"><div class="num">06.1 / CAPTURE</div><h3>捕捉现场反馈</h3><p>识别导师与同伴的发言来源，同时保留实时录音和反馈内容。</p></div>
   <div class="pinsight-ui-final-media">${shot('tutor-speaking.png','导师发言被实时捕捉','导师发言、时间与反馈来源被同步保留。')}</div>
  </div>
  <div class="pinsight-ui-final-grid pinsight-ui-final-sub">
   <div class="pinsight-ui-final-media is-left">${shot('smart-pen.png','智能笔建立空间位置','Smart Pen 将手写标记和作品区域建立直接关联。')}</div>
   <div class="pinsight-ui-final-copy is-right"><div class="num">06.2 / LOCATE</div><h3>建立空间位置</h3><p>通过指向、书写和圈选，把反馈锚定到作品中的真实区域。</p></div>
  </div>
  <div class="pinsight-ui-final-sub"> <div class="num">06.3 / FEEDBACK DETAIL</div><h3 class="pinsight-ui-final-subtitle">恢复一条反馈的完整上下文</h3>${shot('feedback-detail.png','空间反馈详情','来源、位置、类别、优先级与建议在同一个 Feedback Object 中连续保存。','pinsight-ui-final-wide')}</div>`)}
 ${section('pinsight-lifecycle',header('07 / 反馈生命周期','同一条反馈从现场捕捉，逐步转化为可回顾、可执行的修改任务。')+`
  <div class="pinsight-ui-life">
   <article class="wide"><h3>01 / 现场反馈出现</h3>${shot('live-status.png','现场反馈状态','系统进入现场讲评状态并保持设备连接。')}</article>
   <article><h3>02 / 捕捉内容</h3>${shot('live-capture.png','反馈捕捉','记录发言人与反馈内容。')}</article>
   <article><h3>03 / 连接区域</h3>${shot('feedback-linked.png','反馈与作品位置连接','将反馈与具体设计区域建立连接。')}</article>
   <article class="wide"><h3>04 / 形成空间反馈</h3>${shot('spatial-ready.png','空间反馈建立完成','反馈身份、位置和状态在空间中保持连续。')}</article>
   <article><h3>05 / 查看详情</h3>${shot('feedback-detail.png','反馈详情','回看一条反馈的来源、类别和行动建议。')}</article>
   <article><h3>06 / 完成会话</h3>${shot('session-complete.png','讲评会话完成','会话记录保存，并同步到后续回顾体验。')}</article>
   <article class="wide"><h3>07 / AI 辅助整理</h3>${shot('ai-summary.png','AI 反馈摘要','概念原型中，AI 协助归纳问题与优先级。')}</article>
   <article class="wide"><h3>08 / 转化为修改行动</h3>${shot('action-guide-scene.png','修改行动指南','反馈最终进入 Revision Action Guide。')}</article>
  </div>`)}
 ${section('pinsight-review',header('08 / 反馈回顾与修改行动','让零散评论经过整理，成为清楚的修改顺序。')+`
  <div class="pinsight-ui-flow"><span>Raw Feedback</span><span>Grouped Issues</span><span>Key Insights</span><span>Priority</span><span>Revision Action</span><span>Progress</span></div>
  <div class="pinsight-ui-pair"><div>${shot('ai-summary.png','AI Summary','AI 辅助整理关键议题与反馈主题。')}</div><div>${shot('ask-pinsight.png','Ask PinSight','通过 Ask PinSight 继续追问反馈与下一步。')}</div></div>
  <div class="pinsight-ui-final-sub">${shot('web-revision.png','Web Revision Workspace','在 Web Revision Workspace 中管理优先级、任务与进度。')}</div>`)}
 ${section('pinsight-cross-device',header('09 / Web 与跨设备体验','设备变化，但 Feedback Object 的身份、位置与状态保持连续。')+`
  <div class="pinsight-ui-continuity"><div><b>XR</b><small>Feedback 03 · Tutor</small></div><span>→</span><div><b>Feedback Object</b><small>Main Title · Needs Revision</small></div><span>→</span><div><b>Web</b><small>同一条反馈继续进入修改任务</small></div></div>
  <div class="pinsight-ui-stack">${shot('web-dashboard.png','PinSight Web Dashboard','Web Dashboard 汇总会话、反馈记录和修改进度。')}${shot('web-create.png','创建讲评会话','创建会话并连接 XR、Smart Pen 与设计作品。')}</div>`)}
 ${section('pinsight-final-ui',header('10 / Final UI','四组核心体验使用统一结构呈现主界面与关键状态。')+`
  <div class="pinsight-ui-templates">
   ${template('10.1','Live Critique','从监听、识别来源到保存反馈。','live-capture.png','Listening → Tutor Detected → Captured')}
   ${template('10.2','Spatial Feedback','从指向作品到生成 Spatial Pin。','feedback-linked.png','Point → Anchor → Pin → Detail')}
   ${template('10.3','Smart Pen','同步手写、圈选与位置识别。','smart-pen.png','Pointing → Handwriting → Recognition')}
   ${template('10.4','Web Revision Workspace','从回顾 Feedback Record 到执行修改任务。','web-revision.png','Record → Summary → Priority → Action → Progress')}
  </div>`)}
 </div>`;
}
function template(n,t,d,img,state){return `<article class="pinsight-ui-template"><div class="intro"><div class="pinsight-ui-final-kicker">${n}</div><h3>${t}</h3><p>${d}</p><div class="state">${state}</div></div>${shot(img,t,`${t} 的主界面与关键状态。`)}</article>`}

function mount(){
 const root=document.querySelector('#case-pinsight'); if(!root||root.querySelector('[data-pinsight-final-ui]'))return;
 root.querySelectorAll('.pinsight-ui-integrated,.pinsight-ui-rescue').forEach(n=>n.remove());
 const reflection=root.querySelector(':scope > .ps-reflection');
 const holder=document.createElement('div');holder.innerHTML=build();
 const node=holder.firstElementChild; reflection?root.insertBefore(node,reflection):root.appendChild(node);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
new MutationObserver(mount).observe(document.documentElement,{childList:true,subtree:true});
addEventListener('hashchange',()=>setTimeout(mount,60));setTimeout(mount,350);
