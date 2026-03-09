<template src="./ImpactSection.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

// Import images from src/assets/features

// Use import.meta.glob to map all feature images
const featureImageMap = import.meta.glob('@/assets/features/*.png', {
  eager: true,
  as: 'url',
}) as Record<string, string>

function getFeatureImage(idx: number, locale: string): string {
  const baseNames = [
    'main',
    'rent',
    'lease',
    'portfolio_info',
    'rents2',
    'taxes',
    'calendar',
    'contacts_list',
  ]
  const code = locale.toUpperCase()
  const suffix = code === 'ES' ? 'ES' : 'EN'
  const name = baseNames[idx % baseNames.length]
  // Build the expected file path
  const relPath = `/src/assets/features/${name}_${suffix}.png`
  // Try to find the image in the map
  if (featureImageMap[relPath]) {
    return featureImageMap[relPath]
  }
  // Fallback to EN
  const fallbackPath = `/src/assets/features/${name}_EN.png`
  return featureImageMap[fallbackPath] || ''
}

const { content, locale } = useSiteContent()
const featureItems = computed(() => {
  return content.value.impact.items.map((item, idx) => ({
    ...item,
    image: getFeatureImage(idx, locale.value),
    imageAlt: item.imageAlt || item.title,
  }))
})
const activeFeatureIndex = ref(0)

watch(
  featureItems,
  (items) => {
    if (!items[activeFeatureIndex.value]) {
      activeFeatureIndex.value = 0
    }
  },
  { immediate: true },
)

const activeFeature = computed(
  () => featureItems.value[activeFeatureIndex.value] ?? featureItems.value[0],
)

const selectFeature = (index: number) => {
  activeFeatureIndex.value = index
}
</script>

<style scoped src="./ImpactSection.scss" lang="scss"></style>
