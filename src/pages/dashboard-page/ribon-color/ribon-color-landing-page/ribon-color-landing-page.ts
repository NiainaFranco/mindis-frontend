import { Component, OnInit, signal, resource, ResourceStatus as RessourceStatusEnum } from '@angular/core';
import { RibonColorService } from '../../../../service/ribon-color.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Breadcrumb, BreadCrumbLinkType } from "../../../../components/breadcrumb/breadcrumb";
import { MatList, MatListItem } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatAnchor, MatFabButton, MatMiniFabButton } from "@angular/material/button";
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { IconsService } from '../../../../service/icons.service';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import { PaginationMetaWrapper } from '../../../../types/pagination-meta-wrapper.type';
import { GetRibonColor } from '../../../../types/get-ribon-color.type';
import { MatFormField } from "@angular/material/select";
import { AppTableSearchInput } from "../../../../components/app-table-search-input/app-table-search-input";

@Component({
  selector: 'app-ribon-color-landing-page',
  imports: [Breadcrumb, MatPaginatorModule, MatSort, MatTableModule, MatMiniFabButton, MatIcon, MatSortHeader, MatFormField, AppTableSearchInput],
  templateUrl: './ribon-color-landing-page.html',
  styleUrl: './ribon-color-landing-page.css',
})
export class RibonColorLandingPage {
  constructor(private ribonColorService: RibonColorService) {}
  handlePageEvent(event: PageEvent) {
    this.page.set(event.pageIndex);
    this.perPage.set(event.pageSize);
  }

  handleSearch(){

  }

  handleFilterByName(event: Event){
    const value = (event.target as HTMLInputElement).value;
    const values = this.ribonColorsRessource$.value() as PaginationMetaWrapper<GetRibonColor>;
    const toFilter = values.data
    if(values){
      const filtered = [...toFilter.filter((i)=>(i.name.includes(value)))]
      this.ribonColorsData$.set([...filtered]);
    }
  }

  handleFilterSort(event: Sort){
    const values = this.ribonColorsRessource$.value() as PaginationMetaWrapper<GetRibonColor>;
    const toSort = values.data
    if(values){
      this.ribonColorsData$.update( () => {
        const sorted = [...toSort.sort()];
        const isNeutral = event.direction === ""
        const isAsc = event.direction === "asc"
        return isNeutral ? [...toSort] : (isAsc ? [...sorted] : [...sorted.reverse()])
      });
    }
  }

  breadCrumbRoutes: BreadCrumbLinkType[] = [
    {
      href: '/dashboard/ribon-color',
      order: 1,
      routeName: 'Ribon colors',
    },
  ];
  page = signal(1);
  perPage = signal(50);
  nameToSearch = signal('');
  ribonColorsData$ = signal<GetRibonColor[]>([])
  ribonColorsHeaders$ = ['name', 'color', 'actions'];
  ribonColorsRessource$ = resource({
    params: () => ({ page: this.page(), name: this.nameToSearch(), perPage: this.perPage() }),
    loader: async ({ params }) => {
      const obs = this.ribonColorService.getAllWithPagination({
        page: params.page,
        name: params.name,
        perPage: params.perPage,
      });
      const value = await firstValueFrom(obs);
      this.ribonColorsData$.set([...value.data]);
      return value;
    },
  });
}
