import type { LegalPage, LegalPageKey } from '../siteContent'
import { germanLegalPages } from './de'
import { frenchLegalPages } from './fr'
import { italianLegalPages } from './it'
import { portugueseLegalPages } from './pt'
import { dutchLegalPages } from './nl'

export const legalPagesByLocale: Record<
  'de' | 'fr' | 'it' | 'pt' | 'nl',
  Record<LegalPageKey, LegalPage>
> = {
  de: germanLegalPages,
  fr: frenchLegalPages,
  it: italianLegalPages,
  pt: portugueseLegalPages,
  nl: dutchLegalPages,
}
