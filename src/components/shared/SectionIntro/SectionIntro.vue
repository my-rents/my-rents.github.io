<template src="./SectionIntro.html"></template>

<script setup lang="ts">
interface Props {
  eyebrow: string
  title?: string
  description?: string
  tone?: 'default' | 'light'
}

withDefaults(defineProps<Props>(), {
  title: undefined,
  description: undefined,
  tone: 'default',
})
</script>

<style scoped src="./SectionIntro.scss" lang="scss"></style>
