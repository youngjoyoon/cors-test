import { loginUserByEmail } from 'api/__fixtures__/user';
import { createEstimateRequestAPI } from 'api/estimate';

export const FR1031_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const requestBody = {
      tattooDesignType: 'NEW_TATTOO',
      referImageUrl: '',
      genreType: 'SEMI_PERMANENT',
      subject: '신규 맞춤견적서 등록입니다.',
      partDetailType: 'ARM_CHEST_SHORT_SLEEVE',
      sizeType: 'MINI',
      sizeEtcHorizontal: 100,
      sizeEtcVertical: 100,
      visitAbleAreas: ['SEOUL'],
      description: '맞춤견적서 내용입니다. 테스트로 등록하는 견적서에요.',
      proposerCount: 0,
    };
    const { data } = await createEstimateRequestAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1031',
    desc: '일반 사용자가 맞춤 견적을 등록한다. ',
    condition: '',
    execute,
  }
}
