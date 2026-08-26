# Kiro AI IDE:AWS 出的"规范驱动开发"工具,跟 DeepSeek Harness 形成国际/国内对位

> B 站长文 | 直接从博客搬
>
> 原文:https://ant-cyj.github.io/blog/kiro-ai-ide/

2025 年 AWS 推出 Kiro — 跟 Cursor/Windsurf 完全不同的 AI 编程范式:不是"说完需求就写代码",而是"先把需求拆成 3 份文档,再让 AI 逐步执行"。这跟国产 DeepSeek Harness 形成 2026 年 AI 编程赛道的两条分叉路径。

---

## 一句话定论

**Kiro = AWS 出的 Agentic AI IDE,核心理念是"规范驱动开发"(Spec-Driven)。**

**关键差异**:Kiro 走"显式规范"路线(把规范写成 Markdown),DeepSeek Harness 走"隐式系统"路线(用插件系统隐式管理)。**两个工具代表了 2026 年 AI 编程的两个分叉。**

---

## Kiro 是什么

- **提出方**:AWS(亚马逊云科技)
- **底层**:Amazon Bedrock → Claude / Qwen / DeepSeek
- **形态**:桌面 IDE(Code OSS 兼容 VS Code)+ CLI + Web
- **网址**:kiro.dev

**关键认知:Kiro 不是 AWS 自己训的模型,是 AWS 调 Anthropic Claude 的壳。**

---

## 5 个关键特性

| 特性 | 作用 |
|------|------|
| **Spec 模式** | 自然语言 → requirements/design/tasks 三份文档 |
| **Agent Hooks** | 保存文件时自动跑测试 / 更新文档 / 安全扫描 |
| **Steering Files** | 项目级 Markdown 配置,定义代码规范 |
| **MCP 集成** | 连接数据库/API/GitHub 外部工具 |
| **上下文持久化** | 通过 Steering Files 避免每次对话重复规范 |

**Steering Files 最实用** — 你写一份项目规范 Markdown,Kiro 每次执行自动遵守。

---

## 关键对位:Kiro vs DeepSeek Harness

| 维度 | Kiro(AWS · 国际) | DeepSeek Harness(国产) |
|------|-----------------|---------------------|
| **核心范式** | Spec-Driven(规范先行) | Plugin-Driven(插件化系统级) |
| **规范化方式** | requirements/design/tasks 三文档 | CODIS 插件配置 + Harness 规则 |
| **地区可用性** | 中国大陆受限(Claude 被屏蔽) | 国内全功能 |
| **定价** | $20-$200/月 + Credits | 暂未公布 |
| **代表用户** | 国际化团队 / 中大型项目 | 国内开发 / 国产化替代 |

**给 Neo 的判断:2026 年 AI 编程会分叉成两个方向 — 显式规范(Kiro)和隐式系统(Harness)。** 两者不冲突,会共存。

完整 DeepSeek Harness 拆解见 [DeepSeek Harness 全景](/blog/deepseek-harness-overview)。

---

## Spec 模式 3 步工作流

### 步骤 1:requirements.md(需求文档)
- 用户故事 + 验收标准
- AI 自动把"产品 + 测试"的活干完

### 步骤 2:design.md(设计文档)
- 技术选型 + 架构图 + 实体类
- AI 把"架构师 + 程序员"的活干完

### 步骤 3:tasks.md(任务清单)
- 拆成可执行 task,按依赖分必须/可选
- 每个 task 直接点击执行,失败 AI 自我修复
- AI 把"开发者 + QA"的活干完

---

## 定价 + Credits

| 方案 | 月费 | Credits |
|------|------|---------|
| Free | $0 | 50 |
| Pro | $20 | 1,000 |
| Pro+ | $40 | 2,000 |
| Pro Max | $100 | 5,000 |
| Power | $200 | 10,000 |

**模型倍率**:
- Qwen3 Coder Next:0.05×-0.25×(最便宜)
- Claude Haiku:0.4×
- Claude Sonnet:1.3×
- Claude Opus:~2.2×

---

## 地区限制(国内用户必看)

**Anthropic 的服务条款对支持的国家/地区有严格清单,中国大陆及港澳台地区不在 Claude 正式服务区域内。**

后果:
- Kiro 检测到登录 IP 在受限地区 → **自动隐藏 Claude 模型**,只显示 DeepSeek/Qwen
- 即使升级到 Pro 付费版,Claude 依然不显示
- **没有开关可以强制开启 Claude** — 服务端合规拦截

**国内用户建议**:
- 直接用内置的 Qwen / DeepSeek(代码生成能力已够 80% 场景,Credits 消耗只有 Claude 的 5-25%)
- 想要稳定 Claude → 需在合规支持地区通过当地网络登录

---

## 适用 vs 不适用

### ✅ 适合
- 复杂系统 / 中大型功能开发(多模块跨层)
- 从原型到生产的工程化落地
- 遗留代码重构与长期维护
- 高合规与强规范场景(金融 / 医疗 / 企业级后台)
- 重视协作对齐的中小团队

### ❌ 不适用
- 几十行临时脚本 / 一次性爬虫(用 Cursor/Windsurf 更快)
- 完全拒绝审查 Spec 与 Diff 的团队
- **完全不懂编程的纯新手**(生成的大项目到处报错,反而是灾难)

### 3 遍运行教训

B 站 UP 主用同一需求跑 3 遍:

| 尝试 | 提示词 | 本地环境 | 结果 |
|------|--------|---------|------|
| 第 1 遍 | 无技术栈指定 | 无准备 | Node.js,本地无环境跑不起来 |
| 第 2 遍 | 明确 Spring Boot | Java 未配好 | 强行解决报错,过程坎坷 |
| 第 3 遍 | 指定 Spring Boot + 版本 | **Java 17 + Maven 已配** | **一次跑通** |

**关键洞察**:**懂一点编程**才能跟 AI 配合最佳 — **成为会使用工具的人,不是依赖工具的人**。

---

## 跟 AI 编程三阶的关系

| 层级 | 关注点 | Kiro 的对应 |
|------|--------|------------|
| **Prompt Engineering** | 怎么问问题 | requirements.md 模板 |
| **Context Engineering** | 怎么给信息 | design.md + Steering Files |
| **Harness Engineering** | 怎么搭系统 | **Spec 模式 + Agent Hooks** |

**Kiro 是当前最接近"AI 编程三阶完整落地"的 IDE 之一**。

---

## 收尾:3 条建议

1. **别从 0 起步,从"重构一段老代码"开始** — Kiro Spec 模式在小改动上效果最明显
2. **先写 Steering Files,再让 Kiro 干活** — 提前规范比每次重复强 10 倍
3. **国内用户用 Qwen/DeepSeek 就够了** — Claude 在国内不可用

**给"已经在用 AI IDE"的人**:
- "说完需求 AI 直接写代码" → Cursor / Windsurf
- "需要严格规范和团队对齐" → Kiro
- "系统级治理 + 插件化" → DeepSeek Harness

**2026 年 AI 编程不再是"哪个 IDE 最好",是"你的团队需要哪种工作流"。**

---

📖 完整博客 + 配图建议:https://ant-cyj.github.io/blog/kiro-ai-ide/

#Kiro #AI 编程 #AWS #Harness #工具评测 #DeepSeek
