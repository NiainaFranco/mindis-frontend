import { Component, OnInit, signal, resource, ResourceStatus as RessourceStatusEnum } from '@angular/core';
import { RibonColorService } from '../../../../service/ribon-color.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Breadcrumb, BreadCrumbLinkType } from "../../../../components/breadcrumb/breadcrumb";
import { MatList, MatListItem } from "@angular/material/list";
import { MatTableModule } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatAnchor } from "@angular/material/button";

@Component({
  selector: 'app-ribon-color-landing-page',
  imports: [Breadcrumb, MatPaginatorModule, MatTableModule, MatAnchor],
  templateUrl: './ribon-color-landing-page.html',
  styleUrl: './ribon-color-landing-page.css',
})
export class RibonColorLandingPage {
  constructor(private ribonColorService: RibonColorService) {}
  handlePageEvent(event: PageEvent){
    this.page.set(event.pageIndex)
    this.perPage.set(event.pageSize)
  }
  breadCrumbRoutes: BreadCrumbLinkType[]=[{
    href: "/dashboard/ribon-color",
    order: 1,
    routeName: "Ribon colors"
  }]
  page = signal(1);
  perPage = signal(50);
  nameToSearch = signal('');
  ribonColorsHeaders$ = ["name", "color", "actions" ]
  ribonColorsRessource$ = rxResource({
    params: () => ({ page: this.page(), name: this.nameToSearch(), perPage: this.perPage() }),
    stream: ({ params }) => {
      const obs = this.ribonColorService.getAllWithPagination({
        page: params.page,
        name: params.name,
        perPage: params.perPage
      });
      return obs;
    },
  });
}
