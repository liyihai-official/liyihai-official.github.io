import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const root = resolve('dist');
const walk = dir => readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
  const path = join(dir, entry.name);
  return entry.isDirectory() ? walk(path) : path.endsWith('.html') ? [path] : [];
});
const pages = walk(root);
let checkedLinks = 0;
for (const file of pages) {
  const html = readFileSync(file, 'utf8');
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate IDs: ${file}`);
  assert(!html.includes('github.com/yourname/'), `Placeholder repository: ${file}`);
  assert(!html.includes('href="/src/'), `Source asset leaked into build: ${file}`);
  const url = new URL(file.slice(root.length).replace(/index\.html$/, ''), 'https://local.test');
  for (const match of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const href = match[1];
    assert.notEqual(href, '#', `Empty link: ${file}`);
    const target = new URL(href.replaceAll('&amp;', '&'), url);
    if (target.origin !== url.origin) continue;
    let targetFile = join(root, decodeURIComponent(target.pathname));
    if (!target.pathname.split('/').pop()?.includes('.')) targetFile = join(targetFile, 'index.html');
    assert(existsSync(targetFile), `Missing target ${href} in ${file}`);
    if (target.hash && targetFile.endsWith('.html')) {
      const targetHtml = readFileSync(targetFile, 'utf8');
      assert(targetHtml.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`), `Missing anchor ${href} in ${file}`);
    }
    checkedLinks++;
  }
}
for (const file of pages.filter(file => /\/(en|zh)\//.test(file.slice(root.length)))) {
  const html = readFileSync(file, 'utf8');
  assert.equal((html.match(/<main\b/g) || []).length, 1, `Missing main landmark: ${file}`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `Expected one page heading: ${file}`);
}
const postCount = readdirSync('src/content/blog').filter(file => /\.mdx?$/.test(file)).length;
const builtPosts = pages.filter(file => /\/(en|zh)\/blog\/[^/]+\/index\.html$/.test(file));
assert.equal(builtPosts.length, postCount, 'Every blog entry must generate a detail page');
console.log(`Passed: ${pages.length} built pages, ${checkedLinks} local links/assets, unique IDs, headings, and blog routes.`);
