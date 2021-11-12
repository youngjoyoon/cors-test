import { getStatisticsHotTattooAPI } from 'api/statistics';

export const FR1051_1 = () => {
  const query = {
    tattooistId: 7,
    periodType: 'ALL',
    sortType: 'LIKE_DESC',
    page: 1,
    size: 20,
  };
  
  const execute = async () => {
    const { data } = await getStatisticsHotTattooAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1051',
    desc: '타투이스트 인기 작품 통계를 조회한다.',
    condition: '',
    execute,
  }
}
