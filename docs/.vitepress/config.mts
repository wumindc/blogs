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
          text: '导读与路线图',
          collapsed: false,
          items: [
            { text: 'AI 专栏导读', link: '/ai-tutorial/intro' }
          ]
        },
        {
          text: '基础原理',
          collapsed: false,
          items: [
            { text: '从人工智能到生成式 AI', link: '/ai-tutorial/ai-evolution' },
            { text: '什么是算力与硬件？', link: '/ai-tutorial/hardware-and-compute' },
            { text: '什么是 AI 基础设施与基座？', link: '/ai-tutorial/infrastructure' },
            { text: '解密“模型”与“参数”', link: '/ai-tutorial/what-is-model' },
            { text: '什么是 Token 与上下文窗口？', link: '/ai-tutorial/what-is-token' },
            { text: 'Transformer 与文字接龙机制', link: '/ai-tutorial/llm-mechanisms' },
          ]
        },
        {
          text: 'Prompt 与可靠性',
          collapsed: false,
          items: [
            { text: 'Prompt 核心框架 (RCTF)', link: '/ai-tutorial/prompt-basics' },
            { text: '进阶 Prompt 策略 (CoT/Few-Shot)', link: '/ai-tutorial/advanced-prompting' },
            { text: 'AI 幻觉的成因解析与缓解', link: '/ai-tutorial/hallucination' }
          ]
        },
        {
          text: 'AI 编程实践',
          collapsed: false,
          items: [
            { text: '主流 AI 编程工具选型指南', link: '/ai-tutorial/tools-comparison' },
            { text: '日常开发提效方案实战', link: '/ai-tutorial/daily-efficiency' },
            { text: '写出让 AI 秒懂的代码上下文', link: '/ai-tutorial/context-prompting' },
            { text: '实战：产品经理快搭系统', link: '/ai-tutorial/pm-prototype-builder' }
          ]
        },
        {
          text: 'RAG',
          collapsed: false,
          items: [
            { text: '初探 RAG 架构', link: '/ai-tutorial/rag-intro' },
            { text: '向量数据库科普与选型', link: '/ai-tutorial/vector-database' },
            { text: '深入剖析 RAG (文档切块与重排序)', link: '/ai-tutorial/rag-deep-dive' }
          ]
        },
        {
          text: 'Agent 与应用',
          collapsed: false,
          items: [
            { text: '拥抱 AI Native：接入 API 指南', link: '/ai-tutorial/llm-apis' },
            { text: '大语言模型智能体 (Agent) 架构初解', link: '/ai-tutorial/agent-intro' },
            { text: '智能体开发实战 (Function Calling)', link: '/ai-tutorial/agent-development' },
            { text: '实战：从零构建全栈智能对话机器', link: '/ai-tutorial/chatbot-project' }
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
