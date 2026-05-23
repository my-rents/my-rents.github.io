import { onMounted, readonly, ref } from 'vue'

interface IpGeolocationResult {
  countryName: string
  countryCode: string
}

const detectedCountry = ref<IpGeolocationResult | null>(null)
const isDetecting = ref(false)
const detectionError = ref(false)
let hasAttempted = false

const detectCountry = async (): Promise<void> => {
  if (hasAttempted || typeof window === 'undefined') {
    return
  }

  hasAttempted = true
  isDetecting.value = true

  try {
    const response = await window.fetch('https://ipapi.co/json/', {
      headers: { Accept: 'application/json' },
    })

    if (!response.ok) {
      throw new Error(`Geolocation API returned ${response.status}`)
    }

    const data = (await response.json()) as Record<string, unknown>

    const countryName = typeof data.country_name === 'string' ? data.country_name.trim() : ''
    const countryCode = typeof data.country_code === 'string' ? data.country_code.trim() : ''

    if (!countryName || !countryCode) {
      throw new Error('Missing country data in geolocation response')
    }

    detectedCountry.value = { countryName, countryCode }
  } catch {
    detectionError.value = true
  } finally {
    isDetecting.value = false
  }
}

export const useIpGeolocation = () => {
  onMounted(() => {
    void detectCountry()
  })

  return {
    detectedCountry: readonly(detectedCountry),
    isDetecting: readonly(isDetecting),
    detectionError: readonly(detectionError),
  }
}
