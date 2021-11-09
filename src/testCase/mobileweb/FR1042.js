import { loginUserByEmail } from 'api/__fixtures__/user';
import { getRecommendTattooAPI } from 'api/tattoo';

export const FR1042_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await getRecommendTattooAPI();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1042',
    desc: '추천 타투 상품 목록을 조회한다.',
    condition: '',
    execute,
  }
}
