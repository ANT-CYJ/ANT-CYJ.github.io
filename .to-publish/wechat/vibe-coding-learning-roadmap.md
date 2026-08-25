# Vibe Coding 学习路线图:4 层框架 + 4 阶段实战

> 微信公众号短文 | 约 550 字
> 从博客《Vibe Coding 学习路线图》抽取精华

## 一句话定论

> **Vibe Coding = Karpathy 提出的"用自然语言指挥 AI 写代码,人类负责架构与审美"的编程新范式。**
>
> 关键认知:核心不在"让 AI 写代码",**在"建立一套严密的语境控制(Context Engineering)体系"**。

## 99% 的人误解了 Vibe Coding

很多人以为 Vibe Coding = "用 Cursor 让 AI 写代码"。**错。**

Cursor/Windsurf/Copilot 只是**基础设施**。真正的 Vibe Coding 范式,要求你掌握 4 层能力 — 工具选择、语境投喂、架构解耦、防御验证。

**类比:** Vibe Coding 之于 AI 编程,就像"产品经理"之于"程序员" — 你不是不再写代码,你是用"产品经理的思维"管 AI 这个"超级实习生"。

## 四层知识框架(L1-L4)

| 层级 | 名称 | 实操目标 |
|---|---|---|
| **L1** | 工具层 (Tooling) | 熟练用 Cursor / Windsurf / Aider / Cline |
| **L2** | 语境层 (Contexting) | 把 PRD/API 文档精准注入 AI 上下文窗口 |
| **L3** | 架构层 (Architecture) | 任务拆解 + 物理拆分,避免面条代码 |
| **L4** | 验证层 (Validation) | 单元测试 + 报错闭环 Debug |

**L2 最容易被低估** — AI 写的代码"不对",99% 不是 AI 笨,是你没把正确的上下文喂给它。

**L3 是真正的分水岭** — 你不懂架构,AI 就会给你 2000 行单文件 + 100 个全局变量。

**L4 是底线** — AI 生成的代码必须 100% 测试,覆盖率目标 ≥ 70%。

## 四阶段学习路线

| 阶段 | 完成标志 | 时长 |
|---|---|---|
| **阶段 1** | 100 行单文件脚本纯靠 Prompt 完成 | 2-3 周 |
| **阶段 2** | 5-10 文件项目 + 自有 `.cursorrules` | 3-4 周 |
| **阶段 3** | 30+ 文件中型项目,架构清晰 | 4-6 周 |
| **阶段 4** | 稳定交付中型项目,bug 修复 < 1h | 持续 |

## 调试 4 条铁律

1. **分步执行** — 别让 AI 一次写 200 行
2. **明确反馈** — 不要只说"不对",详细描述预期/实际/报错
3. **测试驱动** — 先写测试再让 AI 实现
4. **安全审查** — AI 代码可能引入漏洞,必须人工 review

## 收尾:3 条给新人

1. 别看太多教程,**先装 Cursor 用一周**
2. 从 L2(语境管理)开始投入,**不是 L1(工具)**
3. 每个项目都强制"AI 覆盖率"审计,**目标 ≥ 70%**

**给老用户 1 条:** 把"AI 生成的代码"当成"超级实习生的代码" — 自然用 WBS / `.cursorrules` / 单元测试。

## Vibe Coding 跟 AI 编程三阶

- **Prompt Engineering** — Vibe Coding 的输入端
- **Context Engineering** — **Vibe Coding 的核心(L2)**
- **Harness Engineering** — **Vibe Coding 的保障(L3 + L4)**

Vibe Coding 不是新东西,它是 AI 编程三阶在工程实践中的具体落地。

---

📖 [完整博客:Vibe Coding 学习路线图](https://ant-cyj.github.io/blog/vibe-coding-learning-roadmap/)

#Vibe Coding #AI 编程 #学习路线 #Context Engineering #AI
