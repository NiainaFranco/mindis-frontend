import { Component } from '@angular/core';
import { Breadcrumb, BreadCrumbLinkType } from "../../../../components/breadcrumb/breadcrumb";

@Component({
  selector: 'app-create-product-page',
  imports: [Breadcrumb],
  templateUrl: './create-product-page.html',
  styleUrl: './create-product-page.css',
})
export class CreateProductPage {
  breadCrumbLinks : BreadCrumbLinkType[] = [{
    order: 1,
    routeName: "Products",
    routerLink: "/dashboard/products"
  }, {
    order:2,
    routeName: "Create",
    routerLink: "/dashboard/products/create"
  }]
}
