import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function modifyMemberSettingAppPushAPI(option) {
  const query = {
    appPush: option.appPush,
  };

  return await axiosInstance.put(`/web/v1/member/setting/apppush?${stringify(query)}`);
}

export async function modifyMemberSettingEstimateFilterAppPushAPI(option) {
  const data = {
    designTypes: [...option.designTypes],
    genreTypes: [...option.genreTypes],
    filterAreaTypes: [...option.filterAreaTypes],
    use: option.use,
  };

  return await axiosInstance.put('/web/v1/member/setting/estimate-filter-apppush', data);
}

export async function modifyProfile(option) {
  const data = {
    type: option.type
  };

  return await axiosInstance.put('/web/v1/member/setting/profile', data);
}
