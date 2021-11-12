import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchGuide } from 'api/admin/board';

export const AFR1001_1 = () => {
  const query = {
    page: 1,
    size: 30,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchGuide(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1001',
    desc: '활용가이드를 조회한다.',
    condition: '',
    execute,
  }
}

export const AFR1001_2 = () => {
  const query = {
    word: '활용가이드',
    boardSearchType: 'TITLE',
    page: 1,
    size: 30,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchGuide(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1001',
    desc: '키워드로 검색 조회한다.',
    condition: '',
    execute,
  }
}