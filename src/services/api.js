import axios from "axios";

export const API = axios.create({
  baseURL: `http://api.tvmaze.com/`
});