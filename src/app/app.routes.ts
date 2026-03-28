import { Routes } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing-page.component';
import { LoginPage } from '../pages/login-page/login-page.component';
import { DashboardPage } from '../pages/dashboard-page/dashboard-page.component';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { ForbiddenPage } from '../pages/forbidden/forbidden-page.component';
import { RibonColorPage } from '../pages/dashboard-page/ribon-color-page/ribon-color-page.component';
import { RibonColorSetPage } from '../pages/dashboard-page/ribon-color-set-page/ribon-color-set-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'dashboard',
    component: DashboardPage,
    canActivate: [AuthorizationGuard],
    children: [
      { path: 'ribon-colors', component: RibonColorPage},
      { path: 'ribon-color-sets', component: RibonColorSetPage}
    ],
  },
  {
    path: 'forbidden',
    component: ForbiddenPage
  }
];
