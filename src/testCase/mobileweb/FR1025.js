import { getTattooListByTottooistAPI } from 'api/tattoo';

export const FR1025_1 = () => {
  const query = {
    tattooistId: 7,
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const { data } = await getTattooListByTottooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1025',
    desc: '타투이스트의 작품 목록을 조회한다.',
    condition: '',
    execute,
  }
}
