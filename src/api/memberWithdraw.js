import { axiosInstance } from 'infrastructure/axios';

export async function getMemberWithdrawAPI() {
  return await axiosInstance.get('/web/v1/member/withdraw');
}

export async function deleteMemberWithdrawAPI() {
  return await axiosInstance.delete('/web/v1/member/withdraw');
}
