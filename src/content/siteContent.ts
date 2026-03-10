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
          'Please read these terms and conditions carefully before using My Rents operated by Daniel Rodriguez.',
        updatedAt: 'March 9, 2026',
        sections: [
          {
            title: 'Conditions of Use',
            paragraphs: [
              'We provide these services to you subject to the conditions stated in this document. Every time you use the app, use its services, or make a purchase, you accept these conditions. Please read them carefully.',
            ],
          },
          {
            title: 'Privacy Policy',
            paragraphs: [
              'Before you continue using our website, we advise you to read our Privacy Policy regarding our user data collection. It will help you better understand our practices.',
            ],
          },
          {
            title: 'Intellectual Property',
            paragraphs: [
              "You agree that all materials, products, and services provided on our app are the property of Daniel Rodriguez, including copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute Daniel Rodriguez's intellectual property in any way, including electronic or digital formats and trademark registrations.",
              'You grant My Rents a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.',
            ],
          },
          {
            title: 'License to Use the App',
            paragraphs: [
              'You have a non-exclusive, limited, non-transferable, and revocable licence to use the materials available on My Rents. The materials may not be used for any other purpose, and the licence is terminated the moment you stop using the app.',
            ],
          },
          {
            title: 'Communications',
            paragraphs: [
              'All communication with us is electronic. Every time you send us an email or visit our app, you are communicating with us electronically. You consent to receive communications from us electronically.',
              'We will continue to communicate with you by posting notices on our website and by sending emails when required. You agree that all notices, disclosures, agreements, and other communications we provide to you electronically satisfy any legal requirement that such communications be in writing.',
            ],
          },
          {
            title: 'Applicable Law',
            paragraphs: [
              'By visiting this website, you agree that the laws of Spain, without regard to conflict of law principles, govern these terms and any dispute that may arise between Daniel Rodriguez and you, or its business partners and associates.',
            ],
          },
          {
            title: 'Disputes',
            paragraphs: [
              'Any dispute related in any way to your visit to this website, the app, or products you purchase from us shall be resolved in Spain and you consent to the exclusive jurisdiction and venue of such courts.',
            ],
          },
          {
            title: 'Comments, Reviews, and Emails',
            paragraphs: [
              'Visitors may post content if it is not obscene, illegal, defamatory, threatening, infringing on intellectual property rights, invasive of privacy, or otherwise harmful to third parties. Content must be free of software viruses, political campaigning, and commercial solicitation.',
              'We reserve all rights, but not the obligation, to remove and edit such content. When you post your content, you grant Daniel Rodriguez a non-exclusive, royalty-free, and irrevocable right to use, reproduce, and publish such content worldwide in any media.',
            ],
          },
          {
            title: 'User Account',
            paragraphs: [
              'If you are the owner of an account on My Rents, you are solely responsible for maintaining the confidentiality of your private user details, including your username and password. You are responsible for all activities that occur under your account or password.',
              'We reserve all rights to terminate accounts, edit or remove content, and cancel orders at our sole discretion.',
            ],
          },
        ],
      },
      privacy: {
        eyebrow: 'Privacy Policy',
        title: 'Privacy Policy for My Rents',
        intro:
          'Daniel Rodriguez provides My Rents with a free experience and optional PRO purchases. This page explains our policies regarding the collection, use, and disclosure of personal information when you use the service.',
        updatedAt: 'March 9, 2026',
        sections: [
          {
            title: 'Information Collection and Use',
            paragraphs: [
              'The main personal data collected is the email address, name, and profile picture of the user when an account is created. This information is only used to provide authentication and account-related services inside the app.',
              "Users can also save personal information within their rental records, such as other people's emails or phone numbers. This information is stored solely to provide the features requested by the user.",
              'The app may use third-party services that collect information used to identify you. You can review the privacy policies of those third-party services in the app under Options, About Us, and View Licences.',
            ],
          },
          {
            title: 'Cookies',
            paragraphs: [
              'Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. They are sent to your browser from the website that you visit and stored on your device.',
              'This service does not use cookies explicitly. However, the app may use third-party code and libraries that rely on cookies to collect information and improve their services.',
              'You have the option to accept or refuse cookies and to know when a cookie is being sent to your device. If you choose to refuse cookies, you may not be able to use some portions of this service.',
            ],
          },
          {
            title: 'Service Providers',
            paragraphs: [
              'We may employ third-party companies and individuals for the following reasons: to facilitate our service, to provide the service on our behalf, to perform service-related tasks, or to help us analyse how the service is used.',
              'These third parties may have access to your personal information only to perform the tasks assigned to them on our behalf and are obligated not to disclose or use it for any other purpose.',
            ],
          },
          {
            title: 'Links to Other Sites',
            paragraphs: [
              'This service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Those external sites are not operated by us, so we strongly advise you to review their privacy policies.',
              'We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.',
            ],
          },
          {
            title: 'Changes to This Privacy Policy',
            paragraphs: [
              'We may update this Privacy Policy from time to time. You are advised to review this page periodically for any changes.',
              'We will notify you of changes by posting the new Privacy Policy on this page. These changes become effective immediately after they are posted.',
            ],
          },
          {
            title: 'Contact Us',
            paragraphs: [
              'If you have any questions or suggestions about this Privacy Policy, do not hesitate to contact us at info@myrents-app.com.',
            ],
          },
        ],
      },
      eula: {
        eyebrow: 'End-User License Agreement',
        title: 'EULA for My Rents',
        intro:
          'This EULA governs your acquisition and use of My Rents software directly from Daniel Rodriguez or indirectly through an authorised reseller or distributor. Please read this agreement carefully before completing the installation process and using the software.',
        updatedAt: 'March 9, 2026',
        sections: [
          {
            title: 'License Grant',
            paragraphs: [
              'Daniel Rodriguez grants you a personal, non-transferable, non-exclusive licence to use My Rents software on your devices in accordance with this EULA. You are responsible for ensuring that your device meets the minimum requirements of the software.',
              'You are not permitted to edit, alter, modify, adapt, translate, decompile, disassemble, reverse engineer, reproduce, copy, distribute, resell, or otherwise use the software for any commercial purpose beyond the scope allowed in this agreement.',
            ],
          },
          {
            title: 'Intellectual Property and Ownership',
            paragraphs: [
              'Daniel Rodriguez shall at all times retain ownership of the software as originally downloaded by you and of all subsequent downloads of the software by you. The software, including all copyright and other intellectual property rights in it, remains the property of Daniel Rodriguez.',
              'Daniel Rodriguez reserves the right to grant licences to use the software to third parties.',
            ],
          },
          {
            title: 'Termination',
            paragraphs: [
              'This EULA is effective from the date you first use the software and continues until terminated. You may terminate it at any time upon written notice to Daniel Rodriguez.',
              'It will also terminate immediately if you fail to comply with any term of this EULA. Upon termination, the licences granted under this EULA end immediately and you agree to stop all access and use of the software.',
            ],
          },
          {
            title: 'Governing Law',
            paragraphs: [
              'This EULA, and any dispute arising out of or in connection with it, shall be governed by and construed in accordance with the laws of Spain.',
            ],
          },
        ],
      },
      dataDeletion: {
        eyebrow: 'Data Deletion',
        title: 'Data Deletion for My Rents',
        intro:
          'To remove your account completely, together with all data stored in our databases, you can use the Delete my account option inside the app settings.',
        updatedAt: 'March 9, 2026',
        sections: [
          {
            title: 'How to delete your data',
            paragraphs: [
              'To remove your account completely and erase all data stored in our databases, open the app, go to the settings or options area, and choose Delete my account.',
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
          'Lee estos términos y condiciones detenidamente antes de usar My Rents, operado por Daniel Rodriguez.',
        updatedAt: '9 de marzo de 2026',
        sections: [
          {
            title: 'Condiciones de uso',
            paragraphs: [
              'Te prestamos estos servicios sujetos a las condiciones indicadas en este documento. Cada vez que utilizas la app, sus servicios o realizas una compra, aceptas estas condiciones. Te pedimos que las leas con atención.',
            ],
          },
          {
            title: 'Política de privacidad',
            paragraphs: [
              'Antes de seguir utilizando nuestro sitio web, te recomendamos leer nuestra Política de privacidad sobre la recopilación de datos de los usuarios. Te ayudará a entender mejor nuestras prácticas.',
            ],
          },
          {
            title: 'Propiedad intelectual',
            paragraphs: [
              'Aceptas que todos los materiales, productos y servicios proporcionados en nuestra app son propiedad de Daniel Rodriguez, incluidos los derechos de autor, secretos comerciales, marcas, patentes y demás derechos de propiedad intelectual. También aceptas que no reproducirás ni redistribuirás la propiedad intelectual de Daniel Rodriguez de ninguna forma, ya sea electrónica, digital o mediante registros de nuevas marcas.',
              'Concedes a My Rents una licencia gratuita y no exclusiva para mostrar, usar, copiar, transmitir y difundir el contenido que subas y publiques. Si surge algún problema relacionado con reclamaciones de propiedad intelectual, debes contactar con la empresa para intentar llegar a un acuerdo.',
            ],
          },
          {
            title: 'Licencia de uso de la app',
            paragraphs: [
              'Dispones de una licencia no exclusiva, limitada, intransferible y revocable para utilizar los materiales disponibles en My Rents. Los materiales no pueden usarse para ningún otro fin y la licencia finaliza en el momento en que dejas de utilizar la app.',
            ],
          },
          {
            title: 'Comunicaciones',
            paragraphs: [
              'Toda la comunicación con nosotros es electrónica. Cada vez que nos envías un correo electrónico o visitas nuestra app, te comunicas con nosotros por medios electrónicos. Aceptas recibir nuestras comunicaciones por esta vía.',
              'Seguiremos comunicándonos contigo publicando avisos en nuestro sitio web y enviando correos cuando sea necesario. Aceptas que todos los avisos, divulgaciones, acuerdos y demás comunicaciones que te proporcionemos electrónicamente cumplen con cualquier requisito legal de que dichas comunicaciones se realicen por escrito.',
            ],
          },
          {
            title: 'Ley aplicable',
            paragraphs: [
              'Al visitar este sitio web aceptas que las leyes de España, sin tener en cuenta los principios sobre conflictos de leyes, regirán estos términos y cualquier disputa que pueda surgir entre Daniel Rodriguez y tú, así como con sus socios o colaboradores.',
            ],
          },
          {
            title: 'Disputas',
            paragraphs: [
              'Cualquier disputa relacionada de alguna manera con tu visita a este sitio web, con la app o con productos adquiridos a través de nosotros se resolverá en España y aceptas la jurisdicción y competencia exclusivas de sus tribunales.',
            ],
          },
          {
            title: 'Comentarios, reseñas y correos electrónicos',
            paragraphs: [
              'Los visitantes pueden publicar contenido siempre que no sea obsceno, ilegal, difamatorio, amenazante, que infrinja derechos de propiedad intelectual, que invada la privacidad o que resulte perjudicial para terceros. El contenido debe estar libre de virus, campañas políticas y solicitudes comerciales.',
              'Nos reservamos todos los derechos, aunque no la obligación, de retirar y editar dicho contenido. Cuando publicas contenido, concedes a Daniel Rodriguez un derecho no exclusivo, gratuito e irrevocable para usar, reproducir y publicar ese contenido en cualquier medio y en cualquier parte del mundo.',
            ],
          },
          {
            title: 'Cuenta de usuario',
            paragraphs: [
              'Si eres titular de una cuenta en My Rents, eres el único responsable de mantener la confidencialidad de tus datos privados, incluidos tu nombre de usuario y tu contraseña. También eres responsable de todas las actividades que se realicen con tu cuenta o contraseña.',
              'Nos reservamos todos los derechos para cancelar cuentas, editar o eliminar contenido y cancelar pedidos a nuestra entera discreción.',
            ],
          },
        ],
      },
      privacy: {
        eyebrow: 'Política de privacidad',
        title: 'Política de privacidad de My Rents',
        intro:
          'Daniel Rodriguez ofrece My Rents con una experiencia gratuita y compras opcionales de PRO. Esta página explica nuestras políticas sobre la recopilación, uso y divulgación de información personal cuando utilizas el servicio.',
        updatedAt: '9 de marzo de 2026',
        sections: [
          {
            title: 'Recogida y uso de la información',
            paragraphs: [
              'Los principales datos personales recopilados son el correo electrónico, el nombre y la imagen de perfil del usuario cuando crea una cuenta. Esta información se utiliza únicamente para prestar servicios de autenticación y gestión de cuenta dentro de la app.',
              'Los usuarios también pueden guardar información personal dentro de sus registros de alquiler, como correos electrónicos o números de teléfono de otras personas. Esa información se almacena únicamente para proporcionar las funciones que el propio usuario solicita.',
              'La app puede utilizar servicios de terceros que recopilan información que podría identificarte. Puedes consultar sus políticas de privacidad dentro de la app, en Opciones, Acerca de y Ver licencias.',
            ],
          },
          {
            title: 'Cookies',
            paragraphs: [
              'Las cookies son archivos con una pequeña cantidad de datos que se utilizan habitualmente como identificadores anónimos únicos. Se envían a tu navegador desde el sitio web que visitas y se almacenan en tu dispositivo.',
              'Este servicio no utiliza cookies de forma explícita. No obstante, la app puede usar código y librerías de terceros que sí empleen cookies para recopilar información y mejorar sus servicios.',
              'Tienes la opción de aceptar o rechazar estas cookies y de saber cuándo se está enviando una cookie a tu dispositivo. Si decides rechazarlas, es posible que no puedas utilizar algunas partes del servicio.',
            ],
          },
          {
            title: 'Proveedores de servicios',
            paragraphs: [
              'Podemos emplear empresas o personas de terceros por los siguientes motivos: para facilitar nuestro servicio, prestarlo en nuestro nombre, realizar tareas relacionadas con el servicio o ayudarnos a analizar cómo se usa.',
              'Estos terceros pueden tener acceso a tu información personal únicamente para realizar las tareas asignadas en nuestro nombre y están obligados a no divulgarla ni utilizarla para ningún otro fin.',
            ],
          },
          {
            title: 'Enlaces a otros sitios',
            paragraphs: [
              'Este servicio puede contener enlaces a otros sitios. Si haces clic en un enlace de terceros, serás redirigido a ese sitio. Esos sitios externos no están gestionados por nosotros, por lo que te recomendamos revisar sus políticas de privacidad.',
              'No tenemos control sobre el contenido, las políticas de privacidad ni las prácticas de sitios o servicios de terceros y no asumimos responsabilidad alguna por ellos.',
            ],
          },
          {
            title: 'Cambios en esta política de privacidad',
            paragraphs: [
              'Podemos actualizar esta Política de privacidad ocasionalmente. Te recomendamos revisar esta página periódicamente para conocer cualquier cambio.',
              'Te avisaremos publicando la nueva Política de privacidad en esta página. Los cambios entran en vigor inmediatamente después de su publicación.',
            ],
          },
          {
            title: 'Contacto',
            paragraphs: [
              'Si tienes preguntas o sugerencias sobre esta Política de privacidad, puedes escribirnos a info@myrents-app.com.',
            ],
          },
        ],
      },
      eula: {
        eyebrow: 'Contrato de licencia de usuario final',
        title: 'EULA de My Rents',
        intro:
          'Este EULA regula la adquisición y el uso del software My Rents directamente desde Daniel Rodriguez o indirectamente a través de un distribuidor o revendedor autorizado. Lee este acuerdo detenidamente antes de completar la instalación y usar el software.',
        updatedAt: '9 de marzo de 2026',
        sections: [
          {
            title: 'Concesión de licencia',
            paragraphs: [
              'Daniel Rodriguez te concede una licencia personal, intransferible y no exclusiva para usar el software My Rents en tus dispositivos conforme a este EULA. Eres responsable de asegurarte de que tu dispositivo cumple con los requisitos mínimos del software.',
              'No está permitido editar, alterar, modificar, adaptar, traducir, descompilar, desmontar, aplicar ingeniería inversa, reproducir, copiar, distribuir o revender el software para un propósito comercial distinto del permitido en este acuerdo.',
            ],
          },
          {
            title: 'Propiedad intelectual y titularidad',
            paragraphs: [
              'Daniel Rodriguez conservará en todo momento la titularidad del software tal y como fue descargado originalmente por ti y de todas las descargas posteriores realizadas por ti. El software, incluidos todos sus derechos de autor y demás derechos de propiedad intelectual, sigue siendo propiedad de Daniel Rodriguez.',
              'Daniel Rodriguez se reserva el derecho a conceder licencias de uso del software a terceros.',
            ],
          },
          {
            title: 'Terminación',
            paragraphs: [
              'Este EULA es efectivo desde la fecha en que utilizas por primera vez el software y continuará vigente hasta su terminación. Puedes terminarlo en cualquier momento mediante notificación escrita a Daniel Rodriguez.',
              'También finalizará de inmediato si incumples cualquiera de sus términos. Tras la terminación, las licencias concedidas en este EULA finalizarán inmediatamente y aceptas dejar de acceder y utilizar el software.',
            ],
          },
          {
            title: 'Legislación aplicable',
            paragraphs: [
              'Este EULA y cualquier disputa derivada de él o relacionada con él se regirán e interpretarán de acuerdo con las leyes de España.',
            ],
          },
        ],
      },
      dataDeletion: {
        eyebrow: 'Eliminación de datos',
        title: 'Eliminación de datos de My Rents',
        intro:
          'Para eliminar por completo tu cuenta y todos los datos guardados en nuestras bases de datos, puedes usar la opción Eliminar mi cuenta dentro de los ajustes de la app.',
        updatedAt: '9 de marzo de 2026',
        sections: [
          {
            title: 'Cómo eliminar tus datos',
            paragraphs: [
              'Para borrar por completo tu cuenta y todos los datos almacenados en nuestras bases de datos, abre la app, entra en la zona de ajustes u opciones y elige Eliminar mi cuenta.',
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
