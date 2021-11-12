import { loginUserByEmail } from 'api/__fixtures__/user';
import { searchEstimateRequestByMeAPI, deleteRequestAPI } from 'api/estimate';

export const FR1032_1 = () => {
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data } = await searchEstimateRequestByMeAPI();

    logout();

    return {
      input: null,
      output: data, 
    }
  }

  return {
    id: 'FR-1032',
    desc: '일반 사용자가 본인이 요청한 견적 목록을 조회한다.',
    condition: '본인이 요청한 견적 목록이 존재해야 한다.',
    execute,
  }
}

export const FR1032_2 = () => {
  const query = {
    page: 1,
    size: 20,
  };
  const execute = async () => {
    const logout = loginUserByEmail('qa01@tattoo.com');
    const { data: searchData } = await searchEstimateRequestByMeAPI();
    const { content } = searchData ?? {};
    const [firstItem] = content ?? [];
    const { id } = firstItem ?? {};

    const { data } = await deleteRequestAPI({ estimateRequestId: id, ...query });

    logout();

    return {
      input: {
        pathValue: { estimateRequestId: id },
        query,
      },
      output: data, 
    }
  }

  return {
    id: 'FR-1032',
    desc: '일반 사용자가 등록한 견적 목록 1건에 대해서 삭제할 수 있다.',
    condition: '본인이 요청한 견적 목록이 존재해야 한다.',
    execute,
  }
}
