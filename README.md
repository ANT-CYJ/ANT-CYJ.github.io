# Neo's Blog

个人技术博客,基于 [Astro](https://astro.build),部署在 GitHub Pages。

## 写博客

新增文章:在 `src/content/blog/` 下新建 `.md` 文件,带 frontmatter:

```markdown
---
title: '文章标题'
description: '简短描述'
pubDate: 2026-08-22
tags: ['标签1', '标签2']
---

正文...
```

## 本地开发

```bash
npm install
npm run dev    # 启动本地预览
npm run build  # 构建生产版本
```

## 部署

push 到 `main` 分支,GitHub Actions 自动 build + 部署到 `https://ant-cyj.github.io`。
