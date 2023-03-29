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
  // If you want to start with an empty table, set this to false
  const prefillTable = false;
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (prefillTable) {
    const savedOrders = loadOrders();
    if (savedOrders.length === 0) {
      saveOrders(mockOrders);
    }
  }
}

initializeMockDb();

function saveOrders(order: Order[]) {
  localStorage.setItem(localhostKey, JSON.stringify(order));
}

function loadOrders(): Order[] {
  const data = localStorage.getItem(localhostKey);
  const fetchedData: Order[] = data ? JSON.parse(data) : [];
  return fetchedData.map((order) => ({ ...order, dueDate: new Date(order.dueDate) }));
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
