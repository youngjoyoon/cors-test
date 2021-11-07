import { getMemberAPI, modifyMemberAPI } from 'api/member';
import { loginUserByEmail } from 'api/__fixtures__/user';

export const TC1008 = () => {
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
    tid: 'TC-1008',
    desc: '회원정보 화면을 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1009 = () => {
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
    tid: 'TC-1009',
    desc: '프로필 사진 정보, 닉네임, 푸시알림 여부를 수정한다.',
    condition: 'TC-1008을 수행한다. > 수정할 회원 정보가 필요하다.',
    execute,
  }
}
