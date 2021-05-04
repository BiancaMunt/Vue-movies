import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App Testing', () => {
  let wrapper;

  wrapper = shallowMount(App, {
    stubs: ['router-link', 'router-view']
  })
  it('should render #app', () => {
    expect(wrapper.find('#app').exists()).toBe(true)
  })
})
