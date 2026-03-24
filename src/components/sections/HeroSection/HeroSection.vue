<template src="./HeroSection.html"></template>

<script setup lang="ts">
import AppButton from '@/components/shared/AppButton/AppButton.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const HERO_SNAPSHOT_WIDTH = 1080
const HERO_SNAPSHOT_HEIGHT = 2400

const { content } = useSiteContent()
</script>

<style scoped src="./HeroSection.scss" lang="scss"></style>
