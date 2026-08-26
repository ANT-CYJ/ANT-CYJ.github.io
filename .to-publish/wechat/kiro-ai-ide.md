# Kiro AI IDE:AWS 的"规范驱动"AI 编程工具,跟 DeepSeek Harness 形成对位

> 微信公众号短文 | 约 550 字
> 从博客《Kiro AI IDE》抽取精华

## 一句话定论

> **Kiro = AWS 2025 年出的 Agentic AI IDE,核心理念是"规范驱动开发"(Spec-Driven)。**
>
> 关键差异:Kiro 走"显式规范"路线(把规范写成 Markdown),DeepSeek Harness 走"隐式系统"路线(用插件系统隐式管理)。**两个工具代表了 2026 年 AI 编程的两个分叉。**

## 关键对位:Kiro vs DeepSeek Harness

| 维度 | Kiro(AWS · 国际) | DeepSeek Harness(国产) |
|---|---|---|
| **核心范式** | Spec-Driven(规范先行) | Plugin-Driven(插件化系统级) |
| **规范化方式** | 三文档(requirements/design/tasks) | CODIS 插件 + Harness 规则 |
| **地区可用性** | 中国大陆受限(Claude 被屏蔽) | 国内全功能 |
| **代表用户** | 国际化团队 / 中大型项目 | 国内开发 / 国产化替代 |

**判断**:2026 年 AI 编程会分叉成两个方向 — 显式规范(Kiro)和隐式系统(Harness)。两者不冲突,会共存。

## Spec 模式 3 步工作流

1. **requirements.md(需求文档)** — AI 自动把"产品 + 测试"的活干完
2. **design.md(设计文档)** — AI 把"架构师 + 程序员"的活干完
3. **tasks.md(任务清单)** — AI 把"开发者 + QA"的活干完

每个 task 可以直接点击执行,失败时 AI 自我修复,默认以"测试用例全部通过"为终点。

## 国内用户必看

**Anthropic 的服务条款对支持的国家/地区有严格清单,中国大陆及港澳台地区不在 Claude 正式服务区域内。**

后果:
- Kiro 检测到登录 IP 在受限地区 → **自动隐藏 Claude 模型**,只显示 DeepSeek/Qwen
- 即使升级 Pro 付费版,Claude 依然不显示
- **没有开关可以强制开启**

**建议**:直接用内置的 Qwen/DeepSeek(代码能力已够 80% 场景,Credits 消耗只有 Claude 的 5-25%)。

## 适用 vs 不适用

✅ 适合:复杂系统 / 中大型功能 / 遗留代码重构 / 金融医疗高合规

❌ 不适用:几十行临时脚本 / 纯离线 / **完全不懂编程的纯新手**

## 3 遍运行教训

B 站 UP 主用同一需求跑 3 遍:

- 第 1 遍:无技术栈指定 → 生成 Node.js,本地无环境
- 第 2 遍:明确 Spring Boot → Java 未配,过程坎坷
- 第 3 遍:**指定版本 + 配好环境** → **一次跑通**

**关键洞察**:**懂一点编程**才能跟 AI 配合最佳。

## 收尾:3 条建议

1. **别从 0 起步,从"重构老代码"开始** — Spec 模式在小改动上效果最明显
2. **先写 Steering Files,再让 Kiro 干活** — 提前规范比每次重复强 10 倍
3. **国内用户用 Qwen/DeepSeek 就够了** — Claude 在国内不可用

**2026 年 AI 编程不再是"哪个 IDE 最好",是"你的团队需要哪种工作流"。**

---

📖 [完整博客:Kiro AI IDE](https://ant-cyj.github.io/blog/kiro-ai-ide/)

#Kiro #AI 编程 #AWS #Harness #工具评测 #DeepSeek
