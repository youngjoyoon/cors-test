import { loginUserByEmail } from 'api/__fixtures__/user';
import { getRestriction, modifyRestrictionStatus } from 'api/admin/restriction';

export const AFR1012_1 = () => {
  const pathValue = {
    restrictionId: 2
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await getRestriction(pathValue);

    logout();

    return {
      input: {
        pathValue
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1012',
    desc: '신고 단건을 조회한다.',
    condition: '',
    execute,
  }
}

export const AFR1012_2 = () => {
  const pathValue = {
    restrictionId: 1,
  };
  const query = {
    statusType: 'DONE',
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await modifyRestrictionStatus({ ...pathValue, ...query });

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
    id: 'AFR-1012',
    desc: '신고 상태를 변경한다. (READY -> DONE으로 변경)',
    condition: '',
    execute,
  }
}

export const AFR1012_3 = () => {
  const pathValue = {
    restrictionId: 1,
  };
  const query = {
    statusType: 'READY',
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await modifyRestrictionStatus({ ...pathValue, ...query });

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
    id: 'AFR-1012',
    desc: '신고 상태를 변경한다. (DONE -> READY로 변경)',
    condition: '',
    execute,
  }
}
