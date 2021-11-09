import { loginUserByEmail } from 'api/__fixtures__/user';
import { toggleFavoriteTattooistAPI } from 'api/favorite';

export const FR1037_1 = () => {
  const query = {
    tattooistId: 7,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await toggleFavoriteTattooistAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1037',
    desc: '선택한 타투이스트 좋아요를 클릭한다.',
    condition: '',
    execute,
  }
}
