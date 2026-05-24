<template src="./ForumView.html"></template>

<script setup lang="ts">
import { onMounted } from 'vue'

import AppButton from '@/components/shared/AppButton/AppButton.vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import TrustBadge from '@/components/shared/TrustBadge/TrustBadge.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const { content } = useSiteContent()

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped src="./ForumView.scss" lang="scss"></style>
