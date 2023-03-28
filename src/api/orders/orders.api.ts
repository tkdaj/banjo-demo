import type { OrderRepository } from './orders.repository';
import { orderRepo } from './orders.repository';

export const choreApi: OrderRepository = {
  getOrders() {
    return orderRepo.getOrders();
  },
  addOrder(title) {
    return orderRepo.addOrder(title);
  },
};
