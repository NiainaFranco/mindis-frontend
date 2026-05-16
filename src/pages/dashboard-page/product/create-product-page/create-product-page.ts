import { Component } from '@angular/core';
import { Breadcrumb, BreadCrumbLinkType } from "../../../../components/breadcrumb/breadcrumb";
import { ProductService } from '../../../../service/product.service';
import { FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { RouteInfoType, Status } from '../../../../types/route-info.type';
import { SnackbarService } from '../../../../components/snackbar/snackbar.service';

@Component({
  selector: 'app-create-product-page',
  imports: [Breadcrumb, ReactiveFormsModule],
  templateUrl: './create-product-page.html',
  styleUrl: './create-product-page.css',
})
export class CreateProductPage {
  constructor(private productService: ProductService,private router: Router, private formBuilder: FormBuilder, private snackbarService: SnackbarService){
    this.productFormGroup = formBuilder.group({
      description: [''],
      name: [''],
      price: [1]
    })

  }
  selectImage(event: Event){
    const target = event.target as HTMLInputElement
    if(target){
      const files = target.files
      if(files && files?.length > 0){
        this.thumbnail = files[0]
      }
    }
  }
  async createProduct(event: Event){
    event.preventDefault()
    const productToCreate = this.productFormGroup.getRawValue()
    this.productService.create({
       description: productToCreate.description || "",
       name: productToCreate.name || "",
       price: productToCreate.price || 0,
       thumbnail: this.thumbnail
    }).subscribe({
      next: (created)=>{
        this.router.navigate(['dashboard', 'products'], {
          info: {
            message: created.name + " created successfully",
            status: Status.SUCCESS
          } as RouteInfoType
        })
      },
      error: (e)=>{
        this.snackbarService.openSnackBar(e.reason, Status.ERROR)
      }
    })

  }
  thumbnail? : File
  productFormGroup;
  price = new FormControl(0);
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
