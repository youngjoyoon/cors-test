import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://www.jlventures.io/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const adminAxiosInstance = axios.create({
  baseURL: 'http://admin.jlventures.io/api',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});

export const setAppToken = (token) => {
  axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
