import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function getProductsAPI() {
  const query = stringify({
    type: 'CASH_CHARGE',
  });

  return await axiosInstance.get(`/web/v1/product/search-by-type?${query}`);
}
