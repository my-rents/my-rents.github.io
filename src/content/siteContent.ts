export interface NavItem {
    label: string
    hash: string
}

export interface IconCard {
    badge: string
    title: string
    description: string
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
    summary: string
    price: string
    period: string
    ctaLabel: string
    featured?: boolean
    benefits: string[]
}

export interface ProcessStep {
    index: string
    title: string
    description: string
}

export interface StatItem {
    value: string
    label: string
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

export const primaryNav: NavItem[] = [
    { label: 'Services', hash: '#services' },
    { label: 'Features', hash: '#features' },
    { label: 'Pricing', hash: '#pricing' },
    { label: 'How it works', hash: '#how-it-works' },
    { label: 'Team', hash: '#team' },
]

export const partnerLogos = ['Northwind', 'ScaleOps', 'Vertex', 'Acumen', 'BluePeak']

export const comparisonColumns = [
    {
        label: 'Other Firms',
        tone: 'muted',
        items: [
            {
                badge: 'GS',
                title: 'Generic Strategies',
                description:
                    'One-size-fits-all roadmaps that miss the nuance of your market, your team, and your operating rhythm.',
            },
            {
                badge: 'LG',
                title: 'Limited Guidance',
                description:
                    'Clients are handed documents instead of practical support, leaving execution risk squarely on their side.',
            },
            {
                badge: 'HF',
                title: 'Hidden Fees',
                description:
                    'Scope creep turns into surprise invoices that dilute trust and make planning harder than it should be.',
            },
        ] satisfies IconCard[],
    },
    {
        label: 'With Stratex',
        tone: 'brand',
        items: [
            {
                badge: 'TC',
                title: 'Tailored Consulting',
                description:
                    'Every recommendation is tuned to your goals, customer reality, and the pace your team can sustain.',
            },
            {
                badge: 'DS',
                title: 'Dedicated Support',
                description:
                    'Hands-on guidance stays available from kickoff through rollout, iteration, and long-term refinement.',
            },
            {
                badge: 'TP',
                title: 'Transparent Pricing',
                description:
                    'Clear deliverables and visible costs mean your team can budget confidently without defensive guesswork.',
            },
        ] satisfies IconCard[],
    },
] as const

export const serviceItems: ServiceItem[] = [
    {
        eyebrow: 'Services',
        title: 'Market research & analysis',
        description:
            'Make informed decisions with crisp competitor mapping, customer signals, and validated opportunities.',
        image: 'https://placehold.co/960x720/163c38/f5ede0?text=Market+Research',
    },
    {
        eyebrow: 'Services',
        title: 'Digital transformation',
        description:
            'Modernize operations with practical systems, better tooling, and a roadmap your team can actually adopt.',
        image: 'https://placehold.co/960x720/234f49/f5ede0?text=Digital+Transformation',
    },
    {
        eyebrow: 'Services',
        title: 'Business consulting',
        description:
            'Clarify priorities, remove friction, and shape strategy into measurable initiatives with a fast feedback loop.',
        image: 'https://placehold.co/960x720/3c655f/f5ede0?text=Business+Consulting',
    },
    {
        eyebrow: 'Services',
        title: 'Growth planning',
        description:
            'Translate ambition into focused milestones, better retention systems, and stronger revenue foundations.',
        image: 'https://placehold.co/960x720/4c726d/f5ede0?text=Growth+Planning',
    },
]

export const testimonial = {
    quote:
        'Stratex revolutionized our customer understanding, which helped us tighten retention, increase conversion quality, and move with far more confidence.',
    author: 'Muzamal Hussain',
    statA: 'High conversion',
    statB: '2x sales',
    avatars: ['A', 'B', 'C', 'D', 'E'],
}

export const benefitItems: BenefitItem[] = [
    {
        title: 'Unlimited consultations',
        description:
            'Book as many working sessions as your current initiative needs without losing momentum.',
    },
    {
        title: 'Tailored solutions',
        description:
            'Get strategic recommendations designed around your market, structure, and delivery model.',
    },
    {
        title: 'Expert insights',
        description:
            'Leverage experienced operators who can separate signal from noise quickly and clearly.',
    },
    {
        title: 'Data strategies',
        description:
            'Move faster with research-backed frameworks and metrics your team can act on immediately.',
    },
    {
        title: 'Ongoing support',
        description:
            'Stay ahead through implementation reviews, recalibration, and measured iteration over time.',
    },
    {
        title: 'Seamless execution',
        description:
            'From planning to rollout, the process stays coherent so your team is not carrying the whole load alone.',
    },
]

export const pricingPlans: PricingPlan[] = [
    {
        name: 'Standard',
        summary:
            'Perfect for small teams looking to streamline consulting processes and sharpen focus.',
        price: '$99',
        period: '/Month',
        ctaLabel: 'Request Consultation',
        benefits: [
            'Personalized strategy sessions',
            'Essential business analytics',
            'Core reporting tools',
            'Up to 5 team members',
            'Dedicated email support',
            'Custom workflow insights',
        ],
    },
    {
        name: 'Premium',
        summary:
            'Designed for growing consulting firms needing more visibility, support, and execution depth.',
        price: '$299',
        period: '/Month',
        ctaLabel: 'Get Started',
        featured: true,
        benefits: [
            'Unlimited strategy consultations',
            'Advanced business analytics',
            'Comprehensive reporting suite',
            'Up to 10 team members',
            'Priority email and chat support',
            'Quarterly implementation reviews',
        ],
    },
]

export const processSteps: ProcessStep[] = [
    {
        index: '01',
        title: 'Simple Booking',
        description:
            'Effortlessly schedule a consultation to align on your business needs, constraints, and immediate growth priorities.',
    },
    {
        index: '02',
        title: 'Tailored Strategy',
        description:
            'We analyze your goals and shape a custom strategy with measurable milestones, responsible owners, and realistic timing.',
    },
    {
        index: '03',
        title: 'Continuous Support',
        description:
            'From rollout to optimization, we stay involved to reduce friction, improve adoption, and keep outcomes compounding.',
    },
]

export const impactStats: StatItem[] = [
    { value: '$7M+', label: 'Revenue' },
    { value: '72%', label: 'Growth' },
    { value: '65%', label: 'Skills' },
    { value: '78%', label: 'Impact' },
    { value: '10+', label: 'Consultants' },
    { value: '24/7', label: 'Support' },
]

export const teamMembers: TeamMember[] = [
    {
        name: 'Emily Ross',
        role: 'Efficiency Specialist',
        image: 'https://placehold.co/760x860/244944/f3eadb?text=Emily+Ross',
    },
    {
        name: 'Daniel Lee',
        role: 'Financial & Growth Advisor',
        image: 'https://placehold.co/760x860/365954/f3eadb?text=Daniel+Lee',
    },
    {
        name: 'Sarah Mitchell',
        role: 'Lead Consultant',
        image: 'https://placehold.co/760x860/496964/f3eadb?text=Sarah+Mitchell',
    },
    {
        name: 'James Carter',
        role: 'Business Expert',
        image: 'https://placehold.co/760x860/5b7873/f3eadb?text=James+Carter',
    },
]

export const faqItems: FaqItem[] = [
    {
        question: 'How does your consulting process work?',
        answer:
            'We begin with a focused consultation to understand your goals, current obstacles, and available leverage points. From there, we define a roadmap, prioritize execution, and stay involved while the work turns into results.',
    },
    {
        question: 'What industries do you specialize in?',
        answer:
            'Our process is strongest in service-led, digital, and operationally complex businesses where clear positioning and reliable systems matter. The framework adapts across sectors without forcing generic advice onto very different teams.',
    },
    {
        question: 'How long does it take to see results?',
        answer:
            'Early clarity often appears in the first few sessions. Measurable business outcomes depend on scope, but most clients start seeing directional impact within the first quarter of consistent execution.',
    },
    {
        question: 'Do you offer one-time consultations?',
        answer:
            'Yes. You can start with a focused consultation and expand later if the engagement proves useful. That keeps the commitment light while still giving you concrete next moves.',
    },
    {
        question: 'Can small businesses afford your services?',
        answer:
            'That is exactly why the plans are tiered. Smaller teams can start with a lighter engagement and move up only when they need deeper support or broader implementation help.',
    },
    {
        question: 'How do I get started?',
        answer:
            'Use the contact form, choose the type of support you need, and tell us what you are solving for. We will follow up with the right next step rather than forcing a generic sales flow.',
    },
]

export const contactOptions = {
    services: ['Strategy Consulting', 'Market Research', 'Digital Transformation', 'Growth Planning'],
    budgets: ['$1K-$5K', '$5K-$10K', '$10K+'],
}

export const legalPages: Record<string, LegalPage> = {
    terms: {
        eyebrow: 'Terms and Conditions',
        title: 'Terms and Conditions for My Rents',
        intro:
            'Please read these terms and conditions carefully before using My Rents operated by Daniel Rodriguez.',
        updatedAt: 'March 7, 2026',
        sections: [
            {
                title: 'Conditions of Use',
                paragraphs: [
                    'We will provide this services to you, which is subject to the conditions stated below in this document. Every time you use the app, use its services, or make a purchase, you accept the following conditions. Therefore, we urge you to read them carefully.'
                ],
            },
            {
                title: 'Privacy Policy',
                paragraphs: [
                    'Before you continue using our website, we advise you to read our Privacy Policy regarding our user data collection. It will help you better understand our practices.'
                ],
            },
            {
                title: 'Intellectual Property',
                paragraphs: [
                    'You agree that all materials, products, and services provided on our app are the property of Daniel Rodriguez. as well all copyrights, trade secrets, trademarks, patents, and other intellectual property. You also agree that you will not reproduce or redistribute Daniel Rodriguez’s intellectual property in any way, including electronic, digital, or new trademark registrations.',
                    'You grant My Rent a royalty-free and non-exclusive license to display, use, copy, transmit, and broadcast the content you upload and publish. For issues regarding intellectual property claims, you should contact the company in order to come to an agreement.'
                ],
            },
            {
                title: 'License to Use the App',
                paragraphs: [
                    'You have a non-exclusive, limited, non-transferable, and revocable license to use the materials available on My Rents. The materials may not be used for any other purpose, and the license gets terminated the moment you stop using the app.'
                ],
            },
            {
                title: 'Communications',
                paragraphs: [
                    'The entire communication with us is electronic. Every time you send us an email or visit our app, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us.',
                    'We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements, and other communications we provide to you electronically meet the legal requirements that such communications be in writing.'
                ],
            },
            {
                title: 'Applicable Law',
                paragraphs: [
                    'By visiting this website, you agree that the laws of Spain, without regard to principles of conflict laws, will govern these terms of service, or any dispute of any sort that might come between Daniel Rodriguez and you, or its business partners and associates.'
                ],
            },
            {
                title: 'Disputes',
                paragraphs: [
                    'Any dispute related in any way to your visit to either this website, the app or to products you purchase from us shall be arbitrated by Spain and you consent to exclusive jurisdiction and venue of such courts.'
                ],
            },
            {
                title: 'Comments, Reviews, and Emails',
                paragraphs: [
                    'Visitors may post content if it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content must be free of software viruses, political campaign, and commercial solicitation.',
                    'We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant Daniel Rodriguez non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.'
                ],
            },
            {
                title: 'User Account',
                paragraphs: [
                    'If you are an owner of an account on My Rents, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.',
                    'We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion.'
                ],
            },
        ],
    },
    eula: {
        eyebrow: 'End-User License Agreement',
        title: 'EULA for My Rents',
        intro:
            'This EULA agreement governs your acquisition and use of our My Rents software ("Software") directly from Daniel Rodriguez or indirectly through a Daniel Rodriguez authorized reseller or distributor (a "Reseller"). Please read this EULA agreement carefully before completing the installation process and using My Rents software. It provides a license to use My Rents software and contains warranty information and liability disclaimers. By clicking "accept" or installing and/or using My Rents software, you are confirming your acceptance of the Software and agreeing to become bound by the terms of this EULA agreement.',
        updatedAt: 'March 7, 2026',
        sections: [
            {
                title: 'License Grant',
                paragraphs: [
                    'Daniel Rodriguez hereby grants you a personal, non-transferable, non-exclusive licence to use My Rents software on your devices in accordance with the terms of this EULA agreement. You are permitted to load My Rents software (pc, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of My Rents software.',
                    'You are not permitted to: Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things; Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose; Allow any third party to use the Software on behalf of or for the benefit of any third party; Use the Software in any way which breaches any applicable local, national or international law; Use the Software for any purpose that Daniel Rodriguez considers is a breach of this EULA agreement.'
                ],
            },
            {
                title: 'Intellectual Property and Ownership',
                paragraphs: [
                    'Daniel Rodriguez shall at all times retain ownership of the Software as originally downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of Daniel Rodriguez.',
                    'Daniel Rodriguez reserves the right to grant licences to use the Software to third parties.'
                ],
            },
            {
                title: 'Termination',
                paragraphs: [
                    'This EULA agreement is effective from the date you first use the Software and shall continue until terminated. You may terminate it at any time upon written notice to Daniel Rodriguez. It will also terminate immediately if you fail to comply with any term of this EULA agreement.',
                    'Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the Software. The provisions that by their nature continue and survive will survive any termination of this EULA agreement.'
                ],
            },
            {
                title: 'Governing Law',
                paragraphs: [
                    'This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of Spain.'
                ],
            },
        ],
    },
        dataDeletion: {
            eyebrow: 'Data Deletion',
            title: 'Data Deletion for My Rents',
            intro:
                'To remove completely your account and with this all the data saved in our databases you can simply click on "Delete my account" inside the options within the app.',
            updatedAt: 'March 7, 2026',
            sections: [
                {
                    title: 'Data Deletion',
                    paragraphs: [
                        'To remove completely your account and with this all the data saved in our databases you can simply click on "Delete my account" inside the options within the app.'
                    ],
                },
            ],
        },
    privacy: {
        eyebrow: 'Privacy Policy',
        title: 'Privacy Policy for My Rents',
        intro:
            'Daniel Rodriguez built this app as a Free app. This SERVICE is provided by Daniel Rodriguez at no cost with its default version. There are also paid versions but the user is never forced to pay for this app. This page is used to inform website visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service. If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy. The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at this app unless otherwise defined in this Privacy Policy.',
        updatedAt: 'March 7, 2026',
        sections: [
            {
                title: 'Information Collection and Use',
                paragraphs: [
                    'The only data collected is the email, name and profile picture of the user when they create the account. This information is ONLY used to provide an authentication service within the app.',
                    'The users can save personal info inside their rents such other people emails or phone numbers but this is up to the user. Again, any information that the users save is ONLY used as plain info for the user.',
                    'The app does use third party services that may collect information used to identify you. Have a look to "Third party libraries" and have a look to their privacy policies. For this you can go to Option - About Us - View Licenses.'
                ],
            },
            {
                title: 'Cookies',
                paragraphs: [
                    'Cookies are files with small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your device internal memory.',
                    'This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collection information and to improve their services.',
                    'You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.'
                ],
            },
            {
                title: 'Service Providers',
                paragraphs: [
                    'I may employ third-party companies and individuals due to the following reasons:',
                    '• To facilitate our Service;',
                    '• To provide the Service on our behalf;',
                    '• To perform Service-related services; or',
                    '• To assist us in analysing how our Service is used.',
                    'To assist us in analysing how our Service is used.'
                ],
            },
            {
                title: 'Links to Other Sites',
                paragraphs: [
                    'This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites.',
                    'I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.'
                ],
            },
            {
                title: 'Changes to This Privacy Policy',
                paragraphs: [
                    'I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.',
                    'I will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately after they are posted on this page.'
                ],
            },
            {
                title: 'Contact Us',
                paragraphs: [
                    'If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me to drodriguez.apps@gmail.com.'
                ],
            },
        ],
    },
}
