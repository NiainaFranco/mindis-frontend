import { UpdateRibonColorSetType } from './../types/udpate-ribon-color-set.type';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateRibonColorSetType } from "../types/create-ribon-color-set.type";
import { PaginationMetaWrapper } from "../types/pagination-meta-wrapper.type";
import { GetRibonColorSetType } from "../types/get-ribon-color-set.type";

@Injectable({providedIn: "root"})
export class RibonColorSetService {
  constructor(private httpClient: HttpClient){

  }
  getAllWithPagination(query: {page: number, name?: string}){
    return this.httpClient.get<PaginationMetaWrapper<GetRibonColorSetType>>("/ribon-color-set/get-all", {
      params: query
    });
  }

  createRibonColorSet(arg: {
    ribonColorSet: CreateRibonColorSetType
  }){
    return this.httpClient.post("/ribon-color-set/create", arg.ribonColorSet);
  }

  updateRibonColorSet(arg: {
    ribonColorSet: UpdateRibonColorSetType
  }){
    return this.httpClient.patch("/ribon-color-set/update", arg.ribonColorSet)
  }


}