import { build, createServer, loadEnv } from 'vite'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import React from 'react'
import { renderToString } from 'react-dom/server'

const env = { ...loadEnv('production', process.cwd(), ''), ...process.env }
const origin = env.SITE_URL?.replace(/\/$/, '')
if (origin) {
 const url = new URL(origin)
 if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash) throw new Error('SITE_URL must be an HTTPS origin, without a path, query or fragment.')
}
const escape = text => text.replaceAll('&','&amp;').replaceAll('"','&quot;').replaceAll('<','&lt;').replaceAll('>','&gt;')
await build()
const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom', optimizeDeps: { noDiscovery: true, include: [] } })
try {
 const { default: App } = await server.ssrLoadModule('/src/main.jsx')
 const { routes, getMetadata } = await server.ssrLoadModule('/src/seo.js')
 const template = await readFile('dist/index.html', 'utf8')
 for (const route of [...routes, '/404']) {
  const meta = getMetadata(route)
  const pageUrl = origin ? origin + (route === '/' ? '/' : route + '/') : null
  const indexable = !!origin && meta.known
  const head = [
   `<meta name="robots" content="${indexable ? 'index, follow' : 'noindex, follow'}">`,
   `<meta property="og:type" content="website">`,
   `<meta property="og:site_name" content="GAP TECH">`,
   `<meta property="og:title" content="${escape(meta.title)}">`,
   `<meta property="og:description" content="${escape(meta.description)}">`,
   `<meta name="twitter:card" content="summary">`,
   ...(pageUrl && meta.known ? [`<link rel="canonical" href="${escape(pageUrl)}">`, `<meta property="og:url" content="${escape(pageUrl)}">`, `<script type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@type':'Organization',name:'GAP TECH',url:origin,logo:origin+'/gap-tech-logo.png',email:'hgapson@gmail.com'}).replaceAll('<','\\u003c')}</script>`] : []),
  ].join('\n    ')
  const markup = renderToString(React.createElement(App, { initialRoute: route }))
  const html = template.replace(/<title>.*?<\/title>/, `<title>${escape(meta.title)}</title>`).replace(/<meta name="description" content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escape(meta.description)}">`).replace('</head>', `${head}\n  </head>`).replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
  const filename = route === '/404' ? resolve('dist/404.html') : resolve('dist', '.' + route, 'index.html')
  await mkdir(resolve(filename, '..'), { recursive: true })
  await writeFile(filename, html)
 }
 await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`)
 if (origin) await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${escape(origin + (route === '/' ? '/' : route + '/'))}</loc></url>`).join('')}</urlset>`)
 console.log(`Generated ${routes.length} pages and a 404 page. ${origin ? 'Production SEO enabled for ' + origin : 'Development build: noindex; set SITE_URL when ready to launch.'}`)
} finally { await server.close() }
