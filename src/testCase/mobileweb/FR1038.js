import { loginUserByEmail } from 'api/__fixtures__/user';
import { getRecentTattooAPI } from 'api/tattoo';
import { toggleFavoriteTattooAPI } from 'api/favorite';

export const FR1038_1 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');

    const { data: recentResp } = await getRecentTattooAPI(query);
    const { content } = recentResp;
    const { contents } = content;
    const [firstContent] = contents ?? [];
    const { id } = firstContent ?? {};

    const toggleQuery = {
      tattooId: id,
    };
    const { data: resp } = await toggleFavoriteTattooAPI(toggleQuery);

    logout();

    return {
      input: {
        query: toggleQuery,
        requestBody: null,
      },
      output: resp, 
    }
  }

  return {
    id: 'FR-1038',
    desc: '선택한 타투 좋아요를 클릭한다.',
    condition: '',
    execute,
  }
}
