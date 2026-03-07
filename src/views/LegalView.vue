<template src="./LegalView.html"></template>

<script setup lang="ts">
import { computed } from 'vue'

import AppButton from '@/components/shared/AppButton.vue'
import { legalPages } from '@/content/siteContent'

interface Props {
  pageKey: string
}

const props = defineProps<Props>()

const page = computed(() => legalPages[props.pageKey] ?? legalPages.terms)
</script>

<style scoped src="./LegalView.scss" lang="scss"></style>
