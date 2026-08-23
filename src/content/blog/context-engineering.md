---
title: 'Context Engineering 是什么:跟 Prompt / Harness 三层关系一次说清'
description: 'AI 工程三阶(Prompt → Context → Harness)的中间一环 — 8 个组成部分、6 个核心方法(压缩/重置/RAG/渐进式披露/信息裁剪/结构化组织),跟 Token 和 Harness 的关系。'
pubDate: 2026-08-24
tags: ['AI', '工程', 'Context', '概念', '基础']
---

之前发的 [Harness = Agent − Model(上篇·概念)](/blog/harness-engineering-1/) 讲了 AI 工程三阶的最外层"怎么搭系统",但**中间那层"怎么给信息"被一笔带过**。这篇补齐它。

如果你对 Prompt / Context / Harness 三层关系还模糊,这篇就当作"中间那一层"的入门。

## 一句话定论

> **Context Engineering = 精心设计放进模型上下文窗口里的内容,让模型在正确时机看到正确信息。** 是 AI 工程三阶段(Prompt → Context → Harness)的中间一环。

仓库比喻:

> Prompt 决定**怎么问**客户("你有什么需求?")
> Context 决定**带什么资料**去拜访(合同模板 + 客户背景 + 竞品分析)
> Harness 决定**怎么管理整个拜访流程**(进门寒暄 → 介绍方案 → 客户提问 → 异议处理 → 确认下一步 → 出门发跟进邮件)

**三者层层递进,研究范围不断向外扩展**:Prompt 只盯一句话,Context 覆盖"模型当下能看到的所有信息",Harness 覆盖"除模型外的一切"。

## 速记表:三层对比

| 层级 | 研究对象 | 大白话 | 典型手段 |
|------|----------|--------|----------|
| **Prompt Engineering** | 怎么问问题 | 把发给模型的话说清楚 | "帮我给橘色小猫起名,两个字" |
| **Context Engineering** | 怎么给信息 | 合适时机把合适内容放进 context | 上下文压缩 / 动态检索 / 渐进式披露 / 信息裁剪 |
| **Harness Engineering** | 怎么搭系统 | 围绕模型搭一套可靠的 agent | 权限管控 / 工具管理 / Linter 闭环 / 独立评估 |

花园老师的**更底层解释**:

- **Prompt**:不是命令模型,而是**塑造一个局部的概率空间** — 你给什么身份,模型就沿那个身份去回答
- **Context**:**给信息,且按需给** — 不是把所有资料塞进去,而是"模型在当前决策点需要的才给"
- **Harness**:**驾驭过程** — 监督、约束、纠偏,让模型在执行任务时不跑偏

> **包含关系而非替代关系**:Prompt ⊂ Context ⊂ Harness。**Context Engineering 是 Harness 的第 1 层职责**(花园老师六层架构的"Context 治理"层)。

## Context 到底是什么 — 8 个组成部分

花园老师给了一个非常清晰的总和定义:

> "Context = 影响模型当前决策的**所有信息的总和**"

具体由 8 个部分组成:

| # | 部分 | 例子 |
|---|------|------|
| 1 | **用户输入** | 当前这条消息 |
| 2 | **历史对话** | 前 N 轮的 Q&A |
| 3 | **检索结果** | RAG 检索回来的相关资料 |
| 4 | **工具返回** | 上一轮工具调用的结果 |
| 5 | **任务状态** | 当前任务执行到哪步 |
| 6 | **中间产物** | agent 暂存的文件、变量 |
| 7 | **系统规则** | AGENTS.md / SOUL.md / 行为约束 |
| 8 | **安全约束** | 不能调某些 API / 不能访问某些文件 |

**一个常见误解**:很多人以为 "Context = 对话历史"。**不对**。**对话历史只是 Context 的 1/8**。

## 为什么 Context Engineering 重要

之前那篇 [AI 协作必知 4 件事](/blog/ai-collaboration-4-things/) 提过一个关键性质:

> **Working Memory(工作记忆)有断崖式上限** — 模型在上下文窗口内表现完美,**超出后直接"看不见",不是"模糊一点"**

这意味着 Context Engineering 是个**硬约束**:
- 你给 100K token 的资料,模型只"看见"前 32K(以 Claude Sonnet 4.5 为例)
- 你给 200K token 的文档,模型对中间和后面细节会失忆
- 长对话里早期指令会"丢"

> 因此:**Context Engineering 不是"锦上添花",而是"决定 AI 能不能看见你要它看见的"**。

## 6 个核心方法

### 1. 上下文压缩(Compaction)

对话历史超过阈值时,**总结成摘要替代冗长内容**。

- 经典做法:每 10 轮或 token 达到 50% 时自动触发
- 代价:**信息丢失** — 摘要无法保留所有细节
- 适用:长对话、定期总结

### 2. 上下文重置(Context Reset)⭐ 最激进

**比压缩更激进的方案**:压缩只是变短了,"负担感"没消失。直接**换一个全新的 agent**,把工作交接过去 — 类比"**内存泄漏 → 重启进程 → 恢复状态**"。

这是典型的 **harness 级设计**,不只是优化,而是改架构。**DeepSeek Harness 的"换脑能力**就用了这个思想(见[DeepSeek Harness 博客](/blog/deepseek-harness-overview/))。

### 3. 动态检索(RAG)

按需检索外部资料补进上下文,而不是一次性塞所有资料。

- 经典做法:用户问"X 是什么" → 先在文档库搜 X 相关 → 把 Top-5 结果塞进 context → 让模型基于这些资料回答
- 优势:**Context 只装相关信息**,不会塞满无关内容
- 适用:知识库问答、文档型 agent

### 4. 渐进式披露

不一次性给全部信息,按需分层加载。

- 经典做法:AGENTS.md 压缩到 ~100 行当"目录",详细文档分门别类放仓库、用到哪块看哪块(OpenAI 的失败教训)
- 关键观察:**Skills 系统**本质也是渐进式披露 — 用时按需加载 skill
- 优势:**Context 窗口**留给"当前最相关"的内容

### 5. 信息裁剪

上下文**不是越多越好,而是越相关越好**。塞太满 = 注意力涣散。

- 经典教训:超大 AGENTS.md(50+ KB)→ 模型更糊涂,**裁剪到 100 行反而更稳**
- 原则:**宁少勿杂,宁缺勿乱**
- 工具:用检索(只给相关)+ 用结构化(用结构标签隔离)替代"全塞"

### 6. 结构化组织

固定规则/当前任务/运行状态/外部证据**分层清楚**,防止"信息乱掉"。

```
# Context 标准结构(参考花园老师六层架构)
## 1. 角色目标(系统规则)
- 你是 X,负责 Y
- 遵守 Z 原则

## 2. 当前任务
- 任务名 / 目标 / 截止时间
- 进度:已完成 3/5

## 3. 历史摘要
- 上一轮做了 X
- 关键决策:用 Y 而不是 Z

## 4. 外部证据(RAG 结果)
- 文档 1:摘要
- 文档 2:摘要

## 5. 当前可用工具
- tool_a:用途
- tool_b:用途
```

**结构化让模型"快速定位"** — 不用从头读所有 context,只看需要的部分。

## 跟 Token / Harness 的关系

### Context Window 是物理约束

| 模型 | 上下文窗口 |
|------|------------|
| GPT-3.5 | 4K |
| GPT-4 | 8K → 32K |
| Claude 3.5 Sonnet | 200K |
| Gemini 1.5 Pro | **2M**(200 万) |

> **Context Engineering 是在这个物理约束内做"信息管理"的艺术**。

### Context 是 Harness 的第 1 层职责

花园老师给 Harness 提了 **6 层架构**,**"Context 治理"是第 1 层**:

| 层 | 核心问题 |
|----|----------|
| 1️⃣ **Context 治理** | 模型看到了什么? |
| 2️⃣ 工具系统 | 模型能做什么? |
| 3️⃣ 执行编排 | 下一步该做什么? |
| 4️⃣ 记忆和状态 | 模型知道做到哪了? |
| 5️⃣ 评估和观测 | 知道自己做得好不好? |
| 6️⃣ 约束校验失败恢复 | 失败了怎么办? |

**Context 治理**就是 Context Engineering 的系统化产物。

> 完整 6 层见 [Harness = Agent − Model(上篇·概念)](/blog/harness-engineering-1/)

### Prompt ⊂ Context ⊂ Harness(包含关系)

```
Prompt(一句话)
  ⊂ Context(对话 + 工具 + 状态 + 检索 + 规则 + ...)
    ⊂ Harness(整个运行系统)
```

**这个包含关系是 AI 工程的核心心法**:
- 想优化 Context → 先确保 Prompt 写好(否则 Context 再好也跑偏)
- 想优化 Harness → 先确保 Context 治理好(否则上层再稳也救不回来)

## 5 个常见坑

| 症状 | 原因 | 解决 |
|------|------|------|
| 模型"失忆"早期指令 | 对话太长 / Context 满了 | 压缩 + 关键信息放开头结尾 |
| 模型忽略 AGENTS.md | AGENTS.md 太大 / 太杂 | 裁剪到 ~100 行当目录 + 详细文档按需 |
| RAG 检索结果不准 | 文档没分块 / embedding 质量差 | 改进分块策略 + 测试 top-k |
| 模型胡说八道 | Context 没装"系统规则" | 角色/约束放 Context 头部 |
| 长任务中途跑偏 | Context 累计太多垃圾 | Context Reset — 换新 agent 交接 |

## 4 条核心原则

1. **Context 8 件事都要管** — 别只盯着对话历史,**任务状态/工具返回/中间产物/系统规则** 都要装
2. **宁少勿杂** — 100 行 AGENTS.md 比 50KB AGENTS.md 更稳,**信息密度比信息量重要**
3. **结构化优先** — 用 5 段式(角色/任务/历史/证据/工具)固定结构,模型能快速定位
4. **Context Reset 备好** — 任务长 / 复杂时,准备好"换 agent 交接"的机制,不靠压缩硬撑

## 一句话总结

> **Prompt 决定"问什么",Context 决定"给什么",Harness 决定"怎么跑"。Context Engineering 是中间那座桥,常被忽视但决定了 AI 能不能看见你要它看见的。**

---

## 互链(本系列博客)

- 上篇(概念):[Harness = Agent − Model:给 AI 配缰绳的工程学(上篇·概念)](/blog/harness-engineering-1/) — 3 层关系 + Harness 六层
- 下篇(实战):[Harness 怎么落地:从 OpenAI 100 万行到个人最小方案(下篇·实战)](/blog/harness-engineering-2/) — 6 大实战
- 基础:[和大模型协作前,先在心里装这 4 个性质](/blog/ai-collaboration-4-things/) — Working Memory 断崖
- 工具实例:[DeepSeek Harness:为什么 DeepSeek 把产品直接命名为 Harness](/blog/deepseek-harness-overview/) — Context Reset 的产品化

## 参考

- [B 站马克的技术工作坊 — Harness Engineering 到底是什么(BV12LR1B3EUt)](https://www.bilibili.com/video/BV12LR1B3EUt/)
- [B 站 code 秘密花园(花园老师)— 最近爆火的 Harness Engineering 到底是啥(BV1Zk9FBwELs)](https://www.bilibili.com/video/BV1Zk9FBwELs/)
- [Mitchell Hashimoto — My AI adoption journey(2026-02-05)](https://mitchellh.com/writing/my-ai-adoption-journey)
