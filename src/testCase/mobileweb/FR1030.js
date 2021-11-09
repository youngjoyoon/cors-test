import { loginUserByEmail } from 'api/__fixtures__/user';
import { createTatooistConsultHistoryAPI, searchTattooistByConsult } from 'api/tattooist';

export const FR1030_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const pathValue = { tattooistId: 7 };
    const requestBody = {
      type: 'TATTOO',
      targetId: 7
    };
    const { data } = await createTatooistConsultHistoryAPI({ ...pathValue, ...requestBody });

    logout();

    return {
      input: {
        pathValue,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1030',
    desc: '대화 신청 시 대화 이력을 생성한다.',
    condition: '',
    execute,
  }
}

export const FR1030_2 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const query = {
      page: 1,
      size: 20,
    };
    const { data } = await searchTattooistByConsult(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1030',
    desc: '대화 했던 타투이스트 목록을 조회한다.',
    condition: '',
    execute,
  }
}
