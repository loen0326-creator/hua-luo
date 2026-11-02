import "./pinsight-final-v2.css";

const ASSET = "/assets/pinsight/final-ui/";
const visual = (file, alt, caption, cls = "") => `
  <figure class="psv2-figure ${cls}">
    <img src="${ASSET}${file}" alt="${alt}" loading="lazy">
    <figcaption>${caption}</figcaption>
  </figure>`;

const header = (no, name, title, intro) => `
  <header class="psv2-header">
    <p class="psv2-marker"><span>${no}</span> ${name}</p>
    <h2>${title}</h2>
    <p>${intro}</p>
  </header>`;

function mountPinSightFinal() {
  const root = document.querySelector("#case-pinsight");
  if (!root || root.querySelector(".psv2-experience")) return Boolean(root);

  const oldTitles = ["空间反馈交互", "一条反馈的生命周期", "反馈回顾与修改行动", "Web 与跨设备体验", "UI 系统与 Final UI"];
  root.querySelectorAll("h1,h2,h3").forEach((heading) => {
    if (!oldTitles.some((title) => heading.textContent.includes(title))) return;
    const block = heading.closest("section") || heading.closest("div");
    if (block && block !== root) block.classList.add("psv2-hidden");
  });

  const content = document.createElement("div");
  content.className = "psv2-experience";
  content.innerHTML = `
    <section class="psv2-section" id="pinsight-spatial-feedback">
      ${header("06", "空间反馈交互", "让现场反馈保留来源、位置与上下文。", "PinSight 将课堂中的口头意见、Smart Pen 指向与作品区域连接为可回顾的空间反馈对象。")}
      <div class="psv2-stack">
        <div class="psv2-grid psv2-split">
          <div class="psv2-copy"><p class="psv2-sub">06.1 / 捕捉现场反馈</p><h3>先确认谁说了什么。</h3><p>系统区分导师与同伴来源，并在讲评发生时保存实时反馈内容与捕捉状态。</p></div>
          ${visual("live-capture.png", "现场反馈捕捉界面", "Live Feedback / 来源、转录与捕捉状态", "psv2-media")}
        </div>
        <div class="psv2-grid psv2-split psv2-reverse">
          ${visual("feedback-linked.png", "反馈与海报区域建立连接", "Locate / 反馈与作品区域建立空间关系", "psv2-media")}
          <div class="psv2-copy"><p class="psv2-sub">06.2 / 建立空间位置</p><h3>再确认这条反馈针对哪里。</h3><p>Smart Pen 指向具体设计区域，系统据此建立 Anchor，并生成可继续追踪的 Spatial Pin。</p></div>
        </div>
        <div class="psv2-wide-block">
          <div class="psv2-copy psv2-copy-wide"><p class="psv2-sub">06.3 / FEEDBACK DETAIL</p><h3>一条反馈重新获得完整上下文。</h3><p>来源、位置、类别、优先级与状态共同构成 Feedback Object，而不只是一段孤立转录。</p></div>
          ${visual("feedback-detail.png", "反馈详情界面", "Feedback Detail / 来源 · 位置 · 类别 · 优先级 · 状态")}
        </div>
      </div>
    </section>

    <section class="psv2-section" id="pinsight-feedback-lifecycle">
      ${header("07", "反馈生命周期", "一条反馈如何从现场的一句话走向修改行动。", "固定顺序展示 Feedback 03 在捕捉、定位、整理与行动阶段中的信息变化。")}
      <div class="psv2-lifecycle">
        <article class="psv2-life psv2-life-wide"><span>01</span><h3>现场讲评开始</h3>${visual("live-status.png", "课堂讲评系统状态", "Live Critique / 系统进入监听与捕捉状态")}</article>
        <div class="psv2-grid psv2-pair">
          <article class="psv2-life"><span>02</span><h3>导师提出反馈</h3>${visual("tutor-speaking.png", "导师反馈状态", "Tutor Feedback / 来源被识别")}</article>
          <article class="psv2-life"><span>03</span><h3>反馈被捕捉</h3>${visual("feedback-linked.png", "反馈捕捉状态", "Capture / 内容与时间被保存")}</article>
        </div>
        <article class="psv2-life psv2-life-wide"><span>04</span><h3>Smart Pen 定位设计区域</h3>${visual("smart-pen.png", "智能笔手写和定位", "Locate & Anchor / 手写、指向与设计区域建立关联")}</article>
        <div class="psv2-grid psv2-pair">
          <article class="psv2-life"><span>05</span><h3>查看 Feedback Detail</h3>${visual("feedback-detail.png", "反馈详情", "Context Restored / 来源、位置与优先级")}</article>
          <article class="psv2-life"><span>06</span><h3>AI 辅助整理</h3>${visual("ai-summary.png", "AI 反馈总结", "Organise / 原型模拟整理关键问题")}</article>
        </div>
        <article class="psv2-life psv2-life-wide"><span>07</span><h3>转化为 Revision Action</h3>${visual("action-guide-scene.png", "修改行动建议", "Review & Act / 反馈转化为下一步修改建议")}</article>
        <article class="psv2-life psv2-life-wide"><span>08</span><h3>会话完成并同步</h3>${visual("session-complete.png", "会话完成界面", "Session Complete / Feedback 03 延续到 Web Review")}</article>
      </div>
    </section>

    <section class="psv2-section" id="pinsight-review-act">
      ${header("08", "反馈回顾与修改行动", "从原始意见到可执行的修改任务。", "AI 在概念原型中承担整理与提示角色，最终判断与修改仍由学生完成。")}
      <div class="psv2-transform" aria-label="反馈转化流程">
        <div><span>01</span><b>COMMENT</b><p>标题区域显得拥挤</p></div><i>→</i>
        <div><span>02</span><b>ISSUE</b><p>视觉层级</p></div><i>→</i>
        <div><span>03</span><b>PRIORITY</b><p>优先处理</p></div><i>→</i>
        <div><span>04</span><b>ACTION</b><p>强化标题与主体关系</p></div>
      </div>
      <div class="psv2-grid psv2-ai-pair">
        ${visual("ai-summary.png", "AI feedback summary", "AI Summary / 汇总关键问题与修改线索", "psv2-ai-main")}
        ${visual("ask-pinsight.png", "Ask PinSight voice assistant", "Ask PinSight / 通过语音回顾反馈", "psv2-ai-side")}
      </div>
      <div class="psv2-web-hero">${visual("web-revision.png", "Web revision workspace", "Web Revision Hero / Priority · Tasks · Progress")}</div>
    </section>

    <section class="psv2-section" id="pinsight-cross-device">
      ${header("09", "跨设备连续体验", "设备变化，但 Feedback 的身份与状态保持连续。", "XR 与 Web 共享同一个 Feedback Object，使课堂现场与课后修改成为一条完整链路。")}
      <div class="psv2-continuity">
        <div><small>XR</small><strong>Feedback 03</strong><span>Tutor · Main Title</span></div><b>→</b>
        <div class="is-core"><small>SHARED OBJECT</small><strong>Feedback Record</strong><span>Captured · Located · Needs Revision</span></div><b>→</b>
        <div><small>WEB</small><strong>Feedback 03</strong><span>Review · Task · Progress</span></div>
      </div>
      <div class="psv2-web-stack">
        ${visual("web-dashboard.png", "PinSight web dashboard", "Web 01 / Session Record 与 Feedback Review")}
        ${visual("web-create.png", "PinSight create critique session", "Web 02 / 创建讲评会话与配置空间反馈")}
      </div>
    </section>

    <section class="psv2-section" id="pinsight-final-ui">
      ${header("10", "Final UI", "四组最终体验使用同一展示模板。", "每组以真实主界面为核心，并通过简短 Caption 说明关键状态。")}
      <div class="psv2-templates">
        <article class="psv2-template"><p class="psv2-sub">10.1</p><h3>Live Critique</h3><p>从 Listening 到 Tutor Detected，再到 Feedback Captured。</p>${visual("live-capture.png", "Live Critique final UI", "States / Listening · Tutor Detected · Captured")}</article>
        <article class="psv2-template"><p class="psv2-sub">10.2</p><h3>Spatial Feedback</h3><p>从 Point、Anchor、Pin 到 Feedback Detail。</p>${visual("spatial-ready.png", "Spatial Feedback final UI", "States / Point · Anchor · Pin · Detail")}</article>
        <article class="psv2-template"><p class="psv2-sub">10.3</p><h3>Smart Pen</h3><p>把手写批注、识别内容与设计区域同步保存。</p>${visual("smart-pen.png", "Smart Pen final UI", "States / Handwriting · Recognition · Spatial Sync")}</article>
        <article class="psv2-template"><p class="psv2-sub">10.4</p><h3>Web Revision Workspace</h3><p>从 Feedback Record 进入 Priority、Task 与 Progress。</p>${visual("web-revision.png", "Web Revision Workspace final UI", "States / Summary · Priority · Action · Progress")}</article>
      </div>
    </section>`;

  const reflection = [...root.querySelectorAll("h1,h2,h3")].find((h) => h.textContent.includes("项目反思"))?.closest("section");
  if (reflection && reflection !== root) root.insertBefore(content, reflection);
  else root.append(content);
  return true;
}

if (!mountPinSightFinal()) {
  const observer = new MutationObserver(() => {
    if (mountPinSightFinal()) observer.disconnect();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

