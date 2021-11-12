import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function checkDuplicateName(option) {
  const query = stringify({
    name: option.name
  });

  return await axiosInstance.get(`/web/v1/tattooist/check-duplicate-name?${query}`);
}

export async function getTattooistAPI(option) {
  return await axiosInstance.get(`/web/v1/tattooist/${option.tattooistId}`);
}

export async function createTattooistAPI(option) {
  const data = {
    name: option.name,
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

  return await axiosInstance.post(`/web/v1/tattooist`, data);
}

export async function modifyTattooistAPI(option) {
  const query = stringify({ tattooistId: option.tattooistId });
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

  return await axiosInstance.put(`/web/v1/tattooist/${option.tattooistId}?${query}`, data);
}

export async function deleteTattooistAPI(option) {
  const query = stringify({ tattooistId: option.tattooistId });

  return await axiosInstance.delete(`/web/v1/tattooist/${option.tattooistId}?${query}`);
}

export async function createTatooistConsultHistoryAPI(option) {
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
  });

  return await axiosInstance.get(`/web/v1/tattooist/search-by-name?${query}`);
}
