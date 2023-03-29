import type { Order } from '@banjo/types';

export const mockOrders: Order[] = [
  {
    id: 'a1b2c3',
    teamMember: 'Alice',
    priority: 'Low',
    orderNumber: 'XJ-101',
    department: 'Engineering',
    dueDate: new Date('2023-04-05'),
  },
  {
    id: 'd4e5f6',
    teamMember: 'Bob',
    priority: 'Medium',
    orderNumber: 'XJ-102',
    department: 'Design',
    dueDate: new Date('2023-04-15'),
  },
  {
    id: 'g7h8i9',
    teamMember: 'Charlie',
    priority: 'High',
    orderNumber: 'XJ-103',
    department: 'Sales',
    dueDate: new Date('2023-04-10'),
  },
  {
    id: 'j0k1l2',
    teamMember: 'David',
    priority: 'Low',
    orderNumber: 'XJ-104',
    department: 'Marketing',
    dueDate: new Date('2023-04-18'),
  },
  {
    id: 'm3n4o5',
    teamMember: 'Eve',
    priority: 'Medium',
    orderNumber: 'XJ-105',
    department: 'Engineering',
    dueDate: new Date('2023-04-22'),
  },
  {
    id: 'p6q7r8',
    teamMember: 'Frank',
    priority: 'High',
    orderNumber: 'XJ-106',
    department: 'Design',
    dueDate: new Date('2023-04-11'),
  },
  {
    id: 's9t0u1',
    teamMember: 'Grace',
    priority: 'Low',
    orderNumber: 'XJ-107',
    department: 'Sales',
    dueDate: new Date('2023-04-28'),
  },
  {
    id: 'v2w3x4',
    teamMember: 'Hannah',
    priority: 'Medium',
    orderNumber: 'XJ-108',
    department: 'Marketing',
    dueDate: new Date('2023-04-20'),
  },
  {
    id: 'y5z6a7',
    teamMember: 'Ian',
    priority: 'High',
    orderNumber: 'XJ-109',
    department: 'Engineering',
    dueDate: new Date('2023-04-14'),
  },
  {
    id: 'b8c9d0',
    teamMember: 'Jane',
    priority: 'Low',
    orderNumber: 'XJ-110',
    department: 'Design',
    dueDate: new Date('2023-04-25'),
  },
  {
    id: 'e1f2g3',
    teamMember: 'Katie',
    priority: 'Medium',
    orderNumber: 'XJ-111',
    department: 'Sales',
    dueDate: new Date('2023-04-09'),
  },
  {
    id: 'h4i5j6',
    teamMember: 'Leo',
    priority: 'High',
    orderNumber: 'XJ-112',
    department: 'Marketing',
    dueDate: new Date('2023-04-12'),
  },
  {
    id: 'k7l8m9',
    teamMember: 'Megan',
    priority: 'Low',
    orderNumber: 'XJ-113',
    department: 'Engineering',
    dueDate: new Date('2023-04-30'),
  },
  {
    id: 'n0o1p2',
    teamMember: 'Oscar',
    priority: 'High',
    orderNumber: 'XJ-114',
    department: 'Design',
    dueDate: new Date('2023-04-19'),
  },
  {
    id: 'q3r4s5',
    teamMember: 'Pamela',
    priority: 'Medium',
    orderNumber: 'XJ-115',
    department: 'Sales',
    dueDate: new Date('2023-04-16'),
  },
];

export const departments = Array.from(new Set(mockOrders.map((order) => order.department)));

export function makeStuffLookRealTimeyish() {
  // don't have real-time global store, so refreshing the page to update the UI with new values for this demo
  window.location.reload();
}
