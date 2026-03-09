<template src="./ProcessSection.html"></template>

<script setup lang="ts">
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const { content } = useSiteContent()
</script>

<style scoped src="./ProcessSection.scss" lang="scss"></style>
