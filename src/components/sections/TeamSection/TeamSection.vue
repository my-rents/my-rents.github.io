<template src="./TeamSection.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import companyImage from '@/assets/users/company.jpg'
import landlordImage from '@/assets/users/landlord.jpg'
import portfolioOwnerImage from '@/assets/users/portfolio_owner.jpg'
import propertyManagerImage from '@/assets/users/property_manager.jpg'
import { useViewport } from '@/composables/useViewport'
import CarouselControls from '@/components/shared/CarouselControls/CarouselControls.vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const DEFAULT_TEAM_IMAGE_DIMENSIONS = {
  width: 1248,
  height: 832,
}

const teamImageDimensionsBySource: Record<string, { width: number; height: number }> = {
  [landlordImage]: { width: 1248, height: 832 },
  [portfolioOwnerImage]: { width: 1248, height: 832 },
  [propertyManagerImage]: { width: 1248, height: 832 },
  [companyImage]: { width: 1360, height: 768 },
}

const { isMobile } = useViewport()
const { content } = useSiteContent()
const teamMembers = computed(() => content.value.team.members)
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

const getTeamImageDimensions = (imageSource: string) => {
  return teamImageDimensionsBySource[imageSource] ?? DEFAULT_TEAM_IMAGE_DIMENSIONS
}
</script>

<style scoped src="./TeamSection.scss" lang="scss"></style>
