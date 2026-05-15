import { Component, Input } from '@angular/core';
import {MatCardModule} from "@angular/material/card"
import { RibonColorDisplay } from "../ribon-color-display/ribon-color-display";
import { GetRibonColorSetType } from '../../types/get-ribon-color-set.type';
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { RouterLink, Router } from "@angular/router";
import { RibonColorSetService } from '../../service/ribon-color-set.service';

@Component({
  selector: 'app-ribon-color-set-card',
  imports: [MatCardModule, RibonColorDisplay, MatButtonModule, MatIcon, RouterLink],
  templateUrl: './ribon-color-set-card.html',
  styleUrl: './ribon-color-set-card.css',
})
export class RibonColorSetCard {
  constructor(private router: Router, private ribonColorSetService: RibonColorSetService){

  }
  @Input()
  ribonColorSet!: GetRibonColorSetType
  onEditClick = ()=>{
    this.router.navigate(["dashboard","ribon-color-set","edit"], {
      state: {
        ribonColorSet: this.ribonColorSet
      }
    })
  }

  onDelete = ()=>{
    this.ribonColorSetService.deleteRibonColorSet({
      ribonColorSetId: this.ribonColorSet.id
    })
  }
}
