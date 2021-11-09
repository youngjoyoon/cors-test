import { stringify } from 'infrastructure/query';
import { axiosInstance } from 'infrastructure/axios';

export async function getNotificationsAPI(option) {
  const query = stringify({
    page: option.page,
    size: option.size,
  });

  return await axiosInstance.get(`/web/v1/notification/inapplication/search-memberId?${query}`);
}

export async function checkNotificationAPI(option) {
  const query = stringify({
    notificationInApplicationId: option.notificationInApplicationId,
  });

  return await axiosInstance.put(`/web/v1/notification/inapplication/notificationInApplicationId?${query}`);
}
