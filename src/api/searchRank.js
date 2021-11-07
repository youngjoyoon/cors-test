import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function searchRankTattooAPI(option) {
  const query = stringify({
    periodType: option.periodType,
    filterAreaTypes: [...option.filterAreaTypes],
    genreTypes: [...option.genreTypes],
    page: option.page,
    size: option.size,
    sort: [...option.sort],
  });

  return await axiosInstance.get(`/web/v1/search/rank/search-tattoo?${query}`);
}

export async function searchRankTattooistAPI(option) {
  const query = stringify({
    periodType: option.periodType,
    filterAreaTypes: [...option.filterAreaTypes],
    genreTypes: [...option.genreTypes],
    page: option.page,
    size: option.size,
    sort: [...option.sort],
  });

  return await axiosInstance.get(`/web/v1/search/rank/search-tattooist?${query}`);
}
