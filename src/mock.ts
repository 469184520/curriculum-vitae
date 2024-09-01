export default {
  info: {
    name: '高才磊',
    gender: '女',
    age: 25,
    position: '前端开发工程师',
    workingYears: 4,
    phoneNumber: '13781400239',
    email: '469184520@qq.com',
    picture: '/gcl.jpg',
    // github: 'https://github.com/magician-hy',
    blog: 'https://www.cnblogs.com/maleijiejie/',
    salary: '14-17K',
    education:'全日制本科'
  },
  skills: {
    icons: [
      '/javascript.svg',
      '/typescript.svg',
      '/react.svg',
      '/redux.svg',
      '/react-router.svg',
      '/antd.svg',
      // '/vite.svg',
      '/webpack.svg',
      // '/rollup.svg',
      // '/babel.svg',
      '/axios.svg',
      // '/nodejs.svg',
      '/git.svg',
      '/npm.svg',
      '/etc.svg',
    ],
    descriptions: [
      '能够准确还原设计稿，处理响应式布局',
      '熟悉 ES6+ 语法，能够使用 TypeScript 开发，提高代码可维护性',
      '熟悉 React 技术栈和相关生态，例如 React Router、Redux 以及其他工具库等',
      '熟练使用支付宝小程序 ，灵活掌握支付宝小程序开发框架', 
      '熟悉主流组件库和图表库使用和二次封装，例如 Ant Design、Element-UI、ECharts 等',
      '了解网络，例如 fetch 和 Axios 使用及二次封装',
      '了解工程化，例如 Vite 和 Webpack 使用及配置，具备项目构建与 Git 工作流经验',
      '熟悉 PC、H5、小程序开发，有处理双端兼容性问题的经验',
      '具备代码质量意识，采用规范、重构、Code Review 等方式进行优化',
      '具备良好英语水平，有英语四级证书，有助于查阅官方文档，并在开发中规范命名'
    ],
    boldWords:[
      'React 技术栈和相关生态',
      '支付宝小程序 ',
      'Code Review',
      '双端兼容性问题的经验',
      '有英语四级证书',
      ' Vite 和 Webpack '
    ],
  },
  experiences: [
    {
      type: 'company',
      icon: '/fliggy.svg',
      company: '易宝软件科技有限公司（驻场阿里巴巴-飞猪旅行）',
      position: '前端开发工程师',
      time: '2024 年 05 月 - 2024 年 09 月',
      descriptions: [
        '负责北京环球度假区小程序和中后台项目迭代开发',
      ],
    },
    {
      type: 'company',
      icon: '/minsheng.png',
      company: '中科软科技股份有限公司（驻场民生银行）',
      position: '前端开发工程师',
      time: '2022年 11 月 - 2024 年 05 月',
      descriptions: [
        '开发银行金融项目，银行内部的管理系统。负责功能组件的开发，以及系统的维护和优化',
        '参与建立和维护团队前端开发的Code Review和编码规范，保证代码的质量，提高项目的可维护性',
      ],
      boldWords:['Code Review和编码规范，保证代码的质量']
    },
    {
      type: 'company',
      icon: '/vue.svg',
      company: '北京慧通明信息科技有限公司',
      position: '前端开发工程师',
      time: '2021 年 06 月 - 2022 年 10 月',
      descriptions: [
        '负责Cleverex教育管理系统的前端页面的开发和维护',
        '维护SSRS报表服务，和后端人员协调，开发前端功能和报表业务'
      ],
    },
    {
      type: 'company',
      icon: '/chinaMobile.png',
      company: '亚信科技有限公司（中国移动实习）',
      position: '前端开发工程师',
      time: '2020.07月-2021.05月',
      descriptions: [
        '负责中国移动安全平台系统的前端页面的开发和维护',
      ],
    },
    {
      type: 'education',
      icon: '/anyang.jpg',
      school: '安阳师范学院',
      degree: '本科',
      major: '软件工程',
      time: '2017 年 09 月 - 2021 年 07 月',
      descriptions: [
        '中共党员，英语四级证书，普通话二级甲等证书，荣获奖学金'
      ],
    },
  ],
  projects: [
    {
      type: 'close',
      icon: '/alipay.svg',
      name: '北京环球度假区小程序',
      description:
      [
        `北京环球度假区业务线的核心项目，旨在为游客提供便捷的在线购票、园区地图、活动信息及实时排队等功能。
        包含套餐、酒店、券、兑换、票务、活动资讯等功能，为游客提供一站式服务`,
      ],
      stack: [
        '支付宝小程序开发框架',
        'Ant Design Mini',
      ],
      details: [
        '难点一：需要处理复杂的交易链路，包含正向和逆向的交易逻辑，需考虑多种场景，比如退款、改签升级等情况。',
        '难点二：对基于map-guide地图的现有功能进行优化，通过客户端缓存，数据预处理等方式解决路线请求加载过慢等问题。',
        '难点三：业务组件的复杂交互:如根据日期偏移量不同导致的可选场次的置灰逻辑。',
        '亮点一：双端兼容性:处理不同机型的兼容性问题，尤其是在iOS和Android之间，涉及字体、布局等渲染问题。',
        '亮点二：成功上线小程序，月活跃用户提升35%，用户满意度上升20%',
      ],
      boldWords:[
        '核心项目',
        '重构部分模块时保持与旧有数据逻辑的兼容性',
        '比如退款、改签升级等情况',
        '月活跃用户提升35%，用户满意度上升20%','正向和逆向的交易逻辑',
        '代码的低耦合和灵活性',
        '业务组件的复杂交互',
        '确保用户体验的流畅性和功能的正确性',
        '双端兼容性:处理不同机型的兼容性问题',
        '接口异常的兜底处理',
        '如根据日期偏移量不同导致的可选场次的置灰逻辑',
        '在重构过程中保持与旧有数据逻辑的兼容性',
        '基于map-guide插件',
        '亮点一',
        '亮点二',
        '难点一',
        '难点二',
        '难点三',
        '客户端缓存，数据预处理'
      ]
    },
    {
      type: 'close',
      icon: '/react.svg',
      name: '北京环球度假区中后台',
      description:
      [
        `本项目旨在为北京环球度假区提供支付宝小程序的各项功能配置与运营需求。
        系统覆盖了从票务管理、产品打包、数据监控到用户体验优化的全方位业务流程，
        支持环影支付宝小程序的各项配置，包含但不限于首页和各详情页，门票，优速通，套餐等票种票型等业务的配置。
        `],
      stack: [
        'React',
        'Ant Design',
        'Umi',
        'TypeScript',
        'ahooks',
        
      ],
      details: [
        '难点一：票种、票型、点位配置等功能模块涉及复杂的数据关系及交互，设计时需确保系统的灵活性与可扩展性。',
        '难点二：公共 hooks 的提取：通过抽取相似数据的逻辑为公共hooks，例如封装useLocalStorage，存储和获取本地存储数据。',
        '亮点一：基于iframe以及arale-qrcode（用来生成二维码）的预览组件，在B端可以直接预览在C端的实现效果。',
        '亮点二：通过重构模块与使用 Form Render 优化表单，减少冗余代码，提高开发人员的工作效率，节省5人日人工成本。',
        '亮点三：引入 ESLint、Day.js、Lodash 等现代库与工具，能够显著提升代码质量、开发效率与性能，使项目更具前瞻性与可维护性，有效地推动项目的成功实施。',
      ],
      boldWords:[
        'ESLint、Day.js、Lodash 等现代库与工具',
        'Form Render 优化表单，能减少冗余代码',
        '处理复杂的数据关系及交互',
        '公共 hooks 的提取：',
        '节省5人日人工成本',
        '有效地推动项目的成功实施',
        'iframe',
        '例如封装useLocalStorage',
        'arale-qrcode（用来生成二维码）',
        '人工成本',
        '亮点一',
        '亮点二',
        '亮点三',
        '难点一',
        '难点二',
      ],
      
    },
    {
      type: 'close',
      icon: '/react.svg',
      name: '民生银行·OA系统B端',
      description:
      [
        `为响应现代化银行业对高效管理和资源优化的需求，我们开发了一款OA（Office Automation）管理平台。
        该平台旨在为银行内部提供一个集成化的项目与流程管理解决方案，适用于总行及分行，使得各项业务流程更加规范化、透明化，提高员工的工作效率和协同能力。`
      ],
      stack: [
        'React',
        'Redux',
        'Ant Design',
        'React-Router',
        'hooks',
        'ECharts'
      ],
      details: [
        '难点一：需求文档高度还原：理解需求的准确性非常重要，需求文档可能存在模糊或不完整的地方，需与需求方进行充分沟通，以确保对需求的准确把握。',
        '难点二：Webpack的配置复杂性较高，涉及多个插件和loader，实现文件维度条件编译，处理相关 bug 并汇总反馈',
        '难点三：重构部分模块，使用React Hooks（如useMemo、useCallback等）进行优化，需要对React的性能特性有深入的理解。',
        '难点四：封装各模块复杂数据清洗函数，数据结构复杂，清洗过程需要对数据有清晰的认识。封装复杂数据清洗函数时，要求代码的高内聚和低耦合，以确保可复用性和可读性。',
        '亮点一：维护浏览器兼容性：尤其是兼容老旧版本的浏览器，大大提高了用户认可度。',
        '亮点二：将复杂数据以图形和图表的形式呈现，帮助员工更快地理解和分析信息，从而快速做出决策，各项业务流程的办理时间缩短，显著提升员工工作效率。'
      ],
      boldWords:[
        '各项业务流程的办理时间缩短30%',
        '难点一',
        '难点二',
        '难点三',
        '难点四',
        '难点五',
        '亮点一：',
        '亮点二：',
        '重构部分模块',
        'Webpack的配置复杂性较高',
        '需求文档高度还原',
        'React Hooks（如useMemo、useCallback等）',
        '数据结构复杂',
        '代码的高内聚和低耦合',
        '浏览器兼容性',
        '各项业务流程的办理时间缩短',
        '，显著提升员工工作效率。',
        '大大提高了用户认可度',
      ]
    },
    {
      type: 'close',
      icon: '/react.svg',
      name: '民生银行·督办系统C端',
      description:[
        '督办系统有b端和c端组成。主要是通过分督办角色的方式来推动银行工作流程的进度，提高表单的审批进度和员工的工作效率'
      ],
      stack: [
        'React',
        'React-Router',
        'Ant Design Mobile',
      ],
      details: [
        '难点一：负责b端至c端整个工作流程，确保不同设备（如手机、平板、PC）上的交互效果一致。',
        '难点二：用户使用表单时可能遇到各种突发问题，快速响应和有效解决问题不仅需要技术能力，还需要良好的用户沟通和反馈处理机制。',
        '难点三：封装业务组件，复杂表单中的组件封装可能涉及到大量的业务逻辑和数据交互。',
        '难点四：封装工具函数，例如实现基于 lodash 的防抖处理、设备类型判断等功能时，避免潜在的内存泄露和性能下降。',
        '亮点一：根据用户易用性角度，优化前端性能和布局，如提升首屏加载速度，由11秒降低到3秒。',
        '亮点二：通过高有效的维护，线上问题率缩减了90%，提升了客户的满意度和认可度。',
      ],
      boldWords:[
        '难点一',
        '难点二',
        '难点三',
        '难点四',
        '亮点一',
        '亮点二',
        '大量的业务逻辑和数据交互',
        '快速响应和有效解决问题',
        '确保不同设备（如手机、平板、PC）上的交互效果一致',
        '考虑性能的高效性和可靠性，避免潜在的内存泄露和性能下降',
        '提升首屏加载速度，由11秒降低到3秒',
        '线上问题率缩减了90%，提升了客户的满意度和认可度'
      ]
    },
    {
      type: 'close',
      icon: '/vue.svg',
      name: 'cleverex教育管理系统',
      description: [
        '为美国公立学校定制的教育管理平台。主要提供的服务有：每个学校的班级和学生人数的记录及统计，各个班级的人员及信息维护等功能模块，学生的签到和签退，学生的接送，管理各学生的接送人员信息，以及记录学生的每日三餐等等',
      ],
      stack: [
        'Vue',
        'npm',
        'TypeScript',
        'Vue Router',
        'Axios',
        'ECharts',
      ],
      details: [
        '难点一：数据的准确性和实时性：确保家长和学生接送信息准确无误，尤其在高峰时期，以及用户权限管理（不同用户如家长、教师，学校，需要不同的权限)。',
        '难点二：大数据量处理：在数据量大时，如何高效生成并展示报表。需要快速找到特定数据，优化搜索体验。',
        '难点三：数据实时更新：用ECharts开发常见图表，保证图表数据动态更新，数据变化的及时响应。',
        '难点四：使用 sql sever 向数据库中录入信息，确保数据库操作没有遗漏和错误。',
        '亮点一：优化页面加载速度和性能，例如对B端页面进行响应式处理，兼容不同设备，提高用户群体的使用便利性，用户好评度提高。',
        '亮点二：封装全局样式，减少样式代码重复，提高开发效率，将开发成本缩减了2人日。',
      ],
      boldWords:[
        '亮点一',
        '亮点二',
        '难点一',
        '难点二',
        '难点三',
        '难点四',
        '不同用户如家长、教师，学校，需要不同的权限',
        '数据的准确性和实时性',
        '快速找到特定数据，优化搜索体验',
        '用ECharts开发常见图表，保证图表数据动态更新',
        '确保数据库操作没有遗漏和错误',
        '响应式处理，兼容不同设备',
        '用户好评度提高',
        '将开发成本缩减了2人日'
      ]
    },
    {
      type: 'close',
      icon: '/chinaMobile.png',
      name: '中国移动4A管理平台 ',
      description: [
        '将日常安全管理工作电子化、流程化，如：安全运营管理流程、重大活动保障管理流程。通过对《安全管理平 台》系统模块的重构设计和新建，扩大安全运营、安全管理痛点需求和核心场景的支撑，提升用户体验，提升系统的智能化水平',
        ],
      stack: [
        'Vue 2',
        'Element UI',
      ],
      details: [
        '难点一：自适应兼容性：开发自适应页面并确保在各个浏览器上的兼容性要求高，涉及多种设备和浏览器的测试和优化。',
        '难点二：维护和开发超过60+页面和组件，例如查询安全详情、告警消息等功能模块。',
        '亮点一：数据可视化：使用ECharts开发可视化大屏的页面，使数据展示更直观。',
        '亮点二：增强用户体验：封装图表的交互功能（如点击、悬浮、缩放、拖拽），显著提升了用户体验，增加了界面的互动性和易用性。',
        
      ],
      boldWords:[
        '难点一',
        '难点二',
        '亮点一：',
        '亮点二：',
        'ECharts开发可视化大屏的页面',
        '封装图表的交互功能（如点击、悬浮、缩放、拖拽）',
        '增加了界面的互动性和易用性'

      ],
    },
    {
      type: 'close',
      icon: '/chinaMobile.png',
      name: '中国移动86君app',
      description: [
        '中国移动员工内部使用应用，主要功能是员工的出勤以及发布一些内部通知',
      ],
      stack: [
        'React',
        'React-Native',
        'React-Router',
      ],
      details: [
        '难点一：负责 app 的新闻宣传界面的开发和维护，需要与后台开发人员紧密配合，确保数据正确传输和展示。',
        '难点二：样式适配，不同机型的样式适配工作较为复杂，需要兼顾多种设备的用户体验。',
        '亮点一：实现了可复用的Tab栏切换组件，提高了开发效率和一致性。',
        '亮点二：及时应对用户在使用app时遇到的突发问题，提高用户满意度。',
      ],
      boldWords:[
        '亮点一',
        '亮点二',
        '难点一',
        '难点二',
        '确保数据正确传输和展示',
        '不同机型的样式适配工作较为复杂',
        '可复用的Tab栏切换组件',
        '提高用户满意度'
      ]
    },
  ],
};
