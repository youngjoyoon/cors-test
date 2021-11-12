import { getVersionControl } from 'api/app/version';

export const FR2001_1 = () => {
  const execute = async () => {
    const { data } = await getVersionControl();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-2001',
    desc: '호출 시 앱 관련 정보를 조회한다.',
    condition: '',
    execute,
  }
}
