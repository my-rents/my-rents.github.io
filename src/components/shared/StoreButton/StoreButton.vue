<template src="./StoreButton.html"></template>

<script setup lang="ts">
interface Props {
  store: 'android' | 'ios'
  href: string
  label: string
}

defineProps<Props>()
</script>

<style scoped src="./StoreButton.scss" lang="scss"></style>
