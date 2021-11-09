
import { searchRankTattooAPI } from 'api/searchRank';

export const FR1016_1 = () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: [],
    genreTypes: [],
    page: 1,
    size: 20,
  };

  const execute = async () => {  
    const { data } = await searchRankTattooAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1016',
    desc: '실시간 타투 랭킹 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1016_2 = () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: ['SEOUL'],
    genreTypes: [],
    page: 1,
    size: 20,
  };

  const execute = async () => {  
    const { data } = await searchRankTattooAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1016',
    desc: '실시간 타투 랭킹 목록을 조회한다. -> 지역 필터를 서울로 설정한다.',
    condition: '',
    execute,
  }
}

export const FR1016_3 = () => {
  const query = {
    periodType: 'REALTIME',
    filterAreaTypes: [],
    genreTypes: ['SEMI_PERMANENT'],
    page: 1,
    size: 20,
  };

  const execute = async () => {  
    const { data } = await searchRankTattooAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1016',
    desc: '실시간 타투 랭킹 목록을 조회한다. -> 장르 필터를 반영구로 설정한다.',
    condition: '',
    execute,
  }
}
