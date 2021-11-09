import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function reportTattooAPI(option) {
  const data = {
    reasonType: option.reasonType,
    tattooId: option.tattooId,
  };

  return await axiosInstance.post(`/web/v1/restriction/tattoo`, data);
}

export async function reportTattooistAPI(option) {
  const data = {
    reasonType: option.reasonType,
    tattooistId: option.tattooistId,
  };

  return await axiosInstance.post(`/web/v1/restriction/tattooist`, data);
}

export async function reportEstimateAPI(option) {
  const data = {
    reasonType: option.reasonType,
    estimateRequestId: option.estimateRequestId,
  };

  return await axiosInstance.post(`/web/v1/restriction/estimate-request`, data);
}

export async function getReportCount(option) {
  const query = stringify({
    tattooistId: option.tattooistId,
  });

  return await axiosInstance.get(`/web/v1/restriction/tattooist-count?${query}`);
}