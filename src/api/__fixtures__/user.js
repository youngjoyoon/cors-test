import { login, logout } from 'infrastructure/login';

const users = [
  {
    memberId: 1,
    email: 'qa01@tattoo.com',
    desc: '일반고객',
    uuid: '1389uds1jsadjs3akasdkl2sd',
    webToken: '0gUT0RgxqEn3nkaMV515amGcJ/RhtuDnAorgpipeardS/+fsDUCp0vW30A9nSh7s2AizxAFRBbyDHdHXPi5mRSOGmJMOGYBoocqIu4kdqxEOz8Osw8jyqtd2JB8lJiAV2127RKPEfr/oRcHDG+77ooYRqbdsmjmWsRTaglBm7GV/4PL6vzcpn5wO2Y+1U5aodgjqCLj4RiCZ563FaHH8ASMjgslUcbZ6lvj/TQ8mHRM=',
    appToken: 'b47ff90849f74b48b0d0b21072909139',
  },
  {
    memberId: 2,
    email: 'qa02@tattoo.com',
    desc: '일반 고객 + 타투이스트 1개',
    uuid: '1389uds1jsadjs3akasdkl3sd',
    webToken: '0gUT0RgxqEn3nkaMV515amGcJ/RhtuDnAorgpipearet0CnO5HzJWDctieJcFt5lQIQDFZmtTqirNhkhEVkOU8s9jk5ULslZtApXEbax34Ip1FVoLRYnxAWewmbJuhLlloYZcwRySmSi3ih0l8uQIIYRqbdsmjmWsRTaglBm7GXLGTjalWXEznffCOp/mNf7p9alks2pMBV6ahxjI1aa6yMjgslUcbZ6lvj/TQ8mHRM=',
    appToken: 'ca277047bf574483a1a500f5bcd863a7',
  },
  {
    memberId: 3,
    email: 'qa03@tattoo.com',
    desc: '일반 고객 + 타투이스트 2개',
    uuid: '1389uds1jsadjs3akasdkl4sd',
    webToken: '0gUT0RgxqEn3nkaMV515amGcJ/RhtuDnAorgpipearfCw5rco0bIfgxfeRUveVp2hlHX1AMby35umRHd2vag40Jg+e3wotUhlNk2anM6a50DmI0XoBLpiND32hlDT7sY1jaLDMAXgzaD1VHs/noYRIYRqbdsmjmWsRTaglBm7GVZkaFAy+wHdl9nS3thIwp5Ymq3wnQSRQqW1yQGsgtVCCMjgslUcbZ6lvj/TQ8mHRM=',
    appToken: 'e0907a6a3fbc40c7b50f3c46c002b8f8',
  },
  {
    memberId: 4,
    email: 'admin@tattoo.com',
    desc: '어드민',
    uuid: '',
    webToken: '',
    appToken: '',
  },
]

export const userFixtureByEmail = (email) => {
  return users.find((user) => user.email === email);
}

export const userFixtureByUUid = (uuid) => {
  return users.find((user) => user.uuid === uuid);
}

export const loginUserByEmail = (email) => {
  const matchedUser = users.find((user) => user.email === email);

  if (!matchedUser) {
    throw new Error(`${email}과 일치하는 계정이 없습니다.`)
  }

  login(matchedUser.webToken);

  return logout;
}
