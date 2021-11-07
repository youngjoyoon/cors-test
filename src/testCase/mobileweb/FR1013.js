import { searchHotWordAPI } from 'api/search';

export const TC1024 = () => {
  const execute = async () => {
    const { data } = await searchHotWordAPI();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1013',
    tid: 'TC-1024',
    desc: '인기 검색어를 조회한다.',
    condition: '',
    execute,
  }
}
