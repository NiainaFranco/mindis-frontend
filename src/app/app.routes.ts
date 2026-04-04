import { Routes } from '@angular/router';
import { LandingPage } from '../pages/landing-page/landing-page.component';
import { LoginPage } from '../pages/login-page/login-page.component';
import { DashboardPage } from '../pages/dashboard-page/dashboard-page.component';
import { AuthorizationGuard } from '../guards/authorization.guard';
import { ForbiddenPage } from '../pages/forbidden/forbidden-page.component';
import { CreateOrderPage } from '../pages/dashboard-page/order/create-order-page/create-order-page';
import { OrderLandingPage } from '../pages/dashboard-page/order/order-landing-page/order-landing-page';
import { EditOrderPage } from '../pages/dashboard-page/order/edit-order-page/edit-order-page';
import { RibonColorLandingPage } from '../pages/dashboard-page/ribon-color/ribon-color-landing-page/ribon-color-landing-page';
import { CreateRibonColorSetPage } from '../pages/dashboard-page/ribon-color-set/create-ribon-color-set-page/create-ribon-color-set-page';
import { EditRibonColorSetPage } from '../pages/dashboard-page/ribon-color-set/edit-ribon-color-set-page/edit-ribon-color-set-page';
import { RibonColorSetLandingPage } from '../pages/dashboard-page/ribon-color-set/ribon-color-set-landing-page/ribon-color-set-landing-page';
import { CreateProductPage } from '../pages/dashboard-page/product/create-product-page/create-product-page';
import { EditProductPage } from '../pages/dashboard-page/product/edit-product-page/edit-product-page';
import { ProductLandingPage } from '../pages/dashboard-page/product/product-landing-page/product-landing-page';
import { CreateProductRibonColorPresentationPage } from '../pages/dashboard-page/product-ribon-color-presentation/create-product-ribon-color-presentation-page/create-product-ribon-color-presentation-page';
import { EditProductRibonColorPresentationPage } from '../pages/dashboard-page/product-ribon-color-presentation/edit-product-ribon-color-presentation-page/edit-product-ribon-color-presentation-page';
import { DashboardLandingPage } from '../pages/dashboard-page/dashboard-landing-page/dashboard-landing-page';

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
      {
        path: '',
        component: DashboardLandingPage,
      },
      { path: 'ribon-color', component: RibonColorLandingPage },
      {
        path: 'ribon-color-set',
        children: [
          { path: 'create', component: CreateRibonColorSetPage },
          { path: 'edit', component: EditRibonColorSetPage },
          { path: '', component: RibonColorSetLandingPage },
        ],
      },
      {
        path: 'order',
        children: [
          { path: 'create', component: CreateOrderPage },
          { path: 'edit/:id', component: EditOrderPage },
          { path: '', component: OrderLandingPage },
        ],
      },
      {
        path: 'product',
        children: [
          { path: 'create', component: CreateProductPage },
          {
            path: 'edit/:id',
            children: [
              { path: '', component: EditProductPage },
              {
                path: 'product-ribon-color-presentation/create',
                component: CreateProductRibonColorPresentationPage,
              },
              {
                path: 'product-ribon-color-presentation/edit',
                component: EditProductRibonColorPresentationPage,
              },
            ],
          },
          { path: '', component: ProductLandingPage },
        ],
      },
    ],
  },
  {
    path: 'forbidden',
    component: ForbiddenPage,
  },
];
