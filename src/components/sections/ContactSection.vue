<template src="./ContactSection.html"></template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

import SectionIntro from '@/components/shared/SectionIntro.vue'
import { contactOptions } from '@/content/siteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const form = reactive({
  name: '',
  email: '',
  date: '',
  service: '',
  budget: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  if (Object.values(form).some((value) => value.trim().length === 0)) {
    return
  }

  submitted.value = true

  form.name = ''
  form.email = ''
  form.date = ''
  form.service = ''
  form.budget = ''
  form.message = ''
}
</script>

<style scoped src="./ContactSection.scss" lang="scss"></style>
