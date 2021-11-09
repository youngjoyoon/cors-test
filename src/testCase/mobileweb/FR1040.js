import { loginUserByEmail } from 'api/__fixtures__/user';
import { getFavoriteTattooAPI, getFavoriteTattooistAPI } from 'api/favorite';

export const FR1040_1 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await getFavoriteTattooAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1040',
    desc: '좋아요한 상품 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1040_2 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await getFavoriteTattooistAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1040',
    desc: '좋아요한 타투이스트 목록을 조회한다.',
    condition: '',
    execute,
  }
}
