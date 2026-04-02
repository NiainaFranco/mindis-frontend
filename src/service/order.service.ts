import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetOrderType } from '../types/get-order.type';
import { CreateProductOrderType } from '../types/create-product-order';
import { PaginationMetaWrapper } from '../types/pagination-meta-wrapper.type';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private httpClient: HttpClient) {}
  create(args: {
    contact: string;
    name: string;
    location: string;
    dueDate: Date;
    products: CreateProductOrderType;
  }) {
    return this.httpClient.post<GetOrderType>('/order/create', args);
  }

  update(args: { id: string; contact?: string; location?: string; dueDate?: Date; name?: string }) {
    return this.httpClient.patch<GetOrderType>('/order/update', args);
  }

  getAllPaginated(query: { page: number; contact?: string; name?: string }) {
    return this.httpClient.get<PaginationMetaWrapper<GetOrderType>>('/order/get-all', {
      params: query,
    });
  }
  getOne(args: { id: string }) {
    return this.httpClient.get<GetOrderType>(`/order/get-one/${args.id}`);
  }

  delete(args: { id: string }) {
    return this.httpClient.delete<{ message: string }>(`/order/delete/${args.id}`);
  }

  markAsDelivered(args: { id: string; contact: string; name: string }) {
    return this.httpClient.post<GetOrderType>('/order/mark-as-delivered', args);
  }
}
