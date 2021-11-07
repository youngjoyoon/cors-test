import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchReivewByMe } from 'api/review';

export const TC1050 = () => {
  const query = {
    page: 1,
    size: 20,
    sort: ['desc'],
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
    tid: 'TC-1050',
    desc: '내가 작성한 리뷰 목록을 조회한다.',
    condition: '',
    execute,
  }
}
