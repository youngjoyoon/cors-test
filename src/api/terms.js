import { axiosInstance } from '../infrastructure/axios';

export async function termsSearchAPI(payload) {
  const { query } = payload;

  return await axiosInstance.get('/v1/terms/terms-search', {
    params: { ...query },
  });
}

export async function termsAgreeAPI(termId, payload) {
  const { data } = payload;

  return await axiosInstance.get(`/v1/terms/${termId}/terms-search`, {
    data,
  });
}