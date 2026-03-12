import { Routes } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing-page.component';
import { LoginPage } from '../pages/login-page/login-page.component';
import { DashboardPage } from '../pages/dashboard-page/dashboard-page.component';
import { RibonColorsPage } from '../pages/dashboard-page/ribon-colors-page/ribon-colors-page.component';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { ForbiddenPage } from '../pages/forbidden/forbidden-page.component';

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
    children: [{ path: 'ribonColors', component: RibonColorsPage }],
  },
  {
    path: 'forbidden',
    component: ForbiddenPage
  }
];
