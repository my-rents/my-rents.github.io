import screenshotEn1 from '@/assets/features/rent_EN.jpg'
import screenshotEs1 from '@/assets/features/rent_ES.jpg'
import calendarImage from '@/assets/features/calendar_EN.jpg'
import contactsListImage from '@/assets/features/contacts_list_EN.jpg'

export type SiteLocale = 'en' | 'es' | 'de' | 'fr' | 'it' | 'pt'

export type LegalPageKey = 'terms' | 'privacy' | 'eula' | 'dataDeletion'

export type AppRouteName = 'home' | 'pricing' | 'forum' | LegalPageKey | 'unsubscribe'

export interface LanguageOption {
  code: SiteLocale
  label: string
}

export interface NavItem {
  label: string
  hash: string
}

export interface SectionIntroContent {
  eyebrow: string
  title: string
  description?: string
}

export interface IconCard {
  badge: string
  title: string
  description: string
}

export interface ComparisonColumn {
  label: string
  tone: 'muted' | 'brand'
  items: IconCard[]
}

export interface ServiceItem {
  eyebrow: string
  title: string
  description: string
  image: string
}

export interface BenefitItem {
  title: string
  description: string
}

export interface DocumentsCenterPreviewMetric {
  label: string
  value: string
}

export interface DocumentsCenterPreviewCollection {
  label: string
  items: string[]
}

export interface DocumentsCenterSection {
  intro: SectionIntroContent
  detail: string
  benefits: BenefitItem[]
  preview: {
    eyebrow: string
    title: string
    metrics: DocumentsCenterPreviewMetric[]
    collections: DocumentsCenterPreviewCollection[]
  }
  demoCtaLabel: string
  note: string
}

export type PricingPlanKey = 'weekly' | 'monthly' | 'annual' | 'lifetime'

export interface LivePricingContent {
  introDescription: string
  messageDescription: string
  storeTitle: string
  storeDescription: string
  selectorLabel: string
  selectedCountryLabel: string
  loadingLabel: string
  unavailableLabel: string
}

export interface PricingPlan {
  key: PricingPlanKey
  name: string
  badge?: string
  summary: string
  detail: string
  subdetail: string
  ctaLabel: string
}

export interface PricingFeature {
  title: string
  description: string
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export interface FeatureSpotlightItem {
  title: string
  description: string
  image: string
  imageAlt: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
}

export interface AppLanguageSupport {
  intro: SectionIntroContent
  listLabel: string
  languages: string[]
  summary: string
  note: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface LegalSection {
  title: string
  paragraphs: string[]
}

export interface LegalPage {
  eyebrow: string
  title: string
  intro: string
  updatedAt: string
  sections: LegalSection[]
}

export interface FooterLink {
  label: string
  routeKey: LegalPageKey
}

export interface UnsubscribeStateContent {
  title: string
  description: string
}

export interface UnsubscribePageContent {
  eyebrow: string
  title: string
  intro: string
  form: {
    emailLabel: string
    emailPlaceholder: string
    helper: string
    note: string
    submitLabel: string
  }
  homeLabel: string
  contactLabel: string
  states: {
    submitting: UnsubscribeStateContent
    success: UnsubscribeStateContent
    invalidEmail: UnsubscribeStateContent
    unavailable: UnsubscribeStateContent
    error: UnsubscribeStateContent
  }
}

export interface ForumSection {
  hero: {
    title: string
    description: string
    ctaLabel: string
    forumUrl: string
  }
  features: {
    eyebrow: string
    title: string
    description: string
    items: BenefitItem[]
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: FaqItem[]
  }
}

export interface SiteContent {
  playStoreUrl: string
  appStoreUrl: string
  meta: {
    routeTitles: Record<AppRouteName, string>
  }
  header: {
    brandLabel: string
    navAriaLabel: string
    ctaLabel: string
    languageLabel: string
    languages: LanguageOption[]
  }
  primaryNav: NavItem[]
  hero: {
    rating: string
    title: string
    copy: string
    playStoreCtaLabel: string
    appStoreCtaLabel: string
    contactCtaLabel: string
    trustLabel: string
    snapshot: string
    snapshotAlt: string
    partnersLabel: string
    partners: string[]
  }
  comparison: {
    intro: SectionIntroContent
    columns: ComparisonColumn[]
  }
  documentsCenter: DocumentsCenterSection
  services: {
    intro: SectionIntroContent
    items: ServiceItem[]
  }
  testimonial: {
    communityLabel: string
    quote: string
    description: string
    author: string
    forumLabel: string
    forumUrl: string
    statA: string
    statB: string
    avatars: string[]
  }
  forum: ForumSection
  benefits: {
    intro: SectionIntroContent
    items: BenefitItem[]
  }
  pricing: {
    intro: SectionIntroContent
    message: {
      title: string
      description: string
    }
    plans: PricingPlan[]
    featuresTitle: string
    featuresDescription: string
    features: PricingFeature[]
    storePricing: {
      title: string
      description: string
    }
    livePricing: LivePricingContent
    singleUser: {
      title: string
      description: string
    }
    companies: {
      title: string
      description: string
    }
    androidCtaLabel: string
    iOSCtaLabel: string
    businessCtaLabel: string
    popularLabel: string
    trialLabel: string
    trialCancelLabel: string
    freeModeTitle: string
    freeModeEyebrow: string
    freeModeCopy: string
    countryNoteLabel: string
  }
  process: {
    intro: SectionIntroContent
    steps: ProcessStep[]
  }
  impact: {
    intro: SectionIntroContent
    items: FeatureSpotlightItem[]
  }
  appLanguages: AppLanguageSupport
  team?: {
    intro: SectionIntroContent
    members: TeamMember[]
  }
  faq: {
    intro: SectionIntroContent
    items: FaqItem[]
  }
  contact: {
    emailAddress: string
    forumUrl: string
    intro: SectionIntroContent
    forumPrefix: string
    forumCtaLabel: string
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      subjectLabel: string
      submitLabel: string
      success: string
    }
  }
  footer: {
    summary: string
    menuHeading: string
    legalHeading: string
    contactHeading: string
    legalLinks: FooterLink[]
    upgradePrompt: string
    forumLinkLabel: string
    privacyLinkLabel: string
    dataDeletionLinkLabel: string
    bottomLabel: string
  }
  legalUi: {
    backHomeLabel: string
    lastUpdatedPrefix: string
  }
  unsubscribe: UnsubscribePageContent
  legalPages: Record<LegalPageKey, LegalPage>
  controls: {
    previousLabel: string
    nextLabel: string
  }
}

export const supportedLocales = ['en', 'es', 'de', 'fr', 'it', 'pt'] as const

export const defaultLocale: SiteLocale = 'en'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.drodriguez.my_rents'
const APP_STORE_URL = 'https://apps.apple.com/es/app/my-rents-property-manager-pro/id1537064606'
const CONTACT_EMAIL = 'info@myrents-app.com'
const FORUM_URL = 'https://drodriguez-support.com'
const FEATURE_SPOTLIGHT_IMAGE = screenshotEs1

const createPlaceholder = (
  width: number,
  height: number,
  background: string,
  foreground: string,
  text: string,
) =>
  `https://placehold.co/${width}x${height}/${background}/${foreground}?text=${encodeURIComponent(text)}`

const sharedLanguages: LanguageOption[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
]

const englishLegalLinks: FooterLink[] = [
  { label: 'Terms of Service', routeKey: 'terms' },
  { label: 'Privacy Policy', routeKey: 'privacy' },
  { label: 'EULA', routeKey: 'eula' },
  { label: 'Data Deletion', routeKey: 'dataDeletion' },
]

const spanishLegalLinks: FooterLink[] = [
  { label: 'Términos del servicio', routeKey: 'terms' },
  { label: 'Política de privacidad', routeKey: 'privacy' },
  { label: 'EULA', routeKey: 'eula' },
  { label: 'Eliminación de datos', routeKey: 'dataDeletion' },
]

const documentsCenterContentByLocale: Record<SiteLocale, DocumentsCenterSection> = {
  en: {
    intro: {
      eyebrow: 'Documents Center',
      title: 'Give every lease a shared tenant portal',
      description:
        'Documents Center publishes the lease documents, invoices, images, and expenses that belong to one lease in a secure route with role-specific passcodes.',
    },
    detail:
      'Landlords stop resending the same files across WhatsApp and email, tenants get one clear place to check what matters, and the landlord can still see the next payday plus when the tenant last checked the portal.',
    benefits: [
      {
        title: 'One link per lease',
        description:
          'Share one route instead of juggling PDFs, screenshots, and follow-up messages in different conversations.',
      },
      {
        title: 'Documents, images, and expenses stay together',
        description:
          'Contracts, invoices, gallery items, and published expenses stay scoped to the exact lease they belong to.',
      },
      {
        title: 'Landlord visibility without constant chasing',
        description:
          'See the next payday, payment status, and tenant last check-in without asking whether the files were opened.',
      },
    ],
    preview: {
      eyebrow: 'Tenant portal demo',
      title: 'What the Documents Center shows at a glance',
      metrics: [
        { label: 'Next payday', value: '5 Apr 2026' },
        { label: 'Tenant last check-in', value: '28 Mar 2026 · 18:20' },
        { label: 'Access', value: 'Link + role passcodes' },
      ],
      collections: [
        {
          label: 'Documents and billing',
          items: ['Signed lease summary', 'Move-in checklist', 'Water bill Apr 2026'],
        },
        {
          label: 'Shared lease context',
          items: ['3 gallery images', '2 published expenses', 'Payment status for this lease'],
        },
      ],
    },
    demoCtaLabel: 'Open live demo',
    note: 'The demo opens a sample tenant view so you can see the shared experience before sending a real lease.',
  },
  es: {
    intro: {
      eyebrow: 'Nuevo: Centro de documentos',
      title: 'Da a cada contrato un portal del inquilino compartido',
      description:
        'El Centro de documentos publica en una ruta segura los documentos, facturas, imágenes y gastos que pertenecen a un contrato, con claves separadas por rol.',
    },
    detail:
      'El propietario deja de reenviar los mismos archivos por WhatsApp y correo, el inquilino tiene un único sitio claro para revisar lo importante y, además, el propietario puede ver el próximo cobro y cuándo entró el inquilino por última vez.',
    benefits: [
      {
        title: 'Un enlace por contrato',
        description:
          'Comparte una sola ruta en vez de mover PDFs, capturas y recordatorios entre conversaciones distintas.',
      },
      {
        title: 'Documentos, imágenes y gastos unidos',
        description:
          'Contratos, facturas, elementos de galería y gastos publicados quedan ligados al contrato correcto.',
      },
      {
        title: 'Visibilidad para el propietario sin ir detrás',
        description:
          'Consulta el próximo cobro, el estado del pago y el último acceso del inquilino sin perseguir si abrió los archivos.',
      },
    ],
    preview: {
      eyebrow: 'Demo del portal del inquilino',
      title: 'Lo que muestra el Centro de documentos de un vistazo',
      metrics: [
        { label: 'Próximo cobro', value: '5 abr 2026' },
        { label: 'Último acceso del inquilino', value: '28 mar 2026 · 18:20' },
        { label: 'Acceso', value: 'Enlace + claves por rol' },
      ],
      collections: [
        {
          label: 'Documentos y cobros',
          items: [
            'Resumen del contrato firmado',
            'Checklist de entrada',
            'Factura de agua abr 2026',
          ],
        },
        {
          label: 'Contexto del contrato compartido',
          items: ['3 imágenes publicadas', '2 gastos visibles', 'Estado del pago del contrato'],
        },
      ],
    },
    demoCtaLabel: 'Abrir demo en vivo',
    note: 'La demo abre una vista de ejemplo del inquilino para entender la experiencia compartida antes de enviar un contrato real.',
  },
  de: {
    intro: {
      eyebrow: 'Neu: Dokumentenzentrum',
      title: 'Gib jedem Mietvertrag ein gemeinsames Mieterportal',
      description:
        'Das Dokumentenzentrum veröffentlicht die Dokumente, Rechnungen, Bilder und Ausgaben eines Mietvertrags in einer sicheren Route mit rollenbasierten Passcodes.',
    },
    detail:
      'Vermieter müssen dieselben Dateien nicht mehr über WhatsApp und E-Mail nachschicken, Mieter bekommen einen klaren Ort für das Wesentliche, und der Vermieter sieht trotzdem den nächsten Fälligkeitstermin und wann der Mieter das Portal zuletzt geöffnet hat.',
    benefits: [
      {
        title: 'Ein Link pro Mietvertrag',
        description:
          'Teile eine einzige Route statt PDFs, Screenshots und Nachfass-Nachrichten über verschiedene Gespräche zu verteilen.',
      },
      {
        title: 'Dokumente, Bilder und Ausgaben bleiben zusammen',
        description:
          'Verträge, Rechnungen, Galerieelemente und veröffentlichte Ausgaben bleiben genau dem richtigen Mietvertrag zugeordnet.',
      },
      {
        title: 'Sichtbarkeit für Vermieter ohne ständiges Nachfassen',
        description:
          'Sieh den nächsten Fälligkeitstag, den Zahlungsstatus und den letzten Mieter-Login, ohne immer wieder nachfragen zu müssen.',
      },
    ],
    preview: {
      eyebrow: 'Mieterportal-Demo',
      title: 'Was das Dokumentenzentrum auf einen Blick zeigt',
      metrics: [
        { label: 'Nächster Fälligkeitstag', value: '5 Apr 2026' },
        { label: 'Letzter Mieter-Login', value: '28 Mar 2026 · 18:20' },
        { label: 'Zugriff', value: 'Link + Rollen-Passcodes' },
      ],
      collections: [
        {
          label: 'Dokumente und Abrechnung',
          items: ['Unterzeichneter Mietüberblick', 'Einzugs-Checkliste', 'Wasserrechnung Apr 2026'],
        },
        {
          label: 'Geteilter Vertragskontext',
          items: [
            '3 veröffentlichte Bilder',
            '2 freigegebene Ausgaben',
            'Zahlungsstatus dieses Vertrags',
          ],
        },
      ],
    },
    demoCtaLabel: 'Live-Demo öffnen',
    note: 'Die Demo öffnet eine Beispielansicht für Mieter, damit du das gemeinsame Erlebnis sehen kannst, bevor du einen echten Mietvertrag teilst.',
  },
  fr: {
    intro: {
      eyebrow: 'Nouveau : Centre de documents',
      title: 'Offrez à chaque bail un portail locataire partagé',
      description:
        'Le Centre de documents publie les documents, factures, images et dépenses liés à un bail dans une route sécurisée avec des codes d’accès par rôle.',
    },
    detail:
      'Le propriétaire n’a plus à renvoyer les mêmes fichiers sur WhatsApp et par e-mail, le locataire dispose d’un seul endroit clair pour consulter l’essentiel, et le propriétaire peut toujours voir le prochain paiement dû ainsi que la dernière visite du locataire.',
    benefits: [
      {
        title: 'Un lien par bail',
        description:
          'Partagez une seule route au lieu de disperser PDF, captures et relances dans plusieurs conversations.',
      },
      {
        title: 'Documents, images et dépenses restent groupés',
        description:
          'Contrats, factures, éléments de galerie et dépenses publiées restent attachés exactement au bon bail.',
      },
      {
        title: 'Visibilité pour le propriétaire sans relances permanentes',
        description:
          'Voyez la prochaine échéance, le statut du paiement et la dernière visite du locataire sans devoir le relancer sans cesse.',
      },
    ],
    preview: {
      eyebrow: 'Démo du portail locataire',
      title: 'Ce que le Centre de documents montre en un coup d’œil',
      metrics: [
        { label: 'Prochain paiement', value: '5 avr. 2026' },
        { label: 'Dernière visite du locataire', value: '28 mars 2026 · 18:20' },
        { label: 'Accès', value: 'Lien + codes par rôle' },
      ],
      collections: [
        {
          label: 'Documents et facturation',
          items: ['Résumé du bail signé', 'Checklist d’entrée', 'Facture d’eau avr. 2026'],
        },
        {
          label: 'Contexte partagé du bail',
          items: ['3 images publiées', '2 dépenses visibles', 'Statut du paiement pour ce bail'],
        },
      ],
    },
    demoCtaLabel: 'Ouvrir la démo en direct',
    note: 'La démo ouvre une vue locataire d’exemple afin de voir l’expérience partagée avant d’envoyer un vrai bail.',
  },
  it: {
    intro: {
      eyebrow: 'Novità: Centro documenti',
      title: 'Dai a ogni contratto un portale condiviso per l’inquilino',
      description:
        'Il Centro documenti pubblica documenti, fatture, immagini e spese di uno specifico contratto in un percorso sicuro con passcode separati per ruolo.',
    },
    detail:
      'Il proprietario smette di reinviare gli stessi file tra WhatsApp ed email, l’inquilino ha un unico posto chiaro dove vedere ciò che conta e il proprietario può comunque controllare la prossima scadenza e l’ultimo accesso dell’inquilino.',
    benefits: [
      {
        title: 'Un link per contratto',
        description:
          'Condividi un solo percorso invece di spargere PDF, screenshot e messaggi di follow-up in conversazioni diverse.',
      },
      {
        title: 'Documenti, immagini e spese restano insieme',
        description:
          'Contratti, fatture, elementi della galleria e spese pubblicate restano collegati esattamente al contratto giusto.',
      },
      {
        title: 'Visibilità per il proprietario senza inseguire nessuno',
        description:
          'Controlla la prossima scadenza, lo stato del pagamento e l’ultimo accesso dell’inquilino senza dover chiedere continuamente.',
      },
    ],
    preview: {
      eyebrow: 'Demo del portale inquilino',
      title: 'Cosa mostra il Centro documenti a colpo d’occhio',
      metrics: [
        { label: 'Prossima scadenza', value: '5 apr 2026' },
        { label: 'Ultimo accesso dell’inquilino', value: '28 mar 2026 · 18:20' },
        { label: 'Accesso', value: 'Link + passcode per ruolo' },
      ],
      collections: [
        {
          label: 'Documenti e pagamenti',
          items: [
            'Riepilogo del contratto firmato',
            'Checklist di ingresso',
            'Fattura acqua apr 2026',
          ],
        },
        {
          label: 'Contesto condiviso del contratto',
          items: ['3 immagini pubblicate', '2 spese visibili', 'Stato del pagamento del contratto'],
        },
      ],
    },
    demoCtaLabel: 'Apri demo live',
    note: 'La demo apre una vista di esempio per l’inquilino così puoi vedere l’esperienza condivisa prima di inviare un contratto reale.',
  },
  pt: {
    intro: {
      eyebrow: 'Novo: Centro de documentos',
      title: 'Dê a cada contrato um portal partilhado para o inquilino',
      description:
        'O Centro de documentos publica os documentos, faturas, imagens e despesas de um contrato numa rota segura com códigos de acesso por perfil.',
    },
    detail:
      'O senhorio deixa de reenviar os mesmos ficheiros por WhatsApp e email, o inquilino passa a ter um único local claro para ver o que importa e o senhorio continua a ver o próximo vencimento e a última entrada do inquilino.',
    benefits: [
      {
        title: 'Um link por contrato',
        description:
          'Partilhe uma única rota em vez de espalhar PDFs, capturas e mensagens de seguimento por conversas diferentes.',
      },
      {
        title: 'Documentos, imagens e despesas ficam juntos',
        description:
          'Contratos, faturas, itens da galeria e despesas publicadas ficam ligados exatamente ao contrato certo.',
      },
      {
        title: 'Visibilidade para o senhorio sem andar sempre atrás',
        description:
          'Veja o próximo vencimento, o estado do pagamento e o último acesso do inquilino sem perguntar constantemente se abriu os ficheiros.',
      },
    ],
    preview: {
      eyebrow: 'Demo do portal do inquilino',
      title: 'O que o Centro de documentos mostra num relance',
      metrics: [
        { label: 'Próximo vencimento', value: '5 abr 2026' },
        { label: 'Último acesso do inquilino', value: '28 mar 2026 · 18:20' },
        { label: 'Acesso', value: 'Link + códigos por perfil' },
      ],
      collections: [
        {
          label: 'Documentos e cobrança',
          items: ['Resumo do contrato assinado', 'Checklist de entrada', 'Fatura de água abr 2026'],
        },
        {
          label: 'Contexto partilhado do contrato',
          items: [
            '3 imagens publicadas',
            '2 despesas visíveis',
            'Estado do pagamento deste contrato',
          ],
        },
      ],
    },
    demoCtaLabel: 'Abrir demo ao vivo',
    note: 'A demo abre uma vista de exemplo para o inquilino para que possa ver a experiência partilhada antes de enviar um contrato real.',
  },
}

const baseSiteContentByLocale: Record<'en' | 'es', SiteContent> = {
  en: {
    playStoreUrl: PLAY_STORE_URL,
    appStoreUrl: APP_STORE_URL,
    meta: {
      routeTitles: {
        home: 'My Rents | Property Manager App for Landlords',
        pricing: 'Pricing | My Rents',
        terms: 'Terms of Service | My Rents',
        privacy: 'Privacy Policy | My Rents',
        eula: 'EULA | My Rents',
        dataDeletion: 'Data Deletion | My Rents',
        forum: 'Forum | My Rents',
        unsubscribe: 'Unsubscribe | My Rents',
      },
    },
    header: {
      brandLabel: 'My Rents',
      navAriaLabel: 'Primary',
      ctaLabel: 'See plans',
      languageLabel: 'Language',
      languages: sharedLanguages,
    },
    primaryNav: [
      { label: 'How it helps', hash: '#features' },
      { label: 'Pricing', hash: '/pricing' },
      { label: 'Documents Center', hash: '#documents-center' },
      { label: 'How to start', hash: '#how-to-start' },
      { label: 'Forum', hash: '/forum' },
    ],
    hero: {
      rating: '4.8/5 on Google Play',
      title: 'One app. All your rentals. No chaos.',
      copy: 'Stop jumping between spreadsheets, WhatsApp, bank statements, and calendars. Track rent, expenses, leases, and documents from your phone — so tax season is a review, not a rebuild.',
      playStoreCtaLabel: 'Download for Android',
      appStoreCtaLabel: 'Download for iOS',
      contactCtaLabel: 'Contact us',
      snapshot: screenshotEn1,
      snapshotAlt: 'My Rents dashboard showing portfolio, payments, and lease management',
      trustLabel: 'Trusted by 5,000+ landlords and companies worldwide',
      partnersLabel: 'Built for landlords who have outgrown DIY admin',
      partners: [
        'Side-income landlords',
        '2 to 10 rentals',
        'Self-managing owners',
        'Small investors',
        'Growing portfolios',
      ],
    },
    comparison: {
      intro: {
        eyebrow: 'Before vs after',
        title: 'Why landlords switch to My Rents',
        description:
          'The friction is not one dramatic event. It is the daily cost of finding what belongs to which property, remembering who paid, and rebuilding records for tax season.',
      },
      columns: [
        {
          label: 'Without My Rents',
          tone: 'muted',
          items: [
            {
              badge: 'RG',
              title: 'Rent tracking becomes guesswork',
              description:
                'Late or partial payments across different accounts force you to manually piece together who owes what.',
            },
            {
              badge: 'RC',
              title: 'Receipts and invoices get lost',
              description:
                'Repair bills, supplier invoices, and screenshots float between your car, WhatsApp, and email — untraceable months later.',
            },
            {
              badge: 'LD',
              title: 'Lease dates cause last-minute panic',
              description:
                'Renewals, inspections, and deadlines live in PDFs, chats, and memory instead of a single timeline.',
            },
            {
              badge: 'TX',
              title: 'Tax season is a rebuild project',
              description:
                'You waste days reconstructing the year from bank statements and scattered folders because nothing was connected.',
            },
          ],
        },
        {
          label: 'With My Rents',
          tone: 'brand',
          items: [
            {
              badge: 'PH',
              title: 'Every property tells its own story',
              description:
                'Leases, payments, expenses, files, and contacts stay attached to each property — context is always one tap away.',
            },
            {
              badge: 'PS',
              title: 'Know who paid in seconds',
              description:
                'See paid, overdue, and pending rent at a glance. No spreadsheets, no memory games.',
            },
            {
              badge: 'EV',
              title: 'No more missed deadlines',
              description:
                'Inspections, renewals, and reminders stay connected to each property instead of living in your head.',
            },
            {
              badge: 'RP',
              title: 'Tax-ready year-round',
              description:
                'Numbers, exports, and supporting documents are already organized when you need them — whether for tax season or a quick profit check.',
            },
          ],
        },
      ],
    },
    documentsCenter: documentsCenterContentByLocale.en,
    services: {
      intro: {
        eyebrow: 'App tour',
        title: 'See how My Rents helps you run rentals with less friction',
        description:
          'Core workflows for owners who want property, billing, tenant, and reporting details in one place.',
      },
      items: [
        {
          eyebrow: 'Portfolio Management',
          title: 'Add properties and organise them into portfolios',
          description:
            'Create each property with its location, type, and key details, then group assets by city, strategy, or portfolio structure.',
          image: createPlaceholder(960, 720, '281b60', 'f4efff', 'Portfolio structure'),
        },
        {
          eyebrow: 'Lease & Billing',
          title: 'Track leases, rent due dates, and invoices',
          description:
            'Manage multiple leases per property, review payment status, and follow up through WhatsApp, email, or direct calls.',
          image: createPlaceholder(960, 720, '3a2a81', 'f4efff', 'Leases and billing'),
        },
        {
          eyebrow: 'Operations',
          title: 'Capture expenses, events, tasks, and key contacts',
          description:
            'Log repairs, utilities, inspections, reminders, and the plumbers, electricians, or advisors you may need at any moment.',
          image: createPlaceholder(960, 720, '4b33a0', 'f4efff', 'Operations hub'),
        },
        {
          eyebrow: 'Reporting',
          title: 'Review reports, taxes, debts, and CSV exports',
          description:
            'Monitor profitability, debts, expenses, tax calculations, and CSV exports so decisions are based on real portfolio data.',
          image: createPlaceholder(960, 720, '5d45bc', 'f4efff', 'Reports and taxes'),
        },
      ],
    },
    testimonial: {
      communityLabel: 'Owners, managers, and investors',
      quote: 'Meet other owners and investors in the forum',
      description:
        'Use the public forum to ask questions, share workflows, meet people with similar investment ideas, and exchange practical information that helps improve rental decisions and results.',
      author: 'Open community for rental admin',
      forumLabel: 'Visit forum',
      forumUrl: FORUM_URL,
      statA: 'Shared ideas',
      statB: 'Support and networking',
      avatars: ['F', 'O', 'R', 'U', 'M'],
    },
    forum: {
      hero: {
        title: 'Join the rental property forum',
        description:
          'Connect with landlords, property managers, and real estate investors. Share workflows, ask questions, and exchange practical advice that improves your rental business.',
        ctaLabel: 'Open forum',
        forumUrl: FORUM_URL,
      },
      features: {
        eyebrow: 'What you can do',
        title: 'A community built for rental professionals',
        description:
          'Whether you manage one unit or a growing portfolio, the forum gives you direct access to people who face the same operational decisions every day.',
        items: [
          {
            title: 'Ask and answer questions',
            description:
              'Post about lease management, tenant screening, maintenance workflows, tax preparation, and local regulations. Get answers from experienced landlords and investors.',
          },
          {
            title: 'Share your workflow',
            description:
              'Describe how you track rent, handle repairs, organize documents, and prepare for tax season. Learn from others and refine your own process.',
          },
          {
            title: 'Meet investors with similar goals',
            description:
              'Find people investing in the same markets, property types, or strategies. Exchange market insights and build your professional network.',
          },
          {
            title: 'Stay updated on rental trends',
            description:
              'Follow discussions about rental laws, market shifts, financing options, and property management tools. Keep your knowledge current without chasing scattered sources.',
          },
          {
            title: 'Get feedback on your setup',
            description:
              'Describe your current property admin stack and get suggestions from others who have already solved the same organizational problems.',
          },
          {
            title: 'Access exclusive tips',
            description:
              'Read practical advice that comes from real-world experience — the kind of operational knowledge that is rarely published in articles or tutorials.',
          },
        ],
      },
      faq: {
        eyebrow: 'Common questions',
        title: 'How the forum works',
        description: 'Everything you need to know about participating in the My Rents community.',
        items: [
          {
            question: 'Is the forum free to join?',
            answer:
              'Yes, the public forum is open to everyone. You do not need a My Rents subscription to read discussions, ask questions, or share your experience.',
          },
          {
            question: 'Do I need the app to participate?',
            answer:
              'No, the forum runs on a separate platform. You can access it from any browser on desktop or mobile without installing anything.',
          },
          {
            question: 'What topics can I discuss?',
            answer:
              'Any topic related to rental property management: leases, tenants, maintenance, expenses, taxes, insurance, legal questions, market trends, and workflow tips. The community is focused on practical, operational knowledge.',
          },
          {
            question: 'Can I promote my services?',
            answer:
              'The forum is a knowledge-sharing space, not a marketplace. Self-promotion is generally discouraged unless it directly answers a question or solves a specific problem shared by the community.',
          },
        ],
      },
    },
    benefits: {
      intro: {
        eyebrow: 'Everything in one app',
        title: 'Save hours. Stop the chaos. Keep every property under control.',
        description:
          'Designed for the operational details that usually get lost between leases, expenses, maintenance, and paperwork.',
      },
      items: [
        {
          title: 'Portfolio structure',
          description:
            'See properties the way you actually manage them, whether that means one unit, one building, or a broader portfolio.',
        },
        {
          title: 'Lease oversight',
          description:
            'Keep rent amounts, due dates, status, and multiple leases per property easy to review.',
        },
        {
          title: 'Log expenses before you forget them',
          description:
            'Capture maintenance costs, utility bills, and one-off purchases without losing the financial context.',
        },
        {
          title: 'Document vault',
          description:
            'Store contracts, inspection reports, and other paperwork where you can find it when you need it.',
        },
        {
          title: 'Photo evidence',
          description:
            'Build a visual record of rooms, furniture, and property condition at move-in, inspection, or handover.',
        },
        {
          title: 'Reports and tax settings',
          description:
            'Work with profitability, debt, exports, and adjustable tax settings that fit your local process.',
        },
      ],
    },
    pricing: {
      intro: {
        eyebrow: 'My Rents',
        title: 'Choose your plan',
        description:
          'Every plan unlocks the same tools — pick the duration that fits your workflow.',
      },
      message: {
        title: 'One plan, four options',
        description:
          'Choose the duration that matches your workflow. After downloading the app, you will see your exact local price for each option before you confirm anything.',
      },
      plans: [
        {
          key: 'weekly',
          name: 'Weekly',
          summary:
            'Best if you want to try My Rents for a short period and see how it fits your workflow.',
          detail: 'Weekly subscription',
          subdetail: 'Price shown inside the app after download',
          ctaLabel: 'Download and check price',
        },
        {
          key: 'monthly',
          name: 'Monthly',
          summary:
            'Ideal if you want to start using My Rents now and keep the commitment light while you test how it fits your workflow.',
          detail: 'Monthly subscription',
          subdetail: 'Price shown inside the app after download',
          ctaLabel: 'Download and check price',
        },
        {
          key: 'annual',
          name: 'Annual',
          badge: '7-day trial',
          summary:
            'Best if you already know My Rents is part of your workflow and you want the lowest price per month.',
          detail: 'Annual subscription',
          subdetail: 'Price shown inside the app after download',
          ctaLabel: 'Download and check price',
        },
        {
          key: 'lifetime',
          name: 'Lifetime',
          summary:
            'One payment, no renewal. Best if you want to secure permanent access to My Rents.',
          detail: 'Lifetime payment',
          subdetail: 'Price shown inside the app after download',
          ctaLabel: 'Download and check price',
        },
      ],
      featuresTitle: 'What PRO includes',
      featuresDescription:
        'Every billing option below unlocks the same PRO feature set. Only the duration changes.',
      features: [
        {
          title: 'Unlimited portfolios',
          description:
            'Create as many groups as you need to understand your investments the way you really manage them.',
        },
        {
          title: 'Unlimited properties',
          description: 'No cap on the number of rentals or units you can add.',
        },
        {
          title: 'Invoice generator',
          description: 'Create rent invoices and additional charges in just a few taps.',
        },
        {
          title: 'CSV exports',
          description:
            'Export your numbers whenever you want a clearer external view or need to work with other reports.',
        },
        {
          title: 'Personal and direct support',
          description:
            'No bots. No outsourced queue. You speak directly with the person building My Rents.',
        },
        {
          title: 'Documents Center',
          description:
            'Keep lease documents, invoices, photos, and expense records grouped by lease in a secure shared portal, so landlords and tenants can access the right files without email threads.',
        },
        {
          title: 'No ads',
          description: 'Work without interruptions or promotional clutter.',
        },
      ],
      storePricing: {
        title: 'See your PRO price in the app',
        description:
          'PRO pricing depends on country and appears inside My Rents. Download the app, open the PRO screen, and you will see the exact 1-month, 6-month, and 1-year amount for your region before you pay.',
      },
      livePricing: {
        introDescription:
          'Every plan unlocks the same tools — pick the duration that fits your workflow. All prices come directly from Google Play based on your country.',
        messageDescription:
          'Choose the duration that matches your workflow. Switch country below to preview the current Google Play prices for weekly, monthly, annual, and lifetime plans.',
        storeTitle: 'Prices by country',
        storeDescription:
          "These prices reflect the selected country's Google Play amount. Purchase and billing still happen inside My Rents.",
        selectorLabel: 'Country',
        selectedCountryLabel: 'Google Play price for {country}',
        loadingLabel: 'Loading price...',
        unavailableLabel: 'Price unavailable for this country',
      },
      singleUser: {
        title: 'One user per plan',
        description: 'The options on this page are single-user purchases for one account.',
      },
      companies: {
        title: 'Need team accounts?',
        description:
          'If your business needs multiple users, separate accounts, or a different setup, contact us and we will help you choose the best option.',
      },
      androidCtaLabel: 'Check price on Android',
      iOSCtaLabel: 'Check price on iOS',
      businessCtaLabel: 'Contact us about business accounts',
      popularLabel: 'Best option',
      trialLabel: '7-day free trial',
      trialCancelLabel: 'Cancel at any time',
      freeModeTitle: 'Try My Rents for free',
      freeModeEyebrow: 'No plans needed',
      freeModeCopy:
        "Start with our limited free mode to test the app with your properties. Upgrade to a paid plan when you're ready for unlimited portfolios, invoice generation, and more.",
      countryNoteLabel: '*Showing prices for {country}',
    },
    process: {
      intro: {
        eyebrow: 'How landlords regain control',
        title: 'How to start',
        description:
          'No complex migration needed. Start with the properties, leases, and documents you need today, then keep every new payment, expense, and reminder organized going forward.',
      },
      steps: [
        {
          index: '01',
          title: 'Download and test with your real properties',
          description:
            'Use the 7-day free trial with live data — not dummy data — to see if the structure fits how you already work.',
        },
        {
          index: '02',
          title: 'Add your properties and units',
          description:
            'Build the backbone of your portfolio so every payment, document, and reminder has a clear home.',
        },
        {
          index: '03',
          title: 'Attach leases and the documents you always hunt for',
          description:
            'Store contracts, insurance files, invoices, and key records that usually end up scattered across folders and chats.',
        },
        {
          index: '04',
          title: 'Log payments, expenses, and events in one place',
          description:
            'Track overdue rent, repairs, recurring bills, and contractor activity without re-telling the same story every month.',
        },
        {
          index: '05',
          title: 'Get answers when you need them',
          description:
            'Check profitability, debts, taxes, and supporting records — the information is already tied to the right property.',
        },
      ],
    },
    impact: {
      intro: {
        eyebrow: 'What changes',
        title: 'How My Rents helps you run rentals with less friction',
        description:
          'Each feature is built to answer a landlord question faster instead of creating another place to check.',
      },
      items: [
        {
          title: 'See your whole portfolio in one glance',
          description:
            'Move from portfolio overview to property details with leases, contacts, files, and notes already connected — no hunting.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents portfolio area',
        },
        {
          title: 'Track who paid and who still owes',
          description:
            'Know the exact rent status for every tenant without opening spreadsheets, checking bank apps, or counting on memory.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents properties area',
        },
        {
          title: 'Keep lease details where you can act on them',
          description:
            'Review active agreements, due dates, and billing in one record — no more jumping between PDFs and paper contracts.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents lease and rent due workflow',
        },
        {
          title: 'Know everything about a property, fast',
          description:
            'Property details, units, notes, and linked records stay together so you can understand an asset quickly after days or weeks away from it.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents expenses and reports area',
        },
        {
          title: 'Expense tracking',
          description:
            'Log repairs, utilities, and ad hoc costs while they are fresh so the numbers stay accurate and the proof stays attached.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents documents and photos area',
        },
        {
          title: 'Get tax-ready without the last-minute scramble',
          description:
            'Reports, debt tracking, profitability views, and exports give you answers without rebuilding the year from bank statements.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents tax, map, and contact tools',
        },
        {
          title: 'Never miss an inspection or deadline again',
          description:
            'Repairs, inspections, reminders, and recurring tasks stay visible so critical follow-ups do not live only in your head.',
          image: calendarImage,
          imageAlt: 'Calendar and events screenshot',
        },
        {
          title: 'Find any contact when something breaks',
          description:
            'Keep tenants, suppliers, and advisors organised by property so you are not digging through chats when something breaks.',
          image: contactsListImage,
          imageAlt: 'Contact list screenshot',
        },
      ],
    },
    team: {
      intro: {
        eyebrow: 'Who we help',
        title: 'Landlords, managers, and portfolios',
        description:
          'From single-unit owners to property management teams, My Rents centralizes leases, invoices, documents, and tenant communication in one place.',
      },
      members: [
        {
          name: 'Independent Landlord',
          role: 'Solo owner',
          image: screenshotEn1,
        },
        {
          name: 'Portfolio Owner',
          role: 'Growing rental portfolio',
          image: screenshotEn1,
        },
        {
          name: 'Property Manager',
          role: 'Operational team lead',
          image: screenshotEn1,
        },
        {
          name: 'Property Company',
          role: 'Professional management firm',
          image: screenshotEn1,
        },
      ],
    },
    appLanguages: {
      intro: {
        eyebrow: 'Language support',
        title: 'Available in 6 languages',
        description: 'Use My Rents in the language that best fits your day-to-day rental workflow.',
      },
      listLabel: 'Supported in the app',
      languages: ['Español', 'English', 'Italiano', 'Deutsch', 'Français', 'Português'],
      summary: 'Supported in the app: Spanish, English, Italian, German, French, and Portuguese.',
      note: 'The My Rents website and app both support all six languages listed here.',
    },
    faq: {
      intro: {
        eyebrow: 'FAQ',
        title: 'Common questions',
        description: 'Straight answers about pricing, workflows, reporting, and support.',
      },
      items: [
        {
          question: 'Can My Rents replace spreadsheets for a small portfolio?',
          answer:
            'That is exactly the use case for many owners. My Rents helps you stop splitting rent tracking, expenses, documents, reminders, and property notes across separate sheets and folders.',
        },
        {
          question: 'Is there a free trial?',
          answer:
            'Yes. Annual subscriptions include a 7-day free trial. You can test with your real properties and see if the workflow fits before being charged.',
        },
        {
          question: 'What changes between the weekly, monthly, annual, and lifetime plans?',
          answer: 'Only the subscription length changes. The tools are the same in every option.',
        },
        {
          question: 'How do I see the price for my country?',
          answer:
            'Choose your country on this page to preview the current Google Play price. You can confirm the same local amount inside My Rents before completing the purchase.',
        },
        {
          question: 'Is the price for one user or for a company?',
          answer:
            'The pricing on this page is for one user account. If your company needs several accounts or a different setup, contact us directly.',
        },
        {
          question: 'Can I track expenses and one-off bills?',
          answer:
            'Yes. My Rents is designed to capture routine costs like utilities and maintenance as well as ad hoc purchases such as furniture or urgent repairs.',
        },
        {
          question: 'Does the app help with leases and rent reminders?',
          answer:
            'Yes. You can store multiple leases per property, review rent due dates and payment status, and use reminder actions to follow up through WhatsApp, email, or direct calls.',
        },
      ],
    },
    contact: {
      emailAddress: CONTACT_EMAIL,
      forumUrl: FORUM_URL,
      intro: {
        eyebrow: 'Still managing rentals from too many places?',
        title: 'Tell us what feels messy',
        description:
          'If payments, documents, expenses, or lease dates are slipping across tools, tell us what feels messy today and we will point you to the best setup inside My Rents.',
      },
      forumPrefix: 'Public forum',
      forumCtaLabel: 'Open public forum',
      form: {
        nameLabel: 'Name',
        namePlaceholder: 'Your name',
        emailLabel: 'Email',
        emailPlaceholder: 'you@example.com',
        messageLabel: 'What do you need help with?',
        messagePlaceholder:
          'Tell us what you manage, what feels messy today, or which subscription option you are considering.',
        subjectLabel: 'Website contact from',
        submitLabel: 'Open email draft',
        success:
          'Your email app should open with a prefilled draft. If it does not, write directly to info@myrents-app.com.',
      },
    },
    footer: {
      summary: 'Rental admin for landlords who want the full story of each property in one place.',
      menuHeading: 'Menu',
      legalHeading: 'Legal',
      contactHeading: 'Contact',
      legalLinks: englishLegalLinks,
      upgradePrompt: 'Questions before upgrading? Send us a message.',
      forumLinkLabel: 'Forum',
      privacyLinkLabel: 'Privacy',
      dataDeletionLinkLabel: 'Data Deletion',
      bottomLabel: 'Copyright © 2026 My Rents',
    },
    legalUi: {
      backHomeLabel: 'Back to home',
      lastUpdatedPrefix: 'Last updated',
    },
    unsubscribe: {
      eyebrow: 'Email preferences',
      title: 'Unsubscribe from My Rents marketing emails',
      intro:
        'Enter the email address where you receive My Rents marketing emails and we will add it to our suppression list for future marketing campaigns.',
      form: {
        emailLabel: 'Email address',
        emailPlaceholder: 'you@example.com',
        helper:
          'This page is for marketing emails only. Use the same address where you receive messages from My Rents.',
        note: 'Service, billing, or account-related emails may still be sent when they are necessary to operate My Rents or support your account.',
        submitLabel: 'Unsubscribe this email',
      },
      homeLabel: 'Back to home',
      contactLabel: 'Contact support',
      states: {
        submitting: {
          title: 'Saving your request',
          description: 'We are adding this address to our My Rents suppression list now.',
        },
        success: {
          title: 'This email has been unsubscribed',
          description:
            'We saved this address to our My Rents suppression list for future marketing emails. Please allow a short delay if you recently received a campaign that was already prepared.',
        },
        invalidEmail: {
          title: 'Enter a valid email address',
          description:
            'We could not use that email address. Please check the spelling and try again with the address that received your My Rents marketing emails.',
        },
        unavailable: {
          title: 'Unsubscribe is not configured yet',
          description:
            'The website is missing the Firebase configuration needed to save suppression requests. Please contact support and we will unsubscribe you manually.',
        },
        error: {
          title: 'We could not save your request',
          description:
            'Something went wrong while saving this unsubscribe request. Please try again or contact support so we can remove the address manually.',
        },
      },
    },
    legalPages: {
      terms: {
        eyebrow: 'Terms and Conditions',
        title: 'Terms and Conditions for My Rents',
        intro:
          'These Terms and Conditions govern your use of My Rents, this website, and the related public forum operated by Daniel Rodríguez.',
        updatedAt: 'March 11, 2026',
        sections: [
          {
            title: 'Who We Are',
            paragraphs: [
              'My Rents is a property management app and related online service provided by Daniel Rodríguez.',
              'These terms apply to the mobile app, this website, the public forum, and any related content or support channels unless a separate agreement expressly says otherwise.',
            ],
          },
          {
            title: 'Acceptance and Eligibility',
            paragraphs: [
              'By downloading, creating an account for, purchasing PRO for, or using My Rents, you agree to these terms and to the Privacy Policy.',
              'You must be at least 13 years old to use My Rents. The service is not directed to children under 13, and you may not create an account on behalf of someone who does not meet that age requirement.',
            ],
          },
          {
            title: 'Accounts and Security',
            paragraphs: [
              'You may need to create an account to use some features. You agree to provide accurate information and to keep your login credentials confidential.',
              'You are responsible for activity that happens under your account. Contact us promptly if you believe your account has been accessed without authorization.',
              'We may suspend or close accounts if we reasonably believe there has been misuse, fraud, security abuse, or a material breach of these terms.',
            ],
          },
          {
            title: 'What My Rents Provides',
            paragraphs: [
              'My Rents lets users create and organize properties, portfolios, leases, expenses, contacts, events, reminders, notes, links, images, documents, statistics, tax settings, reports, and related records.',
              'My Rents is an organizational tool. You remain responsible for the accuracy of your data and for complying with landlord, tax, accounting, consumer, privacy, and other laws that apply to your business or personal activity.',
            ],
          },
          {
            title: 'PRO Features, Purchases, and Promotions',
            paragraphs: [
              'Some features require a paid PRO subscription or in-app purchase. Pricing, billing periods, taxes, renewal terms, cancellation options, and refunds may be handled by the relevant app store and may vary by country or currency.',
              "If you purchase through Google Play or another store, the store's payment and subscription rules also apply and control where they conflict with these terms.",
              'We may offer trials, discounts, or promotions from time to time. Unless an offer states otherwise, promotions may be changed, limited, or withdrawn at any time to the extent permitted by law.',
            ],
          },
          {
            title: 'Your Content',
            paragraphs: [
              'You keep ownership of the information and files you upload or enter into My Rents, including property details, tenant or contact information, notes, images, documents, invoices, and other records.',
              'You grant us a limited, non-exclusive right to host, store, process, back up, transmit, and display that content only as needed to operate, secure, support, and improve My Rents for you.',
              'You are responsible for making sure you have the right to upload or store the content you place in the service and that doing so does not violate the law or third-party rights.',
            ],
          },
          {
            title: 'Acceptable Use',
            paragraphs: [
              "You may not use My Rents to break the law, infringe someone else's rights, upload malicious code, interfere with the service, attempt unauthorized access, scrape the service, or reverse engineer the app except where non-waivable law permits it.",
              'If you use the forum or other public areas, do not post unlawful, abusive, defamatory, spam, or confidential content, and do not share personal information you are not entitled to disclose.',
            ],
          },
          {
            title: 'Intellectual Property',
            paragraphs: [
              'The app software, code, text, screenshots, visual design, branding, logos, trademarks, and other original My Rents content are the exclusive property of Daniel Rodríguez or the relevant licensors and are protected by applicable intellectual property laws.',
              'These terms do not transfer ownership of My Rents or its intellectual property to you. Except for the limited rights needed to use the service, all rights are reserved.',
            ],
          },
          {
            title: 'Third-Party Services',
            paragraphs: [
              'My Rents may rely on or link to third-party services such as Google Play, mapping tools, analytics providers, Firebase services, or the public forum platform. Those services are controlled by their own providers and may be governed by separate terms and privacy notices.',
              'We are not responsible for third-party services, content, or policies except as required by applicable law.',
            ],
          },
          {
            title: 'Availability, Changes, and Disclaimer',
            paragraphs: [
              'We may update, change, suspend, or discontinue all or part of My Rents to improve the service, maintain security, comply with law, or respond to operational needs.',
              'To the maximum extent permitted by law, My Rents is provided on an as is and as available basis. We do not guarantee that the service will always be uninterrupted, error-free, or suitable for every use case.',
              'My Rents does not provide legal, tax, accounting, or investment advice.',
            ],
          },
          {
            title: 'Limitation of Liability',
            paragraphs: [
              'To the fullest extent permitted by law, Daniel Rodríguez will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, data, goodwill, or business interruption arising from or related to your use of My Rents.',
              'If liability cannot be excluded, our total liability for claims arising out of or related to My Rents will be limited to the amount you paid for PRO in the 12 months before the event giving rise to the claim.',
              'Nothing in these terms excludes liability that cannot lawfully be excluded or limited under applicable consumer or other mandatory law.',
            ],
          },
          {
            title: 'Termination',
            paragraphs: [
              'You may stop using My Rents at any time and may delete your account through the app or by contacting us through the methods described on this website.',
              'We may suspend or terminate access if you materially breach these terms, create legal or security risk, or misuse the service. Sections that by their nature should survive termination will continue to apply.',
            ],
          },
          {
            title: 'Governing Law and Consumer Rights',
            paragraphs: [
              'These terms are governed by the laws of Spain, without regard to conflict-of-law rules.',
              'If you are a consumer who lives in a place that gives you mandatory consumer protections or venue rights, those protections continue to apply to the extent required by law.',
            ],
          },
          {
            title: 'Changes and Contact',
            paragraphs: [
              'We may update these terms from time to time. When we do, we will post the updated version on this page and change the effective date.',
              'If you have questions about these terms, contact us by email at info@myrents-app.com, through this website, or through the public support forum.',
            ],
          },
        ],
      },
      privacy: {
        eyebrow: 'Privacy Policy',
        title: 'Privacy Policy for My Rents',
        intro:
          'This Privacy Policy explains how Daniel Rodríguez collects, uses, stores, and shares personal information when you use My Rents, this website, and related support channels.',
        updatedAt: 'March 23, 2026',
        sections: [
          {
            title: 'Who Controls Your Data',
            paragraphs: [
              'My Rents is operated by Daniel Rodríguez. For questions, privacy requests, or support, you can contact us at info@myrents-app.com, through this website, or through the public support forum.',
              'For privacy-law purposes, Daniel Rodríguez is the controller of the personal information described in this policy unless another notice explicitly says otherwise.',
            ],
          },
          {
            title: 'Information We Collect',
            paragraphs: [
              'We collect the information you provide directly, such as your email address, account details, messages you send for support, and any information you choose to place in the app or on the website.',
              'You can upload or create content inside the app, including property and portfolio records, lease information, contacts, events, tasks, notes, expenses, manual bills or invoices, reports, links, images, documents, and similar files or records. We use that uploaded content to provide the app features you request and to show the content back to you. We do not use that content for advertising, remarketing, or unrelated commercial profiling.',
              'We also collect technical and usage information such as app activity, device or browser data, approximate diagnostics, crash information, logs, and analytics events. If you purchase PRO, we may receive subscription or transaction status information from the relevant app store, but we do not receive your full payment card details from the store.',
              'If you choose to post in the public forum, the information you publish there can be visible to other people who use the forum.',
            ],
          },
          {
            title: 'How We Use Your Information',
            paragraphs: [
              'We use personal information to create and secure accounts, provide the features of My Rents, store and display your uploaded content, synchronize data where applicable, respond to support requests, manage subscriptions and purchases, and maintain the service.',
              'We also use information to monitor performance, understand how the app and website are used, diagnose problems, improve the product, prevent misuse, and comply with legal obligations.',
              'We do not show third-party ads in My Rents. We do not use remarketing services for marketing or advertising purposes, and we do not use your uploaded property information, images, or documents for anything other than operating and supporting the service for you.',
            ],
          },
          {
            title: 'Marketing Emails',
            paragraphs: [
              'When you create a My Rents account, you may be opted in by default to receive marketing emails from My Rents about product updates, offers, tips, and related news.',
              'Each marketing email includes an unsubscribe link to a page where you can submit the email address you want removed from future marketing emails. If you opt out, we may keep your email address on a suppression list so we can honor your request and avoid sending further marketing emails to that address.',
            ],
          },
          {
            title: 'Legal Bases for Processing Under GDPR',
            paragraphs: [
              'Where the GDPR or similar laws apply, we process personal information under one or more of the following legal bases: performance of a contract with you, legitimate interests in operating and securing My Rents, compliance with legal obligations, and your consent where consent is required.',
              'Some information, such as account details and the content needed to provide app features, is necessary if you want to create an account or use certain parts of the service. If you do not provide that information, some features may not work or may not be available.',
              'We do not use automated decision-making or profiling that produces legal effects or similarly significant effects about you.',
            ],
          },
          {
            title: 'Analytics, Cookies, and Similar Technologies',
            paragraphs: [
              'We use Google Analytics and Firebase-related analytics tools to understand general product usage, diagnose problems, and improve My Rents. These tools may collect technical identifiers, device information, app events, and similar usage data.',
              'Our website or app may use cookies or similar technologies for analytics, preference storage, or essential operation. We do not use advertising or remarketing cookies for cross-context behavioral advertising.',
              'You can usually control cookies through your browser or device settings, but some features may work differently if certain technologies are disabled.',
            ],
          },
          {
            title: 'Sharing of Information',
            paragraphs: [
              'We may share information with service providers that help us operate My Rents, such as analytics, hosting, infrastructure, storage, authentication, support, app-store, or technical service providers, but only for the purposes described in this policy.',
              'We may also disclose information when required by law, to respond to lawful requests, to protect rights or safety, to investigate fraud or abuse, or in connection with a business transfer if one ever occurs.',
              'We do not sell personal information. We do not share personal information for cross-context behavioral advertising.',
            ],
          },
          {
            title: 'International Transfers and Retention',
            paragraphs: [
              'Some service providers may process information in countries other than your own. Where required by law, we rely on appropriate safeguards for international transfers.',
              'We keep account information and user content for as long as your account remains active or as long as needed to provide the service you requested. If you delete your account, we will delete or anonymize personal information unless we need to keep limited records for legal, tax, accounting, security, fraud-prevention, dispute-resolution, or backup-recovery purposes.',
              'The exact retention period can vary depending on the type of information and the reason we hold it, but we aim to keep personal information only for as long as reasonably necessary.',
            ],
          },
          {
            title: 'Your Privacy Rights',
            paragraphs: [
              'Depending on where you live, you may have the right to access, correct, update, delete, restrict, or object to the processing of your personal information, and to request data portability. Where processing is based on consent, you may withdraw consent at any time for future processing.',
              'If you are in the European Economic Area, the United Kingdom, or another jurisdiction with similar rights, you may also have the right to lodge a complaint with your local data protection authority.',
              'To exercise rights, contact us at info@myrents-app.com or use the contact options on this website. We may need to verify your identity before completing certain requests.',
            ],
          },
          {
            title: 'California Privacy Notice (CCPA and CPRA)',
            paragraphs: [
              'If you are a California resident and California privacy law applies to your use of My Rents, this section describes categories of personal information we may have collected in the previous 12 months and your related rights.',
              'The categories of personal information we may collect include identifiers such as email address and account details; commercial information such as subscription or purchase status supplied by the relevant app store; internet or electronic network activity such as app events, diagnostics, and analytics; user-generated content such as property records, leases, contacts, notes, invoices, images, documents, and links; and any sensitive personal information you choose to store in the app.',
              'We collect this information from you, from your devices when you use the app or website, from service providers such as Google Analytics and Firebase, and from app-store providers when they confirm purchase or subscription status. We use it to operate the service, secure accounts, provide support, manage subscriptions, analyze usage, comply with law, and enforce our terms.',
              'Subject to applicable law, California residents may request to know, access, correct, or delete personal information, opt out of sale or sharing, and limit the use and disclosure of sensitive personal information. Because My Rents does not sell personal information and does not share personal information for cross-context behavioral advertising, there is currently no sale or sharing activity to opt out of. If sensitive personal information is present in user-uploaded content, we use it only to provide the services you request and not to infer characteristics about you.',
              'We will not discriminate against you for exercising applicable privacy rights. However, some services may not work if necessary information is deleted or no longer available.',
            ],
          },
          {
            title: "Children's Privacy",
            paragraphs: [
              'My Rents is not directed to children under 13, and we do not knowingly collect personal information from children under 13.',
              'If we learn that an account was created by or for a child under 13 without appropriate legal authorization, we will take steps to delete the account and associated personal information.',
            ],
          },
          {
            title: 'Security',
            paragraphs: [
              'We use reasonable administrative, technical, and organizational measures designed to protect personal information. No internet or storage system can be guaranteed to be completely secure, so we cannot promise absolute security.',
            ],
          },
          {
            title: 'Changes to This Privacy Policy',
            paragraphs: [
              'We may update this Privacy Policy from time to time. When we do, we will post the new version here and update the effective date.',
            ],
          },
          {
            title: 'Contact Us',
            paragraphs: [
              'If you have questions, suggestions, or privacy requests, contact us at info@myrents-app.com, through this website, or through the public support forum.',
            ],
          },
        ],
      },
      eula: {
        eyebrow: 'End-User License Agreement',
        title: 'EULA for My Rents',
        intro:
          'This End-User License Agreement explains what rights and responsibilities apply when you use My Rents software.',
        updatedAt: 'March 11, 2026',
        sections: [
          {
            title: 'What this EULA covers',
            paragraphs: [
              'This EULA governs your acquisition and use of My Rents software ("Software") directly from Daniel Rodriguez or through an authorized reseller or distributor. It applies to free versions and any other versions provided within the app.',
              'By installing, accepting, or using My Rents software, you accept this agreement and agree to be bound by its terms. If you are agreeing on behalf of a company or other legal entity, you represent that you have authority to bind that entity and its affiliates. If you do not agree, do not install or use the Software.',
              'This EULA applies only to the Software supplied by Daniel Rodriguez and to updates, supplements, Internet-based services, and support services for the Software unless those items include their own terms.',
            ],
          },
          {
            title: 'License Grant',
            paragraphs: [
              'Daniel Rodriguez hereby grants you a personal, non-transferable, non-exclusive licence to use My Rents software on your devices in accordance with the terms of this EULA agreement. You are permitted to load My Rents software (pc, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of My Rents software.',
              'You are not permitted to:',
              '• Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things.',
              '• Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose.',
              '• Allow any third party to use the Software on behalf of or for the benefit of any third party.',
              '• Use the Software in any way which breaches any applicable local, national or international law.',
              '• Use the Software for any purpose that Daniel Rodriguez considers is a breach of this EULA agreement.',
            ],
          },
          {
            title: 'Intellectual Property and Ownership',
            paragraphs: [
              'Daniel Rodriguez shall at all times retain ownership of the Software as originally downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of Daniel Rodriguez.',
              'Daniel Rodriguez reserves the right to grant licences to use the Software to third parties.',
            ],
          },
          {
            title: 'Termination',
            paragraphs: [
              'This EULA agreement is effective from the date you first use the Software and shall continue until terminated. You may terminate it at any time upon written notice to Daniel Rodriguez.',
              'It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the Software.',
              'The provisions that by their nature continue and survive will survive any termination of this EULA agreement.',
            ],
          },
          {
            title: 'Governing Law',
            paragraphs: [
              'This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of es.',
            ],
          },
        ],
      },
      dataDeletion: {
        eyebrow: 'Data Deletion',
        title: 'Data Deletion for My Rents',
        intro:
          'This page explains how to request deletion of your My Rents account and associated personal data, both inside the app and from the web.',
        updatedAt: 'March 11, 2026',
        sections: [
          {
            title: 'Request Deletion From the Web',
            paragraphs: [
              'You can request deletion by contacting info@myrents-app.com or by using the contact options on this website. Please send the request from, or clearly identify, the email address associated with your account so we can verify it.',
              'For privacy and security reasons, we may ask for additional information before completing a deletion request.',
            ],
          },
          {
            title: 'What We Delete',
            paragraphs: [
              'When an account deletion request is completed, we aim to delete or anonymize the personal information associated with that account, including account profile information, property and portfolio records, leases, reminders, events, contacts, notes, expenses, invoices or manual bills, uploaded images, uploaded documents, links, and other in-app content connected to the account.',
            ],
          },
          {
            title: 'What We May Retain',
            paragraphs: [
              'We may retain limited information if it is reasonably necessary for legal, tax, accounting, fraud-prevention, security, backup-recovery, or dispute-resolution purposes, or where an app store requires us to keep transaction-related records.',
            ],
          },
          {
            title: 'Timing',
            paragraphs: [
              'We aim to act on verified deletion requests without undue delay. In most cases, requests are completed within 30 days, although some backup systems or legally required retention periods may take longer to clear fully.',
            ],
          },
          {
            title: 'Need Help?',
            paragraphs: [
              'If you need help with deletion, write to info@myrents-app.com or use the contact options on this website.',
            ],
          },
        ],
      },
    },
    controls: {
      previousLabel: 'Previous',
      nextLabel: 'Next',
    },
  },
  es: {
    playStoreUrl: PLAY_STORE_URL,
    appStoreUrl: APP_STORE_URL,
    meta: {
      routeTitles: {
        home: 'My Rents | App para gestionar alquileres y propiedades',
        pricing: 'Planes y precios | My Rents',
        terms: 'Términos del servicio | My Rents',
        privacy: 'Política de privacidad | My Rents',
        eula: 'EULA | My Rents',
        dataDeletion: 'Eliminación de datos | My Rents',
        unsubscribe: 'Cancelar suscripción | My Rents',
        forum: 'Foro | My Rents',
      },
    },
    header: {
      brandLabel: 'My Rents',
      navAriaLabel: 'Principal',
      ctaLabel: 'Ver planes',
      languageLabel: 'Idioma',
      languages: sharedLanguages,
    },
    primaryNav: [
      { label: 'Cómo ayuda', hash: '#features' },
      { label: 'Precios', hash: '/pricing' },
      { label: 'Centro de documentos', hash: '#documents-center' },
      { label: 'Cómo empezar', hash: '#how-to-start' },
      { label: 'Foro', hash: '/forum' },
    ],
    hero: {
      rating: '4,8/5 en Google Play · Más de 5.000 descargas',
      title: 'Una sola app. Todos tus alquileres. Sin caos.',
      copy: 'Deja de saltar entre hojas de cálculo, WhatsApp, extractos bancarios y calendarios. Controla cobros, gastos, contratos y documentos desde el móvil — para que los impuestos sean un repaso, no un trabajo de reconstrucción.',
      playStoreCtaLabel: 'Descargar para Android',
      appStoreCtaLabel: 'Descargar para iOS',
      contactCtaLabel: 'Contactar con nosotros',
      snapshot: screenshotEs1,
      snapshotAlt: 'Panel de My Rents mostrando portfolio, pagos y gestión de contratos',
      trustLabel: 'Más de 5.000 propietarios y empresas confían en nosotros',
      partnersLabel: 'Pensada para propietarios que ya han superado el sistema DIY',
      partners: [
        'Propietarios con ingresos extra',
        '2 a 10 unidades',
        'Autogestión diaria',
        'Pequeños inversores',
        'Porfolios en crecimiento',
      ],
    },
    comparison: {
      intro: {
        eyebrow: 'El problema real',
        title: 'Por qué se complica',
        description:
          'La fricción no suele ser un gran desastre puntual. Es el esfuerzo constante de reconstruir qué pasó, qué está pendiente y a qué propiedad pertenece cada cosa.',
      },
      columns: [
        {
          label: 'Cuando todo está disperso',
          tone: 'muted',
          items: [
            {
              badge: 'CR',
              title: 'Cobros en modo adivinanza',
              description:
                'Los pagos tardíos, parciales o manuales te obligan a recordar quién ha pagado, quién debe todavía y cuánto retraso lleva.',
            },
            {
              badge: 'RC',
              title: 'Los recibos pierden contexto',
              description:
                'Reparaciones pagadas en efectivo, facturas de proveedores, capturas y correos dejan de servir cuando ya no están ligados al inmueble correcto.',
            },
            {
              badge: 'FC',
              title: 'Las fechas se esconden en documentos',
              description:
                'Renovaciones, vencimientos, inspecciones y recordatorios viven entre PDFs, chats y calendarios en vez de formar parte del mismo flujo.',
            },
            {
              badge: 'IM',
              title: 'La campaña fiscal se convierte en rescate',
              description:
                'Acabas reconstruyendo el año desde carpetas, notificaciones y extractos bancarios porque los registros nunca estuvieron realmente conectados.',
            },
          ],
        },
        {
          label: 'Cuando toda la historia vive en una sola app',
          tone: 'brand',
          items: [
            {
              badge: 'HI',
              title: 'El historial queda unido al inmueble',
              description:
                'Cada propiedad conserva unidos contratos, pagos, gastos, archivos, fotos y contactos para que el contexto siga ahí cuando lo necesites.',
            },
            {
              badge: 'EC',
              title: 'El estado de cobro se ve rápido',
              description:
                'Ves qué se ha pagado, qué está vencido y qué necesita seguimiento sin recomponer notas de varias herramientas.',
            },
            {
              badge: 'EV',
              title: 'Eventos y vencimientos siguen localizables',
              description:
                'Fechas importantes, recordatorios, inspecciones y renovaciones siguen ligadas al inmueble en vez de depender de la memoria.',
            },
            {
              badge: 'RP',
              title: 'Los informes dejan de ser una carrera de última hora',
              description:
                'Tus cifras, exportaciones y documentos de apoyo ya están organizados cuando toca revisar rentabilidad o preparar impuestos.',
            },
          ],
        },
      ],
    },
    documentsCenter: documentsCenterContentByLocale.es,
    services: {
      intro: {
        eyebrow: 'Recorrido',
        title: 'Mira cómo My Rents te ayuda a gestionar alquileres con menos fricción',
        description:
          'Flujos clave para propietarios que quieren tener propiedades, cobros, inquilinos e informes en un mismo sitio.',
      },
      items: [
        {
          eyebrow: 'Gestión de porfolios',
          title: 'Añade propiedades y organízalas en porfolios',
          description:
            'Crea cada inmueble con su ubicación, tipo y datos clave, y agrupa activos por ciudad, estrategia o estructura de inversión.',
          image: createPlaceholder(960, 720, '281b60', 'f4efff', 'Estructura del porfolio'),
        },
        {
          eyebrow: 'Contratos y cobros',
          title: 'Controla contratos, vencimientos y facturas',
          description:
            'Gestiona varios contratos por propiedad, revisa el estado del pago y haz seguimiento por WhatsApp, correo o llamada.',
          image: createPlaceholder(960, 720, '3a2a81', 'f4efff', 'Contratos y cobros'),
        },
        {
          eyebrow: 'Operativa',
          title: 'Registra gastos, eventos, tareas y contactos clave',
          description:
            'Apunta reparaciones, suministros, inspecciones, recordatorios y los profesionales que puedes necesitar en cualquier momento.',
          image: createPlaceholder(960, 720, '4b33a0', 'f4efff', 'Centro operativo'),
        },
        {
          eyebrow: 'Informes',
          title: 'Revisa informes, impuestos, deudas y exportaciones CSV',
          description:
            'Controla rentabilidad, deudas, gastos, cálculos fiscales y exportaciones CSV para decidir con datos reales.',
          image: createPlaceholder(960, 720, '5d45bc', 'f4efff', 'Informes e impuestos'),
        },
      ],
    },
    testimonial: {
      communityLabel: 'Propietarios, gestores e inversores',
      quote: 'Conecta con otros propietarios e inversores en el foro',
      description:
        'Usa el foro público para resolver dudas, compartir formas de trabajo, conocer personas con ideas de inversión parecidas e intercambiar información útil para mejorar las decisiones y resultados de nuestros alquileres.',
      author: 'Comunidad abierta para gestión de alquileres',
      forumLabel: 'Visitar foro',
      forumUrl: FORUM_URL,
      statA: 'Ideas compartidas',
      statB: 'Contacto y aprendizaje',
      avatars: ['F', 'O', 'R', 'O', '+'],
    },
    forum: {
      hero: {
        title: 'Únete al foro de alquileres',
        description:
          'Conecta con propietarios, gestores e inversores inmobiliarios. Comparte flujos de trabajo, resuelve dudas e intercambia consejos prácticos que mejoran tu negocio de alquiler.',
        ctaLabel: 'Abrir foro',
        forumUrl: FORUM_URL,
      },
      features: {
        eyebrow: 'Lo que puedes hacer',
        title: 'Una comunidad creada para profesionales del alquiler',
        description:
          'Tanto si gestionas una unidad como un porfolio en crecimiento, el foro te da acceso directo a personas que se enfrentan a las mismas decisiones operativas cada día.',
        items: [
          {
            title: 'Pregunta y responde',
            description:
              'Publica sobre gestión de contratos, selección de inquilinos, flujos de mantenimiento, preparación fiscal y normativa local. Recibe respuestas de propietarios e inversores con experiencia.',
          },
          {
            title: 'Comparte tu forma de trabajar',
            description:
              'Describe cómo controlas los cobros, gestionas reparaciones, organizas documentos y te preparas para la declaración de impuestos. Aprende de otros y mejora tu propio proceso.',
          },
          {
            title: 'Conoce inversores con objetivos similares',
            description:
              'Encuentra personas que invierten en los mismos mercados, tipos de propiedad o estrategias. Intercambia información del mercado y amplía tu red profesional.',
          },
          {
            title: 'Mantente al día sobre tendencias de alquiler',
            description:
              'Sigue debates sobre leyes de alquiler, cambios del mercado, opciones de financiación y herramientas de gestión. Mantén tu conocimiento actualizado sin perseguir fuentes dispersas.',
          },
          {
            title: 'Recibe opiniones sobre tu configuración',
            description:
              'Describe tu sistema actual de administración de propiedades y recibe sugerencias de quienes ya han resuelto los mismos problemas organizativos.',
          },
          {
            title: 'Accede a consejos exclusivos',
            description:
              'Lee consejos prácticos que vienen de la experiencia real: el tipo de conocimiento operativo que rara vez se publica en artículos o tutoriales.',
          },
        ],
      },
      faq: {
        eyebrow: 'Preguntas frecuentes',
        title: 'Cómo funciona el foro',
        description: 'Todo lo que necesitas saber para participar en la comunidad de My Rents.',
        items: [
          {
            question: '¿Es gratis unirse al foro?',
            answer:
              'Sí, el foro público está abierto a todo el mundo. No necesitas una suscripción a My Rents para leer debates, hacer preguntas o compartir tu experiencia.',
          },
          {
            question: '¿Necesito la app para participar?',
            answer:
              'No, el foro funciona en una plataforma independiente. Puedes acceder desde cualquier navegador en ordenador o móvil sin instalar nada.',
          },
          {
            question: '¿Qué temas puedo tratar?',
            answer:
              'Cualquier tema relacionado con la gestión de alquileres: contratos, inquilinos, mantenimiento, gastos, impuestos, seguros, dudas legales, tendencias del mercado y consejos de flujo de trabajo. La comunidad se centra en el conocimiento práctico y operativo.',
          },
          {
            question: '¿Puedo promocionar mis servicios?',
            answer:
              'El foro es un espacio para compartir conocimiento, no un mercado. La autopromoción no suele ser bien recibida a menos que responda directamente a una pregunta o resuelva un problema concreto planteado por la comunidad.',
          },
        ],
      },
    },
    benefits: {
      intro: {
        eyebrow: 'Funciones',
        title: 'Todo lo que un propietario necesita para tener orden y control',
        description:
          'Pensada para los detalles operativos que suelen perderse entre contratos, gastos, mantenimiento y documentación.',
      },
      items: [
        {
          title: 'Estructura de porfolios',
          description:
            'Visualiza tus propiedades tal y como las gestionas, ya sea una unidad, un edificio o un porfolio más amplio.',
        },
        {
          title: 'Seguimiento de contratos',
          description:
            'Mantén importes, vencimientos, estado de pago y varios contratos por propiedad siempre fáciles de revisar.',
        },
        {
          title: 'Control de gastos',
          description:
            'Registra mantenimiento, suministros y compras puntuales sin perder el contexto financiero.',
        },
        {
          title: 'Archivo documental',
          description:
            'Guarda contratos, informes de inspección y otros documentos donde puedas encontrarlos cuando los necesites.',
        },
        {
          title: 'Evidencia fotográfica',
          description:
            'Construye un registro visual del estado de habitaciones, muebles y estancias en entregas, inspecciones o entradas.',
        },
        {
          title: 'Informes y ajustes fiscales',
          description:
            'Trabaja con rentabilidad, deuda, exportaciones y ajustes fiscales adaptados a tu proceso local.',
        },
      ],
    },
    pricing: {
      intro: {
        eyebrow: 'My Rents',
        title: 'Elige tu plan',
        description:
          'Cada plan desbloquea las mismas funciones — elige la duración que mejor encaje con tu forma de trabajar.',
      },
      message: {
        title: 'Un plan, cuatro opciones',
        description:
          'Elige la duración que mejor encaje con tu ritmo de adopción. Después de descargar la app verás el precio local exacto para cada opción antes de confirmar nada.',
      },
      plans: [
        {
          key: 'weekly',
          name: 'Semanal',
          summary:
            'Ideal si quieres probar My Rents por un periodo corto y ver cómo encaja en tu forma de trabajar.',
          detail: 'Suscripción semanal',
          subdetail: 'El precio aparece dentro de la app tras descargarla',
          ctaLabel: 'Descargar y ver precio',
        },
        {
          key: 'monthly',
          name: 'Mensual',
          summary:
            'Ideal si quieres empezar a usar My Rents ahora y mantener el compromiso corto mientras compruebas cómo encaja en tu forma de trabajar.',
          detail: 'Suscripción mensual',
          subdetail: 'El precio aparece dentro de la app tras descargarla',
          ctaLabel: 'Descargar y ver precio',
        },
        {
          key: 'annual',
          name: 'Anual',
          badge: 'Prueba de 7 días',
          summary:
            'La mejor opción si ya sabes que My Rents forma parte de tu operativa diaria y quieres el precio más bajo por mes.',
          detail: 'Suscripción anual',
          subdetail: 'El precio aparece dentro de la app tras descargarla',
          ctaLabel: 'Descargar y ver precio',
        },
        {
          key: 'lifetime',
          name: 'Pago único',
          summary:
            'Un solo pago, sin renovaciones. La mejor opción si quieres acceso permanente a My Rents.',
          detail: 'Pago único',
          subdetail: 'El precio aparece dentro de la app tras descargarla',
          ctaLabel: 'Descargar y ver precio',
        },
      ],
      featuresTitle: 'Qué incluye',
      featuresDescription:
        'Cualquiera de las opciones de abajo activa el mismo conjunto de funciones. Solo cambia la duración.',
      features: [
        {
          title: 'Porfolios ilimitados',
          description:
            'Crea todos los grupos que necesites para entender tus inversiones tal y como realmente las gestionas.',
        },
        {
          title: 'Propiedades ilimitadas',
          description: 'Sin límite en el número de inmuebles o unidades que puedes añadir.',
        },
        {
          title: 'Generador de facturas',
          description: 'Crea facturas de alquiler y cargos adicionales en pocos pasos.',
        },
        {
          title: 'Exportación CSV',
          description:
            'Saca tus números fuera de la app cuando quieras una visión más clara o necesites trabajar con otros informes.',
        },
        {
          title: 'Soporte personal y directo',
          description:
            'Sin bots ni colas externas. Hablas directamente con quien desarrolla My Rents.',
        },
        {
          title: 'Sin anuncios',
          description: 'Gestiona tus alquileres sin interrupciones ni elementos promocionales.',
        },
      ],
      storePricing: {
        title: 'Mira tu precio en la app',
        description:
          'El precio depende del país y aparece dentro de My Rents. Descarga la app, abre la pantalla correspondiente y verás el importe exacto para tu región antes de pagar.',
      },
      livePricing: {
        introDescription:
          'Cada plan desbloquea las mismas funciones — elige la duración que mejor encaje con tu forma de trabajar. Los precios de abajo llegan directamente desde Google Play para el país seleccionado en esta página.',
        messageDescription:
          'Elige la duración que mejor encaje con tu ritmo. Cambia el país para ver el precio actual de Google Play para los planes semanal, mensual, anual y de pago único antes de descargar la app.',
        storeTitle: 'Consulta tu precio por país',
        storeDescription:
          'Estos precios reflejan el importe de Google Play para el país seleccionado. La compra y la facturación siguen ocurriendo dentro de My Rents.',
        selectorLabel: 'País',
        selectedCountryLabel: 'Precio de Google Play para {country}',
        loadingLabel: 'Cargando precio...',
        unavailableLabel: 'Precio no disponible para este país',
      },
      singleUser: {
        title: 'Un usuario por plan',
        description:
          'Las opciones de esta página están pensadas para una sola cuenta y una sola persona.',
      },
      companies: {
        title: '¿Necesitas cuentas de equipo?',
        description:
          'Si tu negocio necesita varios usuarios, cuentas separadas o una configuración distinta, escríbenos y te ayudaremos a encontrar la mejor opción.',
      },
      androidCtaLabel: 'Consultar precio en Android',
      iOSCtaLabel: 'Consultar precio en iOS',
      businessCtaLabel: 'Contactar con nosotros para cuentas de empresa',
      popularLabel: 'Mejor opción',
      trialLabel: 'Prueba gratuita de 7 días',
      trialCancelLabel: 'Cancelar en cualquier momento',
      freeModeTitle: 'Prueba My Rents gratis',
      freeModeEyebrow: 'Sin necesidad de planes',
      freeModeCopy:
        'Comienza con nuestro modo gratuito limitado para probar la aplicación con tus propiedades. Actualiza a un plan de pago cuando estés listo para portfolios ilimitados, generación de facturas y más.',
      countryNoteLabel: '*Precios mostrados para {country}',
    },
    process: {
      intro: {
        eyebrow: 'Cómo recuperar el control',
        title: 'Cómo empezar',
        description:
          'No hace falta hacer una migración perfecta. Empieza con los inmuebles, contratos y documentos que necesitas hoy y a partir de ahí mantén cada nuevo cobro, gasto y recordatorio en orden.',
      },
      steps: [
        {
          index: '01',
          title: 'Descarga la app y pruébala con tu operativa real',
          description:
            'Usa la prueba de 7 días con propiedades reales, no con datos de ejemplo, para comprobar rápido si la estructura encaja contigo.',
        },
        {
          index: '02',
          title: 'Añade primero tus propiedades y unidades',
          description:
            'Crea la base de tu porfolio para que cada pago, documento y recordatorio tenga desde el principio un sitio claro.',
        },
        {
          index: '03',
          title: 'Adjunta los contratos activos y los documentos que siempre acabas buscando',
          description:
            'Guarda contratos, seguros, facturas y archivos clave que normalmente acaban repartidos entre carpetas, correos y capturas.',
        },
        {
          index: '04',
          title: 'Empieza a registrar pagos, gastos y eventos en un solo sitio',
          description:
            'Controla impagos, reparaciones, suministros y actividad de proveedores sin reconstruir la misma historia cada mes.',
        },
        {
          index: '05',
          title: 'Revisa informes y exportaciones cuando necesites respuestas',
          description:
            'Cuando quieras revisar rentabilidad, deudas, impuestos o documentación de apoyo, la información ya estará ligada al inmueble correcto.',
        },
      ],
    },
    impact: {
      intro: {
        eyebrow: 'Lo que cambia',
        title: 'Cómo ayuda My Rents',
        description:
          'My Rents sigue teniendo muchas funciones, pero el valor real es que cada una te ayuda a responder una pregunta más rápido, en vez de abrir otro sitio donde buscar.',
      },
      items: [
        {
          title: 'Vista del porfolio',
          description:
            'Pasa de la vista de porfolio al detalle del inmueble con contratos, contactos, archivos y notas ya conectados.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del área de porfolios de My Rents',
        },
        {
          title: 'Estado de cobro',
          description:
            'Controla estados de cobro, facturas y acciones de seguimiento sin preguntarte qué inquilino va dos semanas tarde y cuál solo hizo un pago parcial.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del área de propiedades de My Rents',
        },
        {
          title: 'Datos del contrato',
          description:
            'Revisa acuerdo activo, vencimientos y flujo de facturación desde la misma ficha en vez de saltar entre contratos y hojas de cálculo.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del flujo de contratos y cobros de My Rents',
        },
        {
          title: 'Datos del inmueble',
          description:
            'Datos del inmueble, unidades, notas y registros enlazados permanecen juntos para entender un activo rápido aunque lleves días sin mirarlo.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del área de gastos e informes de My Rents',
        },
        {
          title: 'Registro de gastos',
          description:
            'Guarda reparaciones, suministros y gastos puntuales mientras están frescos para que las cifras sigan cuadrando y la prueba quede adjunta.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del área de documentos y fotos de My Rents',
        },
        {
          title: 'Informes',
          description:
            'Usa informes, control de deuda, vistas de rentabilidad y exportaciones sin rehacer el año a partir de extractos bancarios.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt:
            'Captura en español de las herramientas fiscales, mapas y contactos de My Rents',
        },
        {
          title: 'Eventos',
          description:
            'Reparaciones, inspecciones, recordatorios y tareas recurrentes siguen visibles para que el seguimiento no viva solo en tu cabeza.',
          image: calendarImage,
          imageAlt: 'Captura en español del calendario y eventos',
        },
        {
          title: 'Contactos',
          description:
            'Mantén inquilinos, proveedores y asesores organizados por propiedad para no buscar entre chats cuando algo se rompe.',
          image: contactsListImage,
          imageAlt: 'Captura en español de la lista de contactos',
        },
      ],
    },
    team: {
      intro: {
        eyebrow: 'A quién ayudamos',
        title: 'Propietarios, gestores y equipos de alquiler',
        description:
          'Desde quien gestiona una sola vivienda hasta equipos que coordinan contratos y pagos en varios inmuebles, My Rents concentra todo en un único sitio.',
      },
      members: [
        {
          name: 'Propietario independiente',
          role: 'Gestor individual',
          image: screenshotEs1,
        },
        {
          name: 'Propietario de porfolio',
          role: 'Operador multivivienda',
          image: screenshotEs1,
        },
        {
          name: 'Gestor de propiedad',
          role: 'Responsable operativo',
          image: screenshotEs1,
        },
        {
          name: 'Empresa de gestión',
          role: 'Equipo profesional',
          image: screenshotEs1,
        },
      ],
    },
    appLanguages: {
      intro: {
        eyebrow: 'Idiomas',
        title: 'Disponible en 6 idiomas',
        description:
          'Usa My Rents en el idioma que mejor encaje con tu forma de gestionar alquileres.',
      },
      listLabel: 'Idiomas disponibles',
      languages: ['Español', 'English', 'Italiano', 'Deutsch', 'Français', 'Português'],
      summary: 'Disponible en la app: español, inglés, italiano, alemán, francés y portugués.',
      note: 'La web y la app de My Rents están disponibles en los seis idiomas indicados aquí.',
    },
    faq: {
      intro: {
        eyebrow: 'FAQ',
        title: 'Preguntas frecuentes',
        description: 'Respuestas claras sobre precios, operativa diaria, informes y soporte.',
      },
      items: [
        {
          question: '¿Puede My Rents sustituir las hojas de cálculo en un porfolio pequeño?',
          answer:
            'Ese es precisamente uno de los usos más habituales. My Rents te ayuda a dejar de repartir cobros, gastos, documentos, recordatorios y notas de cada propiedad entre hojas y carpetas separadas.',
        },
        {
          question: '¿Qué cambia entre los planes de 1 mes, 6 meses y 1 año?',
          answer:
            'Solo cambia la duración de la suscripción. Las funciones PRO son las mismas en todas las opciones.',
        },
        {
          question: '¿Cómo veo el precio para mi país?',
          answer:
            'Elige tu país en la sección PRO de esta web para ver el precio actual de Google Play. Puedes confirmar el mismo importe local dentro de My Rents antes de completar la compra.',
        },
        {
          question: '¿El precio de PRO es para un usuario o para una empresa?',
          answer:
            'El precio PRO de esta página es para una sola cuenta de usuario. Si tu empresa necesita varias cuentas o una configuración distinta, contacta con nosotros directamente.',
        },
        {
          question: '¿Puedo registrar gastos y facturas puntuales?',
          answer:
            'Sí. My Rents está pensada para registrar tanto gastos recurrentes como suministros o mantenimiento, como compras puntuales, muebles o reparaciones urgentes.',
        },
        {
          question: '¿La app ayuda con contratos y recordatorios de cobro?',
          answer:
            'Sí. Puedes guardar varios contratos por propiedad, revisar vencimientos y estado de pago, y usar acciones de seguimiento por WhatsApp, correo o llamada.',
        },
      ],
    },
    contact: {
      emailAddress: CONTACT_EMAIL,
      forumUrl: FORUM_URL,
      intro: {
        eyebrow: '¿Sigues gestionando alquileres desde demasiados sitios?',
        title: 'Cuéntanos qué se complica',
        description:
          'Si los cobros, documentos, gastos o vencimientos se están perdiendo entre varias herramientas, cuéntanos qué parte se te hace más pesada y te orientaremos sobre la mejor forma de usar My Rents.',
      },
      forumPrefix: 'Foro público',
      forumCtaLabel: 'Abrir foro público',
      form: {
        nameLabel: 'Nombre',
        namePlaceholder: 'Tu nombre',
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu@email.com',
        messageLabel: '¿En qué necesitas ayuda?',
        messagePlaceholder:
          'Cuéntanos qué gestionas, qué se te hace pesado hoy o qué duración de suscripción estás valorando.',
        subjectLabel: 'Contacto desde la web de',
        submitLabel: 'Abrir borrador de email',
        success:
          'Tu aplicación de correo debería abrirse con un borrador preparado. Si no ocurre, escribe directamente a info@myrents-app.com.',
      },
    },
    footer: {
      summary:
        'Gestión de alquileres para propietarios que quieren tener la historia completa de cada inmueble en un solo lugar.',
      menuHeading: 'Menú',
      legalHeading: 'Legal',
      contactHeading: 'Contacto',
      legalLinks: spanishLegalLinks,
      upgradePrompt: '¿Dudas antes de activar PRO? Escríbenos.',
      forumLinkLabel: 'Foro',
      privacyLinkLabel: 'Privacidad',
      dataDeletionLinkLabel: 'Eliminación de datos',
      bottomLabel: 'Copyright © 2026 My Rents',
    },
    legalUi: {
      backHomeLabel: 'Volver al inicio',
      lastUpdatedPrefix: 'Última actualización',
    },
    unsubscribe: {
      eyebrow: 'Preferencias de email',
      title: 'Cancelar la suscripción a los emails de marketing de My Rents',
      intro:
        'Escribe la dirección de email donde recibes los mensajes de marketing de My Rents y la añadiremos a nuestra lista de exclusión para futuras campañas.',
      form: {
        emailLabel: 'Correo electrónico',
        emailPlaceholder: 'tu@email.com',
        helper:
          'Esta página es solo para emails de marketing. Usa la misma dirección donde recibes mensajes de My Rents.',
        note: 'Los emails de servicio, facturación o cuenta pueden seguir enviándose cuando sean necesarios para operar My Rents o dar soporte a tu cuenta.',
        submitLabel: 'Dar de baja este email',
      },
      homeLabel: 'Volver al inicio',
      contactLabel: 'Contactar con soporte',
      states: {
        submitting: {
          title: 'Guardando tu solicitud',
          description:
            'Estamos añadiendo esta dirección a la lista de exclusión de My Rents ahora mismo.',
        },
        success: {
          title: 'Este email ya está dado de baja',
          description:
            'Hemos guardado esta dirección en la lista de exclusión de My Rents para futuros emails de marketing. Ten en cuenta que puede haber un pequeño retraso si acababas de recibir una campaña ya preparada.',
        },
        invalidEmail: {
          title: 'Introduce un email válido',
          description:
            'No hemos podido usar esa dirección de email. Revisa si está bien escrita e inténtalo de nuevo con la dirección que recibió los emails de marketing de My Rents.',
        },
        unavailable: {
          title: 'La baja todavía no está configurada',
          description:
            'A la web le falta la configuración de Firebase necesaria para guardar solicitudes de baja. Contacta con soporte y te daremos de baja manualmente.',
        },
        error: {
          title: 'No hemos podido guardar tu solicitud',
          description:
            'Ha ocurrido un problema al guardar esta solicitud de baja. Vuelve a intentarlo o contacta con soporte para que eliminemos la dirección manualmente.',
        },
      },
    },
    legalPages: {
      terms: {
        eyebrow: 'Términos y condiciones',
        title: 'Términos y condiciones de My Rents',
        intro:
          'Estos Términos y Condiciones regulan el uso de My Rents, de esta web y del foro público relacionado, operados por Daniel Rodríguez.',
        updatedAt: '11 de marzo de 2026',
        sections: [
          {
            title: 'Quién es el responsable de My Rents',
            paragraphs: [
              'My Rents es una app de gestión de alquileres y un servicio online relacionado prestado por Daniel Rodríguez como desarrollador individual y no como sociedad mercantil.',
              'Estos términos se aplican a la app móvil, a esta web, al foro público y a cualquier contenido o canal de soporte relacionado, salvo que exista un acuerdo separado que indique expresamente lo contrario.',
            ],
          },
          {
            title: 'Aceptación y requisitos de edad',
            paragraphs: [
              'Al descargar My Rents, crear una cuenta, comprar PRO o usar el servicio, aceptas estos términos y también la Política de privacidad.',
              'Debes tener al menos 13 años para usar My Rents. El servicio no está dirigido a menores de 13 años y no puedes crear una cuenta en nombre de una persona que no cumpla ese requisito de edad.',
            ],
          },
          {
            title: 'Cuentas y seguridad',
            paragraphs: [
              'Puede que necesites crear una cuenta para utilizar algunas funciones. Aceptas proporcionar información exacta y mantener en secreto tus credenciales de acceso.',
              'Eres responsable de la actividad que se realice con tu cuenta. Ponte en contacto con nosotros cuanto antes si crees que alguien ha accedido sin autorización.',
              'Podemos suspender o cerrar cuentas si consideramos razonablemente que ha existido un uso indebido, fraude, abuso de seguridad o un incumplimiento material de estos términos.',
            ],
          },
          {
            title: 'Qué ofrece My Rents',
            paragraphs: [
              'My Rents permite crear y organizar propiedades, porfolios, contratos, gastos, contactos, eventos, recordatorios, notas, enlaces, imágenes, documentos, estadísticas, ajustes fiscales, informes y registros relacionados.',
              'My Rents es una herramienta de organización. Sigues siendo responsable de la exactitud de tus datos y de cumplir las leyes de arrendamiento, fiscales, contables, de consumo, de privacidad y cualquier otra normativa que te resulte aplicable.',
            ],
          },
          {
            title: 'Funciones PRO, compras y promociones',
            paragraphs: [
              'Algunas funciones requieren una suscripción PRO o una compra dentro de la app. Los precios, periodos de cobro, impuestos, renovaciones, cancelaciones y reembolsos pueden ser gestionados por la tienda de aplicaciones correspondiente y pueden variar según el país o la moneda.',
              'Si compras a través de Google Play u otra tienda, también se aplican las reglas de pago y suscripción de esa tienda, y prevalecerán cuando entren en conflicto con estos términos.',
              'Podemos ofrecer pruebas, descuentos o promociones en determinados momentos. Salvo que la oferta indique otra cosa, dichas promociones pueden modificarse, limitarse o retirarse en cualquier momento dentro de lo permitido por la ley.',
            ],
          },
          {
            title: 'Tu contenido',
            paragraphs: [
              'Conservas la titularidad de la información y de los archivos que subes o introduces en My Rents, incluidos datos de propiedades, datos de inquilinos o contactos, notas, imágenes, documentos, facturas y demás registros.',
              'Nos concedes un derecho limitado y no exclusivo para alojar, almacenar, procesar, copiar de seguridad, transmitir y mostrar ese contenido únicamente en la medida necesaria para operar, proteger, dar soporte y mejorar My Rents para ti.',
              'Eres responsable de asegurarte de que tienes derecho a subir o almacenar el contenido que introduces en el servicio y de que hacerlo no infringe la ley ni derechos de terceros.',
            ],
          },
          {
            title: 'Uso aceptable',
            paragraphs: [
              'No puedes usar My Rents para incumplir la ley, infringir derechos ajenos, subir código malicioso, interferir con el servicio, intentar accesos no autorizados, extraer datos del servicio o hacer ingeniería inversa de la app, salvo cuando una ley imperativa permita lo contrario.',
              'Si utilizas el foro u otras zonas públicas, no publiques contenido ilegal, abusivo, difamatorio, spam o confidencial, ni compartas datos personales que no estés autorizado a divulgar.',
            ],
          },
          {
            title: 'Propiedad intelectual',
            paragraphs: [
              'El software de la app, el código, los textos, las capturas, el diseño visual, la marca, los logotipos, las marcas registradas y el resto del contenido original de My Rents son propiedad exclusiva de Daniel Rodríguez o de sus licenciantes y están protegidos por la normativa de propiedad intelectual aplicable.',
              'Estos términos no te transfieren la propiedad de My Rents ni de sus derechos de propiedad intelectual. Salvo por los derechos limitados necesarios para usar el servicio, todos los derechos quedan reservados.',
            ],
          },
          {
            title: 'Servicios de terceros',
            paragraphs: [
              'My Rents puede depender de servicios de terceros o enlazar con ellos, como Google Play, herramientas de mapas, proveedores de analítica, servicios de Firebase o la plataforma del foro público. Esos servicios están controlados por sus propios proveedores y pueden regirse por condiciones y políticas de privacidad independientes.',
              'No somos responsables del contenido, funcionamiento o políticas de servicios de terceros salvo en la medida exigida por la ley aplicable.',
            ],
          },
          {
            title: 'Disponibilidad, cambios y exención de garantías',
            paragraphs: [
              'Podemos actualizar, modificar, suspender o interrumpir todo o parte de My Rents para mejorar el servicio, mantener la seguridad, cumplir la ley o responder a necesidades operativas.',
              'En la máxima medida permitida por la ley, My Rents se ofrece tal cual y según disponibilidad. No garantizamos que el servicio esté siempre libre de interrupciones, errores o que resulte adecuado para cualquier uso concreto.',
              'My Rents no ofrece asesoramiento jurídico, fiscal, contable ni de inversión.',
            ],
          },
          {
            title: 'Limitación de responsabilidad',
            paragraphs: [
              'En la máxima medida permitida por la ley, Daniel Rodríguez no será responsable de daños indirectos, incidentales, especiales, consecuenciales, ejemplares o punitivos, ni de pérdidas de beneficios, ingresos, datos, reputación comercial o interrupciones de negocio derivadas del uso de My Rents o relacionadas con él.',
              'Si la responsabilidad no puede excluirse, nuestra responsabilidad total por reclamaciones derivadas de My Rents o relacionadas con el servicio quedará limitada al importe que hayas pagado por PRO en los 12 meses anteriores al hecho que origine la reclamación.',
              'Nada de lo previsto en estos términos excluye o limita una responsabilidad que no pueda excluirse o limitarse legalmente conforme a normas imperativas o de protección del consumidor.',
            ],
          },
          {
            title: 'Terminación',
            paragraphs: [
              'Puedes dejar de usar My Rents en cualquier momento y eliminar tu cuenta desde la app o contactando con nosotros por los medios descritos en esta web.',
              'Podemos suspender o terminar el acceso si incumples materialmente estos términos, generas un riesgo legal o de seguridad, o haces un uso indebido del servicio. Las cláusulas que por su naturaleza deban seguir vigentes continuarán aplicándose tras la terminación.',
            ],
          },
          {
            title: 'Ley aplicable y derechos del consumidor',
            paragraphs: [
              'Estos términos se rigen por las leyes de España, sin aplicar sus normas sobre conflicto de leyes.',
              'Si eres consumidor y la legislación de tu lugar de residencia te reconoce protecciones obligatorias o derechos procesales irrenunciables, esas protecciones seguirán siendo aplicables en la medida exigida por la ley.',
            ],
          },
          {
            title: 'Cambios y contacto',
            paragraphs: [
              'Podemos actualizar estos términos de vez en cuando. Cuando lo hagamos, publicaremos la versión actualizada en esta página y cambiaremos la fecha de entrada en vigor.',
              'Si tienes preguntas sobre estos términos, puedes escribirnos a info@myrents-app.com, contactar a través de esta web o usar el foro público de soporte.',
            ],
          },
        ],
      },
      privacy: {
        eyebrow: 'Política de privacidad',
        title: 'Política de privacidad de My Rents',
        intro:
          'Esta Política de privacidad explica cómo Daniel Rodríguez recopila, utiliza, conserva y comparte información personal cuando usas My Rents, esta web y los canales de soporte relacionados.',
        updatedAt: '23 de marzo de 2026',
        sections: [
          {
            title: 'Quién controla tus datos',
            paragraphs: [
              'My Rents está gestionada por Daniel Rodríguez como desarrollador individual. Para preguntas, solicitudes de privacidad o soporte, puedes escribir a info@myrents-app.com, contactar a través de esta web o utilizar el foro público de soporte.',
              'A efectos de la normativa de privacidad, Daniel Rodríguez actúa como responsable del tratamiento de la información personal descrita en esta política, salvo que otro aviso indique expresamente lo contrario.',
            ],
          },
          {
            title: 'Información que recopilamos',
            paragraphs: [
              'Recopilamos la información que nos proporcionas directamente, como tu dirección de correo electrónico, los datos de tu cuenta, los mensajes que envías a soporte y cualquier información que decidas introducir en la app o en la web.',
              'Puedes subir o crear contenido dentro de la app, como registros de propiedades y porfolios, datos de contratos, contactos, eventos, tareas, notas, gastos, facturas o recibos manuales, informes, enlaces, imágenes, documentos y archivos o registros similares. Ese contenido subido se utiliza para ofrecerte las funciones de la app y para mostrártelo de vuelta a ti. No usamos ese contenido para publicidad, remarketing ni perfiles comerciales ajenos al servicio.',
              'También recopilamos información técnica y de uso, como actividad dentro de la app, datos del dispositivo o navegador, diagnósticos aproximados, información de fallos, logs y eventos analíticos. Si compras PRO, podemos recibir información sobre el estado de la suscripción o de la transacción desde la tienda correspondiente, pero no recibimos de la tienda los datos completos de tu tarjeta de pago.',
              'Si decides publicar contenido en el foro público, la información que compartas allí puede ser visible para otras personas que usen el foro.',
            ],
          },
          {
            title: 'Cómo usamos tu información',
            paragraphs: [
              'Usamos la información personal para crear y proteger cuentas, ofrecer las funciones de My Rents, almacenar y mostrar el contenido que subes, sincronizar datos cuando corresponda, responder a solicitudes de soporte, gestionar suscripciones y compras, y mantener el servicio.',
              'También utilizamos la información para controlar el rendimiento, comprender cómo se usa la app y la web, diagnosticar problemas, mejorar el producto, prevenir usos indebidos y cumplir obligaciones legales.',
              'No mostramos anuncios de terceros en My Rents. No usamos servicios de remarketing con fines de marketing o publicidad y no utilizamos la información de propiedades, imágenes o documentos que subes para nada distinto de operar y darte soporte en el servicio.',
            ],
          },
          {
            title: 'Emails de marketing',
            paragraphs: [
              'Cuando creas una cuenta en My Rents, puedes quedar suscrito por defecto a recibir emails de marketing de My Rents sobre novedades del producto, ofertas, consejos y noticias relacionadas.',
              'Cada email de marketing incluye un enlace a una página donde puedes indicar la dirección de email que quieres excluir de futuros envíos de marketing. Si te das de baja, podemos conservar tu dirección en una lista de exclusión para respetar tu solicitud y evitar nuevos envíos de marketing a esa dirección.',
            ],
          },
          {
            title: 'Bases jurídicas del tratamiento bajo el GDPR',
            paragraphs: [
              'Cuando se aplica el GDPR u otras leyes similares, tratamos la información personal con base en una o varias de estas bases jurídicas: ejecución de un contrato contigo, interés legítimo en operar y proteger My Rents, cumplimiento de obligaciones legales y tu consentimiento cuando el consentimiento sea necesario.',
              'Algunos datos, como los de la cuenta y el contenido necesario para prestar funciones de la app, son imprescindibles si quieres crear una cuenta o utilizar determinadas partes del servicio. Si no facilitas esa información, algunas funciones pueden no estar disponibles o no funcionar correctamente.',
              'No utilizamos decisiones automatizadas ni perfiles que produzcan efectos jurídicos o efectos significativamente similares sobre ti.',
            ],
          },
          {
            title: 'Analítica, cookies y tecnologías similares',
            paragraphs: [
              'Usamos Google Analytics y herramientas de analítica relacionadas con Firebase para entender el uso general del producto, diagnosticar problemas y mejorar My Rents. Estas herramientas pueden recopilar identificadores técnicos, información del dispositivo, eventos de uso y datos similares.',
              'Nuestra web o la app pueden utilizar cookies o tecnologías parecidas para analítica, almacenamiento de preferencias o funcionamiento esencial. No usamos cookies publicitarias ni de remarketing para publicidad comportamental entre contextos.',
              'Normalmente puedes controlar las cookies desde la configuración del navegador o del dispositivo, aunque algunas funciones pueden comportarse de forma diferente si se desactivan ciertas tecnologías.',
            ],
          },
          {
            title: 'Cómo compartimos la información',
            paragraphs: [
              'Podemos compartir información con proveedores de servicios que nos ayudan a operar My Rents, como proveedores de analítica, alojamiento, infraestructura, almacenamiento, autenticación, soporte, tienda de aplicaciones o servicios técnicos, pero solo para las finalidades descritas en esta política.',
              'También podemos divulgar información cuando sea necesario para cumplir la ley, responder a solicitudes válidas, proteger derechos o la seguridad, investigar fraude o abuso, o en relación con una transferencia del servicio si alguna vez se produjera.',
              'No vendemos información personal. No compartimos información personal para publicidad comportamental entre contextos.',
            ],
          },
          {
            title: 'Transferencias internacionales y conservación',
            paragraphs: [
              'Algunos proveedores de servicios pueden tratar información en países distintos al tuyo. Cuando la ley lo exige, utilizamos garantías adecuadas para las transferencias internacionales.',
              'Conservamos la información de la cuenta y el contenido del usuario mientras la cuenta siga activa o mientras sea necesario para prestar el servicio solicitado. Si eliminas tu cuenta, eliminaremos o anonimizaremos la información personal salvo que necesitemos conservar registros limitados por motivos legales, fiscales, contables, de seguridad, prevención del fraude, resolución de disputas o recuperación desde copias de seguridad.',
              'El periodo exacto de conservación puede variar según el tipo de información y la razón por la que la mantenemos, pero procuramos conservar la información personal solo durante el tiempo razonablemente necesario.',
            ],
          },
          {
            title: 'Tus derechos de privacidad',
            paragraphs: [
              'Dependiendo de dónde vivas, puedes tener derecho a acceder, corregir, actualizar, eliminar, limitar u oponerte al tratamiento de tu información personal, y a solicitar la portabilidad de los datos. Cuando el tratamiento se base en tu consentimiento, puedes retirarlo en cualquier momento con efectos hacia el futuro.',
              'Si estás en el Espacio Económico Europeo, en el Reino Unido o en otra jurisdicción con derechos similares, también puedes presentar una reclamación ante tu autoridad local de protección de datos.',
              'Para ejercer tus derechos, escribe a info@myrents-app.com o utiliza las opciones de contacto de esta web. Puede que necesitemos verificar tu identidad antes de completar determinadas solicitudes.',
            ],
          },
          {
            title: 'Aviso de privacidad para California (CCPA y CPRA)',
            paragraphs: [
              'Si resides en California y la legislación de privacidad de California resulta aplicable a tu uso de My Rents, esta sección describe las categorías de información personal que podríamos haber recopilado durante los 12 meses anteriores y los derechos relacionados.',
              'Las categorías de información personal que podemos recopilar incluyen identificadores como dirección de correo electrónico y datos de cuenta; información comercial como estado de suscripción o compra facilitado por la tienda de aplicaciones correspondiente; actividad en internet o en redes electrónicas como eventos de la app, diagnósticos y analítica; contenido generado por el usuario como registros de propiedades, contratos, contactos, notas, facturas, imágenes, documentos y enlaces; y cualquier información sensible que decidas almacenar en la app.',
              'Recopilamos esa información de ti, de tus dispositivos cuando utilizas la app o la web, de proveedores de servicios como Google Analytics y Firebase, y de las tiendas de aplicaciones cuando confirman el estado de una compra o suscripción. La usamos para operar el servicio, proteger cuentas, dar soporte, gestionar suscripciones, analizar el uso, cumplir la ley y hacer cumplir nuestros términos.',
              'Sujeto a la ley aplicable, los residentes de California pueden solicitar conocer, acceder, corregir o eliminar información personal, oponerse a la venta o sharing de información personal y limitar el uso y la divulgación de información personal sensible. Como My Rents no vende información personal ni la comparte para publicidad comportamental entre contextos, actualmente no existe actividad de venta o sharing de la que puedas darte de baja. Si en el contenido que subes hay información personal sensible, solo la usamos para prestarte los servicios que solicitas y no para inferir características sobre ti.',
              'No te discriminaremos por ejercer derechos de privacidad aplicables. No obstante, algunos servicios pueden dejar de funcionar si se elimina información necesaria o deja de estar disponible.',
            ],
          },
          {
            title: 'Privacidad de menores',
            paragraphs: [
              'My Rents no está dirigida a menores de 13 años y no recopilamos conscientemente información personal de menores de 13 años.',
              'Si descubrimos que se ha creado una cuenta por o para un menor de 13 años sin la autorización legal correspondiente, tomaremos medidas para eliminar la cuenta y la información personal asociada.',
            ],
          },
          {
            title: 'Seguridad',
            paragraphs: [
              'Utilizamos medidas administrativas, técnicas y organizativas razonables para proteger la información personal. Ningún sistema de internet o almacenamiento puede garantizarse como completamente seguro, por lo que no podemos prometer seguridad absoluta.',
            ],
          },
          {
            title: 'Cambios en esta Política de privacidad',
            paragraphs: [
              'Podemos actualizar esta Política de privacidad ocasionalmente. Cuando lo hagamos, publicaremos aquí la nueva versión y actualizaremos la fecha de entrada en vigor.',
            ],
          },
          {
            title: 'Contacto',
            paragraphs: [
              'Si tienes preguntas, sugerencias o solicitudes de privacidad, puedes escribirnos a info@myrents-app.com, contactar a través de esta web o utilizar el foro público de soporte.',
            ],
          },
        ],
      },
      eula: {
        eyebrow: 'Contrato de licencia de usuario final',
        title: 'EULA de My Rents',
        intro:
          'Este Contrato de Licencia de Usuario Final regula la descarga, instalación, acceso y uso del software My Rents proporcionado por Daniel Rodríguez.',
        updatedAt: '11 de marzo de 2026',
        sections: [
          {
            title: 'Concesión de licencia',
            paragraphs: [
              'Sujeto a este EULA, Daniel Rodríguez te concede una licencia limitada, personal, revocable, no exclusiva, intransferible y no sublicenciable para instalar y usar My Rents en dispositivos que controles y para su finalidad prevista.',
              'El software se licencia, no se vende. Tu derecho a utilizar My Rents depende de que cumplas este EULA y, en su caso, las condiciones de la tienda de aplicaciones correspondiente.',
            ],
          },
          {
            title: 'Cuentas, conectividad y compras',
            paragraphs: [
              'Algunas funciones de My Rents requieren una cuenta, acceso a internet o una suscripción PRO activa. Las suscripciones y compras dentro de la app pueden ser cobradas y gestionadas por la tienda de aplicaciones desde la que descargaste la app.',
              'Las condiciones de la tienda, sus reglas de cobro, renovación y reembolso pueden aplicarse además de este EULA y prevalecerán cuando una regla obligatoria de la tienda entre en conflicto con este EULA.',
            ],
          },
          {
            title: 'Restricciones',
            paragraphs: [
              'Salvo en la medida en que una ley imperativa permita otra cosa, no puedes copiar, modificar, distribuir, vender, alquilar, sublicenciar, descompilar, hacer ingeniería inversa, extraer datos ni crear obras derivadas de My Rents o de cualquiera de sus partes.',
              'No puedes eludir restricciones técnicas o de seguridad, usar el software con fines ilícitos ni permitir que terceros no autorizados accedan al software a través de tu cuenta.',
            ],
          },
          {
            title: 'Tus datos y tu contenido',
            paragraphs: [
              'Conservas la titularidad del contenido que subes a My Rents, incluidas imágenes, documentos, notas, registros de propiedades, facturas y demás información relacionada.',
              'Nos concedes los derechos limitados necesarios para alojar, procesar, copiar de seguridad, transmitir y mostrar ese contenido con el fin de operar, dar soporte, proteger y mejorar My Rents para ti.',
              'Eres responsable de la legalidad, exactitud y permisos asociados al contenido que subas o almacenes mediante el software.',
            ],
          },
          {
            title: 'Titularidad de My Rents',
            paragraphs: [
              'My Rents, incluyendo el software, el código fuente, los textos, la estructura visual, los logotipos, las marcas y el resto del contenido original, sigue siendo propiedad exclusiva de Daniel Rodríguez o de los licenciantes correspondientes.',
              'Este EULA solo te concede los derechos de uso limitados que se indican expresamente aquí. Todos los demás derechos quedan reservados.',
            ],
          },
          {
            title: 'Actualizaciones y componentes de terceros',
            paragraphs: [
              'Podemos publicar actualizaciones, correcciones, parches o nuevas versiones de My Rents. Algunas actualizaciones pueden ser necesarias por motivos de seguridad, compatibilidad o para seguir utilizando determinadas funciones.',
              'My Rents puede incluir o depender de servicios o componentes de terceros, incluidos servicios de tiendas de aplicaciones, servicios de Google, servicios de Firebase o herramientas de mapas. Esos terceros pueden regirse por sus propios términos legales y avisos de privacidad.',
            ],
          },
          {
            title: 'Exención de garantías',
            paragraphs: [
              'En la máxima medida permitida por la ley, My Rents se ofrece tal cual y según disponibilidad, sin garantías de ningún tipo, ya sean expresas, implícitas o legales.',
              'No garantizamos que el software esté libre de interrupciones o errores, que sea completamente seguro o que resulte adecuado para cualquier flujo de trabajo, exigencia legal o necesidad empresarial concreta.',
            ],
          },
          {
            title: 'Limitación de responsabilidad',
            paragraphs: [
              'En la máxima medida permitida por la ley, Daniel Rodríguez no será responsable de daños indirectos, incidentales, consecuenciales, especiales, ejemplares o punitivos, ni de pérdidas de beneficios, ingresos, reputación, datos o interrupciones del negocio derivadas de My Rents o relacionadas con ella.',
              'Si la responsabilidad no puede excluirse, la responsabilidad total derivada de My Rents o relacionada con ella quedará limitada al importe que hayas pagado por PRO en los 12 meses anteriores al hecho que origine la reclamación.',
              'Nada de lo previsto en este EULA excluye o limita una responsabilidad que no pueda excluirse o limitarse legalmente conforme a la ley aplicable.',
            ],
          },
          {
            title: 'Duración y terminación',
            paragraphs: [
              'Este EULA entra en vigor cuando instalas, accedes o usas My Rents por primera vez y continuará vigente hasta su terminación.',
              'Puedes terminarlo en cualquier momento dejando de usar el software y eliminando tu cuenta, cuando corresponda. Podemos suspender o terminar tu licencia de forma inmediata si incumples materialmente este EULA, haces un uso indebido del software o generas un riesgo legal o de seguridad.',
              'Al terminar, tu derecho a usar el software finaliza de inmediato y debes dejar de utilizar My Rents. Si te suscribiste a través de una tienda de aplicaciones, también deberás gestionar la cancelación en la tienda correspondiente cuando así proceda.',
            ],
          },
          {
            title: 'Ley aplicable y derechos del consumidor',
            paragraphs: [
              'Este EULA se rige por las leyes de España, sin aplicar sus normas sobre conflicto de leyes.',
              'Si resides en una jurisdicción que te reconoce protecciones obligatorias como consumidor, dichas protecciones seguirán a tu disposición en la medida exigida por la ley.',
            ],
          },
          {
            title: 'Contacto',
            paragraphs: [
              'Si tienes preguntas sobre este EULA, puedes escribirnos a info@myrents-app.com, contactar a través de esta web o utilizar el foro público de soporte.',
            ],
          },
        ],
      },
      dataDeletion: {
        eyebrow: 'Eliminación de datos',
        title: 'Eliminación de datos de My Rents',
        intro:
          'Esta página explica cómo solicitar la eliminación de tu cuenta de My Rents y de los datos personales asociados, tanto desde la app como desde la web.',
        updatedAt: '11 de marzo de 2026',
        sections: [
          {
            title: 'Solicitar la eliminación desde la web',
            paragraphs: [
              'Puedes solicitar la eliminación escribiendo a info@myrents-app.com o utilizando las opciones de contacto de esta web. Envía la solicitud desde la dirección de correo asociada a tu cuenta, o identifícala claramente, para que podamos verificarla.',
              'Por razones de privacidad y seguridad, es posible que necesitemos solicitar información adicional antes de completar la solicitud de eliminación.',
            ],
          },
          {
            title: 'Qué eliminamos',
            paragraphs: [
              'Cuando se completa una solicitud de eliminación de cuenta, nuestro objetivo es borrar o anonimizar la información personal asociada a esa cuenta, incluidos los datos del perfil, los registros de propiedades y porfolios, contratos, recordatorios, eventos, contactos, notas, gastos, facturas o cargos manuales, imágenes subidas, documentos subidos, enlaces y el resto del contenido de la app vinculado a la cuenta.',
            ],
          },
          {
            title: 'Qué podemos conservar',
            paragraphs: [
              'Podemos conservar información limitada cuando sea razonablemente necesaria por motivos legales, fiscales, contables, de prevención del fraude, de seguridad, de recuperación desde copias de seguridad o de resolución de disputas, o cuando una tienda de aplicaciones nos exija conservar determinados registros relacionados con transacciones.',
            ],
          },
          {
            title: 'Plazos',
            paragraphs: [
              'Intentamos actuar sobre las solicitudes verificadas de eliminación sin dilación indebida. En la mayoría de los casos, las solicitudes se completan en un plazo de 30 días, aunque algunos sistemas de copia de seguridad o periodos de conservación exigidos por la ley pueden tardar más en quedar totalmente depurados.',
            ],
          },
          {
            title: '¿Necesitas ayuda?',
            paragraphs: [
              'Si necesitas ayuda con la eliminación de datos, escribe a info@myrents-app.com o utiliza las opciones de contacto disponibles en esta web.',
            ],
          },
        ],
      },
    },
    controls: {
      previousLabel: 'Anterior',
      nextLabel: 'Siguiente',
    },
  },
}

type SiteContentWithoutLegalPages = Omit<SiteContent, 'legalPages'>
const localizedLegalPages = baseSiteContentByLocale.en.legalPages

const createLocalizedSiteContent = (content: SiteContentWithoutLegalPages): SiteContent => ({
  ...content,
  legalPages: localizedLegalPages,
})

const deOverride: SiteContentWithoutLegalPages = {
  playStoreUrl: PLAY_STORE_URL,
  appStoreUrl: APP_STORE_URL,
  meta: {
    routeTitles: {
      home: 'My Rents | Mietverwaltungs-App',
      pricing: 'Preise | My Rents',
      terms: 'Nutzungsbedingungen | My Rents',
      privacy: 'Datenschutzerklärung | My Rents',
      eula: 'EULA | My Rents',
      dataDeletion: 'Datenlöschung | My Rents',
      unsubscribe: 'Marketing-E-Mails abbestellen | My Rents',
      forum: 'Forum | My Rents',
    },
  },
  header: {
    brandLabel: 'My Rents',
    navAriaLabel: 'Hauptnavigation',
    ctaLabel: 'Preise ansehen',
    languageLabel: 'Sprache',
    languages: sharedLanguages,
  },
  primaryNav: [
    { label: "So hilft's", hash: '#features' },
    { label: 'Preise', hash: '/pricing' },
    { label: 'Dokumentenzentrum', hash: '#documents-center' },
    { label: 'So startest du', hash: '#how-to-start' },
    { label: 'Forum', hash: '/forum' },
  ],
  hero: {
    rating: 'Mit 4,8/5 auf Google Play bewertet',
    title: 'Schluss mit dem Verwaltungschaos bei Vermietungen',
    copy: 'Schon wenige Immobilien reichen für echtes Verwaltungschaos: Mieten kommen verspätet oder in Teilbeträgen, Reparaturrechnungen landen im Auto oder in WhatsApp, Vertragsdaten stecken in PDFs und zur Steuerzeit beginnt das Rekonstruieren. My Rents bringt Immobilien, Mietverträge, Zahlungen, Ausgaben, Dokumente und Kontakte an einen Ort.',
    playStoreCtaLabel: 'Für Android herunterladen',
    appStoreCtaLabel: 'Für iOS herunterladen',
    contactCtaLabel: 'Kontaktiere uns',
    snapshot: screenshotEn1,
    snapshotAlt: 'Screenshot des My Rents Dashboards',
    trustLabel: 'Über 5.000 Vermieter und Unternehmen vertrauen uns',
    partnersLabel: 'Gemacht für Vermieter, die aus der DIY-Verwaltung herausgewachsen sind',
    partners: [
      'Vermieter mit Zusatzeinkommen',
      '2 bis 10 Mieteinheiten',
      'Selbstverwaltende Eigentümer',
      'Kleine Investoren',
      'Wachsende Portfolios',
    ],
  },
  comparison: {
    intro: {
      eyebrow: 'Das eigentliche Problem',
      title: 'Warum es unübersichtlich wird',
      description:
        'Die Reibung entsteht selten durch ein einziges großes Problem. Es ist der ständige Aufwand, wieder zusammenzusetzen, was passiert ist, was fällig ist und zu welcher Immobilie etwas gehört.',
    },
    columns: [
      {
        label: 'Wenn alles verstreut ist',
        tone: 'muted',
        items: [
          {
            badge: 'RG',
            title: 'Miete wird zum Ratespiel',
            description:
              'Verspätete, teilweise oder manuelle Zahlungen zwingen dich dazu, dir zu merken, wer bezahlt hat, wer noch schuldet und wie weit jemand im Rückstand ist.',
          },
          {
            badge: 'RC',
            title: 'Belege verlieren den Zusammenhang',
            description:
              'Bar bezahlte Reparaturen, Lieferantenrechnungen, Screenshots und Rechnungen per E-Mail bringen wenig, wenn sie nicht mehr mit der richtigen Immobilie verknüpft sind.',
          },
          {
            badge: 'LD',
            title: 'Vertragsdaten verstecken sich in Dokumenten',
            description:
              'Verlängerungen, Enddaten, Inspektionen und Erinnerungen leben in PDFs, Chats und Kalendern statt in einem einzigen Ablauf.',
          },
          {
            badge: 'TX',
            title: 'Die Steuerzeit wird zur Rettungsaktion',
            description:
              'Du verbringst Tage damit, das Jahr aus Ordnern, Benachrichtigungen und Kontoauszügen wieder zusammenzusetzen, weil die Unterlagen nie wirklich verbunden waren.',
          },
        ],
      },
      {
        label: 'Wenn die ganze Historie in einer App zusammenkommt',
        tone: 'brand',
        items: [
          {
            badge: 'PH',
            title: 'Die Historie bleibt an der Immobilie',
            description:
              'Jede Immobilie behält Mietverträge, Zahlungen, Ausgaben, Dateien, Fotos und Kontakte an einem Ort, damit der Zusammenhang immer erhalten bleibt.',
          },
          {
            badge: 'PS',
            title: 'Der Zahlungsstatus ist schnell sichtbar',
            description:
              'Sieh schnell, was bezahlt wurde, was überfällig ist und wo Nachfassen nötig ist, ohne Notizen aus mehreren Tools zusammenzufügen.',
          },
          {
            badge: 'EV',
            title: 'Termine und Fristen bleiben auffindbar',
            description:
              'Wichtige Daten, Erinnerungen, Inspektionen und Verlängerungen bleiben mit der Immobilie verknüpft, statt nur vom Gedächtnis abzuhängen.',
          },
          {
            badge: 'RP',
            title: 'Berichte werden nicht zur Last-minute-Aktion',
            description:
              'Deine Zahlen, Exporte und Belege sind schon organisiert, wenn du Performance prüfen oder Steuern vorbereiten willst.',
          },
        ],
      },
    ],
  },
  documentsCenter: documentsCenterContentByLocale.de,
  services: {
    intro: {
      eyebrow: 'App-Tour',
      title: 'So hilft dir My Rents, Vermietungen mit weniger Reibung zu verwalten',
      description:
        'Kernabläufe für Eigentümer, die Immobilien-, Zahlungs-, Mieter- und Reportingdaten an einem Ort haben wollen.',
    },
    items: [
      {
        eyebrow: 'Portfolio-Management',
        title: 'Immobilien anlegen und in Portfolios organisieren',
        description:
          'Lege jede Immobilie mit Standort, Typ und wichtigen Details an und gruppiere Bestände nach Stadt, Strategie oder Portfoliostruktur.',
        image: createPlaceholder(960, 720, '281b60', 'f4efff', 'Portfolio-Struktur'),
      },
      {
        eyebrow: 'Mietverträge und Abrechnung',
        title: 'Mietverträge, Fälligkeiten und Rechnungen verfolgen',
        description:
          'Verwalte mehrere Mietverträge pro Immobilie, prüfe Zahlungsstatus und fasse per WhatsApp, E-Mail oder Direktanruf nach.',
        image: createPlaceholder(960, 720, '3a2a81', 'f4efff', 'Verträge und Abrechnung'),
      },
      {
        eyebrow: 'Operatives Arbeiten',
        title: 'Ausgaben, Ereignisse, Aufgaben und wichtige Kontakte erfassen',
        description:
          'Halte Reparaturen, Nebenkosten, Inspektionen, Erinnerungen und die Dienstleister fest, die du jederzeit brauchen könntest.',
        image: createPlaceholder(960, 720, '4b33a0', 'f4efff', 'Betriebszentrale'),
      },
      {
        eyebrow: 'Berichte',
        title: 'Berichte, Steuern, Schulden und CSV-Exporte prüfen',
        description:
          'Behalte Rentabilität, Schulden, Ausgaben, Steuerberechnungen und CSV-Exporte im Blick, damit Entscheidungen auf echten Portfoliodaten beruhen.',
        image: createPlaceholder(960, 720, '5d45bc', 'f4efff', 'Berichte und Steuern'),
      },
    ],
  },
  testimonial: {
    communityLabel: 'Eigentümer, Verwalter und Investoren',
    quote: 'Tausche dich im Forum mit anderen Eigentümern und Investoren aus',
    description:
      'Nutze das öffentliche Forum, um Fragen zu stellen, Arbeitsweisen zu teilen, Menschen mit ähnlichen Anlageideen kennenzulernen und praktische Informationen auszutauschen, die bessere Entscheidungen und Ergebnisse im Vermietungsalltag unterstützen.',
    author: 'Offene Community für Mietverwaltung',
    forumLabel: 'Forum besuchen',
    forumUrl: FORUM_URL,
    statA: 'Geteilte Ideen',
    statB: 'Support und Networking',
    avatars: ['F', 'O', 'R', 'U', 'M'],
  },
  forum: {
    hero: {
      title: 'Tritt dem Vermietungsforum bei',
      description:
        'Vernetze dich mit Vermietern, Verwaltern und Immobilieninvestoren. Teile Arbeitsabläufe, stelle Fragen und tausche praktische Tipps aus, die dein Vermietungsgeschäft voranbringen.',
      ctaLabel: 'Forum öffnen',
      forumUrl: FORUM_URL,
    },
    features: {
      eyebrow: 'Was du tun kannst',
      title: 'Eine Community für Vermietungsprofis',
      description:
        'Egal ob du eine Einheit oder ein wachsendes Portfolio verwaltest — das Forum gibt dir direkten Zugang zu Menschen, die täglich vor denselben operativen Entscheidungen stehen.',
      items: [
        {
          title: 'Fragen stellen und beantworten',
          description:
            'Poste zu Mietverträgen, Mieterauswahl, Instandhaltungsabläufen, Steuervorbereitung und lokalen Vorschriften. Erhalte Antworten von erfahrenen Vermietern und Investoren.',
        },
        {
          title: 'Deine Arbeitsweise teilen',
          description:
            'Beschreibe, wie du Mieten verfolgst, Reparaturen abwickelst, Dokumente organisierst und dich auf die Steuerzeit vorbereitest. Lerne von anderen und verbessere deinen eigenen Prozess.',
        },
        {
          title: 'Investoren mit ähnlichen Zielen treffen',
          description:
            'Finde Leute, die in denselben Märkten, Immobilientypen oder Strategien investieren. Tausche Markteinblicke aus und baue dein berufliches Netzwerk auf.',
        },
        {
          title: 'Über Miettrends auf dem Laufenden bleiben',
          description:
            'Verfolge Diskussionen zu Mietgesetzen, Marktveränderungen, Finanzierungsoptionen und Verwaltungstools. Halte dein Wissen aktuell, ohne verstreute Quellen zu durchsuchen.',
        },
        {
          title: 'Feedback zu deinem Setup erhalten',
          description:
            'Beschreibe deinen aktuellen Verwaltungsstack und erhalte Vorschläge von anderen, die dieselben organisatorischen Probleme bereits gelöst haben.',
        },
        {
          title: 'Exklusive Tipps entdecken',
          description:
            'Lies praktische Ratschläge aus echter Erfahrung — das operative Wissen, das selten in Artikeln oder Anleitungen veröffentlicht wird.',
        },
      ],
    },
    faq: {
      eyebrow: 'Häufige Fragen',
      title: 'So funktioniert das Forum',
      description: 'Alles, was du über die Teilnahme an der My Rents Community wissen musst.',
      items: [
        {
          question: 'Ist der Beitritt zum Forum kostenlos?',
          answer:
            'Ja, das öffentliche Forum steht allen offen. Du brauchst kein My Rents Abonnement, um Diskussionen zu lesen, Fragen zu stellen oder deine Erfahrungen zu teilen.',
        },
        {
          question: 'Brauche ich die App, um mitzumachen?',
          answer:
            'Nein, das Forum läuft auf einer separaten Plattform. Du kannst von jedem Browser auf Desktop oder Mobilgerät darauf zugreifen, ohne etwas zu installieren.',
        },
        {
          question: 'Welche Themen kann ich besprechen?',
          answer:
            'Jedes Thema rund um die Mietverwaltung: Mietverträge, Mieter, Instandhaltung, Ausgaben, Steuern, Versicherungen, Rechtsfragen, Markttrends und Workflow-Tipps. Die Community konzentriert sich auf praktisches, operatives Wissen.',
        },
        {
          question: 'Kann ich meine Dienstleistungen bewerben?',
          answer:
            'Das Forum ist ein Raum zum Wissensaustausch, kein Marktplatz. Eigenwerbung ist grundsätzlich unerwünscht, es sei denn, sie beantwortet direkt eine Frage oder löst ein konkretes Problem der Community.',
        },
      ],
    },
  },
  benefits: {
    intro: {
      eyebrow: 'Funktionen',
      title: 'Alles, was Vermieter brauchen, um organisiert und im Blick zu bleiben',
      description:
        'Entwickelt für die operativen Details, die sonst zwischen Mietverträgen, Ausgaben, Instandhaltung und Papierkram verloren gehen.',
    },
    items: [
      {
        title: 'Portfoliostruktur',
        description:
          'Sieh deine Immobilien so, wie du sie wirklich verwaltest, egal ob einzelne Einheit, Gebäude oder größeres Portfolio.',
      },
      {
        title: 'Überblick über Mietverträge',
        description:
          'Halte Miethöhe, Fälligkeiten, Status und mehrere Mietverträge pro Immobilie leicht prüfbar.',
      },
      {
        title: 'Ausgaben erfassen',
        description:
          'Erfasse Instandhaltung, Nebenkosten und Einmalkäufe, ohne den finanziellen Zusammenhang zu verlieren.',
      },
      {
        title: 'Dokumentenablage',
        description:
          'Speichere Verträge, Inspektionsberichte und andere Unterlagen dort, wo du sie wiederfindest, wenn du sie brauchst.',
      },
      {
        title: 'Fotobelege',
        description:
          'Baue ein visuelles Protokoll von Räumen, Möbeln und Zustand bei Einzug, Inspektion oder Übergabe auf.',
      },
      {
        title: 'Berichte und Steuereinstellungen',
        description:
          'Arbeite mit Rentabilität, Schulden, Exporten und anpassbaren Steuereinstellungen, die zu deinem lokalen Ablauf passen.',
      },
    ],
  },
  pricing: {
    intro: {
      eyebrow: 'My Rents',
      title: 'Wähle deinen Plan',
      description:
        'Jeder Plan schaltet dieselben Werkzeuge frei — wähle die Laufzeit, die zu deinem Ablauf passt.',
    },
    message: {
      title: 'Ein Plan, vier Optionen',
      description:
        'Wähle die Laufzeit, die zu deiner Einführung von My Rents passt. Nach dem Download siehst du den exakten lokalen Preis für jede Option, bevor du irgendetwas bestätigst.',
    },
    plans: [
      {
        key: 'weekly',
        name: 'Wöchentlich',
        summary:
          'Ideal, wenn du My Rents für einen kurzen Zeitraum ausprobieren und sehen willst, wie es in deinen Ablauf passt.',
        detail: 'Wöchentliches Abonnement',
        subdetail: 'Preis wird nach dem Download in der App angezeigt',
        ctaLabel: 'Herunterladen und Preis prüfen',
      },
      {
        key: 'monthly',
        name: 'Monatlich',
        summary:
          'Ideal, wenn du My Rents sofort nutzen und die Bindung kurz halten willst, während du prüfst, wie gut es in deinen Ablauf passt.',
        detail: 'Monatliches Abonnement',
        subdetail: 'Preis wird nach dem Download in der App angezeigt',
        ctaLabel: 'Herunterladen und Preis prüfen',
      },
      {
        key: 'annual',
        name: 'Jährlich',
        badge: '7-Tage-Testversion',
        summary:
          'Am besten, wenn du schon weißt, dass My Rents zu deinem täglichen Ablauf gehört, und du den niedrigsten Preis pro Monat willst.',
        detail: 'Jährliches Abonnement',
        subdetail: 'Preis wird nach dem Download in der App angezeigt',
        ctaLabel: 'Herunterladen und Preis prüfen',
      },
      {
        key: 'lifetime',
        name: 'Einmalzahlung',
        summary:
          'Eine Zahlung, keine Verlängerung. Am besten, wenn du dauerhaften Zugang zu My Rents sichern willst.',
        detail: 'Einmalzahlung',
        subdetail: 'Preis wird nach dem Download in der App angezeigt',
        ctaLabel: 'Herunterladen und Preis prüfen',
      },
    ],
    featuresTitle: 'Was enthalten ist',
    featuresDescription:
      'Alle Abrechnungsoptionen unten schalten dasselbe Funktionspaket frei. Nur die Laufzeit ändert sich.',
    features: [
      {
        title: 'Unbegrenzte Portfolios',
        description:
          'Erstelle so viele Gruppen, wie du brauchst, um deine Investitionen so zu sehen, wie du sie wirklich verwaltest.',
      },
      {
        title: 'Unbegrenzte Immobilien',
        description:
          'Keine Begrenzung bei der Anzahl der Immobilien oder Einheiten, die du anlegen kannst.',
      },
      {
        title: 'Rechnungsgenerator',
        description: 'Erstelle Mietrechnungen und Zusatzkosten in wenigen Schritten.',
      },
      {
        title: 'CSV-Exporte',
        description:
          'Exportiere deine Zahlen jederzeit, wenn du eine klarere externe Sicht brauchst oder mit anderen Berichten arbeiten willst.',
      },
      {
        title: 'Persönlicher und direkter Support',
        description:
          'Keine Bots. Keine ausgelagerte Warteschlange. Du sprichst direkt mit der Person, die My Rents baut.',
      },
      {
        title: 'Keine Werbung',
        description: 'Arbeite ohne Unterbrechungen oder Werbeflächen.',
      },
    ],
    storePricing: {
      title: 'Sieh deinen Preis in der App',
      description:
        'Der Preis hängt vom Land ab und erscheint in My Rents. Lade die App herunter und sieh den exakten Betrag für deine Region, bevor du bezahlst.',
    },
    livePricing: {
      introDescription:
        'Jeder Plan schaltet dieselben Werkzeuge frei — wähle die Laufzeit, die zu deinem Ablauf passt. Die Preise unten kommen direkt von Google Play für das Land, das du auf dieser Seite auswählst.',
      messageDescription:
        'Wähle die Laufzeit, die zu deinem Ablauf passt. Wechsle das Land, um den aktuellen Google-Play-Preis für wöchentliche, monatliche, jährliche und einmalige Pläne zu sehen, bevor die App heruntergeladen wird.',
      storeTitle: 'Sieh deinen Preis nach Land',
      storeDescription:
        'Diese Preise entsprechen dem Google-Play-Betrag für das ausgewählte Land. Kauf und Abrechnung erfolgen weiterhin in My Rents.',
      selectorLabel: 'Land',
      selectedCountryLabel: 'Google-Play-Preis für {country}',
      loadingLabel: 'Preis wird geladen...',
      unavailableLabel: 'Preis für dieses Land nicht verfügbar',
    },
    singleUser: {
      title: 'Ein Benutzer pro Plan',
      description: 'Die Optionen auf dieser Seite sind Einzelkäufe für ein Benutzerkonto.',
    },
    companies: {
      title: 'Brauchst du Team-Konten?',
      description:
        'Wenn dein Unternehmen mehrere Nutzer, getrennte Konten oder ein anderes Setup braucht, kontaktiere uns und wir helfen dir bei der besten Option.',
    },
    androidCtaLabel: 'Preis auf Android ansehen',
    iOSCtaLabel: 'Preis auf iOS ansehen',
    businessCtaLabel: 'Kontaktiere uns zu Business-Konten',
    popularLabel: 'Beste Wahl',
    trialLabel: '7-tägige kostenlose Testversion',
    trialCancelLabel: 'Jederzeit kündbar',
    freeModeTitle: 'My Rents kostenlos testen',
    freeModeEyebrow: 'Keine Pläne nötig',
    freeModeCopy:
      'Starte mit unserem eingeschränkten kostenlosen Modus und teste die App mit deinen Immobilien. Wechsle zu einem kostenpflichtigen Plan, wenn du bereit bist für unbegrenzte Portfolios, Rechnungserstellung und mehr.',
    countryNoteLabel: '*Preise angezeigt für {country}',
  },
  process: {
    intro: {
      eyebrow: 'So holen Vermieter die Kontrolle zurück',
      title: 'So startest du',
      description:
        'Du brauchst kein perfektes Migrationsprojekt. Starte mit den Immobilien, Mietverträgen und Dokumenten, die du heute brauchst, und halte danach jede neue Zahlung, Ausgabe und Erinnerung organisiert.',
    },
    steps: [
      {
        index: '01',
        title: 'Lade die App herunter und teste sie mit deinem echten Ablauf',
        description:
          'Nutze den 7-Tage-Test mit echten Immobilien statt mit Dummy-Daten, damit du schnell siehst, ob die Struktur zu deiner Arbeitsweise passt.',
      },
      {
        index: '02',
        title: 'Lege zuerst deine Immobilien und Einheiten an',
        description:
          'Baue das Rückgrat deines Portfolios auf, damit jede Zahlung, jedes Dokument und jede Erinnerung einen klaren Platz hat.',
      },
      {
        index: '03',
        title: 'Füge aktive Mietverträge und die Dokumente hinzu, die du immer suchen musst',
        description:
          'Speichere Verträge, Versicherungen, Rechnungen und wichtige Unterlagen, die sonst in Ordnern, E-Mail-Ketten oder Screenshots verschwinden.',
      },
      {
        index: '04',
        title: 'Erfasse Zahlungen, Ausgaben und Ereignisse an einem Ort',
        description:
          'Behalte überfällige Mieten, Reparaturen, laufende Rechnungen und Lieferantenaktivitäten im Blick, ohne jeden Monat dieselbe Geschichte neu zusammenzusetzen.',
      },
      {
        index: '05',
        title: 'Prüfe Berichte und Exporte, wenn du Antworten brauchst',
        description:
          'Wenn du Rentabilität, Schulden, Steuern oder Belege prüfen willst, ist alles schon mit der richtigen Immobilie verbunden.',
      },
    ],
  },
  impact: {
    intro: {
      eyebrow: 'Was sich verändert',
      title: 'So hilft My Rents',
      description:
        'My Rents bleibt funktionsreich, aber der eigentliche Wert ist, dass jede Funktion eine Vermieterfrage schneller beantwortet, statt einen weiteren Ort zum Suchen zu schaffen.',
    },
    items: [
      {
        title: 'Portfolioansicht',
        description:
          'Wechsle von der Portfolioansicht zu den Immobiliendetails, wobei Mietverträge, Kontakte, Dateien und Notizen bereits verknüpft sind.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot des Portfolio-Bereichs von My Rents',
      },
      {
        title: 'Zahlungsstatus',
        description:
          'Verfolge Mietstatus, Rechnungen und Nachfassaktionen, ohne rätseln zu müssen, welcher Mieter zwei Wochen zu spät ist und wer nur einen Teilbetrag gezahlt hat.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot des Immobilien-Bereichs von My Rents',
      },
      {
        title: 'Vertragsdetails',
        description:
          'Prüfe den aktiven Vertrag, Fälligkeiten und den Abrechnungsablauf im selben Datensatz statt zwischen Verträgen und Tabellen zu springen.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot des Mietvertrags- und Fälligkeitsablaufs in My Rents',
      },
      {
        title: 'Immobiliendetails',
        description:
          'Immobiliendetails, Einheiten, Notizen und verknüpfte Daten bleiben zusammen, damit du ein Objekt auch nach Tagen oder Wochen schnell wieder verstehst.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot des Bereichs für Ausgaben und Berichte in My Rents',
      },
      {
        title: 'Ausgaben erfassen',
        description:
          'Halte Reparaturen, Nebenkosten und Ad-hoc-Kosten fest, solange sie frisch sind, damit die Zahlen stimmen und der Nachweis verknüpft bleibt.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot des Bereichs für Dokumente und Fotos in My Rents',
      },
      {
        title: 'Berichte',
        description:
          'Nutze Berichte, Schuldenübersicht, Rentabilitätsansichten und Exporte, ohne das Jahr aus Kontoauszügen neu zusammenbauen zu müssen.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot der Steuer-, Karten- und Kontaktwerkzeuge in My Rents',
      },
      {
        title: 'Ereignisse',
        description:
          'Reparaturen, Inspektionen, Erinnerungen und wiederkehrende Aufgaben bleiben sichtbar, damit wichtige Nachfassaktionen nicht nur in deinem Kopf existieren.',
        image: calendarImage,
        imageAlt: 'Screenshot von Kalender und Ereignissen',
      },
      {
        title: 'Kontakte',
        description:
          'Halte Mieter, Dienstleister und Berater nach Immobilie geordnet, damit du nicht in Chats suchen musst, wenn etwas kaputtgeht.',
        image: contactsListImage,
        imageAlt: 'Screenshot der Kontaktliste',
      },
    ],
  },
  appLanguages: {
    intro: {
      eyebrow: 'Sprachsupport',
      title: 'In 6 Sprachen verfügbar',
      description:
        'Nutze My Rents in der Sprache, die am besten zu deinem Vermietungsalltag passt.',
    },
    listLabel: 'In der App verfügbar',
    languages: ['Español', 'English', 'Italiano', 'Deutsch', 'Français', 'Português'],
    summary:
      'In der App unterstützt: Spanisch, Englisch, Italienisch, Deutsch, Französisch und Portugiesisch.',
    note: 'Die My Rents Website und App unterstützen alle sechs hier aufgeführten Sprachen.',
  },
  faq: {
    intro: {
      eyebrow: 'FAQ',
      title: 'Häufige Fragen',
      description: 'Klare Antworten zu Preisen, Arbeitsabläufen, Berichten und Support.',
    },
    items: [
      {
        question: 'Kann My Rents Tabellen für ein kleines Portfolio ersetzen?',
        answer:
          'Genau dafür nutzen es viele Eigentümer. My Rents hilft dir, Mieten, Ausgaben, Dokumente, Erinnerungen und Immobiliennotizen nicht länger auf getrennte Tabellen und Ordner zu verteilen.',
      },
      {
        question: 'Was ändert sich zwischen 1 Monat, 6 Monaten und 1 Jahr?',
        answer:
          'Nur die Laufzeit der Mitgliedschaft ändert sich. Die PRO-Werkzeuge sind in jeder Option gleich.',
      },
      {
        question: 'Wie sehe ich den Preis für mein Land?',
        answer:
          'Wähle dein Land im PRO-Bereich dieser Website, um den aktuellen Google-Play-Preis zu sehen. Den gleichen lokalen Betrag kannst du vor dem Kauf noch einmal in My Rents bestätigen.',
      },
      {
        question: 'Ist der PRO-Preis für eine Person oder für ein Unternehmen?',
        answer:
          'Der PRO-Preis auf dieser Seite gilt für ein einzelnes Benutzerkonto. Wenn dein Unternehmen mehrere Konten oder ein anderes Setup braucht, kontaktiere uns direkt.',
      },
      {
        question: 'Kann ich Ausgaben und Einzelrechnungen erfassen?',
        answer:
          'Ja. My Rents ist dafür gedacht, laufende Kosten wie Nebenkosten und Instandhaltung ebenso wie Einmalkäufe, Möbel oder dringende Reparaturen zu erfassen.',
      },
      {
        question: 'Hilft die App bei Mietverträgen und Mieterinnerungen?',
        answer:
          'Ja. Du kannst mehrere Mietverträge pro Immobilie speichern, Fälligkeiten und Zahlungsstatus prüfen und per WhatsApp, E-Mail oder Direktanruf nachfassen.',
      },
    ],
  },
  contact: {
    emailAddress: CONTACT_EMAIL,
    forumUrl: FORUM_URL,
    intro: {
      eyebrow: 'Verwaltest du Vermietungen noch über zu viele Orte?',
      title: 'Sag uns, was unübersichtlich ist',
      description:
        'Wenn Zahlungen, Dokumente, Ausgaben oder Vertragsdaten über mehrere Tools verstreut sind, sag uns, was heute unübersichtlich ist, und wir zeigen dir das beste Setup in My Rents.',
    },
    forumPrefix: 'Öffentliches Forum',
    forumCtaLabel: 'Öffentliches Forum öffnen',
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Dein Name',
      emailLabel: 'E-Mail',
      emailPlaceholder: 'du@example.com',
      messageLabel: 'Wobei brauchst du Hilfe?',
      messagePlaceholder:
        'Sag uns, was du verwaltest, was heute unübersichtlich ist oder welche Laufzeit du gerade in Betracht ziehst.',
      subjectLabel: 'Website-Kontakt von',
      submitLabel: 'E-Mail-Entwurf öffnen',
      success:
        'Deine E-Mail-App sollte sich mit einem vorausgefüllten Entwurf öffnen. Falls nicht, schreibe direkt an info@myrents-app.com.',
    },
  },
  footer: {
    summary:
      'Mietverwaltung für Vermieter, die die ganze Geschichte jeder Immobilie an einem Ort haben wollen.',
    menuHeading: 'Menü',
    legalHeading: 'Rechtliches',
    contactHeading: 'Kontakt',
    legalLinks: [
      { label: 'Nutzungsbedingungen', routeKey: 'terms' },
      { label: 'Datenschutzerklärung', routeKey: 'privacy' },
      { label: 'EULA', routeKey: 'eula' },
      { label: 'Datenlöschung', routeKey: 'dataDeletion' },
    ],
    upgradePrompt: 'Fragen vor dem Upgrade? Schreib uns.',
    forumLinkLabel: 'Forum',
    privacyLinkLabel: 'Datenschutz',
    dataDeletionLinkLabel: 'Datenlöschung',
    bottomLabel: 'Copyright © 2026 My Rents',
  },
  legalUi: {
    backHomeLabel: 'Zurück zur Startseite',
    lastUpdatedPrefix: 'Zuletzt aktualisiert',
  },
  unsubscribe: {
    eyebrow: 'E-Mail-Einstellungen',
    title: 'Von My Rents Marketing-E-Mails abmelden',
    intro:
      'Gib die E-Mail-Adresse ein, an die du Marketing-E-Mails von My Rents erhältst, und wir setzen sie für zukünftige Marketingkampagnen auf unsere Sperrliste.',
    form: {
      emailLabel: 'E-Mail-Adresse',
      emailPlaceholder: 'du@example.com',
      helper:
        'Diese Seite gilt nur für Marketing-E-Mails. Nutze dieselbe Adresse, an die du Nachrichten von My Rents erhältst.',
      note: 'Service-, Abrechnungs- oder kontobezogene E-Mails können weiter gesendet werden, wenn sie für den Betrieb von My Rents oder den Support deines Kontos notwendig sind.',
      submitLabel: 'Diese E-Mail abmelden',
    },
    homeLabel: 'Zurück zur Startseite',
    contactLabel: 'Support kontaktieren',
    states: {
      submitting: {
        title: 'Deine Anfrage wird gespeichert',
        description: 'Wir fügen diese Adresse jetzt zur Sperrliste von My Rents hinzu.',
      },
      success: {
        title: 'Diese E-Mail wurde abgemeldet',
        description:
          'Wir haben diese Adresse für zukünftige Marketing-E-Mails auf die Sperrliste von My Rents gesetzt. Wenn du gerade erst eine vorbereitete Kampagne erhalten hast, kann es eine kurze Verzögerung geben.',
      },
      invalidEmail: {
        title: 'Gib eine gültige E-Mail-Adresse ein',
        description:
          'Wir konnten diese E-Mail-Adresse nicht verwenden. Prüfe die Schreibweise und versuche es erneut mit der Adresse, die Marketing-E-Mails von My Rents erhalten hat.',
      },
      unavailable: {
        title: 'Abmeldung ist noch nicht eingerichtet',
        description:
          'Der Website fehlt die nötige Firebase-Konfiguration, um Abmeldeanfragen zu speichern. Kontaktiere den Support, dann melden wir dich manuell ab.',
      },
      error: {
        title: 'Wir konnten deine Anfrage nicht speichern',
        description:
          'Beim Speichern dieser Abmeldung ist etwas schiefgelaufen. Versuche es erneut oder kontaktiere den Support, damit wir die Adresse manuell entfernen.',
      },
    },
  },
  controls: {
    previousLabel: 'Zurück',
    nextLabel: 'Weiter',
  },
}

const frOverride: SiteContentWithoutLegalPages = {
  playStoreUrl: PLAY_STORE_URL,
  appStoreUrl: APP_STORE_URL,
  meta: {
    routeTitles: {
      home: 'My Rents | App de gestion locative',
      pricing: 'Tarifs | My Rents',
      terms: "Conditions d'utilisation | My Rents",
      privacy: 'Politique de confidentialité | My Rents',
      eula: 'EULA | My Rents',
      dataDeletion: 'Suppression des données | My Rents',
      unsubscribe: 'Désabonnement aux emails marketing | My Rents',
      forum: 'Forum | My Rents',
    },
  },
  header: {
    brandLabel: 'My Rents',
    navAriaLabel: 'Navigation principale',
    ctaLabel: 'Voir les tarifs',
    languageLabel: 'Langue',
    languages: sharedLanguages,
  },
  primaryNav: [
    { label: 'Comment ça aide', hash: '#features' },
    { label: 'Tarifs', hash: '/pricing' },
    { label: 'Centre de documents', hash: '#documents-center' },
    { label: 'Comment commencer', hash: '#how-to-start' },
    { label: 'Forum', hash: '/forum' },
  ],
  hero: {
    rating: 'Notée 4,8/5 sur Google Play',
    title: 'Stoppez le chaos administratif de la location',
    copy: 'Quelques biens suffisent pour créer un vrai chaos administratif : loyers en retard ou payés en plusieurs fois, factures de réparation qui finissent dans la voiture ou sur WhatsApp, dates de bail cachées dans des PDF, et saison fiscale qui oblige à tout reconstruire. My Rents réunit biens, baux, paiements, dépenses, documents et contacts au même endroit.',
    playStoreCtaLabel: 'Télécharger pour Android',
    appStoreCtaLabel: 'Télécharger pour iOS',
    contactCtaLabel: 'Nous contacter',
    snapshot: screenshotEn1,
    snapshotAlt: 'Capture du tableau de bord My Rents',
    trustLabel: 'Plus de 5.000 propriétaires et entreprises nous font confiance',
    partnersLabel: 'Pensée pour les propriétaires qui ont dépassé la gestion bricolée',
    partners: [
      'Propriétaires avec revenu complémentaire',
      '2 à 10 locations',
      'Propriétaires en gestion directe',
      'Petits investisseurs',
      'Portefeuilles en croissance',
    ],
  },
  comparison: {
    intro: {
      eyebrow: 'Le vrai problème',
      title: 'Pourquoi cela se complique',
      description:
        "La friction vient rarement d'un seul gros incident. C'est l'effort constant pour reconstruire ce qui s'est passé, ce qui est dû et à quel bien chaque élément appartient.",
    },
    columns: [
      {
        label: 'Quand tout est dispersé',
        tone: 'muted',
        items: [
          {
            badge: 'RG',
            title: 'Le loyer devient un jeu de devinettes',
            description:
              "Les paiements en retard, partiels ou manuels vous obligent à vous souvenir de qui a payé, qui doit encore et de combien de retard il s'agit.",
          },
          {
            badge: 'RC',
            title: 'Les justificatifs perdent leur contexte',
            description:
              "Réparations réglées en espèces, factures fournisseurs, captures et factures reçues par email cessent d'être utiles lorsqu'elles ne sont plus rattachées au bon bien.",
          },
          {
            badge: 'LD',
            title: 'Les dates de bail se cachent dans les documents',
            description:
              "Renouvellements, dates de fin, inspections et rappels vivent entre PDF, conversations et calendriers au lieu de faire partie d'un seul flux.",
          },
          {
            badge: 'TX',
            title: 'La période fiscale devient une opération de sauvetage',
            description:
              "Vous passez des jours à reconstruire l'année depuis des dossiers, notifications et relevés bancaires parce que les données n'ont jamais vraiment été reliées.",
          },
        ],
      },
      {
        label: "Quand tout l'historique tient dans une seule app",
        tone: 'brand',
        items: [
          {
            badge: 'PH',
            title: "L'historique reste attaché au bien",
            description:
              'Chaque bien garde ensemble baux, paiements, dépenses, fichiers, photos et contacts pour que le contexte reste toujours disponible.',
          },
          {
            badge: 'PS',
            title: 'Le statut des paiements se voit vite',
            description:
              'Voyez ce qui a été payé, ce qui est en retard et ce qui demande un suivi sans recoller des notes venues de plusieurs outils.',
          },
          {
            badge: 'EV',
            title: 'Échéances et événements restent trouvables',
            description:
              'Dates importantes, rappels, inspections et renouvellements restent liés au bien au lieu de dépendre seulement de la mémoire.',
          },
          {
            badge: 'RP',
            title: 'Les rapports ne deviennent plus un sprint de dernière minute',
            description:
              "Vos chiffres, exports et pièces justificatives sont déjà organisés lorsqu'il faut vérifier la performance ou préparer les impôts.",
          },
        ],
      },
    ],
  },
  documentsCenter: documentsCenterContentByLocale.fr,
  services: {
    intro: {
      eyebrow: "Tour de l'app",
      title: 'Découvrez comment My Rents vous aide à gérer vos locations avec moins de friction',
      description:
        'Parcours clés pour les propriétaires qui veulent réunir biens, encaissements, locataires et reporting au même endroit.',
    },
    items: [
      {
        eyebrow: 'Gestion de portefeuille',
        title: 'Ajouter des biens et les organiser en portefeuilles',
        description:
          'Créez chaque bien avec son emplacement, son type et ses informations clés, puis regroupez vos actifs par ville, stratégie ou structure de portefeuille.',
        image: createPlaceholder(960, 720, '281b60', 'f4efff', 'Structure du portefeuille'),
      },
      {
        eyebrow: 'Baux et facturation',
        title: 'Suivre les baux, les échéances de loyer et les factures',
        description:
          "Gérez plusieurs baux par bien, consultez l'état des paiements et relancez via WhatsApp, email ou appel direct.",
        image: createPlaceholder(960, 720, '3a2a81', 'f4efff', 'Baux et facturation'),
      },
      {
        eyebrow: 'Opérations',
        title: 'Saisir dépenses, événements, tâches et contacts clés',
        description:
          'Enregistrez réparations, charges, inspections, rappels et les professionnels dont vous pourriez avoir besoin à tout moment.',
        image: createPlaceholder(960, 720, '4b33a0', 'f4efff', 'Centre opérationnel'),
      },
      {
        eyebrow: 'Rapports',
        title: 'Consulter rapports, impôts, dettes et exports CSV',
        description:
          'Suivez rentabilité, dettes, dépenses, calculs fiscaux et exports CSV pour prendre des décisions fondées sur les vraies données du portefeuille.',
        image: createPlaceholder(960, 720, '5d45bc', 'f4efff', 'Rapports et taxes'),
      },
    ],
  },
  testimonial: {
    communityLabel: 'Propriétaires, gestionnaires et investisseurs',
    quote: "Échangez avec d'autres propriétaires et investisseurs sur le forum",
    description:
      "Utilisez le forum public pour poser des questions, partager vos méthodes, rencontrer des personnes avec des idées d'investissement proches et échanger des informations concrètes qui améliorent les décisions et les résultats locatifs.",
    author: 'Communauté ouverte pour la gestion locative',
    forumLabel: 'Visiter le forum',
    forumUrl: FORUM_URL,
    statA: 'Idées partagées',
    statB: 'Support et réseau',
    avatars: ['F', 'O', 'R', 'U', 'M'],
  },
  forum: {
    hero: {
      title: 'Rejoignez le forum de gestion locative',
      description:
        'Connectez-vous avec des propriétaires, gestionnaires et investisseurs immobiliers. Partagez vos méthodes de travail, posez des questions et échangez des conseils pratiques pour améliorer votre activité locative.',
      ctaLabel: 'Ouvrir le forum',
      forumUrl: 'https://drodriguez-support.com',
    },
    features: {
      eyebrow: 'Ce que vous pouvez faire',
      title: 'Une communauté conçue pour les professionnels de la location',
      description:
        'Que vous gériez un seul logement ou un portefeuille en croissance, le forum vous donne un accès direct à des personnes confrontées aux mêmes décisions opérationnelles chaque jour.',
      items: [
        {
          title: 'Poser des questions et répondre',
          description:
            'Publiez sur la gestion des baux, la sélection des locataires, les processus de maintenance, la préparation fiscale et les réglementations locales. Obtenez des réponses de propriétaires et investisseurs expérimentés.',
        },
        {
          title: 'Partagez votre méthode de travail',
          description:
            'Décrivez comment vous suivez les loyers, gérez les réparations, organisez les documents et préparez la saison fiscale. Apprenez des autres et améliorez votre propre processus.',
        },
        {
          title: 'Rencontrez des investisseurs aux objectifs similaires',
          description:
            'Trouvez des personnes qui investissent dans les mêmes marchés, types de biens ou stratégies. Échangez des informations sur le marché et développez votre réseau professionnel.',
        },
        {
          title: 'Restez informé des tendances locatives',
          description:
            'Suivez les discussions sur les lois locatives, les évolutions du marché, les options de financement et les outils de gestion. Gardez vos connaissances à jour sans chercher dans des sources éparpillées.',
        },
        {
          title: 'Obtenez un retour sur votre configuration',
          description:
            'Décrivez votre système actuel de gestion immobilière et recevez des suggestions de ceux qui ont déjà résolu les mêmes problèmes organisationnels.',
        },
        {
          title: 'Accédez à des conseils exclusifs',
          description:
            "Lisez des conseils pratiques issus de l'expérience réelle — le type de connaissance opérationnelle rarement publiée dans les articles ou tutoriels.",
        },
      ],
    },
    faq: {
      eyebrow: 'Questions fréquentes',
      title: 'Comment fonctionne le forum',
      description: 'Tout ce que vous devez savoir pour participer à la communauté My Rents.',
      items: [
        {
          question: "L'inscription au forum est-elle gratuite ?",
          answer:
            "Oui, le forum public est ouvert à tous. Vous n'avez pas besoin d'un abonnement My Rents pour lire les discussions, poser des questions ou partager votre expérience.",
        },
        {
          question: "Ai-je besoin de l'application pour participer ?",
          answer:
            "Non, le forum fonctionne sur une plateforme séparée. Vous pouvez y accéder depuis n'importe quel navigateur sur ordinateur ou mobile sans rien installer.",
        },
        {
          question: 'Quels sujets puis-je aborder ?',
          answer:
            'Tout sujet lié à la gestion locative : baux, locataires, maintenance, dépenses, impôts, assurances, questions juridiques, tendances du marché et conseils de workflow. La communauté se concentre sur les connaissances pratiques et opérationnelles.',
        },
        {
          question: 'Puis-je promouvoir mes services ?',
          answer:
            "Le forum est un espace de partage de connaissances, pas un marché. L'autopromotion est généralement déconseillée, sauf si elle répond directement à une question ou résout un problème spécifique partagé par la communauté.",
        },
      ],
    },
  },
  benefits: {
    intro: {
      eyebrow: 'Fonctionnalités',
      title: "Tout ce qu'il faut aux propriétaires pour rester organisés et garder le contrôle",
      description:
        'Pensé pour les détails opérationnels qui se perdent souvent entre baux, dépenses, maintenance et paperasse.',
    },
    items: [
      {
        title: 'Structure du portefeuille',
        description:
          "Visualisez vos biens comme vous les gérez réellement, qu'il s'agisse d'une seule unité, d'un immeuble ou d'un portefeuille plus large.",
      },
      {
        title: 'Suivi des baux',
        description:
          'Gardez les montants, échéances, statuts et plusieurs baux par bien faciles à consulter.',
      },
      {
        title: 'Suivi des dépenses',
        description:
          'Saisissez entretien, charges et achats ponctuels sans perdre le contexte financier.',
      },
      {
        title: 'Coffre documentaire',
        description:
          "Stockez contrats, rapports d'inspection et autres documents là où vous pourrez les retrouver au bon moment.",
      },
      {
        title: 'Preuves photo',
        description:
          "Constituez un historique visuel des pièces, meubles et de l'état du bien à l'entrée, lors des inspections ou à la remise.",
      },
      {
        title: 'Rapports et réglages fiscaux',
        description:
          'Travaillez avec la rentabilité, les dettes, les exports et des réglages fiscaux adaptables à votre contexte local.',
      },
    ],
  },
  pricing: {
    intro: {
      eyebrow: 'My Rents',
      title: 'Choisissez votre formule',
      description:
        'Chaque formule débloque les mêmes outils — choisissez la durée qui correspond à votre rythme.',
    },
    message: {
      title: 'Une formule, quatre options',
      description:
        "Choisissez la durée qui correspond à votre rythme d'adoption. Après téléchargement, vous verrez le prix local exact pour chaque option avant de confirmer quoi que ce soit.",
    },
    plans: [
      {
        key: 'weekly',
        name: 'Hebdomadaire',
        summary:
          "Idéal si vous voulez essayer My Rents pour une courte période et voir comment cela s'intègre dans votre façon de travailler.",
        detail: 'Abonnement hebdomadaire',
        subdetail: "Prix affiché dans l'app après téléchargement",
        ctaLabel: 'Télécharger et voir le prix',
      },
      {
        key: 'monthly',
        name: 'Mensuel',
        summary:
          "Idéal si vous voulez commencer à utiliser My Rents maintenant tout en gardant un engagement léger pendant que vous vérifiez l'adéquation avec votre façon de travailler.",
        detail: 'Abonnement mensuel',
        subdetail: "Prix affiché dans l'app après téléchargement",
        ctaLabel: 'Télécharger et voir le prix',
      },
      {
        key: 'annual',
        name: 'Annuel',
        badge: 'Essai de 7 jours',
        summary:
          'Le meilleur choix si vous savez déjà que My Rents fait partie de votre routine et que vous voulez le prix le plus bas par mois.',
        detail: 'Abonnement annuel',
        subdetail: "Prix affiché dans l'app après téléchargement",
        ctaLabel: 'Télécharger et voir le prix',
      },
      {
        key: 'lifetime',
        name: 'Paiement unique',
        summary:
          'Un seul paiement, sans renouvellement. Idéal si vous voulez un accès permanent à My Rents.',
        detail: 'Paiement unique',
        subdetail: "Prix affiché dans l'app après téléchargement",
        ctaLabel: 'Télécharger et voir le prix',
      },
    ],
    featuresTitle: 'Ce qui est inclus',
    featuresDescription:
      'Chaque option ci-dessous débloque exactement le même ensemble de fonctionnalités. Seule la durée change.',
    features: [
      {
        title: 'Portefeuilles illimités',
        description:
          'Créez autant de groupes que nécessaire pour comprendre vos investissements comme vous les gérez vraiment.',
      },
      {
        title: 'Biens illimités',
        description: "Aucune limite sur le nombre de biens ou d'unités que vous pouvez ajouter.",
      },
      {
        title: 'Générateur de factures',
        description: 'Créez des factures de loyer et des frais supplémentaires en quelques étapes.',
      },
      {
        title: 'Exports CSV',
        description:
          "Exportez vos chiffres quand vous voulez une vue externe plus claire ou devez travailler avec d'autres rapports.",
      },
      {
        title: 'Support personnel et direct',
        description:
          "Pas de bots. Pas de file d'attente externalisée. Vous parlez directement à la personne qui construit My Rents.",
      },
      {
        title: 'Sans publicité',
        description: 'Travaillez sans interruptions ni encombrement promotionnel.',
      },
    ],
    storePricing: {
      title: "Voyez votre prix dans l'app",
      description:
        "Le prix dépend du pays et apparaît dans My Rents. Téléchargez l'app et vous verrez le montant exact pour votre région avant de payer.",
    },
    livePricing: {
      introDescription:
        'Chaque formule débloque les mêmes outils — choisissez la durée qui correspond à votre rythme. Les prix ci-dessous viennent directement de Google Play pour le pays sélectionné sur cette page.',
      messageDescription:
        "Choisissez la durée qui correspond à votre rythme. Changez de pays pour voir le prix Google Play actuel pour les formules hebdomadaire, mensuelle, annuelle et de paiement unique avant de télécharger l'app.",
      storeTitle: 'Consultez votre prix par pays',
      storeDescription:
        "Ces prix reflètent le montant Google Play du pays sélectionné. L'achat et la facturation se font toujours dans My Rents.",
      selectorLabel: 'Pays',
      selectedCountryLabel: 'Prix Google Play pour {country}',
      loadingLabel: 'Chargement du prix...',
      unavailableLabel: 'Prix indisponible pour ce pays',
    },
    singleUser: {
      title: 'Un utilisateur par formule',
      description: 'Les offres de cette page sont des achats mono-utilisateur pour un seul compte.',
    },
    companies: {
      title: "Besoin de comptes d'équipe ?",
      description:
        "Si votre entreprise a besoin de plusieurs utilisateurs, de comptes séparés ou d'une configuration différente, contactez-nous et nous vous aiderons à choisir la meilleure option.",
    },
    androidCtaLabel: 'Consulter le prix sur Android',
    iOSCtaLabel: 'Consulter le prix sur iOS',
    businessCtaLabel: 'Nous contacter pour des comptes entreprise',
    popularLabel: 'Meilleure offre',
    trialLabel: 'Essai gratuit de 7 jours',
    trialCancelLabel: 'Annulez à tout moment',
    freeModeTitle: 'Essayez My Rents gratuitement',
    freeModeEyebrow: 'Aucun plan nécessaire',
    freeModeCopy:
      "Commencez avec notre mode gratuit limité pour tester l'application avec vos biens. Passez à un plan payant quand vous êtes prêt pour des portfolios illimités, la génération de factures et plus.",
    countryNoteLabel: '*Prix affichés pour {country}',
  },
  process: {
    intro: {
      eyebrow: 'Comment les propriétaires reprennent le contrôle',
      title: 'Comment commencer',
      description:
        "Vous n'avez pas besoin d'un projet de migration parfait. Commencez avec les biens, baux et documents dont vous avez besoin aujourd'hui, puis gardez chaque nouveau paiement, dépense et rappel organisé à partir de là.",
    },
    steps: [
      {
        index: '01',
        title: "Téléchargez l'app et testez-la avec votre vrai fonctionnement",
        description:
          "Utilisez l'essai de 7 jours avec de vrais biens, pas avec de fausses données, afin de voir rapidement si la structure correspond à votre façon de travailler.",
      },
      {
        index: '02',
        title: "Ajoutez d'abord vos biens et vos unités",
        description:
          "Construisez l'ossature de votre portefeuille afin que chaque paiement, document et rappel ait un emplacement clair.",
      },
      {
        index: '03',
        title: 'Ajoutez les baux actifs et les documents que vous cherchez toujours',
        description:
          "Stockez contrats, assurances, factures et fichiers clés qui finissent normalement dans des dossiers, chaînes d'emails ou captures.",
      },
      {
        index: '04',
        title: 'Commencez à enregistrer paiements, dépenses et événements au même endroit',
        description:
          'Suivez loyers impayés, réparations, charges récurrentes et activité des prestataires sans reconstruire la même histoire tous les mois.',
      },
      {
        index: '05',
        title: 'Consultez rapports et exports quand vous avez besoin de réponses',
        description:
          "Quand vous voulez vérifier rentabilité, dettes, impôts ou pièces justificatives, l'information est déjà rattachée au bon bien.",
      },
    ],
  },
  impact: {
    intro: {
      eyebrow: 'Ce qui change',
      title: 'Comment My Rents aide',
      description:
        "My Rents reste riche en fonctionnalités, mais sa vraie valeur tient au fait que chacune aide à répondre plus vite à une question de propriétaire au lieu d'ajouter un endroit de plus à consulter.",
    },
    items: [
      {
        title: 'Vue portefeuille',
        description:
          'Passez de la vue portefeuille au détail du bien avec les baux, contacts, fichiers et notes déjà reliés.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Capture de la zone portefeuille de My Rents',
      },
      {
        title: 'Statut des paiements',
        description:
          "Suivez le statut des loyers, les factures et les actions de relance sans vous demander quel locataire a deux semaines de retard et lequel n'a payé qu'une partie.",
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Capture de la zone biens de My Rents',
      },
      {
        title: 'Détails du bail',
        description:
          'Consultez le bail actif, les échéances et le flux de facturation dans la même fiche au lieu de jongler entre contrats et tableurs.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Capture du parcours bail et échéances dans My Rents',
      },
      {
        title: 'Détails du bien',
        description:
          'Détails du bien, unités, notes et éléments liés restent ensemble pour comprendre rapidement un actif même après plusieurs jours loin du dossier.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Capture de la zone dépenses et rapports de My Rents',
      },
      {
        title: 'Suivi des dépenses',
        description:
          "Enregistrez réparations, charges et coûts ponctuels pendant qu'ils sont encore frais afin que les chiffres restent justes et que la preuve reste attachée.",
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Capture de la zone documents et photos de My Rents',
      },
      {
        title: 'Rapports',
        description:
          "Utilisez rapports, suivi des dettes, vues de rentabilité et exports sans reconstruire l'année à partir de relevés bancaires.",
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Capture des outils fiscaux, cartes et contacts de My Rents',
      },
      {
        title: 'Événements',
        description:
          'Réparations, inspections, rappels et tâches récurrentes restent visibles pour que les suivis importants ne vivent pas seulement dans votre tête.',
        image: calendarImage,
        imageAlt: 'Capture du calendrier et des événements',
      },
      {
        title: 'Contacts',
        description:
          'Gardez locataires, prestataires et conseillers organisés par bien pour ne pas fouiller dans vos discussions quand quelque chose casse.',
        image: contactsListImage,
        imageAlt: 'Capture de la liste de contacts',
      },
    ],
  },
  appLanguages: {
    intro: {
      eyebrow: 'Langues',
      title: 'Disponible en 6 langues',
      description:
        'Utilisez My Rents dans la langue qui correspond le mieux à votre gestion locative au quotidien.',
    },
    listLabel: "Disponibles dans l'app",
    languages: ['Español', 'English', 'Italiano', 'Deutsch', 'Français', 'Português'],
    summary:
      "Pris en charge dans l'app : espagnol, anglais, italien, allemand, français et portugais.",
    note: "Le site My Rents et l'application prennent en charge les six langues indiquées ici.",
  },
  faq: {
    intro: {
      eyebrow: 'FAQ',
      title: 'Questions fréquentes',
      description: 'Réponses claires sur les prix, les workflows, les rapports et le support.',
    },
    items: [
      {
        question: 'My Rents peut-il remplacer les tableurs pour un petit portefeuille ?',
        answer:
          "C'est précisément l'un des usages les plus fréquents. My Rents vous aide à arrêter de répartir loyers, dépenses, documents, rappels et notes de bien entre plusieurs feuilles et dossiers.",
      },
      {
        question: "Qu'est-ce qui change entre 1 mois, 6 mois et 1 an ?",
        answer:
          "Seule la durée de l'abonnement change. Les outils PRO restent identiques dans chaque option.",
      },
      {
        question: 'Comment voir le prix pour mon pays ?',
        answer:
          "Choisissez votre pays dans la section PRO de ce site pour voir le prix Google Play actuel. Vous pourrez confirmer le même montant local dans My Rents avant de finaliser l'achat.",
      },
      {
        question: 'Le prix PRO est-il pour un utilisateur ou pour une entreprise ?',
        answer:
          "Le prix PRO de cette page concerne un seul compte utilisateur. Si votre entreprise a besoin de plusieurs comptes ou d'une configuration différente, contactez-nous directement.",
      },
      {
        question: 'Puis-je suivre les dépenses et les factures ponctuelles ?',
        answer:
          "Oui. My Rents est conçu pour enregistrer aussi bien les coûts récurrents comme les charges et l'entretien que les achats ponctuels, meubles ou réparations urgentes.",
      },
      {
        question: "L'app aide-t-elle avec les baux et les rappels de loyer ?",
        answer:
          'Oui. Vous pouvez stocker plusieurs baux par bien, consulter échéances et statut de paiement, puis relancer via WhatsApp, email ou appel direct.',
      },
    ],
  },
  contact: {
    emailAddress: CONTACT_EMAIL,
    forumUrl: FORUM_URL,
    intro: {
      eyebrow: "Vous gérez encore vos locations depuis trop d'endroits ?",
      title: 'Dites-nous ce qui devient confus',
      description:
        "Si paiements, documents, dépenses ou dates de bail se perdent entre plusieurs outils, dites-nous ce qui coince aujourd'hui et nous vous orienterons vers la meilleure configuration dans My Rents.",
    },
    forumPrefix: 'Forum public',
    forumCtaLabel: 'Ouvrir le forum public',
    form: {
      nameLabel: 'Nom',
      namePlaceholder: 'Votre nom',
      emailLabel: 'Email',
      emailPlaceholder: 'vous@example.com',
      messageLabel: 'De quoi avez-vous besoin ?',
      messagePlaceholder:
        "Dites-nous ce que vous gérez, ce qui devient confus aujourd'hui ou quelle durée d'abonnement vous envisagez.",
      subjectLabel: 'Contact site de',
      submitLabel: "Ouvrir le brouillon d'email",
      success:
        "Votre application email devrait s'ouvrir avec un brouillon prérempli. Sinon, écrivez directement à info@myrents-app.com.",
    },
  },
  footer: {
    summary:
      "Gestion locative pour les propriétaires qui veulent toute l'histoire de chaque bien au même endroit.",
    menuHeading: 'Menu',
    legalHeading: 'Légal',
    contactHeading: 'Contact',
    legalLinks: [
      { label: "Conditions d'utilisation", routeKey: 'terms' },
      { label: 'Politique de confidentialité', routeKey: 'privacy' },
      { label: 'EULA', routeKey: 'eula' },
      { label: 'Suppression des données', routeKey: 'dataDeletion' },
    ],
    upgradePrompt: 'Des questions avant de passer à PRO ? Écrivez-nous.',
    forumLinkLabel: 'Forum',
    privacyLinkLabel: 'Confidentialité',
    dataDeletionLinkLabel: 'Suppression des données',
    bottomLabel: 'Copyright © 2026 My Rents',
  },
  legalUi: {
    backHomeLabel: "Retour à l'accueil",
    lastUpdatedPrefix: 'Dernière mise à jour',
  },
  unsubscribe: {
    eyebrow: 'Préférences email',
    title: 'Se désabonner des emails marketing de My Rents',
    intro:
      "Saisissez l'adresse email à laquelle vous recevez les emails marketing de My Rents et nous l'ajouterons à notre liste de suppression pour les prochaines campagnes marketing.",
    form: {
      emailLabel: 'Adresse email',
      emailPlaceholder: 'vous@example.com',
      helper:
        'Cette page concerne uniquement les emails marketing. Utilisez la même adresse à laquelle vous recevez les messages de My Rents.',
      note: "Les emails de service, de facturation ou liés au compte peuvent encore être envoyés lorsqu'ils sont nécessaires au fonctionnement de My Rents ou au support de votre compte.",
      submitLabel: 'Désabonner cette adresse',
    },
    homeLabel: "Retour à l'accueil",
    contactLabel: 'Contacter le support',
    states: {
      submitting: {
        title: 'Enregistrement de votre demande',
        description: 'Nous ajoutons cette adresse à la liste de suppression de My Rents.',
      },
      success: {
        title: 'Cette adresse a été désabonnée',
        description:
          'Nous avons enregistré cette adresse sur la liste de suppression de My Rents pour les futurs emails marketing. Un court délai reste possible si vous venez de recevoir une campagne déjà préparée.',
      },
      invalidEmail: {
        title: 'Entrez une adresse email valide',
        description:
          "Nous n'avons pas pu utiliser cette adresse email. Vérifiez l'orthographe et réessayez avec l'adresse qui a reçu les emails marketing de My Rents.",
      },
      unavailable: {
        title: "Le désabonnement n'est pas encore configuré",
        description:
          'Le site ne dispose pas encore de la configuration Firebase nécessaire pour enregistrer les demandes de désabonnement. Contactez le support et nous vous désabonnerons manuellement.',
      },
      error: {
        title: "Nous n'avons pas pu enregistrer votre demande",
        description:
          "Un problème est survenu lors de l'enregistrement de cette demande de désabonnement. Réessayez ou contactez le support pour que nous retirions l'adresse manuellement.",
      },
    },
  },
  controls: {
    previousLabel: 'Précédent',
    nextLabel: 'Suivant',
  },
}

const itOverride: SiteContentWithoutLegalPages = {
  playStoreUrl: PLAY_STORE_URL,
  appStoreUrl: APP_STORE_URL,
  meta: {
    routeTitles: {
      home: 'My Rents | App per la gestione degli affitti',
      pricing: 'Prezzi | My Rents',
      terms: 'Termini di servizio | My Rents',
      privacy: 'Informativa sulla privacy | My Rents',
      eula: 'EULA | My Rents',
      dataDeletion: 'Eliminazione dei dati | My Rents',
      unsubscribe: 'Disiscrizione dalle email marketing | My Rents',
      forum: 'Forum | My Rents',
    },
  },
  header: {
    brandLabel: 'My Rents',
    navAriaLabel: 'Navigazione principale',
    ctaLabel: 'Vedi i piani',
    languageLabel: 'Lingua',
    languages: sharedLanguages,
  },
  primaryNav: [
    { label: 'Come aiuta', hash: '#features' },
    { label: 'Prezzi', hash: '/pricing' },
    { label: 'Centro documenti', hash: '#documents-center' },
    { label: 'Come iniziare', hash: '#how-to-start' },
    { label: 'Forum', hash: '/forum' },
  ],
  hero: {
    rating: 'Valutata 4,8/5 su Google Play',
    title: 'Ferma il caos amministrativo degli affitti',
    copy: 'Bastano poche proprietà per creare vero caos amministrativo: pagamenti che arrivano in ritardo o a rate, fatture di riparazione che finiscono in auto o su WhatsApp, date dei contratti nascoste nei PDF e periodo fiscale che costringe a ricostruire tutto. My Rents riunisce immobili, contratti, pagamenti, spese, documenti e contatti in un solo posto.',
    playStoreCtaLabel: 'Scarica per Android',
    appStoreCtaLabel: 'Scarica per iOS',
    contactCtaLabel: 'Contattaci',
    snapshot: screenshotEn1,
    snapshotAlt: 'Screenshot della dashboard di My Rents',
    trustLabel: 'Oltre 5.000 proprietari e aziende si fidano di noi',
    partnersLabel: 'Pensata per proprietari che hanno superato la gestione fai-da-te',
    partners: [
      'Proprietari con reddito extra',
      '2-10 unità in affitto',
      'Proprietari che gestiscono in autonomia',
      'Piccoli investitori',
      'Portafogli in crescita',
    ],
  },
  comparison: {
    intro: {
      eyebrow: 'Il vero problema',
      title: 'Perché diventa complicato',
      description:
        "L'attrito raramente nasce da un solo evento clamoroso. È lo sforzo continuo per ricostruire cosa è successo, cosa è dovuto e a quale immobile appartiene ogni cosa.",
    },
    columns: [
      {
        label: 'Quando tutto è sparso',
        tone: 'muted',
        items: [
          {
            badge: 'RG',
            title: "L'affitto diventa un'ipotesi",
            description:
              "Pagamenti in ritardo, parziali o manuali ti costringono a ricordare chi ha pagato, chi deve ancora e quanto ritardo c'è.",
          },
          {
            badge: 'RC',
            title: 'Le ricevute perdono contesto',
            description:
              "Riparazioni pagate in contanti, fatture dei fornitori, screenshot e bollette via email smettono di essere utili quando non sono più collegate all'immobile giusto.",
          },
          {
            badge: 'LD',
            title: 'Le date dei contratti si nascondono nei documenti',
            description:
              'Rinnovi, scadenze, ispezioni e promemoria vivono tra PDF, chat e calendari invece di stare dentro un unico flusso.',
          },
          {
            badge: 'TX',
            title: 'Il periodo fiscale diventa un recupero dati',
            description:
              "Passi giorni a ricostruire l'anno da cartelle, notifiche ed estratti conto perché i registri non sono mai stati davvero collegati.",
          },
        ],
      },
      {
        label: 'Quando tutto lo storico vive in una sola app',
        tone: 'brand',
        items: [
          {
            badge: 'PH',
            title: "Lo storico resta attaccato all'immobile",
            description:
              'Ogni immobile tiene insieme contratti, pagamenti, spese, file, foto e contatti così il contesto resta sempre disponibile.',
          },
          {
            badge: 'PS',
            title: 'Lo stato dei pagamenti si vede subito',
            description:
              'Vedi cosa è stato pagato, cosa è in ritardo e cosa richiede follow-up senza ricucire appunti da strumenti diversi.',
          },
          {
            badge: 'EV',
            title: 'Eventi e scadenze restano trovabili',
            description:
              "Date importanti, promemoria, ispezioni e rinnovi restano collegati all'immobile invece di dipendere dalla memoria.",
          },
          {
            badge: 'RP',
            title: 'I report smettono di essere una corsa finale',
            description:
              'Numeri, esportazioni e documenti di supporto sono già organizzati quando devi controllare performance o preparare le tasse.',
          },
        ],
      },
    ],
  },
  documentsCenter: documentsCenterContentByLocale.it,
  services: {
    intro: {
      eyebrow: "Tour dell'app",
      title: 'Scopri come My Rents ti aiuta a gestire gli affitti con meno attrito',
      description:
        'Flussi chiave per proprietari che vogliono avere immobili, incassi, inquilini e report nello stesso posto.',
    },
    items: [
      {
        eyebrow: 'Gestione portafoglio',
        title: 'Aggiungi immobili e organizzali in portafogli',
        description:
          'Crea ogni immobile con posizione, tipo e dettagli chiave, poi raggruppa gli asset per città, strategia o struttura del portafoglio.',
        image: createPlaceholder(960, 720, '281b60', 'f4efff', 'Struttura del portafoglio'),
      },
      {
        eyebrow: 'Contratti e fatturazione',
        title: 'Tieni sotto controllo contratti, scadenze e fatture',
        description:
          'Gestisci più contratti per immobile, controlla lo stato dei pagamenti e fai follow-up tramite WhatsApp, email o chiamata diretta.',
        image: createPlaceholder(960, 720, '3a2a81', 'f4efff', 'Contratti e fatturazione'),
      },
      {
        eyebrow: 'Operatività',
        title: 'Registra spese, eventi, attività e contatti chiave',
        description:
          'Segna riparazioni, utenze, ispezioni, promemoria e i professionisti che potresti dover contattare in qualsiasi momento.',
        image: createPlaceholder(960, 720, '4b33a0', 'f4efff', 'Hub operativo'),
      },
      {
        eyebrow: 'Report',
        title: 'Controlla report, tasse, debiti ed esportazioni CSV',
        description:
          'Monitora redditività, debiti, spese, calcoli fiscali ed esportazioni CSV per prendere decisioni basate su dati reali del portafoglio.',
        image: createPlaceholder(960, 720, '5d45bc', 'f4efff', 'Report e tasse'),
      },
    ],
  },
  testimonial: {
    communityLabel: 'Proprietari, gestori e investitori',
    quote: 'Conosci altri proprietari e investitori nel forum',
    description:
      'Usa il forum pubblico per fare domande, condividere flussi di lavoro, incontrare persone con idee di investimento simili e scambiare informazioni pratiche che aiutano a migliorare decisioni e risultati.',
    author: 'Community aperta per la gestione degli affitti',
    forumLabel: 'Visita il forum',
    forumUrl: FORUM_URL,
    statA: 'Idee condivise',
    statB: 'Supporto e networking',
    avatars: ['F', 'O', 'R', 'U', 'M'],
  },
  forum: {
    hero: {
      title: 'Unisciti al forum degli affitti',
      description:
        'Connettiti con proprietari, gestori e investitori immobiliari. Condividi flussi di lavoro, fai domande e scambia consigli pratici che migliorano la tua attività di affitto.',
      ctaLabel: 'Apri il forum',
      forumUrl: 'https://drodriguez-support.com',
    },
    features: {
      eyebrow: 'Cosa puoi fare',
      title: 'Una comunità creata per i professionisti degli affitti',
      description:
        'Che tu gestisca una sola unità o un portafoglio in crescita, il forum ti dà accesso diretto a persone che affrontano le stesse decisioni operative ogni giorno.',
      items: [
        {
          title: 'Fai domande e rispondi',
          description:
            'Pubblica su gestione dei contratti, selezione degli inquilini, flussi di manutenzione, preparazione fiscale e normative locali. Ricevi risposte da proprietari e investitori esperti.',
        },
        {
          title: 'Condividi il tuo metodo di lavoro',
          description:
            'Descrivi come tieni traccia degli affitti, gestisci le riparazioni, organizzi i documenti e ti prepari per la dichiarazione dei redditi. Impara dagli altri e migliora il tuo processo.',
        },
        {
          title: 'Incontra investitori con obiettivi simili',
          description:
            'Trova persone che investono negli stessi mercati, tipi di proprietà o strategie. Scambia informazioni di mercato e costruisci la tua rete professionale.',
        },
        {
          title: 'Rimani aggiornato sulle tendenze degli affitti',
          description:
            'Segui le discussioni su leggi sugli affitti, cambiamenti del mercato, opzioni di finanziamento e strumenti di gestione. Mantieni le tue conoscenze aggiornate senza cercare fonti sparse.',
        },
        {
          title: 'Ricevi feedback sulla tua configurazione',
          description:
            'Descrivi il tuo attuale sistema di gestione immobiliare e ricevi suggerimenti da chi ha già risolto gli stessi problemi organizzativi.',
        },
        {
          title: 'Accedi a consigli esclusivi',
          description:
            "Leggi consigli pratici che derivano dall'esperienza reale — il tipo di conoscenza operativa che raramente viene pubblicata in articoli o tutorial.",
        },
      ],
    },
    faq: {
      eyebrow: 'Domande frequenti',
      title: 'Come funziona il forum',
      description: 'Tutto ciò che devi sapere per partecipare alla community di My Rents.',
      items: [
        {
          question: "L'iscrizione al forum è gratuita?",
          answer:
            'Sì, il forum pubblico è aperto a tutti. Non hai bisogno di un abbonamento My Rents per leggere le discussioni, fare domande o condividere la tua esperienza.',
        },
        {
          question: "Ho bisogno dell'app per partecipare?",
          answer:
            'No, il forum funziona su una piattaforma separata. Puoi accedervi da qualsiasi browser su desktop o mobile senza installare nulla.',
        },
        {
          question: 'Quali argomenti posso discutere?',
          answer:
            'Qualsiasi argomento legato alla gestione degli affitti: contratti, inquilini, manutenzione, spese, tasse, assicurazioni, questioni legali, tendenze di mercato e consigli sui flussi di lavoro. La community si concentra sulla conoscenza pratica e operativa.',
        },
        {
          question: 'Posso promuovere i miei servizi?',
          answer:
            "Il forum è uno spazio di condivisione della conoscenza, non un mercato. L'autopromozione è generalmente sconsigliata, a meno che non risponda direttamente a una domanda o risolva un problema specifico condiviso dalla community.",
        },
      ],
    },
  },
  benefits: {
    intro: {
      eyebrow: 'Funzionalità',
      title: 'Tutto ciò che serve ai proprietari per restare organizzati e in controllo',
      description:
        'Pensata per i dettagli operativi che di solito si perdono tra contratti, spese, manutenzione e documenti.',
    },
    items: [
      {
        title: 'Struttura del portafoglio',
        description:
          'Vedi i tuoi immobili come li gestisci davvero, che si tratti di una singola unità, di un edificio o di un portafoglio più ampio.',
      },
      {
        title: 'Controllo dei contratti',
        description:
          'Mantieni importi, scadenze, stato e più contratti per immobile facili da rivedere.',
      },
      {
        title: 'Monitoraggio delle spese',
        description:
          'Registra manutenzione, utenze e acquisti una tantum senza perdere il contesto finanziario.',
      },
      {
        title: 'Archivio documenti',
        description:
          'Conserva contratti, report di ispezione e altri documenti dove puoi ritrovarli quando ti servono.',
      },
      {
        title: 'Prove fotografiche',
        description:
          "Costruisci uno storico visivo di stanze, mobili e stato dell'immobile all'ingresso, durante le ispezioni o al passaggio di consegne.",
      },
      {
        title: 'Report e impostazioni fiscali',
        description:
          'Lavora con redditività, debiti, esportazioni e impostazioni fiscali adattabili al tuo processo locale.',
      },
    ],
  },
  pricing: {
    intro: {
      eyebrow: 'My Rents',
      title: 'Scegli il tuo piano',
      description:
        'Ogni piano sblocca gli stessi strumenti — scegli la durata che meglio si adatta al tuo modo di lavorare.',
    },
    message: {
      title: 'Un piano, quattro opzioni',
      description:
        'Scegli la durata che meglio si adatta al tuo ritmo di adozione. Dopo il download vedrai il prezzo locale esatto per ogni opzione prima di confermare qualsiasi cosa.',
    },
    plans: [
      {
        key: 'weekly',
        name: 'Settimanale',
        summary:
          'Ideale se vuoi provare My Rents per un breve periodo e vedere come si adatta al tuo modo di lavorare.',
        detail: 'Abbonamento settimanale',
        subdetail: "Prezzo mostrato nell'app dopo il download",
        ctaLabel: 'Scarica e controlla il prezzo',
      },
      {
        key: 'monthly',
        name: 'Mensile',
        summary:
          "Ideale se vuoi iniziare a usare My Rents subito e mantenere l'impegno leggero mentre capisci come si adatta al tuo modo di lavorare.",
        detail: 'Abbonamento mensile',
        subdetail: "Prezzo mostrato nell'app dopo il download",
        ctaLabel: 'Scarica e controlla il prezzo',
      },
      {
        key: 'annual',
        name: 'Annuale',
        badge: 'Prova di 7 giorni',
        summary:
          'La scelta migliore se sai già che My Rents fa parte del tuo flusso quotidiano e vuoi il prezzo più basso al mese.',
        detail: 'Abbonamento annuale',
        subdetail: "Prezzo mostrato nell'app dopo il download",
        ctaLabel: 'Scarica e controlla il prezzo',
      },
      {
        key: 'lifetime',
        name: 'Pagamento unico',
        summary:
          'Un solo pagamento, nessun rinnovo. Ideale se vuoi un accesso permanente a My Rents.',
        detail: 'Pagamento unico',
        subdetail: "Prezzo mostrato nell'app dopo il download",
        ctaLabel: 'Scarica e controlla il prezzo',
      },
    ],
    featuresTitle: 'Cosa include',
    featuresDescription:
      'Tutte le opzioni qui sotto sbloccano lo stesso set di funzioni. Cambia solo la durata.',
    features: [
      {
        title: 'Portafogli illimitati',
        description:
          'Crea tutti i gruppi che ti servono per capire i tuoi investimenti nel modo in cui li gestisci davvero.',
      },
      {
        title: 'Immobili illimitati',
        description: 'Nessun limite al numero di immobili o unità che puoi aggiungere.',
      },
      {
        title: 'Generatore di fatture',
        description: 'Crea fatture di affitto e addebiti extra in pochi passaggi.',
      },
      {
        title: 'Esportazioni CSV',
        description:
          'Esporta i tuoi numeri quando vuoi una visione esterna più chiara o devi lavorare con altri report.',
      },
      {
        title: 'Supporto personale e diretto',
        description:
          'Niente bot. Nessuna coda esterna. Parli direttamente con la persona che costruisce My Rents.',
      },
      {
        title: 'Nessuna pubblicità',
        description: 'Lavora senza interruzioni o elementi promozionali.',
      },
    ],
    storePricing: {
      title: "Guarda il tuo prezzo nell'app",
      description:
        "Il prezzo dipende dal paese e appare dentro My Rents. Scarica l'app e vedrai l'importo esatto per la tua regione prima di pagare.",
    },
    livePricing: {
      introDescription:
        'Ogni piano sblocca gli stessi strumenti — scegli la durata che meglio si adatta al tuo flusso. I prezzi qui sotto arrivano direttamente da Google Play per il paese selezionato in questa pagina.',
      messageDescription:
        "Scegli la durata che meglio si adatta al tuo flusso. Cambia paese per vedere il prezzo Google Play attuale per i piani settimanale, mensile, annuale e pagamento unico prima di scaricare l'app.",
      storeTitle: 'Guarda il prezzo per paese',
      storeDescription:
        "Questi prezzi riflettono l'importo Google Play del paese selezionato. Acquisto e fatturazione avvengono comunque dentro My Rents.",
      selectorLabel: 'Paese',
      selectedCountryLabel: 'Prezzo Google Play per {country}',
      loadingLabel: 'Caricamento del prezzo...',
      unavailableLabel: 'Prezzo non disponibile per questo paese',
    },
    singleUser: {
      title: 'Un utente per piano',
      description: 'Le opzioni di questa pagina sono acquisti singoli per un solo account.',
    },
    companies: {
      title: 'Hai bisogno di account di team?',
      description:
        "Se la tua attività ha bisogno di più utenti, account separati o una configurazione diversa, contattaci e ti aiuteremo a scegliere l'opzione migliore.",
    },
    androidCtaLabel: 'Vedi prezzo su Android',
    iOSCtaLabel: 'Vedi prezzo su iOS',
    businessCtaLabel: 'Contattaci per account business',
    popularLabel: 'Migliore opzione',
    trialLabel: 'Prova gratuita di 7 giorni',
    trialCancelLabel: 'Annulla in qualsiasi momento',
    freeModeTitle: 'Prova My Rents gratis',
    freeModeEyebrow: 'Nessun piano necessario',
    freeModeCopy:
      "Inizia con la nostra modalità gratuita limitata per provare l'app con le tue proprietà. Passa a un piano a pagamento quando sei pronto per portafogli illimitati, generazione di fatture e altro.",
    countryNoteLabel: '*Prezzi mostrati per {country}',
  },
  process: {
    intro: {
      eyebrow: 'Come i proprietari riprendono il controllo',
      title: 'Come iniziare',
      description:
        'Non serve un progetto di migrazione perfetto. Inizia con immobili, contratti e documenti che ti servono oggi e da lì mantieni organizzati ogni nuovo pagamento, spesa e promemoria.',
    },
    steps: [
      {
        index: '01',
        title: "Scarica l'app e provala con il tuo flusso reale",
        description:
          'Usa la prova di 7 giorni con immobili veri, non con dati finti, così puoi capire rapidamente se la struttura si adatta al tuo modo di lavorare.',
      },
      {
        index: '02',
        title: 'Aggiungi prima immobili e unità',
        description:
          'Costruisci la base del tuo portafoglio così ogni pagamento, documento e promemoria ha un posto chiaro.',
      },
      {
        index: '03',
        title: 'Collega i contratti attivi e i documenti che finisci sempre per cercare',
        description:
          'Conserva contratti, assicurazioni, fatture e file chiave che normalmente spariscono tra cartelle, email e screenshot.',
      },
      {
        index: '04',
        title: 'Inizia a registrare pagamenti, spese ed eventi nello stesso posto',
        description:
          'Tieni traccia di affitti scaduti, riparazioni, bollette ricorrenti e attività dei fornitori senza ricostruire la stessa storia ogni mese.',
      },
      {
        index: '05',
        title: 'Controlla report ed esportazioni quando ti servono risposte',
        description:
          "Quando vuoi verificare redditività, debiti, tasse o documenti di supporto, le informazioni sono già collegate all'immobile giusto.",
      },
    ],
  },
  impact: {
    intro: {
      eyebrow: 'Cosa cambia',
      title: 'Come aiuta My Rents',
      description:
        'My Rents resta ricca di funzioni, ma il valore vero è che ogni funzione aiuta a rispondere più in fretta a una domanda del proprietario invece di creare un altro posto in cui cercare.',
    },
    items: [
      {
        title: 'Vista del portafoglio',
        description:
          "Passa dalla vista del portafoglio ai dettagli dell'immobile con contratti, contatti, file e note già collegati.",
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: "Screenshot dell'area portafoglio di My Rents",
      },
      {
        title: 'Stato dei pagamenti',
        description:
          'Controlla stato degli affitti, fatture e azioni di follow-up senza chiederti quale inquilino è in ritardo di due settimane e quale ha pagato solo in parte.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: "Screenshot dell'area immobili di My Rents",
      },
      {
        title: 'Dettagli del contratto',
        description:
          'Rivedi il contratto attivo, le scadenze e il flusso di fatturazione nella stessa scheda invece di saltare tra contratti e fogli di calcolo.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot del flusso contratto e scadenze in My Rents',
      },
      {
        title: 'Dettagli della proprietà',
        description:
          'Dettagli della proprietà, unità, note e dati collegati restano insieme così puoi capire velocemente un asset anche dopo giorni o settimane di distanza.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: "Screenshot dell'area spese e report di My Rents",
      },
      {
        title: 'Monitoraggio delle spese',
        description:
          'Registra riparazioni, utenze e costi ad hoc mentre sono ancora freschi così i numeri restano corretti e le prove restano collegate.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: "Screenshot dell'area documenti e foto di My Rents",
      },
      {
        title: 'Report',
        description:
          "Usa report, controllo dei debiti, viste di redditività ed esportazioni senza ricostruire l'anno partendo dagli estratti conto.",
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot degli strumenti fiscali, mappa e contatti di My Rents',
      },
      {
        title: 'Eventi',
        description:
          'Riparazioni, ispezioni, promemoria e attività ricorrenti restano visibili così i follow-up importanti non vivono solo nella tua testa.',
        image: calendarImage,
        imageAlt: 'Screenshot di calendario ed eventi',
      },
      {
        title: 'Contatti',
        description:
          'Mantieni inquilini, fornitori e consulenti organizzati per immobile così non devi scavare nelle chat quando qualcosa si rompe.',
        image: contactsListImage,
        imageAlt: 'Screenshot della lista contatti',
      },
    ],
  },
  appLanguages: {
    intro: {
      eyebrow: 'Lingue',
      title: 'Disponibile in 6 lingue',
      description:
        'Usa My Rents nella lingua che si adatta meglio alla tua gestione quotidiana degli affitti.',
    },
    listLabel: "Disponibili nell'app",
    languages: ['Español', 'English', 'Italiano', 'Deutsch', 'Français', 'Português'],
    summary: "Supportate nell'app: spagnolo, inglese, italiano, tedesco, francese e portoghese.",
    note: "La web e l'app My Rents supportano tutte e sei le lingue elencate qui.",
  },
  faq: {
    intro: {
      eyebrow: 'FAQ',
      title: 'Domande frequenti',
      description: 'Risposte dirette su prezzi, flussi di lavoro, report e supporto.',
    },
    items: [
      {
        question: 'My Rents può sostituire i fogli di calcolo per un piccolo portafoglio?',
        answer:
          "È proprio uno dei casi d'uso più comuni. My Rents ti aiuta a smettere di dividere affitti, spese, documenti, promemoria e note sugli immobili tra fogli e cartelle separate.",
      },
      {
        question: 'Cosa cambia tra 1 mese, 6 mesi e 1 anno?',
        answer:
          "Cambia solo la durata dell'abbonamento. Gli strumenti PRO sono gli stessi in ogni opzione.",
      },
      {
        question: 'Come vedo il prezzo per il mio paese?',
        answer:
          "Scegli il tuo paese nella sezione PRO di questo sito per vedere il prezzo Google Play attuale. Puoi confermare lo stesso importo locale dentro My Rents prima di completare l'acquisto.",
      },
      {
        question: "Il prezzo PRO è per un utente o per un'azienda?",
        answer:
          'Il prezzo PRO di questa pagina è per un singolo account utente. Se la tua azienda ha bisogno di più account o di una configurazione diversa, contattaci direttamente.',
      },
      {
        question: 'Posso registrare spese e fatture una tantum?',
        answer:
          'Sì. My Rents è pensata per registrare sia costi ricorrenti come utenze e manutenzione, sia acquisti occasionali, mobili o riparazioni urgenti.',
      },
      {
        question: "L'app aiuta con i contratti e i promemoria di pagamento?",
        answer:
          'Sì. Puoi salvare più contratti per immobile, controllare scadenze e stato dei pagamenti e usare azioni di follow-up tramite WhatsApp, email o chiamata diretta.',
      },
    ],
  },
  contact: {
    emailAddress: CONTACT_EMAIL,
    forumUrl: FORUM_URL,
    intro: {
      eyebrow: 'Stai ancora gestendo gli affitti da troppi posti?',
      title: 'Dicci cosa si sta complicando',
      description:
        'Se pagamenti, documenti, spese o scadenze si stanno perdendo tra più strumenti, raccontaci cosa oggi ti crea confusione e ti indicheremo il setup migliore in My Rents.',
    },
    forumPrefix: 'Forum pubblico',
    forumCtaLabel: 'Apri il forum pubblico',
    form: {
      nameLabel: 'Nome',
      namePlaceholder: 'Il tuo nome',
      emailLabel: 'Email',
      emailPlaceholder: 'tu@example.com',
      messageLabel: 'Di cosa hai bisogno?',
      messagePlaceholder:
        'Raccontaci cosa gestisci, cosa oggi ti crea confusione o quale durata di abbonamento stai valutando.',
      subjectLabel: 'Contatto dal sito di',
      submitLabel: 'Apri bozza email',
      success:
        'La tua app email dovrebbe aprirsi con una bozza precompilata. Se non succede, scrivi direttamente a info@myrents-app.com.',
    },
  },
  footer: {
    summary:
      'Gestione affitti per proprietari che vogliono avere tutta la storia di ogni immobile in un solo posto.',
    menuHeading: 'Menu',
    legalHeading: 'Legale',
    contactHeading: 'Contatto',
    legalLinks: [
      { label: 'Termini di servizio', routeKey: 'terms' },
      { label: 'Informativa sulla privacy', routeKey: 'privacy' },
      { label: 'EULA', routeKey: 'eula' },
      { label: 'Eliminazione dei dati', routeKey: 'dataDeletion' },
    ],
    upgradePrompt: 'Domande prima di attivare PRO? Scrivici.',
    forumLinkLabel: 'Forum',
    privacyLinkLabel: 'Privacy',
    dataDeletionLinkLabel: 'Eliminazione dei dati',
    bottomLabel: 'Copyright © 2026 My Rents',
  },
  legalUi: {
    backHomeLabel: 'Torna alla home',
    lastUpdatedPrefix: 'Ultimo aggiornamento',
  },
  unsubscribe: {
    eyebrow: 'Preferenze email',
    title: "Annulla l'iscrizione alle email di marketing di My Rents",
    intro:
      "Inserisci l'indirizzo email su cui ricevi i messaggi di marketing di My Rents e lo aggiungeremo alla nostra lista di soppressione per le future campagne.",
    form: {
      emailLabel: 'Indirizzo email',
      emailPlaceholder: 'tu@example.com',
      helper:
        'Questa pagina è solo per le email di marketing. Usa lo stesso indirizzo con cui ricevi i messaggi di My Rents.',
      note: "Le email di servizio, fatturazione o legate all'account possono continuare a essere inviate quando sono necessarie per far funzionare My Rents o per supportare il tuo account.",
      submitLabel: 'Disiscrivi questa email',
    },
    homeLabel: 'Torna alla home',
    contactLabel: 'Contatta il supporto',
    states: {
      submitting: {
        title: 'Stiamo salvando la tua richiesta',
        description: 'Stiamo aggiungendo questo indirizzo alla lista di soppressione di My Rents.',
      },
      success: {
        title: 'Questa email è stata disiscritta',
        description:
          'Abbiamo salvato questo indirizzo nella lista di soppressione di My Rents per le future email di marketing. Se hai appena ricevuto una campagna già preparata, può esserci un breve ritardo.',
      },
      invalidEmail: {
        title: 'Inserisci un indirizzo email valido',
        description:
          "Non siamo riusciti a usare questo indirizzo email. Controlla l'ortografia e riprova con l'indirizzo che ha ricevuto le email di marketing di My Rents.",
      },
      unavailable: {
        title: 'La disiscrizione non è ancora configurata',
        description:
          'Al sito manca la configurazione Firebase necessaria per salvare le richieste di disiscrizione. Contatta il supporto e ti rimuoveremo manualmente.',
      },
      error: {
        title: 'Non siamo riusciti a salvare la tua richiesta',
        description:
          "Si è verificato un problema durante il salvataggio di questa richiesta di disiscrizione. Riprova oppure contatta il supporto così potremo rimuovere l'indirizzo manualmente.",
      },
    },
  },
  controls: {
    previousLabel: 'Precedente',
    nextLabel: 'Successivo',
  },
}

const ptOverride: SiteContentWithoutLegalPages = {
  playStoreUrl: PLAY_STORE_URL,
  appStoreUrl: APP_STORE_URL,
  meta: {
    routeTitles: {
      home: 'My Rents | App de gestão de alugueres',
      pricing: 'Preços | My Rents',
      terms: 'Termos de serviço | My Rents',
      privacy: 'Política de privacidade | My Rents',
      eula: 'EULA | My Rents',
      dataDeletion: 'Eliminação de dados | My Rents',
      unsubscribe: 'Cancelar subscrição dos emails de marketing | My Rents',
      forum: 'Fórum | My Rents',
    },
  },
  header: {
    brandLabel: 'My Rents',
    navAriaLabel: 'Navegação principal',
    ctaLabel: 'Ver preços',
    languageLabel: 'Idioma',
    languages: sharedLanguages,
  },
  primaryNav: [
    { label: 'Como ajuda', hash: '#features' },
    { label: 'Preços', hash: '/pricing' },
    { label: 'Centro de documentos', hash: '#documents-center' },
    { label: 'Como começar', hash: '#how-to-start' },
    { label: 'Forum', hash: '/forum' },
  ],
  hero: {
    rating: 'Classificada com 4,8/5 no Google Play',
    title: 'Acabe com o caos administrativo dos alugueres',
    copy: 'Bastam poucos imóveis para criar verdadeiro caos administrativo: rendas que chegam tarde ou por partes, faturas de reparação que acabam no carro ou no WhatsApp, datas de contrato escondidas em PDFs e época fiscal que obriga a reconstruir tudo. O My Rents junta imóveis, contratos, pagamentos, despesas, documentos e contactos num só lugar.',
    playStoreCtaLabel: 'Transferir para Android',
    appStoreCtaLabel: 'Transferir para iOS',
    contactCtaLabel: 'Contacte-nos',
    snapshot: screenshotEn1,
    snapshotAlt: 'Screenshot do painel My Rents',
    trustLabel: 'Mais de 5.000 proprietários e empresas confiam em nós',
    partnersLabel: 'Pensada para proprietários que já ultrapassaram a gestão improvisada',
    partners: [
      'Proprietários com rendimento extra',
      '2 a 10 arrendamentos',
      'Proprietários que gerem sozinhos',
      'Pequenos investidores',
      'Portfólios em crescimento',
    ],
  },
  comparison: {
    intro: {
      eyebrow: 'O problema real',
      title: 'Porque é que se complica',
      description:
        'A fricção raramente vem de um grande problema isolado. É o esforço constante de reconstruir o que aconteceu, o que está em falta e a que imóvel pertence cada coisa.',
    },
    columns: [
      {
        label: 'Quando tudo está disperso',
        tone: 'muted',
        items: [
          {
            badge: 'RG',
            title: 'A renda vira um jogo de adivinhas',
            description:
              'Pagamentos em atraso, parciais ou manuais obrigam-no a lembrar-se de quem pagou, quem ainda deve e qual é o atraso real.',
          },
          {
            badge: 'RC',
            title: 'Os comprovativos perdem contexto',
            description:
              'Reparações pagas em dinheiro, faturas de fornecedores, capturas e contas por email deixam de ser úteis quando já não estão ligadas ao imóvel certo.',
          },
          {
            badge: 'LD',
            title: 'As datas do contrato escondem-se em documentos',
            description:
              'Renovações, datas finais, inspeções e lembretes vivem entre PDFs, conversas e calendários em vez de fazerem parte do mesmo fluxo.',
          },
          {
            badge: 'TX',
            title: 'A época fiscal vira trabalho de recuperação',
            description:
              'Passa dias a reconstruir o ano a partir de pastas, notificações e extratos bancários porque os registos nunca estiveram realmente ligados.',
          },
        ],
      },
      {
        label: 'Quando todo o histórico vive numa única app',
        tone: 'brand',
        items: [
          {
            badge: 'PH',
            title: 'O histórico fica ligado ao imóvel',
            description:
              'Cada imóvel mantém contratos, pagamentos, despesas, ficheiros, fotos e contactos juntos para que o contexto esteja sempre disponível.',
          },
          {
            badge: 'PS',
            title: 'O estado dos pagamentos vê-se depressa',
            description:
              'Veja o que foi pago, o que está em atraso e o que precisa de seguimento sem juntar apontamentos de várias ferramentas.',
          },
          {
            badge: 'EV',
            title: 'Eventos e prazos continuam fáceis de encontrar',
            description:
              'Datas importantes, lembretes, inspeções e renovações continuam ligados ao imóvel em vez de dependerem só da memória.',
          },
          {
            badge: 'RP',
            title: 'Os relatórios deixam de ser uma correria de última hora',
            description:
              'Os seus números, exportações e documentos de apoio já estão organizados quando precisa de rever desempenho ou preparar impostos.',
          },
        ],
      },
    ],
  },
  documentsCenter: documentsCenterContentByLocale.pt,
  services: {
    intro: {
      eyebrow: 'Tour da app',
      title: 'Veja como o My Rents o ajuda a gerir arrendamentos com menos atrito',
      description:
        'Fluxos-chave para proprietários que querem reunir imóveis, cobranças, inquilinos e relatórios no mesmo lugar.',
    },
    items: [
      {
        eyebrow: 'Gestão de portfólio',
        title: 'Adicione imóveis e organize-os em portfólios',
        description:
          'Crie cada imóvel com localização, tipo e detalhes principais e agrupe ativos por cidade, estratégia ou estrutura de portfólio.',
        image: createPlaceholder(960, 720, '281b60', 'f4efff', 'Estrutura do portfólio'),
      },
      {
        eyebrow: 'Contratos e faturação',
        title: 'Acompanhe contratos, vencimentos e faturas',
        description:
          'Gira vários contratos por imóvel, veja o estado do pagamento e faça seguimento por WhatsApp, email ou chamada direta.',
        image: createPlaceholder(960, 720, '3a2a81', 'f4efff', 'Contratos e faturação'),
      },
      {
        eyebrow: 'Operações',
        title: 'Registe despesas, eventos, tarefas e contactos-chave',
        description:
          'Registe reparações, despesas correntes, inspeções, lembretes e os profissionais de que pode precisar a qualquer momento.',
        image: createPlaceholder(960, 720, '4b33a0', 'f4efff', 'Centro operacional'),
      },
      {
        eyebrow: 'Relatórios',
        title: 'Consulte relatórios, impostos, dívidas e exportações CSV',
        description:
          'Acompanhe rentabilidade, dívidas, despesas, cálculos fiscais e exportações CSV para decidir com base em dados reais do portfólio.',
        image: createPlaceholder(960, 720, '5d45bc', 'f4efff', 'Relatórios e impostos'),
      },
    ],
  },
  testimonial: {
    communityLabel: 'Proprietários, gestores e investidores',
    quote: 'Conheça outros proprietários e investidores no fórum',
    description:
      'Use o fórum público para colocar perguntas, partilhar formas de trabalhar, conhecer pessoas com ideias de investimento semelhantes e trocar informação prática que ajuda a melhorar decisões e resultados.',
    author: 'Comunidade aberta para gestão de arrendamentos',
    forumLabel: 'Visitar fórum',
    forumUrl: FORUM_URL,
    statA: 'Ideias partilhadas',
    statB: 'Suporte e networking',
    avatars: ['F', 'O', 'R', 'U', 'M'],
  },
  forum: {
    hero: {
      title: 'Junte-se ao fórum de alugueres',
      description:
        'Conecte-se com proprietários, gestores e investidores imobiliários. Partilhe fluxos de trabalho, faça perguntas e troque conselhos práticos que melhoram o seu negócio de arrendamento.',
      ctaLabel: 'Abrir fórum',
      forumUrl: 'https://drodriguez-support.com',
    },
    features: {
      eyebrow: 'O que pode fazer',
      title: 'Uma comunidade criada para profissionais de arrendamento',
      description:
        'Quer gira uma unidade ou um portfólio em crescimento, o fórum dá-lhe acesso direto a pessoas que enfrentam as mesmas decisões operacionais todos os dias.',
      items: [
        {
          title: 'Faça perguntas e responda',
          description:
            'Publique sobre gestão de contratos, seleção de inquilinos, fluxos de manutenção, preparação fiscal e regulamentos locais. Obtenha respostas de proprietários e investidores experientes.',
        },
        {
          title: 'Partilhe o seu método de trabalho',
          description:
            'Descreva como acompanha as rendas, gere as reparações, organiza os documentos e se prepara para a época fiscal. Aprenda com os outros e melhore o seu próprio processo.',
        },
        {
          title: 'Conheça investidores com objetivos semelhantes',
          description:
            'Encontre pessoas que investem nos mesmos mercados, tipos de propriedade ou estratégias. Troque informações de mercado e construa a sua rede profissional.',
        },
        {
          title: 'Mantenha-se atualizado sobre tendências de arrendamento',
          description:
            'Acompanhe discussões sobre leis de arrendamento, mudanças de mercado, opções de financiamento e ferramentas de gestão. Mantenha o seu conhecimento atualizado sem procurar em fontes dispersas.',
        },
        {
          title: 'Receba feedback sobre a sua configuração',
          description:
            'Descreva o seu sistema atual de administração de propriedades e receba sugestões de quem já resolveu os mesmos problemas organizacionais.',
        },
        {
          title: 'Aceda a dicas exclusivas',
          description:
            'Leia conselhos práticos que vêm da experiência real — o tipo de conhecimento operacional que raramente é publicado em artigos ou tutoriais.',
        },
      ],
    },
    faq: {
      eyebrow: 'Perguntas frequentes',
      title: 'Como funciona o fórum',
      description: 'Tudo o que precisa de saber para participar na comunidade My Rents.',
      items: [
        {
          question: 'A inscrição no fórum é gratuita?',
          answer:
            'Sim, o fórum público está aberto a todos. Não precisa de uma subscrição My Rents para ler as discussões, fazer perguntas ou partilhar a sua experiência.',
        },
        {
          question: 'Preciso da aplicação para participar?',
          answer:
            'Não, o fórum funciona numa plataforma separada. Pode aceder a partir de qualquer navegador no computador ou telemóvel sem instalar nada.',
        },
        {
          question: 'Que temas posso discutir?',
          answer:
            'Qualquer tema relacionado com a gestão de alugueres: contratos, inquilinos, manutenção, despesas, impostos, seguros, questões legais, tendências de mercado e dicas de fluxo de trabalho. A comunidade foca-se no conhecimento prático e operacional.',
        },
        {
          question: 'Posso promover os meus serviços?',
          answer:
            'O fórum é um espaço de partilha de conhecimento, não um mercado. A autopromoção é geralmente desaconselhada, a menos que responda diretamente a uma pergunta ou resolva um problema específico partilhado pela comunidade.',
        },
      ],
    },
  },
  benefits: {
    intro: {
      eyebrow: 'Funcionalidades',
      title: 'Tudo o que um proprietário precisa para manter organização e controlo',
      description:
        'Pensada para os detalhes operacionais que normalmente se perdem entre contratos, despesas, manutenção e documentação.',
    },
    items: [
      {
        title: 'Estrutura do portfólio',
        description:
          'Veja os seus imóveis da forma como realmente os gere, seja uma única unidade, um edifício ou um portfólio mais amplo.',
      },
      {
        title: 'Controlo de contratos',
        description:
          'Mantenha valores, vencimentos, estado e vários contratos por imóvel fáceis de rever.',
      },
      {
        title: 'Acompanhamento de despesas',
        description:
          'Registe manutenção, contas e compras pontuais sem perder o contexto financeiro.',
      },
      {
        title: 'Arquivo documental',
        description:
          'Guarde contratos, relatórios de inspeção e outros documentos onde os possa encontrar quando precisar.',
      },
      {
        title: 'Provas fotográficas',
        description:
          'Construa um registo visual de divisões, móveis e estado do imóvel na entrada, inspeção ou entrega.',
      },
      {
        title: 'Relatórios e definições fiscais',
        description:
          'Trabalhe com rentabilidade, dívidas, exportações e definições fiscais ajustáveis ao seu processo local.',
      },
    ],
  },
  pricing: {
    intro: {
      eyebrow: 'My Rents',
      title: 'Escolha o seu plano',
      description:
        'Todos os planos desbloqueiam as mesmas ferramentas — escolha a duração que melhor se adapta à sua forma de trabalhar.',
    },
    message: {
      title: 'Um plano, quatro opções',
      description:
        'Escolha a duração que melhor se adapta ao seu ritmo. Depois de transferir a app, verá o preço local exato para cada opção antes de confirmar qualquer coisa.',
    },
    plans: [
      {
        key: 'weekly',
        name: 'Semanal',
        summary:
          'Ideal se quer experimentar o My Rents por um curto período e ver como encaixa na sua forma de trabalhar.',
        detail: 'Subscrição semanal',
        subdetail: 'Preço mostrado na app após a transferência',
        ctaLabel: 'Transferir e ver preço',
      },
      {
        key: 'monthly',
        name: 'Mensal',
        summary:
          'Ideal se quer começar a usar o My Rents agora e manter o compromisso leve enquanto percebe como encaixa na sua forma de trabalhar.',
        detail: 'Subscrição mensal',
        subdetail: 'Preço mostrado na app após a transferência',
        ctaLabel: 'Transferir e ver preço',
      },
      {
        key: 'annual',
        name: 'Anual',
        badge: 'Teste de 7 dias',
        summary:
          'A melhor escolha se já sabe que o My Rents faz parte da sua rotina diária e quer o preço mais baixo por mês.',
        detail: 'Subscrição anual',
        subdetail: 'Preço mostrado na app após a transferência',
        ctaLabel: 'Transferir e ver preço',
      },
      {
        key: 'lifetime',
        name: 'Pagamento único',
        summary:
          'Um só pagamento, sem renovações. Ideal se quer garantir acesso permanente ao My Rents.',
        detail: 'Pagamento único',
        subdetail: 'Preço mostrado na app após a transferência',
        ctaLabel: 'Transferir e ver preço',
      },
    ],
    featuresTitle: 'O que inclui',
    featuresDescription:
      'Qualquer opção abaixo desbloqueia exatamente o mesmo conjunto de funcionalidades. Só muda a duração.',
    features: [
      {
        title: 'Portfólios ilimitados',
        description:
          'Crie todos os grupos de que precisar para compreender os seus investimentos da forma como realmente os gere.',
      },
      {
        title: 'Imóveis ilimitados',
        description: 'Sem limite no número de imóveis ou unidades que pode adicionar.',
      },
      {
        title: 'Gerador de faturas',
        description: 'Crie faturas de renda e cobranças extra em poucos passos.',
      },
      {
        title: 'Exportações CSV',
        description:
          'Exporte os seus números sempre que quiser uma visão externa mais clara ou precisar de trabalhar com outros relatórios.',
      },
      {
        title: 'Suporte pessoal e direto',
        description:
          'Sem bots. Sem filas externas. Fala diretamente com a pessoa que constrói o My Rents.',
      },
      {
        title: 'Sem anúncios',
        description: 'Trabalhe sem interrupções nem ruído promocional.',
      },
    ],
    storePricing: {
      title: 'Veja o seu preço na app',
      description:
        'O preço depende do país e aparece dentro do My Rents. Transfira a app e verá o valor exato para a sua região antes de pagar.',
    },
    livePricing: {
      introDescription:
        'Todos os planos desbloqueiam as mesmas ferramentas — escolha a duração que melhor se adapta à sua forma de trabalhar. Os preços abaixo vêm diretamente do Google Play para o país selecionado nesta página.',
      messageDescription:
        'Escolha a duração que melhor se adapta ao seu fluxo. Mude de país para ver o preço atual do Google Play para os planos semanal, mensal, anual e de pagamento único antes de transferir a app.',
      storeTitle: 'Veja o seu preço por país',
      storeDescription:
        'Estes preços refletem o valor do Google Play para o país selecionado. A compra e a faturação continuam a acontecer dentro do My Rents.',
      selectorLabel: 'País',
      selectedCountryLabel: 'Preço do Google Play para {country}',
      loadingLabel: 'A carregar preço...',
      unavailableLabel: 'Preço indisponível para este país',
    },
    singleUser: {
      title: 'Um utilizador por plano',
      description: 'As opções desta página são compras de utilizador único para uma só conta.',
    },
    companies: {
      title: 'Precisa de contas de equipa?',
      description:
        'Se a sua empresa precisa de vários utilizadores, contas separadas ou outra configuração, contacte-nos e ajudaremos a escolher a melhor opção.',
    },
    androidCtaLabel: 'Ver preço no Android',
    iOSCtaLabel: 'Ver preço no iOS',
    businessCtaLabel: 'Contacte-nos sobre contas empresariais',
    popularLabel: 'Melhor opção',
    trialLabel: 'Teste grátis de 7 dias',
    trialCancelLabel: 'Cancele quando quiser',
    freeModeTitle: 'Experimente My Rents grátis',
    freeModeEyebrow: 'Sem planos necessários',
    freeModeCopy:
      'Comece com o nosso modo gratuito limitado para testar a aplicação com as suas propriedades. Atualize para um plano pago quando estiver pronto para portfólios ilimitados, geração de faturas e mais.',
    countryNoteLabel: '*Preços mostrados para {country}',
  },
  process: {
    intro: {
      eyebrow: 'Como os proprietários recuperam o controlo',
      title: 'Como começar',
      description:
        'Não precisa de um projeto de migração perfeito. Comece pelos imóveis, contratos e documentos de que precisa hoje e mantenha depois cada novo pagamento, despesa e lembrete organizado a partir daí.',
    },
    steps: [
      {
        index: '01',
        title: 'Transfira a app e teste-a com o seu fluxo real',
        description:
          'Use o teste de 7 dias com imóveis reais, não com dados fictícios, para perceber rapidamente se a estrutura encaixa na sua forma de trabalhar.',
      },
      {
        index: '02',
        title: 'Adicione primeiro os seus imóveis e unidades',
        description:
          'Construa a base do seu portfólio para que cada pagamento, documento e lembrete tenha um lugar claro.',
      },
      {
        index: '03',
        title: 'Junte os contratos ativos e os documentos que anda sempre à procura',
        description:
          'Guarde contratos, seguros, faturas e ficheiros importantes que normalmente acabam espalhados por pastas, emails e capturas.',
      },
      {
        index: '04',
        title: 'Comece a registar pagamentos, despesas e eventos num só lugar',
        description:
          'Acompanhe rendas em atraso, reparações, contas recorrentes e atividade de fornecedores sem reconstruir a mesma história todos os meses.',
      },
      {
        index: '05',
        title: 'Consulte relatórios e exportações quando precisar de respostas',
        description:
          'Quando quiser verificar rentabilidade, dívidas, impostos ou documentos de apoio, a informação já estará ligada ao imóvel certo.',
      },
    ],
  },
  impact: {
    intro: {
      eyebrow: 'O que muda',
      title: 'Como o My Rents ajuda',
      description:
        'O My Rents continua rico em funcionalidades, mas o valor real está em cada uma ajudar a responder mais depressa a uma pergunta do proprietário, em vez de criar mais um sítio onde procurar.',
    },
    items: [
      {
        title: 'Vista do portfólio',
        description:
          'Passe da vista do portfólio para os detalhes do imóvel com contratos, contactos, ficheiros e notas já ligados.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot da área de portfólio do My Rents',
      },
      {
        title: 'Estado dos pagamentos',
        description:
          'Acompanhe o estado das rendas, as faturas e as ações de seguimento sem se perguntar qual inquilino está com duas semanas de atraso e qual pagou só uma parte.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot da área de imóveis do My Rents',
      },
      {
        title: 'Detalhes do contrato',
        description:
          'Reveja o contrato ativo, as datas de vencimento e o fluxo de faturação no mesmo registo em vez de saltar entre contratos e folhas de cálculo.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot do fluxo de contratos e vencimentos no My Rents',
      },
      {
        title: 'Detalhes do imóvel',
        description:
          'Detalhes do imóvel, unidades, notas e registos ligados ficam juntos para compreender rapidamente um ativo mesmo após dias ou semanas sem o abrir.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot da área de despesas e relatórios do My Rents',
      },
      {
        title: 'Acompanhamento de despesas',
        description:
          'Registe reparações, serviços e custos ad hoc enquanto ainda estão frescos para que os números se mantenham corretos e a prova fique anexada.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot da área de documentos e fotos do My Rents',
      },
      {
        title: 'Relatórios',
        description:
          'Use relatórios, controlo de dívidas, vistas de rentabilidade e exportações sem reconstruir o ano a partir de extratos bancários.',
        image: FEATURE_SPOTLIGHT_IMAGE,
        imageAlt: 'Screenshot das ferramentas fiscais, mapa e contactos do My Rents',
      },
      {
        title: 'Eventos',
        description:
          'Reparações, inspeções, lembretes e tarefas recorrentes mantêm-se visíveis para que os seguimentos importantes não vivam só na sua cabeça.',
        image: calendarImage,
        imageAlt: 'Screenshot do calendário e dos eventos',
      },
      {
        title: 'Contactos',
        description:
          'Mantenha inquilinos, fornecedores e consultores organizados por imóvel para não ter de procurar em conversas quando algo se estraga.',
        image: contactsListImage,
        imageAlt: 'Screenshot da lista de contactos',
      },
    ],
  },
  appLanguages: {
    intro: {
      eyebrow: 'Idiomas',
      title: 'Disponível em 6 idiomas',
      description:
        'Use o My Rents no idioma que melhor se adapta à sua gestão diária de arrendamentos.',
    },
    listLabel: 'Disponíveis na app',
    languages: ['Español', 'English', 'Italiano', 'Deutsch', 'Français', 'Português'],
    summary: 'Suportados na app: espanhol, inglês, italiano, alemão, francês e português.',
    note: 'A web e a app My Rents suportam os seis idiomas listados aqui.',
  },
  faq: {
    intro: {
      eyebrow: 'FAQ',
      title: 'Perguntas frequentes',
      description: 'Respostas diretas sobre preços, fluxos de trabalho, relatórios e suporte.',
    },
    items: [
      {
        question: 'O My Rents pode substituir folhas de cálculo num pequeno portfólio?',
        answer:
          'Esse é precisamente um dos casos de uso mais comuns. O My Rents ajuda-o a deixar de espalhar rendas, despesas, documentos, lembretes e notas dos imóveis por folhas e pastas separadas.',
      },
      {
        question: 'O que muda entre 1 mês, 6 meses e 1 ano?',
        answer:
          'Muda apenas a duração da subscrição. As ferramentas PRO são as mesmas em todas as opções.',
      },
      {
        question: 'Como vejo o preço para o meu país?',
        answer:
          'Escolha o seu país na secção PRO deste site para ver o preço atual do Google Play. Pode confirmar o mesmo valor local dentro do My Rents antes de concluir a compra.',
      },
      {
        question: 'O preço PRO é para um utilizador ou para uma empresa?',
        answer:
          'O preço PRO desta página é para uma única conta de utilizador. Se a sua empresa precisar de várias contas ou de outra configuração, contacte-nos diretamente.',
      },
      {
        question: 'Posso registar despesas e faturas pontuais?',
        answer:
          'Sim. O My Rents foi pensado para registar tanto custos recorrentes, como contas e manutenção, como compras pontuais, mobiliário ou reparações urgentes.',
      },
      {
        question: 'A app ajuda com contratos e lembretes de renda?',
        answer:
          'Sim. Pode guardar vários contratos por imóvel, rever vencimentos e estado de pagamentos e usar ações de seguimento via WhatsApp, email ou chamada direta.',
      },
    ],
  },
  contact: {
    emailAddress: CONTACT_EMAIL,
    forumUrl: FORUM_URL,
    intro: {
      eyebrow: 'Ainda gere arrendamentos a partir de demasiados sítios?',
      title: 'Diga-nos o que está confuso',
      description:
        'Se pagamentos, documentos, despesas ou datas de contrato se estão a perder entre várias ferramentas, diga-nos o que está mais confuso hoje e orientamo-lo para a melhor configuração dentro do My Rents.',
    },
    forumPrefix: 'Fórum público',
    forumCtaLabel: 'Abrir fórum público',
    form: {
      nameLabel: 'Nome',
      namePlaceholder: 'O seu nome',
      emailLabel: 'Email',
      emailPlaceholder: 'voce@example.com',
      messageLabel: 'Em que precisa de ajuda?',
      messagePlaceholder:
        'Diga-nos o que gere, o que hoje está confuso ou que duração de subscrição está a considerar.',
      subjectLabel: 'Contato do site de',
      submitLabel: 'Abrir rascunho de email',
      success:
        'A sua aplicação de email deverá abrir com um rascunho preenchido. Se isso não acontecer, escreva diretamente para info@myrents-app.com.',
    },
  },
  footer: {
    summary:
      'Gestão de arrendamentos para proprietários que querem ter a história completa de cada imóvel num só lugar.',
    menuHeading: 'Menu',
    legalHeading: 'Legal',
    contactHeading: 'Contacto',
    legalLinks: [
      { label: 'Termos de serviço', routeKey: 'terms' },
      { label: 'Política de privacidade', routeKey: 'privacy' },
      { label: 'EULA', routeKey: 'eula' },
      { label: 'Eliminação de dados', routeKey: 'dataDeletion' },
    ],
    upgradePrompt: 'Dúvidas antes de ativar o PRO? Escreva-nos.',
    forumLinkLabel: 'Forum',
    privacyLinkLabel: 'Privacidade',
    dataDeletionLinkLabel: 'Eliminação de dados',
    bottomLabel: 'Copyright © 2026 My Rents',
  },
  legalUi: {
    backHomeLabel: 'Voltar ao início',
    lastUpdatedPrefix: 'Última atualização',
  },
  unsubscribe: {
    eyebrow: 'Preferências de email',
    title: 'Cancelar a subscrição dos emails de marketing de My Rents',
    intro:
      'Introduza o endereço de email onde recebe as mensagens de marketing do My Rents e vamos adicioná-lo à nossa lista de supressão para futuras campanhas de marketing.',
    form: {
      emailLabel: 'Endereço de email',
      emailPlaceholder: 'voce@example.com',
      helper:
        'Esta página é apenas para emails de marketing. Use o mesmo endereço onde recebe mensagens do My Rents.',
      note: 'Emails de serviço, faturação ou conta podem continuar a ser enviados quando forem necessários para operar o My Rents ou apoiar a sua conta.',
      submitLabel: 'Cancelar subscrição deste email',
    },
    homeLabel: 'Voltar ao início',
    contactLabel: 'Contactar o suporte',
    states: {
      submitting: {
        title: 'A guardar o seu pedido',
        description: 'Estamos a adicionar este endereço à lista de supressão do My Rents.',
      },
      success: {
        title: 'Este email foi removido da subscrição',
        description:
          'Guardámos este endereço na lista de supressão do My Rents para futuros emails de marketing. Se acabou de receber uma campanha já preparada, pode haver um pequeno atraso.',
      },
      invalidEmail: {
        title: 'Introduza um email válido',
        description:
          'Não conseguimos usar esse endereço de email. Verifique a ortografia e tente novamente com o endereço que recebeu os emails de marketing do My Rents.',
      },
      unavailable: {
        title: 'A anulação da subscrição ainda não está configurada',
        description:
          'Ao site falta a configuração Firebase necessária para guardar pedidos de supressão. Contacte o suporte e removeremos o endereço manualmente.',
      },
      error: {
        title: 'Não conseguimos guardar o seu pedido',
        description:
          'Ocorreu um problema ao guardar este pedido de anulação de subscrição. Tente novamente ou contacte o suporte para removermos o endereço manualmente.',
      },
    },
  },
  controls: {
    previousLabel: 'Anterior',
    nextLabel: 'Seguinte',
  },
}

export const siteContentByLocale: Record<SiteLocale, SiteContent> = {
  ...baseSiteContentByLocale,
  de: createLocalizedSiteContent(deOverride),
  fr: createLocalizedSiteContent(frOverride),
  it: createLocalizedSiteContent(itOverride),
  pt: createLocalizedSiteContent(ptOverride),
}

const routeNames: AppRouteName[] = [
  'home',
  'pricing',
  'terms',
  'privacy',
  'eula',
  'dataDeletion',
  'unsubscribe',
]

export const isAppRouteName = (value: unknown): value is AppRouteName =>
  typeof value === 'string' && routeNames.includes(value as AppRouteName)

export const getRouteTitle = (locale: SiteLocale, routeName: unknown): string => {
  if (isAppRouteName(routeName)) {
    return siteContentByLocale[locale].meta.routeTitles[routeName]
  }

  return siteContentByLocale[locale].meta.routeTitles.home
}
