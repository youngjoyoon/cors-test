import { loginUserByEmail } from 'api/__fixtures__/user';
import { getCoopsDetail, searchCoop } from 'api/admin/board';

export const AFR1003_1 = () => {
  const query = {
    page: 1,
    size: 30,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchCoop(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1003',
    desc: '제휴문의 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const AFR1003_2 = () => {
  const query = {
    word: '테스트 문의 제목입니다',
    boardSearchType: 'TITLE',
    page: 1,
    size: 30,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchCoop(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1003',
    desc: '제목으로 목록을 검색한다.',
    condition: '',
    execute,
  }
}

export const AFR1003_3 = () => {
  const pathValue = {
    boardContentId: 1,
  };
  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await getCoopsDetail(pathValue);

    logout();

    return {
      input: {
        pathValue,
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1003',
    desc: '제휴 문의 단건을 조회한다.',
    condition: '',
    execute,
  }
}
