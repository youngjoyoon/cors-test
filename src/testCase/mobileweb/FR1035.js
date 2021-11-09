import { loginUserByEmail } from 'api/__fixtures__/user';
import { reportTattooAPI, reportTattooistAPI, reportEstimateAPI } from 'api/restriction';

export const FR1035_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const requestBody = {
      tattooId: 1,
      reasonType: 'FALSE_ESTIMATE', // 허위견적
    };

    const { data } = await reportTattooAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1035',
    desc: '타투 상품을 신고한다.',
    condition: '',
    execute,
  }
}

export const FR1035_2 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const requestBody = {
      tattooistId: 7,
      reasonType: 'FALSE_ESTIMATE', // 허위견적
    };

    const { data } = await reportTattooistAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1035',
    desc: '타투이스트를 신고한다.',
    condition: '',
    execute,
  }
}

export const FR1035_3 = () => {
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
    id: 'FR-1035',
    desc: '맞춤견적서 의뢰를 신고한다.',
    condition: '',
    execute,
  }
}
