import { searchTattooAPI } from 'api/search';

export const TC1015 = () => {
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
    const { data } = await searchTattooAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1010',
    tid: 'TC-1015',
    desc: '검색 필터를 설정하여 목록을 조회한다. -> 지역을 서울로 설정하여 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1016 = () => {
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
    const { data } = await searchTattooAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1010',
    tid: 'TC-1016',
    desc: '검색 필터를 설정하여 목록을 조회한다. -> 장르를 반영구로 설정하여 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1017 = () => {
  const query = {
    keyword: null,
    page: 1,
    size: 20,
  };
  const requestBody = {
    filterAreaTypes: [],
    genreTypes: [],
    subjectTypes: ['COMPASS'],
    partTypes: [],
    priceMin: 0,
    priceMax: 0,
    promotion: false,
    installmentPayment: false,
    sameDayReservation: false,
  };

  const execute = async () => {
    const { data } = await searchTattooAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1010',
    tid: 'TC-1017',
    desc: '검색 필터를 설정하여 목록을 조회한다. -> 주제를 컴파스로 설정하여 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1018 = () => {
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
    const { data } = await searchTattooAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1010',
    tid: 'TC-1018',
    desc: '검색 필터를 설정하여 목록을 조회한다. -> 부위를 팔로 설정하여 조회한다.',
    condition: '',
    execute,
  }
}

export const TC1019 = () => {
  const query = {
    keyword: null,
    page: 1,
    size: 20,
  };
  const requestBody = {
    filterAreaTypes: [],
    genreTypes: [],
    subjectTypes: [],
    partTypes: [],
    priceMin: 0,
    priceMax: 50000,
    promotion: false,
    installmentPayment: false,
    sameDayReservation: false,
  };

  const execute = async () => {
    const { data } = await searchTattooAPI({ ...query, ...requestBody });

    return {
      input: {
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1010',
    tid: 'TC-1019',
    desc: '검색 필터를 설정하여 목록을 조회한다. -> 가격을 0~50000원으로 설정하여 조회한다.',
    condition: '',
    execute,
  }
}
