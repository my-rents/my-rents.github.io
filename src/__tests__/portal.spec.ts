import { beforeEach, describe, expect, it } from 'vitest'
import { clearPortalSession, loginToPortal, readPortalSession } from '../../portal/src/lib/portal'

describe('portal login service', () => {
  beforeEach(() => {
    window.sessionStorage.clear()
  })

  it('successfully logs in landlord with valid passcode GSDXPKHR for lease YDTkzWnErwO1RfxehAUL', async () => {
    const result = await loginToPortal('YDTkzWnErwO1RfxehAUL', 'landlord', 'GSDXPKHR')

    expect(result.leaseId).toBe('YDTkzWnErwO1RfxehAUL')
    expect(result.role).toBe('landlord')
    expect(result.portalView.rentTitle).toBe('Blv Green')
    expect(result.portalView.tenantName).toBe('Dani')
    expect(result.portalView.documents).toHaveLength(2)
    expect(result.portalView.gallery).toHaveLength(1)

    const session = readPortalSession('YDTkzWnErwO1RfxehAUL')
    expect(session).not.toBeNull()
    expect(session?.role).toBe('landlord')
    expect(session?.portalView.rentTitle).toBe('Blv Green')
  })

  it('successfully logs in tenant with valid passcode CSZJ5MRZ for lease YDTkzWnErwO1RfxehAUL', async () => {
    const result = await loginToPortal('YDTkzWnErwO1RfxehAUL', 'tenant', 'CSZJ5MRZ')

    expect(result.leaseId).toBe('YDTkzWnErwO1RfxehAUL')
    expect(result.role).toBe('tenant')
    expect(result.portalView.rentTitle).toBe('Blv Green')
    expect(result.portalView.tenantName).toBe('Dani')
  })

  it('handles lowercase or spaced passcodes correctly', async () => {
    const result = await loginToPortal('YDTkzWnErwO1RfxehAUL', 'tenant', ' cszj5mrz ')
    expect(result.role).toBe('tenant')
  })

  it('rejects wrong passcode for landlord on YDTkzWnErwO1RfxehAUL', async () => {
    await expect(loginToPortal('YDTkzWnErwO1RfxehAUL', 'landlord', 'WRONGCODE')).rejects.toThrow(
      'Invalid portal credentials.',
    )
  })

  it('rejects tenant passcode when attempting to sign in as landlord', async () => {
    await expect(loginToPortal('YDTkzWnErwO1RfxehAUL', 'landlord', 'CSZJ5MRZ')).rejects.toThrow(
      'Invalid portal credentials.',
    )
  })

  it('rejects landlord passcode when attempting to sign in as tenant', async () => {
    await expect(loginToPortal('YDTkzWnErwO1RfxehAUL', 'tenant', 'GSDXPKHR')).rejects.toThrow(
      'Invalid portal credentials.',
    )
  })

  it('rejects empty inputs with invalid-argument error', async () => {
    await expect(loginToPortal('', 'tenant', 'CSZJ5MRZ')).rejects.toThrow(
      'Lease, role, and passcode are required.',
    )
    await expect(loginToPortal('YDTkzWnErwO1RfxehAUL', 'tenant', '')).rejects.toThrow(
      'Lease, role, and passcode are required.',
    )
  })

  it('clears session properly', async () => {
    await loginToPortal('YDTkzWnErwO1RfxehAUL', 'tenant', 'CSZJ5MRZ')
    expect(readPortalSession('YDTkzWnErwO1RfxehAUL')).not.toBeNull()

    clearPortalSession()
    expect(readPortalSession('YDTkzWnErwO1RfxehAUL')).toBeNull()
  })
})
