import { Component, OnInit, signal, resource, ResourceStatus as RessourceStatusEnum } from '@angular/core';
import { RibonColorService } from '../../../../service/ribon-color.service';
import { firstValueFrom, Observable } from 'rxjs';
import { PaginationMetaWrapper } from '../../../../types/pagination-meta-wrapper.type';
import { GetRibonColor } from '../../../../types/get-ribon-color.type';
import { AsyncPipe } from '@angular/common';
import { Breadcrumb, BreadCrumbLinkType } from "../../../../components/breadcrumb/breadcrumb";

@Component({
  selector: 'app-ribon-color-landing-page',
  imports: [Breadcrumb],
  templateUrl: './ribon-color-landing-page.html',
  styleUrl: './ribon-color-landing-page.css',
})
export class RibonColorLandingPage {
  constructor(private ribonColorService: RibonColorService) {}
  breadCrumbRoutes: BreadCrumbLinkType[]=[{
    href: "/dashboard/ribon-color",
    order: 1,
    routeName: "Ribon colors"
  }]
  page = signal(1);
  nameToSearch = signal('');
  ribonColorsRessource$ = resource({
    params: () => ({ page: this.page(), name: this.nameToSearch() }),
    loader: ({ params }) => {
      const obs = this.ribonColorService.getAllWithPagination({
        page: params.page,
        name: params.name,
      });
      return firstValueFrom(obs);
    },
  });
}
