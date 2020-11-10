import axios from "axios";

const api = axios.create({
  baseURL: " http://dev-caracol-api.herokuapp.com/usuario",
});

export default api;
