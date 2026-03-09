import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'

import FaqSection from '@/components/sections/FaqSection/FaqSection.vue'

describe('FaqSection', () => {
  it('switches the open accordion item when a question is clicked', async () => {
    const wrapper = mount(FaqSection)

    expect(wrapper.findAll('.accordion-item--open')).toHaveLength(1)
    expect(wrapper.find('.accordion-item--open').text()).toContain(
      'How does My Rents help me manage multiple properties?',
    )

    const triggers = wrapper.findAll('.accordion-item__trigger')
    await triggers[4]?.trigger('click')

    expect(wrapper.findAll('.accordion-item--open')).toHaveLength(1)
    expect(wrapper.find('.accordion-item--open').text()).toContain(
      'Can I track expenses and one-off bills?',
    )
  })
})
