import Vue from 'vue'
import Vuex from 'vuex'
import AppServices from '../services/AppServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shows: []
  },
  mutations: {
    setAllShows(state, listShows) {
      state.shows = listShows;
    },
  },
  getters: {
   
  },
  actions: {
    async getAllData ({ commit }) {
      let shows = await AppServices.getAllShows();
      if(shows){
        commit('setAllShows', shows.data);
      }
    },
  },
})
