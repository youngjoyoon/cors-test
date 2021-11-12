import { stringify } from 'infrastructure/query';
import { adminAxiosInstance } from 'infrastructure/axios';

export async function getEstimate(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
  });

  return adminAxiosInstance.get(`/web/v1/estimate/my?${query}`);
}
