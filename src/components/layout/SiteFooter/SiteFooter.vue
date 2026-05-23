<template src="./SiteFooter.html"></template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

import SiteBrand from '@/components/shared/SiteBrand/SiteBrand.vue'
import { type SiteLocale } from '@/content/siteContent'
import { useLocale } from '@/composables/useLocale'
import { useSiteContent } from '@/composables/useSiteContent'

const { locale, setLocale } = useLocale()
const { content } = useSiteContent()

const handleLocaleChange = (event: Event) => {
  const target = event.target

  if (!(target instanceof HTMLSelectElement)) {
    return
  }

  setLocale(target.value as SiteLocale)
}

const navLinkTo = (hash: string): RouteLocationRaw => {
  if (hash.startsWith('/')) {
    const hashIndex = hash.indexOf('#')

    if (hashIndex !== -1) {
      return {
        path: hash.slice(0, hashIndex),
        hash: hash.slice(hashIndex),
      }
    }

    return { path: hash }
  }

  return { name: 'home', hash }
}
</script>

<style scoped src="./SiteFooter.scss" lang="scss"></style>
