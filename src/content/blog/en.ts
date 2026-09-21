import type { BlogArticle, BlogSectionContent } from '../blogContent'

export const englishBlogArticles: BlogArticle[] = [
  {
    slug: 'organize-rental-property-receipts-tax-season',
    title: 'How to Organize Rental Property Receipts for Tax Season',
    readingTime: '5 min read',
    date: 'March 18, 2026',
    category: 'Tax & Finance',
    excerpt:
      'Learn how DIY landlords organize rental property receipts, categorize tax deductions, and avoid spreadsheet headaches when tax season arrives.',
    content: {
      lead: 'For independent landlords, tax season is often characterized by a chaotic weekend spent digging through glove compartments, shoeboxes, bank statements, and email folders trying to reconstruct twelve months of rental property expenses. Taking control of receipt tracking throughout the year transforms tax season into a simple 15-minute review instead of an exhausting weekend rebuild.',
      subheadings: [
        {
          title: '1. Why Mixed Accounts and Paper Receipts Create Tax Nightmares',
          paragraphs: [
            'The single biggest mistake DIY landlords make is paying for rental property supplies, emergency plumber visits, or replacement appliances with personal credit cards or cash without immediately cataloging the proof of purchase.',
            'Thermal paper receipts fade within months under heat and sunlight. If you ever face an IRS or tax authority audit, faded receipts or undocumented bank charges can lead to disallowed deductions and penalties. The golden rule of rental accounting is: digitize every single receipt the second you receive it.',
          ],
          takeaways: [
            'Never rely on physical paper receipts for more than 24 hours.',
            'Separate rental income and operating expenses from personal day-to-day spending.',
            'Photograph invoices immediately at the hardware store or job site.',
          ],
        },
        {
          title: '2. The 5 Core Rental Property Expense Categories to Track',
          paragraphs: [
            'Organizing expenses into standard categories prevents scramble at tax filing time and ensures you claim every legal deduction available for your investment properties:',
            'Repairs & Maintenance: Routine upkeep such as fixing leaking faucets, gutter cleaning, HVAC servicing, and repainting. These are fully deductible in the year incurred.',
            'Capital Improvements: Major upgrades like a new roof or full kitchen remodel. These must typically be capitalized and depreciated over several years.',
            'Property Taxes & Insurance: Annual landlord liability insurance, hazard policies, and municipal property taxes.',
            'Professional Fees & Software: Costs for property management apps like My Rents, legal contract reviews, accounting fees, and eviction filings.',
            'Mortgage Interest & Utilities: The interest portion of your rental mortgage and any landlord-paid utilities (water, trash, communal lighting).',
          ],
        },
        {
          title: '3. Digital Capture: The On-Site Photograph Workflow',
          paragraphs: [
            'The easiest way to never lose a tax deduction is snapping a photo of the receipt right inside your property management app while standing at the cash register or inspecting completed contractor work.',
            'When the photo is attached directly to the specific property and unit, you eliminate the mystery of asking "which apartment was this toilet valve for?" eight months later.',
          ],
        },
        {
          title: '4. What Your CPA or Tax Software Actually Needs',
          paragraphs: [
            'Your accountant does not want a bag full of paper slips. They want a clean, categorized spreadsheet or PDF report showing total income per property, categorized deductible expenses, and attached digital receipt proofs.',
            'Using an all-in-one landlord app like My Rents allows you to export full annual financial summaries broken down by property with a single tap.',
          ],
        },
      ],
      summaryBox: {
        title: 'Key Landlord Takeaway',
        text: 'Consistent on-the-spot mobile tracking saves an average of 14 hours during tax preparation and protects thousands of dollars in legitimate rental deductions from being overlooked.',
      },
    },
  },
  {
    slug: 'landlord-lease-renewals-rent-increase-guide',
    title: 'What Landlords Need to Know About Lease Renewals and Rent Increases',
    readingTime: '6 min read',
    date: 'March 14, 2026',
    category: 'Lease Management',
    excerpt:
      'A practical guide for landlords on lease renewal timelines, calculating fair rent adjustments, complying with notice requirements, and retaining good tenants.',
    content: {
      lead: 'Retaining reliable, respectful tenants who pay on time is the cornerstone of profitable rental property investing. However, handling lease expirations and communicating rent increases can feel uncomfortable. With a structured schedule and transparent communication, lease renewals become smooth, predictable milestones.',
      subheadings: [
        {
          title: '1. The 90-60-30 Day Lease Expiration Timeline',
          paragraphs: [
            'Successful lease renewals start well before the final month of a tenancy. Following a clear chronological cadence gives both you and your tenants adequate planning time:',
            '90 Days Prior: Review your operating costs (rising property taxes, insurance rate hikes, maintenance averages) and pull local comparable rental listings to assess current market value.',
            '60 Days Prior: Contact the tenant with a written renewal proposal outlining terms, updated lease duration, and any proposed rent adjustment. Ask for confirmation within 30 days.',
            '30 Days Prior: Execute the signed renewal agreement. If the tenant decides not to renew, this window gives you sufficient time to begin marketing and scheduling showings, minimizing vacancy.',
          ],
        },
        {
          title: '2. Calculating Fair Rent Increases vs The Cost of Turnover',
          paragraphs: [
            'A common blunder among novice landlords is aggressively pushing rent to the absolute ceiling, only to drive out a stellar tenant. Consider the real math of tenant turnover:',
            'Turnover often costs between $1,500 and $4,000 in lost rent, deep cleaning, lock changes, minor paint touchups, and listing fees. An incremental $50/month rent bump ($600/year) is wiped out by a single month of vacancy.',
            'When raising rent, explain the rationale respectfully (e.g., matching municipal utility adjustments or inflation) and keep rates slightly below top-of-market for tenants who take exceptional care of the property.',
          ],
          takeaways: [
            'Calculate the true cost of 30 days of vacancy before finalizing a rent increase.',
            'A dependable tenant paying 3-5% below peak market is often more profitable than an unknown tenant paying peak rent.',
            'Always check municipal and state rent control regulations before sending formal notices.',
          ],
        },
        {
          title: '3. Legal Compliance: Notice Periods and Rent Control',
          paragraphs: [
            'Many jurisdictions require 30, 60, or even 90 days written notice for rent increases, particularly if the increase exceeds 5% or 10%.',
            'Always check local statutory requirements before issuing notices. Delivering notice via recorded digital records or through your landlord portal ensures a verifiable audit trail.',
          ],
        },
        {
          title: '4. Centralizing Documents and Reminders in One Place',
          paragraphs: [
            'Juggling calendar reminders across different phones or email accounts inevitably results in missed renewal deadlines. When a lease quietly rolls over into month-to-month status without proactive management, landlords lose predictability.',
            'A dedicated app notifies you automatically well ahead of expiration dates and keeps the signed agreement accessible in your pocket.',
          ],
        },
      ],
      summaryBox: {
        title: 'Key Landlord Takeaway',
        text: 'Proactive 60-day renewal notices preserve tenant goodwill and eliminate vacancy risk, ensuring steady cash flow year after year.',
      },
    },
  },
  {
    slug: 'spreadsheets-vs-landlord-app-why-spreadsheets-fail',
    title: 'Why Excel & Spreadsheets Fail DIY Landlords in 2026',
    readingTime: '4 min read',
    date: 'March 8, 2026',
    category: 'Tech & Productivity',
    excerpt:
      'Why managing rental properties in Excel or Google Sheets leads to forgotten payments, broken formulas, and hours of wasted administrative time.',
    content: {
      lead: 'Almost every DIY landlord begins with a spreadsheet. It feels familiar, free, and completely customizable. But as soon as you add a second lease, a security deposit return, a mid-month repair invoice, or an overdue rent reminder, spreadsheets begin to show serious structural cracks.',
      subheadings: [
        {
          title: '1. The Desktop Trap: Property Management Happens on the Go',
          paragraphs: [
            'You do not manage rental properties sitting at an office desk with two 27-inch monitors. You manage them while standing on the driveway after a plumber finishes repairs, while reviewing a bank alert in your car, or while taking an urgent tenant phone call.',
            'Opening a complex Google Sheet or Excel workbook on a smartphone screen is clunky, frustrating, and prone to mis-taps. Because data entry on mobile is painful, landlords postpone logging expenses, leading to forgotten receipts and lost deductions.',
          ],
        },
        {
          title: '2. Formula Fragility and Accidental Overwrites',
          paragraphs: [
            'Spreadsheets rely on delicate cells, SUM formulas, and cross-tab references. A single misplaced keystroke, deleted row, or broken cell reference can silently corrupt your entire year-to-date profit-and-loss calculation without warning.',
            'Unlike database-backed apps with strict validation, spreadsheets do not prevent duplicate entries, invalid date ranges, or mismatched currency types.',
          ],
          takeaways: [
            'Spreadsheets lack automatic input validation and audit logging.',
            'Accidental row deletions can corrupt annual totals without throwing errors.',
            'Mobile editing of complex formulas frequently leads to data corruption.',
          ],
        },
        {
          title: '3. What Dedicated Apps Do That Spreadsheets Never Can',
          paragraphs: [
            'Modern mobile apps like My Rents are built around relational data: a property contains units; a unit contains active and past leases; a lease contains tenants, rent schedules, payments, and expenses.',
            'This architecture allows instantaneous features that spreadsheets cannot replicate without hundreds of hours of custom scripting:',
            'Automatic overdue alerts when rent is not marked as received by the grace period date.',
            'Integrated photo receipt storage attached directly to expenses.',
            'Offline-first capabilities so you can log records even in basement utility rooms with zero cell coverage.',
            'Secure read-only tenant portals where tenants can review lease documents and receipts.',
          ],
        },
      ],
      summaryBox: {
        title: 'Key Landlord Takeaway',
        text: 'Switching from manual spreadsheets to a purpose-built landlord app saves an average of 4 to 6 hours each month while removing calculation errors completely.',
      },
    },
  },
  {
    slug: 'tenant-portal-benefits-small-landlords',
    title: 'Tenant Portals: How Shared Access Simplifies Invoicing & Communication',
    readingTime: '5 min read',
    date: 'February 28, 2026',
    category: 'Operations',
    excerpt:
      'How private tenant portals eliminate disputes over lease terms, maintenance history, and rent payments without requiring tenants to install heavy software.',
    content: {
      lead: 'When tenants have questions about their lease end date, their security deposit terms, or whether their last rent payment cleared, what do they do? Usually, they text or email you at 9:00 PM on a Sunday. Providing a clean, self-service tenant portal eliminates friction and fosters professional tenant relationships.',
      subheadings: [
        {
          title: '1. The Problem with Heavy Enterprise Tenant Software',
          paragraphs: [
            'Many traditional property management platforms force tenants to create complex third-party accounts, remember passwords, or download bulky 200MB apps just to view their lease document.',
            'Tenants often resist downloading another app or forget their login credentials within two weeks. For DIY landlords managing 1 to 20 units, lightweight web-accessible portals offer a far better user experience.',
          ],
        },
        {
          title: '2. The Documents Center: Passcode-Protected Simplicity',
          paragraphs: [
            'My Rents solves this through the Documents Center feature. Every lease can generate an encrypted, shareable URL protected by a landlord-defined tenant passcode.',
            'Tenants simply tap the link on their phone or computer, enter the passcode, and immediately access:',
            'Official signed lease agreements and addendums in high-resolution PDF.',
            'Verified payment history confirming date received and remaining balance.',
            'Invoices for maintenance reimbursements or utility splits.',
          ],
          takeaways: [
            'No app download required for tenants — works in any mobile or desktop browser.',
            'Role-specific passcodes keep tenant access strictly restricted to their own lease.',
            'Immediate reduction in repetitive tenant text messages asking for document copies.',
          ],
        },
        {
          title: '3. Transparency Prevents Tenant Disputes',
          paragraphs: [
            'When both landlord and tenant have immediate 24/7 visibility into the exact payment log and attached documentation, misunderstandings disappear before they escalate.',
            'If a question arises regarding whether last month’s rent was paid on the 1st or the 5th, the portal provides an objective, immutable timestamp that both parties can verify.',
          ],
        },
      ],
      summaryBox: {
        title: 'Key Landlord Takeaway',
        text: 'A simple web-based tenant portal boosts tenant satisfaction, elevates your professional image, and saves hours of administrative back-and-forth.',
      },
    },
  },
  {
    slug: 'getting-started-diy-landlord-guide',
    title: 'How to Manage Your First Rental Property: The Step-by-Step Blueprint',
    readingTime: '7 min read',
    date: 'February 20, 2026',
    category: 'Getting Started',
    excerpt:
      'From property baselines and digital leases to logging rent and tracking maintenance, here is the step-by-step roadmap for stress-free property management.',
    content: {
      lead: 'Purchasing your first investment property is an exciting financial milestone. But once the closing papers are signed, the actual operational work begins. Establishing rigorous, automated management habits from day one is what separates successful investors from stressed-out landlords.',
      subheadings: [
        {
          title: 'Step 1: Set Up Your Property Baseline',
          paragraphs: [
            'Before marketing the property or signing a lease, establish a complete digital record of the unit. Take timestamped photos of every room, appliance serial numbers, utility shut-off valves, and baseline condition notes.',
            'In My Rents, you can create the property profile, specify whether it has multiple units or is a single-family residence, and store critical contacts like your preferred plumber, electrician, and insurance agent.',
          ],
        },
        {
          title: 'Step 2: Formalize Leases and Security Deposits',
          paragraphs: [
            'Never rely on verbal agreements or outdated generic templates found online. Use state-specific residential lease agreements that clearly specify payment due dates, grace periods, late fee structures, guest policies, and maintenance responsibilities.',
            'Store the countersigned lease document directly inside the app so you never have to search for a paper copy when questions arise.',
          ],
        },
        {
          title: 'Step 3: Establish a Consistent Payment Cadence',
          paragraphs: [
            'Set clear expectations from the first month. Outline accepted payment methods, when rent is considered delinquent, and the automated reminder schedule.',
            'When a payment arrives, mark it in the app immediately to generate a clear receipt record for both yourself and your tenant.',
          ],
          takeaways: [
            'Always provide written move-in inspection reports signed by the tenant.',
            'Hold security deposits in a dedicated, compliant escrow account according to state rules.',
            'Log every payment and maintenance expense on the exact day it occurs.',
          ],
        },
      ],
      summaryBox: {
        title: 'Key Landlord Takeaway',
        text: 'Disciplined organization from month one protects your investment asset, prevents costly disputes, and positions your rental portfolio for scalable growth.',
      },
    },
  },
]

export const englishBlogContent: BlogSectionContent = {
  eyebrow: 'Landlord Knowledge Hub',
  title: 'Practical Guides & Tips for Independent Landlords',
  description:
    'Expert advice on rental property management, tax optimization, lease renewals, tenant communication, and scaling your real estate portfolio.',
  readMoreLabel: 'Read full guide',
  backToArticlesLabel: 'Back to all articles',
  articles: englishBlogArticles,
}
