---
title: 'Kiro AI IDE:AWS 出的"规范驱动开发"工具,跟 DeepSeek Harness 形成国际/国内对位'
description: '2025 年 AWS 推出的 Agentic AI IDE,核心理念是 Spec-Driven Development(规范驱动)。本文讲清楚它是什么、跟 DeepSeek Harness 的差异、Spec 模式实战怎么用、为什么 2026 年 AI 编程赛道开始分叉。'
pubDate: 2026-08-26
tags: ['工具评测', 'AI', 'Kiro', 'AWS', 'AI 编程', 'Harness']
---

> 这篇博客的素材来自我自己 LLM Wiki 知识库里的 Kiro 实体笔记(7/15 起草,7/17 完善,8/9 强化),综合了 AWS 官方资料 + 4 篇用户问答 + 1 个 B 站实战视频(飞天闪客搭 Spring Boot 项目)。原文 10.7KB。我把它重写成一篇"AI 编程工具对位"视角的全景文章,跟已发的 DeepSeek Harness 形成国际/国内对位。

---

## 0. 一句话定论

**Kiro 是 AWS 2025 年出的 Agentic AI IDE,核心理念是"规范驱动开发"(Spec-Driven Development) — 写代码前先把自然语言需求拆成 requirements.md → design.md → tasks.md 三份文档,再让 AI Agent 逐步执行。**

**跟 DeepSeek Harness 的关键差异**:Kiro 是"先规范后执行"路径,DeepSeek 是"插件化系统级治理"路径。**两个工具代表了 2026 年 AI 编程的两个分叉方向。**

---

## 1. Kiro 是什么 — 3 个关键事实

### 事实 1:AWS 出品,基于 Bedrock

- **提出者**:AWS(亚马逊云科技)
- **底层**:Amazon Bedrock 调用 Claude / Qwen / DeepSeek 等大模型
- **形态**:桌面 IDE(基于 Code OSS,兼容 VS Code 设置和插件)+ CLI + Web
- **网址**:[kiro.dev](https://kiro.dev/)

**关键认知:Kiro 不是 AWS 自己训的模型,是 AWS 调 Anthropic Claude 的壳。** 你付的费用一部分给 AWS,一部分给 Anthropic。

### 事实 2:核心理念是"规范驱动"

跟传统 Vibe Coding(说一句话就写代码)的关键区别:

| 维度 | Vibe Coding(纯 Prompt) | Kiro Spec 模式 |
|------|----------------------|---------------|
| **输入** | 一句话需求 | 自然语言需求 → 自动拆成 3 份文档 |
| **过程** | AI 直接写代码 | AI 先写规范 → 拆任务 → 逐个执行 |
| **验收** | 人眼看代码 | 任务清单 + 测试用例 + 自动跑测试 |
| **适合** | 几十行小脚本 | 中大型功能、跨模块协作 |

**类比给你:** Spec 模式像"先签合同再施工" — requirements.md 是合同,design.md 是图纸,tasks.md 是施工清单。Vibe Coding 像"边想边盖" — 快但容易返工。

### 事实 3:不是单点工具,是工作流

Kiro 不是一个"AI 写代码"的工具,是一套**完整的"需求 → 设计 → 任务 → 执行"工作流**。它的核心价值不在"AI 写得有多好",在"流程控制得有多稳"。

---

## 2. Kiro 的 5 个关键特性

| 特性 | 作用 | 跟已有工具的差异 |
|------|------|----------------|
| **Spec 模式** | 自动拆 requirements/design/tasks 三份文档 | Cursor/Windsurf 没有这个 |
| **Agent Hooks** | 保存文件时自动跑测试 / 更新文档 / 安全扫描 | 类似 CI 但更细粒度 |
| **Steering Files** | 项目级 Markdown 配置,定义代码规范/架构偏好 | 类似 `.cursorrules` 但更结构化 |
| **MCP 集成** | 连接数据库/API/GitHub 等外部工具 | 跟 Claude Code 类似的协议 |
| **上下文持久化** | 通过 Steering Files 避免每次对话重复解释规范 | 比 Cursor `@` 引用更省事 |

**最实用的是 Steering Files**:你写一份项目规范 Markdown,Kiro 每次执行都自动遵守 — 不用每次对话重复 "我们项目用 X 风格"。

这跟 [Harness Engineering](/blog/harness-engineering-1) 里讲的"铺轨道 + 围栅栏"理念相通 — **Kiro 的 Spec 模式就是 Harness 思维在 IDE 层的具体实现**。

---

## 3. 关键对位:Kiro vs DeepSeek Harness

这是这篇博客最重要的视角。**两个工具代表了 2026 年 AI 编程的两个分叉:**

| 维度 | Kiro(AWS · 国际) | DeepSeek Harness(国产) |
|------|-----------------|---------------------|
| **提出方** | AWS | DeepSeek |
| **底层模型** | Bedrock → Claude/Qwen/DeepSeek | DeepSeek 自家 |
| **核心范式** | Spec-Driven(规范先行) | Plugin-Driven(插件化系统级) |
| **执行路径** | 文档 → 任务 → Agent 执行 | 用户 → Harness → 插件系统 → 模型 |
| **规范化方式** | requirements/design/tasks 三文档 | CODIS 插件配置 + Harness 规则 |
| **地区可用性** | 中国大陆受限(Claude 被屏蔽) | 国内全功能可用 |
| **定价** | $20-$200/月 + Credits | 暂未公布(产品刚发布) |
| **代表用户** | 国际化团队 / 中大型项目 | 国内开发 / 国产化替代 |

**核心差异:Kiro 走"显式规范"路线(把规范写成 Markdown),DeepSeek Harness 走"隐式系统"路线(用插件系统隐式管理)。** 两种思路各有优劣:

- **Kiro 优势**:规范可见可改,团队协作对齐
- **DeepSeek 优势**:不用写文档,系统自动处理,新手友好

**给 Neo 的判断:2026 年 AI 编程赛道会分叉成两个方向 — 显式规范(Kiro / .cursorrules)和隐式系统(Harness / Plugin)。** 两者不冲突,会共存。

完整 DeepSeek Harness 拆解见 [DeepSeek Harness 全景](/blog/deepseek-harness-overview)。

---

## 4. Spec 模式实战工作流(3 步走)

Kiro 最核心的使用方法,3 步走完一个完整功能:

### 步骤 1:创建 `requirements.md`(需求文档)

AI 把你的自然语言需求拆成结构化文档,包括:
- 用户故事
- 验收标准(可勾选)
- 边界条件
- 非功能需求

**这一步实际上把"产品经理 + 测试工程师"的活干了。**

### 步骤 2:创建 `design.md`(设计文档)

基于 requirements,AI 输出:
- 技术选型(语言/框架/数据库)
- 架构图 + 实体类
- 数据表结构
- API 端点

**这一步把"架构师 + 程序员"的活干了。**

### 步骤 3:创建 `tasks.md`(任务清单)

基于 design,AI 拆成可执行的 task 列表,按依赖关系分**必须**和**可选**。每个 task:
- 可以**直接点击执行**
- 失败时 AI 自我修复直到通过
- 默认以"测试用例全部通过"为终点

**这一步把"开发者 + QA"的活干了。**

### 工作流图

```
自然语言需求
    ↓
[AI 自动拆解]
    ↓
requirements.md (需求文档)
    ↓
design.md (设计文档)
    ↓
tasks.md (任务清单)
    ↓
[点击 task 触发 AI 执行]
    ↓
代码生成 → 测试运行 → 失败自动修复
    ↓
所有 task 通过 = 功能完成
```

---

## 5. 定价 + Credits + 地区限制

### 定价(6 档)

| 方案 | 月费 | Credits | 模型权限 |
|------|------|---------|---------|
| Free | $0 | 50 | Qwen, DeepSeek, Claude Sonnet |
| Pro | $20 | 1,000 | 含 Opus |
| Pro+ | $40 | 2,000 | — |
| Pro Max | $100 | 5,000 | — |
| Power | $200 | 10,000 | 重度个人 |
| Enterprise | 定制 | 定制 | SSO + 组织计费 |

超出部分按 **$0.04/credit** 计费。

### Credits 消耗规则

- **最小计量**:0.01 credits
- **模型倍率**:
  - Qwen3 Coder Next:**0.05×-0.25×**(最便宜)
  - Claude Haiku:0.4×
  - Claude Sonnet:1.3×
  - Claude Opus:~2.2×(最贵)

### 地区限制(中国大陆用户必看)

**Anthropic(Claude 研发方)的服务条款对支持的国家/地区有严格清单,中国大陆及港澳台地区不在 Claude 正式服务区域内。**

后果:
- Kiro 检测到登录 IP 在受限地区 → **自动隐藏 Claude 系列模型**,只显示 DeepSeek/Qwen 等
- 即使升级到 Kiro Pro 付费版,Claude 模型依然不会显示
- **没有开关可以强制开启 Claude** — 这是服务端合规拦截,不是本地功能

**国内用户建议**:
- 直接用内置的 Qwen / DeepSeek(代码生成能力已足够前端/中后端开发,Credits 消耗只有 Claude 的 5-25%)
- 想要稳定用 Claude → 需在合规支持地区通过当地网络登录,或直接用 Anthropic 官方 API

---

## 6. 适用 vs 不适用场景

### ✅ 适合

- 复杂系统 / 中大型功能开发(多模块跨层)
- 从原型到生产的工程化落地(MVP → 可交付)
- 遗留代码重构与长期维护
- 高合规与强规范场景(金融 / 医疗 / 企业级后台)
- AWS / 云原生技术栈团队
- 重视协作对齐的中小团队
- 教育与学习导向的开发者

### ❌ 不适合

- 几十行临时脚本 / 一次性爬虫(用 Cursor / Windsurf 更快)
- 完全拒绝审查 Spec 与 Diff 的团队
- 必须完全离线、纯本地模型的场景
- **完全不懂编程的纯新手**(下面解释)

### 新手踩坑:3 遍运行的经验教训

一个 B 站 UP 主(经济学转行程序员)用同一需求跑了 3 遍,结果差异显著:

| 尝试 | 提示词 | 本地环境 | 结果 |
|------|--------|---------|------|
| 第 1 遍 | 无技术栈指定 | 无准备 | 生成 Node.js,本地无环境跑不起来 |
| 第 2 遍 | 明确 Spring Boot + HTML | Java 未配好 | Kiro 强行解决报错完成,过程坎坷 |
| 第 3 遍 | 指定 Spring Boot + 具体版本 | **Java 17 + Maven 已配** | **最顺畅,一次跑通** |

**关键洞察**:
- 不懂编程 → Kiro 生成的大项目里到处报错,反而是灾难
- **懂一点编程** → 提前约定规范、配置环境,跟 AI 配合最佳
- 核心原则:**成为会使用工具的人,不是依赖工具的人**

这跟 [AI 协作必知 4 件事](/blog/ai-collaboration-4-things) 里讲的"AI 是超级实习生"完全一致 — **你不能完全不懂,得懂到能审查它的工作**。

---

## 7. 跟 AI 编程三阶的关系

Kiro 的设计哲学跟 AI 编程三阶的对应:

| 层级 | 关注点 | Kiro 的对应 |
|------|--------|------------|
| **Prompt Engineering** | 怎么问问题 | requirements.md 模板 |
| **Context Engineering** | 怎么给信息 | design.md + Steering Files |
| **Harness Engineering** | 怎么搭系统 | **Spec 模式 + Agent Hooks** |

**Kiro 是当前最接近"AI 编程三阶完整落地"的 IDE 之一** — 大部分 AI IDE 只解决了其中 1-2 阶,Kiro 三阶全包。

完整 Context 三阶拆解见 [Context Engineering](/blog/context-engineering)。

---

## 8. 收尾:3 条建议

### 给"想试试 Kiro"的人

1. **别从 0 起步,从"重构一段老代码"开始** — Kiro 的 Spec 模式在小改动上效果最明显,大项目反而显得啰嗦
2. **先写 Steering Files,再让 Kiro 干活** — 提前把项目规范写成 Markdown,比每次对话重复强 10 倍
3. **国内用户用 Qwen/DeepSeek 就够了** — Claude 在国内不可用,内置的国产模型已够 80% 场景

### 给"已经在用 AI IDE 的人"

Kiro 不是 Cursor 的替代,是**工作流升级**。如果你已经习惯:
- "说完需求 AI 直接写代码" → Cursor / Windsurf 更轻
- "需要严格规范和团队对齐" → Kiro 更合适
- "系统级治理 + 插件化" → DeepSeek Harness

**2026 年 AI 编程不再是"哪个 IDE 最好",是"你的团队需要哪种工作流"。**

---

## 相关阅读

- [DeepSeek Harness 全景](/blog/deepseek-harness-overview) — 跟 Kiro 形成国际/国内对位
- [Harness Engineering(上)](/blog/harness-engineering-1) — Kiro Spec 模式背后的工程治理
- [Context Engineering](/blog/context-engineering) — Kiro Steering Files 的理论基础
- [Vibe Coding 学习路线图](/blog/vibe-coding-learning-roadmap) — Kiro 拒绝纯 Vibe Coding 的对比
- [AI 协作必知 4 件事](/blog/ai-collaboration-4-things) — AI 时代的认知基础

---

> 📌 **本文基于 LLM Wiki 知识库里的 Kiro AI IDE 笔记重写**,原文 10.7KB,7/15 起草,7/17 完善,8/9 强化。后续 Kiro 新功能/新模型会同步回 vault。
