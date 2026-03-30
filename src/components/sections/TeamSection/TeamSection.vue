<template src="./TeamSection.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { useViewport } from '@/composables/useViewport'
import CarouselControls from '@/components/shared/CarouselControls/CarouselControls.vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const DEFAULT_TEAM_IMAGE_DIMENSIONS = {
  width: 1248,
  height: 832,
}

const { isMobile } = useViewport()
const { content } = useSiteContent()
const teamMembers = computed(() => content.value.team?.members ?? [])
const teamIntro = computed(() => {
  const intro = content.value.team?.intro
  return {
    eyebrow: intro?.eyebrow ?? '',
    title: intro?.title ?? '',
    description: intro?.description ?? '',
  }
})
const cardsPerView = computed(() => (isMobile.value ? 1 : 2))
const currentIndex = ref(0)
const maxIndex = computed(() => Math.max(teamMembers.value.length - cardsPerView.value, 0))

watch([cardsPerView, teamMembers], ([value, items]) => {
  currentIndex.value = Math.min(currentIndex.value, Math.max(items.length - value, 0))
})

const next = () => {
  currentIndex.value = currentIndex.value >= maxIndex.value ? 0 : currentIndex.value + 1
}

const previous = () => {
  currentIndex.value = currentIndex.value <= 0 ? maxIndex.value : currentIndex.value - 1
}

const carouselStyle = computed(() => ({
  '--cards-per-view': String(cardsPerView.value),
  '--current-index': String(currentIndex.value),
}))

const getTeamImageDimensions = () => DEFAULT_TEAM_IMAGE_DIMENSIONS
</script>

<style scoped src="./TeamSection.scss" lang="scss"></style>
