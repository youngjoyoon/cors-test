import { searchTattooistByRecentReview } from 'api/tattooist';
import { searchReviewByKeywordAPI } from 'api/review';

export const FR1036_1 = () => {
  const execute = async () => {
    const { data } = await searchTattooistByRecentReview();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1036',
    desc: '리뷰가 업데이트된 타투이스트 목록을 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1036_2 = () => {
  const execute = async () => {
    const query = {
      keyword: null,
      page: 1,
      size: 2,
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
    id: 'FR-1036',
    desc: '최신순으로 리뷰를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1036_3 = () => {
  const execute = async () => {
    const query = {
      keyword: '리뷰 내용입니다.',
      page: 1,
      size: 2,
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
    id: 'FR-1036',
    desc: '검색어로 리뷰를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1036_4 = () => {
  const execute = async () => {
    const query = {
      keyword: null,
      page: 1,
      size: 2,
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
    id: 'FR-1036',
    desc: '지역을 서울로 설정하여 리뷰를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1036_5 = () => {
  const execute = async () => {
    const query = {
      keyword: null,
      page: 1,
      size: 2,
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
    id: 'FR-1036',
    desc: '장르를 반영구로 설정하여 리뷰를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1036_6 = () => {
  const execute = async () => {
    const query = {
      keyword: null,
      page: 1,
      size: 2,
    };
    const requestBody = {
      filterAreaTypes: [],
      genreTypes: [],
      subjectTypes: ['BEAUTY'],
      partTypes: [],
      priceMin: 0,
      priceMax: 0,
      promotion: false,
      installmentPayment: false,
      sameDayReservation: false,
    };

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
    id: 'FR-1036',
    desc: '주제를 미용으로 설정하여 리뷰를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1036_7 = () => {
  const execute = async () => {
    const query = {
      keyword: null,
      page: 1,
      size: 2,
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
    id: 'FR-1036',
    desc: '부위를 팔로 설정하여 리뷰를 조회한다.',
    condition: '',
    execute,
  }
}

export const FR1036_8 = () => {
  const execute = async () => {
    const query = {
      keyword: null,
      page: 1,
      size: 2,
    };
    const requestBody = {
      filterAreaTypes: [],
      genreTypes: [],
      subjectTypes: [],
      partTypes: [],
      priceMin: 10,
      priceMax: 100000,
      promotion: false,
      installmentPayment: false,
      sameDayReservation: false,
    };

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
    id: 'FR-1036',
    desc: '가격을 10-100000으로 설정하여 조회한다.',
    condition: '',
    execute,
  }
}
