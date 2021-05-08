import { createLocalVue, shallowMount } from '@vue/test-utils';
import Vuex from 'vuex'
import Shows from '@/components/Shows';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Shows component Testing', () => {
  let wrapper;
  let actions;
  let store;
  let getters;

  beforeEach(() => {
    actions = {
      getAllData: jest.fn(),
    };

    getters = {
      getSearchedShows: jest.fn(),
      getGenres: jest.fn(),
    };

    store = new Vuex.Store({
      state: {},
      getters,
      actions
    });

    wrapper = shallowMount(Shows,{ localVue, store, stubs: ['router-link', 'router-view'] })
  })

  afterEach(() => {
    wrapper.destroy();
  });

  it('should load Shows', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should call getAllData action', async () => {
    expect(await actions.getAllData).toHaveBeenCalledTimes(1);
  });

  it('should call getSearchedShows getter', async () => {
    expect(await getters.getGenres).toHaveBeenCalledTimes(1);
  });

});
