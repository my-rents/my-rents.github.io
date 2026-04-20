import 'dotenv/config'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'

import { GoogleAuth } from 'google-auth-library'

const ANDROID_PUBLISHER_SCOPE = 'https://www.googleapis.com/auth/androidpublisher'
const OUTPUT_PATH = resolve(process.cwd(), 'public/pricing/play-subscriptions.json')
const PLAN_KEY_BY_BILLING_PERIOD = new Map([
  ['P1M', 'monthly'],
  ['P6M', 'sixMonth'],
  ['P1Y', 'yearly'],
])
const PLAN_ORDER = ['monthly', 'sixMonth', 'yearly']

const normalizeCountryCode = (value) => {
  if (typeof value !== 'string') {
    return null
  }

  const normalizedValue = value.trim().toUpperCase()

  return /^[A-Z]{2}$/.test(normalizedValue) ? normalizedValue : null
}

const getRequiredEnv = (name) => {
  const value = process.env[name]?.trim()

  if (!value) {
    throw new Error(`${name} is required to sync Google Play pricing.`)
  }

  return value
}

const parseServiceAccountCredentials = () => {
  const rawCredentials = getRequiredEnv('GOOGLE_PLAY_SERVICE_ACCOUNT_JSON')

  let parsedCredentials

  try {
    parsedCredentials = JSON.parse(rawCredentials)
  } catch (error) {
    throw new Error(
      `GOOGLE_PLAY_SERVICE_ACCOUNT_JSON must be valid JSON. ${error instanceof Error ? error.message : ''}`,
    )
  }

  if (
    !parsedCredentials ||
    typeof parsedCredentials.client_email !== 'string' ||
    typeof parsedCredentials.private_key !== 'string'
  ) {
    throw new Error('GOOGLE_PLAY_SERVICE_ACCOUNT_JSON must include client_email and private_key.')
  }

  return {
    ...parsedCredentials,
    private_key: parsedCredentials.private_key.replace(/\\n/g, '\n'),
  }
}

const toProductIdFilter = () => {
  return new Set(
    (process.env.GOOGLE_PLAY_SUBSCRIPTION_PRODUCT_IDS ?? '')
      .split(',')
      .map((productId) => productId.trim())
      .filter(Boolean),
  )
}

const getBillingPeriod = (basePlan) => {
  return (
    basePlan.autoRenewingBasePlanType?.billingPeriodDuration ??
    basePlan.prepaidBasePlanType?.billingPeriodDuration ??
    basePlan.installmentsBasePlanType?.billingPeriodDuration ??
    null
  )
}

const toRegionalPrices = (basePlan) => {
  const regionalPrices = {}

  for (const regionalConfig of basePlan.regionalConfigs ?? []) {
    const countryCode = normalizeCountryCode(regionalConfig.regionCode)
    const price = regionalConfig.price

    if (!countryCode || !price || typeof price.currencyCode !== 'string') {
      continue
    }

    regionalPrices[countryCode] = {
      currencyCode: price.currencyCode,
      units: String(price.units ?? '0'),
      nanos: Number(price.nanos ?? 0),
    }
  }

  return regionalPrices
}

const requestJson = async (client, url) => {
  const response = await client.request({
    method: 'GET',
    url,
  })

  return response.data
}

const listSubscriptions = async (client, packageName) => {
  const subscriptions = []
  let nextPageToken = undefined

  do {
    const url = new URL(
      `https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${encodeURIComponent(packageName)}/subscriptions`,
    )

    if (nextPageToken) {
      url.searchParams.set('pageToken', nextPageToken)
    }

    url.searchParams.set('pageSize', '1000')

    const payload = await requestJson(client, url.toString())

    subscriptions.push(...(payload.subscriptions ?? []))
    nextPageToken = typeof payload.nextPageToken === 'string' ? payload.nextPageToken : undefined
  } while (nextPageToken)

  return subscriptions
}

const choosePlans = (subscriptions, productIdFilter) => {
  const chosenPlans = new Map()

  for (const subscription of subscriptions) {
    if (
      typeof subscription.productId !== 'string' ||
      (productIdFilter.size > 0 && !productIdFilter.has(subscription.productId))
    ) {
      continue
    }

    for (const basePlan of subscription.basePlans ?? []) {
      if (typeof basePlan.basePlanId !== 'string') {
        continue
      }

      const billingPeriod = getBillingPeriod(basePlan)
      const planKey = PLAN_KEY_BY_BILLING_PERIOD.get(billingPeriod)

      if (!planKey) {
        continue
      }

      const regionalPrices = toRegionalPrices(basePlan)
      const countryCount = Object.keys(regionalPrices).length

      if (countryCount === 0) {
        continue
      }

      const candidatePlan = {
        key: planKey,
        productId: subscription.productId,
        basePlanId: basePlan.basePlanId,
        billingPeriod,
        regionalPrices,
      }
      const existingPlan = chosenPlans.get(planKey)

      if (!existingPlan || countryCount > Object.keys(existingPlan.regionalPrices).length) {
        chosenPlans.set(planKey, candidatePlan)
      }
    }
  }

  return PLAN_ORDER.map((planKey) => chosenPlans.get(planKey)).filter(Boolean)
}

const main = async () => {
  const packageName = getRequiredEnv('GOOGLE_PLAY_PACKAGE_NAME')
  const defaultCountryCode =
    normalizeCountryCode(process.env.GOOGLE_PLAY_DEFAULT_COUNTRY_CODE) ?? 'US'
  const credentials = parseServiceAccountCredentials()
  const auth = new GoogleAuth({
    credentials,
    scopes: [ANDROID_PUBLISHER_SCOPE],
  })
  const client = await auth.getClient()
  const subscriptions = await listSubscriptions(client, packageName)
  const plans = choosePlans(subscriptions, toProductIdFilter())

  if (plans.length === 0) {
    throw new Error(
      'No matching Google Play subscription plans were found. Check the package name, product filter, and base plan billing periods.',
    )
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    packageName,
    source: 'google-play',
    defaultCountryCode,
    plans,
  }

  await mkdir(dirname(OUTPUT_PATH), { recursive: true })
  await writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`, 'utf8')

  console.log(
    `Synced ${plans.length} Google Play pricing plans to ${OUTPUT_PATH} for ${packageName}.`,
  )
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error)
  process.exitCode = 1
})
