import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { copyFile, mkdir, mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const run = promisify(execFile);
const repository = fileURLToPath(new URL('../', import.meta.url));

test('generates and checks SEO pages inside an actual directory containing spaces', async () => {
  const temporary = await mkdtemp(join(tmpdir(), 'portfolio-seo-paths-'));
  const fixture = join(temporary, 'portfolio audit with spaces');
  try {
    const files = [
      ['scripts/generate-seo-pages.mjs', 'scripts/generate-seo-pages.mjs'],
      ['scripts/check-seo-output.mjs', 'scripts/check-seo-output.mjs'],
      ['src/seo-pages.json', 'src/seo-pages.json'],
      ['src/seo-structured-data.mjs', 'src/seo-structured-data.mjs'],
      ['src/index.html', 'src/index.html'],
      ['src/index.html', 'docs/index.html'],
      ['src/404.html', 'docs/404.html']
    ];
    for (const [source, destination] of files) {
      const target = join(fixture, destination);
      await mkdir(dirname(target), { recursive: true });
      await copyFile(join(repository, source), target);
    }

    await run(process.execPath, [join(fixture, 'scripts/generate-seo-pages.mjs')], { cwd: fixture });
    const { pages } = JSON.parse(await readFile(join(fixture, 'src/seo-pages.json'), 'utf8'));
    for (const page of pages) {
      const html = await readFile(join(fixture, 'docs', page.path, 'index.html'), 'utf8');
      assert(html.includes(`<title>${page.title}</title>`), `Generated page missing from real output path: ${page.path}`);
    }
    assert.deepEqual(await readdir(temporary), ['portfolio audit with spaces'], 'No percent-encoded sibling directory should be created');
    const checked = await run(process.execPath, [join(fixture, 'scripts/check-seo-output.mjs')], { cwd: fixture });
    assert.match(checked.stdout, new RegExp(`Checked SEO output for ${pages.length} pages`));

    // A real missing page must fail verification, even after generation passed.
    await rm(join(fixture, 'docs/project/capstone/index.html'));
    await assert.rejects(run(process.execPath, [join(fixture, 'scripts/check-seo-output.mjs')], { cwd: fixture }));
  } finally {
    await rm(temporary, { recursive: true, force: true });
  }
});
