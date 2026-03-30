import { httpsCallable } from 'firebase/functions'
import { functions } from './firebase'

export type PortalRole = 'landlord' | 'tenant'

export interface PortalSharedLink {
  link: string
  name: string
}

export interface PortalExpense {
  description: string
  frequency: string
  from: number | null
  id: string
  invoices: PortalSharedLink[]
  name: string
  price: number
  to: number | null
}

export interface PortalLeaseView {
  allPaid: boolean
  documents: PortalSharedLink[]
  enabled: boolean
  expenses: PortalExpense[]
  frequency: string
  gallery: PortalSharedLink[]
  lastLandlordLoginAt: number | null
  lastTenantLoginAt: number | null
  leaseDocumentId: string
  nextPaymentDate: number | null
  ownerUserId: string
  portfolioId: string
  rentAddress: string
  rentAmount: number
  rentId: string
  rentTitle: string
  tenantEmail: string
  tenantName: string
  from: number | null
  to: number | null
  updatedAt: number | null
}

interface PortalLoginRequest {
  leaseId: string
  passcode: string
  role: PortalRole
}

export interface PortalLoginResult {
  leaseId: string
  portalView: PortalLeaseView
  role: PortalRole
}

export interface PortalSession {
  leaseId: string
  portalView: PortalLeaseView
  role: PortalRole
}

const PORTAL_SESSION_STORAGE_KEY = 'my-rents-portal-session'

export async function loginToPortal(
  leaseId: string,
  role: PortalRole,
  passcode: string,
): Promise<PortalLoginResult> {
  const callPortalLogin = httpsCallable<PortalLoginRequest, PortalLoginResult>(
    functions,
    'portalLogin',
  )

  const result = await callPortalLogin({
    leaseId,
    passcode: passcode.trim().toUpperCase(),
    role,
  })

  const session: PortalSession = {
    leaseId: result.data.leaseId,
    portalView: mapPortalLeaseView(result.data.portalView),
    role: result.data.role,
  }

  persistPortalSession(session)

  return {
    leaseId: session.leaseId,
    portalView: session.portalView,
    role: session.role,
  }
}

export function readPortalSession(leaseId: string): PortalSession | null {
  const storage = getPortalSessionStorage()
  if (!storage) {
    return null
  }

  const rawSession = storage.getItem(PORTAL_SESSION_STORAGE_KEY)
  if (!rawSession) {
    return null
  }

  try {
    const data = asRecord(JSON.parse(rawSession))
    const sessionLeaseId = asString(data.leaseId)
    const role = asPortalRole(data.role)
    const portalView = mapPortalLeaseView(data.portalView)

    if (!sessionLeaseId || !role || sessionLeaseId !== leaseId) {
      clearPortalSession()
      return null
    }

    return {
      leaseId: sessionLeaseId,
      portalView,
      role,
    }
  } catch {
    clearPortalSession()
    return null
  }
}

export function clearPortalSession(): void {
  const storage = getPortalSessionStorage()
  storage?.removeItem(PORTAL_SESSION_STORAGE_KEY)
}

function mapPortalLeaseView(value: unknown): PortalLeaseView {
  const data = asRecord(value)

  return {
    allPaid: data.allPaid === true,
    documents: mapSharedLinks(data.documents, 'Shared document'),
    enabled: data.enabled === true,
    expenses: mapExpenses(data.expenses),
    frequency: asString(data.frequency),
    from: asNumber(data.from),
    gallery: mapSharedLinks(data.gallery, 'Shared image'),
    lastLandlordLoginAt: asNumber(data.lastLandlordLoginAt),
    lastTenantLoginAt: asNumber(data.lastTenantLoginAt),
    leaseDocumentId: asString(data.leaseDocumentId),
    nextPaymentDate: asNumber(data.nextPaymentDate),
    ownerUserId: asString(data.ownerUserId),
    portfolioId: asString(data.portfolioId),
    rentAddress: asString(data.rentAddress),
    rentAmount: asNumber(data.rentAmount) ?? 0,
    rentId: asString(data.rentId),
    rentTitle: asString(data.rentTitle),
    tenantEmail: asString(data.tenantEmail),
    tenantName: asString(data.tenantName),
    to: asNumber(data.to),
    updatedAt: asNumber(data.updatedAt),
  }
}

function mapSharedLinks(value: unknown, fallbackName: string): PortalSharedLink[] {
  return asArray(value)
    .map((item) => asRecord(item))
    .map((item) => {
      const link = asString(item.link)
      if (!link) {
        return null
      }

      const name = asString(item.name) || deriveNameFromLink(link, fallbackName)
      return { link, name }
    })
    .filter((item): item is PortalSharedLink => item !== null)
}

function mapExpenses(value: unknown): PortalExpense[] {
  return asArray(value).map((item, index) => {
    const data = asRecord(item)

    const invoiceSource = asArray(data.invoicesList).length ? data.invoicesList : data.invoices

    const invoices = asArray(invoiceSource)
      .map((invoiceItem) => asRecord(invoiceItem))
      .map((invoice) => {
        const link = asString(invoice.link)
        if (!link) {
          return null
        }

        return {
          name: asString(invoice.name) || deriveNameFromLink(link, 'Shared invoice'),
          link,
        }
      })
      .filter((invoice): invoice is PortalSharedLink => invoice !== null)

    return {
      description: asString(data.description),
      frequency: asString(data.frequency),
      from: asNumber(data.from),
      id: asString(data.id) || `expense-${index}`,
      invoices,
      name: asString(data.name),
      price: asNumber(data.price) ?? 0,
      to: asNumber(data.to),
    }
  })
}

function deriveNameFromLink(link: string, fallbackName: string): string {
  try {
    const url = new URL(link, window.location.origin)
    const filename = decodeURIComponent(url.pathname.split('/').filter(Boolean).pop() ?? '')
    return filename || fallbackName
  } catch {
    return fallbackName
  }
}

function asArray(value: unknown): unknown[] {
  return Array.isArray(value) ? value : []
}

function getPortalSessionStorage(): Storage | null {
  return typeof window === 'undefined' ? null : window.sessionStorage
}

function persistPortalSession(session: PortalSession): void {
  const storage = getPortalSessionStorage()
  if (!storage) {
    return
  }

  storage.setItem(PORTAL_SESSION_STORAGE_KEY, JSON.stringify(session))
}

function asNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value
  }

  if (typeof value === 'string' && value.trim()) {
    const parsed = Number(value)
    return Number.isFinite(parsed) ? parsed : null
  }

  return null
}

function asPortalRole(value: unknown): PortalRole | null {
  return value === 'landlord' || value === 'tenant' ? value : null
}

function asRecord(value: unknown): Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
    ? (value as Record<string, unknown>)
    : {}
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}
