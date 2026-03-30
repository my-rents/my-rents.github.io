<template src="./SiteFooter.html"></template>

<script setup lang="ts">
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
</script>

<style scoped src="./SiteFooter.scss" lang="scss"></style>
