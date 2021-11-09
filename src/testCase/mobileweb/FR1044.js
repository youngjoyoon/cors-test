import { loginUserByEmail } from 'api/__fixtures__/user';
import { getMyTattooistListAPI } from 'api/tattooist';

export const FR1044_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await getMyTattooistListAPI();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1044',
    desc: '개설한 타투이스트 페이지 목록을 조회한다.',
    condition: '',
    execute,
  }
}
