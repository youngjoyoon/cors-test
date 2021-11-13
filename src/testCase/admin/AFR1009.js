import { loginUserByEmail } from 'api/__fixtures__/user';
import { chargeCashForce, refundCash, refundCashForce, denyRefundCash } from 'api/admin/cash';

export const AFR1009_1 = () => {
  // const pathValue = {
  //   cashHistoryId: null
  // };

  const execute = async () => {
    // const logout = loginUserByEmail('admin@tattoo.com');
    // const { data } = await refundCash(query);

    // logout();

    // return {
    //   input: {
    //     query
    //   },
    //   output: data, 
    // }
    return {
      input: null,
      output: null,
    }
  }

  return {
    id: 'AFR-1009',
    desc: '(테스트 불가) 환불 요청을 승인 처리한다.',
    condition: '',
    execute,
  }
}

export const AFR1009_2 = () => {
  const query = {
    cancelReason: '강제 충전 테스트'
  };

  const execute = async () => {
    const logout = loginUserByEmail('admin@tattoo.com');
    const { data } = await refundCashForce({
      cashHistoryId: 5,
      ...query,
    });

    logout();

    return {
      input: {
        query
      },
      output: data, 
    }
  }

  return {
    id: 'AFR-1009',
    desc: '환불 요청이 없어도 강제 환불 처리한다.',
    condition: '',
    execute,
  }
}

export const AFR1009_3 = () => {
  // const pathValue = {
  //   cashHistoryId: null
  // };

  const execute = async () => {
    // const logout = loginUserByEmail('admin@tattoo.com');
    // const { data } = await refundCash(query);

    // logout();

    // return {
    //   input: {
    //     query
    //   },
    //   output: data, 
    // }
    return {
      input: null,
      output: null,
    }
  }

  return {
    id: 'AFR-1009',
    desc: '(테스트 불가) 환불 요청을 반려 처리한다.',
    condition: '',
    execute,
  }
}