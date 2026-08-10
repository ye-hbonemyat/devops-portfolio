import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
if (!existsSync(root))
  throw new Error('dist/ does not exist. Run npm run build first.');
const files = [];
const walk = (dir) => {
  readdirSync(dir).forEach((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else files.push(path);
  });
};
walk(root);
const errors = [];
for (const file of files.filter((path) => extname(path) === '.html')) {
  const html = readFileSync(file, 'utf8');
  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const url = decodeURIComponent(match[1]);
    if (url.startsWith('//')) continue;
    const target = url.endsWith('/')
      ? join(root, url, 'index.html')
      : join(root, url);
    const fallback = `${target}.html`;
    if (!existsSync(target) && !existsSync(fallback))
      errors.push(`${file.replace(`${root}/`, '')}: ${url}`);
  }
}
if (errors.length) {
  console.error(`Broken internal links:\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(
  `Checked ${files.filter((path) => extname(path) === '.html').length} HTML files: no broken internal links.`,
);
