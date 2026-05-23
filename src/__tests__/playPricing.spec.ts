import { describe, expect, it } from 'vitest'

import {
  formatPlayPrice,
  getPlanPrice,
  isPlayPricingCatalog,
  resolveCountryCode,
  type PlayPricingCatalog,
} from '@/lib/playPricing'

const catalog: PlayPricingCatalog = {
  generatedAt: '2026-03-31T00:00:00.000Z',
  packageName: 'com.drodriguez.my_rents',
  source: 'google-play',
  defaultCountryCode: 'US',
  plans: [
    {
      key: 'monthly',
      productId: 'pro',
      basePlanId: 'monthly',
      billingPeriod: 'P1M',
      regionalPrices: {
        ES: {
          currencyCode: 'EUR',
          units: '4',
          nanos: 990000000,
        },
        US: {
          currencyCode: 'USD',
          units: '4',
          nanos: 990000000,
        },
      },
    },
    {
      key: 'annual',
      productId: 'pro',
      basePlanId: 'annual',
      billingPeriod: 'P1Y',
      regionalPrices: {
        ES: {
          currencyCode: 'EUR',
          units: '39',
          nanos: 990000000,
        },
        US: {
          currencyCode: 'USD',
          units: '39',
          nanos: 990000000,
        },
      },
    },
  ],
}

describe('playPricing helpers', () => {
  it('recognizes a valid catalog payload', () => {
    expect(isPlayPricingCatalog(catalog)).toBe(true)
  })

  it('resolves the requested country when that region exists', () => {
    expect(resolveCountryCode(catalog, 'es')).toBe('ES')
  })

  it('falls back to the default country when the request is not available', () => {
    expect(resolveCountryCode(catalog, 'AR')).toBe('US')
  })

  it('returns the regional plan amount when the plan exists', () => {
    expect(getPlanPrice(catalog, 'monthly', 'US')).toEqual({
      currencyCode: 'USD',
      units: '4',
      nanos: 990000000,
    })
  })

  it('formats the Play amount using the active site locale', () => {
    const monthlyPlan = catalog.plans[0]

    expect(monthlyPlan).toBeDefined()

    const spainPrice = monthlyPlan?.regionalPrices.ES

    expect(spainPrice).toBeDefined()

    const formattedPrice = formatPlayPrice(spainPrice!, 'es')

    expect(formattedPrice).toContain('4,99')
    expect(formattedPrice).toContain('€')
  })
})
