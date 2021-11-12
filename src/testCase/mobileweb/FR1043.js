import { loginUserByEmail } from 'api/__fixtures__/user';
import { getMemberSettingByMe, modifyProfileAPI } from 'api/memberSetting';
import { checkDuplicateName, createTattooistAPI, getTattooistMainAPI } from 'api/tattooist';

export const FR1043_1 = () => {
  const requestBody = {
    profileType: 'TATTOOIST'
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await modifyProfileAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1043',
    desc: '타투이스트로 전환한다.',
    condition: '',
    execute,
  }
}

export const FR1043_2 = () => {
  const requestBody = {
    profileType: 'CUSTOMER'
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await modifyProfileAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1043',
    desc: '고객으로 전환한다.',
    condition: '',
    execute,
  }
}

export const FR1043_3 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await getMemberSettingByMe();

    logout();

    return {
      input: null,
      output: data,
    }
  }

  return {
    id: 'FR-1043',
    desc: '현재 계정이 어떤 타입인지 확인한다.',
    condition: '',
    execute,
  }
}

export const FR1043_4 = () => {
  const query = {
    name: 'qa02 계정의 새로운 타투이스트 페이지',
  };

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await checkDuplicateName(query);

    logout();

    return {
      input: {
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1043',
    desc: '개설할 타투이스트 페이지의 이름 중복을 검사한다.',
    condition: '',
    execute,
  }
}

export const FR1043_5 = () => {
  const requestBody = {
    name: 'qa02 계정의 새로운 타투이스트 페이지',
    sidoAddress: "SEOUL",
    sggAddress: "SEOUL_GANGNAM_GU",
    detailAddress: '상세주소입니다.',
    consultType: "OPEN_TALK",
    consultDetail: '오픈톡 주소입니다',
    intro: '자기 소개입니다.',
    instagramUrl: 'http://instagram.io',
    images: [],
    profile: {
      fileName: 'filename.jpg',
      fileUrl: 'filename.jpg',
      fileSize: 1000,
    },
    termsAgreement: {
      termsType: 'SERVICE',
      termsCategory: 'TATTOOIST_SERVICE',
      agreement: true,
    },
  }

  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await createTattooistAPI(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1043',
    desc: '타투이스트 페이지가 개설된 적이 없다면 페이지를 개설한다.',
    condition: '',
    execute,
  }
}

export const FR1043_6 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await getTattooistMainAPI();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1043',
    desc: '개설된 타투이스트 페이지가 있다면 기본 페이지를 조회한다.',
    condition: '',
    execute,
  }
}
