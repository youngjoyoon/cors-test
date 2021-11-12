import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function createCoopsDetail(option) {
  const data = {
    title: option.title,
    content: option.content,
    memberId: option.memberId,
    memberName: option.memberName,
  };

  return axiosInstance.post(`/web/v1/board/coops/content`, data);
}

export async function getGuideDetail(option) {
  return await axiosInstance.get(`/web/v1/board/guide/content/${option.boardContentId}`);
}

export async function searchGuideDetail(option) {
  const query = stringify({
    type: option.type,
    category: option.category,
    boardSearchType: option.boardSearchType,
    word: option.word,
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/board/guide/content/_search?${query}`);
}
