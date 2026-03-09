<template src="./ContactSection.html"></template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import AppButton from '@/components/shared/AppButton/AppButton.vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const { content } = useSiteContent()

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const submitted = ref(false)

const resetForm = () => {
  form.name = ''
  form.email = ''
  form.message = ''
}

const handleSubmit = () => {
  if (Object.values(form).some((value) => value.trim().length === 0)) {
    return
  }

  const subject = `[My Rents] Website contact from ${form.name}`
  const body = [
    `${content.value.contact.form.nameLabel}: ${form.name}`,
    `${content.value.contact.form.emailLabel}: ${form.email}`,
    '',
    form.message,
  ].join('\n')

  if (typeof window !== 'undefined') {
    const params = new URLSearchParams({
      subject,
      body,
    })

    window.location.href = `mailto:${content.value.contact.emailAddress}?${params.toString()}`
  }

  submitted.value = true
  resetForm()
}
</script>

<style scoped src="./ContactSection.scss" lang="scss"></style>
