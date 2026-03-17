import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NiHoo",
  description: "基于 VitePress 构建的现代化博客与教程网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '教程', link: '/tutorial/' },
      {
        text: 'Java',
        items: [
          { text: 'Java基础', link: '/coding/java/base' },
          { text: '反射', link: '/coding/java/reflect' },
          { text: 'JVM运行机制', link: '/coding/java/jvm' },
          { text: '设计模式', link: '/coding/java/design-pattern' },
          { text: 'Servlet', link: '/coding/java/servlet' },
          { text: '浮点数', link: '/coding/other/float' }
        ]
      },
      {
        text: 'DevOps',
        items: [
          {
            text: 'Linux系列',
            items: [{ text: 'Linux入门', link: '/coding/linux/info' }],
          },
          {
            text: 'Docker系列',
            items: [{ text: 'Docker入门', link: '/coding/docker/info' }],
          },
          {
            text: 'Kubernetes系列',
            items: [{ text: 'K8S入门', link: '/coding/kubernetes/info' }],
          },
          {
            text: 'Prometheus系列',
            items: [{ text: 'Prometheus入门', link: '/coding/prometheus/info' }],
          },
        ]
      },
      {
        text: '读书笔记',
        items: [
          {
            text: '技术类',
            items: [{ text: 'Effective Java', link: '/book/tech/effective-java' }],
          },
          {
            text: '管理类',
            items: [{ text: '敏捷开发45日', link: '/book/manager/45-agile' }],
          },
          {
            text: '人文教育',
            items: [{ text: '好问题', link: '/book/arts/questions' }]
          }
        ]
      },
      {
        text: '生活日记',
        items: [
          { text: '生活打卡', link: '/life/clock' },
          { text: '日常总结', link: '/life/summary' }
        ]
      },
      { text: 'AI 教程', link: '/ai-tutorial/intro' },
      { text: '博客', link: '/blog/' }
    ],

    sidebar: {
      '/tutorial/': [
        {
          text: '基础教程',
          items: [
            { text: '第一课：项目介绍', link: '/tutorial/' },
            { text: '第二课：核心概念', link: '/tutorial/core-concepts' },
          ]
        }
      ],
      '/ai-tutorial/': [
        {
          text: 'AI 基础与原理解析',
          items: [
            { text: '什么是人工智能', link: '/ai-tutorial/intro' },
            { text: '生成式 AI 的运作核心', link: '/ai-tutorial/gen-ai-core' },
            { text: 'Prompt 提示词工程指南', link: '/ai-tutorial/prompt-engineering' },
          ]
        },
        {
          text: 'AI 辅助编程',
          items: [
            { text: '主流 AI 编程工具对比', link: '/ai-tutorial/tools-comparison' },
            { text: '基于 AI 的日常开发提效方案', link: '/ai-tutorial/daily-efficiency' },
            { text: '如何写出让 AI 秒懂的代码注释', link: '/ai-tutorial/context-prompting' },
            { text: '实战：产品经理如何用 AI 快搭系统', link: '/ai-tutorial/pm-prototype-builder' }
          ]
        },
        {
          text: 'AI 原生应用开发',
          items: [
            { text: '接入大模型 API', link: '/ai-tutorial/llm-apis' },
            { text: 'RAG 架构精讲', link: '/ai-tutorial/rag-architecture' },
            { text: 'Agent 智能体系统设计与实战', link: '/ai-tutorial/agent-systems' },
            { text: '打造你的第一个智能对话机器人', link: '/ai-tutorial/chatbot-project' },
          ]
        }
      ],
      '/blog/': [
        {
          text: '近期文章',
          items: [
            { text: '2026年3月总结', link: '/blog/' },
            { text: '前沿技术探讨', link: '/blog/tech-talk' },
          ]
        }
      ],
      '/coding/java/': [
        {
          text: 'Java系列',
          collapsed: true,
          items: [
            { text: 'Java基础', link: '/coding/java/base' },
            { text: '面向对象', link: '/coding/java/object' },
            { text: '运算符', link: '/coding/java/operator' },
            { text: '访问权限', link: '/coding/java/access' },
            { text: '控制流程', link: '/coding/java/control' },
            { text: '数据类型', link: '/coding/java/type' },
            { text: '初始化', link: '/coding/java/initial' },
            { text: '集合', link: '/coding/java/collection' },
            { text: '枚举', link: '/coding/java/enum' },
            { text: '泛型', link: '/coding/java/generic' },
            { text: '异常', link: '/coding/java/exception' },
            { text: 'IO', link: '/coding/java/io' },
            { text: '注解', link: '/coding/java/annotation' },
            { text: '并发', link: '/coding/java/concurrency' },
            { text: '反射', link: '/coding/java/reflect' },
            { text: 'JVM', link: '/coding/java/jvm' },
            { text: '设计模式', link: '/coding/java/design-pattern' },
            { text: 'Servlet', link: '/coding/java/servlet' }
          ]
        },
        {
          text: '其他',
          collapsed: true,
          items: [
            { text: '浮点数', link: '/coding/other/float' }
          ]
        }
      ],
      '/coding/linux/': [
        {
          text: 'Linux系列',
          collapsed: false,
          items: [
            { text: 'Linux入门', link: '/coding/linux/info' },
            { text: '常用命令', link: '/coding/linux/command' }
          ]
        }
      ],
      '/coding/docker/': [
        {
          text: 'Docker系列',
          collapsed: false,
          items: [
            { text: 'Docker入门', link: '/coding/docker/info' }
          ]
        }
      ],
      '/coding/kubernetes/': [
        {
          text: 'Kubernetes系列',
          collapsed: false,
          items: [
            { text: 'K8s入门', link: '/coding/kubernetes/info' }
          ]
        }
      ],
      '/coding/prometheus/': [
        {
          text: 'Prometheus系列',
          collapsed: false,
          items: [
            { text: 'Prometheus入门', link: '/coding/prometheus/info' }
          ]
        }
      ],
      '/book/': [
        {
          text: '技术类书籍',
          collapsed: false,
          items: [
            { text: 'Effective Java', link: '/book/tech/effective-java' }
          ]
        },
        {
          text: '管理类书籍',
          collapsed: false,
          items: [
            { text: '敏捷开发45日', link: '/book/manager/45-agile' }
          ]
        },
        {
          text: '人文教育',
          collapsed: false,
          items: [
            { text: '好问题', link: '/book/arts/questions' }
          ]
        }
      ],
      '/life/': [
        {
          text: '生活日记',
          items: [
            { text: '生活打卡', link: '/life/clock' },
            { text: '日常总结', link: '/life/summary' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
