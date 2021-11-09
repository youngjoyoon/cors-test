import { searchReviewByKeywordAPI } from 'api/review';

export const FR1021_1 = () => {
  const query = {
    keyword: '친절친절',
    page: 1,
    size: 20,
  };
  const requestBody = {
    filterAreaTypes: [],
    genreTypes: [],
    subjectTypes: [],
    partTypes: [],
    priceMin: 0,
    priceMax: 0,
    promotion: false,
    installmentPayment: false,
    sameDayReservation: false,
  };

  const execute = async () => {
    const { data } = await searchReviewByKeywordAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1021',
    desc: '검색어로 리뷰를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1021_2 = () => {
  const query = {
    keyword: null,
    page: 1,
    size: 20,
  };
  const requestBody = {
    filterAreaTypes: ['SEOUL'],
    genreTypes: [],
    subjectTypes: [],
    partTypes: [],
    priceMin: 0,
    priceMax: 0,
    promotion: false,
    installmentPayment: false,
    sameDayReservation: false,
  };

  const execute = async () => {
    const { data } = await searchReviewByKeywordAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1021',
    desc: '리뷰를 조회한다. -> 지역 필터를 서울로 설정한다.',
    condition: '',
    execute,
  }
}

export const FR1021_3 = () => {
  const query = {
    keyword: null,
    page: 1,
    size: 20,
  };
  const requestBody = {
    filterAreaTypes: [],
    genreTypes: ['SEMI_PERMANENT'],
    subjectTypes: [],
    partTypes: [],
    priceMin: 0,
    priceMax: 0,
    promotion: false,
    installmentPayment: false,
    sameDayReservation: false,
  };

  const execute = async () => {
    const { data } = await searchReviewByKeywordAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1021',
    desc: '리뷰를 조회한다. -> 장르 필터를 반영구로 설정한다.',
    condition: '',
    execute,
  }
}

export const FR1021_4 = () => {
  const query = {
    keyword: null,
    page: 1,
    size: 20,
  };
  const requestBody = {
    filterAreaTypes: [],
    genreTypes: [],
    subjectTypes: [],
    partTypes: ['ARM'],
    priceMin: 0,
    priceMax: 0,
    promotion: false,
    installmentPayment: false,
    sameDayReservation: false,
  };

  const execute = async () => {
    const { data } = await searchReviewByKeywordAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1021',
    desc: '리뷰를 조회한다. -> 부위 필터를 팔로 설정한다.',
    condition: '',
    execute,
  }
}
