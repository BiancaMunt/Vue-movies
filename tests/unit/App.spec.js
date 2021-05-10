import { shallowMount } from '@vue/test-utils';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from '@/App.vue';
import Home from '@/views/Home';

expect.extend(toHaveNoViolations)

describe('App Testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App, {
      stubs: ['router-link', 'router-view']
    });
  });

  afterEach(() => {
    wrapper.destroy();
  });
 
  it('should render #app', () => {
    expect(wrapper.find('#app').exists()).toBe(true)
  });

  it('should load Home', () => {
    expect(Home).toBeTruthy();
  });

  it('App.vue should be accesible', async() => {
    const { render } = require('@testing-library/vue')
    const { container } = render(App)
    const results = await axe(container)

    expect(() => {
      expect(results).toHaveNoViolations()
    })
  });
});
