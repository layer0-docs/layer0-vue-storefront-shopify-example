// This file was added by layer0 init.
// You should commit this file to source control.

import { Router } from '@layer0/core/router'
import { CacheOptions } from '@layer0/core/router/CacheOptions'
import { nuxtRoutes, renderNuxtPage } from '@layer0/nuxt'

const HTML: CacheOptions = {
  edge: {
    maxAgeSeconds: 60 * 60 * 24,
    staleWhileRevalidateSeconds: 60 * 60 * 24,
    forcePrivateCaching: true,
  },
  browser: false,
}

export default new Router()
  .match('/service-worker.js', ({ serviceWorker }) => {
    serviceWorker('.nuxt/dist/client/service-worker.js')
  })
  .use(nuxtRoutes)
  .fallback(renderNuxtPage)
