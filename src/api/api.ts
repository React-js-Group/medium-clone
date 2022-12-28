import axios from "axios";
import config from "config/config.json";

const URL = config.URL;

axios.defaults.baseURL = URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const userRegister = (data: object, endPoint: string): Promise<any> => {
  return axios.post(`${URL}${endPoint}`, data);
};

const userLogin = (endPoint: string): Promise<any> => {
  return axios.get(`${URL}/${endPoint}`);
};

export { userRegister, userLogin };
