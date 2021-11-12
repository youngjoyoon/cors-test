import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchTattooist } from 'api/admin/tattooist';

export const AFR1006_1 = () => {
  const query = {
    type: 'NONE',
    value: '',
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchTattooist(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1006',
    desc: '타투이스트 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const AFR1006_2 = () => {
  const query = {
    type: 'NAME',
    value: '타투이스트-1',
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchTattooist(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1006',
    desc: '이름으로 타투이스트를 조회한다.',
    condition: '',
    execute,
  }
}
