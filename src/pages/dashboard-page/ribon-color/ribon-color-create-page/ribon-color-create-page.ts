import { Component, signal } from '@angular/core';
import { Breadcrumb, BreadCrumbLinkType } from '../../../../components/breadcrumb/breadcrumb';
import { MatAnchor } from '@angular/material/button';
import { FormInput } from '../../../../components/form-input/form-input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/select';
import { MatFormFieldControl, MatFormFieldModule } from '@angular/material/form-field';
import { RibonColorService } from '../../../../service/ribon-color.service';

@Component({
  selector: 'app-ribon-color-create-page',
  imports: [Breadcrumb, MatAnchor, FormInput, MatFormFieldModule, ReactiveFormsModule],
  templateUrl: './ribon-color-create-page.html',
  styleUrl: './ribon-color-create-page.css',
})
export class RibonColorCreatePage {
  constructor(private ribonColorService: RibonColorService) {}

  breadcrumbRoutes: BreadCrumbLinkType[] = [
    {
      routerLink: '/dashboard/ribon-color',
      order: 1,
      routeName: 'Ribon colors',
    },
    {
      order: 2,
      routeName: 'Create',
    },
  ];
  submit = (event: Event) => {
    event.preventDefault();
    if (this.color.value && this.name.value) {
      this.ribonColorService.createOrUpdate({
        color: this.color.value,
        name: this.name.value,
      }).subscribe((created)=>{
        console.log(created)

      });
    }
  };
  name = new FormControl('');
  nameErrorMessage = signal('');
  color = new FormControl('');
}
