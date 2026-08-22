import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

/**
 * 简单 markdown → 纯文本(RSS 用)
 * RSS 阅读器对 markdown 语法支持差,**`>` / `**` / ` ``` ` 经常被当代码块渲染**
 * 解决方案:strip 掉所有 markdown 语法,输出干净中文
 */
function stripMarkdown(md) {
  if (!md) return '';
  return md
    .replace(/```[\s\S]*?```/g, '')                 // fenced code blocks
    .replace(/`([^`]+)`/g, '$1')                    // inline code
    .replace(/^#{1,6}\s+/gm, '')                   // headings
    .replace(/^>\s?/gm, '')                        // blockquotes
    .replace(/\*\*([^*]+)\*\*/g, '$1')             // bold
    .replace(/__([^_]+)__/g, '$1')                 // bold alt
    .replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '$1')  // italic (避免吞掉加粗)
    .replace(/(?<!_)_([^_\n]+)_(?!_)/g, '$1')      // italic alt
    .replace(/~~([^~]+)~~/g, '$1')                 // strikethrough
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')        // links
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '[图片]')   // images
    .replace(/^---[\s\S]*?---/gm, '')               // frontmatter
    .replace(/^[-*_]{3,}\s*$/gm, '---')             // horizontal rules
    .replace(/^\|.*\|\s*$/gm, '[表格]')             // tables
    .replace(/^[\s]*[-*+]\s+/gm, '· ')             // unordered list
    .replace(/^[\s]*\d+\.\s+/gm, '· ')             // ordered list
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function summarize(body, frontDesc, maxLen = 240) {
  if (frontDesc && frontDesc.length <= maxLen) return frontDesc;
  const cleaned = stripMarkdown(body || '');
  if (cleaned.length <= maxLen) return cleaned;
  return cleaned.slice(0, maxLen).replace(/\s+\S*$/, '') + '…';
}

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: "Neo's Blog",
    description: 'Neo 的技术博客:AI、工具、想法',
    site: context.site,
    customData: '<language>zh-CN</language>',
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: post.data.title,
        description: summarize(post.body, post.data.description),
        pubDate: post.data.pubDate,
        link: `/blog/${post.id}`,
      })),
  });
}
