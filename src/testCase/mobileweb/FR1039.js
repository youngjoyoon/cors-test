import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchRecentlyTattooAPI, searchRecentlyTattooistAPI } from 'api/search';

export const FR1039_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const query = {
      page: 1,
      size: 20,
    };
    const { data } = await searchRecentlyTattooAPI(query);

    logout();

    return {
      input: {
        query: query,
        requestBody: null,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1039',
    desc: '최근 본 타투 상품 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1039_2 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const query = {
      page: 1,
      size: 20,
    };
    const { data } = await searchRecentlyTattooistAPI(query);

    logout();

    return {
      input: {
        query: query,
        requestBody: null,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1039',
    desc: '최근 본 타투이스트 상품 목록을 조회한다.',
    condition: '',
    execute,
  }
}
