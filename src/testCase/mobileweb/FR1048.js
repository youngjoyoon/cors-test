import { getTattooistAPI } from 'api/tattooist';
import { getTattooListByTottooistAPI } from 'api/tattoo';
import { getStatisticsEstimateAPI } from 'api/statistics';
import { getReviewByTattooistAPI } from 'api/review';

export const FR1048_1 = () => {
  const query = {
    tattooistId: 7,
  };

  const execute = async () => {
    const { data } = await getTattooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1048',
    desc: '타투이스트 페이지를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1048_2 = () => {
  const query = {
    tattooistId: 7,
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const { data } = await getTattooListByTottooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1048',
    desc: '타투이스트의 작품 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1048_3 = () => {
  const query = {
    tattooistId: 1,
  };
  const execute = async () => {
    const { data } = await getStatisticsEstimateAPI(query);

    return {
      input: {
        query,
      },
      output: data,
    }
  }

  return {
    id: 'FR-1048',
    desc: '타투이스트의 일반 견적을 조회한다.',
    condition: '작업 이력이 없으면 쌓이지 않는다.',
    execute,
  }
}

export const FR1048_4 = () => {
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
    id: 'FR-1048',
    desc: '타투이스트의 리뷰를 조회한다.',
    condition: '',
    execute,
  }
}
