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
})
</script>

<style scoped src="./App.scss" lang="scss"></style>
