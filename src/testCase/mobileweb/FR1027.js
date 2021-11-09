import { getStatisticsAPI } from 'api/statistics';

export const FR1027_1 = () => {
  const query = { tattooistId: 7 };

  const execute = async () => {
    const { data } = await getStatisticsAPI(query);

    return {
      input: {
        query,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1027',
    desc: '타투이스트의 통계를 조회한다.',
    condition: '',
    execute,
  }
}
