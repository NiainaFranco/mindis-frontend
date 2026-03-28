import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateOrUpdateRibonColor } from "../types/create-or-update-ribon-color.type";
import { PaginationMetaWrapper } from "../types/pagination-meta-wrapper.type";
import { GetRibonColor } from "../types/get-ribon-color.type";

@Injectable({providedIn: "root"})
export class RibonColorService {
  constructor(private httpClient : HttpClient){ }

  createOrUpdate(args: CreateOrUpdateRibonColor){
    return this.httpClient.post("/ribon-color/create-or-update", args)
  }
  getAllWithPagination(query: {page: number, name?: string}){
    return this.httpClient.get<PaginationMetaWrapper<GetRibonColor>>("/ribon-color/get-all", {
      params: query
    });
  }
}