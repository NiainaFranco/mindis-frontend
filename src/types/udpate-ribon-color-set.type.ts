import { GetRibonColor } from './get-ribon-color.type';

export type UpdateRibonColorSetType = {
  id: string;
  name?: string | null;
  ribonColors: GetRibonColor[];
};
