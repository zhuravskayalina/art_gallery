/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 5173;

const isError = (err: unknown): err is Error => err instanceof Error;

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template = fs.readFileSync(path.resolve(dirname, 'index.html'), 'utf-8');
      template = await vite.transformIndexHtml(url, template);

      const parts = template.split('not rendered');

      const { render } = await vite.ssrLoadModule('/src/ServerApp.tsx');

      res.write(parts[0]);

      const { pipe } = await render(url, {
        onShellReady() {
          pipe(res);
        },
        onShellError(error: Error) {
          console.error(`Something went wrong: ${error}`);
        },
        onAllReady() {
          res.write(parts[1]);
          res.end();
        },
        onError(error: Error) {
          console.error(`Something went wrong: ${error}`);
        },
      });
    } catch (e) {
      if (isError(e)) {
        vite.ssrFixStacktrace(e);
        next(e);
      }
    }
  });
  app.listen(PORT);
}

createServer();

console.log(`listening on http://localhost:${PORT}/`);
