<template src="./SiteFooter.html"></template>

<script setup lang="ts">
import SiteBrand from '@/components/shared/SiteBrand/SiteBrand.vue'
import { useLocale } from '@/composables/useLocale'
import { useSiteContent } from '@/composables/useSiteContent'

const { locale, setLocale } = useLocale()
const { content } = useSiteContent()
</script>

<style scoped src="./SiteFooter.scss" lang="scss"></style>
