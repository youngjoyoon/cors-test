import { loginUserByEmail } from 'api/__fixtures__/user';
import { getCashForCharge } from 'api/cash';
import { termsSearchAPI } from 'api/terms';

export const FR1060_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await getCashForCharge();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1060',
    desc: '캐시 충전 화면 정보를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1060_2 = () => {
  const query = {
    type: 'PRIVACY',
    latest: true,
  };

  const execute = async () => {
    const { data } = await termsSearchAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1060',
    desc: '약관 정보를 조회한다.',
    condition: '',
    execute,
  }
}
