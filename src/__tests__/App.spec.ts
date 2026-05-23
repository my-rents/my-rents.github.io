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

    expect(wrapper.text()).toContain('One app. All your rentals. No chaos.')
    expect(wrapper.text()).toContain('Why landlords switch to My Rents')
    expect(wrapper.text()).toContain('Trusted by 5,000+ landlords')
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

  it('redirects unknown routes to home', async () => {
    await router.push('/missing-page')

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    expect(router.currentRoute.value.name).toBe('home')
    expect(wrapper.text()).toContain('One app. All your rentals. No chaos.')
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

    expect(wrapper.text()).toContain('Una sola app. Todos tus alquileres. Sin caos.')
    expect(wrapper.text()).toContain('Por qué se complica')
  })

  it('renders german copy when the locale is set to german', async () => {
    window.localStorage.setItem('my-rents-locale', 'de')

    await router.push('/')

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    expect(wrapper.text()).toContain('Schluss mit dem Verwaltungschaos bei Vermietungen')
    expect(wrapper.text()).toContain('Warum es unübersichtlich wird')
    expect(document.documentElement.lang).toBe('de')
  })

  it('switches locale from the footer dropdown and persists it', async () => {
    await router.push('/')

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    const languageSelect = wrapper.get('.site-footer__language-select')

    expect(languageSelect.findAll('option')).toHaveLength(6)

    await languageSelect.setValue('pt')
    await flushPromises()

    expect(wrapper.text()).toContain('Acabe com o caos administrativo dos alugueres')
    expect(window.localStorage.getItem('my-rents-locale')).toBe('pt')
    expect(document.documentElement.lang).toBe('pt-PT')
  })
})
