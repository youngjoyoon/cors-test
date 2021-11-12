import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchRankTattooistAPI } from 'api/searchRank';
import { getFavoriteTattooistAPI, toggleFavoriteTattooistAPI } from 'api/favorite';

export const FR1017_1 = () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: null,
    genreTypes: null,
    page: 1,
    size: 20,
  };

  const execute = async () => {  
    const { data } = await searchRankTattooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1017',
    desc: '실시간 타투이스트 랭킹 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1017_2 = () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: ['SEOUL'],
    genreTypes: null,
    page: 1,
    size: 20,
  };

  const execute = async () => {  
    const { data } = await searchRankTattooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1017',
    desc: '실시간 타투이스트 랭킹 목록을 조회한다. -> 지역 필터를 서울로 설정한다.',
    condition: '',
    execute,
  }
}

export const FR1017_3 = () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: null,
    genreTypes: ['SEMI_PERMANENT'],
    page: 1,
    size: 20,
  };

  const execute = async () => {  
    const { data } = await searchRankTattooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1017',
    desc: '실시간 타투이스트 랭킹 목록을 조회한다. -> 장르 필터를 반영구로 설정한다.',
    condition: '',
    execute,
  }
}

export const FR1017_4 = () => {
  const query = {
    tattooistId: 7,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await toggleFavoriteTattooistAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1017',
    desc: '선택한 타투이스트 좋아요를 클릭한다.',
    condition: '',
    execute,
  }
}

export const FR1017_5 = () => {
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
    id: 'FR-1017',
    desc: '선택한 타투이스트가 좋아요 목록에 추가되었는지 좋아요 목록을 조회한다.',
    condition: '',
    execute,
  }
}
