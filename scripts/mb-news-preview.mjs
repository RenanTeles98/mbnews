import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(fileURLToPath(new URL('..', import.meta.url)));
const publicRoot = resolve(projectRoot, 'public');
const rootIndex = resolve(projectRoot, 'index.html');
const port = Number(process.env.MB_NEWS_PREVIEW_PORT || 8080);

const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.jpeg', 'image/jpeg'],
  ['.jpg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.mp4', 'video/mp4'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
  ['.woff', 'font/woff'],
  ['.woff2', 'font/woff2'],
]);

function getFilePath(pathname) {
  if (pathname === '/' || pathname === '/index.html') return rootIndex;

  const decodedPath = decodeURIComponent(pathname).replace(/^[/\\]+/, '');
  const filePath = resolve(publicRoot, decodedPath);
  if (filePath !== publicRoot && !filePath.startsWith(`${publicRoot}${sep}`)) return null;
  return filePath;
}

const server = createServer(async (request, response) => {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end();
    return;
  }

  let pathname;
  try {
    pathname = new URL(request.url || '/', 'http://localhost').pathname;
  } catch {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }

  let filePath;
  try {
    filePath = getFilePath(pathname);
  } catch {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }

  if (!filePath) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  try {
    const file = await readFile(filePath);
    response.writeHead(200, {
      'Cache-Control': 'no-store',
      'Content-Length': file.length,
      'Content-Type': contentTypes.get(extname(filePath).toLowerCase()) || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(request.method === 'HEAD' ? undefined : file);
  } catch (error) {
    if (error.code === 'ENOENT' || error.code === 'EISDIR') {
      response.writeHead(404);
      response.end('Not found');
      return;
    }

    response.writeHead(500);
    response.end('Preview server error');
  }
});

server.listen(port, '127.0.0.1', () => {
  console.log(`MB News local preview: http://localhost:${port}/index.html`);
});
