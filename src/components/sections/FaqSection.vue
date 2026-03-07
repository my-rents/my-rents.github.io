<template src="./FaqSection.html"></template>

<script setup lang="ts">
import { ref } from 'vue'

import AccordionItem from '@/components/shared/AccordionItem.vue'
import SectionIntro from '@/components/shared/SectionIntro.vue'
import { faqItems } from '@/content/siteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const openIndex = ref(0)

const toggleItem = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<style scoped src="./FaqSection.scss" lang="scss"></style>
