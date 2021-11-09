import { getMemberWithdrawAPI/*, deleteMemberWithdrawAPI */ } from 'api/memberWithdraw';
import { loginUserByEmail } from 'api/__fixtures__/user';

export const FR1007_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await getMemberWithdrawAPI();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1007',
    desc: '로그인된 사용자의 회원탈퇴 가능 여부를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1007_2 = () => {
  const execute = async () => {
    // const logout = loginUserByEmail('qa01@tattoo.com');
    // const { data: resp } = await deleteMemberWithdrawAPI();

    // logout();

    // return {
    //   input: null,
    //   output: resp, 
    // }
    return {
      input: null,
      output: null,
    }
  }

  return {
    id: 'FR-1007',
    desc: '회원을 탈퇴한다.',
    condition: '',
    execute,
  }
}
