import { Routes } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing-page.component';
import { LoginPage } from '../pages/login-page/login-page.component';

export const routes: Routes = [{
  path: "",
  component: LandingPage
},{
  path: "login",
  component: LoginPage
}];
