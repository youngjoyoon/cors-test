export const FR1028_1 = () => {
  const execute = async () => {
    return {
      input: null,
      output: null,
    }
  }

  return {
    id: 'FR-1028',
    desc: '타투이스트의 소개를 조회한다.',
    condition: '테스트 불필요 - 타투이스트 프로필 정보에 포함됨',
    execute,
  }
}
