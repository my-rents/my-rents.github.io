import weeklyRaw from '@/content/pricing/weekly_subscription.md?raw'
import monthlyRaw from '@/content/pricing/monthly_subscription.md?raw'
import annualRaw from '@/content/pricing/annual_subscription.md?raw'
import lifetimeRaw from '@/content/pricing/lifetime_payment.md?raw'

export interface StaticPriceEntry {
  countryName: string
  currencyCode: string
  amount: number
  formatted: string
}

export interface StaticPricingData {
  countryName: string
  weekly: StaticPriceEntry | null
  monthly: StaticPriceEntry | null
  annual: StaticPriceEntry | null
  lifetime: StaticPriceEntry | null
}

const parsePriceLine = (line: string): StaticPriceEntry | null => {
  const trimmed = line.trim()

  if (!trimmed) {
    return null
  }

  const separatorIndex = trimmed.lastIndexOf(' - ')

  if (separatorIndex === -1) {
    return null
  }

  const countryName = trimmed.slice(0, separatorIndex).trim()

  if (!countryName) {
    return null
  }

  const afterSeparator = trimmed.slice(separatorIndex + 3)

  const spaceIndex = afterSeparator.indexOf(' ')

  if (spaceIndex === -1) {
    return null
  }

  const currencyCode = afterSeparator.slice(0, spaceIndex).trim()
  const rawAmount = afterSeparator
    .slice(spaceIndex + 1)
    .trim()
    .replace(/,/g, '')

  if (!currencyCode || !rawAmount || !/^[A-Z]{3}$/.test(currencyCode)) {
    return null
  }

  const amount = Number(rawAmount)

  if (!Number.isFinite(amount)) {
    return null
  }

  const formatted = new Intl.NumberFormat('en', {
    style: 'currency',
    currency: currencyCode,
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 2,
  }).format(amount)

  return {
    countryName,
    currencyCode,
    amount,
    formatted,
  }
}

const parsePricingFile = (raw: string): Map<string, StaticPriceEntry> => {
  const map = new Map<string, StaticPriceEntry>()

  for (const line of raw.split('\n')) {
    const entry = parsePriceLine(line)

    if (entry) {
      map.set(entry.countryName, entry)
    }
  }

  return map
}

const weeklyMap = parsePricingFile(weeklyRaw)
const monthlyMap = parsePricingFile(monthlyRaw)
const annualMap = parsePricingFile(annualRaw)
const lifetimeMap = parsePricingFile(lifetimeRaw)

const allCountryNames = new Set([
  ...weeklyMap.keys(),
  ...monthlyMap.keys(),
  ...annualMap.keys(),
  ...lifetimeMap.keys(),
])

const pricingByCountry = new Map<string, StaticPricingData>()

for (const countryName of allCountryNames) {
  pricingByCountry.set(countryName, {
    countryName,
    weekly: weeklyMap.get(countryName) ?? null,
    monthly: monthlyMap.get(countryName) ?? null,
    annual: annualMap.get(countryName) ?? null,
    lifetime: lifetimeMap.get(countryName) ?? null,
  })
}

export const getPricingForCountry = (countryName: string): StaticPricingData | null => {
  return pricingByCountry.get(countryName) ?? null
}

export const getAllPricingEntries = (): StaticPricingData[] => {
  return [...pricingByCountry.values()]
}

export const getAvailableCountryNames = (): string[] => {
  return [...pricingByCountry.keys()].sort()
}
