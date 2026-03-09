import { computed } from 'vue'

import { siteContentByLocale } from '@/content/siteContent'
import { useLocale } from '@/composables/useLocale'

export const useSiteContent = () => {
  const { locale } = useLocale()

  const content = computed(() => siteContentByLocale[locale.value])

  return {
    content,
    locale,
  }
}