import { modifyMemberAPI } from 'api/member';
import { loginUserByEmail } from 'api/__fixtures__/user';

export const FR1009_1 = () => {
  const payload = {
    "nickName": "수정용 닉네임",
    "pushAgreement": true,
    "profileImageUrl": "newprofileurl"
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');

    const { data } = await modifyMemberAPI(payload);

    logout();

    return {
      input: {
        requestBody: payload,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1009',
    desc: '앱푸시 수신 여부를 on/off한다.',
    condition: '',
    execute,
  }
}
