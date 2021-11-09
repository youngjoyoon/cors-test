import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchReivewByMe } from 'api/review';

export const FR1023_1 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await searchReivewByMe(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1023',
    desc: '내가 작성한 리뷰 목록을 조회한다.',
    condition: '',
    execute,
  }
}
