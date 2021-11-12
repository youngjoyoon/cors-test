import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchMember} from 'api/admin/member';

export const AFR1004_1 = () => {
  const query = {
    page: 1,
    size: 30,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchMember(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1004',
    desc: '회원 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const AFR1004_2 = () => {
  const query = {
    type: 'BY_NAME',
    value: '테스트계정(QA01)',
    page: 1,
    size: 30,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchMember(query);

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
    desc: '이름으로 회원 검색한다.',
    condition: '',
    execute,
  }
}

export const AFR1004_3 = () => {
  const query = {
    type: 'BY_EMAIL',
    value: 'qa01@tattoo.com',
    page: 1,
    size: 30,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchMember(query);

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
    desc: '이메일으로 회원 검색한다.',
    condition: '',
    execute,
  }
}
