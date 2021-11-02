import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://api.wishwingz.co.kr:8080/api/web',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const setAppToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
