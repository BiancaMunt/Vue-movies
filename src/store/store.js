import Vue from 'vue'
import Vuex from 'vuex'
import AppServices from '../services/AppServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shows: [],
    query: '',
  },
  mutations: {
    setAllShows(state, listShows) {
      state.shows = listShows;
    },
    updateSearch(state, query){state.query = query;},
  },
  getters: {
    getFirstTenShows: state => {
      if(state.shows)
      return state.shows.slice(0,10)
    },
    getSearchedShows: state => {
      return state.shows.filter((show) => {
        return show.name.toLowerCase().includes(state.query)})
    }
  },
  actions: {
    async getAllData ({ commit }) {
      let shows = await AppServices.getAllShows();
      if(shows){
        commit('setAllShows', shows.data);
      }
    },
    async searchShows ({ commit }, query) {
      commit('updateSearch', query);
    },
  },
})
