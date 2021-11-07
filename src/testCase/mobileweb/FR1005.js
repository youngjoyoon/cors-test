import { termsSearchAPI, termsAgreeAPI } from 'api/terms';
import { userFixtureByEmail, termsSearchFixture, termsAgreeFixture } from '../__fixtures__';

// 약관 조회 - 회원가입 약관
export const TC1005 = () => {
  const searchFixture = termsSearchFixture({ type: 'JOIN' });

  const execute = async () => {
    const { data } = await termsSearchAPI(searchFixture.payload);

    return {
      input: searchFixture.payload,
      output: data, 
    }
  }

  return {
    id: 'FR-1005',
    tid: 'TC-1005',
    desc: '회원가입 약관을 조회한다.',
    condition: '',
    execute,
  }
}

// 약관 조회 - 개인정보보호 약관
export const TC1006 = () => {
  const searchFixture = termsSearchFixture({ type: 'PRIVACY' });

  const execute = async () => {
    const { data } = await termsSearchAPI(searchFixture.payload);

    return {
      input: searchFixture.payload,
      output: data, 
    }
  }

  return {
    id: 'FR-1005',
    tid: 'TC-1006',
    desc: '개인정보보호 약관을 조회한다.',
    condition: '',
    execute,
  }
}

// 회원가입 약관 동의
export const TC1007 = () => {
  const userFixture = userFixtureByEmail('qa01@tatoo.com');
  const searchFixture = termsSearchFixture({ type: 'JOIN' });

  const execute = async () => {
    const { data } = await termsSearchAPI(searchFixture.payload);
    const { content } = data;
    const [firstContent] = content;
    const { id: termId, type: termType, category } = firstContent || {};
    const { memberId } = userFixture;

    const agreeFixture = termsAgreeFixture({
      memberId,
      termId,
      termType,
      category,
    });

    const { data: agreeData } = await termsAgreeAPI(termId, agreeFixture.payload);

    return {
      input: agreeFixture.payload,
      output: agreeData, 
    }
  }

  return {
    id: 'FR-1005',
    tid: 'TC-1007',
    desc: '회원가입 약관을 동의 처리한다',
    condition: '회원가입 후에만 가능하다.',
    execute,
  }
}
