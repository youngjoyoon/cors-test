import { loginUserByEmail } from 'api/__fixtures__/user';
import { getTattooist, modifyTattooistStatus } from 'api/admin/tattooist';

export const AFR1007_1 = () => {
  const pathValue = {
    id: 7,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await getTattooist(pathValue);

    logout();

    return {
      input: {
        pathValue
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1007',
    desc: '타투이스트 단건을 조회한다.',
    condition: '',
    execute,
  }
}

export const AFR1007_2 = () => {
  const pathValue = {
    id: 7,
  };
  const query = {
    statusType: 'DEACTIVE',
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await modifyTattooistStatus({ ...pathValue, ...query });

    logout();

    return {
      input: {
        pathValue,
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1007',
    desc: '타투이스트를 비활성화 시킨다.',
    condition: '',
    execute,
  }
}

export const AFR1007_3 = () => {
  const pathValue = {
    id: 7,
  };
  const query = {
    statusType: 'ACTIVE',
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await modifyTattooistStatus({ ...pathValue, ...query });

    logout();

    return {
      input: {
        pathValue,
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1007',
    desc: '타투이스트를 활성화 시킨다.',
    condition: '',
    execute,
  }
}
