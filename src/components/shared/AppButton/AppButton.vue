<template src="./AppButton.html"></template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, type RouteLocationRaw } from 'vue-router'

interface Props {
  label: string
  to?: RouteLocationRaw
  href?: string
  variant?: 'solid' | 'light' | 'ghost'
  size?: 'medium' | 'large'
  target?: string
  rel?: string
  showIcon?: boolean
  type?: 'button' | 'submit'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  size: 'medium',
  target: undefined,
  rel: undefined,
  showIcon: true,
  type: 'button',
})

const tagName = computed(() => {
  if (props.to) {
    return RouterLink
  }

  if (props.href) {
    return 'a'
  }

  return 'button'
})

const bindingProps = computed(() => {
  if (props.to) {
    return { to: props.to }
  }

  if (props.href) {
    return {
      href: props.href,
      target: props.target,
      rel: props.rel ?? (props.target === '_blank' ? 'noreferrer noopener' : undefined),
    }
  }

  return {
    type: props.type,
  }
})
</script>

<style scoped src="./AppButton.scss" lang="scss"></style>
