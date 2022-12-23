import axios from "axios";
import config from "config/config.json";

const URL = config.URL;

axios.defaults.baseURL = URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const postConfiguration = (data: object, endPoint: string): Promise<any> => {
  return axios.post(`${URL}/${endPoint}`, { data });
};

const getConfiguration = (endPoint: string): Promise<any> => {
  return axios.get(`${URL}/${endPoint}`);
};

export { postConfiguration, getConfiguration };
