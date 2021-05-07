import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import Home from '@/views/Home';

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
})
