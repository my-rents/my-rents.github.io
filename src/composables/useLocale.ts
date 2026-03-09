import { readonly, ref } from 'vue'

import { defaultLocale, type SiteLocale } from '@/content/siteContent'

const STORAGE_KEY = 'my-rents-locale'
let hasHydratedLocale = false

const normalizeLocale = (value: string | null | undefined): SiteLocale | null => {
  if (!value) {
    return null
  }

  const normalizedValue = value.toLowerCase()

  if (normalizedValue.startsWith('es')) {
    return 'es'
  }

  if (normalizedValue.startsWith('en')) {
    return 'en'
  }

  return null
}

const detectBrowserLocale = (): SiteLocale => {
  if (typeof navigator === 'undefined') {
    return defaultLocale
  }

  const candidates = navigator.languages.length > 0 ? navigator.languages : [navigator.language]

  for (const candidate of candidates) {
    const locale = normalizeLocale(candidate)

    if (locale) {
      return locale
    }
  }

  return defaultLocale
}

const getStoredLocale = (): SiteLocale | null => {
  if (typeof window === 'undefined') {
    return null
  }

  try {
    return normalizeLocale(window.localStorage.getItem(STORAGE_KEY))
  } catch {
    return null
  }
}

const locale = ref<SiteLocale>(defaultLocale)

const hydrateLocale = () => {
  const storedLocale = getStoredLocale()

  if (storedLocale) {
    locale.value = storedLocale
    hasHydratedLocale = true

    return
  }

  if (!hasHydratedLocale) {
    locale.value = detectBrowserLocale()
    hasHydratedLocale = true
  }
}

const setLocale = (nextLocale: SiteLocale) => {
  locale.value = nextLocale

  if (typeof window !== 'undefined') {
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale)
    } catch {
      // Ignore storage failures and keep the in-memory locale.
    }
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('languagechange', () => {
    if (getStoredLocale()) {
      return
    }

    locale.value = detectBrowserLocale()
  })
}

export const useLocale = () => {
  hydrateLocale()

  return {
    locale: readonly(locale),
    setLocale,
  }
}
