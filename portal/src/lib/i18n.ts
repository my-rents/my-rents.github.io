export const PORTAL_LANGUAGE_STORAGE_KEY = 'my-rents-portal-language'

export const portalLanguageOptions = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'it', label: 'Italiano' },
  { code: 'pt', label: 'Português' },
] as const

export type PortalLanguage = (typeof portalLanguageOptions)[number]['code']

export interface PortalCopy {
  activeTenant: string
  brandSubtitle: string
  checkingAccess: string
  clipboardUnavailable: string
  closePreview: string
  copyLeaseLink: string
  dateRangeSeparator: string
  documents: string
  download: string
  downloadZip: string
  end: string
  expenseInvoicesAria: string
  expenseSchedule: string
  expenses: string
  factGallery: string
  factMetadata: string
  factPayments: string
  factSharedDocuments: string
  featurePasscodeText: string
  featurePasscodeTitle: string
  featureRentVisibilityText: string
  featureRentVisibilityTitle: string
  featureSharedText: string
  featureSharedTitle: string
  frequencyBiWeekly: string
  frequencyDaily: string
  frequencyMonthly: string
  frequencyOneOff: string
  frequencyQuarterly: string
  frequencySixMonths: string
  frequencyUniquePayment: string
  frequencyWeekly: string
  frequencyYearly: string
  gallery: string
  galleryDownloadFailed: string
  galleryImage: string
  galleryZipFailed: string
  heroSubtitleFallback: string
  incompleteLeaseLink: string
  invalidPasscode: string
  invoice: string
  landlord: string
  languageLabel: string
  landingIntro: string
  landingTitle: string
  leaseIdLabel: string
  leaseIdPlaceholder: string
  leaseLinkMissing: string
  leaseWorkspace: string
  leaseOverview: string
  leaseOverviewLandlordSubtitle: string
  leaseWindow: string
  linkCopied: string
  loadingLeaseText: string
  loadingLeaseTitle: string
  localQaShortcut: string
  nextImage: string
  nextPayday: string
  noDocumentsText: string
  noDocumentsTitle: string
  noExpensesText: string
  noExpensesTitle: string
  noGalleryText: string
  noGalleryTitle: string
  notAvailable: string
  notLoaded: string
  notRecordedYet: string
  notSpecified: string
  open: string
  openDemoPortal: string
  openPortal: string
  paidDetail: string
  paidUp: string
  passcode: string
  passcodePlaceholder: string
  paymentOverdue: string
  paymentOverdueDetail: (date: string) => string
  paymentStatus: string
  paymentStatusLoadingDetail: string
  portalLinkCopyFailed: string
  portalUnavailable: string
  portalUpdated: string
  portalUpdatedDetail: string
  preparingZip: string
  previousImage: string
  published: string
  rentAmount: string
  rentAmountLoadingDetail: string
  restoringSessionText: string
  restoringSessionTitle: string
  roleBasedAccess: string
  scheduleUnavailable: string
  scheduleUnavailableDetail: string
  secureLeasePortal: string
  sessionExpired: string
  sharedExpenseTotal: string
  sharedItems: string
  sharedItemsDetail: string
  sharedLeasePortal: string
  signInDescription: string
  signInToLease: (leaseId: string) => string
  signOut: string
  start: string
  tenant: string
  tenantCheckInDetail: string
  tenantLabel: string
  tenantLastCheckIn: string
  unlockLeasePortal: string
  upcomingPayment: string
  upcomingPaymentDetail: (date: string) => string
  untitledExpense: string
  waitingForSignIn: string
  whatYouWillSee: string
  whatYouWillSeeSubtitle: string
}

export const portalTranslations: Record<PortalLanguage, PortalCopy> = {
  en: {
    activeTenant: 'Active tenant',
    brandSubtitle: 'Lease Portal',
    checkingAccess: 'Checking access',
    clipboardUnavailable: 'Clipboard access is not available in this browser.',
    closePreview: 'Close preview',
    copyLeaseLink: 'Copy lease link',
    dateRangeSeparator: 'to',
    documents: 'Documents',
    download: 'Download',
    downloadZip: 'Download ZIP',
    end: 'End',
    expenseInvoicesAria: 'Expense invoices',
    expenseSchedule: 'Schedule',
    expenses: 'Expenses',
    factGallery: 'Shared images with preview, open, and download actions.',
    factMetadata: 'Tenant check-ins recorded for the landlord in the portal metadata.',
    factPayments: 'Next payday and whether the lease is paid or overdue.',
    factSharedDocuments: 'Shared documents available to open in a new tab.',
    featurePasscodeText:
      'Landlord and tenant use separate passcodes. No personal account, email login, or sign-up flow is required.',
    featurePasscodeTitle: 'Passcode access',
    featureRentVisibilityText:
      'The portal surfaces the next payday and whether the lease is fully paid or overdue.',
    featureRentVisibilityTitle: 'Rent visibility',
    featureSharedText:
      'Each portal route maps to one lease only, so documents, gallery items, and expenses stay scoped to the right tenant relationship.',
    featureSharedTitle: 'Shared by lease',
    frequencyBiWeekly: 'Bi-weekly',
    frequencyDaily: 'Daily',
    frequencyMonthly: 'Monthly',
    frequencyOneOff: 'One-off payment',
    frequencyQuarterly: 'Quarterly',
    frequencySixMonths: 'Every 6 months',
    frequencyUniquePayment: 'Unique payment',
    frequencyWeekly: 'Weekly',
    frequencyYearly: 'Yearly',
    gallery: 'Gallery',
    galleryDownloadFailed: 'This image could not be downloaded.',
    galleryImage: 'Gallery image',
    galleryZipFailed:
      'The ZIP could not be prepared. Some remote images may block browser downloads.',
    heroSubtitleFallback:
      'Use the role-specific passcode from the acknowledgement center to load this lease.',
    incompleteLeaseLink: 'The lease link or passcode was incomplete.',
    invalidPasscode: 'The passcode does not match this lease or role.',
    invoice: 'Invoice',
    landlord: 'Landlord',
    languageLabel: 'Language',
    landingIntro:
      'My Rents sends each lease its own portal link and passcodes. Open the exact URL from the reminder email, choose your role, and sign in with the passcode assigned to this lease.',
    landingTitle: 'Open the lease workspace without creating a new account.',
    leaseIdLabel: 'Lease ID',
    leaseIdPlaceholder: 'Paste the lease ID from the portal link',
    leaseLinkMissing: 'The lease link is missing a valid lease ID.',
    leaseWorkspace: 'Lease workspace',
    leaseOverview: 'Lease overview',
    leaseOverviewLandlordSubtitle: 'This space mirrors what the tenant can see for this lease.',
    leaseWindow: 'Lease window',
    linkCopied: 'Link copied',
    loadingLeaseText: 'Shared files, gallery items, expenses, and payment status are on the way.',
    loadingLeaseTitle: 'Loading the lease snapshot',
    localQaShortcut: 'Local QA shortcut',
    nextImage: 'Next image',
    nextPayday: 'Next payday',
    noDocumentsText: 'The landlord has not published any lease documents for this portal yet.',
    noDocumentsTitle: 'No shared documents yet',
    noExpensesText: 'This lease does not currently expose expense items through the portal.',
    noExpensesTitle: 'No shared expenses',
    noGalleryText: 'Images will appear here after they are published to this lease.',
    noGalleryTitle: 'No shared gallery items',
    notAvailable: 'Not available',
    notLoaded: 'Not loaded',
    notRecordedYet: 'Not recorded yet',
    notSpecified: 'Not specified',
    open: 'Open',
    openDemoPortal: 'Open demo portal',
    openPortal: 'Open portal',
    paidDetail: 'The lease is marked as fully paid right now.',
    paidUp: 'Paid up',
    passcode: 'Passcode',
    passcodePlaceholder: 'Enter the passcode from the acknowledgement center',
    paymentOverdue: 'Payment overdue',
    paymentOverdueDetail: (date) => `The next rent was due on ${date}.`,
    paymentStatus: 'Payment status',
    paymentStatusLoadingDetail: 'The rent state appears after the portal loads.',
    portalLinkCopyFailed: 'The portal link could not be copied.',
    portalUnavailable: 'Portal unavailable',
    portalUpdated: 'Portal updated',
    portalUpdatedDetail: 'The portal reflects the latest published lease snapshot.',
    preparingZip: 'Preparing ZIP...',
    previousImage: 'Previous image',
    published: 'Published',
    rentAmount: 'Rent amount',
    rentAmountLoadingDetail: 'Shared once the lease snapshot loads.',
    restoringSessionText: 'The portal is checking whether this browser already has access.',
    restoringSessionTitle: 'Restoring the lease session',
    roleBasedAccess: 'Role-based access',
    scheduleUnavailable: 'Schedule unavailable',
    scheduleUnavailableDetail: 'The next payment date has not been published to the portal.',
    secureLeasePortal: 'Secure lease portal',
    sessionExpired: 'This lease session expired. Sign in again with the passcode.',
    sharedExpenseTotal: 'Shared expense total',
    sharedItems: 'Shared items',
    sharedItemsDetail: 'Documents and gallery items visible to this lease.',
    sharedLeasePortal: 'Shared lease portal',
    signInDescription:
      'Choose the role that matches your passcode. Landlord and tenant passcodes are different, even on the same lease.',
    signInToLease: (leaseId) => `Sign in to lease ${leaseId}`,
    signOut: 'Sign out',
    start: 'Start',
    tenant: 'Tenant',
    tenantCheckInDetail: 'This timestamp updates after a tenant signs into the lease portal.',
    tenantLabel: 'Tenant',
    tenantLastCheckIn: 'Tenant last check-in',
    unlockLeasePortal: 'Unlock lease portal',
    upcomingPayment: 'Upcoming payment',
    upcomingPaymentDetail: (date) => `The next rent is scheduled for ${date}.`,
    untitledExpense: 'Untitled expense',
    waitingForSignIn: 'Waiting for sign-in',
    whatYouWillSee: 'What you will see',
    whatYouWillSeeSubtitle: 'Both roles read the same lease snapshot.',
  },
  es: {
    activeTenant: 'Inquilino activo',
    brandSubtitle: 'Portal del alquiler',
    checkingAccess: 'Comprobando acceso',
    clipboardUnavailable: 'El portapapeles no esta disponible en este navegador.',
    closePreview: 'Cerrar vista previa',
    copyLeaseLink: 'Copiar enlace del alquiler',
    dateRangeSeparator: 'a',
    documents: 'Documentos',
    download: 'Descargar',
    downloadZip: 'Descargar ZIP',
    end: 'Fin',
    expenseInvoicesAria: 'Facturas del gasto',
    expenseSchedule: 'Frecuencia',
    expenses: 'Gastos',
    factGallery: 'Imagenes compartidas con acciones para previsualizar, abrir y descargar.',
    factMetadata:
      'Los accesos del inquilino quedan registrados para el propietario en los metadatos del portal.',
    factPayments: 'La proxima fecha de cobro y si el alquiler esta pagado o vencido.',
    factSharedDocuments: 'Documentos compartidos disponibles para abrir en una nueva pestaña.',
    featurePasscodeText:
      'Propietario e inquilino usan codigos distintos. No hace falta cuenta personal, correo ni registro.',
    featurePasscodeTitle: 'Acceso por codigo',
    featureRentVisibilityText:
      'El portal muestra la proxima fecha de cobro y si el alquiler esta totalmente pagado o vencido.',
    featureRentVisibilityTitle: 'Visibilidad del alquiler',
    featureSharedText:
      'Cada ruta del portal corresponde a un solo contrato, para que documentos, imagenes y gastos queden ligados al inquilino correcto.',
    featureSharedTitle: 'Compartido por contrato',
    frequencyBiWeekly: 'Cada dos semanas',
    frequencyDaily: 'Diario',
    frequencyMonthly: 'Mensual',
    frequencyOneOff: 'Pago unico',
    frequencyQuarterly: 'Trimestral',
    frequencySixMonths: 'Cada 6 meses',
    frequencyUniquePayment: 'Pago unico',
    frequencyWeekly: 'Semanal',
    frequencyYearly: 'Anual',
    gallery: 'Galeria',
    galleryDownloadFailed: 'No se pudo descargar esta imagen.',
    galleryImage: 'Imagen de la galeria',
    galleryZipFailed:
      'No se pudo preparar el ZIP. Algunas imagenes remotas pueden bloquear la descarga en el navegador.',
    heroSubtitleFallback:
      'Usa el codigo del centro de avisos correspondiente al rol para cargar este contrato.',
    incompleteLeaseLink: 'Falta informacion en el enlace del contrato o en el codigo.',
    invalidPasscode: 'El codigo no coincide con este contrato o rol.',
    invoice: 'Factura',
    landlord: 'Propietario',
    languageLabel: 'Idioma',
    landingIntro:
      'My Rents envia a cada contrato su propio enlace del portal y sus codigos. Abre la URL exacta del correo recordatorio, elige tu rol e inicia sesion con el codigo asignado a este contrato.',
    landingTitle: 'Abre el espacio del contrato sin crear una cuenta nueva.',
    leaseIdLabel: 'ID del contrato',
    leaseIdPlaceholder: 'Pega el ID del contrato del enlace del portal',
    leaseLinkMissing: 'Falta un ID de contrato valido en el enlace.',
    leaseWorkspace: 'Espacio del contrato',
    leaseOverview: 'Resumen del contrato',
    leaseOverviewLandlordSubtitle:
      'Este espacio refleja lo mismo que puede ver el inquilino para este contrato.',
    leaseWindow: 'Periodo del contrato',
    linkCopied: 'Enlace copiado',
    loadingLeaseText:
      'Los archivos compartidos, imagenes, gastos y estado de pago estan en camino.',
    loadingLeaseTitle: 'Cargando el resumen del contrato',
    localQaShortcut: 'Acceso rapido QA local',
    nextImage: 'Imagen siguiente',
    nextPayday: 'Proximo cobro',
    noDocumentsText: 'El propietario aun no ha publicado documentos de este contrato en el portal.',
    noDocumentsTitle: 'Aun no hay documentos compartidos',
    noExpensesText: 'Este contrato no expone gastos en el portal por ahora.',
    noExpensesTitle: 'No hay gastos compartidos',
    noGalleryText: 'Las imagenes apareceran aqui cuando se publiquen en este contrato.',
    noGalleryTitle: 'No hay imagenes compartidas',
    notAvailable: 'No disponible',
    notLoaded: 'Sin cargar',
    notRecordedYet: 'Aun no registrado',
    notSpecified: 'No indicado',
    open: 'Abrir',
    openDemoPortal: 'Abrir portal demo',
    openPortal: 'Abrir portal',
    paidDetail: 'Este contrato esta marcado como completamente pagado ahora mismo.',
    paidUp: 'Pagado',
    passcode: 'Codigo',
    passcodePlaceholder: 'Introduce el codigo del centro de avisos',
    paymentOverdue: 'Pago vencido',
    paymentOverdueDetail: (date) => `El siguiente cobro vencio el ${date}.`,
    paymentStatus: 'Estado del pago',
    paymentStatusLoadingDetail: 'El estado del alquiler aparece cuando se cargue el portal.',
    portalLinkCopyFailed: 'No se pudo copiar el enlace del portal.',
    portalUnavailable: 'Portal no disponible',
    portalUpdated: 'Portal actualizado',
    portalUpdatedDetail: 'El portal refleja la ultima version publicada del contrato.',
    preparingZip: 'Preparando ZIP...',
    previousImage: 'Imagen anterior',
    published: 'Publicado',
    rentAmount: 'Importe del alquiler',
    rentAmountLoadingDetail: 'Se mostrara cuando cargue el resumen del contrato.',
    restoringSessionText: 'El portal esta comprobando si este navegador ya tiene acceso.',
    restoringSessionTitle: 'Restaurando la sesion del contrato',
    roleBasedAccess: 'Acceso por rol',
    scheduleUnavailable: 'Frecuencia no disponible',
    scheduleUnavailableDetail: 'La siguiente fecha de cobro no se ha publicado en el portal.',
    secureLeasePortal: 'Portal seguro del contrato',
    sessionExpired:
      'La sesion de este contrato ha caducado. Vuelve a iniciar sesion con el codigo.',
    sharedExpenseTotal: 'Total de gastos compartidos',
    sharedItems: 'Elementos compartidos',
    sharedItemsDetail: 'Documentos e imagenes visibles para este contrato.',
    sharedLeasePortal: 'Portal del contrato compartido',
    signInDescription:
      'Elige el rol que corresponde a tu codigo. El propietario y el inquilino usan codigos distintos incluso en el mismo contrato.',
    signInToLease: (leaseId) => `Inicia sesion en el contrato ${leaseId}`,
    signOut: 'Cerrar sesion',
    start: 'Inicio',
    tenant: 'Inquilino',
    tenantCheckInDetail:
      'Esta marca de tiempo se actualiza cuando un inquilino entra en el portal.',
    tenantLabel: 'Inquilino',
    tenantLastCheckIn: 'Ultimo acceso del inquilino',
    unlockLeasePortal: 'Abrir portal del contrato',
    upcomingPayment: 'Proximo pago',
    upcomingPaymentDetail: (date) => `El siguiente cobro esta previsto para ${date}.`,
    untitledExpense: 'Gasto sin titulo',
    waitingForSignIn: 'Esperando inicio de sesion',
    whatYouWillSee: 'Lo que veras',
    whatYouWillSeeSubtitle: 'Ambos roles leen el mismo resumen del contrato.',
  },
  de: {
    activeTenant: 'Aktiver Mieter',
    brandSubtitle: 'Mietportal',
    checkingAccess: 'Zugriff wird gepruft',
    clipboardUnavailable: 'Die Zwischenablage ist in diesem Browser nicht verfugbar.',
    closePreview: 'Vorschau schliessen',
    copyLeaseLink: 'Mietlink kopieren',
    dateRangeSeparator: 'bis',
    documents: 'Dokumente',
    download: 'Herunterladen',
    downloadZip: 'ZIP herunterladen',
    end: 'Ende',
    expenseInvoicesAria: 'Rechnungen der Ausgabe',
    expenseSchedule: 'Intervall',
    expenses: 'Ausgaben',
    factGallery: 'Geteilte Bilder mit Vorschau-, Offnen- und Download-Aktionen.',
    factMetadata: 'Mieter-Anmeldungen werden fur den Vermieter in den Portal-Metadaten erfasst.',
    factPayments: 'Das nachste Zahlungsdatum und ob die Miete bezahlt oder uberfallig ist.',
    factSharedDocuments: 'Geteilte Dokumente konnen in einem neuen Tab geoffnet werden.',
    featurePasscodeText:
      'Vermieter und Mieter verwenden unterschiedliche Codes. Kein personliches Konto, kein E-Mail-Login und keine Registrierung erforderlich.',
    featurePasscodeTitle: 'Code-Zugang',
    featureRentVisibilityText:
      'Das Portal zeigt den nachsten Zahlungstag sowie den bezahlten oder uberfalligen Status.',
    featureRentVisibilityTitle: 'Mietuberblick',
    featureSharedText:
      'Jede Portal-Route gehort nur zu einem Mietvertrag, damit Dokumente, Bilder und Ausgaben beim richtigen Mietverhaltnis bleiben.',
    featureSharedTitle: 'Nach Vertrag geteilt',
    frequencyBiWeekly: 'Alle zwei Wochen',
    frequencyDaily: 'Taglich',
    frequencyMonthly: 'Monatlich',
    frequencyOneOff: 'Einmalige Zahlung',
    frequencyQuarterly: 'Vierteljahrlich',
    frequencySixMonths: 'Alle 6 Monate',
    frequencyUniquePayment: 'Einmalige Zahlung',
    frequencyWeekly: 'Wochentlich',
    frequencyYearly: 'Jahrlich',
    gallery: 'Galerie',
    galleryDownloadFailed: 'Dieses Bild konnte nicht heruntergeladen werden.',
    galleryImage: 'Galeriebild',
    galleryZipFailed:
      'Die ZIP-Datei konnte nicht vorbereitet werden. Manche externen Bilder blockieren Browser-Downloads.',
    heroSubtitleFallback:
      'Verwende den rollenbezogenen Code aus dem Benachrichtigungscenter, um diesen Vertrag zu laden.',
    incompleteLeaseLink: 'Der Mietlink oder der Code war unvollstandig.',
    invalidPasscode: 'Der Code passt nicht zu diesem Vertrag oder dieser Rolle.',
    invoice: 'Rechnung',
    landlord: 'Vermieter',
    languageLabel: 'Sprache',
    landingIntro:
      'My Rents sendet jedem Vertrag einen eigenen Portal-Link und eigene Codes. Offne die genaue URL aus der Erinnerungs-E-Mail, wahlen deine Rolle und melde dich mit dem fur diesen Vertrag vorgesehenen Code an.',
    landingTitle: 'Offne den Vertragsbereich ohne neues Konto.',
    leaseIdLabel: 'Vertrags-ID',
    leaseIdPlaceholder: 'Fuge die Vertrags-ID aus dem Portal-Link ein',
    leaseLinkMissing: 'Im Link fehlt eine gultige Vertrags-ID.',
    leaseWorkspace: 'Vertragsbereich',
    leaseOverview: 'Vertragsubersicht',
    leaseOverviewLandlordSubtitle:
      'Dieser Bereich zeigt genau das, was der Mieter fur diesen Vertrag sieht.',
    leaseWindow: 'Vertragszeitraum',
    linkCopied: 'Link kopiert',
    loadingLeaseText: 'Geteilte Dateien, Bilder, Ausgaben und Zahlungsstatus werden geladen.',
    loadingLeaseTitle: 'Vertragsansicht wird geladen',
    localQaShortcut: 'Lokaler QA-Kurzbefehl',
    nextImage: 'Nächstes Bild',
    nextPayday: 'Nächster Zahlungstag',
    noDocumentsText:
      'Der Vermieter hat fur dieses Portal noch keine Vertragsdokumente veroffentlicht.',
    noDocumentsTitle: 'Noch keine geteilten Dokumente',
    noExpensesText: 'Dieser Vertrag zeigt derzeit keine Ausgaben im Portal an.',
    noExpensesTitle: 'Keine geteilten Ausgaben',
    noGalleryText: 'Bilder erscheinen hier, sobald sie fur diesen Vertrag veroffentlicht wurden.',
    noGalleryTitle: 'Keine geteilten Bilder',
    notAvailable: 'Nicht verfugbar',
    notLoaded: 'Nicht geladen',
    notRecordedYet: 'Noch nicht erfasst',
    notSpecified: 'Nicht angegeben',
    open: 'Offnen',
    openDemoPortal: 'Demo-Portal offnen',
    openPortal: 'Portal offnen',
    paidDetail: 'Dieser Vertrag ist derzeit als vollstandig bezahlt markiert.',
    paidUp: 'Bezahlt',
    passcode: 'Code',
    passcodePlaceholder: 'Code aus dem Benachrichtigungscenter eingeben',
    paymentOverdue: 'Zahlung uberfallig',
    paymentOverdueDetail: (date) => `Die nachste Miete war am ${date} fallig.`,
    paymentStatus: 'Zahlungsstatus',
    paymentStatusLoadingDetail: 'Der Mietstatus erscheint, sobald das Portal geladen ist.',
    portalLinkCopyFailed: 'Der Portal-Link konnte nicht kopiert werden.',
    portalUnavailable: 'Portal nicht verfugbar',
    portalUpdated: 'Portal aktualisiert',
    portalUpdatedDetail: 'Das Portal spiegelt den zuletzt veroffentlichten Vertragsstand wider.',
    preparingZip: 'ZIP wird vorbereitet...',
    previousImage: 'Vorheriges Bild',
    published: 'Veröffentlicht',
    rentAmount: 'Mietbetrag',
    rentAmountLoadingDetail: 'Wird angezeigt, sobald die Vertragsansicht geladen ist.',
    restoringSessionText: 'Das Portal pruft, ob dieser Browser bereits Zugriff hat.',
    restoringSessionTitle: 'Vertragssitzung wird wiederhergestellt',
    roleBasedAccess: 'Rollenbasierter Zugriff',
    scheduleUnavailable: 'Zeitplan nicht verfugbar',
    scheduleUnavailableDetail:
      'Das nachste Zahlungsdatum wurde noch nicht im Portal veroffentlicht.',
    secureLeasePortal: 'Sicheres Mietportal',
    sessionExpired: 'Diese Vertragssitzung ist abgelaufen. Melde dich erneut mit dem Code an.',
    sharedExpenseTotal: 'Gesamte geteilte Ausgaben',
    sharedItems: 'Geteilte Elemente',
    sharedItemsDetail: 'Dokumente und Bilder, die fur diesen Vertrag sichtbar sind.',
    sharedLeasePortal: 'Geteiltes Vertragsportal',
    signInDescription:
      'Wahle die Rolle passend zu deinem Code. Vermieter und Mieter haben selbst im gleichen Vertrag unterschiedliche Codes.',
    signInToLease: (leaseId) => `Bei Vertrag ${leaseId} anmelden`,
    signOut: 'Abmelden',
    start: 'Start',
    tenant: 'Mieter',
    tenantCheckInDetail:
      'Dieser Zeitstempel wird aktualisiert, nachdem sich ein Mieter im Portal anmeldet.',
    tenantLabel: 'Mieter',
    tenantLastCheckIn: 'Letzter Mieter-Login',
    unlockLeasePortal: 'Vertragsportal offnen',
    upcomingPayment: 'Bevorstehende Zahlung',
    upcomingPaymentDetail: (date) => `Die nächste Miete ist fur ${date} geplant.`,
    untitledExpense: 'Ausgabe ohne Titel',
    waitingForSignIn: 'Wartet auf Anmeldung',
    whatYouWillSee: 'Das sehen Sie',
    whatYouWillSeeSubtitle: 'Beide Rollen lesen dieselbe Vertragsansicht.',
  },
  fr: {
    activeTenant: 'Locataire actif',
    brandSubtitle: 'Portail du bail',
    checkingAccess: "Verification de l'acces",
    clipboardUnavailable: "Le presse-papiers n'est pas disponible dans ce navigateur.",
    closePreview: "Fermer l'aperçu",
    copyLeaseLink: 'Copier le lien du bail',
    dateRangeSeparator: 'au',
    documents: 'Documents',
    download: 'Telecharger',
    downloadZip: 'Telecharger le ZIP',
    end: 'Fin',
    expenseInvoicesAria: 'Factures de la depense',
    expenseSchedule: 'Frequence',
    expenses: 'Depenses',
    factGallery: 'Images partagees avec des actions pour previsualiser, ouvrir et telecharger.',
    factMetadata:
      'Les acces du locataire sont enregistres pour le proprietaire dans les metadonnees du portail.',
    factPayments: 'La prochaine echeance et si le loyer est paye ou en retard.',
    factSharedDocuments: "Documents partages disponibles a l'ouverture dans un nouvel onglet.",
    featurePasscodeText:
      'Le proprietaire et le locataire utilisent des codes differents. Aucun compte, aucun e-mail et aucune inscription necessaires.',
    featurePasscodeTitle: 'Acces par code',
    featureRentVisibilityText:
      'Le portail affiche la prochaine echeance et si le loyer est totalement paye ou en retard.',
    featureRentVisibilityTitle: 'Visibilite du loyer',
    featureSharedText:
      'Chaque route du portail correspond a un seul bail, afin que documents, images et depenses restent lies au bon locataire.',
    featureSharedTitle: 'Partage par bail',
    frequencyBiWeekly: 'Toutes les deux semaines',
    frequencyDaily: 'Quotidien',
    frequencyMonthly: 'Mensuel',
    frequencyOneOff: 'Paiement unique',
    frequencyQuarterly: 'Trimestriel',
    frequencySixMonths: 'Tous les 6 mois',
    frequencyUniquePayment: 'Paiement unique',
    frequencyWeekly: 'Hebdomadaire',
    frequencyYearly: 'Annuel',
    gallery: 'Galerie',
    galleryDownloadFailed: "Cette image n'a pas pu etre telechargee.",
    galleryImage: 'Image de la galerie',
    galleryZipFailed:
      "Le ZIP n'a pas pu etre prepare. Certaines images distantes peuvent bloquer le telechargement dans le navigateur.",
    heroSubtitleFallback:
      'Utilisez le code correspondant au role depuis le centre de notifications pour charger ce bail.',
    incompleteLeaseLink: 'Le lien du bail ou le code etait incomplet.',
    invalidPasscode: 'Le code ne correspond pas a ce bail ou a ce role.',
    invoice: 'Facture',
    landlord: 'Proprietaire',
    languageLabel: 'Langue',
    landingIntro:
      "My Rents envoie a chaque bail son propre lien de portail et ses codes. Ouvrez l'URL exacte depuis l'e-mail de rappel, choisissez votre role et connectez-vous avec le code attribue a ce bail.",
    landingTitle: "Ouvrez l'espace du bail sans creer un nouveau compte.",
    leaseIdLabel: 'ID du bail',
    leaseIdPlaceholder: "Collez l'ID du bail depuis le lien du portail",
    leaseLinkMissing: "Le lien ne contient pas d'ID de bail valide.",
    leaseWorkspace: 'Espace du bail',
    leaseOverview: "Vue d'ensemble du bail",
    leaseOverviewLandlordSubtitle: 'Cet espace reflète ce que le locataire peut voir pour ce bail.',
    leaseWindow: 'Periode du bail',
    linkCopied: 'Lien copie',
    loadingLeaseText:
      'Les fichiers partages, les images, les depenses et le statut de paiement arrivent.',
    loadingLeaseTitle: 'Chargement du resume du bail',
    localQaShortcut: 'Raccourci QA local',
    nextImage: 'Image suivante',
    nextPayday: 'Prochaine echeance',
    noDocumentsText: "Le proprietaire n'a pas encore publie de documents pour ce portail.",
    noDocumentsTitle: 'Aucun document partage pour le moment',
    noExpensesText: "Ce bail n'expose actuellement aucune depense via le portail.",
    noExpensesTitle: 'Aucune depense partagee',
    noGalleryText: 'Les images apparaitront ici une fois publiees pour ce bail.',
    noGalleryTitle: 'Aucune image partagee',
    notAvailable: 'Non disponible',
    notLoaded: 'Non charge',
    notRecordedYet: 'Pas encore enregistre',
    notSpecified: 'Non renseigne',
    open: 'Ouvrir',
    openDemoPortal: 'Ouvrir le portail demo',
    openPortal: 'Ouvrir le portail',
    paidDetail: 'Ce bail est actuellement marque comme entierement paye.',
    paidUp: 'A jour',
    passcode: 'Code',
    passcodePlaceholder: 'Saisissez le code du centre de notifications',
    paymentOverdue: 'Paiement en retard',
    paymentOverdueDetail: (date) => `Le prochain loyer etait prevu le ${date}.`,
    paymentStatus: 'Etat du paiement',
    paymentStatusLoadingDetail: "L'etat du loyer apparait une fois le portail charge.",
    portalLinkCopyFailed: "Le lien du portail n'a pas pu etre copie.",
    portalUnavailable: 'Portail indisponible',
    portalUpdated: 'Portail mis a jour',
    portalUpdatedDetail: 'Le portail reflète la derniere version publiee du bail.',
    preparingZip: 'Preparation du ZIP...',
    previousImage: 'Image precedente',
    published: 'Publie',
    rentAmount: 'Montant du loyer',
    rentAmountLoadingDetail: 'Affiche lorsque le resume du bail est charge.',
    restoringSessionText: 'Le portail verifie si ce navigateur a deja acces a ce bail.',
    restoringSessionTitle: 'Restauration de la session du bail',
    roleBasedAccess: 'Acces selon le role',
    scheduleUnavailable: 'Frequence indisponible',
    scheduleUnavailableDetail:
      "La prochaine date de paiement n'a pas encore ete publiee dans le portail.",
    secureLeasePortal: 'Portail securise du bail',
    sessionExpired: 'La session de ce bail a expire. Connectez-vous de nouveau avec le code.',
    sharedExpenseTotal: 'Total des depenses partagees',
    sharedItems: 'Elements partages',
    sharedItemsDetail: 'Documents et images visibles pour ce bail.',
    sharedLeasePortal: 'Portail de bail partage',
    signInDescription:
      'Choisissez le role correspondant a votre code. Les codes du proprietaire et du locataire sont differents, meme pour le meme bail.',
    signInToLease: (leaseId) => `Se connecter au bail ${leaseId}`,
    signOut: 'Se deconnecter',
    start: 'Debut',
    tenant: 'Locataire',
    tenantCheckInDetail:
      "Cet horodatage est mis a jour lorsqu'un locataire se connecte au portail.",
    tenantLabel: 'Locataire',
    tenantLastCheckIn: 'Derniere connexion du locataire',
    unlockLeasePortal: 'Ouvrir le portail du bail',
    upcomingPayment: 'Paiement a venir',
    upcomingPaymentDetail: (date) => `Le prochain loyer est prevu pour le ${date}.`,
    untitledExpense: 'Depense sans titre',
    waitingForSignIn: 'En attente de connexion',
    whatYouWillSee: 'Ce que vous verrez',
    whatYouWillSeeSubtitle: 'Les deux roles lisent le meme resume du bail.',
  },
  it: {
    activeTenant: 'Inquilino attivo',
    brandSubtitle: 'Portale del contratto',
    checkingAccess: 'Verifica accesso',
    clipboardUnavailable: 'Gli appunti non sono disponibili in questo browser.',
    closePreview: 'Chiudi anteprima',
    copyLeaseLink: 'Copia link del contratto',
    dateRangeSeparator: 'al',
    documents: 'Documenti',
    download: 'Scarica',
    downloadZip: 'Scarica ZIP',
    end: 'Fine',
    expenseInvoicesAria: 'Fatture della spesa',
    expenseSchedule: 'Frequenza',
    expenses: 'Spese',
    factGallery: 'Immagini condivise con azioni per anteprima, apertura e download.',
    factMetadata:
      "Gli accessi dell'inquilino vengono registrati per il proprietario nei metadati del portale.",
    factPayments: "La prossima scadenza e se l'affitto e pagato o in ritardo.",
    factSharedDocuments: "Documenti condivisi disponibili per l'apertura in una nuova scheda.",
    featurePasscodeText:
      'Proprietario e inquilino usano codici diversi. Nessun account personale, nessun login e-mail e nessuna registrazione.',
    featurePasscodeTitle: 'Accesso con codice',
    featureRentVisibilityText:
      "Il portale mostra la prossima scadenza e se l'affitto e completamente pagato o in ritardo.",
    featureRentVisibilityTitle: "Visibilita dell'affitto",
    featureSharedText:
      "Ogni percorso del portale corrisponde a un solo contratto, cosi documenti, immagini e spese restano associati al giusto rapporto con l'inquilino.",
    featureSharedTitle: 'Condiviso per contratto',
    frequencyBiWeekly: 'Ogni due settimane',
    frequencyDaily: 'Giornaliero',
    frequencyMonthly: 'Mensile',
    frequencyOneOff: 'Pagamento unico',
    frequencyQuarterly: 'Trimestrale',
    frequencySixMonths: 'Ogni 6 mesi',
    frequencyUniquePayment: 'Pagamento unico',
    frequencyWeekly: 'Settimanale',
    frequencyYearly: 'Annuale',
    gallery: 'Galleria',
    galleryDownloadFailed: 'Impossibile scaricare questa immagine.',
    galleryImage: 'Immagine della galleria',
    galleryZipFailed:
      'Impossibile preparare il file ZIP. Alcune immagini remote potrebbero bloccare il download nel browser.',
    heroSubtitleFallback:
      'Usa il codice relativo al ruolo dal centro notifiche per caricare questo contratto.',
    incompleteLeaseLink: 'Il link del contratto o il codice erano incompleti.',
    invalidPasscode: 'Il codice non corrisponde a questo contratto o ruolo.',
    invoice: 'Fattura',
    landlord: 'Proprietario',
    languageLabel: 'Lingua',
    landingIntro:
      "My Rents invia a ogni contratto il proprio link del portale e i propri codici. Apri l'URL esatto dall'e-mail di promemoria, scegli il tuo ruolo e accedi con il codice assegnato a questo contratto.",
    landingTitle: 'Apri lo spazio del contratto senza creare un nuovo account.',
    leaseIdLabel: 'ID contratto',
    leaseIdPlaceholder: "Incolla l'ID del contratto dal link del portale",
    leaseLinkMissing: 'Nel link manca un ID contratto valido.',
    leaseWorkspace: 'Spazio del contratto',
    leaseOverview: 'Panoramica del contratto',
    leaseOverviewLandlordSubtitle:
      "Questo spazio mostra esattamente cio che puo vedere l'inquilino per questo contratto.",
    leaseWindow: 'Periodo del contratto',
    linkCopied: 'Link copiato',
    loadingLeaseText: 'File condivisi, immagini, spese e stato dei pagamenti stanno arrivando.',
    loadingLeaseTitle: 'Caricamento del riepilogo del contratto',
    localQaShortcut: 'Scorciatoia QA locale',
    nextImage: 'Immagine successiva',
    nextPayday: 'Prossima scadenza',
    noDocumentsText: 'Il proprietario non ha ancora pubblicato documenti per questo portale.',
    noDocumentsTitle: 'Nessun documento condiviso',
    noExpensesText: 'Questo contratto non espone al momento elementi di spesa nel portale.',
    noExpensesTitle: 'Nessuna spesa condivisa',
    noGalleryText: 'Le immagini appariranno qui quando verranno pubblicate per questo contratto.',
    noGalleryTitle: 'Nessuna immagine condivisa',
    notAvailable: 'Non disponibile',
    notLoaded: 'Non caricato',
    notRecordedYet: 'Non ancora registrato',
    notSpecified: 'Non specificato',
    open: 'Apri',
    openDemoPortal: 'Apri portale demo',
    openPortal: 'Apri portale',
    paidDetail: 'Questo contratto risulta completamente pagato in questo momento.',
    paidUp: 'Pagato',
    passcode: 'Codice',
    passcodePlaceholder: 'Inserisci il codice dal centro notifiche',
    paymentOverdue: 'Pagamento in ritardo',
    paymentOverdueDetail: (date) => `Il prossimo affitto era previsto per il ${date}.`,
    paymentStatus: 'Stato del pagamento',
    paymentStatusLoadingDetail: "Lo stato dell'affitto apparira quando il portale sara caricato.",
    portalLinkCopyFailed: 'Impossibile copiare il link del portale.',
    portalUnavailable: 'Portale non disponibile',
    portalUpdated: 'Portale aggiornato',
    portalUpdatedDetail: "Il portale riflette l'ultima versione pubblicata del contratto.",
    preparingZip: 'Preparazione ZIP...',
    previousImage: 'Immagine precedente',
    published: 'Pubblicato',
    rentAmount: 'Importo affitto',
    rentAmountLoadingDetail: 'Mostrato quando il riepilogo del contratto viene caricato.',
    restoringSessionText: 'Il portale sta verificando se questo browser ha gia accesso.',
    restoringSessionTitle: 'Ripristino della sessione del contratto',
    roleBasedAccess: 'Accesso per ruolo',
    scheduleUnavailable: 'Frequenza non disponibile',
    scheduleUnavailableDetail:
      'La prossima data di pagamento non e ancora stata pubblicata nel portale.',
    secureLeasePortal: 'Portale sicuro del contratto',
    sessionExpired: 'La sessione di questo contratto e scaduta. Accedi di nuovo con il codice.',
    sharedExpenseTotal: 'Totale spese condivise',
    sharedItems: 'Elementi condivisi',
    sharedItemsDetail: 'Documenti e immagini visibili per questo contratto.',
    sharedLeasePortal: 'Portale contratto condiviso',
    signInDescription:
      'Scegli il ruolo corrispondente al tuo codice. Proprietario e inquilino usano codici diversi anche nello stesso contratto.',
    signInToLease: (leaseId) => `Accedi al contratto ${leaseId}`,
    signOut: 'Esci',
    start: 'Inizio',
    tenant: 'Inquilino',
    tenantCheckInDetail: 'Questo timestamp si aggiorna quando un inquilino accede al portale.',
    tenantLabel: 'Inquilino',
    tenantLastCheckIn: 'Ultimo accesso inquilino',
    unlockLeasePortal: 'Apri portale del contratto',
    upcomingPayment: 'Pagamento in arrivo',
    upcomingPaymentDetail: (date) => `Il prossimo affitto e previsto per il ${date}.`,
    untitledExpense: 'Spesa senza titolo',
    waitingForSignIn: 'In attesa di accesso',
    whatYouWillSee: 'Cosa vedrai',
    whatYouWillSeeSubtitle: 'Entrambi i ruoli leggono lo stesso riepilogo del contratto.',
  },
  pt: {
    activeTenant: 'Inquilino ativo',
    brandSubtitle: 'Portal do arrendamento',
    checkingAccess: 'A verificar acesso',
    clipboardUnavailable: 'A area de transferencia nao esta disponivel neste navegador.',
    closePreview: 'Fechar pre-visualizacao',
    copyLeaseLink: 'Copiar link do arrendamento',
    dateRangeSeparator: 'a',
    documents: 'Documentos',
    download: 'Transferir',
    downloadZip: 'Transferir ZIP',
    end: 'Fim',
    expenseInvoicesAria: 'Faturas da despesa',
    expenseSchedule: 'Frequencia',
    expenses: 'Despesas',
    factGallery: 'Imagens partilhadas com acoes para pre-visualizar, abrir e transferir.',
    factMetadata:
      'Os acessos do inquilino ficam registados para o senhorio nos metadados do portal.',
    factPayments: 'A proxima data de cobranca e se a renda esta paga ou em atraso.',
    factSharedDocuments: 'Documentos partilhados disponiveis para abrir num novo separador.',
    featurePasscodeText:
      'Senhorio e inquilino usam codigos diferentes. Nao e necessaria conta pessoal, login por email ou registo.',
    featurePasscodeTitle: 'Acesso por codigo',
    featureRentVisibilityText:
      'O portal mostra a proxima data de cobranca e se a renda esta totalmente paga ou em atraso.',
    featureRentVisibilityTitle: 'Visibilidade da renda',
    featureSharedText:
      'Cada rota do portal corresponde apenas a um contrato, para que documentos, imagens e despesas fiquem associados ao inquilino certo.',
    featureSharedTitle: 'Partilhado por contrato',
    frequencyBiWeekly: 'De duas em duas semanas',
    frequencyDaily: 'Diario',
    frequencyMonthly: 'Mensal',
    frequencyOneOff: 'Pagamento unico',
    frequencyQuarterly: 'Trimestral',
    frequencySixMonths: 'De 6 em 6 meses',
    frequencyUniquePayment: 'Pagamento unico',
    frequencyWeekly: 'Semanal',
    frequencyYearly: 'Anual',
    gallery: 'Galeria',
    galleryDownloadFailed: 'Nao foi possivel transferir esta imagem.',
    galleryImage: 'Imagem da galeria',
    galleryZipFailed:
      'Nao foi possivel preparar o ficheiro ZIP. Algumas imagens remotas podem bloquear a transferencia no navegador.',
    heroSubtitleFallback:
      'Use o codigo do centro de notificacoes correspondente ao papel para carregar este contrato.',
    incompleteLeaseLink: 'O link do contrato ou o codigo estavam incompletos.',
    invalidPasscode: 'O codigo nao corresponde a este contrato ou papel.',
    invoice: 'Fatura',
    landlord: 'Senhorio',
    languageLabel: 'Idioma',
    landingIntro:
      'A My Rents envia a cada contrato o seu proprio link de portal e codigos. Abra o URL exato no email de lembrete, escolha o seu papel e entre com o codigo atribuido a este contrato.',
    landingTitle: 'Abra o espaco do contrato sem criar uma nova conta.',
    leaseIdLabel: 'ID do contrato',
    leaseIdPlaceholder: 'Cole o ID do contrato a partir do link do portal',
    leaseLinkMissing: 'O link nao inclui um ID de contrato valido.',
    leaseWorkspace: 'Espaco do contrato',
    leaseOverview: 'Resumo do contrato',
    leaseOverviewLandlordSubtitle:
      'Este espaco reflete exatamente o que o inquilino consegue ver neste contrato.',
    leaseWindow: 'Periodo do contrato',
    linkCopied: 'Link copiado',
    loadingLeaseText:
      'Os ficheiros partilhados, imagens, despesas e estado dos pagamentos estao a caminho.',
    loadingLeaseTitle: 'A carregar o resumo do contrato',
    localQaShortcut: 'Atalho QA local',
    nextImage: 'Imagem seguinte',
    nextPayday: 'Proximo recebimento',
    noDocumentsText: 'O senhorio ainda nao publicou documentos deste contrato no portal.',
    noDocumentsTitle: 'Ainda nao existem documentos partilhados',
    noExpensesText: 'Este contrato nao expõe atualmente despesas no portal.',
    noExpensesTitle: 'Sem despesas partilhadas',
    noGalleryText: 'As imagens vao aparecer aqui depois de serem publicadas neste contrato.',
    noGalleryTitle: 'Sem imagens partilhadas',
    notAvailable: 'Nao disponivel',
    notLoaded: 'Nao carregado',
    notRecordedYet: 'Ainda nao registado',
    notSpecified: 'Nao especificado',
    open: 'Abrir',
    openDemoPortal: 'Abrir portal demo',
    openPortal: 'Abrir portal',
    paidDetail: 'Este contrato esta marcado como totalmente pago neste momento.',
    paidUp: 'Pago',
    passcode: 'Codigo',
    passcodePlaceholder: 'Introduza o codigo do centro de notificacoes',
    paymentOverdue: 'Pagamento em atraso',
    paymentOverdueDetail: (date) => `A proxima renda vencia em ${date}.`,
    paymentStatus: 'Estado do pagamento',
    paymentStatusLoadingDetail: 'O estado da renda aparece assim que o portal estiver carregado.',
    portalLinkCopyFailed: 'Nao foi possivel copiar o link do portal.',
    portalUnavailable: 'Portal indisponivel',
    portalUpdated: 'Portal atualizado',
    portalUpdatedDetail: 'O portal reflete a ultima versao publicada do contrato.',
    preparingZip: 'A preparar ZIP...',
    previousImage: 'Imagem anterior',
    published: 'Publicado',
    rentAmount: 'Valor da renda',
    rentAmountLoadingDetail: 'Mostrado quando o resumo do contrato for carregado.',
    restoringSessionText: 'O portal esta a verificar se este navegador ja tem acesso.',
    restoringSessionTitle: 'A restaurar a sessao do contrato',
    roleBasedAccess: 'Acesso por papel',
    scheduleUnavailable: 'Frequencia indisponivel',
    scheduleUnavailableDetail: 'A proxima data de pagamento ainda nao foi publicada no portal.',
    secureLeasePortal: 'Portal seguro do contrato',
    sessionExpired: 'A sessao deste contrato expirou. Entre novamente com o codigo.',
    sharedExpenseTotal: 'Total de despesas partilhadas',
    sharedItems: 'Itens partilhados',
    sharedItemsDetail: 'Documentos e imagens visiveis neste contrato.',
    sharedLeasePortal: 'Portal do contrato partilhado',
    signInDescription:
      'Escolha o papel correspondente ao seu codigo. Senhorio e inquilino usam codigos diferentes mesmo no mesmo contrato.',
    signInToLease: (leaseId) => `Entrar no contrato ${leaseId}`,
    signOut: 'Sair',
    start: 'Inicio',
    tenant: 'Inquilino',
    tenantCheckInDetail:
      'Este registo de tempo e atualizado depois de um inquilino entrar no portal.',
    tenantLabel: 'Inquilino',
    tenantLastCheckIn: 'Ultimo acesso do inquilino',
    unlockLeasePortal: 'Abrir portal do contrato',
    upcomingPayment: 'Pagamento futuro',
    upcomingPaymentDetail: (date) => `A proxima renda esta prevista para ${date}.`,
    untitledExpense: 'Despesa sem titulo',
    waitingForSignIn: 'A aguardar entrada',
    whatYouWillSee: 'O que vai ver',
    whatYouWillSeeSubtitle: 'Ambos os papeis leem o mesmo resumo do contrato.',
  },
}

export function resolvePortalLanguage(value?: string | null): PortalLanguage {
  const normalized = value?.trim().toLowerCase() ?? ''

  if (normalized.startsWith('es')) {
    return 'es'
  }

  if (normalized.startsWith('de')) {
    return 'de'
  }

  if (normalized.startsWith('fr')) {
    return 'fr'
  }

  if (normalized.startsWith('it')) {
    return 'it'
  }

  if (normalized.startsWith('pt')) {
    return 'pt'
  }

  return 'en'
}
