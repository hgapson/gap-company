import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'
import { createServer } from 'vite'
const server = await createServer({server:{middlewareMode:true,hmr:false,ws:false},appType:'custom',optimizeDeps:{noDiscovery:true,include:[]}})
try {
 const { routes } = await server.ssrLoadModule('/src/seo.js')
 const titles = new Set()
 for (const route of routes) {
  const html = await readFile(resolve('dist','.'+route,'index.html'),'utf8')
  assert.equal((html.match(/<h1\b/g)||[]).length,1,route+' needs one rendered heading')
  assert(!html.includes('href="#/'),route+' contains a hash route')
  const title = html.match(/<title>(.*?)<\/title>/)[1]
  assert(!titles.has(title),'Duplicate title: '+title); titles.add(title)
  assert(html.includes('<meta name="description" content="'))
  for (const match of html.matchAll(/<a\b[^>]*href="(\/[^"]*)"/g)) {
   if (match[1].startsWith('/assets/')) continue
   const path = match[1].split('?')[0].replace(/\/$/,'')||'/'
   assert(routes.includes(path),`Broken page link ${path} in ${route}`)
  }
  for (const match of html.matchAll(/(?:src|href)="(\/(?:images|assets)\/[^"?]+|\/gap-tech-logo.png)"/g)) await access(resolve('dist','.'+match[1]))
  if (process.env.SITE_URL) {
   assert(html.includes('content="index, follow"'))
   assert(html.includes(`rel="canonical" href="${process.env.SITE_URL}${route==='/'?'/':route+'/'}`))
  } else {
   assert(html.includes('content="noindex, follow"'))
   assert(!html.includes('rel="canonical"'))
  }
 }
 const notFound=await readFile('dist/404.html','utf8'); assert(notFound.includes('noindex, follow'))
 if (process.env.SITE_URL) {
  const sitemap=await readFile('dist/sitemap.xml','utf8'); assert.equal((sitemap.match(/<loc>/g)||[]).length,routes.length)
 }
 console.log(`Passed: ${routes.length} rendered pages, unique titles, headings, internal links, assets, indexing policy and 404 metadata.`)
} finally { await server.close() }
