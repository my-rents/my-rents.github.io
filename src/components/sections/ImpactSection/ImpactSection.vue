<template src="./ImpactSection.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const { content } = useSiteContent()
const featureItems = computed(() => content.value.impact.items)
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
