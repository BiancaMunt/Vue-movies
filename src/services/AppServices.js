import { API } from '@/services/api';

export default {
  getAllShows() {
    return API.get(`shows`)
  },
  getOneShow(id) {
    const oneShow =  API.get(`shows/${id}`).then((show) => show.data)
    return oneShow;
  }
};
