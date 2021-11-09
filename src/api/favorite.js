import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function getFavoriteTattooAPI(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/favorite/search-tattoo?${query}`);
}

export async function getFavoriteTattooistAPI(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/favorite/search-tattooist?${query}`);
}

export async function toggleFavoriteTattooAPI(option) {
  const query = {
    tattooId: option.tattooId,
  };

  return await axiosInstance.post(`/web/v1/favorite/toggle-tattoo?${stringify(query)}`);
}

export async function toggleFavoriteTattooistAPI(option) {
  const query = {
    tattooistId: option.tattooistId,
  };

  return await axiosInstance.post(`/web/v1/favorite/toggle-tattooist?${stringify(query)}`);
}
