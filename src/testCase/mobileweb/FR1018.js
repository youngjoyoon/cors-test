
import { getTattooAPI, getTattooListByTottooistAPI } from 'api/tattoo';
import { getTattooistAPI } from 'api/tattooist';
import { getReviewByTattooistAPI } from 'api/review';
import { getStatisticsEstimateAPI } from 'api/statistics';

export const FR1018_1 = () => {
  const execute = async () => {
    const pathValue = { tattooId: 1 };
    const { data } = await getTattooAPI(pathValue);

    return {
      input: {
        pathValue,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1018',
    desc: '타투 상품 단건을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1018_2 = () => {
  const execute = async () => {
    const pathValue = { tattooistId: 7 };
    const { data } = await getTattooistAPI(pathValue);

    return {
      input: {
        pathValue,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1018',
    desc: '해당 상품을 보유한 타투이스트 정보를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1018_3 = () => {
  const pathValue = { tattooistId: 7 };
  const query = {
    page: 1,
    size: 20,
  };
  const execute = async () => {  
    const { data } = await getTattooListByTottooistAPI({ ...pathValue, ...query });

    return {
      input: {
        pathValue,
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1018',
    desc: '해당 상품을 보유한 타투이스트 작품 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1018_4 = () => {
  const query = {
    tattooistId: 7,
    reviewOrderType: 'RECENT',
    page: 1,
    size: 20,
  };
  const execute = async () => {  
    const { data } = await getReviewByTattooistAPI(query);

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1018',
    desc: '해당 상품을 보유한 타투이스트 리뷰 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1018_5 = () => {
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
    id: 'FR-1018',
    desc: '타투이스트 일반 견적을 조회한다.',
    condition: '작업 이력이 없으면 쌓이지 않는다.',
    execute,
  }
}