
import { loginUserByEmail } from 'api/__fixtures__/user';
import { getRecentTattooAPI } from 'api/tattoo';
import { getFavoriteTattooAPI, toggleFavoriteTattooAPI } from 'api/favorite';

export const TC1028= () => {
  const query = {
    page: 1,
    size: 20,
    sort: ['desc'],
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
    tid: 'TC-1028',
    desc: '최근 등록된 타투 목록을 조회한다. ',
    condition: '',
    execute,
  }
}

export const TC1029 = () => {
  const query = {
    page: 1,
    size: 20,
    sort: ['desc'],
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
    tid: 'TC-1029',
    desc: '선택한 타투 좋아요를 클릭한다.',
    condition: '',
    execute,
  }
}

export const TC1030= () => {
  const query = {
    page: 1,
    size: 20,
    sort: ['desc'],
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
    tid: 'TC-1030',
    desc: '선택한 타투가 좋아요 목록에 추가되었는지 좋아요 목록을 조회한다.',
    condition: '',
    execute,
  }
}
