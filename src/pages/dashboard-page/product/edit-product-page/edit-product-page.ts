import { Component, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { Status } from '../../../../types/route-info.type';
import { GetProductType } from '../../../../types/get-product.type';
import { NavigationService } from '../../../../service/navigation.service';

@Component({
  selector: 'app-edit-product-page',
  imports: [],
  templateUrl: './edit-product-page.html',
  styleUrl: './edit-product-page.css',
})
export class EditProductPage {
  productToEdit!: WritableSignal<GetProductType>;
  constructor(private router: Router, private navigationService: NavigationService){
    const state = this.router.currentNavigation()?.extras.state;
    if (!state) {
      this.navigationService.navigate({
        router: router,
        route: ['dashboard', 'products'],
        routeInfo: {
          message: "No product selected",
          status: Status.INFO
        }
      })
    }else {
      const product = state['product'] as GetProductType
      this.productToEdit = signal(product);
    }
  }
}
