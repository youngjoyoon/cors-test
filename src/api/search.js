import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function searchTattooAPI(option) {
  const query = {
    keyword: option.keyword,
    page: option.page,
    size: option.size,
  };
  const data = {
    filterAreaTypes: [...option.filterAreaTypes],
    genreTypes: [...option.genreTypes],
    subjectTypes: [...option.subjectTypes],
    partTypes: [...option.partTypes],
    priceMin: option.priceMin,
    priceMax: option.priceMax,
    promotion: option.promotion,
    installmentPayment: option.installmentPayment,
    sameDayReservation: option.sameDayReservation,
  };

  return await axiosInstance.post(`/web/v1/search/search-tattoo?${stringify(query)}`, data);
}

export async function searchRecentlyWordAPI() {
  return await axiosInstance.get('/web/v1/search/search-recently-word');
}

export async function searchHotWordAPI() {
  return await axiosInstance.get('/web/v1/search/search-hot-word');
}
