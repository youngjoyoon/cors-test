import { stringify } from 'infrastructure/query';
import { adminAxiosInstance } from 'infrastructure/axios';

export async function searchCash(option) {
  const query = stringify({
    searchType: option.searchType,
    memberId: option.memberId,
    page: option.page,
    size: option.size,
  });

  return await adminAxiosInstance.get(`/web/v1/cash/cash-search?${query}`);
}

export async function chargeCashForce(option) {
  const data = {
    memberId: option.memberId,
    chargeAmount: option.chargeAmount,
    bonusAmount: option.bonusAmount,
  };

  return await adminAxiosInstance.post(`/web/v1/cash/cash-charge-force`, data);
}

export async function refundCash(option) {
  return await adminAxiosInstance.put(`/web/v1/cash/${option.cashHistoryId}/cash-refund`);
}

export async function refundCashForce(option) {
  const query = stringify({
    cancelReason: option.cancelReason,
  });

  return await adminAxiosInstance.put(`/web/v1/cash/${option.cashHistoryId}/cash-refund-force?${query}`);
}

export async function denyRefundCash(option) {
  return await adminAxiosInstance.put(`/web/v1/cash/${option.cashHistoryId}/cash-refund-deny`);
}
