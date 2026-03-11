import screenshotEn1 from '@/assets/features/main_EN.png'
import screenshotEs1 from '@/assets/features/main_ES.png'
import user1 from '@/assets/users/landlord.jpg'
import user2 from '@/assets/users/portfolio_owner.jpg'
import user3 from '@/assets/users/property_manager.jpg'
import user4 from '@/assets/users/company.jpg'
import calendarImage from '@/assets/features/calendar_EN.png'
import contactsListImage from '@/assets/features/contacts_list_EN.png'

export type SiteLocale = 'en' | 'es'

export type LegalPageKey = 'terms' | 'privacy' | 'eula' | 'dataDeletion'

export type AppRouteName = 'home' | LegalPageKey

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
        home: 'My Rents | Property management',
        terms: 'Terms of Service | My Rents',
        privacy: 'Privacy Policy | My Rents',
        eula: 'EULA | My Rents',
        dataDeletion: 'Data Deletion | My Rents',
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
      { label: 'Features', hash: '#features' },
      { label: 'How to start', hash: '#how-to-start' },
      { label: 'PRO', hash: '#pricing' },
      { label: "Who it's for", hash: '#who-its-for' },
      { label: 'Forum', hash: '#forum' },
      { label: 'FAQ', hash: '#faq' },
    ],
    hero: {
      rating: 'Rated 4.8/5 on Google Play',
      title: 'Manage properties, leases, expenses, reminders, and documents in one place',
      copy: 'My Rents helps landlords and property managers keep portfolios, due dates, invoices, contacts, reports, photos, and paperwork together in a single app.',
      playStoreCtaLabel: 'Download on Google Play',
      contactCtaLabel: 'Contact us',
      snapshot: screenshotEn1,
      snapshotAlt: 'English screenshot of the My Rents dashboard',
      partnersLabel: 'Built for',
      partners: [
        'Solo landlords',
        'Small portfolios',
        'Multi-unit owners',
        'Property managers',
        'Growing investors',
      ],
    },
    comparison: {
      intro: {
        eyebrow: 'Why My Rents',
        title: 'A rental workflow built around real property admin',
        description:
          'Instead of splitting records between spreadsheets, chats, folders, and photos, My Rents keeps the operational picture connected.',
      },
      columns: [
        {
          label: 'Without a central workflow',
          tone: 'muted',
          items: [
            {
              badge: 'SS',
              title: 'Scattered spreadsheets',
              description:
                'Property details, rent tracking, expenses, and tenant notes live in different tools, so the full picture is rarely visible at once.',
            },
            {
              badge: 'MR',
              title: 'Missed reminders',
              description:
                'Renewals, inspections, maintenance follow-ups, and payment chases depend on memory or separate calendar entries.',
            },
            {
              badge: 'FR',
              title: 'Fragmented records',
              description:
                'Bills, contracts, photos, and service contacts are stored in too many places to review quickly when something goes wrong.',
            },
          ],
        },
        {
          label: 'With My Rents',
          tone: 'brand',
          items: [
            {
              badge: 'PO',
              title: 'Portfolio overview',
              description:
                'Properties, units, and portfolios stay organised in one app with the details you need close at hand.',
            },
            {
              badge: 'RR',
              title: 'Rent and reminder control',
              description:
                'Track due dates, invoices, payment status, and follow-up actions without rebuilding the workflow every month.',
            },
            {
              badge: 'DR',
              title: 'Documents and reporting',
              description:
                'Photos, notes, contracts, expenses, and CSV-ready reports stay connected to the properties they belong to.',
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
        title: 'Choose how you want to unlock PRO',
        description:
          'There is only one PRO product. The 1-month, 6-month, and 1-year plans unlock the same tools, and the exact amount is shown inside the app based on your country.',
      },
      message: {
        title: 'One PRO, three billing options',
        description:
          'Choose the subscription length that suits you. After downloading My Rents, the app shows the exact local price for 1 month, 6 months, and 1 year before you confirm anything.',
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
        title: 'Download the app to see your local PRO price',
        description:
          'PRO pricing depends on country and appears inside My Rents. Download the app, open the PRO screen, and you will see the exact 1-month, 6-month, and 1-year amount for your region before you pay.',
      },
      singleUser: {
        title: 'Each PRO purchase is for one person',
        description: 'The PRO options on this page are single-user purchases for one account.',
      },
      companies: {
        title: 'Need several accounts for a company or team?',
        description:
          'If your business needs multiple users, separate accounts, or a different setup, contact us and we will help you choose the best option.',
      },
      businessCtaLabel: 'Contact us about business accounts',
    },
    process: {
      intro: {
        eyebrow: 'How to start',
        title: 'How to start',
        description:
          'Set up the app with a real rental workflow from day one, then keep building from the same structure.',
      },
      steps: [
        {
          index: '01',
          title: 'Download the app and start your 7-day trial',
          description:
            'Test My Rents with your own workflow and confirm that the app fits how you manage rentals before you subscribe.',
        },
        {
          index: '02',
          title: 'Create portfolios and start adding properties',
          description:
            'Build the structure first, then add properties inside each portfolio so the app already matches how you want to organise the business.',
        },
        {
          index: '03',
          title: 'Create leases and upload the main documents',
          description:
            'Add leases so each property starts generating the right rent due events, then keep contracts and key files attached to the same record.',
        },
        {
          index: '04',
          title: 'Start recording expenses',
          description:
            'Track repairs, utilities, purchases, and one-off costs so every property keeps its operating history connected.',
        },
        {
          index: '05',
          title: 'Generate billing and CSV exports',
          description:
            'Create invoices, review what is due, and export CSV data whenever you need a clearer external view of the portfolio.',
        },
      ],
    },
    impact: {
      intro: {
        eyebrow: 'My Rents',
        title: 'Features',
        description:
          'These are some of the features that My Rents provides for landlords, managers, and growing rental businesses.',
      },
      items: [
        {
          title: 'Portfolios',
          description:
            'Group rentals by city, strategy, or ownership structure so the big picture stays readable as the portfolio grows.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents portfolio area',
        },
        {
          title: 'Properties',
          description:
            'Store each property with its own details, units, and context so the app mirrors how you actually organise assets.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents properties area',
        },
        {
          title: 'Leases and rent due',
          description:
            'Create leases, review payment status, generate invoices, and trigger follow-up actions from the same workflow.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents lease and rent due workflow',
        },
        {
          title: 'Expenses and reports',
          description:
            'Track repairs, utilities, purchases, debt, profitability, and CSV exports without rebuilding your numbers elsewhere.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents expenses and reports area',
        },
        {
          title: 'Documents and photos',
          description:
            'Keep contracts, inspection notes, room evidence, and other files attached to the right property when you need proof fast.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents documents and photos area',
        },
        {
          title: 'Taxes, maps, and contacts',
          description:
            'Adjust local tax settings, jump to property directions, and keep key suppliers or service contacts close at hand.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'English screenshot of the My Rents tax, map, and contact tools',
        },
        {
          title: 'Events',
          description:
            'Track repairs, inspections, reminders, and tasks so nothing slips through the cracks. Stay on top of every event in your rental workflow.',
          image: calendarImage,
          imageAlt: 'Calendar and events screenshot',
        },
        {
          title: 'Contact List',
          description:
            'Keep key contacts—tenants, suppliers, and advisors—organized and accessible. Find the right person fast when you need help or follow-up.',
          image: contactsListImage,
          imageAlt: 'Contact list screenshot',
        },
      ],
    },
    team: {
      intro: {
        eyebrow: "Who it's for",
        title: 'Useful for different types of owners and managers',
        description:
          'My Rents is designed for owners, managers, and companies that need clearer rental admin, whether they manage one property or a broader portfolio.',
      },
      members: [
        {
          name: 'New landlord',
          role: 'Useful even with a single property, especially when you want leases, due dates, expenses, contacts, and documents to stay organised from day one.',
          image: user1,
        },
        {
          name: 'Small portfolio owner',
          role: 'Helps when you manage several units and need rent tracking, invoice generation, expenses, reminders, and documents connected without jumping between tools.',
          image: user2,
        },
        {
          name: 'Property manager',
          role: 'Built for day-to-day follow-up, with quick access to lease records, tenant communication, maintenance notes, supplier contacts, and property history.',
          image: user3,
        },
        {
          name: 'Company or management team',
          role: 'Useful when a business needs invoice generation, expense control, reporting, CSV exports, and consistent records across multiple properties or portfolios.',
          image: user4,
        },
      ],
    },
    appLanguages: {
      intro: {
        eyebrow: 'Language support',
        title: 'Multilingual support',
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
        title: 'Answers to the questions owners ask before choosing PRO',
        description: 'Straight answers about pricing, daily workflows, reporting, and support.',
      },
      items: [
        {
          question: 'How does My Rents help me manage multiple properties?',
          answer:
            'You can add each property with its own details and group them into portfolios, which makes it easier to review different parts of your rental business without losing structure.',
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
        eyebrow: 'Questions before you subscribe?',
        title: 'Ask about PRO, local pricing, or business use',
        description:
          'Tell us what you manage and what you want to improve, and we will have better context when we reply.',
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
      summary:
        'Rental management for owners who want leases, expenses, reminders, documents, and reports in one place.',
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
        updatedAt: 'March 11, 2026',
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
        home: 'My Rents | Gestion de alquileres',
        terms: 'Términos del servicio | My Rents',
        privacy: 'Política de privacidad | My Rents',
        eula: 'EULA | My Rents',
        dataDeletion: 'Eliminación de datos | My Rents',
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
      { label: 'Funciones', hash: '#features' },
      { label: 'Cómo empezar', hash: '#how-to-start' },
      { label: 'PRO', hash: '#pricing' },
      { label: 'Para quién es', hash: '#who-its-for' },
      { label: 'Foro', hash: '#forum' },
      { label: 'FAQ', hash: '#faq' },
    ],
    hero: {
      rating: 'Valorada con 4,8/5 en Google Play',
      title: 'Gestiona propiedades, contratos, gastos, recordatorios y documentos en un solo lugar',
      copy: 'My Rents ayuda a propietarios y gestores a tener porfolios, vencimientos, facturas, contactos, informes, fotos y documentación dentro de una sola app.',
      playStoreCtaLabel: 'Descargar en Google Play',
      contactCtaLabel: 'Contactar con nosotros',
      snapshot: screenshotEs1,
      snapshotAlt: 'Captura en español del panel de My Rents',
      partnersLabel: 'Pensada para',
      partners: [
        'Propietarios individuales',
        'Porfolios pequeños',
        'Edificios con varias unidades',
        'Gestores inmobiliarios',
        'Inversores en crecimiento',
      ],
    },
    comparison: {
      intro: {
        eyebrow: 'Por qué My Rents',
        title: 'Un flujo de gestión de alquileres pensado para la operativa real',
        description:
          'En vez de repartir la información entre hojas de cálculo, chats, carpetas y fotos, My Rents mantiene todo conectado.',
      },
      columns: [
        {
          label: 'Sin un flujo centralizado',
          tone: 'muted',
          items: [
            {
              badge: 'HC',
              title: 'Hojas dispersas',
              description:
                'Los datos de propiedades, cobros, gastos y notas de inquilinos viven en herramientas distintas, así que rara vez ves el conjunto de un vistazo.',
            },
            {
              badge: 'OL',
              title: 'Olvidos y avisos sueltos',
              description:
                'Renovaciones, inspecciones, mantenimientos y seguimientos de pago dependen de la memoria o de calendarios separados.',
            },
            {
              badge: 'RG',
              title: 'Registros fragmentados',
              description:
                'Facturas, contratos, fotos y contactos de servicio están repartidos en demasiados sitios para revisarlos con rapidez cuando hace falta.',
            },
          ],
        },
        {
          label: 'Con My Rents',
          tone: 'brand',
          items: [
            {
              badge: 'VP',
              title: 'Visión del porfolio',
              description:
                'Propiedades, unidades y porfolios quedan organizados en una sola app con la información importante siempre a mano.',
            },
            {
              badge: 'CR',
              title: 'Control de cobros y recordatorios',
              description:
                'Sigue vencimientos, facturas, estado de pago y acciones de seguimiento sin reconstruir el proceso cada mes.',
            },
            {
              badge: 'DI',
              title: 'Documentos e informes',
              description:
                'Fotos, notas, contratos, gastos e informes preparados para exportar permanecen unidos a la propiedad correspondiente.',
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
        title: 'Elige cómo quieres activar PRO',
        description:
          'Solo existe un PRO. Los planes de 1 mes, 6 meses y 1 año desbloquean las mismas funciones, y el importe exacto se muestra dentro de la app según tu país.',
      },
      message: {
        title: 'Un solo PRO, tres formas de pago',
        description:
          'Elige la duración de suscripción que mejor te encaje. Después de descargar My Rents, la app te muestra el precio local exacto para 1 mes, 6 meses y 1 año antes de confirmar nada.',
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
        title: 'Descarga la app para ver tu precio local de PRO',
        description:
          'El precio de PRO depende del país y aparece dentro de My Rents. Descarga la app, abre la pantalla de PRO y verás el importe exacto de 1 mes, 6 meses y 1 año para tu región antes de pagar.',
      },
      singleUser: {
        title: 'Cada compra PRO es para un solo usuario',
        description:
          'Las opciones PRO de esta página están pensadas para una sola cuenta y una sola persona.',
      },
      companies: {
        title: '¿Tu empresa necesita varias cuentas?',
        description:
          'Si tu negocio necesita varios usuarios, cuentas separadas o una configuración distinta, escríbenos y te ayudaremos a encontrar la mejor opción.',
      },
      businessCtaLabel: 'Contactar con nosotros para cuentas deempresa',
    },
    process: {
      intro: {
        eyebrow: 'Cómo empezar',
        title: 'Cómo empezar',
        description:
          'Empieza con una operativa real desde el primer día y sigue construyendo sobre la misma estructura dentro de la app.',
      },
      steps: [
        {
          index: '01',
          title: 'Descarga la app y empieza la prueba de 7 días',
          description:
            'Prueba My Rents con tu operativa real y confirma si la app encaja antes de suscribirte.',
        },
        {
          index: '02',
          title: 'Crea porfolios y empieza a añadir propiedades',
          description:
            'Monta primero la estructura que vas a usar y empieza a añadir inmuebles dentro de cada porfolio para organizarte desde el inicio.',
        },
        {
          index: '03',
          title: 'Crea contratos y sube los documentos principales',
          description:
            'Añade contratos para empezar a generar los eventos de cobro y mantén contratos u otros archivos clave unidos a cada propiedad.',
        },
        {
          index: '04',
          title: 'Empieza a registrar gastos',
          description:
            'Anota reparaciones, suministros, compras y costes puntuales para que cada inmueble conserve su historial operativo.',
        },
        {
          index: '05',
          title: 'Genera facturación y exportaciones CSV',
          description:
            'Crea facturas, revisa lo que está pendiente y exporta datos en CSV cuando necesites una vista externa más clara.',
        },
      ],
    },
    impact: {
      intro: {
        eyebrow: 'My Rents',
        title: 'Funciones',
        description:
          'Estas son algunas de las funciones que My Rents ofrece para propietarios, gestores y negocios de alquiler en crecimiento.',
      },
      items: [
        {
          title: 'Porfolios',
          description:
            'Agrupa alquileres por ciudad, estrategia o estructura de propiedad para que la visión global siga siendo clara a medida que crece el porfolio.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del área de porfolios de My Rents',
        },
        {
          title: 'Propiedades',
          description:
            'Guarda cada inmueble con sus propios datos, unidades y contexto para que la app refleje cómo organizas realmente los activos.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del área de propiedades de My Rents',
        },
        {
          title: 'Contratos y cobros',
          description:
            'Crea contratos, revisa estados de pago, genera facturas y activa acciones de seguimiento dentro del mismo flujo.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del flujo de contratos y cobros de My Rents',
        },
        {
          title: 'Gastos e informes',
          description:
            'Controla reparaciones, suministros, compras, deuda, rentabilidad y exportaciones CSV sin rehacer los números en otras herramientas.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del área de gastos e informes de My Rents',
        },
        {
          title: 'Documentos y fotos',
          description:
            'Mantén contratos, notas de inspección, evidencias de habitaciones y otros archivos unidos a la propiedad correcta cuando necesites revisar algo rápido.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt: 'Captura en español del área de documentos y fotos de My Rents',
        },
        {
          title: 'Impuestos, mapas y contactos',
          description:
            'Ajusta fiscalidad local, abre direcciones de propiedades y conserva cerca proveedores o contactos de servicio importantes.',
          image: FEATURE_SPOTLIGHT_IMAGE,
          imageAlt:
            'Captura en español de las herramientas fiscales, mapas y contactos de My Rents',
        },
      ],
    },
    team: {
      intro: {
        eyebrow: 'Para quién es',
        title: 'Útil para distintos tipos de propietarios y gestores',
        description:
          'My Rents está pensada para propietarios, gestores y empresas que necesitan más claridad administrativa, tanto si gestionan una sola propiedad como si trabajan con un porfolio amplio.',
      },
      members: [
        {
          name: 'Nuevo propietario',
          role: 'Útil incluso si empiezas con una sola propiedad y quieres tener contratos, vencimientos, gastos, contactos y documentos bien organizados desde el principio.',
          image: user1,
        },
        {
          name: 'Propietario con pequeño porfolio',
          role: 'Ayuda cuando ya gestionas varias unidades y necesitas control de cobros, generación de facturas, gastos, recordatorios y documentación sin saltar entre herramientas.',
          image: user2,
        },
        {
          name: 'Gestor inmobiliario',
          role: 'Pensada para el seguimiento diario, con acceso rápido a contratos, comunicación, incidencias, proveedores y el historial operativo de cada inmueble.',
          image: user3,
        },
        {
          name: 'Empresa o equipo de gestión',
          role: 'Útil cuando el negocio necesita generación de facturas, control de gastos, informes, exportaciones CSV y registros consistentes entre varias propiedades o porfolios.',
          image: user4,
        },
      ],
    },
    appLanguages: {
      intro: {
        eyebrow: 'Idiomas',
        title: 'Soporte para 6 idiomas',
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
        title: 'Respuestas a las preguntas que suelen aparecer antes de elegir PRO',
        description: 'Respuestas claras sobre precios, operativa diaria, informes y soporte.',
      },
      items: [
        {
          question: '¿Cómo me ayuda My Rents a gestionar varias propiedades?',
          answer:
            'Puedes añadir cada propiedad con sus propios datos y agruparlas en porfolios, lo que facilita revisar distintas partes de tu negocio sin perder estructura.',
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
        eyebrow: '¿Dudas antes de suscribirte?',
        title: 'Pregunta por PRO, el precio en tu país o el uso en empresa',
        description:
          'Cuéntanos qué gestionas y qué te gustaría mejorar para que podamos responderte con mejor contexto.',
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
        'Gestión de alquileres para propietarios que quieren contratos, gastos, recordatorios, documentos e informes en un mismo sitio.',
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
        updatedAt: '11 de marzo de 2026',
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

const routeNames: AppRouteName[] = ['home', 'terms', 'privacy', 'eula', 'dataDeletion']

export const isAppRouteName = (value: unknown): value is AppRouteName =>
  typeof value === 'string' && routeNames.includes(value as AppRouteName)

export const getRouteTitle = (locale: SiteLocale, routeName: unknown): string => {
  if (isAppRouteName(routeName)) {
    return siteContentByLocale[locale].meta.routeTitles[routeName]
  }

  return siteContentByLocale[locale].meta.routeTitles.home
}
