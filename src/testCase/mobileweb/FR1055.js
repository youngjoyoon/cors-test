import { loginUserByEmail } from 'api/__fixtures__/user';
import { getEstimateRequestAPI } from 'api/estimate';
import { modifyProfileAPI } from 'api/memberSetting';

export const FR1055_1 = () => {
  const pathValue = {
    estimateRequestId: 7,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    
    await modifyProfileAPI({
      profieType: 'TATTOOIST',
    });

    const { data } = await getEstimateRequestAPI(pathValue);

    await modifyProfileAPI({
      profieType: 'CUSTOMER',
    });

    logout();

    return {
      input: {
        pathValue,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1055',
    desc: '요청 받은 맞춤 견적서 단건을 조회한다.',
    condition: '',
    execute,
  }
}
