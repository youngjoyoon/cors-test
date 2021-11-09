import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchTattooAPI } from 'api/search';
import { getFavoriteTattooAPI, toggleFavoriteTattooAPI } from 'api/favorite';

export const FR1014_1 = () => {
  const query = {
    keyword: '장미',
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
    id: 'FR-1014',
    desc: '검색어로 목록을 조회한다. -> 검색어: 장미',
    condition: '',
    execute,
  }
}

export const FR1014_2 = () => {
  const query = {
    keyword: '장미',
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
    const logout = loginUserByEmail('qa01@tattoo.com');

    const { data: searchResp } = await searchTattooAPI({ ...query, ...requestBody });
    const { content } = searchResp;
    const { contents } = content;
    const [firstContent] = contents ?? [];
    const { id } = firstContent ?? {};

    const toggleQuery = {
      tattooId: 1,
    };
    const { data: resp } = await toggleFavoriteTattooAPI(toggleQuery);

    logout();

    return {
      input: {
        query: toggleQuery,
        requestBody: null,
      },
      output: resp, 
    }
  }

  return {
    id: 'FR-1014',
    desc: '선택한 타투 좋아요를 클릭한다.',
    condition: '',
    execute,
  }
}

export const FR1014_3 = () => {
  const query = {
    page: 1,
    size: 20,
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await getFavoriteTattooAPI(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1014',
    desc: '선택한 타투가 좋아요 목록에 추가되었는지 좋아요 목록을 조회한다.',
    condition: '',
    execute,
  }
}
