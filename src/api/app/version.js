import { axiosInstance } from 'infrastructure/axios';

export async function getVersionControl() {
  return axiosInstance.get(`/app/v1/versionControl`);
}

export async function saveAppPushToken(option) {
  const data = {
    token: option.token,
    deviceType: option.deviceType,
  };

  return axiosInstance.post(`/app/v1/member/setting/apppush-token`, data);
}
