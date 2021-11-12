import { loginUserByEmail } from 'api/__fixtures__/user';
import { createEstimateProposerAPI } from 'api/estimate';
import { getCashForEstimate } from 'api/cash';

export const FR1058_1 = () => {
  const requestBody = {
    id: 7,
    tattooistId: 9,
    price: 30000,
  }

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');

    const { data } = await createEstimateProposerAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1058',
    desc: '작성한 견적 답변을 발송한다.',
    condition: '',
    execute,
  }
}

export const FR1058_2 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await getCashForEstimate();

    logout();

    return {
      input: null,
      output: data,
    }
  }

  return {
    id: 'FR-1058',
    desc: '보유한 캐시 내역을 조회한다.',
    condition: '',
    execute,
  }
}
