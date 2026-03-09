<template src="./PricingSection.html"></template>

<script setup lang="ts">
import { computed } from 'vue'

import AppButton from '@/components/shared/AppButton/AppButton.vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const { content } = useSiteContent()

const pricingNotes = computed(() => [content.value.pricing.singleUser, content.value.pricing.companies])
</script>

<style scoped src="./PricingSection.scss" lang="scss"></style>
