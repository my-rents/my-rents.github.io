<template src="./LegalView.html"></template>

<script setup lang="ts">
import { computed } from 'vue'

import AppButton from '@/components/shared/AppButton/AppButton.vue'
import type { LegalPageKey } from '@/content/siteContent'
import { useSiteContent } from '@/composables/useSiteContent'

interface Props {
  pageKey: LegalPageKey
}

const props = defineProps<Props>()
const { content } = useSiteContent()

const page = computed(
  () => content.value.legalPages[props.pageKey] ?? content.value.legalPages.terms,
)
</script>

<style scoped src="./LegalView.scss" lang="scss"></style>
