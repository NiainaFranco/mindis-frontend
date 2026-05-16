import { GetProductRibonColorPresentationType } from './get-product-ribon-color-presentation.type';

export type GetProductType = {
  id: string;
  name: string;
  description: string;
  thumbnail?: string;
  price: number;
  productRibonColorPresentations?: GetProductRibonColorPresentationType[];
};
