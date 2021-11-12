import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchCash, chargeCashForce } from 'api/admin/cash';

export const AFR1010_1 = () => {
  const query = {
    searchType: 'CHARGE',
    memberId: 3,
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchCash(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1010',
    desc: '캐시 충전내역을 검색한다.',
    condition: '',
    execute,
  }
}

export const AFR1010_2 = () => {
  const query = {
    searchType: 'USE',
    memberId: 3,
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchCash(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1010',
    desc: '캐시 차감내역을 검색한다',
    condition: '',
    execute,
  }
}

export const AFR1010_3 = () => {
  const requestBody = {
    memberId: 2,
    chargeAmount: 10000,
    bonusAmount: 0,
  }
  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await chargeCashForce(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1010',
    desc: '캐시를 강제 충전 시킨다.',
    condition: '',
    execute,
  }
}
