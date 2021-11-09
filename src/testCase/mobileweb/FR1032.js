import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchEstimateRequestByMeAPI } from 'api/estimate';

export const FR1032_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await searchEstimateRequestByMeAPI();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1032',
    desc: '일반 사용자가 본인이 요청한 견적 목록을 조회한다.',
    condition: '본인이 요청한 견적 목록이 존재해야 한다.',
    execute,
  }
}
