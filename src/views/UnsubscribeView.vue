<template src="./UnsubscribeView.html"></template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import AppButton from '@/components/shared/AppButton/AppButton.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { unsubscribeFromMarketingEmails } from '@/services/marketingPreferences'

type UnsubscribeStatus =
  | 'idle'
  | 'submitting'
  | 'success'
  | 'invalidEmail'
  | 'unavailable'
  | 'error'

const { content } = useSiteContent()

const status = ref<UnsubscribeStatus>('idle')
const form = reactive({
  email: '',
})

const stateContent = computed(() => {
  if (status.value === 'idle') {
    return null
  }

  return content.value.unsubscribe.states[status.value]
})

const statusToneClass = computed(() => {
  if (status.value === 'success') {
    return 'unsubscribe-view__status--success'
  }

  return 'unsubscribe-view__status--default'
})

const handleSubmit = async () => {
  status.value = 'submitting'

  try {
    const result = await unsubscribeFromMarketingEmails(form.email)

    if (result === 'success') {
      status.value = 'success'
      return
    }

    if (result === 'invalidEmail') {
      status.value = 'invalidEmail'
      return
    }

    status.value = 'unavailable'
  } catch {
    status.value = 'error'
  }
}
</script>

<style scoped src="./UnsubscribeView.scss" lang="scss"></style>
