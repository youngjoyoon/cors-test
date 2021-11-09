import { getStatisticsAllAPI } from 'api/statistics';

export const FR1050_1 = () => {
  const query = {
    tattooistId: 7,
  };
  
  const execute = async () => {
    const { data } = await getStatisticsAllAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1050',
    desc: '타투이스트의 통계를 조회한다.',
    condition: '',
    execute,
  }
}
