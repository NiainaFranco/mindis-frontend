import { inject, Injectable } from '@angular/core';
import { RouteInfoType, Status } from '../../types/route-info.type';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Snackbar } from './snackbar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private _snackBar = inject(MatSnackBar);
  private duration = 20
  openSnackBar = (message: string, status: Status = Status.INFO)=>{
    this._snackBar.openFromComponent(Snackbar, {
      duration: this.duration * 1000,
      data: {message: message, status: status} as RouteInfoType
    })
  }

  onEnterRouteWithRouteInfo(router: Router){
    const info = router.currentNavigation()?.extras.info as RouteInfoType;
    if ( info ){
      this.openSnackBar(info.message, info.status);
    }
  }
}
