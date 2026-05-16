import { GetProductOrderType } from './get-product-order.type';

export type GetOrderType = {
  contact: string;
  location: string;
  name: string;
  dueDate: string;
  updatedAt: string;
  createdAt: string;
  deletedAt: string;
  deliveredAt: string;
  products: GetProductOrderType[];
};
