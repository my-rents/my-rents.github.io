<template src="./ImpactSection.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

// Import images from src/assets/features

const featureImageMap = import.meta.glob('@/assets/features/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const FEATURE_IMAGE_WIDTH = 1080
const FEATURE_IMAGE_HEIGHT = 2400

const featureImageBaseNames = [
  'main',
  'rent',
  'lease',
  'rent2',
  'expense',
  'portfolio_info',
  'calendar',
  'contacts_list',
] as const

type SupportedLocale = 'DE' | 'EN' | 'ES' | 'FR' | 'IT' | 'PT'

function getFeatureImage(idx: number, locale: string): string {
  const baseName =
    featureImageBaseNames[idx % featureImageBaseNames.length] || featureImageBaseNames[0]
  const suffix = locale.toUpperCase() as SupportedLocale

  const localizedImage = featureImageMap[`/src/assets/features/${baseName}_${suffix}.png`]
  if (localizedImage) {
    return localizedImage
  }

  return featureImageMap[`/src/assets/features/${baseName}_EN.png`] || ''
}

const { content, locale } = useSiteContent()
const featureItems = computed(() => {
  return content.value.impact.items.map((item, idx) => ({
    ...item,
    image: getFeatureImage(idx, locale.value),
    imageAlt: item.imageAlt || item.title,
    imageWidth: FEATURE_IMAGE_WIDTH,
    imageHeight: FEATURE_IMAGE_HEIGHT,
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
