# neo-blog 项目 AGENTS.md

> 新会话的 Mavis 读到这份就接管博客维护工作。
> 最后更新:2026-08-22

## 项目身份

- **这是什么**:Neo 的个人技术博客,Astro 5 静态站,部署在 GitHub Pages
- **本地根目录**:`C:\Users\王永芳\Desktop\Agent Project\neo-blog\`
- **远程仓库**:`https://github.com/ANT-CYJ/ANT-CYJ.github.io`
- **线上地址**:`https://ant-cyj.github.io/`
- **部署链路**:push main → GitHub Actions(`actions/deploy-pages@v4`)→ 自动 build + 部署

## 关键命令

```bash
cd "C:\Users\王永芳\Desktop\Agent Project\neo-blog"

npm install              # 一次性
npm run dev              # 本地预览 → http://localhost:4321
npm run build            # 验证能 build
git add . && git commit -m "..." && git push origin main
```

## 用户偏好(Neo,后端零基础)

- **教学风格**:主动询问式 — 关键节点用 `ask_user` 确认,不要闷头干
- **技术名词**:每个新概念第一次出现时简短解释(类比 + 简短定义)
- **沟通**:中文,简短直接,3 段以内回复优先
- **LEARNING-JOURNAL**:跨项目通用概念写到 `C:\Users\王永芳\.minimax\notes\LEARNING-JOURNAL.md`,改完 `git commit + push`(post-commit hook 自动 push)
- **每个 Git 操作后**:PowerShell 把 git stderr 当异常,exit 1 是假象,以 `git log` + `git ls-remote` 是否 sync 为准

## 核心工作流:Vault → Blog

**素材源 Obsidian vault**(默认扫这个):
- ✅ `C:\Users\王永芳\Desktop\Vibe_coding\Code Project\Outline-output` — 通用 AI 知识
- ❌ `C:\Users\王永芳\Desktop\电商平台@查漏补缺&优化建议\华麦医械超市项目跟进\LLM知识库` — 商业敏感,默认不读(除非 Neo 明确说"这篇可以发")

**扫描规则**:
1. 排除:文件 < 1KB(占位文件) / `inbox/` `raw/` `.obsidian/` `.claude/` / `MOC` 标题 / `README` `Home` 等导航页
2. 找 > 1KB、`LastWriteTime` 较近的 `.md`
3. 读内容,按 ★有价值 / △一般 / ✗跳过 标 3-5 条候选给 Neo 选

**写作规则**:
- **不直接复制原文** — 重写消化,用 Neo 自己的语气
- **脱敏**:人名 → "某同事"/化名,公司名 → "某 AI 厂商",项目代号 → 通用描述,金额/日期可模糊化
- **不发布客户项目 vault 的内容**,除非 Neo 明确同意
- **写完先给预览**,Neo 点头再 commit + push

**博客文件位置**:`src/content/blog/<slug>.md`,frontmatter 必填 `title/description/pubDate/tags`

## 触发场景(主动提醒)

| 触发点 | 提醒内容 |
|---|---|
| 用户说"扫 vault" | 立刻跑扫描 + 列候选 |
| 用户说"复盘" | 整理刚完成的项目/学习 → 写草稿 |
| 用户说"写博客" | 起草新文章 → 预览 → 推送 |
| LEARNING-JOURNAL 加新卡片 | 提议"要不要同步一篇博客" |
| vault 出现新的 > 1KB 笔记(主动发现) | 提议"这篇适合发吗" |

## 当前状态(2026-08-22 截止)

- ✅ 项目骨架就绪(22 文件)
- ✅ GitHub Pages 部署配置(`.github/workflows/deploy.yml`)
- ✅ 3 篇博客已上线:
  1. `/blog/welcome` — 欢迎 + 重启理由
  2. `/blog/ai-collaboration-4-things` — AI 协作必知 4 件事
  3. `/blog/hermes-wechat-integration` — Hermes 微信集成实战
- ✅ 远程 main:`9f9f0f1` 起,持续更新
- ✅ 工作流沉淀到 LEARNING-JOURNAL(commit `81b76eb`)

## 接下来候选(按优先级)

1. **扫 vault 找下一篇可发**(vault 里大部分是占位文件,但会随时间增长)
2. **本地预览验证**:`npm run dev` → `localhost:4321`(dev server 可能还在跑,先 `task_query` 查 `bg_e6290338-3556-483c-8497-7d05b959046a`)
3. **主题/视觉调整**:换主题、调色、加 Logo
4. **加评论系统**:Giscus(接 GitHub Discussions,免费)
5. **加访问统计**:Plausible / Umami
6. **写个人 about 页面**:目前比较简陋

## 快速自检清单(新会话开头)

1. 读这份 `AGENTS.md` ✓(你正在读)
2. 跑 `git log --oneline -5` 看最近 commit
3. 跑 `npm run dev` 检查本地是否能起来(dev server 已在 `bg_e6290338` 跑的话,先确认状态)
4. 问 Neo:"今天从哪开始?" — 给 2-3 个候选

## 注意事项

- ⚠️ PowerShell + git 的 stderr 误报 — 用 `git ls-remote` 验证 sync,不要看 exit code
- ⚠️ `npm install` 在 Windows 可能要 5+ 分钟,timeout 至少 600s
- ⚠️ GitHub Pages 第一次需要 Neo 在仓库 Settings → Pages 手动选 "GitHub Actions"
- ⚠️ Obsidian vault 路径里有空格和中文,shell 命令记得用单引号
