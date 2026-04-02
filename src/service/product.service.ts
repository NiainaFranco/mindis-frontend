import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetProductType } from '../types/get-product.type';
import { PaginationMetaWrapper } from '../types/pagination-meta-wrapper.type';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private httpClient: HttpClient) {}
  create(args: { thumbnail: File; description: string; name: string; price: number }) {
    const { thumbnail, description, name, price } = args;
    const formData = new FormData();
    formData.append('thumbnail', thumbnail, thumbnail.name);
    formData.append('description', description);
    formData.append('name', name);
    formData.append('price', price.toString());
    return this.httpClient.post<GetProductType>('/product/create', formData);
  }
  update(args: { id: string; thumbnail: File; description: string; name: string; price: number }) {
    const { thumbnail, id, description, name, price } = args;
    const formData = new FormData();
    formData.append('thumbnail', thumbnail, thumbnail.name);
    formData.append('id', id);
    formData.append('description', description);
    formData.append('name', name);
    formData.append('price', price.toString());
    return this.httpClient.patch<GetProductType>('/product/update', formData);
  }
  getAllPaginated(query: { page: number; name: string }) {
    return this.httpClient.get<PaginationMetaWrapper<GetProductType>>('/product/get-all', {
      params: query,
    });
  }
  getOne(args: { id: string }) {
    return this.httpClient.get<GetProductType>(`/product/get-one/${args.id}`);
  }
  delete(args: { id: string }) {
    return this.httpClient.delete<{ message: string }>(`/product/delete/${args.id}`);
  }
}
