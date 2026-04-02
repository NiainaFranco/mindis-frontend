import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { GetProductRibonColorPresentationType } from "../types/get-product-ribon-color-presentation.type";

@Injectable({ providedIn: 'root' })
export class ProductRibonColorPresentationService {
  constructor(private httpClient: HttpClient) {}

  create(args: { image: File; productId: string; ribonColorSetId: string }) {
    const { image, productId, ribonColorSetId } = args;
    const formData = new FormData();
    formData.append('ribonColorSetId', ribonColorSetId);
    formData.append('productId', productId);
    formData.append('image', image, image.name);
    return this.httpClient.post<GetProductRibonColorPresentationType>(
      '/product-ribon-color-presentation/create',
      formData,
    );
  }
  update(args: { image: File; id: string; ribonColorSetId: string }) {
    const { image, id, ribonColorSetId } = args;
    const formData = new FormData();
    formData.append('ribonColorSetId', ribonColorSetId);
    formData.append('id', id);
    formData.append('image', image, image.name);
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