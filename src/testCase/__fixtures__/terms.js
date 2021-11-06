export const termsSearchFixture = (option) => {
  const { type } = option;

  return {
    member: null, // 비회원
    payload: {
      query: {
        type,
        latest: true,
      },
      data: null,
    }
  }
}

export const termsAgreeFixture = (option) => {
  const { memberId, termId, termType, category } = option;

  return {
    member: 'qa01@tatoo.com',
    payload: {
      query: null,
      data: {
        memberId,
        termId,
        termType,
        category,
      },
    }
  }
}
