import { createCoopsDetail } from 'api/board';

export const FR0002_1 = () => {
  const requestBody = {
    title: '제휴하기 제목',
    content: '제휴하기 내용',
    memberId: 'test@tattoo.com',
    memberName: '테스터',
  };
  const execute = async () => {
    const { data } = await createCoopsDetail(requestBody);

    return {
      input: {
        requestBody
      },
      output: data, 
    }
  }

  return {
    id: 'FR-0002',
    desc: '제휴하기 문의를 등록한다.',
    condition: '',
    execute,
  }
}
