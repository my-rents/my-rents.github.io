<template>
  <span class="trust-badge" :class="{ 'trust-badge--light': light }">{{ label }}</span>
</template>

<script setup lang="ts">
interface Props {
  label: string
  light?: boolean
}

defineProps<Props>()
</script>

<style scoped lang="scss">
.trust-badge {
  color: var(--color-ink-muted);
  font-size: var(--text-small);
  font-weight: 600;

  &--light {
    color: var(--color-contrast-body);
  }
}
</style>
