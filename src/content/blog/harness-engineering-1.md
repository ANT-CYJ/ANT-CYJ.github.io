---
title: 'Harness = Agent − Model:给 AI 配缰绳的工程学(上篇·概念)'
description: 'AI 写代码能力很强,但不稳。Harness Engineering 给出了"为什么需要、是什么、怎么来的"三层解释。'
pubDate: 2026-08-22
tags: ['AI', '工程', '最佳实践', '概念']
---

最近 Harness Engineering 这个词在 AI 圈被反复讨论,各种视频和文章都在讲。但大多数内容要么是"宣传 Harness 多么重要",要么是"具体某厂的实践细节",很少有人把"**为什么需要、是什么、怎么来的**"讲清楚。

这篇(以及下一篇)是我看完 5 个 B 站视频、跨多源消化后的全景。**分两篇**:

- **上篇(本文)**:Harness 是什么、为什么需要、怎么从 Prompt Engineering 演进过来
- **下篇**:Harness 怎么搭 — 大厂实战 + 个人最小方案 + Oxidize(让 AI 自己磨快自己)

## 一句话定论

> **Harness = 铺轨道 + 围栅栏 = Agent − Model**
>
> 不是噱头,也不是终局 — 是当下最现实的过渡期关键技术。

厨房比喻:

> 没有 Harness,AI 就像个热情但毛手毛脚的大厨 — 做菜快,但油溅得到处都是,碗摔了好几个。你不敢离开厨房,因为一走他就可能把厨房点了。
>
> 有 Harness,厨房装了防溅板、防火系统、自动关火 — 你终于可以离开去干别的,偶尔回来看一眼就行。

## 速记表

| 概念 | 一句话 | 大白话 | 典型手段 |
|------|--------|--------|----------|
| **Prompt Engineering** | 怎么问问题 | 把发给模型的话说清楚 | "帮我给橘色小猫起名,**两个字**" |
| **Context Engineering** | 怎么给信息 | 合适时机把合适内容放进 context | 上下文压缩 / 动态检索 / 渐进式披露 |
| **Harness Engineering** | **怎么搭系统** | **围绕模型搭一套可靠的 agent** | **权限管控 / 工具管理 / Linter 闭环 / 独立评估** |

三者**层层递进、研究范围不断向外扩展**:Prompt 只盯一句话,Context 覆盖对话历史/工具列表/skill 列表,**Harness 直接覆盖"除了大模型之外的所有内容"**。

## 为什么需要 Harness

AI 现在写代码能力很强,但**如果你不搭 Harness,会遇到 5 个问题**:

| 问题 | 表现 |
|------|------|
| **反复犯低级错误** | 想用 Perl 写脚本 → 没权限 → 换 Python → 路径又错了 → 折腾半天 |
| **并行能力浪费** | 同时只能干一个活,因为干别的你盯不过来 |
| **代码质量失控** | AI 写的代码有各种小 bug,团队大量时间在修线上问题 |
| **人很累** | AI 很强,但你要一直盯着,比自己做还累 |
| **用不满工具** | 200 美金的 AI 工具,因为基建不够,只能用出 100 美金的效果 |

**核心问题**:**AI 是脱缰的野马,能力极强,但任其发挥会发散思维、产生幻觉,无法稳定交付。必须像用马具控制马一样控制它,这套系统就叫 Harness。**

## 公式拆解:Agent = Model + Harness

**harness** 本意是"马具"(缰绳/头套)— 用来控制和驾驭马的工具。

```
一个完整的 Agent = 大模型(Model) + 控制驾驭大模型的系统(Harness)
                  ⟺  Harness = Agent − Model
```

- **该公式 2026-03-10 由 LangChain《The Anatomy of an Agent Harness》首次给出**,目前是业界较认可的说法,**尚无严格学术定义**。
- **Claude Code 例子**:CLAUDE.md 规则、可用工具、定时调度机制 — **凡不属于 Claude 模型的部分都是 Harness**。
- **OpenCode / Cursor / Hermes 例子**:skill 列表、token 预算控制、危险操作确认 — 同样属于 Harness。

**这意味着**:你用任何 AI 编程工具时,**感受到的"这个工具稳不稳",90% 取决于 Harness,不是底层模型。**

## 概念演进:Prompt → Context → Harness

Harness 不是凭空冒出来的,它是 AI 工程化思路的第三层。三者关系可以用一个**客户拜访的比喻**说清楚:

| 阶段 | 核心问题 | 客户拜访比喻 |
|------|----------|---------------|
| **Prompt Engineering** | 模型有没有听懂? | 把任务讲清楚(先寒暄、再介绍方案、再挖需求、最后确认下一步) |
| **Context Engineering** | 信息给够没有?给对没有? | 资料准备齐全(客户背景、过往沟通、产品报价、竞品情况、会议目标) |
| **Harness Engineering** | 模型能不能持续做对? | 持续监督纠偏(带 checklist、关键节点汇报、会后核实纪要录音、按标准验收) |

**关键洞察**(花园老师):"Context = 影响模型当前决策的**所有信息的总和**"(用户输入/历史/检索结果/工具返回/任务状态/中间产物/系统规则/安全约束/其他 agent 结果)。

> 包含关系而非替代关系:Prompt 是对指令的工程化,Context 是对输入环境的工程化,**Harness 是对整个运行系统的工程化**。边界一层比一层大。

**反方观点**:也有人认为自然语言是唯一输入参数,围绕自然语言做文章都可归为提示词工程 — 提示词工程才是 Context 与 Harness 工程的母集。

**我的看法**:**反方有道理,但术语的价值在分工。** 就像"前端"和"后端"本质都是软件,但分两个工种能提高协作效率。三个术语让团队知道"谁负责哪块",值得分开。

## 4 个踩坑

**❌ 把 Harness 当万能解药**:Harness 不能让烂模型变好,只是让好模型稳定发挥。模型决定上限,Harness 决定能不能落地。

**❌ 上来就搞 30 道 quality gate**:公司级 Harness 30+ 道门禁是经验堆出来的,不是设计出来的。个人/小团队先做"铺轨道"再考虑"围栅栏"。

**❌ 用 Harness 解决 Prompt 该解决的问题**:"给 AI 配工具"和"给 AI 写清楚指令"是两件事。把"该用哪个工具"硬塞进 prompt,Harness 反而空转。

**❌ Harness 一次搭好就完事**:Harness 要持续迭代。模型在变、需求在变、工具在变 — 去年有效的设计今年可能拖后腿。Oxidize Harness(让 AI 自己发现摩擦并优化)是必做的运营动作。

## 3 条核心原则

1. **治理是代码,不是 Prompt** — 检查重复代码用开源工具 + CI action 自动扫,不耗 token;让 AI 记住"别写重复代码"既费 token 又不可靠。
2. **AI 审核 + 人验收 / 独立评估** — AI 全自动过第一道,人最后看一眼确认;复杂产出让独立的 Evaluator 评估,避免"王婆卖瓜"。
3. **持续迭代 Harness 本身** — Harness 不是一次性搭好的,要不断发现摩擦、消除摩擦(下篇详述)。

## 一句话总结

> **Harness 是 AI 落地的"厨房改造工程",不是 AI 能力的"提升"。模型是厨师,Harness 是装好的厨房防溅板、防火系统、自动关火 — 你终于可以离开厨房。**

下篇讲"**怎么搭**" — OpenAI 5 个月 100 万行的实践、Anthropic 三 agent 架构、花园老师的 6 层模型、以及个人最小 Harness 怎么起步。

---

## 参考

- 马克的技术工作坊《Harness Engineering 到底是什么?概念、实战与争议》[BV12LR1B3EUt](https://www.bilibili.com/video/BV12LR1B3EUt/)
- 徐文浩《纯 Vibe Coding 做大项目一定会塌掉》[BV1DiTm6BESR](https://www.bilibili.com/video/BV1DiTm6BESR/)
- 轩辕的编程宇宙《Agent 和 Harness 到底是什么》[BV1t55v6DE2v](https://www.bilibili.com/video/BV1t55v6DE2v/)
- code 秘密花园《最近爆火的 Harness Engineering 到底是啥》[BV1Zk9FBwELs](https://www.bilibili.com/video/BV1Zk9FBwELs/)
- LangChain《The Anatomy of an Agent Harness》(2026-03-10)
