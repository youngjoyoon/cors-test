import { getReviewAPI } from 'api/review';

export const TC1044 = () => {
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
    tid: 'TC-1044',
    desc: '리뷰 단건을 조회한다.',
    condition: '',
    execute,
  }
}
