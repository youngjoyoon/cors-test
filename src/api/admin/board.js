import { stringify } from 'infrastructure/query';
import { adminAxiosInstance } from 'infrastructure/axios';

export async function getGuideDetail(option) {
  return adminAxiosInstance.get(`/web/v1/board/guide/content/${option.boardContentId}`);
}

export async function createGuideDetail(option) {
  const data = {
    id: option.id,
    parentId: option.parentId,
    boardUuid: option.boardUuid,
    title: option.title,
    content: option.content,
    categoryName: option.categoryName,
    boardContentType: option.boardContentType,
    boardStatusType: option.boardStatusType,
    visibilityType: option.visibilityType,
    anonymousPassword: option.anonymousPassword,
    memberId: option.memberId,
    memberName: option.memberName,
    roleType: option.roleType,
    login: option.login,
    attachments: option.attachments,
  };

  return adminAxiosInstance.post(`/web/v1/board/guide/content`, data);
}

export async function modifyGuideDetail(option) {
  const data = {
    id: option.id,
    parentId: option.parentId,
    boardUuid: option.boardUuid,
    title: option.title,
    content: option.content,
    categoryName: option.categoryName,
    boardContentType: option.boardContentType,
    visibilityType: option.visibilityType,
    anonymousPassword: option.anonymousPassword,
    memberId: option.memberId,
    memberName: option.memberName,
    roleType: option.roleType,
    login: option.login,
    attachments: option.attachments,
  };

  return adminAxiosInstance.put(`/web/v1/board/guide/content/${option.id}`, data);
}

export async function deleteGuideDetail(option) {
  return adminAxiosInstance.delete(`/web/v1/board/guide/content/${option.boardContentId}`);
}

export async function searchGuide(option) {
  const query = stringify({
    type: option.type,
    category: option.category,
    boardSearchType: option.boardSearchType,
    word: option.word,
    page: option.page,
    size: option.size,
  });

  return adminAxiosInstance.get(`/web/v1/board/guide/content/board-search?${query}`);
}

export async function getCoopsDetail(option) {
  return adminAxiosInstance.get(`/web/v1/board/coops/content/${option.boardContentId}`);
}

export async function searchCoop(option) {
  const query = stringify({
    type: option.type,
    category: option.category,
    boardSearchType: option.boardSearchType,
    word: option.word,
    page: option.page,
    size: option.size,
  });

  return adminAxiosInstance.get(`/web/v1/board/coops/content/board-search?${query}`);
}