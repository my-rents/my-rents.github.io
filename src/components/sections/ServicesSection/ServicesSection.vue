<template src="./ServicesSection.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import { useViewport } from '@/composables/useViewport'
import CarouselControls from '@/components/shared/CarouselControls/CarouselControls.vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const { isMobile } = useViewport()
const { content } = useSiteContent()
const serviceItems = computed(() => content.value.services.items)
const cardsPerView = computed(() => (isMobile.value ? 1 : 2))
const currentIndex = ref(0)
const maxIndex = computed(() => Math.max(serviceItems.value.length - cardsPerView.value, 0))

watch([cardsPerView, serviceItems], ([value, items]) => {
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
</script>

<style scoped src="./ServicesSection.scss" lang="scss"></style>
