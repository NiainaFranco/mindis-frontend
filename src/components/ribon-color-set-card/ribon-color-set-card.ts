import { Component, Input } from '@angular/core';
import {MatCardModule} from "@angular/material/card"
import { RibonColorDisplay } from "../ribon-color-display/ribon-color-display";
import { GetRibonColorSetType } from '../../types/get-ribon-color-set.type';
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-ribon-color-set-card',
  imports: [MatCardModule, RibonColorDisplay, MatButtonModule, MatIcon],
  templateUrl: './ribon-color-set-card.html',
  styleUrl: './ribon-color-set-card.css',
})
export class RibonColorSetCard {
  @Input()
  ribonColorSet!: GetRibonColorSetType
}
