import { beforeEach, describe, expect, it } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'

import App from '@/App.vue'
import router from '@/router'

describe('App', () => {
  beforeEach(async () => {
    await router.push('/')
    await router.isReady()
  })

  it('renders the landing page sections', async () => {
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    expect(wrapper.text()).toContain(
      'Manage properties, leases, expenses, reminders, and documents in one place',
    )
    expect(wrapper.text()).toContain('Choose how you want to unlock PRO')
    expect(wrapper.text()).toContain('Multilingual support')
  })

  it('renders the legal page route', async () => {
    await router.push('/privacy-policy')

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    expect(wrapper.text()).toContain('Privacy Policy for My Rents')
    expect(wrapper.text()).toContain('Who Controls Your Data')
  })

  it('renders spanish copy when the locale is set to spanish', async () => {
    window.localStorage.setItem('my-rents-locale', 'es')

    await router.push('/')

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    expect(wrapper.text()).toContain(
      'Gestiona propiedades, contratos, gastos, recordatorios y documentos en un solo lugar',
    )
    expect(wrapper.text()).toContain('Elige cómo quieres activar PRO')
  })
})
