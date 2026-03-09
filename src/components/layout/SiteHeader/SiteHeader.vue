<template src="./SiteHeader.html"></template>

<script setup lang="ts">
import AppButton from '@/components/shared/AppButton/AppButton.vue'
import SiteBrand from '@/components/shared/SiteBrand/SiteBrand.vue'
import { useSiteContent } from '@/composables/useSiteContent'

const { content } = useSiteContent()
</script>

<style scoped src="./SiteHeader.scss" lang="scss"></style>
