import { getReviewByTattooAPI } from 'api/review';

export const TC1043 = () => {
  const execute = async () => {
    const query = {
      tattooId: 4,
      reviewOrderType: 'RECENT',
      page: 1,
      size: 20,
      sort: ['desc'],
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
    tid: 'TC-1043',
    desc: '타투 상품에 대한 리뷰 목록을 조회한다.',
    condition: '',
    execute,
  }
}
