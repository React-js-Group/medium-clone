import axios from "axios";

axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const postRequest = (endPoint: string, data: object): Promise<any> => {
  return axios.post(`${endPoint}`, data);
};

const getRequest = (endPoint: string): Promise<any> => {
  return axios.get(`${endPoint}`);
};

export { postRequest, getRequest };
