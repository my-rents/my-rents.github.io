import { useEffect, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { saveAs } from 'file-saver'
import JSZip from 'jszip'
import Lightbox from 'yet-another-react-lightbox'
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { PortalIcon } from './lib/icons'
import {
  PORTAL_LANGUAGE_STORAGE_KEY,
  portalLanguageOptions,
  portalTranslations,
  resolvePortalLanguage,
  type PortalCopy,
  type PortalLanguage,
} from './lib/i18n'
import {
  clearPortalSession,
  loginToPortal,
  readPortalSession,
  type PortalExpense,
  type PortalLeaseView,
  type PortalRole,
  type PortalSharedLink,
} from './lib/portal'

const trimmedBaseUrl = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL.slice(0, -1)
  : import.meta.env.BASE_URL
const portalBasePath = `${trimmedBaseUrl || ''}/portal`

function resolvePortalPublicAsset(fileName: string) {
  return `${portalBasePath}/${fileName.replace(/^\//, '')}`
}

const demoLeaseId = 'demo'

const demoPortalView: PortalLeaseView = {
  enabled: true,
  ownerUserId: 'demo-owner',
  portfolioId: 'demo-portfolio',
  rentId: 'demo-rent',
  leaseDocumentId: demoLeaseId,
  rentTitle: 'Maple Court Apartment 4B',
  rentAddress: '18 Willow Avenue, Valencia',
  tenantName: 'Ariana Vega',
  tenantEmail: 'ariana.vega@example.com',
  from: new Date('2025-01-01T00:00:00Z').getTime(),
  to: new Date('2025-12-31T00:00:00Z').getTime(),
  frequency: 'monthly',
  rentAmount: 1285,
  nextPaymentDate: new Date('2026-04-05T00:00:00Z').getTime(),
  allPaid: false,
  documents: [
    {
      name: 'Signed lease summary',
      link: resolvePortalPublicAsset('demo-lease-summary.txt'),
    },
    {
      name: 'Move-in checklist',
      link: resolvePortalPublicAsset('demo-move-in-checklist.txt'),
    },
  ],
  gallery: [
    {
      name: 'Living room overview',
      link: resolvePortalPublicAsset('demo-gallery-1.svg'),
    },
    {
      name: 'Kitchen fixtures',
      link: resolvePortalPublicAsset('demo-gallery-2.svg'),
    },
    {
      name: 'Terrace access',
      link: resolvePortalPublicAsset('demo-gallery-3.svg'),
    },
  ],
  expenses: [
    {
      id: 'exp-1',
      name: 'Water service',
      description: 'Monthly utility service shared with the building.',
      price: 34.5,
      from: new Date('2026-04-01T00:00:00Z').getTime(),
      to: null,
      frequency: 'monthly',
      invoices: [
        {
          name: 'Water bill Apr 2026',
          link: resolvePortalPublicAsset('demo-lease-summary.txt'),
        },
        {
          name: 'Water bill Mar 2026',
          link: resolvePortalPublicAsset('demo-move-in-checklist.txt'),
        },
      ],
    },
    {
      id: 'exp-2',
      name: 'Hallway repaint',
      description: 'One-off maintenance work already scheduled.',
      price: 180,
      from: new Date('2026-03-15T00:00:00Z').getTime(),
      to: new Date('2026-03-15T00:00:00Z').getTime(),
      frequency: 'one-off',
      invoices: [],
    },
  ],
  lastTenantLoginAt: new Date('2026-03-28T18:20:00Z').getTime(),
  lastLandlordLoginAt: new Date('2026-03-28T18:42:00Z').getTime(),
  updatedAt: new Date('2026-03-28T18:42:00Z').getTime(),
}

interface SharedAppProps {
  copy: PortalCopy
  language: PortalLanguage
  onLanguageChange: (language: PortalLanguage) => void
}

function App() {
  const [language, setLanguage] = useState<PortalLanguage>(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    const storedLanguage = window.localStorage.getItem(PORTAL_LANGUAGE_STORAGE_KEY)

    return resolvePortalLanguage(storedLanguage || window.navigator.language)
  })

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(PORTAL_LANGUAGE_STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const copy = portalTranslations[language]

  return (
    <BrowserRouter basename={portalBasePath}>
      <Routes>
        <Route
          path="/"
          element={<LandingPage copy={copy} language={language} onLanguageChange={setLanguage} />}
        />
        <Route
          path="/:leaseId"
          element={<PortalPage copy={copy} language={language} onLanguageChange={setLanguage} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

function LandingPage({ copy, language, onLanguageChange }: SharedAppProps) {
  const navigate = useNavigate()
  const [leaseId, setLeaseId] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextLeaseId = leaseId.trim()
    if (!nextLeaseId) {
      return
    }

    navigate(`/${encodeURIComponent(nextLeaseId)}`)
  }

  return (
    <PortalShell copy={copy} language={language} onLanguageChange={onLanguageChange}>
      <section className="hero-card hero-card--landing panel">
        <div className="eyebrow">
          <PortalIcon name="shield" className="eyebrow__icon" />
          {copy.secureLeasePortal}
        </div>
        <div className="hero-card__content">
          <div className="hero-copy">
            <h1>{copy.landingTitle}</h1>
            <p>{copy.landingIntro}</p>
          </div>
          <form className="lease-form" onSubmit={handleSubmit}>
            <label className="field">
              <span>{copy.leaseIdLabel}</span>
              <input
                autoComplete="off"
                inputMode="text"
                placeholder={copy.leaseIdPlaceholder}
                value={leaseId}
                onChange={(event) => setLeaseId(event.target.value)}
              />
            </label>
            <button className="button button--primary" type="submit">
              <PortalIcon name="arrow" />
              {copy.openPortal}
            </button>
          </form>
        </div>
        <div className="hero-grid">
          <FeatureCard icon="home" title={copy.featureSharedTitle} text={copy.featureSharedText} />
          <FeatureCard
            icon="lock"
            title={copy.featurePasscodeTitle}
            text={copy.featurePasscodeText}
          />
          <FeatureCard
            icon="calendar"
            title={copy.featureRentVisibilityTitle}
            text={copy.featureRentVisibilityText}
          />
        </div>
        {import.meta.env.DEV ? (
          <div className="demo-banner">
            <span>{copy.localQaShortcut}</span>
            <Link className="button button--ghost" to={`/${demoLeaseId}?demo=1&role=tenant`}>
              <PortalIcon name="eye" />
              {copy.openDemoPortal}
            </Link>
          </div>
        ) : null}
      </section>
    </PortalShell>
  )
}

function PortalPage({ copy, language, onLanguageChange }: SharedAppProps) {
  const navigate = useNavigate()
  const params = useParams()
  const [searchParams] = useSearchParams()
  const leaseId = params.leaseId?.trim() ?? ''
  const isDemoMode = import.meta.env.DEV && searchParams.get('demo') === '1'
  const demoRole = searchParams.get('role') === 'landlord' ? 'landlord' : 'tenant'

  const [selectedRole, setSelectedRole] = useState<PortalRole>('tenant')
  const [passcode, setPasscode] = useState('')
  const [activeRole, setActiveRole] = useState<PortalRole | null>(isDemoMode ? demoRole : null)
  const [portalView, setPortalView] = useState<PortalLeaseView | null>(
    isDemoMode ? demoPortalView : null,
  )
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [isCheckingSession, setIsCheckingSession] = useState(!isDemoMode)
  const [isSigningIn, setIsSigningIn] = useState(false)
  const [isLoadingPortal, setIsLoadingPortal] = useState(false)
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false)
  const [galleryModalIndex, setGalleryModalIndex] = useState(0)
  const [isPreparingGalleryZip, setIsPreparingGalleryZip] = useState(false)

  useEffect(() => {
    if (isDemoMode) {
      setSelectedRole(demoRole)
      setActiveRole(demoRole)
      setPortalView(demoPortalView)
      setErrorMessage(null)
      setIsCheckingSession(false)
      setIsLoadingPortal(false)
      return
    }

    if (!leaseId) {
      setActiveRole(null)
      setPortalView(null)
      setErrorMessage(copy.leaseLinkMissing)
      setIsCheckingSession(false)
      return
    }

    setIsCheckingSession(true)
    setErrorMessage(null)

    const session = readPortalSession(leaseId)
    if (!session) {
      setActiveRole(null)
      setPortalView(null)
      setIsCheckingSession(false)
      return
    }

    setSelectedRole(session.role)
    setActiveRole(session.role)
    setPortalView(session.portalView)
    setIsCheckingSession(false)
  }, [copy.leaseLinkMissing, demoRole, isDemoMode, leaseId])

  useEffect(() => {
    if (isDemoMode) {
      return
    }

    if (!leaseId || !activeRole || !portalView) {
      setIsLoadingPortal(false)
      return
    }

    setIsLoadingPortal(false)
  }, [activeRole, isDemoMode, leaseId, portalView])

  useEffect(() => {
    if (!isGalleryModalOpen) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsGalleryModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isGalleryModalOpen])

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!leaseId) {
      setErrorMessage(copy.leaseLinkMissing)
      return
    }

    setIsSigningIn(true)
    setErrorMessage(null)

    try {
      const session = await loginToPortal(leaseId, selectedRole, passcode)
      setSelectedRole(session.role)
      setActiveRole(session.role)
      setPortalView(session.portalView)
      setPasscode('')
    } catch (error) {
      setErrorMessage(humanizeError(error, copy.invalidPasscode, copy))
    } finally {
      setIsSigningIn(false)
    }
  }

  async function handleLogout() {
    if (isDemoMode) {
      navigate('/')
      return
    }

    clearPortalSession()
    setActiveRole(null)
    setPortalView(null)
    setPasscode('')
    setErrorMessage(null)
  }

  function handleOpenGalleryModal(index: number) {
    setGalleryModalIndex(index)
    setIsGalleryModalOpen(true)
    setErrorMessage(null)
  }

  async function handleDownloadGalleryZip() {
    const galleryItems = portalView?.gallery ?? []
    if (galleryItems.length === 0 || !portalView) {
      return
    }

    setIsPreparingGalleryZip(true)
    setErrorMessage(null)

    try {
      const zip = new JSZip()

      await Promise.all(
        galleryItems.map(async (item, index) => {
          const response = await fetch(item.link, { mode: 'cors' })
          if (!response.ok) {
            throw new Error(`download-failed-${index}`)
          }

          const blob = await response.blob()
          zip.file(resolveDownloadName(item, `image-${index + 1}`), blob)
        }),
      )

      const zipBlob = await zip.generateAsync({ type: 'blob' })
      saveAs(zipBlob, buildGalleryZipName(portalView.rentTitle))
    } catch {
      setErrorMessage(copy.galleryZipFailed)
    } finally {
      setIsPreparingGalleryZip(false)
    }
  }

  const galleryItems = portalView?.gallery ?? []
  const gallerySlides = buildGallerySlides(galleryItems)
  const paymentStatus = portalView ? describePaymentStatus(portalView, copy, language) : null
  const overdueExpenseTotal = portalView
    ? portalView.expenses.reduce((sum, expense) => sum + expense.price, 0)
    : 0

  return (
    <PortalShell copy={copy} language={language} onLanguageChange={onLanguageChange}>
      <section className="hero-card panel">
        <div className="hero-card__header">
          <div>
            <div className="eyebrow">
              <PortalIcon name="home" className="eyebrow__icon" />
              {copy.leaseWorkspace}
            </div>
            <h1>{portalView?.rentTitle ?? copy.sharedLeasePortal}</h1>
            <p className="hero-subtitle">
              {portalView ? buildLeaseSubtitle(portalView, copy) : copy.heroSubtitleFallback}
            </p>
          </div>
          <div className="hero-card__actions">
            {activeRole ? (
              <button className="button button--ghost" onClick={handleLogout}>
                <PortalIcon name="refresh" />
                {copy.signOut}
              </button>
            ) : null}
          </div>
        </div>

        {activeRole && portalView ? (
          <div className="hero-grid hero-grid--metrics">
            <MetricCard
              icon={paymentStatus?.icon ?? 'calendar'}
              label={copy.paymentStatus}
              value={paymentStatus?.label ?? copy.waitingForSignIn}
              tone={paymentStatus?.tone ?? 'neutral'}
              detail={paymentStatus?.detail ?? copy.paymentStatusLoadingDetail}
            />
            <MetricCard
              icon="money"
              label={copy.rentAmount}
              value={portalView ? formatAmount(portalView.rentAmount, language) : copy.notLoaded}
              tone="neutral"
              detail={
                portalView
                  ? friendlyFrequency(portalView.frequency, copy)
                  : copy.rentAmountLoadingDetail
              }
            />
            <MetricCard
              icon="calendar"
              label={copy.leaseWindow}
              value={
                portalView
                  ? `${formatDate(portalView.from, language, copy)} ${copy.dateRangeSeparator} ${formatDate(portalView.to, language, copy)}`
                  : copy.notLoaded
              }
              tone="neutral"
              detail={copy.leaseWorkspace}
            />
            <MetricCard
              icon="shield"
              label={activeRole === 'landlord' ? copy.tenantLastCheckIn : copy.portalUpdated}
              value={
                portalView
                  ? activeRole === 'landlord'
                    ? formatDateTime(portalView.lastTenantLoginAt, language, copy)
                    : formatDateTime(portalView.updatedAt, language, copy)
                  : copy.notLoaded
              }
              tone={activeRole === 'landlord' ? 'accent' : 'neutral'}
              detail={
                activeRole === 'landlord' ? copy.tenantCheckInDetail : copy.portalUpdatedDetail
              }
            />
          </div>
        ) : null}
      </section>

      {errorMessage && activeRole && portalView ? (
        <section className="portal-notice portal-notice--error">
          <PortalIcon name="hourglass" />
          <p>{errorMessage}</p>
        </section>
      ) : null}

      {isCheckingSession ? (
        <section className="panel state-panel">
          <PortalIcon name="refresh" className="state-panel__icon spin" />
          <h2>{copy.restoringSessionTitle}</h2>
          <p>{copy.restoringSessionText}</p>
        </section>
      ) : null}

      {!isCheckingSession && !activeRole ? (
        <section className="login-layout">
          <div className="panel login-panel">
            <div className="eyebrow">
              <PortalIcon name="lock" className="eyebrow__icon" />
              {copy.roleBasedAccess}
            </div>
            <h2>{copy.signInToLease(leaseId || copy.sharedLeasePortal)}</h2>
            <p>{copy.signInDescription}</p>

            <form className="login-form" onSubmit={handleLogin}>
              <div className="role-switch" role="radiogroup" aria-label={copy.roleBasedAccess}>
                <button
                  aria-checked={selectedRole === 'tenant'}
                  className="role-switch__option"
                  data-active={selectedRole === 'tenant'}
                  onClick={() => setSelectedRole('tenant')}
                  type="button"
                >
                  <PortalIcon name="user" />
                  {copy.tenant}
                </button>
                <button
                  aria-checked={selectedRole === 'landlord'}
                  className="role-switch__option"
                  data-active={selectedRole === 'landlord'}
                  onClick={() => setSelectedRole('landlord')}
                  type="button"
                >
                  <PortalIcon name="shield" />
                  {copy.landlord}
                </button>
              </div>

              <label className="field">
                <span>{copy.passcode}</span>
                <input
                  autoCapitalize="characters"
                  autoComplete="one-time-code"
                  inputMode="text"
                  placeholder={copy.passcodePlaceholder}
                  value={passcode}
                  onChange={(event) =>
                    setPasscode(event.target.value.toUpperCase().replace(/\s+/g, ''))
                  }
                />
              </label>

              <button className="button button--primary" disabled={isSigningIn} type="submit">
                <PortalIcon name="arrow" />
                {isSigningIn ? copy.checkingAccess : copy.unlockLeasePortal}
              </button>
            </form>

            {errorMessage ? <p className="form-error">{errorMessage}</p> : null}
          </div>

          <aside className="panel info-panel">
            <SectionHeader
              icon="calendar"
              title={copy.whatYouWillSee}
              subtitle={copy.whatYouWillSeeSubtitle}
            />
            <ul className="fact-list">
              <li>
                <PortalIcon name="file" />
                {copy.factSharedDocuments}
              </li>
              <li>
                <PortalIcon name="gallery" />
                {copy.factGallery}
              </li>
              <li>
                <PortalIcon name="money" />
                {copy.factPayments}
              </li>
              <li>
                <PortalIcon name="shield" />
                {copy.factMetadata}
              </li>
            </ul>
          </aside>
        </section>
      ) : null}

      {!isCheckingSession && activeRole && isLoadingPortal ? (
        <section className="panel state-panel">
          <PortalIcon name="refresh" className="state-panel__icon spin" />
          <h2>{copy.loadingLeaseTitle}</h2>
          <p>{copy.loadingLeaseText}</p>
        </section>
      ) : null}

      {!isCheckingSession && activeRole && portalView ? (
        <div className="dashboard-grid">
          <section className="panel panel--wide">
            <SectionHeader icon="file" title={copy.documents} subtitle="" />
            {portalView.documents.length > 0 ? (
              <div className="resource-list">
                {portalView.documents.map((document) => (
                  <ResourceCard key={document.link} copy={copy} item={document} />
                ))}
              </div>
            ) : (
              <EmptyState icon="file" title={copy.noDocumentsTitle} text={copy.noDocumentsText} />
            )}
          </section>

          <section className="panel panel--wide">
            <SectionHeader icon="money" title={copy.expenses} subtitle="" />
            {portalView.expenses.length > 0 ? (
              <>
                <p className="section-total">
                  {copy.sharedExpenseTotal}:{' '}
                  <strong>{formatAmount(overdueExpenseTotal, language)}</strong>
                </p>
                <div className="expense-grid">
                  {portalView.expenses.map((expense) => (
                    <ExpenseCard
                      key={expense.id || expense.name}
                      copy={copy}
                      language={language}
                      expense={expense}
                    />
                  ))}
                </div>
              </>
            ) : (
              <EmptyState icon="money" title={copy.noExpensesTitle} text={copy.noExpensesText} />
            )}
          </section>

          <section className="panel panel--wide">
            <SectionHeader
              action={
                galleryItems.length > 0 ? (
                  <button
                    className="button button--ghost"
                    disabled={isPreparingGalleryZip}
                    type="button"
                    onClick={handleDownloadGalleryZip}
                  >
                    <PortalIcon name="download" />
                    {isPreparingGalleryZip ? copy.preparingZip : copy.downloadZip}
                  </button>
                ) : null
              }
              icon="gallery"
              title={copy.gallery}
              subtitle=""
            />
            {galleryItems.length > 0 ? (
              <>
                <div className="portal-gallery-grid">
                  {galleryItems.map((item, index) => (
                    <button
                      className="portal-gallery-card"
                      key={item.link}
                      type="button"
                      aria-label={item.name || copy.galleryImage}
                      onClick={() => handleOpenGalleryModal(index)}
                    >
                      <img alt={item.name || copy.galleryImage} loading="lazy" src={item.link} />
                    </button>
                  ))}
                </div>
                <Lightbox
                  carousel={{
                    finite: true,
                    imageFit: 'contain',
                    padding: '32px',
                    spacing: '12px',
                  }}
                  className="portal-lightbox"
                  close={() => setIsGalleryModalOpen(false)}
                  controller={{ closeOnBackdropClick: true }}
                  index={galleryModalIndex}
                  labels={{
                    Close: copy.closePreview,
                    Next: copy.nextImage,
                    Previous: copy.previousImage,
                  }}
                  on={{ view: ({ index }) => setGalleryModalIndex(index) }}
                  open={isGalleryModalOpen}
                  render={{
                    buttonNext: gallerySlides.length > 1 ? undefined : () => null,
                    buttonPrev: gallerySlides.length > 1 ? undefined : () => null,
                  }}
                  slides={gallerySlides}
                />
              </>
            ) : (
              <EmptyState icon="gallery" title={copy.noGalleryTitle} text={copy.noGalleryText} />
            )}
          </section>
        </div>
      ) : null}

      {!isCheckingSession && activeRole && !isLoadingPortal && !portalView && errorMessage ? (
        <section className="panel state-panel state-panel--error">
          <PortalIcon name="hourglass" className="state-panel__icon" />
          <h2>{copy.portalUnavailable}</h2>
          <p>{errorMessage}</p>
        </section>
      ) : null}
    </PortalShell>
  )
}

function PortalShell({
  children,
  copy,
  language,
  onLanguageChange,
}: SharedAppProps & { children: ReactNode }) {
  function handleLanguageChange(event: ChangeEvent<HTMLSelectElement>) {
    onLanguageChange(event.target.value as PortalLanguage)
  }

  return (
    <div className="portal-shell">
      <div className="portal-shell__orb portal-shell__orb--one" />
      <div className="portal-shell__orb portal-shell__orb--two" />
      <main className="portal-frame">
        <header className="masthead">
          <Link className="brand" to="/">
            <span className="brand__mark">MR</span>
            <span className="brand__copy">
              <strong>My Rents</strong>
              <span>{copy.brandSubtitle}</span>
            </span>
          </Link>
          <label className="language-switch">
            <PortalIcon name="globe" />
            <select
              aria-label={copy.languageLabel}
              value={language}
              onChange={handleLanguageChange}
            >
              {portalLanguageOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </header>
        {children}
      </main>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: Parameters<typeof PortalIcon>[0]['name']
  title: string
  text: string
}) {
  return (
    <article className="feature-card">
      <PortalIcon className="feature-card__icon" name={icon} />
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  )
}

function MetricCard({
  icon,
  label,
  value,
  detail,
  tone,
}: {
  icon: Parameters<typeof PortalIcon>[0]['name']
  label: string
  value: string
  detail: string
  tone: 'neutral' | 'success' | 'warning' | 'accent'
}) {
  return (
    <article className="metric-card" data-tone={tone}>
      <div className="metric-card__label">
        <PortalIcon name={icon} />
        {label}
      </div>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  )
}

function SectionHeader({
  action,
  icon,
  title,
  subtitle,
}: {
  action?: ReactNode
  icon: Parameters<typeof PortalIcon>[0]['name']
  title: string
  subtitle: string
}) {
  return (
    <div className="section-header">
      <div className="section-header__top">
        <div className="section-header__title">
          <PortalIcon name={icon} />
          <h2>{title}</h2>
        </div>
        {action ? <div className="section-header__action">{action}</div> : null}
      </div>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  )
}

function ResourceCard({ copy, item }: { copy: PortalCopy; item: PortalSharedLink }) {
  return (
    <a
      className="resource-card resource-card--link"
      href={item.link}
      rel="noreferrer noopener"
      target="_blank"
      aria-label={`${copy.open} ${item.name}`}
    >
      <div>
        <h3>{item.name}</h3>
      </div>
    </a>
  )
}

function ExpenseCard({
  copy,
  language,
  expense,
}: {
  copy: PortalCopy
  language: PortalLanguage
  expense: PortalExpense
}) {
  const invoiceItems = expense.invoices ?? []

  return (
    <article className="expense-card">
      <div className="expense-card__header">
        <h3>{expense.name || copy.untitledExpense}</h3>
        <strong>{formatAmount(expense.price, language)}</strong>
      </div>
      <div className="expense-card__invoices" aria-label={copy.expenseInvoicesAria}>
        {invoiceItems.length > 0 ? (
          invoiceItems.map((invoice) => (
            <a
              key={invoice.link}
              className="expense-card__invoice"
              href={invoice.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <PortalIcon name="file" />
              <span>{invoice.name || copy.invoice}</span>
            </a>
          ))
        ) : (
          <div className="expense-card__invoice-placeholder" />
        )}
      </div>
      {expense.description ? <p>{expense.description}</p> : null}
      <dl className="expense-card__meta">
        <div>
          <dt>{copy.expenseSchedule}</dt>
          <dd>{friendlyFrequency(expense.frequency, copy)}</dd>
        </div>
        <div>
          <dt>{copy.start}</dt>
          <dd>{formatDate(expense.from, language, copy)}</dd>
        </div>
        <div>
          <dt>{copy.end}</dt>
          <dd>{formatDate(expense.to, language, copy)}</dd>
        </div>
      </dl>
    </article>
  )
}

function EmptyState({
  icon,
  title,
  text,
}: {
  icon: Parameters<typeof PortalIcon>[0]['name']
  title: string
  text: string
}) {
  return (
    <div className="empty-state">
      <PortalIcon name={icon} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

function buildLeaseSubtitle(view: PortalLeaseView, copy: PortalCopy): string {
  const parts = [
    view.rentAddress,
    friendlyFrequency(view.frequency, copy),
    `${copy.tenantLabel}: ${view.tenantName || copy.activeTenant}`,
  ]

  return parts.filter(Boolean).join(' · ')
}

function buildGallerySlides(gallery: PortalSharedLink[]) {
  return gallery.map((item) => ({
    alt: item.name,
    src: item.link,
  }))
}

function describePaymentStatus(
  view: PortalLeaseView,
  copy: PortalCopy,
  language: PortalLanguage,
): {
  detail: string
  icon: 'calendar' | 'check' | 'hourglass'
  label: string
  tone: 'neutral' | 'success' | 'warning'
} {
  if (view.allPaid) {
    return {
      icon: 'check',
      label: copy.paidUp,
      tone: 'success',
      detail: copy.paidDetail,
    }
  }

  if (view.nextPaymentDate && view.nextPaymentDate < Date.now()) {
    return {
      icon: 'hourglass',
      label: copy.paymentOverdue,
      tone: 'warning',
      detail: copy.paymentOverdueDetail(formatDate(view.nextPaymentDate, language, copy)),
    }
  }

  if (view.nextPaymentDate) {
    return {
      icon: 'calendar',
      label: copy.upcomingPayment,
      tone: 'neutral',
      detail: copy.upcomingPaymentDetail(formatDate(view.nextPaymentDate, language, copy)),
    }
  }

  return {
    icon: 'calendar',
    label: copy.scheduleUnavailable,
    tone: 'neutral',
    detail: copy.scheduleUnavailableDetail,
  }
}

function formatAmount(value: number, language: PortalLanguage): string {
  return new Intl.NumberFormat(language, {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(value)
}

function formatDate(value: number | null, language: PortalLanguage, copy: PortalCopy): string {
  if (!value) {
    return copy.notAvailable
  }

  return new Intl.DateTimeFormat(language, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function formatDateTime(value: number | null, language: PortalLanguage, copy: PortalCopy): string {
  if (!value) {
    return copy.notRecordedYet
  }

  return new Intl.DateTimeFormat(language, {
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function friendlyFrequency(value: string, copy: PortalCopy): string {
  const normalized = value.trim().toLowerCase()
  const labels: Record<string, string> = {
    annually: copy.frequencyYearly,
    biannually: copy.frequencySixMonths,
    'bi-annually': copy.frequencySixMonths,
    'bi-weekly': copy.frequencyBiWeekly,
    biweekly: copy.frequencyBiWeekly,
    custom: copy.frequencyOneOff,
    daily: copy.frequencyDaily,
    monthly: copy.frequencyMonthly,
    once: copy.frequencyOneOff,
    oneoff: copy.frequencyOneOff,
    'one-off': copy.frequencyOneOff,
    quarterly: copy.frequencyQuarterly,
    single: copy.frequencyOneOff,
    unique: copy.frequencyUniquePayment,
    weekly: copy.frequencyWeekly,
    yearly: copy.frequencyYearly,
  }

  return labels[normalized] ?? copy.frequencyOneOff
}

function humanizeError(error: unknown, fallback: string, copy: PortalCopy): string {
  if (typeof error !== 'object' || error === null) {
    return fallback
  }

  const maybeCode = 'code' in error ? error.code : null
  const maybeMessage = 'message' in error ? error.message : null
  const code = typeof maybeCode === 'string' ? maybeCode : ''
  const message = typeof maybeMessage === 'string' ? maybeMessage : ''

  if (code.includes('permission-denied')) {
    return copy.invalidPasscode
  }

  if (code.includes('invalid-argument')) {
    return copy.incompleteLeaseLink
  }

  if (code.includes('unauthenticated')) {
    return copy.sessionExpired
  }

  if (message.startsWith('Firebase: ')) {
    return message.replace(/^Firebase:\s*/, '')
  }

  return message || fallback
}

function resolveDownloadName(item: PortalSharedLink, fallbackBase = 'download'): string {
  const providedName = item.name.trim() || fallbackBase
  const safeName = providedName.replace(/[\\/:*?"<>|]+/g, '-').trim()

  if (/\.[a-z0-9]{2,8}$/i.test(safeName)) {
    return safeName
  }

  return `${safeName}${extractFileExtension(item.link)}`
}

function extractFileExtension(link: string): string {
  try {
    const url = new URL(link, window.location.origin)
    const filename = url.pathname.split('/').filter(Boolean).pop() ?? ''
    const match = filename.match(/(\.[a-z0-9]{2,8})$/i)
    return match?.[1] ?? ''
  } catch {
    const match = link.match(/(\.[a-z0-9]{2,8})(?:$|[?#])/i)
    return match?.[1] ?? ''
  }
}

function buildGalleryZipName(rentTitle: string): string {
  const slug = rentTitle
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return `${slug || 'portal-gallery'}.zip`
}

export default App
