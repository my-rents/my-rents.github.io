<template src="./CarouselControls.html"></template>

<script setup lang="ts">
interface Props {
  light?: boolean
}

withDefaults(defineProps<Props>(), {
  light: false,
})

const emit = defineEmits<{
  previous: []
  next: []
}>()
</script>

<style scoped src="./CarouselControls.scss" lang="scss"></style>
