<template src="./SiteBrand.html"></template>

<script setup lang="ts">
import appIcon from '@/assets/icon.png'

const APP_ICON_WIDTH = 500
const APP_ICON_HEIGHT = 500

interface Props {
  label: string
}

defineProps<Props>()
</script>

<style scoped src="./SiteBrand.scss" lang="scss"></style>
