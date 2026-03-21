<template src="./ImpactSection.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

// Import images from src/assets/features

// Use import.meta.glob to map all feature images
const featureImageMap = import.meta.glob('@/assets/features/*.jpg', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const featureImageBaseNames = [
  { en: 'main', es: 'main' },
  { en: 'rent', es: 'rent' },
  { en: 'lease', es: 'lease' },
  { en: 'rent2', es: 'rent2' },
  { en: 'expense', es: 'expense' },
  { en: 'portfolio_info', es: 'portfolio_info' },
  { en: 'calendar', es: 'calendar' },
  { en: 'contacts_list', es: 'contacts_list' },
] as const

const getImageFromMap = (name: string, suffix: 'EN' | 'ES') => {
  const imagePath = `/src/assets/features/${name}_${suffix}.jpg`
  return featureImageMap[imagePath]
}

function getFeatureImage(idx: number, locale: string): string {
  const imageNames =
    featureImageBaseNames[idx % featureImageBaseNames.length] || featureImageBaseNames[0]
  const suffix = locale.toUpperCase() === 'ES' ? 'ES' : 'EN'
  const localizedName = suffix === 'ES' ? imageNames.es : imageNames.en

  const localizedImage = getImageFromMap(localizedName, suffix)
  if (localizedImage) {
    return localizedImage
  }

  return getImageFromMap(imageNames.en, 'EN') || ''
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
