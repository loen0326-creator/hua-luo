import "./pinsight-final-inject.css";

const asset = (name) => `/assets/pinsight/final-ui/${name}`;

const figure = (src, alt, caption, className = "") => `
  <figure class="ps-final-figure ${className}">
    <img src="${asset(src)}" alt="${alt}" loading="lazy" />
    <figcaption>${caption}</figcaption>
  </figure>`;

const sectionHeader = (number, label, title, intro) => `
  <header class="ps-final-header">
    <p class="ps-final-marker"><span>${number}</span>${label}</p>
    <h2>${title}</h2>
    <p>${intro}</p>
  </header>`;

function hideLegacySections(root) {
  const names = [
    "空间反馈交互",
    "一条反馈的生命周期",
    "反馈回顾与修改行动",
    "Web 与跨设备体验",
    "UI 系统与 Final UI",
  ];
  [...root.querySelectorAll("h1,h2,h3,p,span")].forEach((node) => {
    const text = node.textContent.trim();
    if (!names.some((name) => text.includes(name))) return;
    const section = node.closest("section");
    if (section && section !== root) section.classList.add("ps-legacy-hidden");
  });
}

function mountPinSightFinal() {
  const root = document.querySelector("#case-pinsight");
  if (!root || root.querySelector(".ps-final-experience")) return false;

  hideLegacySections(root);
  const wrapper = document.createElement("div");
  wrapper.className = "ps-final-experience";
  wrapper.innerHTML = `
    <section class="ps-final-section" id="pinsight-spatial-feedback">
      ${sectionHeader("06", "空间反馈交互", "把反馈从一句话，变成带位置与上下文的可追踪对象。", "现场捕捉、空间定位与反馈详情共同保留讲评发生时的来源、位置和行动上下文。")}

      <div class="ps-final-submodule ps-grid ps-layout-text-ui">
        <div class="ps-final-copy">
          <p class="ps-final-submarker">06.1 / 捕捉现场反馈</p>
          <h3>先回答：谁说了什么？</h3>
          <p>系统区分导师与同伴来源，在现场保留正在发生的反馈内容与捕捉状态。</p>
          <ul><li>导师 / 同伴来源</li><li>实时反馈内容</li><li>捕捉与保存状态</li></ul>
        </div>
        ${figure("live-status.png", "PinSight 现场反馈捕捉界面", "Live Critique｜现场录音、来源识别与 Smart Pen 状态", "ps-span-8")}
      </div>

      <div class="ps-final-submodule ps-grid ps-layout-ui-text">
        ${figure("smart-pen.png", "PinSight 智能笔实时识别界面", "Smart Pen｜手写、圈选与空间锚点同步", "ps-span-8")}
        <div class="ps-final-copy">
          <p class="ps-final-submarker">06.2 / 建立空间位置</p>
          <h3>再回答：这条反馈针对哪里？</h3>
          <p>Smart Pen 将手写、指向与作品区域关联，形成可回看的 Spatial Anchor。</p>
          <ul><li>Point / Annotation</li><li>Design Area 关联</li><li>Spatial Pin 生成</li></ul>
        </div>
      </div>

      <div class="ps-final-submodule ps-feedback-detail">
        <div class="ps-final-copy ps-copy-inline">
          <p class="ps-final-submarker">06.3 / Feedback Detail</p>
          <h3>一条反馈现在保留了哪些上下文？</h3>
        </div>
        ${figure("feedback-detail.png", "PinSight Feedback Detail 界面", "Feedback 03｜来源、位置、类别、优先级与修改建议被保存在同一个反馈对象中")}
        <div class="ps-annotation-row" aria-label="反馈详情字段">
          <span>来源 · Tutor</span><span>位置 · Main Title</span><span>类别 · Visual Hierarchy</span><span>优先级 · Fix Now</span><span>状态 · Active</span>
        </div>
      </div>
    </section>

    <section class="ps-final-section" id="pinsight-lifecycle">
      ${sectionHeader("07", "反馈生命周期", "一条反馈如何从现场进入修改行动。", "以同一条 Feedback 03 为主线，展示捕捉、定位、组织、回顾与行动之间的连续状态。")}
      <div class="ps-lifecycle">
        <article class="ps-life-step ps-life-large"><b>01</b><h3>Feedback Created</h3>${figure("tutor-speaking.png", "导师提出反馈", "导师提出反馈：这里的视觉层级需要更清晰。")}</article>
        <div class="ps-life-pair">
          <article class="ps-life-step"><b>02</b><h3>Capture</h3>${figure("live-capture.png", "实时捕捉反馈", "系统记录来源、内容与时间。")}</article>
          <article class="ps-life-step"><b>03</b><h3>Locate</h3>${figure("feedback-linked.png", "反馈关联作品区域", "Smart Pen 指向作品中的标题区域。")}</article>
        </div>
        <article class="ps-life-step ps-life-large"><b>04</b><h3>Anchor & Detail</h3>${figure("feedback-detail.png", "空间反馈详情", "Feedback 03 与 Main Title Area 建立空间关联。")}</article>
        <div class="ps-life-pair">
          <article class="ps-life-step"><b>05</b><h3>Spatial Pin</h3>${figure("spatial-ready.png", "Spatial Feedback Pin", "反馈以空间 Pin 保留在设计区域附近。")}</article>
          <article class="ps-life-step"><b>06</b><h3>Organise</h3>${figure("smart-pen.png", "反馈整理", "语音、手写和位置进入统一反馈记录。")}</article>
        </div>
        <article class="ps-life-step ps-life-large"><b>07</b><h3>Session Complete</h3>${figure("session-complete.png", "讲评会话完成", "会话完成后同步 Feedback Record 与 Web Review。")}</article>
        <article class="ps-life-step ps-life-large"><b>08</b><h3>Review & Act</h3>${figure("action-guide-scene.png", "反馈转化为行动", "反馈被整理为优先级明确的下一步修改行动。")}</article>
      </div>
    </section>

    <section class="ps-final-section" id="pinsight-review-act">
      ${sectionHeader("08", "反馈回顾与修改行动", "让现场反馈继续导向下一步修改。", "AI 只协助整理和组织，学生仍然负责理解、判断与执行设计修改。")}
      <div class="ps-transform-flow" aria-label="Feedback Transformation Flow">
        <span>原始反馈</span><i>→</i><span>议题归组</span><i>→</i><span>优先级</span><i>→</i><span>修改动作</span><i>→</i><span>任务进度</span>
      </div>
      <div class="ps-grid ps-review-grid">
        ${figure("ai-summary.png", "AI Feedback Summary", "AI Summary｜将分散反馈整理为关键议题与 Revision Action", "ps-span-7")}
        ${figure("ask-pinsight.png", "Ask PinSight", "Ask PinSight｜围绕当前反馈继续询问修改建议", "ps-span-5")}
      </div>
      ${figure("web-revision.png", "PinSight Web Revision Workspace", "Web Revision Workspace｜反馈位置、优先级与任务状态在同一工作区继续推进", "ps-web-hero")}
    </section>

    <section class="ps-final-section" id="pinsight-cross-device">
      ${sectionHeader("09", "Web 与跨设备体验", "设备变化，但反馈的身份、位置与状态保持连续。", "XR 与 Web 共享同一个 Feedback Object，避免课后回顾时再次失去来源和位置。")}
      <div class="ps-continuity">
        <div><small>XR</small><strong>Feedback 03</strong><span>Tutor · Main Title</span></div>
        <i>→</i><div class="is-object"><small>FEEDBACK OBJECT</small><strong>03</strong><span>Captured · Located · Needs Revision</span></div>
        <i>→</i><div><small>WEB</small><strong>Feedback 03</strong><span>Review · Task · Progress</span></div>
      </div>
      <div class="ps-web-stack">
        ${figure("web-dashboard.png", "PinSight Web Dashboard", "Feedback Review｜课后重新理解会话记录、反馈来源和当前项目")}
        ${figure("web-create.png", "PinSight Create Critique Session", "Session Workspace｜创建讲评、上传作品并连接现场设备")}
      </div>
    </section>

    <section class="ps-final-section" id="pinsight-final-ui">
      ${sectionHeader("10", "Final UI", "四组核心体验，共用一套清晰的展示模板。", "每组都以主状态为核心，并用 Caption 概括其在完整反馈链路中的作用。")}
      <div class="ps-final-groups">
        <article class="ps-final-group"><p>10.1</p><h3>Live Critique</h3><span>在讨论发生时捕捉来源、内容与状态。</span>${figure("live-capture.png", "Live Critique UI", "States｜Listening → Tutor Detected → Feedback Captured")}</article>
        <article class="ps-final-group"><p>10.2</p><h3>Spatial Feedback</h3><span>把反馈与真实 Design Area 建立空间关联。</span>${figure("feedback-detail.png", "Spatial Feedback UI", "States｜Point → Anchor → Pin → Detail")}</article>
        <article class="ps-final-group"><p>10.3</p><h3>Smart Pen</h3><span>同步手写、圈选、指向和识别内容。</span>${figure("smart-pen.png", "Smart Pen UI", "States｜Handwriting → Recognition → Spatial Sync")}</article>
        <article class="ps-final-group"><p>10.4</p><h3>Web Revision Workspace</h3><span>把反馈记录继续转化为优先级与修改任务。</span>${figure("web-revision.png", "Web Revision Workspace UI", "States｜Feedback Record → AI Summary → Action → Progress")}</article>
      </div>
    </section>
  `;

  const reflectionHeading = [...root.querySelectorAll("h1,h2,h3,p,span")].find((el) => el.textContent.includes("项目反思"));
  const reflection = reflectionHeading?.closest("section");
  if (reflection && reflection !== root) reflection.before(wrapper);
  else root.append(wrapper);
  return true;
}

if (!mountPinSightFinal()) {
  const observer = new MutationObserver(() => {
    if (mountPinSightFinal()) observer.disconnect();
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
}

