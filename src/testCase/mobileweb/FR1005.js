import { termsSearchAPI, termsAgreeAPI } from 'api/terms';
import { userFixtureByEmail } from 'api/__fixtures__/user';

// 약관 조회 - 회원가입 약관
export const FR1005_1 = () => {
  const payload = {
    type: 'JOIN',
    latest: true,
  };

  const execute = async () => {
    const { data: resp } = await termsSearchAPI(payload);

    return {
      input: {
        query: payload,
      },
      output: resp, 
    }
  }

  return {
    id: 'FR-1005',
    desc: '회원가입 약관을 조회한다.',
    condition: '',
    execute,
  }
}

// 약관 조회 - 개인정보보호 약관
export const FR1005_2 = () => {
  const payload = {
    type: 'PRIVACY',
    latest: true,
  };

  const execute = async () => {
    const { data: resp } = await termsSearchAPI(payload);

    return {
      input: {
        query: payload,
      },
      output: resp, 
    }
  }

  return {
    id: 'FR-1005',
    desc: '개인정보보호 약관을 조회한다.',
    condition: '',
    execute,
  }
}

// 회원가입 약관 동의
export const FR1005_3 = () => {
  const userFixture = userFixtureByEmail('qa01@tattoo.com');
  const payload = {
    type: 'JOIN',
    latest: true,
  };

  const execute = async () => {
    const { data: searchResp } = await termsSearchAPI(payload);
    const { content } = searchResp;
    const [firstContent] = content;
    const { id: termsId, type: termType, category } = firstContent || {};
    const { memberId } = userFixture;

    const agreePayload = {
      memberId,
      termsId,
      termType,
      category,
    }

    const { data: agreeResp } = await termsAgreeAPI(agreePayload);

    return {
      input: {
        pathValue: { termsId },
        requestBody: agreePayload,
      },
      output: agreeResp, 
    }
  }

  return {
    id: 'FR-1005',
    desc: '회원가입 약관을 동의 처리한다',
    condition: '회원가입 후에만 가능하다.',
    execute,
  }
}
