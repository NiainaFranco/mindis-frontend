import { Component, resource, signal } from '@angular/core';
import { RibonColorSetService } from '../../../../service/ribon-color-set.service';
import { firstValueFrom } from 'rxjs';
import { Breadcrumb, BreadCrumbLinkType } from "../../../../components/breadcrumb/breadcrumb";
import { GetRibonColorSetType } from '../../../../types/get-ribon-color-set.type';
import { MatTableModule } from '@angular/material/table';
import { RibonColorSetCard } from "../../../../components/ribon-color-set-card/ribon-color-set-card";
import { AppTableSearchInput } from "../../../../components/app-table-search-input/app-table-search-input";
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-ribon-color-set-landing-page',
  imports: [Breadcrumb, MatTableModule,MatButtonModule, RibonColorSetCard, AppTableSearchInput, RouterModule],
  templateUrl: './ribon-color-set-landing-page.html',
  styleUrl: './ribon-color-set-landing-page.css',
})
export class RibonColorSetLandingPage {
  constructor(private ribonColorSetService: RibonColorSetService) {}
  breadcrumbLinks: BreadCrumbLinkType[]= [{
    order: 1,
    routerLink: "/dashboard/ribon-color-set",
    routeName: "Ribon colors sets"
  }]
  ribonColorSetsHeaders = ["name"]
  page = signal(1);
  nameToSearch = signal('');
  ribonColorSets = signal<GetRibonColorSetType[]>([])
  ribonColorSetRessource$ = resource({
    params: () => ({ page: this.page(), name: this.nameToSearch() }),
    loader: async ({ params }) => {
      const obs = this.ribonColorSetService.getAllWithPagination({
        page: params.page,
        name: params.name,
      });
      const value = await firstValueFrom(obs);
      this.ribonColorSets.set(value.data);
      return value;
    },
  });
  handleFilterByName(){

  }
}
