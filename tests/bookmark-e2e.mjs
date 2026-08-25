// 端到端验证 BookmarkButton + /bookmarks 页面
// 1. 拉线上 welcome 页 HTML
// 2. 跑 BookmarkButton 的内联脚本
// 3. 模拟点击收藏
// 4. 检查 localStorage 写入
// 5. 跑 /bookmarks 页面的脚本
// 6. 验证列表里出现该 post

import { JSDOM } from 'jsdom';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const WELCOME_PATH = join(DIST, 'blog/welcome/index.html');
const BOOKMARKS_PATH = join(DIST, 'bookmarks/index.html');

function getText(path) {
  return readFileSync(path, 'utf8');
}

function runScriptInDom(html, originPath) {
  // 给 dom 一个 localStorage(每个 origin 独立)
  const storage = new Map();
  const dom = new JSDOM(html, {
    url: 'file://' + originPath,
    runScripts: 'outside-only',
    pretendToBeVisual: true,
  });
  const win = dom.window;
  // 覆盖 localStorage
  Object.defineProperty(win, 'localStorage', {
    configurable: true,
    value: {
      getItem: (k) => storage.has(k) ? storage.get(k) : null,
      setItem: (k, v) => { storage.set(k, String(v)); },
      removeItem: (k) => { storage.delete(k); },
      key: (i) => Array.from(storage.keys())[i] ?? null,
      get length() { return storage.size; },
      clear: () => storage.clear(),
    }
  });
  return { dom, win, storage };
}

// 抓所有 inline <script>...</script> 块
function extractScripts(html) {
  const re = /<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g;
  const out = [];
  let m;
  while ((m = re.exec(html)) !== null) out.push(m[1]);
  return out;
}

async function main() {
  console.log('1. 读取本地 dist welcome 页 HTML...');
  const welcomeHtml = getText(WELCOME_PATH);
  console.log('   bytes:', welcomeHtml.length);

  console.log('2. 在 JSDOM 跑 BookmarkButton 脚本 + 模拟点击...');
  const { win, storage } = runScriptInDom(welcomeHtml, WELCOME_PATH);
  // 跑所有内联脚本(包括 theme-toggle / like / bookmark / code-enhance)
  const scripts = extractScripts(welcomeHtml);
  console.log('   内联脚本数:', scripts.length);
  for (const s of scripts) {
    try {
      // BookmarkButton 的 IIFE 用了 `document.querySelectorAll` 等 — JSDOM 已有
      win.eval(s);
    } catch (e) {
      console.error('   ❌ 脚本执行失败:', e.message);
    }
  }

  // 检查按钮存在
  const btn = win.document.querySelector('.bookmark-btn');
  if (!btn) { console.error('❌ 没找到 .bookmark-btn'); return; }
  console.log('   找到按钮, postId =', btn.dataset.postId);

  // 模拟 click
  console.log('3. 模拟点击收藏按钮...');
  const clickEvent = new win.Event('click', { bubbles: true });
  btn.dispatchEvent(clickEvent);
  // 等一个 tick(setItem 同步,这里其实不需要)
  await new Promise(r => setTimeout(r, 50));

  console.log('4. 检查 localStorage 写入:');
  console.log('   所有键:', Array.from(storage.keys()));
  const stateKey = `neo-bookmark-${btn.dataset.postId}`;
  const stateVal = storage.get(stateKey);
  console.log(`   ${stateKey} =`, stateVal);
  if (stateVal !== '1') {
    console.error('❌ stateKey 没写入 1');
    return;
  }
  console.log('✅ stateKey 写入成功');

  // 检查图标已变
  const icon = btn.querySelector('.bookmark-icon');
  console.log('   图标:', icon?.textContent, '激活类:', btn.classList.contains('active'));
  if (icon?.textContent !== '★') {
    console.error('❌ 图标没变成 ★');
    return;
  }
  console.log('✅ UI 状态正确');

  console.log('5. 读取本地 dist /bookmarks 页 HTML...');
  const bmHtml = getText(BOOKMARKS_PATH);
  const { win: win2, storage: storage2 } = runScriptInDom(bmHtml, BOOKMARKS_PATH);
  // 模拟同一个 origin 的 localStorage — 但 JSDOM 隔离 origin
  // 实际浏览器同 origin 共享 localStorage,所以手动注入:
  for (const [k, v] of storage) {
    storage2.set(k, v);
  }
  const bmScripts = extractScripts(bmHtml);
  console.log('   内联脚本数:', bmScripts.length);
  for (const s of bmScripts) {
    try { win2.eval(s); } catch (e) { console.error('   ❌:', e.message); }
  }
  // 检查列表
  const empty = win2.document.getElementById('bookmarks-empty');
  const list = win2.document.getElementById('bookmarks-list');
  console.log('6. /bookmarks 页面状态:');
  console.log('   empty display:', empty?.style.display);
  console.log('   list display:', list?.style.display);
  console.log('   list 内容片段:', list?.innerHTML?.slice(0, 300));
  // 检查页面有没有 console 报错
  const listVisible = list?.style.display === 'block';
  const hasPost = list?.innerHTML?.includes('post-card');
  if (listVisible && hasPost) {
    console.log('✅✅✅ 全通过 — 列表显示了收藏 post');
  } else {
    console.error('❌ 列表没显示该 post');
  }
}

main().catch(e => { console.error('FATAL', e); process.exit(1); });
