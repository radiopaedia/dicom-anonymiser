import * as esbuild from 'esbuild'

const PORT = process.env['PORT'] || 8080
const HOST = process.env['HOST']

let buildContext = await esbuild.context({
  entryPoints: ['lib/browser.js'],
  outfile: 'docs/main.js',
  bundle: true,
  sourcemap: true,
})

await buildContext.serve({
  servedir: 'docs',
  host: HOST,
  port: PORT,
})

console.log(`Running on http://${HOST || '0.0.0.0'}:${PORT}`);
