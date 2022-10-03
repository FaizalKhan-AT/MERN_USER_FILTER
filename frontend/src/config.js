import axios from "axios";

const axios_instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

axios_instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
export default axios_instance;
