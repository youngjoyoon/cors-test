import { loginUserByEmail } from 'api/__fixtures__/user';
import { createTattooistAPI, modifyTattooistAPI, deleteTattooistAPI } from 'api/tattooist';

export const FR1049_1 = () => {
  const query = {
    tattooistId: 10,
  };
  const requestBody = {
    sidoAddress: "SEOUL",
    sggAddress: "SEOUL_GANGNAM_GU",
    detailAddress: '상세주소입니다.',
    consultType: "OPEN_TALK",
    consultDetail: '오픈톡 주소입니다',
    intro: '타투이스트 페이지 수정합니다.',
    instagramUrl: 'http://instagram.io',
    newImages: [],
    removeImages: [],
    profile: {
      fileName: 'filename.jpg',
      fileUrl: 'filename.jpg',
      fileSize: 1000,
    },
  }
  const execute = async () => {
    const logout = loginUserByEmail('qa02@tattoo.com');
    const { data } = await modifyTattooistAPI({ ...query, ...requestBody });

    logout();

    return {
      input: {
        pathValue: query,
        query,
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1049',
    desc: '타투이스트 페이지를 수정한다.',
    condition: '',
    execute,
  }
}

export const FR1049_2 = () => {
  const requestBody = {
    name: `qa02 계정의 추가 타투이스트 페이지 ${new Date().getTime()}`,
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
    const { data: createResp } = await createTattooistAPI(requestBody);
    const { content } = createResp ?? {};
    const { id } = content ?? {};

    const query = { tattooistId: id };
    const { data } = await deleteTattooistAPI(query);

    logout();

    return {
      input: {
        pathValue: query,
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1049',
    desc: '타투이스트 페이지를 삭제한다.',
    condition: '',
    execute,
  }
}
