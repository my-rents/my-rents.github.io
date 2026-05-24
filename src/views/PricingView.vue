<template src="./PricingView.html"></template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'

import AccordionItem from '@/components/shared/AccordionItem/AccordionItem.vue'
import SectionIntro from '@/components/shared/SectionIntro/SectionIntro.vue'
import TrustBadge from '@/components/shared/TrustBadge/TrustBadge.vue'
import { useSiteContent } from '@/composables/useSiteContent'
import { useStaticPricing, type PlanKey } from '@/composables/useStaticPricing'
import { revealDirective as vReveal } from '@/directives/reveal'

const { content } = useSiteContent()
const { countryLabel, countryDetected, getPriceForPlan, isLoadingCountry, selectedCountryName } =
  useStaticPricing()

const faqOpenIndex = ref(0)

interface DisplayPricingPlan {
  key: string
  name: string
  summary: string
  priceHeading: string
  priceCaption: string
  isUnavailable: boolean
  isPopular: boolean
}

const displayPlans = computed<DisplayPricingPlan[]>(() => {
  return content.value.pricing.plans.map((plan) => {
    const isPopular = plan.key === 'annual'

    if (isLoadingCountry.value) {
      return {
        key: plan.key,
        name: plan.name,
        summary: plan.summary,
        priceHeading: content.value.pricing.livePricing.loadingLabel,
        priceCaption: '',
        isUnavailable: false,
        isPopular,
      }
    }

    const price = getPriceForPlan(plan.key as PlanKey)

    if (price) {
      return {
        key: plan.key,
        name: plan.name,
        summary: plan.summary,
        priceHeading: price,
        priceCaption: '',
        isUnavailable: false,
        isPopular,
      }
    }

    return {
      key: plan.key,
      name: plan.name,
      summary: plan.summary,
      priceHeading: content.value.pricing.livePricing.unavailableLabel,
      priceCaption: '',
      isUnavailable: true,
      isPopular,
    }
  })
})

const toggleFaq = (index: number) => {
  faqOpenIndex.value = faqOpenIndex.value === index ? -1 : index
}

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped src="./PricingView.scss" lang="scss"></style>
