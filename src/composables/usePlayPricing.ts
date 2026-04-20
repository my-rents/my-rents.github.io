import { computed, onMounted, readonly, ref } from 'vue'

import { type SiteLocale } from '@/content/siteContent'
import { useLocale } from '@/composables/useLocale'
import {
  detectBrowserCountryCode,
  formatPlayPrice,
  getCountryDisplayName,
  getCountryOptions,
  getPlanPrice,
  isPlayPricingCatalog,
  resolveCountryCode,
  type PlayPricingCatalog,
} from '@/lib/playPricing'

const STORAGE_KEY = 'my-rents-pricing-country'

const catalog = ref<PlayPricingCatalog | null>(null)
const hasRequestedCatalog = ref(false)
const isLoadingCatalog = ref(false)
const selectedCountryCode = ref<string | null>(null)

const getStoredCountryCode = (): string | null => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return window.localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

const storeCountryCode = (countryCode: string) => {
  if (typeof window === 'undefined') {
    return
  }

  try {
    window.localStorage.setItem(STORAGE_KEY, countryCode)
  } catch {
    // Ignore storage failures and keep the in-memory selection.
  }
}

const applyCountrySelection = (nextCountryCode?: string | null, persistSelection = false) => {
  if (!catalog.value || catalog.value.plans.length === 0) {
    selectedCountryCode.value = null

    return
  }

  const resolvedCountryCode = resolveCountryCode(catalog.value, nextCountryCode)

  selectedCountryCode.value = resolvedCountryCode

  if (persistSelection && resolvedCountryCode) {
    storeCountryCode(resolvedCountryCode)
  }
}

const loadCatalog = async () => {
  if (hasRequestedCatalog.value || typeof window === 'undefined') {
    return
  }

  hasRequestedCatalog.value = true
  isLoadingCatalog.value = true

  try {
    const catalogUrl = new URL(
      `${import.meta.env.BASE_URL}pricing/play-subscriptions.json`,
      window.location.origin,
    )
    const response = await window.fetch(catalogUrl, {
      headers: {
        Accept: 'application/json',
      },
    })

    if (!response.ok) {
      return
    }

    const payload = (await response.json()) as unknown

    if (!isPlayPricingCatalog(payload)) {
      return
    }

    catalog.value = payload
    applyCountrySelection(getStoredCountryCode() ?? detectBrowserCountryCode())
  } catch {
    catalog.value = null
    selectedCountryCode.value = null
  } finally {
    isLoadingCatalog.value = false
  }
}

export const usePlayPricing = () => {
  const { locale } = useLocale()

  onMounted(() => {
    void loadCatalog()
  })

  const hasLivePricing = computed(() => {
    return Boolean(catalog.value && catalog.value.plans.length > 0)
  })

  const countryOptions = computed(() => {
    if (!catalog.value || catalog.value.plans.length === 0) {
      return []
    }

    return getCountryOptions(catalog.value, locale.value)
  })

  const selectedCountryName = computed(() => {
    if (!catalog.value || !selectedCountryCode.value) {
      return null
    }

    return getCountryDisplayName(selectedCountryCode.value, locale.value)
  })

  const getFormattedPriceForPlan = (planKey: Parameters<typeof getPlanPrice>[1]) => {
    if (!catalog.value || !selectedCountryCode.value) {
      return null
    }

    const planPrice = getPlanPrice(catalog.value, planKey, selectedCountryCode.value)

    if (!planPrice) {
      return null
    }

    return formatPlayPrice(planPrice, locale.value as SiteLocale)
  }

  const setSelectedCountryCode = (nextCountryCode: string) => {
    applyCountrySelection(nextCountryCode, true)
  }

  return {
    catalog: readonly(catalog),
    countryOptions,
    getFormattedPriceForPlan,
    hasLivePricing,
    isLoadingCatalog: readonly(isLoadingCatalog),
    selectedCountryCode: readonly(selectedCountryCode),
    selectedCountryName,
    setSelectedCountryCode,
  }
}
