import { GetProductRibonColorPresentationType } from "./get-product-ribon-color-presentation.type"

export type GetProductOrderType = {
  id: string
  productNumber: number
  productRibonColorPresentation: GetProductRibonColorPresentationType
}