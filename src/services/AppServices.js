import { API } from '@/services/api';

export default {
  getAllShows() {
    return API.get(`shows`)
  },
  // searchShows(query) {
  //   return API.get(`/search/shows?q=:${query}`)
  // },
  getOneShow(id) {
    const oneShow =  API.get(`shows/${id}`).then((show) => show.data)
    return oneShow;
  }
};
