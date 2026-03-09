<template src="./CarouselControls.html"></template>

<script setup lang="ts">
interface Props {
  light?: boolean
  previousLabel?: string
  nextLabel?: string
}

withDefaults(defineProps<Props>(), {
  light: false,
  previousLabel: 'Previous',
  nextLabel: 'Next',
})

const emit = defineEmits<{
  previous: []
  next: []
}>()
</script>

<style scoped src="./CarouselControls.scss" lang="scss"></style>
