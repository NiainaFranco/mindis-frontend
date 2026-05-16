import { RibonColorSetService } from './../../../../../../service/ribon-color-set.service';
import { Component, resource, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetProductType } from '../../../../../../types/get-product.type';
import { RouteInfoType, Status } from '../../../../../../types/route-info.type';
import { NavigationService } from '../../../../../../service/navigation.service';
import { ProductRibonColorPresentationService } from '../../../../../../service/product-ribon-color-presentation.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-create-product-ribon-color-presentation-page',
  imports: [],
  templateUrl: './create-product-ribon-color-presentation-page.html',
  styleUrl: './create-product-ribon-color-presentation-page.css',
})
export class CreateProductRibonColorPresentationPage {
  product!: GetProductType
  image?: File | null
  ribonColorSetId = signal("")
  createProductRibonColorPresentation(){
    if(this.product.id && this.ribonColorSetId().length > 0)
    this.productRibonColorPresentationService.create({
      productId: this.product.id,
      image: this.image,
      ribonColorSetId: this.ribonColorSetId()
    })
  }
  constructor(private ribonColorSetService: RibonColorSetService, private productRibonColorPresentationService: ProductRibonColorPresentationService,private activatedRoute: ActivatedRoute,private router: Router, private navigationService: NavigationService){
    const state = router.currentNavigation()?.extras.state
    const id = activatedRoute.snapshot.paramMap.get('id');
    if(!state){
      const routeToGo = id ? ['dashboard', 'products', 'show-one', id] : ['dashboard', 'products']
      this.navigationService.navigate({
        route:routeToGo,
        routeInfo: {
          message: "No product selected",
          status: Status.INFO
        },
        router: router
      })
    }else{
      const currentProduct = state['product'] as GetProductType
      this.product = currentProduct
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
