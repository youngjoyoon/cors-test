
import { searchRankTattooistAPI } from 'api/searchRank';

export const TC1035= () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: [],
    genreTypes: [],
    page: 1,
    size: 20,
    sort: ['desc'],
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
    tid: 'TC-1035',
    desc: '실시간 타투이스트 랭킹 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1036 = () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: ['SEOUL'],
    genreTypes: [],
    page: 1,
    size: 20,
    sort: ['desc'],
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
    tid: 'TC-1036',
    desc: '실시간 타투이스트 랭킹 목록을 조회한다. -> 지역 필터를 서울로 설정한다.',
    condition: '',
    execute,
  }
}

export const TC1037 = () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: [],
    genreTypes: ['SEMI_PERMANENT'],
    page: 1,
    size: 20,
    sort: ['desc'],
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
    id: 'FR-1016',
    tid: 'TC-1037',
    desc: '실시간 타투이스트 랭킹 목록을 조회한다. -> 장르 필터를 반영구로 설정한다.',
    condition: '',
    execute,
  }
}
