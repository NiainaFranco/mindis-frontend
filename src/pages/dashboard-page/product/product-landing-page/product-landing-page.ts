import { Component, resource, signal } from '@angular/core';
import { ProductService } from '../../../../service/product.service';
import { firstValueFrom } from 'rxjs';
import { Breadcrumb, BreadCrumbLinkType } from '../../../../components/breadcrumb/breadcrumb';
import { MatAnchor } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { GetProductType } from '../../../../types/get-product.type';
import { SnackbarService } from '../../../../components/snackbar/snackbar.service';

@Component({
  selector: 'app-product-landing-page',
  imports: [Breadcrumb, MatAnchor, RouterLink],
  templateUrl: './product-landing-page.html',
  styleUrl: './product-landing-page.css',
})
export class ProductLandingPage {
  constructor(
    private productService: ProductService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {
    snackbarService.onEnterRouteWithRouteInfo(router);
  }
  editProduct(product: GetProductType) {
    this.router.navigate(['dashboard', 'products', 'edit'], {
      state: {
        product: product,
      },
    });
  }
  breadCrumbLinks: BreadCrumbLinkType[] = [
    {
      order: 1,
      routeName: 'Products',
      routerLink: '/dashboard/products',
    },
  ];
  name = signal('');
  page = signal(1);
  perPage = signal(10);
  productsRessource$ = resource({
    params: () => ({ name: this.name(), page: this.page(), perPage: this.perPage() }),
    loader: async ({ params }) => {
      const observer = this.productService.getAllPaginated({
        name: params.name,
        page: params.page,
        perPage: params.perPage,
      });
      const products = await firstValueFrom(observer);

      return products;
    },
  });
}
