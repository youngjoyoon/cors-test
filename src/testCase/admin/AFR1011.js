import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchRestriction } from 'api/admin/restriction';

export const AFR1011_1 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await searchRestriction(query);

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1011',
    desc: '신고 목록을 조회한다.',
    condition: '',
    execute,
  }
}
