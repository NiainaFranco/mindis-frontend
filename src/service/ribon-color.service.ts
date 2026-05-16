import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateOrUpdateRibonColor } from '../types/create-or-update-ribon-color.type';
import { PaginationMetaWrapper } from '../types/pagination-meta-wrapper.type';
import { GetRibonColor } from '../types/get-ribon-color.type';
import { GetAllRessourcePaginationQueryType } from '../types/get-all-ressource-pagination-query.type';

@Injectable({ providedIn: 'root' })
export class RibonColorService {
  constructor(private httpClient: HttpClient) {}

  createOrUpdate(args: CreateOrUpdateRibonColor) {
    return this.httpClient.post('/ribon-color/create-or-update', args);
  }
  getAllWithPagination(query: GetAllRessourcePaginationQueryType) {
    return this.httpClient.get<PaginationMetaWrapper<GetRibonColor>>('/ribon-color/get-all', {
      params: query,
    });
  }
  deleteRibonColorSet(arg: { ribonColorId: string }) {
    return this.httpClient.delete(`/ribon-color/delete/${arg.ribonColorId}`);
  }
}
