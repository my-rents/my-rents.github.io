import type { PricingPlanKey, SiteLocale } from '@/content/siteContent'

export interface PlayPricingAmount {
  currencyCode: string
  units: string
  nanos: number
}

export interface PlayPricingPlan {
  key: PricingPlanKey
  productId: string
  basePlanId: string
  billingPeriod: string
  regionalPrices: Record<string, PlayPricingAmount>
}

export interface PlayPricingCatalog {
  generatedAt: string
  packageName: string
  source: 'google-play'
  defaultCountryCode: string
  plans: PlayPricingPlan[]
}

export interface CountryOption {
  code: string
  name: string
}

const COUNTRY_CODE_PATTERN = /^[A-Z]{2}$/

export const normalizeCountryCode = (value: string | null | undefined): string | null => {
  if (!value) {
    return null
  }

  const normalizedValue = value.trim().toUpperCase()

  return COUNTRY_CODE_PATTERN.test(normalizedValue) ? normalizedValue : null
}

const isPricingAmount = (value: unknown): value is PlayPricingAmount => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as Record<string, unknown>

  return (
    typeof candidate.currencyCode === 'string' &&
    typeof candidate.units === 'string' &&
    typeof candidate.nanos === 'number'
  )
}

const isPricingPlan = (value: unknown): value is PlayPricingPlan => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as Record<string, unknown>
  const regionalPrices = candidate.regionalPrices

  if (
    typeof candidate.key !== 'string' ||
    typeof candidate.productId !== 'string' ||
    typeof candidate.basePlanId !== 'string' ||
    typeof candidate.billingPeriod !== 'string' ||
    !regionalPrices ||
    typeof regionalPrices !== 'object'
  ) {
    return false
  }

  return Object.entries(regionalPrices).every(([countryCode, amount]) => {
    return normalizeCountryCode(countryCode) !== null && isPricingAmount(amount)
  })
}

export const isPlayPricingCatalog = (value: unknown): value is PlayPricingCatalog => {
  if (!value || typeof value !== 'object') {
    return false
  }

  const candidate = value as Record<string, unknown>

  return (
    typeof candidate.generatedAt === 'string' &&
    typeof candidate.packageName === 'string' &&
    candidate.source === 'google-play' &&
    typeof candidate.defaultCountryCode === 'string' &&
    Array.isArray(candidate.plans) &&
    candidate.plans.every(isPricingPlan)
  )
}

const extractCountryCodeFromLocale = (value: string | null | undefined): string | null => {
  if (!value) {
    return null
  }

  const parts = value
    .split(/[-_]/)
    .map((part) => part.trim())
    .filter(Boolean)

  for (const part of parts.slice(1)) {
    const countryCode = normalizeCountryCode(part)

    if (countryCode) {
      return countryCode
    }
  }

  return null
}

export const detectBrowserCountryCode = (): string | null => {
  if (typeof navigator === 'undefined') {
    return null
  }

  const candidates = navigator.languages.length > 0 ? navigator.languages : [navigator.language]

  for (const candidate of candidates) {
    const countryCode = extractCountryCodeFromLocale(candidate)

    if (countryCode) {
      return countryCode
    }
  }

  const resolvedLocale = Intl.DateTimeFormat().resolvedOptions().locale

  return extractCountryCodeFromLocale(resolvedLocale)
}

export const getAvailableCountryCodes = (catalog: PlayPricingCatalog): string[] => {
  const countryCodes = new Set<string>()

  for (const plan of catalog.plans) {
    for (const countryCode of Object.keys(plan.regionalPrices)) {
      const normalizedCountryCode = normalizeCountryCode(countryCode)

      if (normalizedCountryCode) {
        countryCodes.add(normalizedCountryCode)
      }
    }
  }

  return [...countryCodes].sort((left, right) => left.localeCompare(right))
}

export const resolveCountryCode = (
  catalog: PlayPricingCatalog,
  requestedCountryCode: string | null | undefined,
): string | null => {
  const availableCountryCodes = getAvailableCountryCodes(catalog)

  if (availableCountryCodes.length === 0) {
    return null
  }

  const normalizedRequestedCountryCode = normalizeCountryCode(requestedCountryCode)

  if (
    normalizedRequestedCountryCode &&
    availableCountryCodes.includes(normalizedRequestedCountryCode)
  ) {
    return normalizedRequestedCountryCode
  }

  const normalizedDefaultCountryCode = normalizeCountryCode(catalog.defaultCountryCode)

  if (
    normalizedDefaultCountryCode &&
    availableCountryCodes.includes(normalizedDefaultCountryCode)
  ) {
    return normalizedDefaultCountryCode
  }

  return availableCountryCodes[0] ?? null
}

export const getCountryDisplayName = (countryCode: string, locale: SiteLocale): string => {
  const normalizedCountryCode = normalizeCountryCode(countryCode)

  if (!normalizedCountryCode) {
    return countryCode
  }

  if ('DisplayNames' in Intl) {
    const displayNames = new Intl.DisplayNames([locale], { type: 'region' })

    return displayNames.of(normalizedCountryCode) ?? normalizedCountryCode
  }

  return normalizedCountryCode
}

export const getCountryOptions = (
  catalog: PlayPricingCatalog,
  locale: SiteLocale,
): CountryOption[] => {
  return getAvailableCountryCodes(catalog)
    .map((countryCode) => ({
      code: countryCode,
      name: getCountryDisplayName(countryCode, locale),
    }))
    .sort((left, right) => left.name.localeCompare(right.name, locale))
}

export const getPlanPrice = (
  catalog: PlayPricingCatalog,
  planKey: PricingPlanKey,
  countryCode: string | null | undefined,
): PlayPricingAmount | null => {
  const resolvedCountryCode = normalizeCountryCode(countryCode)

  if (!resolvedCountryCode) {
    return null
  }

  const matchingPlan = catalog.plans.find((plan) => plan.key === planKey)

  return matchingPlan?.regionalPrices[resolvedCountryCode] ?? null
}

const toCurrencyNumber = (amount: PlayPricingAmount): number | null => {
  const units = Number(amount.units)
  const nanos = Number(amount.nanos)

  if (!Number.isFinite(units) || !Number.isFinite(nanos)) {
    return null
  }

  return units + nanos / 1_000_000_000
}

export const formatPlayPrice = (amount: PlayPricingAmount, locale: SiteLocale): string | null => {
  const numericAmount = toCurrencyNumber(amount)

  if (numericAmount === null) {
    return null
  }

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: amount.currencyCode,
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 2,
  }).format(numericAmount)
}
