import Vue from 'vue'
import Vuex from 'vuex'
import AppServices from '../services/AppServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shows: [],
    query: '',
    genres: [],
    isSearch: false,
  },
  mutations: {
    setAllShows(state, listShows) {
      state.shows = listShows;
    },
    updateSearch(state, query){
      state.query = query;
    },
  },
  getters: {
    getFirstTenShows: state => {
      if(state.shows)
      return state.shows.slice(0,10)
    },
    getSearchedShows: state => {
      return state.shows.filter((show) => show.name.toLowerCase().includes(state.query))
    },
    getGenres: state => {
      let genres = state.shows.map((show) => show.genres).flat(); // creates an array of all the genres received from the api call
      const unique = Array.from(new Set(genres)); // new Set creates an array of all the unique genres - removes the duplicates
      state.genres = unique;
      return state.genres;
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
    }
  },
})
