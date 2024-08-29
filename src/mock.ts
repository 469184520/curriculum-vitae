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
      '/rollup.svg',
      // '/babel.svg',
      '/axios.svg',
      // '/nodejs.svg',
      '/git.svg',
      '/npm.svg',
      '/etc.svg',
    ],
    descriptions: [
      '能够准确还原设计稿，处理响应式布局',
      '熟悉 ES6+ 语法，能够使用 TS 开发，提高代码可维护性',
      '熟悉 React 技术栈和相关生态，例如 React Router、Redux 以及其他工具库等',
      '熟练使用支付宝小程序 ，灵活掌握支付宝小程序开发框架', 
      '熟悉主流组件库和图表库使用和二次封装，例如 Ant Design、Element-UI、ECharts 等',
      '了解网络，例如 fetch 和 Axios 使用及二次封装',
      '了解工程化，例如 Vite 和 Webpack 使用及配置，具备项目构建与 Git 工作流经验',
      '熟悉 PC、H5、小程序开发，有处理双端兼容性问题的经验',
      '具备代码质量意识，采用规范、重构、Code Review 等方式进行优化',
      '具备良好英语水平，有英语四级证书，有助于查阅官方文档，并在开发中规范命名'
    ],
    boldWords:['React 技术栈和相关生态','支付宝小程序 ',
      '双端兼容性问题的经验','有英语四级证书'],
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
      ],
    },
    {
      type: 'company',
      icon: '',
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
        '封装常见工具函数，提高开发效率'
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
      icon: '/react.svg',
      name: '北京环球度假区中后台',
      description:
        `本项目旨在为北京环球度假区提供支付宝小程序的各项功能配置与运营需求。
        系统覆盖了从票务管理、产品打包、数据监控到用户体验优化的全方位业务流程，
        支持环影支付宝小程序的各项配置，包含但不限于首页和各详情页，门票，优速通，套餐等票种票型等业务的配置。
        `,
      stack: [
        'React',
        'Ant Design',
        'Umi',
        'TypeScript',
        'ahooks',
        
      ],
      details: [
        `负责票种，票型，点位配置，打包管理，基础数据管理，标签库等功能模块开发`,
        '参与前端标准化开发，使用Eslint，提高代码的质量',
        '基于 dayjs 封装处理日期时间函数，基于 lodash 封装防抖函数',
        '封装业务组件，例如基于 React和FormRender封装公共的可复用组件，封装富文本编辑器组件等等',
        '解决打包构建时的问题，比如由于构建环境升级、node版本不同，导致的构建失败',
        '抽取相似数据请求和处理逻辑为公共hooks,减少代码冗余，提高维护性，降低耦合度方便开发者处理特殊数据',
        '重构部分模块，例如使用 Form Render 优化各项表单，减少冗余代码量，提高开发效率'
      ],
      boldWords:['票种，票型，点位配置，打包管理，基础数据管理，标签库等功能',
        'React和FormRender','降低耦合度方便开发者处理特殊数据'],
      
    },
    {
      type: 'close',
      icon: '/alipay.svg',
      name: '北京环球度假区小程序',
      description:
        '包含北京环球度假区套餐、酒店、券、兑换、票务、活动资讯等功能，为游客提供一站式服务',
      stack: [
        '支付宝小程序开发框架',
        'Ant Design Mini',
        'Mini Ali UI',
        'Alife Logger',
      ],
      details: [
        `负责快速入园、套餐模块的组合式套餐的逻辑，包含正向和逆向的交易链路`,
        '封装负责模块下的数据排序以及整合的函数，包含接口异常兜底和数据重组',
        '重构部分模块，例如票型详情页面代码拆分以实现低耦合、在兼容之前数据逻辑的前提下对游客选择组件按照票种维度分组展示等',
        '封装业务组件，例如选择场次弹窗组件，和当前日期下的不可选择场次的置灰逻辑、购买数量和超时校验',
        '封装工具函数，例如选择场次时需要校验当前所选日期下的场次时间段是否可选为可选时间段、根据日期偏移量计算有哪些日期可以选择',
        '处理双端各机型兼容性问题，例如某些字体在iPhone14机型不支持',
        // '基于 postcss-px-to-viewport 实现响应式布局',
      ],
    },
    {
      type: 'close',
      icon: '/react.svg',
      name: '民生银行·OA系统B端',
      description:
        'OA管理平台是银行内部使用，包括总行和分行的项目、流程等的管理和维护，提升员工的工作效率',
      stack: [
        'React',
        'Redux',
        'Ant Design',
        'React-Router',
        'hooks',
      ],
      details: [
        '负责整个项目的页面和功能开发，高度还原需求文档',
        '兼容适配各个浏览器，保证兼容性和系统稳定性',
        '对现有项目进行维护，性能优化和代码重构，提高性能表现和提高系统的可维护性',
        '配置 webpack，实现文件维度条件编译，处理相关 bug 并汇总反馈',
        '重构部分模块，例如全局查询模块、可复用的表单联动功能，使用 useMemo、useCallback、memo 进行优化，提高系统性能',
        '封装各模块复杂数据清洗函数，对数据进行重新整合以达到自己想要的数据结构，提高开发效率',
      ],
    },
    {
      type: 'close',
      icon: '/react.svg',
      name: '民生银行·督办系统C端',
      description:
        '督办系统有b端和c端组成。主要是通过分督办角色的方式来推动银行工作流程的进度，提高表单的审批进度和员工的工作效率',
      stack: [
        'React',
        'React-Router',
        'Ant Design Mobile',
      ],
      details: [
        '负责b端至c端整个工作流程，实现多端功能一致的交互效果，提升用户体验度',
        '处理用户在使用表单时遇到的一些突发问题，能够及时解决并且部署',
        '封装业务组件，例如较为复杂表单中的组件、封装全局上下文中可复用的组件',
        '封装工具函数，例如基于 lodash 实现加载更多数据时的防抖处理、判断设备端类型、rpx 转 px 等',
        '根据用户易用性角度，优化系统的布局和功能，提出可行的技术方案，对前端性能优化，如提升首屏加载速度，由11秒降低到3秒',
      ],
    },
    {
      type: 'close',
      icon: '/vue.svg',
      name: 'cleverex教育管理系统',
      description: [
        '为美国公立学校定制的教育管理平台。',
        '主要提供的服务有：每个学校的班级和学生人数的记录及统计，学生的签到和签退，学生的接送，管理各学生的接送人员信息，以及记录学生的每日三餐等等 '],
      stack: [
        'Vue',
        'npm',
        'TypeScript',
        'Vue Router',
        'Axios',
      ],
      details: [
        '开发并维护 40+ 页面和组件，例如各个班级的人员及信息维护等功能模块',
        '维护系统中各班级学生接送的功能，包含学生家长信息',
        '负责系统的报表页面，包括搜索报表以及对报表信息的管理',
        '基于 ECharts 开发常见图表，并能根据不同选项和时间动态更新数据',
        '使用 sql sever 基本命令向数据库中录入信息，并满足客户需求进行开发',
        '优化页面加载速度和性能，例如使用减少请求、懒加载、代码分割等方法',
        '优化用户体验，例如对B端页面进行响应式兼容，在各常见机型上进行调试',
        '封装全局样式，减少样式代码重复，提高开发效率，例如常用 flex 布局、页面容器、背景毛玻璃效果等',
      ],
    },
    {
      type: 'close',
      icon: '/chinaMobile.png',
      name: '中国移动4A管理平台 ',
      description: [
        '将日常安全管理工作电子化、流程化，如：安全运营管理流程、重大活动保障管理流程',
        '通过对《安全管理平 台》系统模块的重构设计和新建，扩大安全运营、安全管理痛点需求和核心场景的支撑，提升用户体验，提升系统的智能化水平'],
      stack: [
        'Vue 2',
        'Element UI',
      ],
      details: [
        '按照需求文档开发自适应页面并兼容各个浏览器',
        '开发并维护 20+ 页面和组件，例如查询安全详情、告警消息等功能模块',
        '使用 Echarts 开发可视化大屏的页面，使数据展示更直观',
        '封装图表的交互功能，如点击，鼠标悬浮，缩放，拖拽等，增强用户体验度',
        
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
        '负责 app 的新闻宣传界面的开发和维护，配合后台开发人员联调数据',
        '封装业务组件，例如实现Tab栏的切换复用组件',
        '优化用户体验，例如不同机型样式适配，以及对样式的一些优化',
        '负责 app 页面的调试，开发新页面，并维护已有页面的样式',
      ],
    },
  ],
};
