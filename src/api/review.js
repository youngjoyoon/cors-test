import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function getReviewAPI(option) {
  const query = stringify({ reviewId: option.reviewId });

  return await axiosInstance.get(`/web/v1/review/${option.reviewId}?${query}`);
}

export async function getReviewByTattooAPI(option) {
  const query = stringify({
    tattooId: option.tattooId,
    reviewOrderType: option.reviewOrderType,
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/review/search-tattoo?${query}`);
}

export async function getReviewByTattooistAPI(option) {
  const query = stringify({
    tattooistId: option.tattooistId,
    reviewOrderType: option.reviewOrderType,
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/review/search-tattooist?${query}`);
}

export async function searchReviewByKeywordAPI(option) {
  const query = stringify({
    keyword: option.keyword,
    page: option.page,
    size: option.size,
  });
  const data = {
    filterAreaTypes: option.filterAreaTypes,
    genreTypes: option.genreTypes,
    subjectTypes: option.subjectTypes,
    partTypes: option.partTypes,
    priceMin: option.priceMin,
    priceMax: option.priceMax,
    promotion: option.promotion,
    installmentPayment: option.installmentPayment,
    sameDayReservation: option.sameDayReservation,
  };

  return await axiosInstance.post(`/web/v1/review/search-filter?${query}`, data);
}

export async function createReviewAPI(option) {
  const data = {
    tattooistId: option.tattooistId,
    starSatisfaction: option.starSatisfaction,
    starCleanliness: option.starCleanliness,
    starKindness: option.starKindness,
    genreType: option.genreType,
    styleType: option.styleType,
    subjectType: option.subjectType,
    subjectEtc: option.subjectEtc,
    partType: option.partType,
    description: option.description,
    reviewImages: [],
  }

  return await axiosInstance.post(`/web/v1/review`, data);
}

export async function modifyReviewAPI(option) {
  const query = stringify({ reviewId: option.reviewId });
  const data = {
    tattooistId: option.tattooistId,
    starSatisfaction: option.starSatisfaction,
    starCleanliness: option.starCleanliness,
    starKindness: option.starKindness,
    genreType: option.genreType,
    styleType: option.styleType,
    subjectType: option.subjectType,
    subjectEtc: option.subjectEtc,
    partType: option.partType,
    description: option.description,
    reviewImages: [],
  }

  return await axiosInstance.put(`/web/v1/review/${option.reviewId}?${query}`, data);
}

export async function deleteReviewAPI(option) {
  const query = stringify({ reviewId: option.reviewId });

  return await axiosInstance.delete(`/web/v1/review/${option.reviewId}?${query}`);
}

export async function searchReivewByMe(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/review/search-me?${query}`);
}
