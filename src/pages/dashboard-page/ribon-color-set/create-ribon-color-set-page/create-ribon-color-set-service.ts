import { Injectable, WritableSignal } from '@angular/core';
import { GetRibonColor } from '../../../../types/get-ribon-color.type';

@Injectable({
  providedIn: 'root',
})
export class CreateRibonColorSetService {
  async addOrRemoveRibonColorFromSignal(
    signalToWrite: WritableSignal<Map<string, GetRibonColor>>,
    ribonColor: GetRibonColor,
  ) {
    const newMap = new Map(signalToWrite());
    if (signalToWrite().has(ribonColor.id)) {
      newMap.delete(ribonColor.id);
      return signalToWrite.set(newMap);
    }
    newMap.set(ribonColor.id, ribonColor);
    return signalToWrite.set(newMap);
  }
}
