import { v4 as uuidv4 } from 'uuid';

import type { Order } from '@banjo/types';

import { mockOrders } from './mockOrders';

export interface OrderRepository {
  getOrders(): Promise<Order[]>;
  addOrder(newOrder: Omit<Order, 'id'>): Promise<boolean>;
}

const localhostKey = 'demoDbKey';
const delayMS = 120;

function initializeMockDb() {
  const savedOrders = loadOrders();
  if (savedOrders.length === 0) {
    saveOrders(mockOrders);
  }
}

initializeMockDb();

function saveOrders(order: Order[]) {
  localStorage.setItem(localhostKey, JSON.stringify(order));
}

function loadOrders(): Order[] {
  const data = localStorage.getItem(localhostKey);
  return data ? JSON.parse(data) : [];
}

function delay<T>(fn: () => T) {
  return new Promise<T>((res) => setTimeout(() => res(fn()), delayMS));
}

export const orderRepo: OrderRepository = {
  getOrders() {
    try {
      return delay(() => loadOrders());
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error getting orders', e);
      return new Promise((_, reject) => {
        reject([]);
      });
    }
  },
  addOrder(order) {
    return delay(() => {
      try {
        const currentOrders = loadOrders();
        currentOrders.push({ id: uuidv4(), ...order });
        saveOrders(currentOrders);
        return true;
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Error adding order', e);
        return false;
      }
    });
  },
};
