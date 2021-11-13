import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchCashHistoryByMe } from 'api/cash';

export const FR1061_1 = () => {
  const query = {
    searchType: 'USE',
    recently: true,
    remain: true,
    from: '20211001',
    to: '20211101',
    page: 1,
    size: 20,
  }
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await searchCashHistoryByMe(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1061',
    desc: '캐시 사용 내역 목록을 조회한다.',
    condition: '',
    execute,
  }
}
