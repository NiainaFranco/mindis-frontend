import { GetRibonColor } from "./get-ribon-color.type"

export type GetRibonColorSetType = {
  name:string
  id: string
  updatedAt: string
  createdAt: string
  deletedAt: string | null
  ribonColors: GetRibonColor[]
}