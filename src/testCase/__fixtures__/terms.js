export const termsSearchFixture = (option) => {
  const { type } = option;

  return {
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
