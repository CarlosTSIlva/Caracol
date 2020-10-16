import axios from "axios";

const api = axios.create({
  baseURL: "https://caracolapi.herokuapp.com",
});

export default api;
