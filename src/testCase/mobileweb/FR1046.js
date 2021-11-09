import { loginUserByEmail } from 'api/__fixtures__/user';
import { checkNotificationAPI } from 'api/notification';

export const FR1046_1 = () => {
  const query = {
    notificationInApplicationId: 1,
  };
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await checkNotificationAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1046',
    desc: '조회한 알림을 확인처리한다. ',
    condition: '발송된 inapp 알림이 존재해야 한다',
    execute,
  }
}
