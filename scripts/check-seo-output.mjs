import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { createStructuredData, structuredDataId } from '../src/seo-structured-data.mjs';

const outputDirectory = new URL('../docs/', import.meta.url);
const { siteUrl, siteName, pages } = JSON.parse(
  await readFile(new URL('../src/seo-pages.json', import.meta.url), 'utf8')
);
const sitemap = await readFile(new URL('sitemap.xml', outputDirectory), 'utf8');
const robots = await readFile(new URL('robots.txt', outputDirectory), 'utf8');
const seenUrls = new Set();
const escapeHtml = value => value.replace(/[&<>"']/g, character => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
})[character]);

for (const page of pages) {
  const url = `${siteUrl}${page.path}`;
  assert(!seenUrls.has(url), `Duplicate URL: ${url}`);
  seenUrls.add(url);
  const html = await readFile(join(outputDirectory.pathname, page.path, 'index.html'), 'utf8');

  assert(html.includes(`<title>${page.title}</title>`), `Missing title: ${page.path}`);
  assert(html.includes(`<link rel="canonical" href="${url}">`), `Wrong canonical: ${page.path}`);
  assert(html.includes(`<meta property="og:url" content="${url}">`), `Wrong social URL: ${page.path}`);
  assert(html.includes(`<meta name="description" content="${escapeHtml(page.description)}">`), `Missing description: ${page.path}`);
  assert(html.includes(`<app-root><noscript><main class="seo-fallback"><h1>${escapeHtml(page.heading)}</h1>`), `Missing no-JavaScript fallback: ${page.path}`);
  assert(!html.includes('<app-root><main class="seo-fallback">'), `Visible loading text: ${page.path}`);
  const scripts = [...html.matchAll(/<script id="page-structured-data" type="application\/ld\+json">([^<]*)<\/script>/g)];
  assert.equal(scripts.length, 1, `Expected one ${structuredDataId} script: ${page.path}`);
  const structuredData = JSON.parse(scripts[0][1]);
  assert.deepEqual(structuredData, createStructuredData(page, { siteUrl, siteName }), `Wrong structured data: ${page.path}`);
  assert.equal(structuredData['@context'], 'https://schema.org');
  assert.equal(structuredData['@type'], page.path === '/' ? 'Person' : page.path.startsWith('/project/') ? 'CreativeWork' : 'WebPage');
  assert.equal(structuredData.name, page.heading);
  assert.equal(structuredData.url, page.path === '/' ? siteUrl : url);
  assert(sitemap.includes(`<loc>${url}</loc>`), `Missing sitemap URL: ${page.path}`);
}

assert.equal((sitemap.match(/<loc>/g) ?? []).length, pages.length);
assert(robots.includes(`Sitemap: ${siteUrl}/sitemap.xml`));
assert((await readFile(new URL('404.html', outputDirectory), 'utf8')).includes('name="robots" content="noindex"'));

console.log(`Checked SEO output for ${pages.length} pages.`);
