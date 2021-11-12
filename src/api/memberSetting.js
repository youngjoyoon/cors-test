import { axiosInstance } from 'infrastructure/axios';

export async function modifyProfileAPI(option) {
  const data = {
    profileType: option.profileType
  };

  return await axiosInstance.put('/web/v1/member/setting/profile', data);
}

export async function modifyMemberSettingEstimateFilterAppPushAPI(option) {
  const data = {
    designTypes: option.designTypes,
    genreTypes: option.genreTypes,
    filterAreaTypes: option.filterAreaTypes,
    use: option.use,
  };

  return await axiosInstance.put('/web/v1/member/setting/estimate-filter-apppush', data);
}

export async function getMemberSettingByMe() {
  return await axiosInstance.get(`/web/v1/member/setting/my`);
}

export async function getMemberSettingByMyTattooist() {
  return await axiosInstance.get(`/web/v1/member/setting/my-tattooist`);
}
