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

    expect(wrapper.text()).toContain('Expert consulting that drives real growth')
    expect(wrapper.text()).toContain('Flexible pricing tailored to your business needs')
  })

  it('renders the legal page route', async () => {
    await router.push('/privacy-policy')

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    expect(wrapper.text()).toContain('How we handle form submissions and visitor information')
  })
})
