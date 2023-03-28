export const PRIORITY = {
  Low: 'Low',
  Medium: 'Medium',
  High: 'High',
} as const;

export type Priority = keyof typeof PRIORITY;

export interface Order {
  id: string;
  teamMember: string;
  priority: Priority;
  orderNumber: string;
  team: string;
  dueDate: Date;
}
