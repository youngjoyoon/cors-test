import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function getEstimateProposerAPI(option) {
  const query = stringify({
    estimateProposerId: option.estimateProposerId,
  });

  return await axiosInstance.get(`/web/v1/estimate/proposer/${option.estimateProposerId}?${query}`);
}

export async function createEstimateProposerAPI(option) {
  const data = {
    id: option.id,
    tattooistId: option.tattooistId,
    price: option.price,
  };

  return await axiosInstance.post(`/web/v1/estimate/proposer`, data);
}

export async function modifyEstimateProposerAPI(option) {
  const query = stringify({
    id: option.id,
    estimateProposerId: option.estimateProposerId,
    tattooistId: option.tattooistId,
    price: option.price,
  });

  return await axiosInstance.put(`/web/v1/estimate/proposer/${option.estimateProposerId}?${query}`);
}

export async function deleteEstimateProposerAPI(option) {
  const query = stringify({
    estimateProposerId: option.estimateProposerId,
  });

  return await axiosInstance.delete(`/web/v1/estimate/proposer/${option.estimateProposerId}?${query}`);
}

export async function searchEstimateProposerByMeAPI(option) {
  const query = stringify({
    pageName: option.pageName,
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/estimate/proposer/search-by-me?${query}`);
}

export async function searchEstimateProposerByMeCountAPI() {
  return await axiosInstance.get(`/web/v1/estimate/proposer/search-by-me-count`);
}

export async function getEstimateRequestAPI(option) {
  const query = stringify({
    estimateRequestId: option.estimateRequestId,
  });

  return await axiosInstance.get(`/web/v1/estimate/request/${option.estimateRequestId}?${query}`);
}

export async function createEstimateRequestAPI(option) {
  const data = {
    tattooDesignType: option.tattooDesignType,
    referImageUrl: option.referImageUrl,
    genreType: option.genreType,
    subject: option.subject,
    partDetailType: option.partDetailType,
    sizeType: option.sizeType,
    sizeEtcHorizontal: option.sizeEtcHorizontal,
    sizeEtcVertical: option.sizeEtcVertical,
    visitAbleAreas: option.visitAbleAreas,
    description: option.description,
    proposerCount: option.proposerCount,
  };

  return await axiosInstance.post(`/web/v1/estimate/request`, data);
}

export async function searchEstimateRequestFilterAPI() {
  return await axiosInstance.get(`/web/v1/estimate/request/search-filter`);
}

export async function searchEstimateRequestByMeAPI() {
  return await axiosInstance.get(`/web/v1/estimate/request/search-by-me`);
}

export async function pauseRequestAPI(option) {
  return await axiosInstance.put(`/web/v1/estimate/request/${option.estimateRequestId}/request-pause`);
}

export async function deleteRequestAPI(option) {
  return await axiosInstance.delete(`/web/v1/estimate/request/${option.estimateRequestId}`);
}
