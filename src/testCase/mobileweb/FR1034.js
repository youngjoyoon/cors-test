import { loginUserByEmail } from 'api/__fixtures__/user';
import { getEstimateProposerAPI } from 'api/estimate';

export const FR1034_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const query = {
      estimateProposerId: 2,
    };

    const { data } = await getEstimateProposerAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1034',
    desc: '일반 사용자가 답변 단건을 조회한다.',
    condition: '',
    execute,
  }
}
