import React, { useEffect, useState } from 'react'
import {
  Activity,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Dumbbell,
  Grid3X3,
  Hand,
  Moon,
  MousePointer2,
  Sprout,
  Sunrise,
  UserRound,
  Wrench,
  X,
} from 'lucide-react'

const mediaRoot = '/projects/interaction-mars'
const extractedRoot = `${mediaRoot}/extracted`

const navigation = [
  { target: 'mars-overview', label: '概览', sections: ['mars-overview'] },
  { target: 'mars-reference', label: '案例分析', sections: ['mars-reference', 'mars-journey'] },
  { target: 'mars-architecture', label: '架构与流程', sections: ['mars-architecture', 'mars-flow', 'mars-wireframe'] },
  { target: 'mars-final', label: '最终设计', sections: ['mars-final'] },
  { target: 'mars-reflection', label: '总结', sections: ['mars-reflection'] },
]

const overviewSources = ['基地环境', '健康状态', '任务安排', '生活服务']
const overviewStates = ['环境状态', '系统警告', '当前任务', '用户身份']

const overviewGoals = [
  {
    title: '建立统一入口',
    description: '集中环境、健康、任务和生活信息，减少跨模块切换。',
  },
  {
    title: '保持关键状态可见',
    description: '让用户在执行任务时持续感知基地环境、个人状态与系统警告。',
  },
  {
    title: '支持任务与异常处理',
    description: '建立从发现问题、判断影响、启动任务到确认恢复的连续路径。',
  },
  {
    title: '保持跨终端一致',
    description: '让个人终端、公共屏幕和空间交互界面共享相同的信息结构与状态逻辑。',
  },
]

const overviewInformation = [
  ['项目性质', '个人概念设计'],
  ['目标用户', '火星基地宇航员'],
  ['个人职责', '场景研究｜用户体验地图｜信息架构｜任务流程｜线框设计｜视觉设计'],
  ['设计方法', '桌面研究｜未来场景推演｜体验地图｜信息架构｜任务流程｜高保真设计'],
  ['核心产出', '四个核心模块｜全局状态层｜环境异常处理流程｜个人终端与公共终端概念界面'],
]

const passengersSamples = [
  {
    title: '功能入口',
    image: `${mediaRoot}/passengers/passengers-function-entry.png`,
    alt: '《Passengers》中人物通过六边形图形菜单选择功能入口',
    observation: '观察图形化菜单如何组织一级功能与服务入口，并通过图标与空间位置支持快速选择。',
  },
  {
    title: '全局系统状态与故障分布',
    image: `${mediaRoot}/passengers/passengers-global-system-status.png`,
    alt: '《Passengers》中飞船整体结构、多个子系统状态与异常节点的全局界面',
    observation: '观察飞船整体结构、多个子系统状态与异常节点如何在同一视图中呈现，帮助用户从全局状态发现问题并进入具体故障。',
  },
  {
    title: '单项系统诊断与故障详情',
    image: `${mediaRoot}/passengers/passengers-diagnostic-detail.png`,
    alt: '《Passengers》中的单项系统诊断、运行参数与故障详情界面',
    observation: '观察用户从全局异常进入具体子系统后，如何查看运行参数、故障等级与诊断结果。',
  },
  {
    title: '健康检测与人体数据',
    image: `${mediaRoot}/passengers/passengers-spatial-interface.png`,
    alt: '《Passengers》中的人体扫描、异常分布与健康诊断数据界面',
    observation: '观察人体模型、异常分布与诊断结果如何建立对应关系，帮助用户理解健康问题的位置与数量。',
  },
  {
    title: '空间交互场景',
    image: `${mediaRoot}/passengers/passengers-health-scan.png`,
    alt: '《Passengers》中多名人物围绕大型全息界面查看系统状态的场景',
    observation: '观察人物、观看距离、信息尺度与大型全息界面之间的空间关系，以及多人共享查看同一系统状态的方式。',
  },
]

const passengersStrengths = [
  ['三维对象与信息结合', '全息界面将飞船结构、人体与设备等对象和相关数据共同呈现，帮助用户理解信息所对应的位置与作用对象。'],
  ['空间化视觉语言明确', '蓝色高亮、透明图层与发光线条建立了统一的未来空间视觉语境，使数字界面能够自然融入飞船内部环境。'],
  ['支持空间中的直接查看', '大型显示与空间投影支持用户在站立、移动或公共空间中查看信息，并清楚呈现人物、观看距离与界面尺度之间的关系。'],
]

const passengersProblems = [
  ['状态差异不够明确', '多数界面以相近的蓝色作为主要高亮，常规信息、可操作内容与不同状态之间的视觉差异不够明确。'],
  ['页面结构一致性不足', '不同功能界面在布局方式、控件样式与信息组织结构上存在差异，用户切换页面时可能需要重新识别页面规则。'],
  ['部分界面信息密度较高', '部分页面同时呈现大量图形、数据与动态状态，核心任务和辅助信息之间的优先级不够突出。'],
]

const passengersInsights = [
  ['统一页面结构', '不同功能模块共享稳定的导航位置、信息层级与操作逻辑，减少用户在模块切换时重新理解界面的成本。'],
  ['建立明确的状态语言', '通过颜色、文字、图标和位置共同区分常规信息、提醒与异常状态，避免仅依赖单一颜色表达。'],
  ['让数据与具体对象对应', '将基地结构、人体或设备作为主要视觉对象，并将相关状态信息组织在对象周围，帮助用户理解数据所指向的位置与内容。'],
]

const journeyStages = [
  {
    title: '晨间准备',
    time: '07:00–08:45',
    icon: Sunrise,
    action: '记录身体状态，完成晨间准备并确认当天任务。',
    pain: '短时间内需要核对多类信息，多个入口增加操作压力。',
    needs: ['任务摘要', '健康状态', '环境概览', '日程提醒'],
    opportunity: '用统一首页汇总健康、环境、任务与日程。',
    emotion: '平稳',
    emotionDetail: '晨间准备',
    mood: 'focused',
  },
  {
    title: '上午任务',
    time: '09:00–11:25',
    icon: Activity,
    action: '进行设备更新、数据采集、维护准备与健康监测。',
    pain: '任务、设备与健康数据分散，需要重复确认状态。',
    needs: ['任务步骤', '设备状态', '健康数据', '执行进度'],
    opportunity: '在同一任务上下文中整合步骤、设备与健康数据。',
    emotion: '专注',
    emotionDetail: '上午任务',
    mood: 'steady',
  },
  {
    title: '中午维护',
    time: '12:15–13:35',
    icon: Wrench,
    action: '处理设备连接与维护，完成记录和信息传输。',
    pain: '临时维护打断休息，需要同时处理设备、记录与沟通。',
    needs: ['异常等级', '维护对象', '操作步骤', '剩余时间'],
    opportunity: '用异常等级、区域定位与步骤引导降低判断负担。',
    emotion: '压力',
    emotionDetail: '中午维护',
    mood: 'tired',
    critical: true,
  },
  {
    title: '下午训练与协作',
    time: '下午',
    icon: Dumbbell,
    action: '进行训练、设备操作与协作，并传输相关信息。',
    pain: '任务频繁切换，工作与恢复状态的边界不清晰。',
    needs: ['训练目标', '任务进度', '协作信息', '状态变化'],
    opportunity: '按任务类型调整层级，同时让关键状态持续可见。',
    emotion: '恢复',
    emotionDetail: '下午协作',
    mood: 'recovering',
  },
  {
    title: '晚间总结',
    time: '晚间',
    icon: Moon,
    action: '检查任务结果，总结当天工作并安排次日事项。',
    pain: '会议、记录与计划延续到晚间，难以快速进入休息。',
    needs: ['任务结果', '未完成事项', '次日安排', '恢复建议'],
    opportunity: '用每日总结汇总结果、异常记录与次日安排。',
    emotion: '放松',
    emotionDetail: '晚间总结',
    mood: 'relaxed',
  },
]

const journeyExpectations = [
  {
    icon: CalendarDays,
    title: '自动安排',
    description: '系统能够根据任务与状态提供清晰的日程和优先级。',
  },
  {
    icon: MousePointer2,
    title: '自然操作',
    description: '在个人终端和公共空间中都能够快速理解和完成操作。',
  },
  {
    icon: Bell,
    title: '清晰反馈',
    description: '系统持续显示当前状态、任务进度和异常信息。',
  },
]

const journeyConclusions = [
  {
    title: '建立统一入口',
    description: '将环境、健康、任务与生活服务集中在稳定的系统入口中，减少频繁切换与信息查找。',
  },
  {
    title: '保持任务上下文',
    description: '用户切换模块或终端时，当前任务、优先级和关键状态仍需持续可见。',
  },
  {
    title: '根据状态调整反馈',
    description: '系统应根据常规、提醒和异常状态调整信息优先级与反馈强度。',
  },
]

const architectureModules = [
  ['基地环境', ['舱内环境', '舱外环境', '设备状态', '资源余量', '异常记录']],
  ['健康管理', ['生命体征', '身体状态', '健康趋势', '恢复建议', '医疗记录']],
  ['任务管理', ['今日任务', '任务优先级', '执行步骤', '协作人员', '工作记录']],
  ['生活服务', ['饮食管理', '休息计划', '种植管理', '养殖管理', '娱乐与通讯']],
]

const coreTaskStages = [
  {
    title: '发现异常',
    module: '全局状态层',
    action: '注意到系统出现环境异常提醒。',
    feedback: '在全局状态中突出异常信息，并提供进入相关环境模块的入口。',
    state: '正常 → 异常',
  },
  {
    title: '查看异常详情',
    module: '基地环境',
    action: '进入相关环境信息，查看异常对象、位置与影响情况。',
    feedback: '呈现异常发生的位置、当前状态及与问题相关的信息。',
    state: '异常 → 待判断',
  },
  {
    title: '判断处理方式',
    module: '基地环境 → 任务管理',
    action: '根据当前异常信息判断是否需要立即处理。',
    feedback: '保留异常上下文，并根据用户选择进入任务创建或后续记录。',
    state: '待判断 → 待处理',
  },
  {
    title: '创建并执行任务',
    module: '任务管理',
    action: '确认处理任务，查看执行步骤并更新处理进度。',
    feedback: '建立任务记录，持续保存任务状态、执行步骤与当前进度。',
    state: '待处理 → 处理中',
  },
  {
    title: '确认恢复',
    module: '任务管理 → 全局状态层',
    action: '提交任务结果，并确认异常是否已经解除。',
    feedback: '更新基地环境状态，保存工作记录，并关闭对应的异常提醒。',
    state: '处理中 → 已恢复',
  },
]

const taskStatusTrack = ['正常', '异常', '待判断', '待处理', '处理中', '已恢复']

const processRoot = `${mediaRoot}/process`
const sketches = [
  ['01', '人物状态探索', '01_手绘线框界面与思考机器人.png'], ['02', '娱乐空间入口', '02_铅笔手绘三维界面布局草图.png'],
  ['03', '火星地貌信息布局', '03_火星地貌信息架构草图.png'], ['04', '网格式服务布局', '04_餐厅服务模块线框草图.png'],
  ['05', '服务与资源操作', '05_手绘服务模块仪表盘线框图.png'], ['06', '服务门户', '06_旅行门户仪表盘线框草图.png'],
  ['07', '空间任务卡片', '07_手绘透视任务看板线框插画.png'], ['08', '列表式服务布局', '08_餐厅服务模块列表线框图.png'],
  ['09', '三维地形标注', '09_手绘地形信息标注图.png'], ['10', '人体数据映射', '10_人体资源服务模块线框图.png'],
  ['11', '种植管理', '11-.png'], ['12', '行星信息', '12-.png'], ['13', '养殖管理', '13-.png'],
]
const sketchCategories = {
  '01': '任务与个人状态', '02': '任务与个人状态', '07': '任务与个人状态', '10': '任务与个人状态',
  '03': '环境与空间信息', '09': '环境与空间信息', '12': '环境与空间信息',
  '04': '服务与资源', '05': '服务与资源', '06': '服务与资源', '08': '服务与资源',
  '11': '生活场景', '13': '生活场景',
}
const highFidelityRoot = `${mediaRoot}/high-fidelity`
const finalUiGroups = [
  {
    number: '01',
    title: '个人任务与状态',
    eyebrow: 'PERSONAL WORKSPACE',
    description: '任务、健康与娱乐共享稳定的侧边导航，通过主内容区适配不同的信息与操作需求。',
    hero: { title: '任务管理', auxiliary: 'Assignment', image: `${highFidelityRoot}/personal-task.png`, alt: '宇航员个人任务管理高保真界面' },
    supporting: [
      { title: '健康监测', auxiliary: 'Health Monitoring', description: '以人体对象为中心组织生理指标与状态数据，使整体状态与局部信息形成对应。', image: `${highFidelityRoot}/personal-health.png`, alt: '宇航员健康监测高保真界面' },
      { title: '娱乐', auxiliary: 'Recreation', description: '沿用一致侧边导航，通过前后层叠的内容卡片区分视频、音乐与游戏入口。', image: `${highFidelityRoot}/personal-recreation.png`, alt: '宇航员娱乐内容高保真界面' },
    ],
    annotations: [
      ['信息层级', '以宇航员为核心组织导航、人物状态与任务内容，使当前功能与主要任务保持清晰层级。'],
      ['状态反馈', '当前功能通过黄色高亮区别于其他青色入口，使任务、健康与娱乐之间的当前状态清晰可见。'],
      ['任务组织', '任务内容以空间卡片围绕主体展开，通过尺寸、位置与层级区分当前任务与其他任务信息。'],
    ],
    anchors: [[19, 18], [11, 43], [73, 36]],
  },
  {
    number: '02',
    title: '火星与空间信息',
    eyebrow: 'SPATIAL INFORMATION',
    description: '以空间对象作为主要信息载体，通过行星、地貌和环境数据的叠加建立不同尺度的信息查看方式。',
    hero: { title: '火星信息', auxiliary: 'Mars Information', image: `${highFidelityRoot}/spatial-mars.png`, alt: '火星信息高保真界面' },
    supporting: [
      { title: '行星信息', auxiliary: 'Planet Information', description: '通过多个行星对象与信息面板建立平级浏览结构，支持不同天体信息之间的切换。', image: `${highFidelityRoot}/spatial-planets.png`, alt: '行星信息高保真界面' },
      { title: '空间与地形信息', auxiliary: 'Spatial / Terrain Information', description: '将环境曲线、区域图像与地形对象并置，形成从整体数据到具体地貌的多层信息表达。', image: `${highFidelityRoot}/spatial-terrain.png`, alt: '空间与地形信息高保真界面' },
    ],
    annotations: [
      ['信息优先级', '以火星与地貌对象作为视觉中心，将环境数据、区域信息与详细内容按照“对象—区域—详情”组织。'],
      ['局部查看', '概念交互中，可选择具体地貌区域进一步查看坐标、环境参数与区域说明。'],
      ['数据叠加', '图表与地貌信息叠加在同一空间视图中，使环境参数与对应区域保持视觉关联。'],
    ],
    anchors: [[35, 66], [76, 28], [25, 20]],
  },
  {
    number: '03',
    title: '服务与环境操作',
    eyebrow: 'SERVICE & ENVIRONMENT',
    description: '围绕环境信息与工作对象组织服务操作，使信息查看、对象选择与控制内容保持清晰层级。',
    hero: { title: '地貌与工作场景', auxiliary: 'Landform & Work', image: `${highFidelityRoot}/service-work.png`, alt: '地貌与工作场景高保真界面' },
    supporting: [
      { title: '地貌信息', auxiliary: 'Landform Information', description: '以真实地貌图像承载区域信息，并将地形参数和位置数据直接叠加在对应空间对象上。', image: `${highFidelityRoot}/service-landform.png`, alt: '地貌信息高保真界面' },
      { title: '服务模块', auxiliary: 'Service Module', description: '通过统一操作区域浏览不同设备对象，并将设备选择与控制入口集中在同一界面结构中。', image: `${highFidelityRoot}/service-module.png`, alt: '服务模块高保真界面' },
    ],
    annotations: [
      ['空间地貌可视化', '通过三维线框地形与环境参数叠加呈现火星区域信息，使地貌本身成为主要的信息浏览对象。'],
      ['位置与环境信息', '坐标、温度与降水等信息与具体地貌位置建立视觉对应，支持从空间对象进入详细数据。'],
      ['导航反馈', 'Landform、Work与Survey共享固定导航结构，当前功能通过黄色高亮提供明确的状态反馈。'],
    ],
    anchors: [[57, 54], [59, 25], [12, 52]],
  },
  {
    number: '04',
    title: '身体与生活管理',
    eyebrow: 'LIFE MANAGEMENT',
    description: '将人体状态、植物种植与动物养殖纳入统一的信息管理场景，并根据不同管理对象调整主要信息内容。',
    hero: { title: '身体状态', auxiliary: 'Physical Needs', image: `${highFidelityRoot}/life-physical.png`, alt: '宇航员身体状态高保真界面' },
    supporting: [
      { title: '种植管理', auxiliary: 'Indoor Plant', description: '将植物营养、环境参数与浇灌状态集中在同一管理视图中。', image: `${highFidelityRoot}/life-plants.png`, alt: '基地种植管理高保真界面' },
      { title: '养殖管理', auxiliary: 'Ranching Management', description: '将个体动物信息与整体饲养状态结合，形成对象信息与趋势数据并置的管理界面。', image: `${highFidelityRoot}/life-ranching.png`, alt: '基地养殖管理高保真界面' },
    ],
    annotations: [
      ['人体对象映射', '以人体作为主要信息载体，将不同身体区域与对应指标建立空间映射，使状态数据与身体部位形成直接对应。'],
      ['状态层级', '关键指标围绕人体主体分布，通过数值、部位标识与辅助图形区分整体状态和局部身体信息。'],
      ['信息延展', '健康信息从整体状态进一步延展至具体身体部位数据，使信息查看形成由概览到详情的层级。'],
    ],
    anchors: [[59, 48], [35, 38], [87, 53]],
  },
]

const spatialApplicationScreens = {
  display: {
    title: '大型窗口界面',
    auxiliary: 'Environmental Display',
    image: `${highFidelityRoot}/spatial-application-display.png`,
    alt: '大型窗口中的环境信息界面应用场景',
    description: '将地貌信息直接映射至大型环境显示区域，使数字信息与空间对象在同一视野中建立对应。',
  },
  view: {
    title: '空间场景透视',
    auxiliary: 'Spatial View',
    image: `${highFidelityRoot}/spatial-application-view.png`,
    alt: '基地空间中的界面应用透视场景',
    description: '通过更远的观察视角呈现界面与舱体空间的比例关系，使大型环境界面的空间属性更加明确。',
  },
}

const reflectionColumns = [
  {
    title: '建立跨场景的统一交互框架',
    copy: '将任务、环境信息、健康状态与生活管理纳入同一系统结构，并通过稳定导航、对象化信息组织与一致的界面层级连接不同使用场景。',
    keywords: ['统一入口', '对象驱动', '跨场景一致性'],
  },
  {
    title: '概念设计仍缺少真实场景验证',
    copy: '项目主要基于未来场景推演与概念设计，尚未在真实基地环境中验证信息优先级、操作负荷以及复杂任务状态下的界面可读性。',
    keywords: ['概念场景', '缺少真实用户验证', '缺少环境验证'],
  },
  {
    title: '从界面系统进一步走向场景化原型',
    copy: '后续可进一步补充异常状态、任务优先级与跨终端状态同步规则，并通过场景化原型验证不同任务路径以及大型空间界面的实际使用方式。',
    keywords: ['异常状态', '跨终端同步', '场景化原型'],
  },
]

function SectionHeading({ number, eyebrow, title, description }) {
  return (
    <header className="mars-section-heading">
      <span>{number}</span>
      <div>
        <small>{eyebrow}</small>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </header>
  )
}

function MarsHabitatIcon(props) {
  return (
    <svg className="mars-habitat-icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="24" cy="24" r="16.5" />
      <ellipse cx="24" cy="24" rx="16.5" ry="6.5" transform="rotate(-24 24 24)" />
      <path d="M18.4 9.1c4.3 4.1 7.6 9.7 9.4 15.7 1.6 5.4 1.7 10.4.8 14.1" />
      <path d="M10.2 18.6c6.8 2 14.4 2.2 21.4.2 2.7-.8 5.1-1.9 7.1-3.3" />
      <circle className="mars-habitat-icon-node" cx="11.2" cy="29.7" r="2.2" />
      <circle className="mars-habitat-icon-node" cx="35.9" cy="17.4" r="1.8" />
      <circle className="mars-habitat-icon-node" cx="29.5" cy="38.4" r="1.5" />
    </svg>
  )
}

function WireframeBoardScreen({ number, title, file, context, onOpen }) {
  const image = `${processRoot}/wireframes/${file}`
  return (
    <button
      type="button"
      className="wireframe-board-screen"
      onClick={() => onOpen({ title, image, alt: `${title}低保真界面`, description: context, kind: 'wireframe' })}
      aria-label={`放大查看：${title}`}
    >
      <small>{number}</small>
      <img src={image} alt={`${title}低保真界面`} loading="lazy" />
      <span>{title}</span>
    </button>
  )
}

function WireframeConceptCard({ StartIcon, start, MiddleIcon, middle, branches }) {
  return (
    <article className="wireframe-concept-card">
      <div className="wireframe-concept-node">
        <StartIcon aria-hidden="true" />
        <span>{start}</span>
      </div>
      <i className="wireframe-concept-arrow" aria-hidden="true" />
      <div className="wireframe-concept-node">
        <MiddleIcon aria-hidden="true" />
        <span>{middle}</span>
      </div>
      <i className="wireframe-concept-arrow" aria-hidden="true" />
      <div className="wireframe-concept-branches">
        {branches.map(branch => <span key={branch}>{branch}</span>)}
      </div>
    </article>
  )
}

function WireframeInteractionBoard({ onOpen }) {
  const screens = [
    { number: '01', title: '任务管理', file: '任务页面1 1.png', context: '个人任务页面' },
    { number: '02', title: '健康监测', file: '健康页面2.png', context: '健康监测页面' },
    { number: '03', title: '娱乐入口', file: '娱乐页面3.png', context: '娱乐页面' },
    { number: '04', title: '行星信息', file: '信息2.png', context: '其他行星信息页面' },
    { number: '05', title: '火星信息', file: '信息1.png', context: '火星信息页面' },
    { number: '06', title: '地貌信息', file: '服务1.png', context: '地貌信息页面' },
    { number: '07', title: '养殖管理', file: '功能舱2.png', context: '养殖管理页面' },
    { number: '08', title: '室内种植', file: '功能舱1.png', context: '室内种植页面' },
    { number: '09', title: '身体需求', file: '服务5.png', context: '身体需求页面' },
    { number: '10', title: '勘测操作', file: '服务4.png', context: '勘测操作页面' },
    { number: '11', title: '勘测浏览', file: '服务3.png', context: '勘测浏览页面' },
    { number: '12', title: '工作入口', file: '服务2.png', context: '工作入口页面' },
  ]

  return (
    <div className="wireframe-interaction-board wireframe-reference-board" aria-label="火星基地交互系统低保真页面关系图">
      <div className="wireframe-concept-row wireframe-concept-row-top">
        <WireframeConceptCard StartIcon={MarsHabitatIcon} start="居住空间" MiddleIcon={Hand} middle="床侧交互" branches={['任务管理', '健康监测', '娱乐入口']} />
        <WireframeConceptCard StartIcon={MarsHabitatIcon} start="居住空间" MiddleIcon={Grid3X3} middle="窗口交互" branches={['火星信息', '其他行星']} />
        <WireframeConceptCard StartIcon={Wrench} start="服务模块" MiddleIcon={Hand} middle="空间交互" branches={['地貌信息', '工作任务', '勘测操作']} />
      </div>

      <div className="wireframe-reference-stage">
        <div className="wireframe-route-ribbon ribbon-accommodation">1. 居住空间</div>
        <div className="wireframe-route-ribbon ribbon-window">2. 窗口交互</div>
        <div className="wireframe-route-ribbon ribbon-service-top">3. 服务模块</div>
        <div className="wireframe-route-ribbon ribbon-ranching">6. 养殖管理</div>
        <div className="wireframe-route-ribbon ribbon-plant">5. 室内种植</div>
        <div className="wireframe-route-ribbon ribbon-physical">4. 身体需求</div>
        <div className="wireframe-route-ribbon ribbon-service-bottom">4. 服务模块</div>

        <div className="wireframe-reference-grid">
          {screens.map(screen => (
            <WireframeBoardScreen key={screen.number} {...screen} onOpen={onOpen} />
          ))}

          <svg className="wireframe-reference-connections" viewBox="0 0 1200 320" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="mars-reference-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L8 4 L0 8 Z" />
              </marker>
            </defs>
            <path d="M38 66 H266" /><circle cx="38" cy="66" r="3" />
            <path d="M228 92 H462" /><circle cx="228" cy="92" r="3" />
            <path d="M652 60 H868" /><circle cx="652" cy="60" r="3" />
            <path d="M868 60 H1060" /><circle cx="868" cy="60" r="3" />
            <path d="M1060 60 V232" /><circle cx="1060" cy="60" r="3" />
            <path d="M1060 232 H870" /><circle cx="1060" cy="232" r="3" />
            <path d="M870 250 H660" /><circle cx="870" cy="250" r="3" />
          </svg>
        </div>
      </div>

      <div className="wireframe-concept-row wireframe-concept-row-bottom">
        <WireframeConceptCard StartIcon={MarsHabitatIcon} start="功能舱" MiddleIcon={Sprout} middle="培育管理" branches={['养殖管理']} />
        <WireframeConceptCard StartIcon={MarsHabitatIcon} start="功能舱" MiddleIcon={Sprout} middle="培育管理" branches={['室内种植']} />
        <WireframeConceptCard StartIcon={Wrench} start="服务模块" MiddleIcon={UserRound} middle="身体需求" branches={[]} />
      </div>
    </div>
  )
}

function FinalUiScreen({ screen, featured = false, anchors, onOpen }) {
  return (
    <article className={`mars-final-screen${featured ? ' is-featured' : ''}`}>
      <button
        type="button"
        className="mars-final-screen-media"
        onClick={() => onOpen({ ...screen, description: `${screen.title} · ${screen.auxiliary}`, kind: 'high-fidelity' })}
        aria-label={`放大查看：${screen.title}`}
      >
        <img src={screen.image} alt={screen.alt} loading="lazy" />
        <span>查看高清原图 <ArrowUpRight size={15} /></span>
        {featured && anchors && (
          <svg className="mars-final-guide-lines" viewBox="0 0 150 100" preserveAspectRatio="none" aria-hidden="true">
            {anchors.map(([x, y], index) => {
              const targetY = [16, 50, 84][index]
              return (
                <g key={`${x}-${y}`}>
                  <path d={`M ${x} ${y} H 108 V ${targetY} H 118`} />
                  <circle cx={x} cy={y} r="1.15" />
                </g>
              )
            })}
          </svg>
        )}
      </button>
      <footer>
        <div><h4>{screen.title}</h4><small>{screen.auxiliary}</small></div>
        {screen.description && <p>{screen.description}</p>}
      </footer>
    </article>
  )
}

function FinalUiAnnotations({ items }) {
  return (
    <aside className="mars-final-annotations" aria-label="界面设计说明">
      {items.map(([title, copy], index) => (
        <article key={title}>
          <span>0{index + 1}</span>
          <div><h4>{title}</h4><p>{copy}</p></div>
        </article>
      ))}
    </aside>
  )
}

export default function InteractionMarsCase({ nextProject }) {
  const [lightbox, setLightbox] = useState(null)
  const [lightboxFit, setLightboxFit] = useState(true)
  const [navVisible, setNavVisible] = useState(false)
  const [activeNav, setActiveNav] = useState('mars-overview')

  useEffect(() => {
    const updateNavigation = () => {
      const hero = document.getElementById('mars-cover')
      const trigger = 180
      setNavVisible(Boolean(hero && hero.getBoundingClientRect().bottom <= trigger))

      const allSections = navigation.flatMap(item => item.sections)
      let current = allSections[0]
      allSections.forEach(id => {
        const element = document.getElementById(id)
        if (element && element.getBoundingClientRect().top <= 180) current = id
      })
      const group = navigation.find(item => item.sections.includes(current))
      setActiveNav(group?.target || 'mars-overview')
    }

    updateNavigation()
    window.addEventListener('scroll', updateNavigation, { passive: true })
    window.addEventListener('resize', updateNavigation)
    return () => {
      window.removeEventListener('scroll', updateNavigation)
      window.removeEventListener('resize', updateNavigation)
    }
  }, [])

  useEffect(() => {
    if (!lightbox) return undefined
    setLightboxFit(true)
    const previousOverflow = document.body.style.overflow
    const closeOnEscape = event => {
      if (event.key === 'Escape') setLightbox(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [lightbox])

  const scrollTo = id => {
    const target = document.getElementById(id)
    if (!target) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const navigationOffset = window.innerWidth <= 720 ? 136 : 158
    const top = target.getBoundingClientRect().top + window.scrollY - navigationOffset

    window.scrollTo({
      top: Math.max(0, top),
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <section className="mars-case-page" id="case-interaction-mars">
      <div className="mars-case-top shell">
        <a href="#projects">← 返回项目目录</a>
      </div>

      <article className="mars-case-hero mars-case-cover shell" id="mars-cover">
        <div className="mars-case-hero-copy">
          <span className="mars-case-kicker">A01 / CASE STUDY</span>
          <p className="mars-case-english">INTERACTION MARS</p>
          <h1>火星交互<wbr />系统</h1>
          <p className="mars-case-lead">面向未来火星基地生活与工作场景的综合交互系统。</p>
          <div className="mars-cover-tags" aria-label="项目标签">
            <span>交互设计</span><span>空间交互</span><span>个人概念设计</span>
          </div>
        </div>

        <figure className="mars-cover-visual">
          <img src={`${mediaRoot}/interaction-mars-cover.png`} alt="火星基地太空舱与空间信息界面氛围视觉" />
        </figure>

        <a className="mars-cover-scroll" href="#mars-overview">
          <span>向下浏览项目</span><b aria-hidden="true">↓</b>
        </a>
      </article>

      <nav className={`mars-case-nav shell ${navVisible ? 'is-visible' : ''}`} aria-label="火星交互系统项目章节导航">
        {navigation.map(item => (
          <button
            type="button"
            onClick={() => scrollTo(item.target)}
            className={activeNav === item.target ? 'active' : ''}
            aria-current={activeNav === item.target ? 'location' : undefined}
            key={item.target}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="mars-case-body shell">
        <section className="mars-case-section mars-project-overview" id="mars-overview">
          <SectionHeading
            number="01"
            eyebrow="项目概览"
            title={(
              <>
                <span className="mars-overview-title-line">将分散的信息与任务，</span>
                <span className="mars-overview-title-line">整合为统一的基地交互系统。</span>
              </>
            )}
            description="项目围绕火星基地中的环境监测、健康管理、任务安排与生活服务，探索如何在高风险、任务密集的使用场景中建立清晰、连续且可快速判断的信息与操作体验。"
          />

          <div className="mars-overview-upper">
            <div className="mars-overview-narrative">
              <article>
                <span>项目背景</span>
                <p>未来火星基地中的环境监测、健康管理、工作任务和生活服务来自不同的功能系统。宇航员需要在任务密集、状态持续变化的环境中频繁查看不同信息，并及时判断当前风险与下一步行动。</p>
              </article>
              <article className="mars-overview-question">
                <span>核心设计问题</span>
                <p>如何在高风险、状态持续变化的基地环境中，将分散的信息与任务整合为一套清晰、连续且可快速判断的交互系统？</p>
              </article>
            </div>

            <div className="mars-system-logic" role="img" aria-label="基地环境、健康状态、任务安排与生活服务汇聚为统一的火星基地交互系统">
              <header>
                <span>系统问题逻辑可视化</span>
                <strong>四类分散信息，汇聚为统一系统</strong>
              </header>
              <div className="mars-logic-state">
                <small>全局状态层</small>
                <div>{overviewStates.map(item => <span className={item === '系统警告' ? 'is-alert' : ''} key={item}>{item}</span>)}</div>
              </div>
              <div className="mars-logic-flow">
                <div className="mars-logic-sources">
                  {overviewSources.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}
                </div>
                <div className="mars-logic-connector" aria-hidden="true"><i /><b>→</b></div>
                <div className="mars-logic-core">
                  <small>统一入口</small>
                  <strong>火星基地<br />交互系统</strong>
                  <span>共享信息结构与状态逻辑</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mars-overview-lower">
            <section className="mars-overview-goals">
              <header><span>设计目标</span><p>从统一入口到跨终端一致，建立可执行的系统原则。</p></header>
              <div>
                {overviewGoals.map((item, index) => (
                  <article key={item.title}>
                    <span>0{index + 1}</span>
                    <div><h3>{item.title}</h3><p>{item.description}</p></div>
                  </article>
                ))}
              </div>
            </section>

            <section className="mars-overview-info">
              <header><span>项目信息</span></header>
              <dl>
                {overviewInformation.map(([label, value]) => (
                  <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
                ))}
              </dl>
            </section>
          </div>

          <p className="mars-overview-transition">在定义系统功能之前，我首先梳理了火星基地中的使用场景、任务节奏与信息需求。</p>
        </section>

        <section className="mars-case-section mars-reference" id="mars-reference">
          <SectionHeading
            number="02"
            eyebrow="同类界面案例分析"
            title={<><span>从未来空间站交互界面中，</span><span>观察信息组织、状态反馈与空间交互。</span></>}
            description="由于火星基地综合交互系统缺少直接对应的成熟产品，本项目选取电影《Passengers》中的未来空间站界面作为同类案例，观察其功能入口、全局状态、局部诊断、健康数据与空间界面的组织方式。"
          />

          <div className="mars-passengers-case">
            <dl className="mars-passengers-facts">
              <div><dt>案例对象</dt><dd>电影《Passengers》中的未来空间站交互系统</dd></div>
              <div><dt>分析范围</dt><dd>功能入口｜全局状态｜系统诊断｜健康检测｜空间交互</dd></div>
              <div><dt>案例性质</dt><dd>影视概念界面参考，而非真实商业产品竞品</dd></div>
            </dl>
          </div>

          <section className="mars-passengers-sample-section" aria-labelledby="passengers-samples-title">
            <header>
              <div><span>案例样本</span><h3 id="passengers-samples-title">界面样本</h3></div>
              <p>通过不同功能场景，观察同一空间站系统中的入口、状态、诊断与交互表达。</p>
            </header>
            <div className="mars-passengers-samples">
              {passengersSamples.map((item, index) => (
                <article key={item.title}>
                  <header><span>0{index + 1}</span><h4>{item.title}</h4></header>
                  <button
                    type="button"
                    onClick={() => setLightbox({ ...item, description: item.observation })}
                    aria-label={`放大查看${item.title}案例图`}
                  >
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </button>
                  <p>{item.observation}</p>
                  <small>图片来源：电影《Passengers》（2016）</small>
                </article>
              ))}
            </div>
          </section>

          <div className="mars-passengers-analysis">
            <section className="is-strength">
              <header><span>观察 / 结构</span><h3>值得借鉴</h3></header>
              <div>
                {passengersStrengths.map(([title, copy], index) => (
                  <article key={title}><span>0{index + 1}</span><div><h4>{title}</h4><p>{copy}</p></div></article>
                ))}
              </div>
            </section>
            <section className="is-problem">
              <header><span>差异 / 风险</span><h3>存在的问题</h3></header>
              <div>
                {passengersProblems.map(([title, copy], index) => (
                  <article key={title}><span>0{index + 1}</span><div><h4>{title}</h4><p>{copy}</p></div></article>
                ))}
              </div>
            </section>
          </div>

          <section className="mars-passengers-insights">
            <header><span>设计转译</span><h3>对本项目的设计启发</h3><p>案例中的优点与问题被进一步转化为本项目的信息和交互原则。</p></header>
            <div>
              {passengersInsights.map(([title, copy], index) => (
                <article key={title}><span>0{index + 1}</span><h4>{title}</h4><p>{copy}</p></article>
              ))}
            </div>
            <p className="mars-passengers-scope-note">这些原则将在后续用户体验地图与信息架构中继续验证和细化。</p>
          </section>

          <div className="mars-passengers-transition">
            <p>案例分析明确了空间界面的表达原则；下一步通过宇航员的一天，进一步梳理具体任务、体验问题与信息需求。</p>
            <span>下一章节 <strong>03｜用户体验地图</strong></span>
          </div>
        </section>

        <section className="mars-case-section" id="mars-journey">
          <SectionHeading
            number="03"
            eyebrow="用户体验地图"
            title={<><span>通过宇航员的一天，</span><span>梳理任务节奏、体验问题与信息需求。</span></>}
            description="以场景角色在一天中的任务变化为线索，梳理不同阶段的主要行为、体验问题、信息需求与设计机会，为后续系统模块与状态结构提供依据。"
          />

          <div className="mars-journey-context">
            <article className="mars-journey-persona">
              <div className="mars-journey-icon"><UserRound aria-hidden="true" /></div>
              <div>
                <span>场景角色</span>
                <h3>宇航员 Eric</h3>
                <p>需要在基地环境监测、个人健康、工作任务与日常生活之间持续切换的基地成员。</p>
              </div>
            </article>

            <article className="mars-journey-expectations">
              <span>核心期望</span>
              <div className="mars-expectation-grid">
                {journeyExpectations.map(item => {
                  const Icon = item.icon
                  return (
                    <div key={item.title}>
                      <Icon aria-hidden="true" />
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  )
                })}
              </div>
            </article>
          </div>

          <div className="mars-journey-scroll" aria-label="宇航员一天的五阶段用户体验地图">
            <div className="mars-journey-stages">
              {journeyStages.map((item, index) => {
                const Icon = item.icon
                return (
                  <article className={item.critical ? 'is-critical' : ''} key={item.title}>
                    <header>
                      <span>0{index + 1}</span>
                      <Icon aria-hidden="true" />
                      <div>
                        <h3>{item.title}</h3>
                        <time>{item.time}</time>
                      </div>
                    </header>
                    <dl>
                      <div><dt>核心行为</dt><dd>{item.action}</dd></div>
                      <div className="mars-journey-pain"><dt>主要问题</dt><dd>{item.pain}</dd></div>
                      <div>
                        <dt>信息需求</dt>
                        <dd className="mars-journey-tags">
                          {item.needs.map(need => <span key={need}>{need}</span>)}
                        </dd>
                      </div>
                      <div><dt>设计机会</dt><dd>{item.opportunity}</dd></div>
                      <div className="mars-journey-state"><dt>状态关键词</dt><dd>{item.emotion}</dd></div>
                    </dl>
                  </article>
                )
              })}
            </div>
          </div>

          <section className="mars-emotion-map" aria-labelledby="mars-emotion-title">
            <div className="mars-emotion-heading">
              <div>
                <span>状态曲线</span>
                <h3 id="mars-emotion-title">任务节奏与状态变化</h3>
              </div>
              <p>状态曲线用于表现一天中任务压力与恢复节奏的变化，不代表真实生理测量数据。</p>
            </div>
            <div className="mars-emotion-chart">
              <div className="mars-emotion-plot">
                <svg viewBox="0 0 1000 220" role="img" aria-label="宇航员一天中五个阶段的情绪变化曲线" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="marsEmotionStroke" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#65d8df" />
                      <stop offset="42%" stopColor="#65d8df" />
                      <stop offset="55%" stopColor="#ff825f" />
                      <stop offset="70%" stopColor="#65d8df" />
                      <stop offset="100%" stopColor="#65d8df" />
                    </linearGradient>
                  </defs>
                  <path className="mars-emotion-gridline" d="M60 46H940M60 110H940M60 174H940" />
                  <path className="mars-emotion-line" d="M80 118 C145 88 220 72 280 82 S420 112 500 158 S650 106 720 96 S860 102 920 82" />
                  {[
                    [80, 118, '平稳', '晨间'],
                    [280, 82, '专注', '上午'],
                    [500, 158, '压力', '中午'],
                    [720, 96, '恢复', '下午'],
                    [920, 82, '放松', '晚间'],
                  ].map(([x, y, state, stage], index) => (
                    <g className={index === 2 ? 'is-critical' : ''} key={state}>
                      <circle className="mars-emotion-node" cx={x} cy={y} r="9" />
                      <text className="mars-emotion-state-text" x={x} y={y - 18} textAnchor="middle">{state}</text>
                      <text className="mars-emotion-stage-text" x={x} y="208" textAnchor="middle">{stage}</text>
                    </g>
                  ))}
                </svg>
              </div>
              <div className="mars-emotion-labels">
                {journeyStages.map(item => (
                  <div className={item.critical ? 'is-critical' : ''} key={item.emotion}>
                    <strong>{item.emotion}</strong>
                    <span>{item.emotionDetail}</span>
                    <small>{item.title}</small>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mars-journey-insights" aria-labelledby="mars-journey-insights-title">
            <div className="mars-journey-insights-heading">
              <span>设计结论</span>
              <h3 id="mars-journey-insights-title">体验地图带来的设计结论</h3>
            </div>
            <div>
              {journeyConclusions.map((item, index) => (
                <article key={item.title}>
                  <span>0{index + 1}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <p className="mars-journey-boundary">
            本体验地图基于项目背景资料与未来场景推演，用于梳理可能的任务节奏与信息需求，并非来自真实火星基地用户观察。
          </p>
          <div className="mars-section-transition">
            <p>这些行为问题与信息需求进一步决定了系统的模块划分、信息层级与全局状态结构。</p>
            <span>下一章节 <strong>04｜信息架构</strong></span>
          </div>
        </section>

        <section className="mars-case-section mars-architecture-section" id="mars-architecture">
          <div className="mars-architecture-content">
            <SectionHeading
              number="04"
              eyebrow="信息架构"
              title={<><span>将用户需求转化为系统模块，</span><span>并建立跨模块的全局状态结构。</span></>}
              description="根据体验地图中的任务、环境、健康与生活需求，系统被划分为四个核心模块；全局状态层则在模块切换过程中持续提供关键状态与任务信息。"
            />
            <p className="mars-architecture-explanation">全局状态层在模块切换过程中持续保留环境状态、系统警告、当前任务与用户身份，避免用户在不同功能中失去任务上下文。</p>
            <div className="mars-architecture-map" role="group" aria-label="火星基地信息架构">
              <div className="mars-architecture-core">
                <span>全局状态层</span>
                <div>
                  {['环境状态', '系统警告', '当前任务', '用户身份'].map(item => <small key={item}>{item}</small>)}
                </div>
              </div>
              <div className="mars-architecture-entry">
                <small>统一入口</small>
                <strong>火星基地交互系统</strong>
              </div>
              <div className="mars-architecture-distributor" aria-hidden="true">
                <i /><i /><i /><i />
              </div>
              <div className="mars-architecture-branches">
                {architectureModules.map(([title, items], index) => (
                  <article key={title}>
                    <h3><small>0{index + 1}</small>{title}</h3>
                    {items.map(item => <span key={item}>{item}</span>)}
                  </article>
                ))}
              </div>
            </div>
            <section className="mars-architecture-derivation" aria-labelledby="mars-architecture-derivation-title">
              <h3 id="mars-architecture-derivation-title">从体验结论到系统结构</h3>
              <div>
                {[
                  ['01', '建立统一入口', '四个核心模块共享同一系统入口与一级导航。'],
                  ['02', '保持任务上下文', '全局状态层持续显示当前任务与关键状态。'],
                  ['03', '根据状态调整反馈', '不同模块使用一致的常规、提醒与异常等级表达。'],
                ].map(([number, title, description]) => (
                  <article key={title}>
                    <span className="mars-derivation-number">{number}</span>
                    <div><small>体验结论</small><strong>{title}</strong></div>
                    <span className="mars-derivation-arrow" aria-hidden="true">→</span>
                    <div><small>系统结构回应</small><p>{description}</p></div>
                  </article>
                ))}
              </div>
            </section>
            <div className="mars-section-transition">
              <p>在系统结构确定后，下一步通过环境异常处理流程，验证不同模块之间的连接与状态变化。</p>
              <span>下一章节 <strong>05｜核心任务流程</strong></span>
            </div>
          </div>
        </section>

        <section className="mars-case-section mars-core-flow-section" id="mars-flow">
          <SectionHeading
            number="05"
            eyebrow="核心任务流程"
            title={<><span>从发现环境异常，</span><span>到完成任务并确认恢复。</span></>}
            description="选择基地环境异常处理作为代表性任务，梳理用户行为、系统反馈、模块切换与状态变化，验证全局状态层、基地环境与任务管理之间的连接关系。"
          />

          <dl className="mars-flow-scope" aria-label="核心任务范围">
            <div><dt>任务场景</dt><dd>基地环境异常处理</dd></div>
            <div><dt>用户目标</dt><dd>识别问题、完成处理并确认基地状态恢复</dd></div>
            <div><dt>涉及结构</dt><dd>全局状态层｜基地环境｜任务管理｜工作记录</dd></div>
          </dl>

          <section className="mars-task-flow" aria-labelledby="mars-task-flow-title">
            <header>
              <small>任务主线</small>
              <h3 id="mars-task-flow-title">用户行为与系统反馈</h3>
              <p>五个阶段将异常提醒转化为可执行任务，并在完成后更新全局状态。</p>
            </header>
            <div className="mars-task-flow-grid" role="group" aria-label="基地环境异常处理五阶段流程">
              {coreTaskStages.map((stage, index) => (
                <article className={index === 2 ? 'is-decision' : ''} key={stage.title}>
                  <header>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <small>{stage.module}</small>
                    <h4>{stage.title}</h4>
                  </header>
                  <div className="mars-flow-lane mars-flow-lane-user">
                    <small>用户行为</small>
                    <p>{stage.action}</p>
                  </div>
                  <div className="mars-flow-lane mars-flow-lane-system">
                    <small>系统反馈</small>
                    <p>{stage.feedback}</p>
                  </div>
                  <footer><small>当前状态</small><strong>{stage.state}</strong></footer>
                </article>
              ))}
            </div>
          </section>

          <section className="mars-flow-decision" aria-labelledby="mars-flow-decision-title">
            <div className="mars-flow-decision-question">
              <small>判断节点</small>
              <h3 id="mars-flow-decision-title">是否需要立即处理？</h3>
            </div>
            <div className="mars-flow-decision-paths">
              <article><span>A</span><div><strong>立即处理</strong><p>进入任务创建与执行流程。</p></div></article>
              <article><span>B</span><div><strong>暂不处理</strong><p>记录问题并进入后续任务。</p></div></article>
            </div>
          </section>

          <section className="mars-flow-module-path" aria-labelledby="mars-flow-module-title">
            <header>
              <small>模块切换关系</small>
              <h3 id="mars-flow-module-title">异常如何在系统结构中流转</h3>
            </header>
            <div className="mars-flow-module-track" role="group" aria-label="模块切换关系">
              {['全局状态层', '基地环境', '任务管理', '工作记录', '全局状态更新'].map((item, index) => (
                <React.Fragment key={item}>
                  <span className={index === 0 || index === 4 ? 'is-global' : index === 3 ? 'is-record' : ''}>{item}</span>
                  {index < 4 && <i aria-hidden="true">→</i>}
                </React.Fragment>
              ))}
            </div>
            <p>异常首先通过全局状态被发现，随后在基地环境模块中被理解，并转化为任务管理中的处理任务；任务完成后，结果重新更新至全局状态。</p>
          </section>

          <section className="mars-flow-status" aria-labelledby="mars-flow-status-title">
            <header>
              <small>状态变化轨迹</small>
              <h3 id="mars-flow-status-title">从异常出现到状态恢复</h3>
              <p>状态轨迹用于表达任务处理过程中的系统状态变化，不代表真实监测数据或测试结果。</p>
            </header>
            <div className="mars-flow-status-track" role="img" aria-label="正常、异常、待判断、待处理、处理中、已恢复">
              {taskStatusTrack.map((status, index) => (
                <React.Fragment key={status}>
                  <span className={index === 0 || index === 5 ? 'is-normal' : index < 4 ? 'is-alert' : 'is-processing'}>{status}</span>
                  {index < taskStatusTrack.length - 1 && <i aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </section>

          <div className="mars-section-transition mars-flow-transition">
            <p>核心任务逻辑确定后，下一步通过手稿、低保真与高保真设计，进一步探索各阶段的信息布局与界面表达。</p>
            <span>下一章节 <strong>06｜设计演进</strong></span>
          </div>
        </section>

        <section className="mars-case-section" id="mars-wireframe">
          <SectionHeading
            number="06"
            eyebrow="交互方案探索"
            title={<>从概念草图到低保真交互路径，<br />建立不同场景之间的界面关系。</>}
            description="早期草图用于探索空间布局、信息位置与对象关系；低保真阶段进一步将这些界面组织为可导航的交互路径，明确不同使用场景、功能入口与界面之间的连接方式。"
          />
          <section className="mars-sketch-gallery-section">
            <header className="mars-subsection-heading"><span>01</span><div><small>草图探索</small><h3>空间与界面探索</h3><p>通过手绘草图探索任务、健康、地貌、服务与生活场景中的空间布局、信息位置和主要交互对象。</p></div></header>
            <div className="sketch-board sketch-rows">
              {[
                { className: 'sketch-row sketch-row-four', items: ['01', '07', '02', '10'] },
                { className: 'sketch-row sketch-row-four', items: ['03', '09', '12', '06'] },
                { className: 'sketch-row sketch-row-five', items: ['05', '04', '08', '11', '13'] },
              ].map((row, rowIndex) => (
                <div className={row.className} key={rowIndex}>
                  {row.items.map((sketchNo) => {
                    const [no, title, file] = sketches.find(([itemNo]) => itemNo === sketchNo)
                    return <button key={no} onClick={()=>setLightbox({title,image:`${processRoot}/sketches/${file}`,alt:title,description:sketchCategories[no]})}><figure><img src={`${processRoot}/sketches/${file}`} alt={title} loading="lazy"/></figure><span>{title}</span><small>{sketchCategories[no]}</small></button>
                  })}
                </div>
              ))}
            </div>
            <p className="mars-stage-transition">手绘阶段首先确定了不同场景中的主要对象、空间布局与信息位置；下一步将这些独立界面整理为可以连续使用的低保真交互路径。</p>
          </section>
          <section className="mars-screen-flow-section">
            <header className="mars-subsection-heading"><span>02</span><div><small>低保真 · 交互流程</small><h3>低保真交互流程</h3><p>将草图中的界面概念进一步整理为低保真页面，并依据不同使用场景建立页面之间的导航、入口与功能关系。</p></div></header>
            <WireframeInteractionBoard onOpen={setLightbox} />
            <p className="wireframe-board-summary">低保真阶段进一步明确了不同场景的交互入口、页面关系与场景延展，并通过统一的导航和信息结构保持跨场景操作的一致性。</p>
          </section>
          <section className="mars-principles-section"><header className="mars-subsection-heading"><span>03</span><div><small>交互原则</small><h3>交互结构结论</h3></div></header><div>{[['01','稳定入口','不同使用场景保留固定一级入口，减少用户在模块切换时重新定位。'],['02','对象驱动','环境、人体和管理对象作为主要视觉与交互锚点，相关信息围绕对象组织。'],['03','一致结构','同类功能保持稳定导航和信息层级，不同任务只改变主要内容与操作区域。']].map(([no,title,copy])=><article key={no}><span>{no}</span><h4>{title}</h4><p>{copy}</p></article>)}</div></section>
          <div className="mars-section-transition"><p>低保真阶段进一步明确了不同使用场景、交互入口与页面之间的连接关系；下一步将在统一视觉语言的基础上完成最终界面表达。</p><span>下一章节 <strong>07｜最终界面设计</strong></span></div>
        </section>

        <section className="mars-case-section" id="mars-final">
          <SectionHeading
            number="07"
            eyebrow="FINAL UI"
            title="最终界面设计"
            description="在统一导航、信息层级与空间交互框架基础上，将任务、环境信息、服务操作与生活管理进一步转化为完整的高保真界面。"
          />
          <div className="mars-final-groups">
            {finalUiGroups.map(group => (
              <section className="mars-final-group" key={group.number} aria-labelledby={`mars-final-group-${group.number}`}>
                <header className="mars-final-group-heading">
                  <span>{group.number}</span>
                  <div>
                    <small>{group.eyebrow}</small>
                    <h3 id={`mars-final-group-${group.number}`}>{group.title}</h3>
                    <p>{group.description}</p>
                  </div>
                </header>
                <div className="mars-final-hero">
                  <FinalUiScreen screen={group.hero} featured anchors={group.anchors} onOpen={setLightbox} />
                </div>
                <FinalUiAnnotations items={group.annotations} />
                <div className="mars-final-supporting">
                  {group.supporting.map(screen => <FinalUiScreen key={screen.title} screen={screen} onOpen={setLightbox} />)}
                </div>
              </section>
            ))}
            <section className="mars-final-group mars-spatial-application" aria-labelledby="mars-final-group-05">
              <header className="mars-final-group-heading">
                <span>05</span>
                <div>
                  <small>SPATIAL APPLICATION</small>
                  <h3 id="mars-final-group-05">空间中的界面应用</h3>
                  <p>将界面进一步置入基地空间与大型显示环境中，探索信息界面与环境对象、观察距离和空间尺度之间的关系。</p>
                </div>
              </header>
              <div className="mars-spatial-application-scenes">
                <FinalUiScreen screen={spatialApplicationScreens.display} featured onOpen={setLightbox} />
                <FinalUiScreen screen={spatialApplicationScreens.view} onOpen={setLightbox} />
              </div>
            </section>
          </div>
        </section>

        <section className="mars-case-section mars-reflection" id="mars-reflection">
          <SectionHeading
            number="08"
            eyebrow="REFLECTION"
            title="项目总结与反思"
            description="本项目从未来火星基地场景出发，围绕任务、环境、健康与生活管理建立统一的信息与交互框架，并进一步探索界面在不同空间与使用场景中的延展方式。"
          />
          <div className="mars-reflection-columns">
            {reflectionColumns.map((item, index) => (
              <article key={item.title}>
                <span>0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p>
                <div className="mars-reflection-keywords">{item.keywords.map(keyword => <small key={keyword}>{keyword}</small>)}</div>
              </article>
            ))}
          </div>
          <p className="mars-reflection-closing">从单一界面设计走向跨场景系统体验，是本项目最主要的探索。</p>
          <footer>
            <a href="#projects">返回项目目录 <ArrowUpRight /></a>
            {nextProject && <a href={nextProject.href}>下一项目：{nextProject.title} <ArrowUpRight /></a>}
          </footer>
        </section>
      </div>

      {lightbox && (
        <div className={`mars-lightbox${lightbox.kind === 'wireframe' ? ' mars-lightbox-wireframe' : ''}${lightboxFit ? ' is-fit' : ' is-actual'}`} role="dialog" aria-modal="true" aria-label={lightbox.title} onClick={() => setLightbox(null)}>
          <button className="mars-lightbox-close" type="button" onClick={() => setLightbox(null)} aria-label="关闭图片"><X /></button>
          <div className="mars-lightbox-tools" onClick={event => event.stopPropagation()}>
            <button type="button" className={lightboxFit ? 'is-active' : ''} onClick={() => setLightboxFit(true)}>适应屏幕</button>
            <button type="button" className={!lightboxFit ? 'is-active' : ''} onClick={() => setLightboxFit(false)}>100%</button>
          </div>
          <figure onClick={event => event.stopPropagation()}>
            <div className={`mars-lightbox-media${lightbox.secondaryImage ? ' mars-lightbox-pair' : ''}`}>
              <img src={lightbox.image} alt={lightbox.alt} />
              {lightbox.secondaryImage && <img src={lightbox.secondaryImage} alt="基地养殖管理独立界面" />}
            </div>
            <figcaption><strong>{lightbox.title}</strong><span>{lightbox.description}</span></figcaption>
          </figure>
        </div>
      )}
    </section>
  )
}
