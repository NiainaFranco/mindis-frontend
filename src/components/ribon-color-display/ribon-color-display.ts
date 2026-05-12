import { Component, Input } from '@angular/core';
import { GetRibonColor } from '../../types/get-ribon-color.type';

@Component({
  selector: 'app-ribon-color-display',
  imports: [],
  templateUrl: './ribon-color-display.html',
  styleUrl: './ribon-color-display.css',
})
export class RibonColorDisplay {
  @Input()
  ribonColor!: GetRibonColor;
}
