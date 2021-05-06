import Vue from 'vue'
import Vuex from 'vuex'
import AppServices from '../services/AppServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shows: [],
    query: '',
    genres: [],
    isMain: true,
  },
  mutations: {
    setAllShows(state, listShows) {
      state.shows = listShows;
    },
    updateSearch(state, query){
      state.isMain = false;
      state.query = query;
    },
    clearSearch(state, query){
      state.isMain = true;
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
      let genres = state.shows.map((show) => show.genres).flat(); 
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
      if(query.length !== 0) {
        commit('updateSearch', query);
      } else {
        commit('clearSearch', query);
      }
    }
  },
})
