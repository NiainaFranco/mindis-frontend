import { RibonColorSetService } from './../../../../../../service/ribon-color-set.service';
import { Component, resource, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetProductType } from '../../../../../../types/get-product.type';
import { RouteInfoType, Status } from '../../../../../../types/route-info.type';
import { NavigationService } from '../../../../../../service/navigation.service';
import { ProductRibonColorPresentationService } from '../../../../../../service/product-ribon-color-presentation.service';
import { firstValueFrom } from 'rxjs';
import { Breadcrumb, BreadCrumbLinkType } from '../../../../../../components/breadcrumb/breadcrumb';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAnchor, MatButton } from '@angular/material/button';

@Component({
  selector: 'app-create-product-ribon-color-presentation-page',
  imports: [Breadcrumb, ReactiveFormsModule, MatAnchor, MatButton],
  templateUrl: './create-product-ribon-color-presentation-page.html',
  styleUrl: './create-product-ribon-color-presentation-page.css',
})
export class CreateProductRibonColorPresentationPage {
  constructor(
    private ribonColorSetService: RibonColorSetService,
    private productRibonColorPresentationService: ProductRibonColorPresentationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService,
  ) {
    const state = router.currentNavigation()?.extras.state;
    const id = activatedRoute.snapshot.paramMap.get('id');
    if (!state) {
      const routeToGoBack = id
        ? ['dashboard', 'products', 'show-one', id]
        : ['dashboard', 'products'];
      this.navigationService.navigate({
        route: routeToGoBack,
        routeInfo: {
          message: 'No product selected',
          status: Status.INFO,
        },
        router: router,
      });
    } else {
      const currentProduct = state['product'] as GetProductType;
      this.product = currentProduct;
    }
    this.breadCrumbLinks = [
      {
        order: 1,
        routeName: 'Products',
        routerLink: '/dashboard/products',
      },
      {
        order: 2,
        routeName: id!,
        routerLink: '/dashboard/products/show-one/' + id,
      },
      {
        order: 3,
        routeName: 'Create product ribon color',
      },
    ];
  }
  breadCrumbLinks: BreadCrumbLinkType[];
  product!: GetProductType;
  image?: File | null;
  ribonColorSetIdFormControl = new FormControl('');
  submit(event: Event) {
    event.preventDefault();
    const ribonColorSetId = this.ribonColorSetIdFormControl.getRawValue() || '';
    if (this.product.id && ribonColorSetId.length > 0)
      this.productRibonColorPresentationService
        .create({
          productId: this.product.id,
          image: this.image,
          ribonColorSetId: ribonColorSetId,
        })
        .subscribe({
          next: (created) => {
            this.router.navigate(['dashboard', 'products', 'show-one', this.product.id], {
              info: {
                message: 'Product ribon color set created successfully',
                status: Status.SUCCESS,
              } as RouteInfoType,
            });
          },
          error: () => {
            this.router.navigate(['dashboard', 'products', 'show-one', this.product.id], {
              info: {
                message: 'An error occured',
                status: Status.ERROR,
              } as RouteInfoType,
            });
          },
        });
  }
  selectImage(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target) {
      const files = target.files;
      if (files && files?.length > 0) {
        this.image = files[0];
      }
    }
  }
  page = signal(1);
  nameToSearch = signal('');
  ribonColorSetRessource$ = resource({
    params: () => ({ page: this.page(), name: this.nameToSearch() }),
    loader: async ({ params }) => {
      const obs = this.ribonColorSetService.getAllWithPagination({
        page: params.page,
        name: params.name,
      });
      const value = await firstValueFrom(obs);
      return value;
    },
  });
}
