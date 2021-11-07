import { axiosInstance } from '../infrastructure/axios';

export async function searchRecentlyWordAPI() {
  return await axiosInstance.get('/web/v1/search/search-recently-word');
}

export async function searchHotWordAPI() {
  return await axiosInstance.get('/web/v1/search/search-hot-word');
}
