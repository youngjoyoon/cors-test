import { modifyMemberSettingAppPushAPI } from 'api/memberSetting';
import { loginUserByEmail } from 'api/__fixtures__/user';

export const TC1014 = () => {
  const payload = {
    appPush: true,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await modifyMemberSettingAppPushAPI(payload);

    logout();

    return {
      input: {
        query: payload,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1009',
    tid: 'TC-1014',
    desc: '앱푸시 수신 여부를 on/off한다.',
    condition: '',
    execute,
  }
}
