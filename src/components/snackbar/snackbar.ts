import { Component, inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { RouteInfoType, Status } from '../../types/route-info.type';
import { MatAnchor, MatButton } from "@angular/material/button";

@Component({
  selector: 'app-snackbar',
  imports: [MatAnchor, MatButton],
  templateUrl: './snackbar.html',
})
export class Snackbar {
  constructor(private snackBarRef: MatSnackBarRef<Snackbar>) { }
  private _selectColor(arg: Status){
    switch(arg){
      case Status.SUCCESS: return "success-bg"
      case Status.ERROR: return "error-bg"
      case Status.INFO: return "info-bg"
    }
  }
  data = inject(MAT_SNACK_BAR_DATA) as RouteInfoType
  color = this._selectColor(this.data.status)
  close(){
    this.snackBarRef.dismiss()
  }
}

