import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchCash } from 'api/admin/cash';

export const AFR1008_1 = () => {
  const query = {
    searchType: 'ALL',
    memberId: 3,
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchCash(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1008',
    desc: '캐시 충전 내역 목록을 조회한다.',
    condition: '',
    execute,
  }
}
