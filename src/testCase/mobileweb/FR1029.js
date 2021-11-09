import { getReviewByTattooistAPI } from 'api/review';

export const FR1029_1 = () => {
  const execute = async () => {
    const query = {
      tattooistId: 7,
      reviewOrderType: 'RECENT',
      page: 1,
      size: 20,
    }
    const { data } = await getReviewByTattooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1029',
    desc: '타투이스트의 리뷰 목록을 조회한다.',
    condition: '',
    execute,
  }
}
