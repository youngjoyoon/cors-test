import { stringify } from 'infrastructure/query';
import { adminAxiosInstance } from 'infrastructure/axios';

export async function getTattooist(option) {
  return await adminAxiosInstance.get(`/web/v1/tattooist/${option.id}`);
}

export async function searchTattooist(option) {
  const query = stringify({
    type: option.type,
    value: option.value,
    page: option.page,
    size: option.size,
  });

  return await adminAxiosInstance.get(`/web/v1/tattooist/tattooist-search?${query}`);
}

export async function modifyTattooistStatus(option) {
  const query = stringify({
    statusType: option.statusType,
  });

  return await adminAxiosInstance.put(`/web/v1/tattooist/${option.id}/tattooist-status?${query}`);
}
