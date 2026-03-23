import { beforeEach, describe, expect, it, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'

vi.mock('@/services/marketingPreferences', () => ({
  unsubscribeFromMarketingEmails: vi.fn(),
}))

import App from '@/App.vue'
import router from '@/router'
import { unsubscribeFromMarketingEmails } from '@/services/marketingPreferences'

const unsubscribeFromMarketingEmailsMock = vi.mocked(unsubscribeFromMarketingEmails)

describe('UnsubscribeView', () => {
  beforeEach(async () => {
    unsubscribeFromMarketingEmailsMock.mockReset()
    window.localStorage.removeItem('my-rents-locale')
    await router.push('/')
    await router.isReady()
  })

  it('saves an email address to the suppression list from the unsubscribe form', async () => {
    unsubscribeFromMarketingEmailsMock.mockResolvedValue('success')

    await router.push('/unsubscribe')

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await wrapper.find('input[type="email"]').setValue('person@example.com')
    await wrapper.find('form').trigger('submit.prevent')
    await flushPromises()

    expect(unsubscribeFromMarketingEmailsMock).toHaveBeenCalledWith('person@example.com')
    expect(wrapper.text()).toContain('This email has been unsubscribed')
    expect(wrapper.text()).toContain('We saved this address to our My Rents suppression list')
  })

  it('renders the email field before submission', async () => {
    await router.push('/unsubscribe')

    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    })

    await flushPromises()

    expect(wrapper.find('input[type="email"]').exists()).toBe(true)
    expect(wrapper.text()).toContain('Email address')
    expect(wrapper.text()).toContain('This page is for marketing emails only')
  })
})
