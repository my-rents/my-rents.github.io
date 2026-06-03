import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

function shouldServePortalHtml(url: string | undefined): boolean {
  if (!url) {
    return false
  }

  const pathname = url.split('?')[0]

  if (!pathname.startsWith('/portal/demo')) {
    return false
  }

  const portalSubpath = pathname.slice('/portal/demo'.length)

  if (portalSubpath === '' || portalSubpath === '/') {
    return true
  }

  return portalSubpath.length > 0 && !portalSubpath.includes('.')
}

function portalRouteFallbackPlugin(): Plugin {
  const portalSourceHtmlPath = resolve(__dirname, 'portal/index.html')
  const portalBuiltHtmlPath = resolve(__dirname, 'dist/portal/index.html')

  return {
    name: 'portal-route-fallback',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'GET' || !shouldServePortalHtml(req.url)) {
          next()
          return
        }

        const template = await readFile(portalSourceHtmlPath, 'utf8')
        const html = await server.transformIndexHtml(req.url ?? '/portal/', template)
        res.setHeader('Content-Type', 'text/html')
        res.end(html)
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.method !== 'GET' || !shouldServePortalHtml(req.url)) {
          next()
          return
        }

        const html = await readFile(portalBuiltHtmlPath, 'utf8')
        res.setHeader('Content-Type', 'text/html')
        res.end(html)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        pricing: resolve(__dirname, 'pricing/index.html'),
        switch: resolve(__dirname, 'switch/index.html'),
        howToStart: resolve(__dirname, 'how-to-start/index.html'),
        forum: resolve(__dirname, 'forum/index.html'),
        portal: resolve(__dirname, 'portal/index.html'),
        privacy: resolve(__dirname, 'privacy-policy/index.html'),
        terms: resolve(__dirname, 'terms-of-service/index.html'),
        eula: resolve(__dirname, 'eula/index.html'),
        dataDeletion: resolve(__dirname, 'data-deletion/index.html'),
        unsubscribe: resolve(__dirname, 'unsubscribe/index.html'),
      },
    },
  },
  plugins: [vue(), react(), portalRouteFallbackPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
