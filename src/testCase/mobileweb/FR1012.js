import { searchRecentlyWordAPI } from 'api/search';
import { loginUserByEmail } from 'api/__fixtures__/user';

export const TC1023= () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await searchRecentlyWordAPI();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1012',
    tid: 'TC-1023',
    desc: '최근 검색어 목록을 조회한다.',
    condition: '',
    execute,
  }
}
