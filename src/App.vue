<template src="./App.html"></template>

<script setup lang="ts">
import { watchEffect } from 'vue'
import { useRoute } from 'vue-router'

import SiteFooter from '@/components/layout/SiteFooter/SiteFooter.vue'
import SiteHeader from '@/components/layout/SiteHeader/SiteHeader.vue'
import { getRouteTitle } from '@/content/siteContent'
import { useSiteContent } from '@/composables/useSiteContent'

const route = useRoute()
const { locale } = useSiteContent()

watchEffect(() => {
	document.documentElement.lang = locale.value === 'es' ? 'es-ES' : 'en'
	document.title = getRouteTitle(locale.value, route.name)
})
</script>

<style scoped src="./App.scss" lang="scss"></style>
