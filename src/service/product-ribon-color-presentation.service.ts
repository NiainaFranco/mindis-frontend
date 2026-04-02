import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetProductRibonColorPresentationType } from "../types/get-product-ribon-color-presentation.type";

@Injectable({ providedIn: 'root' })
export class ProductRibonColorPresentationService {
  constructor(private httpClient: HttpClient) {}

  create(args: { productId: string; ribonColorSetId: string }) {
    return this.httpClient.post<GetProductRibonColorPresentationType>(
      '/product-ribon-color-presentation/create',
      args,
    );
  }
  update(args: { id: string; ribonColorSetId: string }) {
    return this.httpClient.patch<GetProductRibonColorPresentationType>(
      '/product-ribon-color-presentation/update',
      args,
    );
  }
  delete(args: { id: string }) {
    return this.httpClient.delete<{ message: string }>(
      `/product-ribon-color-presentation/delete/${args.id}`,
    );
  }
}