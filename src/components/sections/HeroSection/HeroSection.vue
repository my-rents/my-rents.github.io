<template src="./HeroSection.html"></template>

<script setup lang="ts">
import AppButton from '@/components/shared/AppButton/AppButton.vue'
import TrustBadge from '@/components/shared/TrustBadge/TrustBadge.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'
import storeAndroid from '@/assets/store_android.avif'
import storeIos from '@/assets/store_ios.avif'

const { content } = useSiteContent()
</script>

<style scoped src="./HeroSection.scss" lang="scss"></style>
