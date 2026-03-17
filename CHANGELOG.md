# CHANGELOG

## [2026-03-17]
- **Time/时间**: 2026-03-17 14:26:00
- **Requirement/变更需求**: 根据用户要求，抛弃“打补丁”式的编写思路，系统化、体系化地重构并扩容《AI 教程》大系，并且将整体文档技术深度下沉至 **“资深架构师 (V3)”** 水平。覆盖从最基础的 Token 大脑机制、高维向量算力设施，至最深层的 HNSW 架构与 Multi-Agent 智能体流转网络。
- **Details/变更内容**: 
  - 修改了 `docs/.vitepress/config.mts` 中的侧边栏 `sidebar['/ai-tutorial/']`，全新上线 6 大进阶极客模块核心骨架。
  - 全新生成并硬核实战化撰写了 14 篇极具深度的架构级全景 AI 文档：
    - **模块1 (AI 基础设施与算力底座)**: `hardware-and-compute` (详述显存墙与KV-Cache), `infrastructure` (解析PagedAttention)。
    - **模块2 (大语言模型核心理论)**: `ai-evolution`, `what-is-model` (量化与FP16), `what-is-token` (引出BPE算法), `llm-mechanisms` (拆解Self-Attention公式)。
    - **模块3 (提示词工程与交互策略)**: `prompt-basics`, `advanced-prompting` (从CoT到AST语法树控制), `hallucination` (Logits与Top-P数学解析)。
    - **模块4 (研发提效与辅助编程)**: `tools-comparison` (Cursor向量级与Copilot基座对比), `daily-efficiency` (Mockito单测提效), `context-prompting` (代码库RAG索引)。
    - **模块5 (RAG 检索增强架构)**: `rag-intro` (微调与RAG的ROI博弈), `vector-database` (HNSW分层图表算法深研), `rag-deep-dive` (混合重排RRF与Cross-Encoder机制)。
    - **模块6 (高阶智能体与原生应用)**: `llm-apis` (SSE打字机底层机制), `agent-intro` (ReAct架构解析), `agent-development` (拆解Function Calling的JSON Schema), `chatbot-project` (高并发企业微服务代理编排实战)。

## [Unreleased]
### Added
- 规划了完整的《AI 教程系列》，涵盖 AI 基础、辅助编程与原生应用开发。
- 配置了全新的 `/ai-tutorial/` 导航收纳及配套的三段式侧边栏。
- 批量生成了 10 篇初始的“待书写”骨架 Markdown 文档集。
- 初始化 VitePress 项目底座 `vitepress-blog-tutorial`。
- 配置了 VitePress 的导航栏（首页、教程、博客）和独立侧边栏。
- 创建了站点首页以及部分教程和博客示例 `Markdown` 文件。
- 添加了架构设计文档 `20260317-001-VitePress站点设计.md`。

## [2026-03-17]
- **Time/时间**: 2026-03-17 11:58:00
- **Requirement/变更需求**: 将博客名称更改为 "NiHoo" 并优化首页结构内容。
- **Details/变更内容**: 
  - 修改了 `docs/.vitepress/config.mts` 中的项目名称 `title` 为 "NiHoo"。
  - 重新设计并重写了 `docs/index.md` 主页内容，更新了名称并在 features 中展示了 Java开发、前端架构、AI 辅助编程等核心内容。

## [2026-03-17]
- **Time/时间**: 2026-03-17 12:05:00
- **Requirement/变更需求**: 完成《AI 教程》专栏全量内容的客观化、实战化编写。
- **Details/变更内容**: 
  - 编写了 **AI 基础与原理解析** 模块（包含 AI 发展史、大模型文本接龙工作原理、RCTF 高阶提示词工程框架）。
  - 编写了 **AI 辅助编程** 模块（包含 Cursor/Copilot 工具对比、Context 投喂技巧、日常代码重构及单测实战）。
  - 编写了 **AI 原生应用开发** 模块（包含 LLM API 接入、RAG 向量数据库机制、Agent/ReAct 架构及 Chatbot 全栈落地指南）。
