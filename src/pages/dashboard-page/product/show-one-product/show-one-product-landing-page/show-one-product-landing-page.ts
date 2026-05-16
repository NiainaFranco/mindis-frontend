import { Component, resource } from '@angular/core';
import { Breadcrumb, BreadCrumbLinkType } from '../../../../../components/breadcrumb/breadcrumb';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../../../service/product.service';
import { RouteInfoType, Status } from '../../../../../types/route-info.type';
import { firstValueFrom } from 'rxjs';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-show-one-product-landing-page',
  imports: [Breadcrumb, MatButton],
  templateUrl: './show-one-product-landing-page.html',
  styleUrl: './show-one-product-landing-page.css',
})
export class ShowOneProductLandingPage {
  breadCrumbLinks!: BreadCrumbLinkType[];
  productId!: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {
    const id = activatedRoute.snapshot.paramMap.get('id');
    if (!id) {
      router.navigate(['dashboard', 'products'], {
        info: {
          message: 'No id provided',
          status: Status.INFO,
        } as RouteInfoType,
      });
    } else {
      this.productId = id;
      this.breadCrumbLinks = [
        {
          order: 1,
          routeName: 'Products',
          routerLink: '/dashboard/products',
        },
        {
          order: 2,
          routeName: id,
        },
      ];
    }
  }
  createProductRibonColorPresentation (){
    this.router.navigate(['product-ribon-color-presentation', 'create'], {
      state: {
        product: this.productResource$.value(),
      },
      relativeTo: this.activatedRoute
    });
  }
  productResource$ = resource({
    loader: async () => {
      const oneProductObs = this.productService.getOne({
        id: this.productId
      });
      const value = await firstValueFrom(oneProductObs)
      return value
    },
  });
}
