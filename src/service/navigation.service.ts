import { NavigationEnd, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { RouteInfoType } from '../types/route-info.type';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor() {}

  navigate(args: { router: Router; route: string[]; routeInfo: RouteInfoType }): void {
    const { route, routeInfo, router } = args;
    router.navigate(route, {
      info: routeInfo,
    });
  }
}
