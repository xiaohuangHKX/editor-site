import { copyFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
const files = [
  ['index.html', 'index.html'],
  ['src/runtime.js', 'src/runtime.js'],
  ['src/index.css', 'src/index.css'],
  ['.openai/hosting.json', '.openai/hosting.json'],
];

await rm(dist, { recursive: true, force: true });
for (const [source, target] of files) {
  const output = join(dist, target);
  await mkdir(dirname(output), { recursive: true });
  await copyFile(join(root, source), output);
}

console.log('Built securify static site to dist');
