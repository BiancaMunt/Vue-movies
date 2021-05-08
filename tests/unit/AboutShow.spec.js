import { shallowMount } from '@vue/test-utils';
import AboutShow from '@/views/AboutShow';

describe('Shows component Testing', () => {
  let wrapper;

  const $route = {
    params: {
      id: 11
    }
  }

  beforeEach(() => {
    wrapper = shallowMount(AboutShow,{ mocks: { $route }, stubs: ['router-link', 'router-view'] })
  })

  it('should load the AboutShow view', () => {
    expect(wrapper).toBeTruthy()
  });
})
