import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import BorderGlow from './BorderGlow'
import CircularGallery from './CircularGallery'
import DarkVeil from './DarkVeil'
import InteractionMarsCase from './InteractionMarsCase'
import PinSightCase from './PinSightCase'
import RestEasyCase from './RestEasyCase'
import FocusPinCase from './FocusPinCase'
import MasterWorksCase from './MasterWorksCase.jsx?v=masterworks-04-20261010'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/600.css'
import '@fontsource/manrope/400.css'
import '@fontsource/manrope/500.css'
import '@fontsource/manrope/600.css'
import '@fontsource/manrope/700.css'
import '@fontsource/playfair-display/500-italic.css'
import './styles.css?v=hero-real-projects-20261102-v1'
import './rest-final-refinement.css?v=rest-final-unified-20260821'
import './hero-split.css?v=circular-v1'

const asset = name => `${window.location.protocol === 'file:' ? './public/' : '/'}${name}`

const galleryItems = [
  {
    text: 'PinSight',
    image: asset('assets/pinsight/hero.webp'),
    href: '#case-pinsight',
  },
  {
    text: 'FocusPin',
    image: asset('projects/focuspin/focuspin-product-hero.webp'),
    href: '#case-bank',
  },
  {
    text: 'MasterWorks',
    image: asset('projects/masterworks/masterworks-exhibition-stage-v3.png'),
    href: '#case-spatial',
  },
  {
    text: 'Interaction Mars',
    image: asset('projects/interaction-mars/interaction-mars-cover.png'),
    href: '#case-interaction-mars',
  },
  {
    text: 'Rest Easy',
    image: asset('projects/rest-easy/rest-easy-hero-sleep-product.png'),
    href: '#case-rest-easy',
  },
]

const openGalleryProject = item => {
  window.location.hash = item.href.replace('#', '')
}

const projects = [
  {
    no: '01',
    year: '',
    title: 'PinSight',
    subtitle: '面向设计课堂讲评的 XR 空间反馈系统',
    previewTitle: '空间反馈连续性',
    previewMeta: 'XR 交互 / Smart Pen / 跨设备体验',
    tags: ['XR 交互', '系统体验', '跨设备设计'],
    className: 'pinsight',
    image: asset('assets/pinsight/hero.webp'),
    href: '#case-pinsight',
    detailTitle: 'PinSight',
    detailKicker: 'XR 交互 · 系统体验',
    detailCopy: '面向设计课堂讲评，将现场反馈与作品中的精确空间位置连接，并把讲评上下文延续到课后的回顾与行动。',
    art: null,
  },
  {
    no: 'FP',
    year: '',
    title: 'FocusPin',
    subtitle: '任务上下文支持工具',
    previewTitle: '重新找回工作思路',
    previewMeta: '桌面交互 / 任务上下文 / 交互原型',
    tags: ['任务恢复', '桌面交互', '设计概念'],
    className: 'focuspin',
    image: asset('projects/focuspin/focuspin-product-hero.webp'),
    href: '#case-bank',
    detailTitle: 'FocusPin',
    detailKicker: '桌面交互 · 任务上下文',
    detailCopy: '帮助设计学生在工作中断后重新找回当前任务、相关线索与下一步行动。',
    art: (
      <div className="bank-art" aria-hidden="true">
        <div className="phone">
          <div className="phone-top" />
          <p>Good morning</p>
          <strong>$24,680.00</strong>
          <span className="bank-pill">Transfer money →</span>
        </div>
        <div className="bank-card">VIRTUAL / 0826</div>
      </div>
    ),
  },
  {
    no: '03',
    year: '',
    title: 'MasterWorks',
    subtitle: '展览作品 × 个性化纪念品的移动体验',
    previewTitle: '从艺术作品到个性化纪念品',
    previewMeta: 'Mobile UX / Personalisation / Commerce',
    tags: ['Mobile UX', 'Personalisation', 'Commerce'],
    className: 'masterworks',
    image: asset('projects/masterworks/masterworks-exhibition-stage-v3.png'),
    href: '#case-spatial',
    detailTitle: 'MasterWorks',
    detailKicker: '移动体验 · 个性化 · 购买旅程',
    detailCopy: '将艺术作品浏览、个性化纪念品创建与购买完成连接成一条移动体验。',
    art: null,
  },
  {
    no: '04',
    year: '2025',
    title: 'AI Design Partner',
    subtitle: 'AI 辅助设计流程与概念工具',
    previewTitle: 'AI 设计伙伴',
    previewMeta: '人工智能辅助设计 / 概念 / 动效',
    tags: ['人工智能工具', '界面设计', '动态表达'],
    className: 'energy',
    image: asset('project-energy.svg'),
    href: '#case-ai',
    detailTitle: 'AI Design Partner',
    detailKicker: '人工智能辅助设计 · 概念探索',
    detailCopy: '围绕 AI 辅助设计流程，探索从需求理解、概念发散、内容整理到界面表达的协作方式，让设计过程更高效且更可控。',
    art: (
      <div className="energy-art" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <div className="glass-panel">
          <small>AI DESIGN FLOW</small>
          <strong>04</strong>
          <div className="sparkline" />
        </div>
      </div>
    ),
  },
  {
    no: '05',
    year: '2025',
    title: 'Visual Syntax',
    subtitle: '视觉系统与界面语言探索',
    previewTitle: '视觉系统语言',
    previewMeta: '视觉系统 / 识别语言 / 动态表达',
    tags: ['视觉识别', '网格系统', '动态表达'],
    className: 'spatial',
    image: asset('project-spatial.svg'),
    href: '#case-visual',
    detailTitle: 'Visual Syntax',
    detailKicker: '视觉系统 · 识别语言',
    detailCopy: '将视觉秩序、网格系统、动效节奏和界面语义结合，探索更统一、更可扩展的数字产品视觉表达。',
    art: (
      <div className="spatial-art" aria-hidden="true">
        <div className="portal" />
        <span>VISUAL<br />SYNTAX</span>
      </div>
    ),
  },
]

const archiveProjects = [
  {
    no: 'A01',
    year: '2022',
    title: 'Interaction Mars',
    subtitle: '火星主题沉浸式互动展览体验',
    previewTitle: '沉浸式空间交互',
    previewMeta: '体验设计 / 空间交互 / 用户研究',
    tags: ['体验设计', '用户旅程', '空间界面'],
    className: 'archive archive-mars',
    image: asset('project-mars-web.svg'),
    href: '#case-interaction-mars',
    detailTitle: 'Interaction Mars',
    detailKicker: '体验设计 · 空间交互',
    detailCopy: '面向火星主题科技展览，围绕参观者的探索路径、信息触点与沉浸式互动方式，构建从研究、旅程地图到空间界面原型的完整体验方案。',
    sections: [
      {
        no: '01',
        eyebrow: '项目背景',
        title: '把“了解火星”变成一次可探索的旅程',
        copy: '项目面向科技馆与主题展览场景。与其继续堆叠静态知识，我希望观众能通过身体移动、界面反馈和空间叙事主动理解火星环境。设计目标是建立一条清晰、有节奏且具有记忆点的参观体验。',
        visual: 'mars-context',
      },
      {
        no: '02', eyebrow: '资料与竞品研究', title: '比较展览形式，找到互动体验的缺口',
        copy: '前期研究比较了传统图文展板、沉浸式影像、触屏查询和任务型互动展览。对比重点包括信息密度、参与方式、反馈速度、多人使用与知识留存。研究表明：单纯增加视觉冲击并不能提升理解，体验需要明确目标和连续反馈。',
        visual: 'mars-benchmark',
      },
      {
        no: '03',
        eyebrow: '问题与洞察',
        title: '信息很多，但真正的问题是参与感不足',
        copy: '通过竞品分析和参观旅程梳理，我将问题归纳为三个方向：内容缺乏层级、互动触点彼此割裂、参观结束后没有形成完整认知。于是方案从“展示更多信息”转向“引导观众完成一次探索任务”。',
        visual: 'mars-insight',
      },
      {
        no: '04',
        eyebrow: '体验结构',
        title: '以任务线组织信息、交互与空间节点',
        copy: '体验被重新整理为进入、识别、探索、判断和回顾五个阶段。每个阶段只保留一个核心目标，并用统一的导航和反馈语言连接触屏、投影与空间装置，降低观众在复杂展览中的认知负担。',
        visual: 'mars-flow',
      },
      {
        no: '05', eyebrow: '草图与线框', title: '先验证任务顺序，再处理视觉表现',
        copy: '草图阶段集中验证入口提示、任务领取、地图探索、环境信息和结果回顾之间的顺序。线框图将每个页面限制为一个主要操作，并通过固定导航、进度反馈和分层信息避免观众在展览环境中迷失。',
        visual: 'mars-wireframe',
        media: ['mars-sketches.webp', 'mars-wireframes.webp'],
      },
      {
        no: '06',
        eyebrow: '界面与反馈',
        title: '让空间界面更接近工具，而不是装饰',
        copy: '高保真方案围绕探索地图、环境数据、任务状态和即时提示展开。视觉系统使用深色空间、暖色任务标识与蓝绿色反馈光效，帮助观众在沉浸环境中快速判断当前状态和下一步行动。',
        visual: 'mars-interface',
        media: ['mars-ui-system.webp', 'mars-hologram.webp'],
      },
      {
        no: '07', eyebrow: '设计实施', title: '统一不同设备中的信息与反馈规则',
        copy: '设计实施阶段定义颜色、图标、数据卡片、任务状态和空间提示的统一规则。触屏负责精确信息，投影负责环境氛围，空间装置承担身体参与；三类媒介共享同一套任务进度与状态语言。',
        visual: 'mars-system',
      },
      {
        no: '08',
        eyebrow: '最终体验',
        title: '从单块屏幕，扩展为连续的空间体验',
        copy: '最终方案把信息界面、人物尺度和展览空间统一起来。这个项目让我开始关注数字界面之外的体验关系：用户如何进入一个系统、如何理解反馈，以及不同媒介如何共同讲述同一件事。',
        visual: 'mars-space',
      },
      {
        no: '09', eyebrow: '最终产出', title: '高保真界面、空间场景与完整体验演示',
        copy: '项目最终产出包括高保真探索界面、任务流程、环境数据组件、空间互动场景和沉浸式演示。结果展示了用户从进入展区到完成任务并回顾发现的完整过程，而不只是若干独立屏幕。',
        visual: 'mars-final',
        media: ['mars-space.webp', 'mars-control-room.webp', 'mars-interface.webp'],
      },
    ],
  },
  {
    no: 'A02',
    year: '2022',
    title: 'Protectora',
    subtitle: '动物行为数据与公共投影互动',
    previewTitle: '数据驱动互动装置',
    previewMeta: '创意编程 / 数据艺术 / 互动装置',
    tags: ['数据可视化', '创意编程', '互动装置'],
    className: 'archive archive-projectora',
    image: asset('project-projectora-web.svg'),
    href: '#case-projectora',
    detailTitle: 'Protectora',
    detailKicker: '数据艺术 · 互动装置',
    detailCopy: '将动物行为研究转化为生成式视觉与公共投影体验，探索数据、身体动作与空间光影之间的叙事关系。',
    sections: [
      {
        no: '01', eyebrow: '概念起点', title: '让动物数据不再只是图表',
        copy: 'Projectora 关注动物移动与行为数据如何被普通观众感知。我将数据映射为粒子、形态与光影变化，让原本抽象的轨迹成为具有生命感的公共视觉体验。',
        visual: 'data-concept',
      },
      {
        no: '02', eyebrow: '背景研究', title: '理解数据来源与动物行为特征',
        copy: '研究整理了动物迁徙、群体聚散、速度变化和方向选择等行为资料，并比较科学可视化、生成艺术与互动投影案例。项目目标不是复刻动物外形，而是让行为规律通过动态视觉被感知。',
        visual: 'data-research',
        media: ['projectora-wolf.webp'],
      },
      {
        no: '03', eyebrow: '设计方法', title: '从行为特征提取视觉规则',
        copy: '设计过程先拆解速度、方向、聚散和停留等行为特征，再为每类数据建立对应的视觉参数。这样生成结果并非随机装饰，而是能够回应真实数据差异的视觉系统。',
        visual: 'data-mapping',
      },
      {
        no: '04', eyebrow: '交互流程', title: '数据、程序与观看者形成连续反馈',
        copy: '系统从数据输入开始，经过筛选、映射和实时生成，最终投射到公共空间。观众可以通过位置和动作改变画面局部状态，从被动观看转向参与视觉生成。',
        visual: 'data-flow',
      },
      {
        no: '05', eyebrow: '沟通与流程设计', title: '明确输入、转译、生成和展示之间的关系',
        copy: '流程设计拆分数据读取、参数转换、图形生成、投影输出与观众反馈。每一步都设置可调整参数，便于在开发和视觉之间沟通，也帮助后续定位画面过密、节奏失衡或交互延迟等问题。',
        visual: 'data-system',
        media: ['projectora-process.webp', 'projectora-making.webp'],
      },
      {
        no: '06', eyebrow: '视觉实验', title: '用迭代寻找“可读”与“有机”的平衡',
        copy: '我通过多轮生成实验比较粒子密度、色彩关系和运动节奏。最终保留足够的数据差异，同时减少技术界面感，让画面在远距离观看时仍然具有清晰的情绪与结构。',
        visual: 'data-generative',
      },
      {
        no: '07', eyebrow: '情境测试', title: '在真实观看距离中检查亮度、密度和节奏',
        copy: '测试重点包括远距离辨识、多人同时观看、环境光影响和动作反馈的可见性。根据测试降低粒子噪点、放大主要运动趋势，并控制色彩数量，使投影在复杂空间中仍保持主体层级。',
        visual: 'data-test',
      },
      {
        no: '08', eyebrow: '最终产出', title: '动态投影、生成视觉与互动情境展示',
        copy: '最终输出包含动态投影和情境化展示。以今天的标准看，验证仍然有限，但项目建立了我对数据可视化、交互装置和生成式视觉之间关系的兴趣。',
        visual: 'data-outcome',
        media: ['projectora-particles.webp', 'projectora-performance.webp', 'projectora-testing.webp'],
      },
    ],
  },
  {
    no: 'A03',
    year: '2022',
    title: 'Rest Easy',
    subtitle: '面向睡眠障碍人群的可穿戴体验',
    previewTitle: '睡眠健康产品体验',
    previewMeta: '产品设计 / 健康体验 / 用户研究',
    tags: ['用户研究', '产品设计', '可穿戴设备'],
    className: 'archive archive-rest',
    image: asset('project-rest-web.svg'),
    href: '#case-rest-easy',
    detailTitle: 'Rest Easy',
    detailKicker: '健康体验 · 产品设计',
    detailCopy: '针对睡眠困难场景，通过用户研究、竞品分析、产品形态探索与原型测试，设计一套兼顾情绪安抚和睡眠辅助的可穿戴产品体验。',
    sections: [
      {
        no: '01', eyebrow: '设计问题', title: '睡眠辅助产品不应制造新的使用压力',
        copy: 'Rest Easy 面向难以入睡、浅眠或容易被环境干扰的人群。项目并不追求增加更多监测数据，而是希望用更温和的触觉、声音与佩戴体验帮助用户建立睡前状态。',
        visual: 'rest-problem',
      },
      {
        no: '02', eyebrow: '背景与数据', title: '从睡眠问题类型理解不同需求',
        copy: '背景研究整理入睡困难、夜间觉醒、环境噪音和焦虑等常见问题，并关注不同年龄与生活方式的差异。数据帮助项目避免把所有睡眠问题归结为单一原因，也明确产品不能替代医学诊断。',
        visual: 'rest-data',
      },
      {
        no: '03', eyebrow: '相关产品与方法', title: '从功能竞争转向睡前体验',
        copy: '竞品研究显示，多数产品强调监测、提醒和数据报告，却较少处理佩戴舒适度与情绪负担。因此设计重点被确定为低干扰、易理解和能够自然融入睡前习惯。',
        visual: 'rest-landscape',
        media: ['rest-related-products.webp'],
      },
      {
        no: '04', eyebrow: '用户研究与画像', title: '真正需要被设计的是放松过程',
        copy: '用户研究帮助我区分环境噪音、焦虑、作息与身体不适等不同原因。相比统一解决方案，产品需要允许用户选择更适合自己的反馈强度和使用方式。',
        visual: 'rest-insight',
        media: ['rest-persona.webp'],
      },
      {
        no: '05', eyebrow: '需求定义', title: '将研究转化为四项产品原则',
        copy: '研究结果被归纳为低干扰、可调节、易操作和情绪安抚四项原则。产品需要在黑暗环境下无需复杂阅读，可以快速调整，同时避免强提醒和过多数据造成新的心理负担。',
        visual: 'rest-principles',
      },
      {
        no: '06', eyebrow: '草图与原型', title: '用草模验证佩戴、收纳与操作',
        copy: '通过草图、泡沫模型和佩戴测试，我持续调整耳部接触、开合方式和控制位置。原型阶段的重点不是外观完成度，而是确认产品是否能够在黑暗和困倦状态下被直觉使用。',
        visual: 'rest-prototype',
        media: ['rest-sketches.webp', 'rest-prototype-test.webp'],
      },
      {
        no: '07', eyebrow: '用户测试', title: '通过佩戴与情境测试继续调整细节',
        copy: '测试观察佩戴稳定性、侧睡压迫、开合手感、按钮辨识和收纳步骤。反馈促使方案缩小硬质接触面积、强化盲操作差异，并减少睡前需要完成的设置步骤。',
        visual: 'rest-test',
      },
      {
        no: '08', eyebrow: '最终产出', title: '一套更安静的睡眠辅助产品语言',
        copy: '最终设计将声音、触觉与模块化结构整合在紧凑形态中。项目保留了较强的工业设计属性，也为我之后处理产品状态、反馈层级和情绪体验提供了基础。',
        visual: 'rest-outcome',
        media: ['rest-product.webp', 'rest-ear-test.webp', 'rest-wear-test.webp'],
      },
    ],
  },
  {
    no: 'A04',
    year: '2022',
    title: 'Hi, Social!',
    subtitle: '社交焦虑与虚拟互动体验探索',
    previewTitle: '情绪化社交体验',
    previewMeta: '增强现实体验 / 叙事 / 交互概念',
    tags: ['增强现实体验', '叙事设计', '视觉研究'],
    className: 'archive archive-social',
    image: asset('project-social-web.svg'),
    href: '#case-hi-social',
    detailTitle: 'Hi, Social!',
    detailKicker: '增强现实体验 · 交互概念',
    detailCopy: '围绕社交焦虑与虚拟社交关系，结合视觉研究、情绪叙事和 AR 交互原型，探索更低压力的社交参与方式。',
    sections: [
      {
        no: '01', eyebrow: '议题与研究', title: '为社交焦虑设计一个更低压力的入口',
        copy: 'Hi, Social! 关注社交焦虑人群在真实社交场景中的紧张、回避与自我怀疑。项目通过资料研究、视觉分析和情绪图谱，寻找介于完全回避与强迫参与之间的体验方式。',
        visual: 'social-research',
      },
      {
        no: '02', eyebrow: '背景数据与趋势', title: '理解虚拟社交如何改变连接方式',
        copy: '研究梳理社交媒体、虚拟社群与在线互动的发展，比较线上表达与线下参与的心理门槛。数据说明虚拟媒介能够降低初次互动压力，但也可能加强回避，因此设计需要帮助用户逐步连接现实情境。',
        visual: 'social-data',
      },
      {
        no: '03', eyebrow: '特征与目的', title: '区分观察、表达、回应与共同参与',
        copy: '项目将社交互动拆解为观察环境、表达状态、回应他人和共同参与四类行为，并分析每类行为的压力来源。方案允许用户自主选择参与深度，而不是要求一次完成完整社交任务。',
        visual: 'social-principles',
      },
      {
        no: '04', eyebrow: '视觉方向', title: '用情绪色彩与插画建立安全感',
        copy: '情绪板、色彩实验和插画草图围绕孤独、危险、平静与希望展开。最终选择深蓝紫作为低刺激环境，以柔和光点和渐变表达互动机会，避免过度活泼的社交产品语言。',
        visual: 'social-visual',
        media: ['social-visual-system.webp'],
      },
      {
        no: '05', eyebrow: '体验方案', title: '用 AR 叙事帮助用户逐步建立参与感',
        copy: '方案通过手机与实体卡片触发分阶段的 AR 情境，让用户先观察、再选择，最后参与轻量互动。它不是医疗解决方案，而是一次关于情绪、安全感和数字媒介关系的设计探索。',
        visual: 'social-journey',
      },
      {
        no: '06', eyebrow: '故事板与场景', title: '把交互放回真实校园和公共空间',
        copy: '故事板描述用户在校园、公交站和共享空间中发现卡片、扫描内容并进行轻量互动的过程。场景设计检查用户是否能够随时退出、是否暴露隐私，以及互动是否会给他人造成压力。',
        visual: 'social-story',
      },
      {
        no: '07', eyebrow: '原型验证', title: '实体卡片、多屏设备与增强现实演示',
        copy: '原型包含实体触发卡、手机识别、多屏连续画面和增强现实内容。测试重点是扫描识别、叙事连续性、操作提示和多人使用方式，并据此调整卡片信息与屏幕切换节奏。',
        visual: 'social-prototype',
      },
      {
        no: '08', eyebrow: '最终产出与反思', title: '保留概念价值，也明确方案的验证边界',
        copy: '原型验证了多屏叙事和卡片触发机制，但对真实社交焦虑人群的长期验证仍然不足。案例保留交互和视觉探索，同时不把概念方案包装成已经验证完成的产品。',
        visual: 'social-outcome',
        media: ['social-storyboard.webp', 'social-prototype.webp', 'social-illustrations.webp'],
      },
    ],
  },
  {
    no: 'A05',
    year: '2022',
    title: 'So Close, So Lost',
    subtitle: '连接数字导航与真实城市空间的增强现实体验',
    previewTitle: '增强现实空间导航',
    previewMeta: '增强现实 / 空间导航 / 互动装置',
    tags: ['增强现实', '空间体验', '叙事设计'],
    className: 'archive archive-close',
    image: asset('project-close-web.svg'),
    href: '#case-so-close-so-lost',
    detailTitle: 'So Close, So Lost',
    detailKicker: '增强现实 · 空间导航',
    detailCopy: '针对手机地图只能提供大致位置、难以处理复杂街区最后一段路程的问题，设计一套结合地图、增强现实头戴装置与实体标识的城市导航体验。',
    sections: [
      {
        no: '01', eyebrow: '项目背景', title: '距离很近，却仍然找不到目的地',
        copy: '手机导航可以把用户带到附近，却经常无法处理市场、街巷、室内入口与临时摊位等复杂场景。项目关注“最后一段路”的定位焦虑，希望让数字指引与真实环境形成更清晰的连续关系。',
        visual: 'close-context',
      },
      {
        no: '02', eyebrow: '研究与发现', title: '误差、遮挡和环境变化是主要障碍',
        copy: '前期研究比较地图定位、视觉地标、文字地址和现场询问等方式。问题集中在定位误差、街区遮挡、店铺变化与缺少明显参照物。用户需要的不只是方向，而是能确认“我走对了”的连续反馈。',
        visual: 'close-research',
      },
      {
        no: '03', eyebrow: '灵感与构想', title: '让导航线索从屏幕延伸到真实空间',
        copy: '方案从城市寻路、游戏任务和增强现实标记中提取灵感。地图负责规划大方向，头戴装置在接近目的地后显示空间提示，实体装置则作为稳定地标，三者共同降低最后一段路的判断成本。',
        visual: 'close-principles',
      },
      {
        no: '04', eyebrow: '体验流程', title: '从地图定位到空间确认的连续导航',
        copy: '用户先通过手机地图到达目标区域，再启用增强现实模式识别周围地标。系统用方向、距离和确认提示引导用户，接近目标后由实体装置提供最终识别，完成从数字到现实的交接。',
        visual: 'close-flow',
      },
      {
        no: '05', eyebrow: '原型设计', title: '头戴装置、手机界面与实体标识协同工作',
        copy: '原型包含可佩戴增强现实显示、手机导航界面和计算机造型的实体标识。尺寸、视野、提示位置与佩戴方式被用于检查信息是否遮挡现实环境，以及用户能否快速理解方向指引。',
        visual: 'close-prototype',
        media: ['close-device.webp'],
      },
      {
        no: '06', eyebrow: '故事与视觉', title: '用“如此接近，如此遥远”强化项目记忆点',
        copy: '视觉叙事通过用户反复接近又错过目标的故事，表达数字定位与真实空间之间的落差。黄色路线、复古显示器和城市市场场景共同形成项目的识别语言。',
        visual: 'close-story',
      },
      {
        no: '07', eyebrow: '系统示意', title: '建立位置、视觉识别与增强现实提示的关系',
        copy: '系统示意图说明卫星定位提供区域范围，视觉识别负责匹配现场参照，增强现实层生成方向提示，实体地标完成最终确认。各模块分别解决不同精度层级的问题。',
        visual: 'close-system',
      },
      {
        no: '08', eyebrow: '最终产出', title: '完成城市市场中的情境演示与装置验证',
        copy: '最终产出包括导航流程、头戴装置模型、增强现实指引、实体标识和市场情境记录。演示验证了从手机地图切换到空间提示的核心概念，也暴露出设备体积、环境识别稳定性和公共使用安全等后续问题。',
        visual: 'close-outcome',
        media: ['close-prototype.webp', 'close-field-01.webp', 'close-field-02.webp', 'close-field-03.webp', 'close-field-04.webp'],
      },
    ],
  },
]

const featuredProjectHrefs = ['#case-pinsight', '#case-interaction-mars', '#case-rest-easy']
const projectPool = [...projects, ...archiveProjects]
const allProjects = [
  ...featuredProjectHrefs.map(href => projectPool.find(project => project.href === href)).filter(Boolean),
  ...projectPool.filter(project => !featuredProjectHrefs.includes(project.href)),
]

const structuredProjectChapters = {
  '#case-projectora': [
    { page: '06', title: '项目背景与生物多样性议题', points: ['以动物和人类共存、生物多样性保护为研究背景', '整理物种数量下降、栖息地破坏与人类活动的关系', '研究狼的群体结构、行为特征和生态作用', '提出将动物数据转译为公共生成视觉的互动装置概念'] },
    { page: '07', title: '设计流程、目标与技术实施', points: ['明确研究、数据采集、视觉实验、编程和展示的完整流程', '将项目目标定义为提升公众对生物多样性的关注', '收集狼的移动轨迹、形态和群体行为资料', '尝试粒子、点云和运动路径等视觉表达', '记录程序实现、图像处理和数据映射过程'] },
    { page: '08', title: '流程草图与沟通结构', points: ['绘制装置、投影、计算机与观看者之间的关系草图', '通过手绘流程验证输入、处理和输出方式', '记录团队沟通中关于视觉、代码和体验的决策', '建立从动物数据到图形参数再到投影画面的流程', '整理用户参与和反馈机制'] },
    { page: '09', title: '代码迭代与生成实验', points: ['展示不同阶段的程序界面和参数调试', '比较粒子密度、方向、速度与颜色变化', '根据动物轮廓和运动数据生成多种结果', '记录错误、修改和视觉结果之间的对应关系', '逐步改善画面识别度和实时运行效果'] },
    { page: '10', title: '最终作品、体验测试与结论', points: ['输出紫色与青绿色的动物粒子形态', '在真实空间中完成投影与表演情境展示', '通过参与者填写问卷评估体验前后的态度变化', '体验前约 20% 的参与者积极关注，体验后提升至约 80%', '以案例插画总结互动体验对生物多样性认知的影响'] },
  ],
  '#case-rest-easy': [
    { page: '11', title: '睡眠问题背景与数据', points: ['研究睡眠不足、失眠和环境干扰等常见问题', '整理不同年龄、性别和生活方式的睡眠状况', '比较噪音、压力、焦虑和作息对入睡的影响', '以数据图表呈现目标人群与问题规模', '提出不增加额外压力的睡眠辅助产品方向'] },
    { page: '12', title: '相关产品与双钻设计方法', points: ['比较耳塞、耳机、睡眠监测和声音辅助产品', '分析功能、佩戴方式、舒适度和不足', '使用双钻模型组织发现、定义、发展和交付', '梳理用户痛点、机会与产品功能', '研究声音、触觉、材料和耳部结构相关方法'] },
    { page: '13', title: '用户研究、问卷与创意发散', points: ['建立不同睡眠问题类型的用户画像', '记录用户目标、行为、困扰和睡前习惯', '整理访谈与问卷中的核心意见', '使用关键词与创意图进行头脑风暴', '从降噪、音乐、舒适佩戴和便携收纳发展概念'] },
    { page: '14', title: '草图、模型与原型迭代', points: ['研究耳部人体工学和可佩戴产品结构', '绘制多种环形与包裹式造型草图', '制作纸模、泡沫模型和快速外观模型', '测试开合、佩戴、操作和收纳方式', '根据测试反馈调整尺寸、接触面和结构'] },
    { page: '15', title: '最终设计、内部结构与使用测试', points: ['呈现 Rest Easy 助手和产品的最终造型', '通过爆炸图说明磁铁、铜环、线圈、电路、扬声器和外壳结构', '使用骨传导与声音模块减少耳道压力', '展示多角度产品渲染与蓝牙连接设想', '通过耳部佩戴、侧睡和真实睡眠情境进行使用测试'] },
  ],
  '#case-hi-social': [
    { page: '16', title: '社交焦虑背景与视觉研究', points: ['研究社交焦虑、沟通压力和回避行为', '整理虚拟社交的发展、相关数据和情绪变化', '分析目标用户在陌生环境中的行为和需求', '建立从恐惧、孤独到平静、希望的情绪板', '绘制色彩、字体、界面和故事草图，形成蓝紫色视觉方向'] },
    { page: '17', title: '插画、体验流程、故事板与原型', points: ['绘制恐惧、自我安慰、孤独、沟通混乱等主题插画', '提出实体卡片与手机增强现实结合的互动方式', '设计学生进入新环境、获得卡片、匹配同伴和扫描内容的故事板', '比较两种卡片组合方案与三维增强现实结果', '制作实体卡片、手机识别和多屏情境原型', '根据体验反馈提出声音、动画与沉浸设备等改进方向'] },
  ],
  '#case-so-close-so-lost': [
    { page: '18', title: '背景、研究、构思与原型', points: ['研究手机导航在市场、街巷和复杂入口中的最后一段路问题', '整理定位误差、地标缺失和环境变化带来的迷失体验', '分析地图、增强现实、视觉识别和实体标识的组合机会', '绘制用户流程、界面草图与设备构想', '制作复古显示器形态的实体标识原型', '测试地图提示、距离判断和空间方向反馈'] },
    { page: '19', title: '故事版本、系统示意与现场结果', points: ['用分镜表现用户反复接近又错过目的地的过程', '制作写有“So Close, So Lost”的实体装置', '用系统图说明卫星定位、地图范围和增强现实提示的协作关系', '在真实城市市场布置装置并记录用户寻找过程', '展示六个关键现场步骤与最终抵达结果', '总结方案的趣味性、精确性与公共空间应用限制'] },
  ],
}

const experiences = [
  {
    period: '2023.03 — 2024.05',
    company: '川南航天能源科技有限公司',
    role: '交互设计师 / 技术部',
    copy: '参与产品功能、界面逻辑与交互流程设计，协助子系统产品优化，梳理关键任务路径与状态说明。',
  },
  {
    period: '2022.03 — 2022.12',
    company: '成都旌隆科技有限公司',
    role: '产品经理 / UI设计师',
    copy: '参与金融软件需求梳理、竞品分析、原型绘制与用户反馈整理，推动设计迭代和需求落地。',
  },
  {
    period: '2021.05 — 2021.09',
    company: '招商银行重庆分行信息技术部',
    role: '产品经理 / UI设计实习生',
    copy: '参与银行应用概念设计、用户体验流程梳理、线框图与高保真界面探索。',
  },
  {
    period: '2020.10 — 2021.02',
    company: '重庆市时刻家艺术培训有限公司',
    role: '设计实习生',
    copy: '参与宣传物料、广告视觉、素材整理与版式设计，协助完成项目原型和视觉方案。',
  },
]

const education = [
  {
    years: '2024.02 — 2026.12',
    school: 'Monash University / 莫纳什大学',
    degree: 'Master of Design · Interaction Design',
    copy: '以工作室项目为核心，学习 UX/UI、交互行为研究、实体与虚拟界面、快速原型及设计研究方法；在个人项目中将生成式 AI 用于资料整理、洞察归纳、概念发散与方案迭代，同时保留人工判断和事实核查。',
  },
  {
    years: '2017.09 — 2021.06',
    school: 'Sichuan Fine Arts Institute / 四川美术学院',
    degree: '数字媒体艺术学士 · Digital Media Art',
    copy: '课程训练覆盖计算机图形图像、视听语言、三维设计、版式与数字出版、视频创意、信息设计、交互设计、数字文化体验、网站规划与数字产品设计，建立从视觉表达、动态媒体到用户体验与交互原型的系统基础。',
  },
]

const capabilities = [
  {
    no: '01',
    title: '复杂问题定义',
    copy: '从业务、用户与技术约束中建立清晰的问题框架，找到真正值得设计的核心。',
    method: '场景分析 · 需求拆解 · 约束梳理',
    output: '问题框架 · 机会点 · 设计原则',
  },
  {
    no: '02',
    title: '端到端体验设计',
    copy: '让研究洞察进入信息架构、交互流程与界面细节，并通过验证持续校正。',
    method: '用户研究 · 信息架构 · 用户流程',
    output: '线框 · 高保真界面 · 可用性验证',
  },
  {
    no: '03',
    title: '原型与表达',
    copy: '用可交互原型、动态演示和叙事化呈现，让复杂概念更快被理解与讨论。',
    method: '交互原型 · 动效演示 · 设计叙事',
    output: 'Figma Prototype · Motion · Presentation',
  },
  {
    no: '04',
    title: '跨团队协作',
    copy: '将复杂需求转译为可执行方案，与产品和开发共同推动设计准确落地。',
    method: '业务对齐 · 方案评审 · 设计还原',
    output: '规格说明 · 状态梳理 · 交付检查',
  },
]

const resumeHighlights = [
  ['设计定位', '交互设计师 / UIUX Designer / Product UI'],
  ['研究方法', '场景分析、用户流程、信息架构、竞品研究、可用性验证'],
  ['原型表达', '低保真线框、高保真界面、交互动效、Presentation Board'],
  ['工具能力', 'Figma、Illustrator、Photoshop、Premiere、After Effects、AI 工具'],
]

const languageItems = [
  ['中文', '母语，可进行完整研究、沟通与文档表达'],
  ['英文', '设计沟通、展示汇报与英文文档写作'],
]

const visualCopy = {
  'mars-context': ['展览内容', '空间触点', '探索任务', '认知回顾'],
  'mars-benchmark': ['传统展板', '沉浸影像', '触屏查询', '任务互动'],
  'mars-insight': ['信息层级', '参与动机', '连续体验', '反馈清晰度'],
  'mars-flow': ['进入展区', '识别任务', '探索火星', '完成判断', '回顾发现'],
  'mars-wireframe': ['入口提示', '任务领取', '探索地图', '结果回顾'],
  'mars-interface': ['探索地图', '环境数据', '任务状态', '即时提示'],
  'mars-system': ['触屏界面', '空间投影', '互动装置', '状态同步'],
  'mars-space': ['入口引导', '互动装置', '沉浸空间', '结果回顾'],
  'mars-final': ['高保真界面', '任务流程', '空间场景', '体验演示'],
  'data-concept': ['移动速度', '方向变化', '聚散关系', '停留时间'],
  'data-research': ['迁徙轨迹', '群体行为', '生成艺术', '互动投影'],
  'data-mapping': ['数据输入', '特征提取', '视觉映射', '动态生成'],
  'data-flow': ['采集', '筛选', '转译', '生成', '投影'],
  'data-system': ['读取数据', '调整参数', '生成画面', '空间输出'],
  'data-generative': ['密度', '轨迹', '节奏', '色彩'],
  'data-test': ['观看距离', '环境光', '动作反馈', '多人观看'],
  'data-outcome': ['实时数据', '公共投影', '观众动作', '视觉反馈'],
  'rest-problem': ['环境干扰', '睡前焦虑', '佩戴不适', '操作负担'],
  'rest-data': ['入睡困难', '夜间觉醒', '环境噪音', '生活作息'],
  'rest-landscape': ['监测型', '声音型', '穿戴型', '环境型'],
  'rest-insight': ['低干扰', '可调节', '易操作', '情绪安抚'],
  'rest-principles': ['低干扰', '可调节', '易操作', '情绪安抚'],
  'rest-prototype': ['佩戴测试', '开合方式', '控制位置', '收纳结构'],
  'rest-test': ['稳定性', '侧睡压力', '盲操作', '设置步骤'],
  'rest-outcome': ['声音模块', '触觉反馈', '柔性接触', '便携收纳'],
  'social-research': ['紧张', '回避', '自我怀疑', '参与意愿'],
  'social-data': ['线上表达', '线下参与', '心理门槛', '现实连接'],
  'social-principles': ['观察', '表达', '回应', '共同参与'],
  'social-visual': ['孤独', '危险', '平静', '希望'],
  'social-journey': ['安全观察', '自主选择', '轻量互动', '逐步参与'],
  'social-story': ['发现卡片', '扫描内容', '选择参与', '随时退出'],
  'social-prototype': ['实体卡片', '手机识别', '增强现实', '情境反馈'],
  'social-outcome': ['多屏叙事', '卡片触发', '体验边界', '后续验证'],
  'close-context': ['定位误差', '复杂街区', '入口难找', '环境变化'],
  'close-research': ['地图定位', '视觉地标', '文字地址', '现场询问'],
  'close-principles': ['手机地图', '增强现实', '实体地标', '连续反馈'],
  'close-flow': ['到达区域', '识别地标', '空间引导', '目标确认'],
  'close-prototype': ['头戴显示', '手机界面', '实体标识', '佩戴验证'],
  'close-story': ['接近目标', '错过入口', '发现线索', '完成抵达'],
  'close-system': ['区域定位', '视觉识别', '方向生成', '实体确认'],
  'close-outcome': ['导航流程', '装置模型', '空间提示', '情境演示'],
}

function WebCaseVisual({ type }) {
  const labels = visualCopy[type] || ['问题', '洞察', '方案', '结果']
  const family = type.split('-')[0]
  const isFlow = /(flow|journey|mapping|system)/.test(type)
  const isInterface = /(interface|prototype|wireframe|story)/.test(type)
  const isOrganic = /(generative|concept|space|outcome|final)/.test(type)

  return (
    <div className={`native-case-visual native-${family} ${isFlow ? 'visual-flow' : ''} ${isInterface ? 'visual-interface' : ''} ${isOrganic ? 'visual-organic' : ''}`} aria-hidden="true">
      <div className="native-grid" />
      {isFlow ? (
        <div className="native-flow-track">
          {labels.map((label, index) => (
            <div className="native-flow-node" key={label}>
              <i>{String(index + 1).padStart(2, '0')}</i>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      ) : isInterface ? (
        <div className="native-screen-group">
          {labels.slice(0, 3).map((label, index) => (
            <div className={`native-screen screen-${index + 1}`} key={label}>
              <span>{label}</span>
              <b />
              <b />
              <em />
            </div>
          ))}
        </div>
      ) : isOrganic ? (
        <div className="native-orbit-scene">
          <div className="native-orbit-core" />
          {labels.map((label, index) => <span className={`orbit-label orbit-label-${index + 1}`} key={label}>{label}</span>)}
        </div>
      ) : (
        <div className="native-insight-grid">
          {labels.map((label, index) => (
            <div className="native-insight-card" key={label}>
              <small>{String(index + 1).padStart(2, '0')}</small>
              <strong>{label}</strong>
              <span style={{ '--value': `${48 + index * 13}%` }} />
            </div>
          ))}
        </div>
      )}
      <div className="native-visual-caption">{labels.join(' · ')}</div>
    </div>
  )
}

const caseSectionIds = ['overview', 'research', 'process', 'prototype', 'final-design', 'outcome']
const caseSectionLabels = ['概览', '研究', '设计过程', '原型', '最终设计', '成果与反思']

function scrollToCaseSection(sectionId) {
  const target = document.getElementById(sectionId)
  if (!target) return
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
}

function ProjectCaseNav({ project }) {
  if (!structuredProjectChapters[project.href]) return null
  return (
    <nav className="case-sticky-nav shell" aria-label={`${project.title} 项目章节导航`}>
      <button type="button" onClick={() => scrollToCaseSection('case-overview')}>概览</button>
      {caseSectionIds.slice(1, Math.min(structuredProjectChapters[project.href].length, 5)).map((id, index) => (
        <button type="button" onClick={() => scrollToCaseSection(`case-${id}`)} key={id}>{caseSectionLabels[index + 1]}</button>
      ))}
      <button type="button" onClick={() => scrollToCaseSection('case-outcome')}>成果与反思</button>
    </nav>
  )
}

const marsJourney = [
  ['07:00—08:45', '起床与早间规划', '佩戴手环记录生物节律，完成早餐并与地面控制中心确认当日任务。', '期待清晰的日程和餐食安排'],
  ['09:00—11:25', '系统维护与训练', '更新计算机、交换体征数据、准备维护工具并进行跑步训练。', '现有设备复杂，日常监测繁琐'],
  ['12:15—13:35', '检修与营养实验', '更换缆线、记录维修过程，完成营养实验问卷并用餐。', '食物选择少，任务与休息交叉'],
  ['14:25—16:40', '科研、锻炼与自由时间', '完成阻力训练、设备拍摄和真空接口安装。', '期望任务状态和错误能被及时反馈'],
  ['19:00—22:30', '晚间会议与休息', '查询物料、参加宇航员会议，安排娱乐、晚餐与睡眠。', '希望日程、工作与健康信息统一管理'],
]

function MarsPageVisual({ page }) {
  if (page === '01') {
    return (
      <div className="mars-redraw mars-data-board" role="img" aria-label="重新绘制的火星环境数据图">
        <header><span>MARS / 2070</span><strong>火星生存环境</strong></header>
        <div className="mars-planet"><i /><b>55,000,000<small>km / 地火距离</small></b></div>
        <div className="mars-metric metric-temp"><b>-62°C</b><span>平均温度</span></div>
        <div className="mars-metric metric-gravity"><b>0.38G</b><span>重力</span></div>
        <div className="mars-metric metric-pressure"><b>600 Pa</b><span>地表气压</span></div>
        <div className="mars-atmosphere"><span>CO₂ <b>95.3%</b></span><span>N₂ <b>2.7%</b></span><span>Ar <b>1.6%</b></span><span>O₂ <b>0.15%</b></span><span>H₂O <b>0.03%</b></span></div>
        <div className="mars-terrain"><svg viewBox="0 0 600 120" preserveAspectRatio="none" aria-hidden="true"><path d="M0 88 C60 25 110 80 170 52 S270 92 330 40 S430 78 490 30 S555 62 600 18" /><path d="M0 104 C80 67 120 106 210 72 S340 113 420 65 S520 92 600 55" /></svg><span>水手谷系 / 长度超过 5,000 km</span></div>
      </div>
    )
  }

  if (page === '02') {
    return (
      <div className="mars-redraw mars-research-board">
        <section className="mars-benchmark-redraw">
          <header><span>01 / 竞品分析</span><strong>未来空间站交互界面</strong></header>
          <div className="benchmark-frame"><div /><div /><div /><div /></div>
          <dl><div><dt>问题</dt><dd>信息以单一颜色呈现，页面之间交互、图形与声音反馈缺少一致性，系统结构不利于高频任务。</dd></div><div><dt>优势</dt><dd>AR 与全息投影能够复现三维对象，蓝色主视觉与高科技空间的语义相符。</dd></div></dl>
        </section>
        <section className="mars-solution-tree">
          <header><span>02 / 解决方案</span><strong>从生活到工作的功能系统</strong></header>
          <div className="solution-columns">
            <div><b>居住舱</b><span>床边交互</span><i>任务 / 健康监测 / 娱乐</i></div>
            <div><b>服务模块</b><span>舱内交互</span><i>火星信息 / 地貌 / 工作 / 勘探</i></div>
            <div><b>功能舱</b><span>种植与物资</span><i>室内植物 / 养殖管理 / 资源供应</i></div>
          </div>
        </section>
        <section className="mars-journey-redraw">
          <header><span>03 / 用户旅程</span><strong>宇航员 Eric 的一天</strong><p>日程必须精确到分钟，但任务、健康、餐食和休息信息分散在不同设备中。</p></header>
          <div className="journey-grid">
            {marsJourney.map(([time, title, action, insight], index) => <article key={time}><small>{time}</small><b>{title}</b><p>{action}</p><em>{insight}</em><i style={{ '--journey-level': `${[38, 72, 28, 58, 46][index]}%` }} /></article>)}
          </div>
        </section>
      </div>
    )
  }

  if (page === '03') {
    const screens = ['任务安排', '健康监测', '娱乐', '星球信息', '火星数据', '地貌', '养殖管理', '室内种植', '身体需求', '勘探', '服务模块', '工作']
    return <div className="mars-redraw mars-wireframe-board" role="img" aria-label="重新绘制的界面信息架构与线框流程"><header><span>INFORMATION ARCHITECTURE</span><strong>从居住、服务到功能舱</strong></header><div className="wireframe-path">{screens.map((screen, index) => <article key={screen}><small>{String(index + 1).padStart(2, '0')}</small><b>{screen}</b><i /><i /><i /></article>)}</div><footer><span>居住与床边交互</span><span>窗口信息与火星数据</span><span>服务模块与资源管理</span></footer></div>
  }

  if (page === '04') {
    return <div className="mars-redraw mars-interface-board" role="img" aria-label="重新绘制的高保真界面系统"><div className="interface-sidebar"><span>ERIC / 2070</span>{['任务', '健康监测', '娱乐', '火星地貌'].map((item, index) => <b className={index === 0 ? 'active' : ''} key={item}>{item}</b>)}</div><div className="interface-main"><header><span>ASSIGNMENT 01</span><strong>当日任务与优先级</strong></header><div className="interface-cards"><article><small>健康监测</small><b>80%</b><i /></article><article><small>心率</small><b>62 / min</b><i /></article><article><small>血容量</small><b>5000 ml</b><i /></article></div><div className="interface-map"><span>水手谷 / SAILOR VALLEY</span><i /><i /><i /></div></div><aside><span>交互逻辑</span><p>透视式信息层让内容的前后关系更清晰。</p><p>任务状态从青色切换为黄色，立即反馈当前操作。</p><p>系统按任务优先级自动整理宇航员的安排。</p></aside></div>
  }

  return <div className="mars-redraw mars-final-board" role="img" aria-label="重新绘制的火星空间站最终系统图"><div className="final-landscape"><header><span>LANDFORM / MARS</span><strong>火星地貌勘探</strong></header><div className="landscape-lines"><i /><i /><i /></div><b>平均温度 -45°C 至 -50°C</b></div><div className="final-modules">{[['DOCKING', '对接'], ['ORBITAL', '轨道'], ['ENERGY', '能源'], ['CORE', '核心系统'], ['PLANT', '植物舱'], ['HEALTH', '生命健康']].map(([code, label]) => <article key={code}><small>{code}</small><strong>{label}</strong><i /></article>)}</div><footer><span>个人操作端</span><b>同步</b><span>空间站公共大屏</span></footer></div>
}

const projectImageAssets = {
  '#case-projectora': {
    '07': [['animal-image-processing.webp', '从动物照片、黑白轮廓到粒子图形的处理过程']],
    '08': [['hardware-making.webp', 'Arduino 主板、声音传感器与计算机的连接测试']],
    '09': [['particle-process.webp', '粒子密度、方向与形态的生成迭代']],
    '10': [
      ['final-purple-particles.webp', '紫色粒子动物形态最终视觉'], ['final-cyan-animal.webp', '青色粒子动物形态'],
      ['final-green-wolf.webp', '绿色粒子狼形视觉'], ['installation-red.webp', '红色投影空间中的互动展示'],
      ['installation-purple.webp', '紫色投影环境中的最终装置效果'], ['user-test-session.webp', '参与者体验后填写调研问卷'],
    ],
  },
  '#case-rest-easy': {
    '11': [['sleep-product-scene.webp', 'Rest Easy 产品与睡眠场景概念视觉']],
    '13': [['survey-participants.webp', '不同睡眠习惯参与者调研图像'], ['persona-photo.webp', '核心用户画像照片']],
    '14': [
      ['product-sketches.webp', '鲸鱼腔体灵感、内部结构与造型草图'], ['printing-process.webp', '产品壳体 3D 打印过程'],
      ['white-prototypes.webp', '未上色的白色树脂原型'], ['prototype-making.webp', '原型打磨、上色与组装实拍'],
      ['black-prototypes.webp', '完成上色的黑色产品原型'],
    ],
    '15': [['final-product-render.webp', '最终产品造型与多角度渲染'], ['exploded-structure.webp', '磁铁、铜环、音圈、电路与外壳爆炸结构'], ['wear-use-test.webp', '耳部佩戴、侧睡与真实睡眠情境测试']],
  },
  '#case-hi-social': {
    '16': [['ar-cover-scene.webp', '实体卡片与手机 AR 识别场景'], ['moodboard-color.webp', '从海面蓝到神秘紫的情绪色彩板'], ['picture-style-sketches.webp', '社交焦虑主题的绘画风格草图']],
    '17': [['illustration-series.webp', '恐惧、自责、孤独、沟通混乱等六幅主题插画'], ['storyboard-scene.webp', '新生领取卡片、匹配同伴和扫描 AR 的故事板'], ['ar-card-prototype.webp', '两套卡片组合方案与手机 AR 结果'], ['experience-scene.webp', '实体卡片、手机识别与情境体验实拍']],
  },
  '#case-so-close-so-lost': {
    '18': [['device-concept-sketch.webp', '计算机形态 AR 头戴设备早期线稿'], ['prototype-render.webp', '计算机形态 AR 设备尺寸与立体渲染']],
    '19': [['storyboard.webp', '用户反复接近又错过目的地的故事分镜'], ['physical-prototype.webp', 'So Close So Lost 实体纸模原型'], ['field-test-sequence.webp', '城市市场环境中的六步导航测试']],
  },
}

const projectAssetFolders = {
  '#case-interaction-mars': 'interaction-mars',
  '#case-projectora': 'protectora',
  '#case-rest-easy': 'rest-easy',
  '#case-hi-social': 'hi-social',
  '#case-so-close-so-lost': 'so-close-so-lost',
}

function CaseChapterVisual({ project, page, index }) {
  const folder = projectAssetFolders[project.href] || project.href.replace('#case-', '')
  const assets = projectImageAssets[project.href]?.[page.page]
  if (!assets?.length) return <WebCaseVisual type={project.sections[index]?.visual || 'data-concept'} />
  return (
    <div className={`case-asset-gallery asset-count-${assets.length}`}>
      {assets.map(([file, alt], assetIndex) => (
        <img
          src={`/projects/${folder}/${file}`}
          alt={alt}
          loading="lazy"
          decoding="async"
          key={file}
          className={assetIndex === 0 ? 'asset-primary' : ''}
        />
      ))}
    </div>
  )
}

function ProjectCasePage({ project }) {
  if (project.href === '#case-focuspin' || project.href === '#case-bank') return <FocusPinCase />
  const existingProjects = allProjects.filter(item => item.href !== '#case-focuspin')
  const projectIndex = existingProjects.findIndex(item => item.href === project.href)
  const nextProject = existingProjects[(projectIndex + 1) % existingProjects.length]
  if (project.href === '#case-pinsight') {
    return <PinSightCase nextProject={nextProject} />
  }
  if (project.href === '#case-spatial') {
    return <MasterWorksCase nextProject={nextProject} />
  }
  if (project.href === '#case-interaction-mars') {
    return <InteractionMarsCase nextProject={nextProject} />
  }
  if (project.href === '#case-rest-easy') {
    return <RestEasyCase nextProject={nextProject} />
  }
  return (
    <section className={`project-page ${project.className}`} id={project.href.replace('#', '')}>
      <div className="project-page-orb" aria-hidden="true" />
      <div className="project-page-head shell">
        <a href="#projects">← 返回项目目录</a>
        <span><b>{project.no}</b> 项目案例 / {project.year}</span>
      </div>

      <article className="project-detail-shell shell">
        <div className="project-detail-copy">
          <div className="case-kicker"><span>{project.no}</span> 项目案例 / {project.year}</div>
          <h1>{project.detailTitle}</h1>
          <p>{project.detailCopy}</p>
          <div className="project-detail-meta">
            <div>
              <small>项目类型</small>
              <strong>{project.detailKicker}</strong>
            </div>
            <div>
              <small>关键词</small>
              <strong>{project.tags.join(' · ')}</strong>
            </div>
            {structuredProjectChapters[project.href] && (
              <>
                <div><small>项目角色</small><strong>{project.href === '#case-interaction-mars' ? '个人项目 / 全流程设计' : '待从原作品集确认'}</strong></div>
                <div><small>项目时长</small><strong>待从原作品集确认</strong></div>
                <div><small>使用工具</small><strong>待从原作品集确认</strong></div>
                <div><small>项目性质</small><strong>{project.href === '#case-interaction-mars' ? '个人项目' : '待从原作品集确认'}</strong></div>
              </>
            )}
          </div>
          <a className="case-action" href="#projects">返回项目目录 <ArrowUpRight /></a>
        </div>
        <div className="project-detail-visual">
          <img src={project.image} alt={`${project.title} 项目封面`} />
          {project.art && <div className="project-detail-art">{project.art}</div>}
        </div>
      </article>

      <ProjectCaseNav project={project} />

      {project.sections && (
        <div className="web-case-content shell" id="case-overview">
          <header className="web-case-intro">
            <span>完整案例 / {project.year}</span>
            <h2>研究、过程与产出，<br />全部进入正文。</h2>
            <p>以下页面由原作品集内容重新组织为中文网页。图片区域使用 PDF 中的独立视觉内容进行局部裁切，不包含整页截图；文字、数据、方法与结论继续直接呈现在页面中。</p>
          </header>
          {structuredProjectChapters[project.href] ? (
            <>
              <div className="case-document-flow">
                {structuredProjectChapters[project.href].map((page, index) => (
                  <article
                    className={`case-document-chapter chapter-layout-${index % 4}`}
                    id={`case-${caseSectionIds[Math.min(index + 1, caseSectionIds.length - 2)]}`}
                    key={`${project.href}-${page.page}`}
                  >
                    <div className="case-document-copy">
                      <span>章节 {String(index + 1).padStart(2, '0')}</span>
                      <h2>{page.title}</h2>
                      {project.sections[index]?.copy && <p>{project.sections[index].copy}</p>}
                      <ul>
                        {page.points.map((point) => <li key={point}>{point}</li>)}
                      </ul>
                    </div>
                    <figure className={`case-replaceable-visual case-redrawn-visual redraw-${index % 4}`}>
                      <CaseChapterVisual project={project} page={page} index={index} />
                      <figcaption>原作品集图片局部提取 / 临时网页素材</figcaption>
                    </figure>
                  </article>
                ))}
              </div>
              <section className="case-narrative-index" id="case-outcome">
                <header>
                  <span>设计逻辑 / DESIGN NARRATIVE</span>
                  <h2>完整设计过程</h2>
                </header>
                <div>
                  {project.sections.map((section) => (
                    <article key={`${project.href}-narrative-${section.no}`}>
                      <span>{section.no} / {section.eyebrow}</span>
                      <h3>{section.title}</h3>
                      <p>{section.copy}</p>
                    </article>
                  ))}
                </div>
              </section>
            </>
          ) : (
            <div className="web-case-sections">
              {project.sections.map((section, index) => (
                  <article className={`web-case-section web-case-section-${index + 1}`} key={`${project.href}-${section.no}`}>
                    <div className="web-case-copy">
                      <span>{section.no} / {section.eyebrow}</span>
                      <h2>{section.title}</h2>
                      <p>{section.copy}</p>
                    </div>
                    <figure className={`web-case-media source-focus-${index % 3}`}>
                      <WebCaseVisual type={section.visual} />
                      <figcaption>网页化设计图解 / {section.eyebrow}</figcaption>
                    </figure>
                  </article>
              ))}
            </div>
          )}
          <footer className="web-case-footer">
            <span>项目完成于 {project.year} 年</span>
            <a href={nextProject.href}>下一项目：{nextProject.title} <ArrowUpRight /></a>
          </footer>
        </div>
      )}
    </section>
  )
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [hash, setHash] = useState(() => window.location.hash || '#top')
  const isPinSightDeepLink = hash.startsWith('#pinsight-')
  const isFocusPinDeepLink = hash === '#case-focuspin'
  const selectedProject = allProjects.find(project => project.href === hash)
    || (isPinSightDeepLink ? allProjects.find(project => project.href === '#case-pinsight') : null)
    || (isFocusPinDeepLink ? allProjects.find(project => project.href === '#case-bank') : null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#top')
    onHashChange()
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (hash === '#work') {
      window.history.replaceState(null, '', '#projects')
      setHash('#projects')
    }
  }, [hash])

  useEffect(() => {
    requestAnimationFrame(() => {
      if (isPinSightDeepLink) {
        document.querySelector(hash)?.scrollIntoView({ block: 'start' })
        return
      }
      window.scrollTo({ top: 0, left: 0 })
    })
  }, [hash, isPinSightDeepLink])

  useEffect(() => {
    const titles = {
      '#top': '罗华 — UI/UX 与交互设计师',
      '#about': '关于罗华 — UI/UX 与交互设计师',
      '#projects': '项目 — 罗华作品集',
      '#capabilities': '设计能力 — 罗华作品集',
      '#resume': '个人简历 — 罗华',
    }
    document.title = selectedProject ? `${selectedProject.title} — 罗华作品集` : (titles[hash] || titles['#top'])
  }, [hash, selectedProject])

  const normalizedHash = hash === '#work' ? '#projects' : hash
  const pageRoute = selectedProject
    ? 'case'
    : normalizedHash === '#about'
      ? 'about'
      : normalizedHash === '#projects'
        ? 'projects'
        : normalizedHash === '#resume'
          ? 'resume'
        : normalizedHash === '#capabilities'
          ? 'capabilities'
          : 'home'

  return (
    <main>
      <header className={scrolled ? 'nav scrolled' : 'nav'}>
        <a className="brand" href="#top" aria-label="返回首页">
          LH<span>®</span>
        </a>
        <nav aria-label="主导航">
          <a href="#top">首页</a>
          <a href="#about">关于</a>
          <a href="#projects">项目</a>
          <a href="#capabilities">能力</a>
          <a href="#resume">简历</a>
        </nav>
        <a className="contact-chip" href="mailto:hklh19980326@outlook.com">
          <span /> 联系我
        </a>
      </header>

      {selectedProject ? (
        <ProjectCasePage project={selectedProject} />
      ) : (
        <>
      {pageRoute === 'home' && (
      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline poster={asset('hero-poster.svg')} aria-hidden="true">
          <source src={asset('hero-astronaut-cosmic.mp4')} type="video/mp4" />
          <source src={asset('hero-scene.mp4')} type="video/mp4" />
        </video>
        <div className="hero-video-grade" aria-hidden="true" />
        <div className="hero-noise" />
        <div className="hero-glow" />
        <div className="hero-content shell">
          <div className="hero-scene">
            <div className="hero-identity">
              <div className="eyebrow"><Sparkles size={14} /> UI/UX DESIGNER · INTERACTION DESIGNER</div>
              <h1><span>HUA LUO</span><br />INTERACTION<br />PORTFOLIO.<em>2026</em></h1>
              <div className="hero-subgrid">
                <p>XR Interaction · AI-assisted Design · Visual System<br />Product UI · Interactive Prototype</p>
              </div>
              <div className="hero-page-links">
                <a href="#about">查看个人经历 <ArrowUpRight /></a>
                <a href="#projects">浏览精选项目 <ArrowUpRight /></a>
              </div>
            </div>
            <div className="hero-ambient" aria-hidden="true">
              <span className="ambient-ring" />
            </div>
            <div className="hero-project-reel">
              <div className="hero-circular-gallery">
                <CircularGallery
                  items={galleryItems}
                  bend={0.9}
                  textColor="#f2f0ea"
                  borderRadius={0.075}
                  font="600 64px Manrope"
                  scrollSpeed={1.15}
                  scrollEase={0.065}
                  onItemClick={openGalleryProject}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      <div className="post-hero-fluid" aria-hidden="true">
        <DarkVeil
          hueShift={72}
          noiseIntensity={0.025}
          scanlineIntensity={0.035}
          scanlineFrequency={0.65}
          speed={0.18}
          warpAmount={0.38}
          resolutionScale={0.72}
        />
      </div>

      {(pageRoute === 'home' || pageRoute === 'about') && (
      <section className="about shell section" id="about">
        <div className="experience-head">
          <div>
            <h2>WORK EXPERIENCE <ArrowUpRight /></h2>
            <p>个人经历</p>
          </div>
          {pageRoute === 'home' ? (
            <a className="section-page-link" href="#about">进入关于页 <ArrowUpRight /></a>
          ) : (
            <span>01 / PROFILE</span>
          )}
        </div>

        <div className="about-grid">
          <div className="portrait-wrap">
            <img src={`${asset('portrait-hua-sea.jpg')}?v=1`} alt="罗华，交互设计师" />
            <span className="portrait-label">LUO HUA<br />罗华</span>
          </div>

          <div className="about-copy">
            <div className="about-label">ABOUT ME</div>
            <p className="intro">Hi, I am Hua Luo!<br /><span>关注人、系统与未来体验</span>的<br />交互设计师。</p>
            <p className="about-summary">我以视觉秩序、交互逻辑和 AI-assisted design 工作流，将复杂产品问题转译为清晰、可信且有温度的数字体验。方向覆盖 XR Interaction、Product UI、Visual System 与交互原型。</p>

            <div className="profile-info-grid">
              <div className="profile-info-item">
                <small>当前身份</small>
                <strong>UI/UX Designer</strong>
              </div>
              <div className="profile-info-item">
                <small>服务方向</small>
                <strong>Interaction / Product UI</strong>
              </div>
              <div className="profile-info-item">
                <small>手机</small>
                <a href="tel:+8617783108032">+86 177 8310 8032</a>
              </div>
              <div className="profile-info-item">
                <small>邮箱</small>
                <a href="mailto:hklh19980326@outlook.com">hklh19980326@outlook.com</a>
              </div>
            </div>

          </div>
        </div>

        <div className="about-lower-grid">
          <div className="education-panel">
              <div className="about-label">EDUCATION</div>
              <div className="education-list">
                {education.map((item) => (
                  <article className="education-item" key={item.years}>
                    <time>{item.years}</time>
                    <div>
                      <h3>{item.school}</h3>
                      <strong>{item.degree}</strong>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
          </div>

          <div className="career-path">
            <div className="career-path-label">CAREER PATH</div>
            <div className="career-track">
              {experiences.map((item) => (
                <article className="career-item" key={item.period}>
                  <span className="career-dot" />
                  <time>{item.period}</time>
                  <h3>{item.company}</h3>
                  <strong>{item.role}</strong>
                  <p>{item.copy}</p>
                  {pageRoute === 'about' && (
                    <ul>
                      <li>梳理需求、用户路径与关键界面状态。</li>
                      <li>输出流程图、线框、原型和视觉方案。</li>
                      <li>协同产品/开发推进信息表达与体验优化。</li>
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="about-metrics">
          <div className="stats">
            <div className="stat-card"><strong>04+</strong><span>年跨行业设计经历</span></div>
            <div className="stat-card"><strong>03</strong><span>段产品相关经验</span></div>
            <div className="stat-card"><strong>02</strong><span>跨文化学习背景</span></div>
          </div>

          <div className="now-building">
            <small>NOW BUILDING</small>
            <div>
              <span>XR Interaction</span>
              <span>AI-assisted Design</span>
              <span>Visual System</span>
              <span>Interactive Prototype</span>
            </div>
          </div>
        </div>

        {pageRoute === 'about' && (
          <div className="resume-deep-dive">
                <div className="about-label">RESUME DETAIL</div>
                <div className="resume-highlight-grid">
                  {resumeHighlights.map(([title, copy]) => (
                    <article className="resume-highlight-card" key={title}>
                      <small>{title}</small>
                      <p>{copy}</p>
                    </article>
                  ))}
                </div>

                <div className="language-panel">
                  <div className="about-label">LANGUAGE / 语言</div>
                  {languageItems.map(([title, copy]) => (
                    <div className="language-row" key={title}>
                      <strong>{title}</strong>
                      <span>{copy}</span>
                    </div>
                  ))}
                </div>
          </div>
        )}

      </section>
      )}

      {(pageRoute === 'home' || pageRoute === 'projects') && (
      <section className="work shell section" id="projects">
        <div className="project-index-hero">
          <div className="section-kicker"><span>02</span> 精选项目 / 项目目录</div>
          <div className="project-index-title">
            <h1>精选<br /><em>项目.</em></h1>
            <p>从产品 UI、服务流程、XR 交互到 AI-assisted design，整理成可进入的作品案例目录。每个项目作为独立页面承接，后续可以继续补充过程文档、截图和交互原型。</p>
          </div>
          {pageRoute === 'home' && (
            <a className="section-page-link project-section-link" href="#projects">进入项目页 <ArrowUpRight /></a>
          )}
          <div className="project-index-tags">
            <span>产品界面</span>
            <span>空间交互</span>
            <span>人工智能辅助设计</span>
            <span>视觉系统</span>
          </div>
        </div>

        <div className="project-index-grid">
          {allProjects.map((project, index) => (
            <a
              className={`project-index-card project-index-card-${index + 1} ${index === 0 ? 'featured' : ''} ${project.className}`}
              href={project.href}
              key={project.no}
              aria-label={`查看 ${project.title} 项目详情`}
            >
              <img src={project.href === '#case-interaction-mars' ? asset('projects/interaction-mars/interaction-mars-cover.png') : project.href === '#case-rest-easy' ? asset('projects/rest-easy/rest-easy-hero-sleep-product.png') : project.image} alt="" aria-hidden="true" />
              <div className="project-index-shade" />
              <div className="project-index-copy">
                <span>{project.no}{!['#case-interaction-mars', '#case-rest-easy', '#case-focuspin'].includes(project.href) && <> / {project.year}</>}</span>
                <h3>{project.title}</h3>
                <p>{project.previewMeta}</p>
                <div className="project-index-chiprow">
                  {project.tags.slice(0, 3).map(tag => <small key={tag}>{tag}</small>)}
                </div>
              </div>
              <div className="project-index-arrow"><ArrowUpRight /></div>
            </a>
          ))}
        </div>

      </section>
      )}

      {pageRoute === 'resume' && (
        <section className="resume-page shell" id="resume">
          <header className="resume-page-hero">
            <div className="section-kicker"><span>R</span> RESUME / 个人简历</div>
            <h1>经历塑造判断，<br /><em>项目验证能力。</em></h1>
            <div>
              <p>罗华，UI/UX 与交互设计师。关注复杂系统、产品界面、用户研究、空间交互与创意技术。</p>
              <span className="resume-download-todo">简历 PDF 下载：待补充独立文件</span>
            </div>
          </header>

          <div className="resume-page-grid">
            <aside>
              <span>联系方式</span>
              <a href="mailto:hklh19980326@outlook.com">hklh19980326@outlook.com</a>
              <a href="tel:+8617783108032">+86 177 8310 8032</a>
              <p>Melbourne / China</p>
            </aside>
            <div className="resume-page-main">
              <section>
                <div className="resume-section-label">教育背景</div>
                {education.map((item) => (
                  <article className="resume-line-item" key={item.years}>
                    <time>{item.years}</time>
                    <div><h2>{item.school}</h2><strong>{item.degree}</strong><p>{item.copy}</p></div>
                  </article>
                ))}
              </section>
              <section>
                <div className="resume-section-label">工作经历</div>
                {experiences.map((item) => (
                  <article className="resume-line-item" key={item.period}>
                    <time>{item.period}</time>
                    <div><h2>{item.company}</h2><strong>{item.role}</strong><p>{item.copy}</p></div>
                  </article>
                ))}
              </section>
              <section>
                <div className="resume-section-label">能力与工具</div>
                <div className="resume-skill-cloud">
                  {['用户研究', '交互设计', '界面设计', '原型设计', '体验设计', '创意技术', '物理计算', '设计系统', 'Figma', 'Adobe Creative Suite'].map(item => <span key={item}>{item}</span>)}
                </div>
              </section>
            </div>
          </div>
        </section>
      )}

      {(pageRoute === 'home' || pageRoute === 'capabilities') && (
      <section className="capabilities shell section" id="capabilities">
        <header className="cap-title">
          <div className="section-kicker"><span>03</span> CAPABILITIES / 个人优势</div>
          <div className="cap-heading">
            <div>
              <span className="cap-eyebrow">THINK WIDE · DESIGN PRECISE</span>
              <h2>从复杂问题，<br /><em>到清晰体验。</em></h2>
            </div>
            <div className="cap-intro">
              <p>把研究、结构、交互与表达连接起来，让每一个设计判断都能被理解、验证并落地。</p>
              {pageRoute === 'home' && (
                <a className="section-page-link" href="#capabilities">查看能力详情 <ArrowUpRight /></a>
              )}
            </div>
          </div>
        </header>
        <div className="cap-list">
          {capabilities.map(({ no, title, copy, method, output }) => (
            <article className="cap-card" key={no}>
              <div className="cap-card-head">
                <span>{no}</span>
                <span>CAPABILITY</span>
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <dl className="cap-evidence">
                <div><dt>方法</dt><dd>{method}</dd></div>
                <div><dt>交付</dt><dd>{output}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>
      )}

      {(pageRoute === 'home' || pageRoute === 'capabilities') && (
      <footer className="footer" id="contact">
        <div className="footer-grid" aria-hidden="true" />
        <div className="footer-content shell">
          <div className="footer-top">
            <div className="section-kicker"><span>04</span> 开始对话</div>
            <span className="footer-availability"><i /> 期待新的工作与合作机会</span>
          </div>
          <div className="footer-main">
            <div className="footer-cta">
              <span>一起合作</span>
              <h2>一起把复杂问题，<br /><em>做成清晰体验。</em></h2>
              <a className="footer-email" href="mailto:hklh19980326@outlook.com">
                <span>hklh19980326@outlook.com</span>
                <ArrowUpRight />
              </a>
            </div>
            <aside className="footer-details" aria-label="合作与联系信息">
              <div>
                <span>合作方向</span>
                <p>交互设计<br />产品界面 · 视觉系统</p>
              </div>
              <div>
                <span>工作方式</span>
                <p>线下办公<br />远程协作</p>
              </div>
              <div>
                <span>回应</span>
                <p>欢迎交流职位、项目合作<br />与设计研究机会</p>
              </div>
            </aside>
          </div>
          <div className="footer-bottom">
            <span>罗华 © 2026</span>
            <span>交互设计 · 用户体验 · 产品设计</span>
            <a href="#top">返回顶部 ↑</a>
          </div>
        </div>
      </footer>
      )}
        </>
      )}
    </main>
  )
}

createRoot(document.getElementById('root')).render(<App />)
