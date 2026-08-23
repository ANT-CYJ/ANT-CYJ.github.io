# Context Engineering 是什么:跟 Prompt / Harness 三层关系一次说清

> 直接从博客搬,已优化为 B 站长文风格

之前讲 Harness 时,"Context Engineering"被一笔带过。这篇补齐它 — AI 工程三阶的中间一环。

## 一句话定论

> **Context Engineering = 精心设计放进模型上下文窗口里的内容,让模型在正确时机看到正确信息。**

仓库比喻:

> Prompt 决定**怎么问**客户
> Context 决定**带什么资料**去拜访
> Harness 决定**怎么管理整个拜访流程**

## 速记表:三层对比

| 层级 | 研究对象 | 大白话 |
|------|----------|--------|
| **Prompt Engineering** | 怎么问问题 | 把发给模型的话说清楚 |
| **Context Engineering** | 怎么给信息 | 合适时机把合适内容放进 context |
| **Harness Engineering** | 怎么搭系统 | 围绕模型搭一套可靠的 agent |

花园老师的更底层解释:

- **Prompt**:塑造局部的概率空间
- **Context**:给信息,且按需给
- **Harness**:驾驭过程

> **包含关系而非替代关系**:Prompt ⊂ Context ⊂ Harness

## Context 到底是什么 — 8 个组成部分

> "Context = 影响模型当前决策的所有信息的总和"

| # | 部分 | 例子 |
|---|------|------|
| 1 | 用户输入 | 当前这条消息 |
| 2 | 历史对话 | 前 N 轮的 Q&A |
| 3 | 检索结果 | RAG 检索回来的相关资料 |
| 4 | 工具返回 | 上一轮工具调用的结果 |
| 5 | 任务状态 | 当前任务执行到哪步 |
| 6 | 中间产物 | agent 暂存的文件 |
| 7 | 系统规则 | AGENTS.md / SOUL.md |
| 8 | 安全约束 | 不能调某些 API |

**常见误解**:Context ≠ 对话历史。对话历史只是 1/8。

## 为什么 Context Engineering 重要

之前 [AI 协作必知 4 件事](/blog/ai-collaboration-4-things/) 提过:

> **Working Memory 有断崖式上限** — 模型在上下文窗口内表现完美,超出后直接"看不见"

**Context Engineering 是硬约束**,不是"锦上添花"。

## 6 个核心方法

### 1. 上下文压缩(Compaction)
对话历史超过阈值时,总结成摘要替代冗长内容。代价:信息丢失。

### 2. 上下文重置(Context Reset)⭐ 最激进
比压缩更激进 — **换一个全新的 agent**,把工作交接过去。类比"**内存泄漏 → 重启进程 → 恢复状态**"。

**DeepSeek Harness 的"换脑能力"**就用了这个思想(见 [DeepSeek Harness 博客](/blog/deepseek-harness-overview/))。

### 3. 动态检索(RAG)
按需检索外部资料补进上下文,不是一次性塞所有资料。

### 4. 渐进式披露
不一次性给全部信息,按需分层加载 — AGENTS.md 压缩到 ~100 行当目录。

### 5. 信息裁剪
**不是越多越好,而是越相关越好** — 100 行 AGENTS.md 比 50KB AGENTS.md 更稳。

### 6. 结构化组织
5 段式固定结构,模型能快速定位:

```
## 1. 角色目标(系统规则)
## 2. 当前任务(进度 N/M)
## 3. 历史摘要(关键决策)
## 4. 外部证据(RAG 结果)
## 5. 当前可用工具
```

## 跟 Token / Harness 的关系

| 模型 | 上下文窗口 |
|------|------------|
| GPT-3.5 | 4K |
| GPT-4 | 32K |
| Claude 3.5 Sonnet | **200K** |
| Gemini 1.5 Pro | **2M** |

**Context 治理是 Harness 6 层架构的第 1 层**(完整见 [Harness 概念篇](/blog/harness-engineering-1/))。

## 5 个常见坑

| 症状 | 解决 |
|------|------|
| 模型"失忆"早期指令 | 压缩 + 关键信息放开头结尾 |
| 忽略 AGENTS.md | 裁剪到 ~100 行当目录 |
| RAG 检索不准 | 改进分块 + 测试 top-k |
| 模型胡说八道 | 角色/约束放 Context 头部 |
| 长任务跑偏 | Context Reset 换 agent |

## 4 条核心原则

1. **Context 8 件事都要管** — 别只盯对话历史
2. **宁少勿杂** — 信息密度 > 信息量
3. **结构化优先** — 5 段式固定结构
4. **Context Reset 备好** — 换 agent 比硬撑有效

## 一句话总结

> **Prompt 决定"问什么",Context 决定"给什么",Harness 决定"怎么跑"。Context Engineering 是中间那座桥。**

---

> 完整版本看博客:[ant-cyj.github.io/blog/context-engineering](https://ant-cyj.github.io/blog/context-engineering/)

#Context #AI #工程 #Harness
