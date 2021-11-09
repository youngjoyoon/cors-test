import { searchHotWordAPI } from 'api/search';

export const FR1013_1 = () => {
  const execute = async () => {
    const { data } = await searchHotWordAPI();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1013',
    desc: '인기 검색어를 조회한다.',
    condition: '',
    execute,
  }
}
