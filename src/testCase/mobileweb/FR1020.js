import { loginUserByEmail } from 'api/__fixtures__/user';
import { getReviewAPI, modifyReviewAPI, createReviewAPI, deleteReviewAPI } from 'api/review';
import { getTattooistAPI } from 'api/tattooist';

export const FR1020_1 = () => {
  const execute = async () => {
    const pathValue = { reviewId: 1 };
    const { data } = await getReviewAPI(pathValue);

    return {
      input: {
        pathValue,
        query: pathValue,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1020',
    desc: '리뷰 단건을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1020_2 = () => {
  const execute = async () => {
    const reviewPathValue = { reviewId: 1 };
    const { data: reviewResp } = await getReviewAPI(reviewPathValue);
    const { content } = reviewResp ?? {};
    const { tattooistId } = content ?? {};

    const pathValue = { tattooistId };
    const { data: tattooistResp } = await getTattooistAPI(pathValue);

    return {
      input: {
        pathValue,
      },
      output: tattooistResp, 
    }
  }

  return {
    id: 'FR-1020',
    desc: '타투이스트 정보를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1020_3 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const pathValue = { reviewId: 1 };
    const requestBody = {
      tattooistId: 7,
      starSatisfaction: 5,
      starCleanliness: 4,
      starKindness: 3,
      genreType: 'BLACK_WALK',
      styleType: 'SIMPLE',
      subjectType: 'BEAUTY',
      subjectEtc: '리뷰 수정 테스트 입니다.2',
      partType: 'ARM',
      description: '리뷰 수정 테스트 입니다.3',
      reviewImages: [],
    };
    const { data } = await modifyReviewAPI({ ...pathValue, ...requestBody });

    logout();

    return {
      input: {
        pathValue,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1020',
    desc: '리뷰를 수정한다.',
    condition: '',
    execute,
  }
}

export const FR1020_4 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');

    // 리뷰를 생성하고 리뷰를 삭제
    const requestBody = {
      tattooistId: 7,
      starSatisfaction: 5,
      starCleanliness: 4,
      starKindness: 3,
      genreType: 'BLACK_WALK',
      styleType: 'SIMPLE',
      subjectType: 'BEAUTY',
      subjectEtc: '리뷰 수정 테스트 입니다.',
      partType: 'ARM',
      description: '리뷰 수정 테스트 입니다.',
      reviewImages: [],
    };
    const { data: createResp } = await createReviewAPI(requestBody);
    const { content } = createResp ?? {};
    const { id: reviewId } = content ?? {};
    const pathValue = { reviewId };

    const { data } = await deleteReviewAPI(pathValue);

    logout();

    return {
      input: {
        pathValue,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1020',
    desc: '리뷰를 삭제한다.',
    condition: '삭제할 리뷰를 하나 새로 등록하고 해당 리뷰를 삭제한다.',
    execute,
  }
}
