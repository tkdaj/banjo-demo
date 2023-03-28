const PRIORITY = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
};

export type Priority = keyof typeof PRIORITY;

export interface Order {
  id: string;
  teamMember: string;
  priority: Priority;
  orderNumber: string;
  team: string;
  dueDate: Date;
}
