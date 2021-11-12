import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function requestCashRefund(option) {
  const data = {
    reason: option.reason,
  };

  return await axiosInstance.put(`/web/v1/cash/${option.cashHistoryId}`, data);
}

export async function cancelCashRefund(option) {
  return await axiosInstance.put(`/web/v1/cash/${option.cashHistoryId}`);
}

export async function searchCashHistoryByMe(option) {
  const query = stringify({
    searchType: option.searchType,
    recently: option.recently,
    remain: option.remain,
    from: option.from,
    to: option.to,
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/cash/search-by-me?${query}`);
}

export async function useCash(option) {
  const query = {
    useType: option.useType,
    estimateProposeId: option.estimateProposeId,
  }

  return await axiosInstance.get(`/web/v1/cash/cash-use?${query}`);
}

export async function getCashForEstimate() {
  return await axiosInstance.get(`/web/v1/cash/cash-estimate`);
}

export async function getCashForCharge() {
  return await axiosInstance.get(`/web/v1/cash/cash-charge`);
}
