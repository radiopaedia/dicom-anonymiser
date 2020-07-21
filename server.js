'use strict';
const PORT = 8080;
const HOST = '0.0.0.0'; // This is the docker host
const middleware = require('webpack-dev-middleware');
const fs = require('fs');
const compiler = require('webpack')(require('./webpack.config'));
const isObject = require('is-object');
const express = require('express');
const app = express();

function normalizeAssets(assets) {
  if (isObject(assets)) {
    return Object.values(assets);
  }

  return Array.isArray(assets) ? assets : [assets];
}


// This allows us to serve static files without having to define
// paths for everything.
app.use(
  middleware(compiler, {
    serverSideRender: true,
    writeToDisk: true,
  })
);
app.use('/docs', express.static('docs'))

// The following middleware would not be invoked until the latest build is finished.
app.use('/', (req, res) => {
  const index = fs.readFileSync('docs/index.html').toString()
  const markup = []
  const assets = res.locals.webpackStats.compilation.assets
  for (const asset of Object.keys(assets)) {
    if (asset.endsWith('.js')) {
      markup.push(`<script>${fs.readFileSync(assets[asset].existsAt)}</script>`)
    }
    if (asset.endsWith('.css')) {
      markup.push(`<style>${fs.readFileSync(assets[asset].existsAt)}</style>`)
    }
  }
  // Then use `assetsByChunkName` for server-side rendering
  // For example, if you have only one main chunk:
  res.send(index.replace(
    '<script type="text/javascript" src="./main.js"></script>',
    markup.join('\n')
  ));
});

app.use
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
