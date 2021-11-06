import * as testCases from './index';

export const createTestCase = (caseNumber, option) => {
  const macthedTestCase = testCases[caseNumber];

  if (!macthedTestCase) {
    throw Error('일치하는 TC가 존재하지 않습니다.');
  }

  return macthedTestCase(option);
}
