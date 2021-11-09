import { searchTattooAPI } from 'api/search';

export const FR1011_1 = () => {
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
    priceMax: 0,
    promotion: true,
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
    id: 'FR-1011',
    desc: '부가 정보를 설정하여 목록을 조회한다. -> 할인 이벤트',
    condition: '',
    execute,
  }
}

export const FR1011_2 = () => {
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
    priceMax: 0,
    promotion: false,
    installmentPayment: true,
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
    id: 'FR-1011',
    desc: '부가 정보를 설정하여 목록을 조회한다. -> 카드 결제',
    condition: '',
    execute,
  }
}

export const FR1011_3 = () => {
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
    priceMax: 0,
    promotion: false,
    installmentPayment: false,
    sameDayReservation: true,
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
    id: 'FR-1011',
    desc: '부가 정보를 설정하여 목록을 조회한다. -> 당일 예약',
    condition: '',
    execute,
  }
}
