# Harness Engineering:给 AI 配缰绳的工程学

> 微信公众号短文 | 约 450 字
> 从博客《Harness Engineering 上下篇》合并精华

## 厨房比喻

没有 Harness,AI 像个热情但毛手毛脚的大厨 — 做菜快但油溅得到处都是,碗摔了好几个。你不敢离开厨房。

有 Harness,厨房装了防溅板、防火系统、自动关火 — 你终于可以离开去干别的,偶尔回来看一眼就行。

## 一句话定论

> **Harness = Agent − Model**(LangChain 2026-03 公式) — 一个完整 agent 减去大模型,**剩下的所有东西都是 Harness**。

## 大厂实战

**OpenAI**:5 个月 100 万行代码,团队 3 → 7 人,效率 10 倍。靠 3 类 harness:
- AGENTS.md 100 行当目录,仓库为唯一事实来源
- Chrome DevTools 接入让 Codex 自截图验证 UI
- **Linter/测试自动闭环**(`报错 → 反馈 → 修改 → 再测`)

**Anthropic**:Planner + Generator + Evaluator 三 agent 架构。Solo(20min/$9) vs Full Harness(6h/$200)对比鲜明 — **精雕细琢有代价**。

## 让我意外的一个数字

**LangChain 仅通过改造 Harness,把自家智能体从榜单 30 名开外拉到前 5**。模型完全没变,只是 Harness 改了。**这说明 Harness 不是"锦上添花",是"决定能不能落地"。**

## 给产品经理的一句话

> **Harness 是工程,不是神迹。** OpenAI 靠 30 道门禁,个人靠 3 个组件(远程服务器 + Dev Container + Git Worktree)+ 持续迭代。**剩下的就是动手搭、跑、迭代。**

## 个人最小 Harness 起步

| 组件 | 作用 |
|------|------|
| 远程服务器 | AI 在你合上笔记本后还能继续干活 |
| Dev Container 沙盒 | 每个任务一个独立 Docker 盒子,跑炸了换一个就行 |
| Git Worktree | 同一项目开多个分支,多 AI 同时干不同的事 |
| 基本 Lint + 测试 | 自动门禁,人最后看一眼就行 |

---

📖 [完整博客·上篇: Harness 是什么](https://ant-cyj.github.io/blog/harness-engineering-1/)
📖 [完整博客·下篇: Harness 怎么落地](https://ant-cyj.github.io/blog/harness-engineering-2/)

#Harness #AI #工程 #Agent
