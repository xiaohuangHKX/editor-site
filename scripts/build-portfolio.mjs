import { copyFile, mkdir, rm } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');
await rm(dist, { recursive: true, force: true });
await mkdir(join(dist, 'server'), { recursive: true });
await mkdir(join(dist, '.openai', 'drizzle'), { recursive: true });
await copyFile(join(root, 'worker', 'index.js'), join(dist, 'server', 'index.js'));
await copyFile(join(root, '.openai', 'hosting.json'), join(dist, '.openai', 'hosting.json'));
await copyFile(join(root, 'drizzle', '0000_portfolio_items.sql'), join(dist, '.openai', 'drizzle', '0000_portfolio_items.sql'));
console.log('Built infinite exploration portfolio worker');
