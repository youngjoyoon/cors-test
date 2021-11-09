import { loginUserByEmail } from 'api/__fixtures__/user';
import { getNotificationsAPI } from 'api/notification';

export const FR1045_1 = () => {
  const query = {
    page: 1,
    size: 20,
  };
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await getNotificationsAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1045',
    desc: '내가 받은 알림 목록을 조회한다.',
    condition: '',
    execute,
  }
}
