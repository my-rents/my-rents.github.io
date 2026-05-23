import { computed, readonly, ref, watch } from 'vue'

import type { StaticPricingData } from '@/lib/staticPricing'
import { getPricingForCountry } from '@/lib/staticPricing'
import { useIpGeolocation } from '@/composables/useIpGeolocation'

export type PlanKey = 'weekly' | 'monthly' | 'annual' | 'lifetime'

const selectedCountryName = ref<string | null>(null)
const selectedCountryCode = ref<string | null>(null)
const selectedPricingData = ref<StaticPricingData | null>(null)
const hasAppliedAutoDetection = ref(false)

export const useStaticPricing = () => {
  const { detectedCountry, isDetecting, detectionError } = useIpGeolocation()

  watch(
    [detectedCountry, detectionError],
    ([country, error]) => {
      if (hasAppliedAutoDetection.value) {
        return
      }

      if (country && !error) {
        const pricingData = getPricingForCountry(country.countryName)

        if (pricingData) {
          selectedCountryName.value = country.countryName
          selectedCountryCode.value = country.countryCode
          selectedPricingData.value = pricingData
          hasAppliedAutoDetection.value = true
        }
      }
    },
    { immediate: true },
  )

  const isLoadingCountry = computed(() => {
    return isDetecting.value && !hasAppliedAutoDetection.value
  })

  const countryDetected = computed(() => {
    return selectedCountryName.value !== null
  })

  const countryLabel = computed(() => {
    if (!selectedCountryName.value) {
      return ''
    }

    return `Showing prices for ${selectedCountryName.value}`
  })

  const getPriceForPlan = (planKey: PlanKey): string | null => {
    if (!selectedPricingData.value) {
      return null
    }

    const entry = selectedPricingData.value[planKey]

    return entry?.formatted ?? null
  }

  return {
    countryLabel: computed(() => countryLabel.value),
    countryDetected,
    getPriceForPlan,
    isLoadingCountry,
    selectedCountryName: readonly(selectedCountryName),
    selectedCountryCode: readonly(selectedCountryCode),
  }
}
