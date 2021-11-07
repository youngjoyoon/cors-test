import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function getTattooistAPI(option) {
  return await axiosInstance.get(`/web/v1/tattooist/${option.tattooistId}`);
}

export async function createTattooistAPI(option) {
  const data = {
    sidoAddress: option.sidoAddress,
    sggAddress: option.sggAddress,
    detailAddress: option.detailAddress,
    consultType: option.consultType,
    consultDetail: option.consultDetail,
    intro: option.intro,
    instagramUrl: option.instagramUrl,
    images: option.images,
    profile: option.profile,
    termsAgreement: option.termsAgreement,
  };

  return await axiosInstance.post(`/web/v1/tattooist/${option.tattooistId}`, data);
}

export async function modifyTattooistAPI(option) {
  const data = {
    sidoAddress: option.sidoAddress,
    sggAddress: option.sggAddress,
    detailAddress: option.detailAddress,
    consultType: option.consultType,
    consultDetail: option.consultDetail,
    intro: option.intro,
    instagramUrl: option.instagramUrl,
    newImages: option.newImages,
    removeImages: option.removeImages,
    profile: option.profile,
  };

  return await axiosInstance.put(`/web/v1/tattooist/${option.tattooistId}`, data);
}

export async function deleteTattooistAPI(option) {
  return await axiosInstance.delete(`/web/v1/tattooist/${option.tattooistId}`);
}

export async function createattooistConsultHistoryAPI(option) {
  const data = {
    type: option.type,
    targetId: option.targetId,
  };

  return await axiosInstance.put(`/web/v1/tattooist/${option.tattooistId}/tattooist-consult`, data);
}

export async function getTattooistMainAPI() {
  return await axiosInstance.get(`/web/v1/tattooist/tattooist-main`);
}

export async function getMyTattooistListAPI() {
  return await axiosInstance.get(`/web/v1/tattooist/tattooist-list`);
}

export async function searchTattooistByConsult(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
    sort: [...option.sort],
  });

  return await axiosInstance.get(`/web/v1/tattooist/search-by-consulting?${query}`);
}

export async function searchTattooistByRecentReview() {
  return await axiosInstance.get(`/web/v1/tattooist/search-by-review`);
}

export async function searchTattooistByName(option) {
  const query = stringify({
    tattooistName: option.tattooistName,
    page: option.page,
    size: option.size,
    sort: [...option.sort],
  });

  return await axiosInstance.get(`/web/v1/tattooist/search-by-name?${query}`);
}
