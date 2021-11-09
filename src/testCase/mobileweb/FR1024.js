import { getTattooistAPI } from 'api/tattooist';

export const FR1024_1 = () => {
  const query = {
    tattooistId: 7,
  };

  const execute = async () => {
    const { data } = await getTattooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1024',
    desc: '타투이스트 단건을 조회한다.',
    condition: '',
    execute,
  }
}
