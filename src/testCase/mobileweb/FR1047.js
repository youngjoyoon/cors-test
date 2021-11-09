import { loginUserByEmail } from 'api/__fixtures__/user';
import { createTattooistAPI } from 'api/tattooist';

export const FR1047_1 = () => {
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
    id: 'FR-1047',
    desc: '추가 타투이스트 페이지를 개설한다.',
    condition: '',
    execute,
  }
}
