import { API } from '@/services/api';

export default {
  getAllShows() {
    return API.get(`shows`)
  }
};
