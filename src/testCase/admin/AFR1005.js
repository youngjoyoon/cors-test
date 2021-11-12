import { loginUserByEmail } from 'api/__fixtures__/user';
import { getMember, lockMember, releaseMember} from 'api/admin/member';

export const AFR1005_0 = () => {
  const pathValue = {
    id: 1,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await getMember(pathValue);

    logout();

    return {
      input: {
        pathValue
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1005',
    desc: '회원 단건 조회를 한다.',
    condition: '',
    execute,
  }
}

export const AFR1005_1 = () => {
  const query = {
    id: 1,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');

    logout();

    return {
      input: {
        query
      },
      output: null, 
    }
  }

  return {
    id: 'AFR-1005',
    desc: '회원을 강제 탈퇴 시킨다.',
    condition: '',
    execute,
  }
}

export const AFR1005_2 = () => {
  const pathValue = {
    id: 3,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await lockMember(pathValue);

    logout();

    return {
      input: {
        pathValue
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1005',
    desc: '회원을 강제 사용중지 시킨다.',
    condition: '',
    execute,
  }
}

export const AFR1005_3 = () => {
  const pathValue = {
    id: 3,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await releaseMember(pathValue);

    logout();

    return {
      input: {
        pathValue
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1005',
    desc: '회원의 사용 중지를 해제한다.',
    condition: '',
    execute,
  }
}
