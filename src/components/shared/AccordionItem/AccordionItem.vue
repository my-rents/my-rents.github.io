<template src="./AccordionItem.html"></template>

<script setup lang="ts">
interface Props {
  question: string
  answer: string
  expanded: boolean
}

defineProps<Props>()

const emit = defineEmits<{
  toggle: []
}>()
</script>

<style scoped src="./AccordionItem.scss" lang="scss"></style>
