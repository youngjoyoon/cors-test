import { searchGuideDetail, getGuideDetail } from 'api/board';

export const FR0001_1 = () => {
  const query = {
    page: 1,
    size: 20,
  };
  const execute = async () => {
    const { data } = await searchGuideDetail(query);

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'FR-0001',
    desc: '활용가이드 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR0001_2 = () => {
  const query = {
    boardSearchType: 'TITLE',
    word: '활용가이드',
    page: 1,
    size: 20,
  };
  const execute = async () => {
    const { data } = await searchGuideDetail(query);

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'FR-0001',
    desc: '제목으로 검색한다.',
    condition: '',
    execute,
  }
}

export const FR0001_3 = () => {
  const pathValue = {
    boardContentId: 19,
  };
  const execute = async () => {
    const { data } = await getGuideDetail(pathValue);

    return {
      input: {
        pathValue
      },
      output: data, 
    }
  }

  return {
    id: 'FR-0001',
    desc: '활용가이드 단건 조회한다.',
    condition: '',
    execute,
  }
}
