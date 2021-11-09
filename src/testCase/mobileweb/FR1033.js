import { loginUserByEmail } from 'api/__fixtures__/user';
import { createEstimateRequestAPI, createEstimateProposerAPI, getEstimateRequestAPI } from 'api/estimate';

export const FR1033_1 = () => {
  const execute = async () => {
    // const logoutUser = loginUserByEmail('qa01@tattoo.com');
    // const requestBody1 = {
    //   tattooDesignType: 'NEW_TATTOO',
    //   referImageUrl: '',
    //   genreType: 'SEMI_PERMANENT',
    //   subject: '신규 맞춤견적서 등록입니다.',
    //   partDetailType: 'ARM_CHEST_SHORT_SLEEVE',
    //   sizeType: 'MINI',
    //   sizeEtcHorizontal: 100,
    //   sizeEtcVertical: 100,
    //   visitAbleAreas: ['SEOUL'],
    //   description: '맞춤견적서 내용입니다. 테스트로 등록하는 견적서에요.',
    //   proposerCount: 0,
    // };

    // // 견적 등록
    // const { data: resp } = await createEstimateRequestAPI(requestBody1);
    // const { content } = resp ?? {};
    // const { id: requestId } = content ?? {};

    // logoutUser();

    // // 답변 등록
    // const logoutTatooist = loginUserByEmail('qa03@tattoo.com');
    // const requestBody2 = {
    //   id: 7,
    //   tattooistId: 8,
    //   price: 10000,
    // };

    // const { data } = await createEstimateProposerAPI(requestBody2);

    // logoutTatooist();

    // // 견적 단건 조회
    const logoutUser2 = loginUserByEmail('qa01@tattoo.com');
    const query = {
      estimateRequestId: 2,
    };

    const { data: requestResp } = await getEstimateRequestAPI(query);

    logoutUser2();

    return {
      input: {
        query,
      },
      output: requestResp, 
    }
  }

  return {
    id: 'FR-1033',
    desc: '일반 사용자가 본인이 등록한 단건 견적을 조회한다.',
    condition: '',
    execute,
  }
}
