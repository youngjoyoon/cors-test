import { loginUserByEmail } from 'api/__fixtures__/user';
import { createReviewAPI } from 'api/review';

export const FR1022_1 = () => {
  const requestBody = {
    tattooistId: 7,
    starSatisfaction: 4,
    starCleanliness: 5,
    starKindness: 3,
    genreType: 'BLACK_WALK',
    styleType: 'SIMPLE',
    subjectType: 'BEAUTY',
    subjectEtc: '주제 기타 내용 입니다.',
    partType: 'ARM',
    description: '리뷰 내용입니다.',
    reviewImages: [],
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await createReviewAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1022',
    desc: '리뷰를 등록한다',
    condition: '',
    execute,
  }
}
