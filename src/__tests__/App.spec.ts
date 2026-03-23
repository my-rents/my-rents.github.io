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

    expect(wrapper.text()).toContain('Stop rental admin chaos')
    expect(wrapper.text()).toContain('Choose your PRO plan')
    expect(wrapper.text()).toContain('Available in 6 languages')
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
    expect(wrapper.text()).toContain('Stop rental admin chaos')
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

    expect(wrapper.text()).toContain('Pon fin al caos administrativo')
    expect(wrapper.text()).toContain('Elige tu plan PRO')
  })
})
