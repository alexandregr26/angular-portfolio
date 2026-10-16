import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createStructuredData, structuredDataId } from '../src/seo-structured-data.mjs';

const outputDirectory = new URL('../docs/', import.meta.url);
const { siteUrl, siteName, defaultImage, pages } = JSON.parse(
  await readFile(new URL('../src/seo-pages.json', import.meta.url), 'utf8')
);
const template = await readFile(new URL('index.html', outputDirectory), 'utf8');

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function replaceTag(html, pattern, replacement) {
  if (!pattern.test(html)) {
    throw new Error(`Missing expected metadata tag: ${pattern}`);
  }
  return html.replace(pattern, replacement);
}

function setDescription(html, attribute, description) {
  const tag = `<meta ${attribute} content="${description}">`;
  const pattern = new RegExp(`<meta ${attribute} content="[^"]*">`);
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : replaceTag(html, /<\/head>/, `  ${tag}\n</head>`);
}

function renderPage(page) {
  const url = `${siteUrl}${page.path}`;
  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const escapedUrl = escapeHtml(url);
  const links = pages
    .filter(candidate => candidate.path !== page.path)
    .map(candidate => `<a href="${escapeHtml(candidate.path)}">${escapeHtml(candidate.heading)}</a>`)
    .join(' ');
  const fallback = `<main class="seo-fallback"><h1>${escapeHtml(page.heading)}</h1><p>${description}</p><nav aria-label="Portfolio pages">${links}</nav></main>`;
  const structuredData = createStructuredData(page, { siteUrl, siteName });
  const jsonLd = JSON.stringify(structuredData).replace(/</g, '\\u003c');

  let html = template;
  html = replaceTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = setDescription(html, 'name="description"', description);
  html = replaceTag(html, /<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${escapedUrl}">`);
  html = replaceTag(html, /<meta property="og:type" content="[^"]*">/, `<meta property="og:type" content="${escapeHtml(page.kind)}">`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${title}">`);
  html = setDescription(html, 'property="og:description"', description);
  html = replaceTag(html, /<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escapedUrl}">`);
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*">/, `<meta name="twitter:title" content="${title}">`);
  html = setDescription(html, 'name="twitter:description"', description);
  html = replaceTag(html, /<app-root><\/app-root>/, `<app-root><noscript>${fallback}</noscript></app-root>`);
  html = replaceTag(html, /<\/head>/, `  <script id="${structuredDataId}" type="application/ld+json">${jsonLd}</script>\n</head>`);
  return html;
}

for (const page of pages) {
  if (!page.path.startsWith('/') || (page.path !== '/' && !page.path.endsWith('/'))) {
    throw new Error(`SEO paths must use root-relative directory URLs: ${page.path}`);
  }
  const directory = join(fileURLToPath(outputDirectory), page.path);
  await mkdir(directory, { recursive: true });
  await writeFile(join(directory, 'index.html'), renderPage(page));
}

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...pages.map(page => `  <url><loc>${escapeHtml(`${siteUrl}${page.path}`)}</loc></url>`),
  '</urlset>',
  ''
].join('\n');
await writeFile(new URL('sitemap.xml', outputDirectory), sitemap);
await writeFile(new URL('robots.txt', outputDirectory), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
await writeFile(new URL('.nojekyll', outputDirectory), '');
