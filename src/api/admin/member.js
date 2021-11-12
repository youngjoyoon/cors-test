import { stringify } from 'infrastructure/query';
import { adminAxiosInstance } from 'infrastructure/axios';

export async function getMember(option) {
  return await adminAxiosInstance.get(`/web/v1/member/${option.id}`);
}

export async function searchMember(option) {
  const query = stringify({
    type: option.type,
    value: option.value,
    page: option.page,
    size: option.size,
  });

  return await adminAxiosInstance.get(`/web/v1/member/member-search?${query}`);
}

export async function withdrawMember(option) {
  return await adminAxiosInstance.put(`/web/v1/member/${option.id}/member-withdraw`);
}

export async function releaseMember(option) {
  return await adminAxiosInstance.put(`/web/v1/member/${option.id}/member-release`);
}

export async function lockMember(option) {
  return await adminAxiosInstance.put(`/web/v1/member/${option.id}/member-lock`);
}
