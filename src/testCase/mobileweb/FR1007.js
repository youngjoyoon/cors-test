import { getMemberWithdrawAPI/*, deleteMemberWithdrawAPI */ } from 'api/memberWithdraw';
import { loginUserByEmail } from 'api/__fixtures__/user';

export const TC1011 = () => {
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
    tid: 'TC-1011',
    desc: '로그인된 사용자의 회원탈퇴 가능 여부를 조회한다.',
    condition: '',
    execute,
  }
}

// export const TC1012 = () => {
//   const execute = async () => {
//     const logout = loginUserByEmail('qa01@tattoo.com');
//     const { data: resp } = await deleteMemberWithdrawAPI();

//     logout();

//     return {
//       input: null,
//       output: resp, 
//     }
//   }

//   return {
//     id: 'FR-1007',
//     tid: 'TC-1012',
//     desc: '프로필 사진 정보, 닉네임, 푸시알림 여부를 수정한다.',
//     condition: '',
//     execute,
//   }
// }
