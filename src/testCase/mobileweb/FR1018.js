
import { getTattooAPI, getTattooListByTottooistAPI } from 'api/tattoo';
import { getTattooistAPI } from 'api/tattooist';
import { getReviewByTattooistAPI } from 'api/review';

export const TC1038 = () => {
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
    tid: 'TC-1038',
    desc: '타투 상품 단건을 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1039 = () => {
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
    tid: 'TC-1039',
    desc: '해당 상품을 보유한 타투이스트 정보를 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1040 = () => {
  const pathValue = { tattooistId: 7 };
  const query = {
    page: 1,
    size: 20,
    sort: ['desc'],
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
    tid: 'TC-1040',
    desc: '해당 상품을 보유한 타투이스트 작품 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1041 = () => {
  const query = {
    tattooistId: 7,
    page: 1,
    size: 20,
    sort: ['desc'],
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
    tid: 'TC-1041',
    desc: '해당 상품을 보유한 타투이스트 리뷰 목록을 조회한다.',
    condition: '',
    execute,
  }
}
