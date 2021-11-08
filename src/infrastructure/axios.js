import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://www.jlventures.io/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const setAppToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
