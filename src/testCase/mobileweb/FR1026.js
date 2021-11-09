import { getStatisticsEstimateAPI } from 'api/statistics';

export const FR1026_1 = () => {
  const query = {
    tattooistId: 1,
  };
  const execute = async () => {
    const { data } = await getStatisticsEstimateAPI(query);

    return {
      input: {
        query,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1026',
    desc: '타투이스트의 견적 목록을 조회한다.',
    condition: '작업 이력이 없으면 쌓이지 않는다.',
    execute,
  }
}
