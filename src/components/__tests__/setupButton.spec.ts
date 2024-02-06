import { expect, test } from 'vitest'
import { mount, config } from '@vue/test-utils'
import SetupButton from '../setup/SetupButton.vue'
import { vuetify } from '@/main'
config.global.plugins = [vuetify]

test('Setup Button emits "setupProvider" event on click', () => {
  const wrapper = mount(SetupButton)
  wrapper.find('button').trigger('click')
  expect(wrapper.emitted()).toHaveProperty("setupProvider");
})
