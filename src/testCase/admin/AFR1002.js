import { loginUserByEmail } from 'api/__fixtures__/user';
import { getGuideDetail, createGuideDetail, modifyGuideDetail, deleteGuideDetail } from 'api/admin/board';

export const AFR1002_1 = () => {
  const requestBody = {
    boardUuid: 'wNXPgDBlDmnLPozp',
    title: '활용가이드 등록합니다.',
    content: '활용가이드 내용입니다.',
    categoryName: '분류없음',
    boardContentType: 'NORMAL',
    boardStatusType: 'LIVE',
    visibilityType: 'PUBLIC',
    anonymousPassword: '',
    memberId: 1,
    memberName: '관리자',
    roleType: 'SUPER_ADMIN',
    login: false,
    attachments: [],
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data: detailData } = await createGuideDetail(requestBody);
    const { content } = detailData ?? {};
    const { id } = content ?? {};
    const pathValue = {
      boardContentId: id,
    };
    const { data } = await getGuideDetail(pathValue);

    logout();

    return {
      input: {
        pathValue,
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1002',
    desc: '활용가이드 단건을 조회한다.',
    condition: '',
    execute,
  }
}

export const AFR1002_2 = () => {
  const requestBody = {
    boardUuid: 'wNXPgDBlDmnLPozp',
    title: '활용가이드 등록합니다.',
    content: '활용가이드 내용입니다.',
    categoryName: '분류없음',
    boardContentType: 'NORMAL',
    boardStatusType: 'LIVE',
    visibilityType: 'PUBLIC',
    anonymousPassword: '',
    memberId: 1,
    memberName: '관리자',
    roleType: 'SUPER_ADMIN',
    login: false,
    attachments: [],
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await createGuideDetail(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1002',
    desc: '활용가이드를 등록한다.',
    condition: '',
    execute,
  }
}

export const AFR1002_3 = () => {
  const requestBody = {
    id: 19,
    parentId: 0,
    boardUuid: 'wNXPgDBlDmnLPozp',
    title: '활용가이드 등록합니다.',
    content: '활용가이드 내용입니다.',
    categoryName: '분류없음',
    boardContentType: 'NORMAL',
    boardStatusType: 'LIVE',
    visibilityType: 'PUBLIC',
    anonymousPassword: '',
    memberId: 1,
    memberName: '관리자',
    roleType: 'SUPER_ADMIN',
    login: false,
    attachments: [],
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await modifyGuideDetail(requestBody);

    logout();

    return {
      input: {
        requestBody,
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1002',
    desc: '활용가이드를 수정한다.',
    condition: '',
    execute,
  }
}

export const AFR1002_4 = () => {
  const requestBody = {
    boardUuid: 'wNXPgDBlDmnLPozp',
    title: '활용가이드 등록합니다.',
    content: '활용가이드 내용입니다.',
    categoryName: '분류없음',
    boardContentType: 'NORMAL',
    boardStatusType: 'LIVE',
    visibilityType: 'PUBLIC',
    anonymousPassword: '',
    memberId: 1,
    memberName: '관리자',
    roleType: 'SUPER_ADMIN',
    login: false,
    attachments: [],
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data: detailData } = await createGuideDetail(requestBody);
    const { content } = detailData ?? {};
    const { id } = content ?? {};
    const pathValue = {
      boardContentId: id,
    };

    const { data } = await deleteGuideDetail(pathValue);

    logout();

    return {
      input: {
        pathValue,
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1002',
    desc: '활용가이드를 삭제한다.',
    condition: '',
    execute,
  }
}
