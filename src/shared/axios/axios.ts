import axios from "axios";
import { getToken } from "./localStorage";

export const Axios = axios.create();

Axios.interceptors.request.use(
  (config) => {
    const baseUrl = `${process.env.REACT_APP_BASE_URL}${config.url}`;
    const token = getToken();

    const updatedConfig = {
      ...config,
      url: baseUrl,
      headers: token && {
        Authorization: `Bearer ${token}`,
      },
    };
    return updatedConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);
