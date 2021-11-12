import { stringify } from 'infrastructure/query';
import { adminAxiosInstance } from 'infrastructure/axios';

export async function getRestriction(option) {
  return await adminAxiosInstance.get(`/web/v1/restriction/${option.restrictionId}`);
}

export async function searchRestriction(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
  });

  return await adminAxiosInstance.get(`/web/v1/restriction/restriction-search?${query}`);
}

export async function modifyRestrictionStatus(option) {
  const query = stringify({
    status: option.statusType,
  });

  return await adminAxiosInstance.put(`/web/v1/restriction/${option.restrictionId}?${query}`);
}
