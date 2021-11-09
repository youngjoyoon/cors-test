import { getMemberAPI, modifyMemberAPI } from 'api/member';
import { loginUserByEmail } from 'api/__fixtures__/user';

export const FR1006_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await getMemberAPI();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1006',
    desc: '회원정보 화면을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1006_2 = () => {
  const payload = {
    nickName: '수정용 닉네임',
    pushAgreement: true,
  };
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data: resp } = await modifyMemberAPI(payload);

    logout();

    return {
      input: {
        requestBody: payload,
      },
      output: resp, 
    }
  }

  return {
    id: 'FR-1006',
    desc: '프로필 사진 정보, 닉네임, 푸시알림 여부를 수정한다.',
    condition: '회원정보를 조회한다 > 수정할 회원 정보가 필요하다.',
    execute,
  }
}
