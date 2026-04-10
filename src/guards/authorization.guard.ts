import { CanActivate, CanActivateChild, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../service/auth-service.service";
import { catchError, map, of, take } from "rxjs";
import { inject,  Injectable, PLATFORM_ID, REQUEST } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { Request } from "express";

@Injectable({ providedIn: 'root' })
export class AuthorizationGuard implements CanActivate {
  private platformId!: Object;
  constructor(
    private auth: AuthService,
    private router: Router,
  ) {
    this.platformId = inject(PLATFORM_ID) as string;
  }
  canActivate(): MaybeAsync<GuardResult> {
    if (isPlatformBrowser(this.platformId)) {
      return this.auth.whoami().pipe(
        take(1),
        map((authenticatedUser) => {
          if (authenticatedUser) {
            return true;
          } else {
            return this.router.createUrlTree(['/forbidden']);
          }
        }),
        catchError((e) => {
          console.log(e)
          // this.router.navigate(['/forbidden'])
          return of(true);
        }),
      );
    }
    return true;
  }
}
