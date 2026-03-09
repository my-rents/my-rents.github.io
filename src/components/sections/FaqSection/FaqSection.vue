<template src="./FaqSection.html"></template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import AccordionItem from '@/components/shared/AccordionItem/AccordionItem.vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const { content } = useSiteContent()
const faqItems = computed(() => content.value.faq.items)
const openIndex = ref(0)

const toggleItem = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<style scoped src="./FaqSection.scss" lang="scss"></style>
