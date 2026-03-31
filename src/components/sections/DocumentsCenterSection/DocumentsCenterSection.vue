<template src="./DocumentsCenterSection.html"></template>

<script setup lang="ts">
import AppButton from '@/components/shared/AppButton/AppButton.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const portalDemoUrl = '/portal'

const { content } = useSiteContent()
</script>

<style scoped src="./DocumentsCenterSection.scss" lang="scss"></style>
