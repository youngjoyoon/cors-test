import { axiosInstance } from '../infrastructure/axios';

export async function termsSearchAPI(option) {
  const params = {
    type: option.type,
    latest: option.latest,
  };

  return await axiosInstance.get('/web/v1/terms/terms-search', {
    params,
  });
}

export async function termsAgreeAPI(option) {
  const data = {
    memberId: option.memberId,
    termsId: option.termsId,
    termsType: option.termsType,
    category: option.category,
  };

  return await axiosInstance.post(`/web/v1/terms/${option.termsId}/terms-agree`, data);
}
