<template src="./BlogView.html"></template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import AppButton from '@/components/shared/AppButton/AppButton.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import type { BlogArticle } from '@/content/blogContent'

const route = useRoute()
const router = useRouter()
const { content } = useSiteContent()

const selectedSlug = ref<string | null>(null)

watch(
  () => route.query.article,
  (articleSlug) => {
    if (typeof articleSlug === 'string' && articleSlug.length > 0) {
      selectedSlug.value = articleSlug
    } else {
      selectedSlug.value = null
    }
  },
  { immediate: true },
)

const activeArticle = computed<BlogArticle | undefined>(() => {
  if (!selectedSlug.value) return undefined
  return content.value.blog.articles.find((a) => a.slug === selectedSlug.value)
})

const selectArticle = (slug: string) => {
  router.push({ name: 'blog', query: { article: slug } })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const clearArticle = () => {
  router.push({ name: 'blog' })
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<style scoped src="./BlogView.scss" lang="scss"></style>
