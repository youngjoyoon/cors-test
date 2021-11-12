import { loginUserByEmail } from 'api/__fixtures__/user';
import { getEstimateProposerAPI, searchEstimateProposerByMeAPI, searchEstimateProposerByMeCountAPI } from 'api/estimate';

export const FR1056_1 = () => {
  const query = {
    pageName: 'qa02 계정의 새로운 타투이스트 페이지',
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');

    const { data } = await searchEstimateProposerByMeAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1056',
    desc: '본인이 보낸 견적 답변 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1056_2 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await searchEstimateProposerByMeCountAPI();

    logout();

    return {
      input: null,
      output: data,
    }
  }

  return {
    id: 'FR-1056',
    desc: '보낸 견적서 통계를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1056_3 = () => {
  const pathValue = {
    estimateProposerId: 3
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await getEstimateProposerAPI(pathValue);

    logout();

    return {
      input: {
        pathValue,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1056',
    desc: '견적 답변 단건을 조회한다.',
    condition: '',
    execute,
  }
}
