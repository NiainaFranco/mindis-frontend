import { CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../service/auth-service.service";
import { catchError, map, of, take } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({providedIn: "root"})
export class AuthorizationGuard implements CanActivate, CanActivateChild{
  constructor(private auth: AuthService, private router:Router){

  }
  canActivate(): MaybeAsync<GuardResult> {
    return this.auth.whoami().pipe(
      take(1),
      map(authenticatedUser => {
        if(authenticatedUser){
          return true
        } else{
          return this.router.createUrlTree(["/forbidden"])
        }
      }),
      catchError(()=>{
        this.router.navigate(['/forbidden'])
        return of(false)
      })
    );
  }
 canActivateChild(): MaybeAsync<GuardResult> {
    return this.auth.whoami().pipe(
      take(1),
      map(authenticatedUser => {
        if(authenticatedUser){
          return true
        } else{
          return this.router.createUrlTree(["/forbidden"])
        }
      }),
      catchError(()=>{
        this.router.navigate(['/forbidden'])
        return of(false)
      })
    );
  }
}
