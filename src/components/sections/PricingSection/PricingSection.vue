<template src="./PricingSection.html"></template>

<script setup lang="ts">
import { computed } from 'vue'

import type { PricingPlan } from '@/content/siteContent'
import AppButton from '@/components/shared/AppButton/AppButton.vue'
import { usePlayPricing } from '@/composables/usePlayPricing'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { revealDirective as vReveal } from '@/directives/reveal'

const { content } = useSiteContent()
const {
  countryOptions,
  getFormattedPriceForPlan,
  hasLivePricing,
  selectedCountryCode,
  selectedCountryName,
  setSelectedCountryCode,
} = usePlayPricing()

const pricingIntroDescription = computed(() => {
  return hasLivePricing.value
    ? content.value.pricing.livePricing.introDescription
    : content.value.pricing.intro.description
})

const pricingMessageDescription = computed(() => {
  return hasLivePricing.value
    ? content.value.pricing.livePricing.messageDescription
    : content.value.pricing.message.description
})

const storePricingTitle = computed(() => {
  return hasLivePricing.value
    ? content.value.pricing.livePricing.storeTitle
    : content.value.pricing.storePricing.title
})

const storePricingDescription = computed(() => {
  return hasLivePricing.value
    ? content.value.pricing.livePricing.storeDescription
    : content.value.pricing.storePricing.description
})

const selectedCountryLabel = computed(() => {
  if (!selectedCountryName.value) {
    return ''
  }

  return content.value.pricing.livePricing.selectedCountryLabel.replace(
    '{country}',
    selectedCountryName.value,
  )
})

const pricingNotes = computed(() => [
  content.value.pricing.singleUser,
  content.value.pricing.companies,
])

interface DisplayPricingPlan extends PricingPlan {
  priceHeading: string
  priceCaption: string
  isUnavailable: boolean
}

const displayPlans = computed<DisplayPricingPlan[]>(() => {
  return content.value.pricing.plans.map((plan) => {
    if (!hasLivePricing.value) {
      return {
        ...plan,
        priceHeading: plan.detail,
        priceCaption: plan.subdetail,
        isUnavailable: false,
      }
    }

    const formattedPrice = getFormattedPriceForPlan(plan.key)

    if (formattedPrice) {
      return {
        ...plan,
        priceHeading: formattedPrice,
        priceCaption: selectedCountryLabel.value || plan.detail,
        isUnavailable: false,
      }
    }

    return {
      ...plan,
      priceHeading: content.value.pricing.livePricing.unavailableLabel,
      priceCaption: plan.detail,
      isUnavailable: true,
    }
  })
})

const handleCountryChange = (event: Event) => {
  const nextCountryCode = (event.target as HTMLSelectElement | null)?.value

  if (!nextCountryCode) {
    return
  }

  setSelectedCountryCode(nextCountryCode)
}
</script>

<style scoped src="./PricingSection.scss" lang="scss"></style>
