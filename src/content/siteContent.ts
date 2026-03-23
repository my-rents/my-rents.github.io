import screenshotEn1 from '@/assets/features/main_EN.jpg'
import screenshotEs1 from '@/assets/features/main_ES.jpg'
import user1 from '@/assets/users/landlord.jpg'
import user2 from '@/assets/users/portfolio_owner.jpg'
import user3 from '@/assets/users/property_manager.jpg'
import user4 from '@/assets/users/company.jpg'
import calendarImage from '@/assets/features/calendar_EN.jpg'
import contactsListImage from '@/assets/features/contacts_list_EN.jpg'

export type SiteLocale = 'en' | 'es'

export type LegalPageKey = 'terms' | 'privacy' | 'eula' | 'dataDeletion'

export type AppRouteName = 'home' | LegalPageKey | 'unsubscribe'

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

export interface PricingPlan {
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

export interface SiteContent {
  playStoreUrl: string
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
    iosDevelopmentLabel: string
    contactCtaLabel: string
    snapshot: string
    snapshotAlt: string
    partnersLabel: string
    partners: string[]
  }
  comparison: {
    intro: SectionIntroContent
    columns: ComparisonColumn[]
  }
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
    singleUser: {
      title: string
      description: string
    }
    companies: {
      title: string
      description: string
    }
    marketingEmails: {
      title: string
      description: string
    }
    businessCtaLabel: string
  }
  process: {
    intro: SectionIntroContent
    steps: ProcessStep[]
  }
  impact: {
    intro: SectionIntroContent
    items: FeatureSpotlightItem[]
  }
  team: {
    intro: SectionIntroContent
    members: TeamMember[]
  }
  appLanguages: AppLanguageSupport
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

export const supportedLocales = ['en', 'es'] as const

export const defaultLocale: SiteLocale = 'en'

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.drodriguez.my_rents'
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

export const siteContentByLocale: Record<SiteLocale, SiteContent> = {
  en: {
    playStoreUrl: PLAY_STORE_URL,
    meta: {
      routeTitles: {
        home: 'My Rents | Rental App for Landlords',
        terms: 'Terms of Service | My Rents',
        privacy: 'Privacy Policy | My Rents',
        eula: 'EULA | My Rents',
        dataDeletion: 'Data Deletion | My Rents',
        unsubscribe: 'Unsubscribe | My Rents',
      },
    },
    header: {
      brandLabel: 'My Rents',
      navAriaLabel: 'Primary',
      ctaLabel: 'See PRO options',
      languageLabel: 'Language',
      languages: sharedLanguages,
    },
    primaryNav: [
      { label: 'How it helps', hash: '#features' },
      { label: 'How to start', hash: '#how-to-start' },
      { label: 'PRO', hash: '#pricing' },
      { label: "Who it's for", hash: '#who-its-for' },
      { label: 'Forum', hash: '#forum' },
      { label: 'FAQ', hash: '#faq' },
    ],
    hero: {
      rating: 'Rated 4.8/5 on Google Play',
      title: 'Stop rental admin chaos',
      copy: 'A few properties are enough to create real admin chaos: rent arrives late or in parts, repair invoices end up in your car or WhatsApp, lease dates live in PDFs, and tax season becomes a rebuild project. My Rents gives small landlords one place for properties, leases, payments, expenses, documents, and contacts.',
      playStoreCtaLabel: 'Download on Google Play',
      iosDevelopmentLabel: '* iOS version currently under development',
      contactCtaLabel: 'Contact us',
      snapshot: screenshotEn1,
      snapshotAlt: 'English screenshot of the My Rents dashboard',
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
        eyebrow: 'The real problem',
        title: 'Why it gets messy',
        description:
          'The friction is not usually one dramatic event. It is the constant effort of reconstructing what happened, what is due, and what belongs to which property.',
      },
      columns: [
        {
          label: 'When everything is scattered',
          tone: 'muted',
          items: [
            {
              badge: 'RG',
              title: 'Rent becomes guesswork',
              description:
                'Late, partial, or manual payments force you to remember who paid, who still owes, and how far behind they are.',
            },
            {
              badge: 'RC',
              title: 'Receipts lose context',
              description:
                'Cash repairs, supplier invoices, screenshots, and emailed bills stop being useful when they are no longer tied to the right property.',
            },
            {
              badge: 'LD',
              title: 'Lease dates hide in documents',
              description:
                'Renewals, end dates, inspections, and reminders live across PDFs, chats, and calendars instead of inside one workflow.',
            },
            {
              badge: 'TX',
              title: 'Tax season turns into recovery work',
              description:
                'You spend days rebuilding the year from folders, notifications, and bank statements because the records were never truly connected.',
            },
          ],
        },
        {
          label: 'When the story lives in one app',
          tone: 'brand',
          items: [
            {
              badge: 'PH',
              title: 'Property history stays attached',
              description:
                'Each property keeps its leases, payments, expenses, files, photos, and contacts together so the context is always there.',
            },
            {
              badge: 'PS',
              title: 'Payment status is visible fast',
              description:
                'See what was paid, what is overdue, and what needs follow-up without stitching together notes from different tools.',
            },
            {
              badge: 'EV',
              title: 'Events and deadlines stay findable',
              description:
                'Important dates, reminders, inspections, and renewals stay connected to the property instead of depending on memory.',
            },
            {
              badge: 'RP',
              title: 'Reports stop being a scramble',
              description:
                'Your numbers, exports, and supporting documents are already organized when you need to review performance or prepare for taxes.',
            },
          ],
        },
      ],
    },
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
      forumLabel: FORUM_URL,
      forumUrl: FORUM_URL,
      statA: 'Shared ideas',
      statB: 'Support and networking',
      avatars: ['F', 'O', 'R', 'U', 'M'],
    },
    benefits: {
      intro: {
        eyebrow: 'Features',
        title: 'Everything landlords need to stay organised and in control',
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
          title: 'Expense tracking',
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
        eyebrow: 'My Rents PRO',
        title: 'Choose your PRO plan',
        description:
          'PRO is for landlords who want cleaner records, faster answers, and less monthly reconstruction. The 1-month, 6-month, and 1-year plans unlock the same tools, and the exact amount is shown inside the app based on your country.',
      },
      message: {
        title: 'One PRO, three options',
        description:
          'Choose the duration that matches how you want to adopt My Rents. After downloading the app, you will see your exact local price for 1 month, 6 months, and 1 year before you confirm anything.',
      },
      plans: [
        {
          name: '1 month',
          badge: 'Flexible',
          summary:
            'Ideal if you want to start using PRO now and keep the commitment light while you test how it fits your workflow.',
          detail: '1-month subscription',
          subdetail: 'Price shown inside the app after download',
          ctaLabel: 'Download and check price',
        },
        {
          name: '6 months',
          badge: 'New',
          summary:
            'A strong fit if you want more time with fewer renewals while still keeping the subscription shorter than a full year.',
          detail: '6-month subscription',
          subdetail: 'Price shown inside the app after download',
          ctaLabel: 'Download and check price',
        },
        {
          name: '1 year',
          badge: 'Best continuity',
          summary:
            'Best if you already know My Rents is part of your day-to-day workflow and you want the longest subscription available today.',
          detail: '1-year subscription',
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
          title: 'No ads',
          description: 'Work without interruptions or promotional clutter.',
        },
      ],
      storePricing: {
        title: 'See your PRO price in the app',
        description:
          'PRO pricing depends on country and appears inside My Rents. Download the app, open the PRO screen, and you will see the exact 1-month, 6-month, and 1-year amount for your region before you pay.',
      },
      singleUser: {
        title: 'One user per PRO plan',
        description: 'The PRO options on this page are single-user purchases for one account.',
      },
      companies: {
        title: 'Need team accounts?',
        description:
          'If your business needs multiple users, separate accounts, or a different setup, contact us and we will help you choose the best option.',
      },
      marketingEmails: {
        title: 'Marketing emails',
        description:
          'When you create a My Rents account, you are opted in by default to receive product news, offers, and other marketing emails from My Rents. Every marketing email includes an unsubscribe link so you can opt out at any time.',
      },
      businessCtaLabel: 'Contact us about business accounts',
    },
    process: {
      intro: {
        eyebrow: 'How landlords regain control',
        title: 'How to start',
        description:
          'You do not need a perfect migration project. Start with the properties, leases, and documents you need today, then keep every new payment, expense, and reminder organized from there.',
      },
      steps: [
        {
          index: '01',
          title: 'Download the app and test it with your real workflow',
          description:
            'Use the 7-day trial with live properties, not dummy data, so you can quickly see whether the structure fits how you already work.',
        },
        {
          index: '02',
          title: 'Add your properties and units first',
          description:
            'Build the backbone of your portfolio so every payment, document, and reminder has a clear place to live.',
        },
        {
          index: '03',
          title: 'Attach active leases and the documents you always hunt for',
          description:
            'Store the contracts, insurance files, invoices, and key records that usually disappear into folders, email chains, or screenshots.',
        },
        {
          index: '04',
          title: 'Start logging payments, expenses, and events in one place',
          description:
            'Track overdue rent, repairs, recurring bills, and supplier activity without rebuilding the same story every month.',
        },
        {
          index: '05',
          title: 'Review reports and exports when you need answers',
          description:
            'When you want to check profitability, debts, taxes, or supporting records, the information is already tied to the right property.',
        },
      ],
    },
    impact: {
      intro: {
        eyebrow: 'What changes',
        title: 'How My Rents helps',
        description:
          'My Rents is still feature-rich, but the value is that each feature helps answer a landlord question faster instead of creating another place to look.',
      },
      items: [
        {
          title: 'Portfolio view',
          description:
            'Move from portfolio view to property details with the leases, contacts, files, and notes already connected.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents portfolio area',
        },
        {
          title: 'Payment status',
          description:
            'Track rent status, invoices, and follow-up actions without wondering which tenant is two weeks late and which one only made a partial payment.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents properties area',
        },
        {
          title: 'Lease details',
          description:
            'Review the active agreement, due dates, and billing workflow from the same record instead of jumping between contracts and spreadsheets.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents lease and rent due workflow',
        },
        {
          title: 'Property details',
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
          title: 'Reports',
          description:
            'Use reports, debt tracking, profitability views, and exports without rebuilding the year from bank statements.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents tax, map, and contact tools',
        },
        {
          title: 'Events',
          description:
            'Repairs, inspections, reminders, and recurring tasks stay visible so important follow-ups do not live only in your head.',
          image: calendarImage,
          imageAlt: 'Calendar and events screenshot',
        },
        {
          title: 'Contacts',
          description:
            'Keep tenants, suppliers, and advisors organised by property so you are not digging through chats when something breaks.',
          image: contactsListImage,
          imageAlt: 'Contact list screenshot',
        },
      ],
    },
    team: {
      intro: {
        eyebrow: "Who it's for",
        title: "Who it's for",
        description:
          'My Rents is for owners who have outgrown ad hoc spreadsheets and folders but are not looking for enterprise software or a management company to sit in the middle.',
      },
      members: [
        {
          name: 'New landlord',
          role: 'Useful when you want good habits from the first lease instead of creating a messy system you have to replace later.',
          image: user1,
        },
        {
          name: 'Small portfolio owner',
          role: 'Ideal when two or three properties already mean late-rent follow-up, repair receipts, lease dates, and paperwork are getting hard to keep straight.',
          image: user2,
        },
        {
          name: 'Property manager',
          role: 'Helpful for day-to-day follow-up when you need fast access to payment status, maintenance history, contacts, and property context.',
          image: user3,
        },
        {
          name: 'Company or management team',
          role: 'Useful when a small business needs consistent records, reporting, invoices, and clearer oversight across several properties or portfolios.',
          image: user4,
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
      note: 'The website itself currently switches between English and Spanish. The My Rents app supports all six languages listed here.',
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
          question: 'What changes between the 1 month, 6 months, and 1 year plans?',
          answer:
            'Only the subscription length changes. The PRO tools are the same in every option.',
        },
        {
          question: 'How do I see the price for my country?',
          answer:
            'Download My Rents and open the PRO upgrade area. The app shows the exact local price for your account before you confirm any purchase.',
        },
        {
          question: 'Is the PRO price for one user or for a company?',
          answer:
            'The PRO pricing on this page is for one user account. If your company needs several accounts or a different setup, contact us directly.',
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
          'This End-User License Agreement governs your download, installation, access to, and use of the My Rents software provided by Daniel Rodríguez.',
        updatedAt: 'March 11, 2026',
        sections: [
          {
            title: 'License Grant',
            paragraphs: [
              'Subject to this EULA, Daniel Rodríguez grants you a limited, personal, revocable, non-exclusive, non-transferable, and non-sublicensable license to install and use My Rents on devices you control for its intended purpose.',
              'The software is licensed to you, not sold. Your right to use My Rents depends on your compliance with this EULA and any applicable app-store terms.',
            ],
          },
          {
            title: 'Accounts, Connectivity, and Purchases',
            paragraphs: [
              'Some features of My Rents require an account, internet access, or an active PRO subscription. Subscriptions and in-app purchases may be billed and managed by the app store from which you downloaded the app.',
              'Store terms, billing rules, renewal practices, and refund processes may apply in addition to this EULA and will control where mandatory store rules conflict with this EULA.',
            ],
          },
          {
            title: 'Restrictions',
            paragraphs: [
              'Except to the extent non-waivable law allows otherwise, you may not copy, modify, distribute, sell, lease, sublicense, decompile, reverse engineer, scrape, or create derivative works from My Rents or any part of it.',
              'You may not bypass security or technical restrictions, use the software for unlawful purposes, or permit unauthorized third parties to access the software through your account.',
            ],
          },
          {
            title: 'Your Data and Content',
            paragraphs: [
              'You retain ownership of the content you upload to My Rents, including images, documents, notes, property records, invoices, and related information.',
              'You grant us the limited rights needed to host, process, back up, transmit, and display that content in order to operate, support, secure, and improve My Rents for you.',
              'You are responsible for the legality, accuracy, and permissions associated with the content you upload or store through the software.',
            ],
          },
          {
            title: 'Ownership of My Rents',
            paragraphs: [
              'My Rents, including the software, source code, text, layout, visual design, logos, trademarks, and other original content, remains the exclusive property of Daniel Rodríguez or the relevant licensors.',
              'This EULA gives you only the limited use rights expressly stated here. All other rights are reserved.',
            ],
          },
          {
            title: 'Updates and Third-Party Components',
            paragraphs: [
              'We may release updates, fixes, patches, or new versions of My Rents. Some updates may be required for security, compatibility, or continued use of certain features.',
              'My Rents may include or rely on third-party services or components, including app-store services, Google services, Firebase services, or mapping tools. Those third parties may be governed by their own legal terms and privacy notices.',
            ],
          },
          {
            title: 'Disclaimer of Warranties',
            paragraphs: [
              'To the maximum extent permitted by law, My Rents is provided on an as is and as available basis without warranties of any kind, whether express, implied, or statutory.',
              'We do not guarantee that the software will be uninterrupted, error-free, fully secure, or suitable for every workflow, legal requirement, or business need.',
            ],
          },
          {
            title: 'Limitation of Liability',
            paragraphs: [
              'To the fullest extent permitted by law, Daniel Rodríguez will not be liable for indirect, incidental, consequential, special, exemplary, or punitive damages, or for loss of profits, revenue, goodwill, data, or business interruption arising out of or related to My Rents.',
              'If liability cannot be excluded, the total liability arising from or related to My Rents will be limited to the amount you paid for PRO in the 12 months before the event giving rise to the claim.',
              'Nothing in this EULA excludes liability that cannot lawfully be excluded or limited under applicable law.',
            ],
          },
          {
            title: 'Term and Termination',
            paragraphs: [
              'This EULA starts when you first install, access, or use My Rents and continues until terminated.',
              'You may terminate it at any time by stopping use of the software and deleting your account where applicable. We may suspend or terminate your license immediately if you materially breach this EULA, misuse the software, or create legal or security risk.',
              'On termination, your right to use the software ends immediately and you must stop using My Rents. If you subscribed through an app store, you must also manage cancellation through the relevant store where required.',
            ],
          },
          {
            title: 'Governing Law and Consumer Rights',
            paragraphs: [
              'This EULA is governed by the laws of Spain, without regard to conflict-of-law rules.',
              'If you live in a jurisdiction that gives you mandatory consumer protections, those protections remain available to you to the extent required by law.',
            ],
          },
          {
            title: 'Contact',
            paragraphs: [
              'If you have questions about this EULA, contact us at info@myrents-app.com, through this website, or through the public support forum.',
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
    meta: {
      routeTitles: {
        home: 'My Rents | App para gestionar alquileres',
        terms: 'Términos del servicio | My Rents',
        privacy: 'Política de privacidad | My Rents',
        eula: 'EULA | My Rents',
        dataDeletion: 'Eliminación de datos | My Rents',
        unsubscribe: 'Cancelar suscripción | My Rents',
      },
    },
    header: {
      brandLabel: 'My Rents',
      navAriaLabel: 'Principal',
      ctaLabel: 'Ver opciones PRO',
      languageLabel: 'Idioma',
      languages: sharedLanguages,
    },
    primaryNav: [
      { label: 'Cómo ayuda', hash: '#features' },
      { label: 'Cómo empezar', hash: '#how-to-start' },
      { label: 'PRO', hash: '#pricing' },
      { label: 'Para quién es', hash: '#who-its-for' },
      { label: 'Foro', hash: '#forum' },
      { label: 'FAQ', hash: '#faq' },
    ],
    hero: {
      rating: 'Valorada con 4,8/5 en Google Play',
      title: 'Pon fin al caos administrativo',
      copy: 'Unas pocas propiedades bastan para crear un caos administrativo real: cobros que llegan tarde o por partes, facturas de reparaciones que acaban en el coche o en WhatsApp, vencimientos escondidos en PDFs y una campaña de impuestos que obliga a reconstruir el año. My Rents reúne propiedades, contratos, pagos, gastos, documentos y contactos en un solo lugar.',
      playStoreCtaLabel: 'Descargar en Google Play',
      iosDevelopmentLabel: '* versión para iOS actualmente en desarrollo',
      contactCtaLabel: 'Contactar con nosotros',
      snapshot: screenshotEs1,
      snapshotAlt: 'Captura en español del panel de My Rents',
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
      forumLabel: FORUM_URL,
      forumUrl: FORUM_URL,
      statA: 'Ideas compartidas',
      statB: 'Contacto y aprendizaje',
      avatars: ['F', 'O', 'R', 'O', '+'],
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
        eyebrow: 'My Rents PRO',
        title: 'Elige tu plan PRO',
        description:
          'PRO está pensado para propietarios que quieren registros más limpios, respuestas más rápidas y menos reconstrucción mensual. Los planes de 1 mes, 6 meses y 1 año desbloquean las mismas funciones, y el importe exacto se muestra dentro de la app según tu país.',
      },
      message: {
        title: 'Un PRO, tres opciones',
        description:
          'Elige la duración que mejor encaje con tu ritmo de adopción. Después de descargar la app verás el precio local exacto para 1 mes, 6 meses y 1 año antes de confirmar nada.',
      },
      plans: [
        {
          name: '1 mes',
          badge: 'Flexible',
          summary:
            'Ideal si quieres empezar a usar PRO ahora y mantener el compromiso corto mientras compruebas cómo encaja en tu forma de trabajar.',
          detail: 'Suscripción de 1 mes',
          subdetail: 'El precio aparece dentro de la app tras descargarla',
          ctaLabel: 'Descargar y ver precio',
        },
        {
          name: '6 meses',
          badge: 'Nuevo',
          summary:
            'Muy buena opción si quieres más continuidad con menos renovaciones, pero sin llegar todavía a una suscripción anual.',
          detail: 'Suscripción de 6 meses',
          subdetail: 'El precio aparece dentro de la app tras descargarla',
          ctaLabel: 'Descargar y ver precio',
        },
        {
          name: '1 año',
          badge: 'Más continuidad',
          summary:
            'La mejor opción si ya sabes que My Rents forma parte de tu operativa diaria y quieres la suscripción más larga disponible hoy.',
          detail: 'Suscripción de 1 año',
          subdetail: 'El precio aparece dentro de la app tras descargarla',
          ctaLabel: 'Descargar y ver precio',
        },
      ],
      featuresTitle: 'Qué incluye PRO',
      featuresDescription:
        'Cualquiera de las opciones de abajo activa el mismo conjunto de funciones PRO. Solo cambia la duración.',
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
          'El precio de PRO depende del país y aparece dentro de My Rents. Descarga la app, abre la pantalla de PRO y verás el importe exacto de 1 mes, 6 meses y 1 año para tu región antes de pagar.',
      },
      singleUser: {
        title: 'Un usuario por plan',
        description:
          'Las opciones PRO de esta página están pensadas para una sola cuenta y una sola persona.',
      },
      companies: {
        title: '¿Necesitas cuentas de equipo?',
        description:
          'Si tu negocio necesita varios usuarios, cuentas separadas o una configuración distinta, escríbenos y te ayudaremos a encontrar la mejor opción.',
      },
      marketingEmails: {
        title: 'Emails de marketing',
        description:
          'Cuando creas una cuenta en My Rents, quedas suscrito por defecto a noticias de producto, ofertas y otros emails de marketing de My Rents. Cada email de marketing incluye un enlace para cancelar la suscripción cuando quieras.',
      },
      businessCtaLabel: 'Contactar con nosotros para cuentas deempresa',
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
        eyebrow: 'Para quién es',
        title: 'Para quién es',
        description:
          'My Rents es para quienes ya han superado las hojas de cálculo y carpetas improvisadas, pero no quieren software empresarial ni una empresa de gestión entre medias.',
      },
      members: [
        {
          name: 'Nuevo propietario',
          role: 'Útil cuando quieres crear buenos hábitos desde el primer contrato, en vez de montar un sistema improvisado que luego tendrás que sustituir.',
          image: user1,
        },
        {
          name: 'Propietario con pequeño porfolio',
          role: 'Ideal cuando dos o tres propiedades ya implican perseguir cobros, guardar recibos de reparaciones, recordar vencimientos y ordenar papeles.',
          image: user2,
        },
        {
          name: 'Gestor inmobiliario',
          role: 'Muy útil para el seguimiento diario cuando necesitas ver rápido estados de pago, historial de mantenimiento, contactos y contexto del inmueble.',
          image: user3,
        },
        {
          name: 'Empresa o equipo de gestión',
          role: 'Encaja cuando un negocio pequeño necesita registros consistentes, informes, facturación y una visión más clara entre varias propiedades o porfolios.',
          image: user4,
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
      note: 'El selector de esta web cambia entre español e inglés. La app My Rents sí está disponible en los seis idiomas indicados aquí.',
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
            'Descarga My Rents y abre la zona de mejora a PRO. La app te muestra el precio local exacto antes de confirmar cualquier compra.',
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

const routeNames: AppRouteName[] = [
  'home',
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
