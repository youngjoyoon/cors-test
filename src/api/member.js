import { axiosInstance } from 'infrastructure/axios';

export async function getMemberAPI() {
  return await axiosInstance.get('/web/v1/member');
}

export async function modifyMemberAPI(option) {
  const data = {
    nickName: option.nickName,
    pushAgreement: option.pushAgreement,
  };

  return await axiosInstance.put('/web/v1/member', data);
}
