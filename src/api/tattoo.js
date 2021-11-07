import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function getTattooAPI(option) {
  return await axiosInstance.get(`/web/v1/tattoo/${option.tattooId}`);
}

export async function createTattooAPI(option) {
  const data = {
    tattooistId: option.tattooistId,
    title: option.title,
    description: option.description,
    workType: option.workType,
    genreType: option.genreType,
    styleType: option.styleType,
    subjectType: option.subjectType,
    partType: option.partType,
    sizeType: option.sizeType,
    sizeEtc: option.sizeEtc,
    subjectEtc: option.subjectEtc,
    installmentPayment: option.installmentPayment,
    sameDayReservation: option.sameDayReservation,
    workDate: option.workDate,
    workTimeForHour: option.workTimeForHour,
    workNumber: option.workNumber,
    price: option.price,
    promotion: option.promotion,
    promotionPrice: option.promotionPrice,
    files: option.files,
  }

  return await axiosInstance.post(`/web/v1/tattoo`, data);
}

export async function modifyTattooAPI(option) {
  const data = {
    tattooistId: option.tattooistId,
    title: option.title,
    description: option.description,
    workType: option.workType,
    genreType: option.genreType,
    styleType: option.styleType,
    subjectType: option.subjectType,
    partType: option.partType,
    sizeType: option.sizeType,
    sizeEtc: option.sizeEtc,
    subjectEtc: option.subjectEtc,
    installmentPayment: option.installmentPayment,
    sameDayReservation: option.sameDayReservation,
    workDate: option.workDate,
    workTimeForHour: option.workTimeForHour,
    workNumber: option.workNumber,
    price: option.price,
    promotion: option.promotion,
    promotionPrice: option.promotionPrice,
    files: option.files,
  }

  return await axiosInstance.put(`/web/v1/tattoo/${option.tattooId}`, data);
}

export async function getTattooListByTottooistAPI(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
    sort: [...option.sort],
  });

  return await axiosInstance.get(`/web/v1/tattoo/search-tattooist/${option.tattooistId}?${query}`);
}

export async function getRecentTattooAPI(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
    sort: [...option.sort],
  });

  return await axiosInstance.get(`/web/v1/tattoo/search-recently?${query}`);
}

export async function getRecommendTattooAPI() {
  return await axiosInstance.get(`/web/v1/tattoo/search-recommend`);
}

export async function getEstimateTattooAPI(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
    sort: [...option.sort],
  });

  return await axiosInstance.get(`/web/v1/tattoo/search-estimate/${option.estimateRequestId}?${query}`);
}
