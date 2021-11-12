import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchEstimateRequestFilterAPI } from 'api/estimate';

export const FR1053_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await searchEstimateRequestFilterAPI();

    logout();

    return {
      input: null,
      output: data,
    }
  }

  return {
    id: 'FR-1053',
    desc: '요청 받은 맞춤 견적서 목록을 조회한다.',
    condition: '',
    execute,
  }
}
