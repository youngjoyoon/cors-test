import { getReviewByTattooAPI } from 'api/review';

export const FR1019_1 = () => {
  const execute = async () => {
    const query = {
      tattooId: 4,
      reviewOrderType: 'RECENT',
      page: 1,
      size: 20,
    }
    const { data } = await getReviewByTattooAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1019',
    desc: '해당 상품의 리뷰 목록을 조회한다.',
    condition: '',
    execute,
  }
}
