import { loginUserByEmail } from 'api/__fixtures__/user';
import { getMemberSettingByMyTattooist, modifyMemberSettingEstimateFilterAppPushAPI } from 'api/memberSetting';

export const FR1054_1 = () => {
  const requestBody = {
    designTypes: ['NEW_TATTOO'],
    genreTypes: null,
    filterAreaTypes: ['SEOUL'],
    use: true,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await modifyMemberSettingEstimateFilterAppPushAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1054',
    desc: '푸시알림을 받을 필터를 설정한다.',
    condition: '',
    execute,
  }
}

export const FR1054_2 = () => {
  const requestBody = {
    designTypes: ['NEW_TATTOO'],
    genreTypes: null,
    filterAreaTypes: ['SEOUL'],
    use: true,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa03@tattoo.com');
    const { data } = await modifyMemberSettingEstimateFilterAppPushAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1054',
    desc: '푸시알림을 해제한다.',
    condition: '',
    execute,
  }
}

export const FR1054_3 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa03@tattoo.com');
    const { data } = await getMemberSettingByMyTattooist();

    logout();

    return {
      input: null,
      output: data,
    }
  }

  return {
    id: 'FR-1054',
    desc: '푸시알림 설정을 조회한다.',
    condition: '',
    execute,
  }
}
