import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function getStatisticsAPI(option) {
  const query = {
    tattooistId: option.tattooistId,
  };

  return await axiosInstance.post(`/web/v1/statistics/tattooist?${query}`);
}

export async function getStatisticsAllAPI(option) {
  const query = {
    tattooistId: option.tattooistId,
  };

  return await axiosInstance.post(`/web/v1/statistics/tattooist-all?${query}`);
}

export async function getStatisticsEstimateAPI(option) {
  const query = {
    tattooistId: option.tattooistId,
  };

  return await axiosInstance.post(`/web/v1/statistics/tattooist-statistics?${query}`);
}

export async function getStatisticsHotTattooAPI(option) {
  const query = {
    tattooistId: option.tattooistId,
    periodType: option.periodType,
    page: option.page,
    size: option.size,
    sort: option.sort,
  };

  return await axiosInstance.post(`/web/v1/statistics/tattooist-hot-tattoo?${query}`);
}
