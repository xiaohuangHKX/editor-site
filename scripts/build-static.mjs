import { copyFile, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

const files = [
  ['index.html', 'index.html'],
  ['src/site.js', 'src/site.js'],
  ['src/styles/global.css', 'src/styles/global.css'],
  ['assets/aroma-speaker.glb', 'assets/aroma-speaker.glb'],
  ['.openai/hosting.json', '.openai/hosting.json']
];

await rm(dist, { recursive: true, force: true });

for (const [source, target] of files) {
  const output = join(dist, target);
  await mkdir(dirname(output), { recursive: true });
  await copyFile(join(root, source), output);
}

const html = await readFile(join(root, 'index.html'), 'utf8');
const js = await readFile(join(root, 'src/site.js'), 'utf8');
const css = await readFile(join(root, 'src/styles/global.css'), 'utf8');
const model = await readFile(join(root, 'assets/aroma-speaker.glb'));

const worker = `const assets = {
  '/index.html': {
    contentType: 'text/html; charset=utf-8',
    body: ${JSON.stringify(html)}
  },
  '/src/site.js': {
    contentType: 'application/javascript; charset=utf-8',
    body: ${JSON.stringify(js)}
  },
  '/src/styles/global.css': {
    contentType: 'text/css; charset=utf-8',
    body: ${JSON.stringify(css)}
  }
};

const binaryAssets = {
  '/assets/aroma-speaker.glb': {
    contentType: 'model/gltf-binary',
    byteLength: ${model.length},
    bodyBase64: ${JSON.stringify(model.toString('base64'))}
  }
};

const binaryCache = new Map();

function responseFor(pathname) {
  if (pathname === '/') {
    return assets['/index.html'];
  }

  return assets[pathname] || assets['/index.html'];
}

function decodeBase64(base64) {
  const raw = atob(base64);
  const bytes = new Uint8Array(raw.length);

  for (let index = 0; index < raw.length; index += 1) {
    bytes[index] = raw.charCodeAt(index);
  }

  return bytes;
}

function binaryResponseFor(pathname, method) {
  const asset = binaryAssets[pathname];

  if (!asset) {
    return null;
  }

  const headers = {
    'content-type': asset.contentType,
    'cache-control': 'public, max-age=31536000, immutable',
    'content-length': String(asset.byteLength)
  };

  if (method === 'HEAD') {
    return new Response(null, { headers });
  }

  let body = binaryCache.get(pathname);

  if (!body) {
    body = decodeBase64(asset.bodyBase64);
    binaryCache.set(pathname, body);
  }

  return new Response(body, { headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const binaryAsset = binaryResponseFor(url.pathname, request.method);

    if (binaryAsset) {
      return binaryAsset;
    }

    if (url.pathname.startsWith('/assets/')) {
      if (env?.ASSETS) {
        return env.ASSETS.fetch(request);
      }

      return new Response('Asset unavailable', { status: 404 });
    }

    const asset = responseFor(url.pathname);

    return new Response(asset.body, {
      headers: {
        'content-type': asset.contentType,
        'cache-control': asset.contentType.startsWith('text/html')
          ? 'no-cache'
          : 'public, max-age=31536000, immutable'
      }
    });
  }
};
`;

await mkdir(join(dist, 'server'), { recursive: true });
await writeFile(join(dist, 'server/index.js'), worker);

console.log(`Built static site to ${dist}`);
