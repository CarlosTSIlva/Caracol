import axios from "axios";

const api = axios.create({
  baseURL: " https://dev-caracol-api.herokuapp.com/",
});
export default api;
