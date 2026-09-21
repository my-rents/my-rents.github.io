<template>
  <div class="app-shell">
    <SiteHeader />

    <div class="app-shell__content">
      <RouterView />
    </div>

    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import SiteFooter from '@/components/layout/SiteFooter/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader/SiteHeader.vue'
import { getRouteTitle, type SiteLocale } from '@/content/siteContent'
import { useSiteContent } from '@/composables/useSiteContent'

const route = useRoute()
const { locale } = useSiteContent()

const documentLanguageByLocale: Record<SiteLocale, string> = {
  en: 'en',
  es: 'es-ES',
  de: 'de',
  fr: 'fr',
  it: 'it',
  pt: 'pt-PT',
  nl: 'nl',
}

watchEffect(() => {
  document.documentElement.lang = documentLanguageByLocale[locale.value]
  document.title = getRouteTitle(locale.value, route.name)

  let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!canonicalEl) {
    canonicalEl = document.createElement('link')
    canonicalEl.setAttribute('rel', 'canonical')
    document.head.appendChild(canonicalEl)
  }
  const cleanPath = route.path === '/' ? '/' : `${route.path.replace(/\/+$/, '')}/`
  canonicalEl.setAttribute('href', `https://myrents-app.com${cleanPath}`)
})
</script>

<style scoped src="./App.scss" lang="scss"></style>
