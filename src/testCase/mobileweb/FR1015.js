
import { loginUserByEmail } from 'api/__fixtures__/user';
import { getRecentTattooAPI } from 'api/tattoo';
import { getFavoriteTattooAPI, toggleFavoriteTattooAPI } from 'api/favorite';

export const FR1015_1 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {  
    const { data } = await getRecentTattooAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1015',
    desc: '최근 등록된 타투 목록을 조회한다. ',
    condition: '',
    execute,
  }
}

export const FR1015_2 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');

    const { data: recentResp } = await getRecentTattooAPI(query);
    const { content } = recentResp;
    const { contents } = content;
    const [firstContent] = contents ?? [];
    const { id } = firstContent ?? {};

    const toggleQuery = {
      tattooId: id,
    };
    const { data: resp } = await toggleFavoriteTattooAPI(toggleQuery);

    logout();

    return {
      input: {
        query: toggleQuery,
        requestBody: null,
      },
      output: resp, 
    }
  }

  return {
    id: 'FR-1015',
    desc: '선택한 타투 좋아요를 클릭한다.',
    condition: '',
    execute,
  }
}

export const FR1015_3 = () => {
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
    id: 'FR-1015',
    desc: '선택한 타투가 좋아요 목록에 추가되었는지 좋아요 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1015_4 = () => {
  const execute = async () => {
    return {
      input: null,
      output: null,
    }
  }

  return {
    id: 'FR-1015',
    desc: '(미테스트) 지역, 장르 필터를 적용하여 조회한다.',
    condition: '',
    execute,
  }
}
