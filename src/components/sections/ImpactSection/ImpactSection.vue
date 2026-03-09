<template src="./ImpactSection.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

// Import images from src/assets/features
import img1 from '@/assets/features/main_EN.png'
import img2 from '@/assets/features/rent_EN.png'
import img3 from '@/assets/features/lease_EN.png'
import img4 from '@/assets/features/portfolio_info_EN.png'
import img5 from '@/assets/features/rents2_EN.png'
import img6 from '@/assets/features/taxes_EN.png'
import img7 from '@/assets/features/calendar_EN.png'
import img8 from '@/assets/features/contacts_list_EN.png'

const featureImages = [img1, img2, img3, img4, img5, img6, img7, img8]

const { content } = useSiteContent()
const featureItems = computed(() => {
  // Assign a different image to each feature item
  return content.value.impact.items.map((item, idx) => ({
    ...item,
    image: featureImages[idx % featureImages.length],
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
