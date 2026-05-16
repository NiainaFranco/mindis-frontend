import { Component, resource, signal, OnInit } from '@angular/core';
import { RibonColorSetService } from '../../../../service/ribon-color-set.service';
import { firstValueFrom } from 'rxjs';
import { Breadcrumb, BreadCrumbLinkType } from '../../../../components/breadcrumb/breadcrumb';
import { GetRibonColorSetType } from '../../../../types/get-ribon-color-set.type';
import { MatTableModule } from '@angular/material/table';
import { RibonColorSetCard } from '../../../../components/ribon-color-set-card/ribon-color-set-card';
import { AppTableSearchInput } from '../../../../components/app-table-search-input/app-table-search-input';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SnackbarService } from '../../../../components/snackbar/snackbar.service';
import { Status } from '../../../../types/route-info.type';

@Component({
  selector: 'app-ribon-color-set-landing-page',
  imports: [
    Breadcrumb,
    MatTableModule,
    MatButtonModule,
    RibonColorSetCard,
    AppTableSearchInput,
    RouterModule,
    MatPaginator,
  ],
  templateUrl: './ribon-color-set-landing-page.html',
  styleUrl: './ribon-color-set-landing-page.css',
})
export class RibonColorSetLandingPage {
  constructor(
    private ribonColorSetService: RibonColorSetService,
    private snackBarService: SnackbarService,
    private router: Router,
  ) {
    snackBarService.onEnterRouteWithRouteInfo(router);
  }
  breadcrumbLinks: BreadCrumbLinkType[] = [
    {
      order: 1,
      routerLink: '/dashboard/ribon-color-set',
      routeName: 'Ribon colors sets',
    },
  ];
  ribonColorSetsHeaders = ['name'];
  page = signal(1);
  perPage = signal(10);
  nameToSearch = signal('');
  ribonColorSets = signal<GetRibonColorSetType[]>([]);
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
  handlePageEvent(event: PageEvent) {
    this.page.set(event.pageIndex);
    this.perPage.set(event.pageSize);
  }

  handleFilterByName(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.nameToSearch.set(value);
  }
}
