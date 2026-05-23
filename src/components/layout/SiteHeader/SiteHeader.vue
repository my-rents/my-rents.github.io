<template src="./SiteHeader.html"></template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

import SiteBrand from '@/components/shared/SiteBrand/SiteBrand.vue'
import { useSiteContent } from '@/composables/useSiteContent'

const { content } = useSiteContent()

const navLinkTo = (hash: string): RouteLocationRaw => {
  if (hash.startsWith('/')) {
    const hashIndex = hash.indexOf('#')

    if (hashIndex !== -1) {
      return {
        path: hash.slice(0, hashIndex),
        hash: hash.slice(hashIndex),
      }
    }

    return { path: hash }
  }

  return { name: 'home', hash }
}
</script>

<style scoped src="./SiteHeader.scss" lang="scss"></style>
