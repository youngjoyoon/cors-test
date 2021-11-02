import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://3.35.228.39:8080/api/web',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
});
