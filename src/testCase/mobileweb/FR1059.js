import { loginUserByEmail } from 'api/__fixtures__/user';
import { reportEstimateAPI } from 'api/restriction';

export const FR1059_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa03@tattoo.com');
    const requestBody = {
      estimateRequestId: 7,
      reasonType: 'FALSE_ESTIMATE', // 허위견적
    };

    const { data } = await reportEstimateAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1059',
    desc: '맞춤견적서 의뢰를 신고한다.',
    condition: '',
    execute,
  }
}
