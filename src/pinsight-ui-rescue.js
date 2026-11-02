import './pinsight-ui-rescue.css';

const A = '/assets/pinsight/final-ui/';

function figure(file, caption, cls = '') {
  return `<figure class="pui-figure ${cls}"><img src="${A}${file}" alt="${caption}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;
}

function mount() {
  const root = document.querySelector('#case-pinsight');
  if (!root || root.querySelector('.pinsight-ui-integrated')) return;

  root.querySelectorAll('.psv2-experience').forEach((node) => node.remove());

  const section = document.createElement('div');
  section.className = 'pinsight-ui-integrated';
  section.innerHTML = `
    <section class="pui-section" id="pinsight-spatial-final">
      <header class="pui-header"><p class="pui-marker">06 / 空间反馈交互</p><h2>把现场的一句话，与作品中的具体位置连接起来。</h2><p>以下界面使用最终 XR 与 Smart Pen 素材，展示捕捉、定位、建立反馈对象和恢复上下文的完整状态。</p></header>
      <div class="pui-stack">
        <div class="pui-grid"><div class="pui-copy"><p class="pui-kicker">06.1 / 捕捉</p><h3>记录谁说了什么</h3><p>系统在现场区分导师与同伴反馈，并保留发言内容和时间状态。</p></div>${figure('tutor-speaking.png','Tutor Speaking / 导师反馈被实时捕捉','pui-visual-8')}</div>
        <div class="pui-grid">${figure('smart-pen.png','Smart Pen / 手写标注与作品区域同步','pui-visual-8')}<div class="pui-copy"><p class="pui-kicker">06.2 / 定位</p><h3>把反馈连接到作品区域</h3><p>Smart Pen 的指向和手写标注建立空间锚点，让意见不再脱离作品位置。</p></div></div>
        <div class="pui-full"><div class="pui-copy" style="margin-bottom:40px"><p class="pui-kicker">06.3 / Feedback Detail</p><h3>一条反馈保留完整上下文</h3><p>来源、位置、类别、优先级和建议在同一对象中保持连续。</p></div>${figure('feedback-detail.png','Feedback Detail / 来源、位置、类别、优先级与状态')}</div>
      </div>
    </section>

    <section class="pui-section" id="pinsight-lifecycle-final">
      <header class="pui-header"><p class="pui-marker">07 / 反馈生命周期</p><h2>从现场发言，到可以执行的修改任务。</h2><p>按照固定顺序呈现 Feedback 03 的身份、位置和状态如何持续变化。</p></header>
      <div class="pui-lifecycle">
        <div class="pui-life-item"><span>01 / FEEDBACK CREATED</span>${figure('live-status.png','现场讲评开始，系统进入捕捉状态')}</div>
        <div class="pui-life-row"><div class="pui-life-item"><span>02 / CAPTURE</span>${figure('live-capture.png','实时反馈被捕捉')}</div><div class="pui-life-item"><span>03 / LOCATE</span>${figure('feedback-linked.png','反馈与海报区域建立联系')}</div></div>
        <div class="pui-life-item"><span>04 / ANCHOR</span>${figure('spatial-ready.png','空间反馈卡片与作品区域保持关联')}</div>
        <div class="pui-life-row"><div class="pui-life-item"><span>05 / DETAIL</span>${figure('feedback-detail.png','重新查看反馈详情')}</div><div class="pui-life-item"><span>06 / ORGANISE</span>${figure('session-complete.png','讲评完成并保存记录')}</div></div>
        <div class="pui-life-item"><span>07 / REVIEW</span>${figure('ai-summary.png','AI 辅助整理关键问题')}</div>
        <div class="pui-life-item"><span>08 / REVIEW & ACT</span>${figure('action-guide-scene.png','反馈转化为下一步修改行动')}</div>
      </div>
    </section>

    <section class="pui-section" id="pinsight-review-final">
      <header class="pui-header"><p class="pui-marker">08 / 反馈回顾与修改行动</p><h2>把 Feedback 从记录，转化为行动。</h2><p>AI 只辅助整理；最终的优先级、选择和修改仍由学生完成。</p></header>
      <div class="pui-flow"><div><span>01</span><strong>Raw Feedback</strong></div><div><span>02</span><strong>Grouped Issue</strong></div><div><span>03</span><strong>Key Insight</strong></div><div><span>04</span><strong>Priority</strong></div><div><span>05</span><strong>Revision Action</strong></div></div>
      <div class="pui-grid" style="margin-bottom:104px">${figure('ai-summary.png','AI Summary / 反馈主题被辅助整理','pui-visual-7')}${figure('ask-pinsight.png','Ask PinSight / 针对修改问题继续提问','pui-visual-5')}</div>
      ${figure('web-revision.png','Web Revision Workspace / 修改任务与进度','pui-full')}
    </section>

    <section class="pui-section" id="pinsight-cross-final">
      <header class="pui-header"><p class="pui-marker">09 / Web 与跨设备体验</p><h2>设备变化，但同一条反馈的身份保持连续。</h2><p>Feedback 03 从 XR 现场同步到 Web，继续保留来源、位置、类别和修改状态。</p></header>
      <div class="pui-continuity"><div><b>XR</b><p>Feedback 03<br>Tutor · Main Title</p></div><span>→</span><div><b>Feedback Object</b><p>来源 · 内容 · 位置 · 状态</p></div><span>→</span><div><b>WEB</b><p>Needs Revision<br>Revision Workspace</p></div></div>
      <div class="pui-stack">${figure('web-dashboard.png','Web Dashboard / 讲评会话与项目概览')}${figure('web-create.png','Create Session / 创建讲评并连接设备')}</div>
    </section>

    <section class="pui-section" id="pinsight-final-ui-integrated">
      <header class="pui-header"><p class="pui-marker">10 / Final UI</p><h2>四组核心体验，使用同一套展示结构。</h2><p>不再用平均截图墙，而是以主状态、支持状态与上下文说明展示最终交互。</p></header>
      <article class="pui-uniform"><span>10.1 / LIVE CRITIQUE</span><h3>现场讲评</h3><p>Listening → Tutor Detected → Feedback Captured</p>${figure('live-capture.png','Live Critique / 现场反馈捕捉状态')}</article>
      <article class="pui-uniform"><span>10.2 / SPATIAL FEEDBACK</span><h3>空间反馈</h3><p>Point → Anchor → Pin → Detail</p>${figure('feedback-linked.png','Spatial Feedback / Feedback 与作品位置建立连接')}</article>
      <article class="pui-uniform"><span>10.3 / SMART PEN</span><h3>Smart Pen</h3><p>Pointing → Handwriting → Recognition</p>${figure('smart-pen.png','Smart Pen / 实时识别手写与作品区域')}</article>
      <article class="pui-uniform"><span>10.4 / WEB REVISION WORKSPACE</span><h3>Web 修改工作区</h3><p>Feedback Record → Summary → Priority → Action → Progress</p>${figure('web-revision.png','Web Revision Workspace / 修改任务与进度')}</article>
    </section>`;

  const reflection = [...root.querySelectorAll('section')].find((el) => /项目反思|reflection/i.test(el.textContent || ''));
  if (reflection) reflection.before(section); else root.append(section);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
else mount();
new MutationObserver(mount).observe(document.documentElement, { childList: true, subtree: true });
window.addEventListener('hashchange', mount);
window.setTimeout(mount, 300);

