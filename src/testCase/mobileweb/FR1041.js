import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchTattooistByConsult } from 'api/tattooist';

export const FR1041_1 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await searchTattooistByConsult(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1041',
    desc: '1번이라도 대화를 신청한 타투이스트 목록을 표시한다.',
    condition: '',
    execute,
  }
}
