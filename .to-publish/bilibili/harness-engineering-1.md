# Harness = Agent − Model:给 AI 配缰绳的工程学(上篇·概念)

> 直接从博客搬,已优化为 B 站长文风格

最近 Harness Engineering 这个词在 AI 圈被反复讨论。大多数内容要么是"宣传 Harness 多么重要",要么是"具体某厂的实践细节",很少有人把"为什么需要、是什么、怎么来的"讲清楚。

这篇(以及下一篇)是我看完 5 个 B 站视频、跨多源消化后的全景。

## 一句话定论

> **Harness = 铺轨道 + 围栅栏 = Agent − Model**
>
> 不是噱头,也不是终局 — 是当下最现实的过渡期关键技术。

**厨房比喻**:

> 没有 Harness,AI 就像个热情但毛手毛脚的大厨 — 做菜快,但油溅得到处都是,碗摔了好几个。你不敢离开厨房,因为一走他就可能把厨房点了。
>
> 有 Harness,厨房装了防溅板、防火系统、自动关火 — 你终于可以离开去干别的,偶尔回来看一眼就行。

## 速记表

| 概念 | 一句话 | 大白话 | 典型手段 |
|------|--------|--------|----------|
| **Prompt Engineering** | 怎么问问题 | 把发给模型的话说清楚 | "帮我给橘色小猫起名,两个字" |
| **Context Engineering** | 怎么给信息 | 合适时机把合适内容放进 context | 上下文压缩 / 动态检索 / 渐进式披露 |
| **Harness Engineering** | **怎么搭系统** | **围绕模型搭一套可靠的 agent** | **权限管控 / 工具管理 / Linter 闭环 / 独立评估** |

## 为什么需要 Harness

AI 现在写代码能力很强,但**如果你不搭 Harness,会遇到 5 个问题**:

- **反复犯低级错误** — 想用 Perl 写脚本 → 没权限 → 换 Python → 路径又错了
- **并行能力浪费** — 同时只能干一个活,因为干别的你盯不过来
- **代码质量失控** — AI 写的代码有各种小 bug
- **人很累** — AI 很强,但要一直盯着,比自己做还累
- **用不满工具** — 200 美金的 AI 工具,因为基建不够,只能用出 100 美金的效果

## 公式拆解:Agent = Model + Harness

**harness** 本意是"马具"(缰绳/头套)— 用来控制和驾驭马的工具。

```
一个完整的 Agent = 大模型(Model) + 控制驾驭大模型的系统(Harness)
                  ⟺  Harness = Agent − Model
```

- 公式 2026-03-10 由 LangChain《The Anatomy of an Agent Harness》首次给出
- **Claude Code 例子**:CLAUDE.md 规则、可用工具、定时调度机制 — 凡不属于 Claude 模型的部分都是 Harness

## 概念演进:Prompt → Context → Harness

三者层层递进,研究范围不断扩大。用一个客户拜访比喻:

| 阶段 | 客户拜访比喻 |
|------|---------------|
| **Prompt** | 把任务讲清楚(先寒暄、再介绍方案、再挖需求、最后确认下一步) |
| **Context** | 资料准备齐全(客户背景、过往沟通、产品报价、竞品情况、会议目标) |
| **Harness** | 持续监督纠偏(带 checklist、关键节点汇报、会后核实纪要录音、按标准验收) |

**关键洞察**:Context = 影响模型当前决策的所有信息的总和(用户输入/历史/检索结果/工具返回/任务状态/中间产物/系统规则/安全约束/其他 agent 结果)。

## 4 个踩坑

- ❌ 把 Harness 当万能解药 — 模型决定上限,Harness 决定能不能落地
- ❌ 上来就搞 30 道 quality gate — 公司级方案,小团队先做最小
- ❌ 用 Harness 解决 Prompt 该解决的问题
- ❌ Harness 一次搭好就完事 — 要持续迭代(Oxidize)

## 一句话总结

> Harness 是 AI 落地的"厨房改造工程",不是 AI 能力的"提升"。

下篇讲"怎么搭"。

---

> 完整版本看博客:[ant-cyj.github.io/blog/harness-engineering-1](https://ant-cyj.github.io/blog/harness-engineering-1/)

#Harness #AI #工程 #Agent
