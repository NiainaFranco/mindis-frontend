import {
  Component,
  OnInit,
  signal,
  resource,
  ResourceStatus as RessourceStatusEnum,
} from '@angular/core';
import { RibonColorService } from '../../../../service/ribon-color.service';
import { firstValueFrom, Observable } from 'rxjs';
import { Breadcrumb, BreadCrumbLinkType } from '../../../../components/breadcrumb/breadcrumb';
import { MatList, MatListItem } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { JsonPipe } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { rxResource } from '@angular/core/rxjs-interop';
import { MatAnchor, MatButton, MatFabButton, MatMiniFabButton } from '@angular/material/button';
import { MatIconModule, MatIcon } from '@angular/material/icon';
import { IconsService } from '../../../../service/icons.service';
import { MatSort, MatSortHeader, Sort } from '@angular/material/sort';
import { PaginationMetaWrapper } from '../../../../types/pagination-meta-wrapper.type';
import { GetRibonColor } from '../../../../types/get-ribon-color.type';
import { MatFormField } from '@angular/material/select';
import { AppTableSearchInput } from '../../../../components/app-table-search-input/app-table-search-input';
import { RouterLink, RouterModule } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RibonColorCreateDialog } from '../ribon-color-create-dialog/ribon-color-create-dialog';
import { RibonColorEditDialog } from '../ribon-color-edit-dialog/ribon-color-edit-dialog';

@Component({
  selector: 'app-ribon-color-landing-page',
  imports: [
    Breadcrumb,
    RouterModule,
    MatPaginatorModule,
    MatSort,
    MatTableModule,
    MatMiniFabButton,
    MatIcon,
    MatSortHeader,
    MatMiniFabButton,
    MatFormField,
    MatButton,
    MatDialogModule,
    AppTableSearchInput,
    MatAnchor,
    RouterLink,
    MatFabButton,
  ],
  templateUrl: './ribon-color-landing-page.html',
  styleUrl: './ribon-color-landing-page.css',
})
export class RibonColorLandingPage {
  constructor(
    private ribonColorService: RibonColorService,
    private matDialog: MatDialog,
  ) {}
  handlePageEvent(event: PageEvent) {
    this.page.set(event.pageIndex);
    this.perPage.set(event.pageSize);
  }

  handleFilterByName(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.nameToSearch.set(value);
  }

  handleEditRow(ribonColor: GetRibonColor) {
    this.matDialog
      .open(RibonColorEditDialog, {
        height: '300px',
        width: '250px',
        data: {
          ribonColor: ribonColor,
        },
      })
      .afterClosed()
      .subscribe((edited) => {
        if (edited) {
          this.ribonColorsRessource$.reload();
        }
      });
  }

  handleOpenCreationDialogue() {
    this.matDialog
      .open(RibonColorCreateDialog, {
        height: '300px',
        width: '250px',
      })
      .afterClosed()
      .subscribe((created) => {
        if (created) {
          this.ribonColorsRessource$.reload();
        }
      });
  }

  handleDeleteRow(id: string) {
    this.ribonColorService
      .deleteRibonColorSet({
        ribonColorId: id,
      })
      .subscribe((value) => {
        console.log(value);
        this.ribonColorsRessource$.reload();
      });
  }

  handleFilterSort(event: Sort) {
    const values = this.ribonColorsRessource$.value() as PaginationMetaWrapper<GetRibonColor>;
    const toSort = values.data;
    if (values) {
      this.ribonColorsData$.update(() => {
        const sorted = [...toSort.sort()];
        const isNeutral = event.direction === '';
        const isAsc = event.direction === 'asc';
        return isNeutral ? [...toSort] : isAsc ? [...sorted] : [...sorted.reverse()];
      });
    }
  }

  breadCrumbRoutes: BreadCrumbLinkType[] = [
    {
      routerLink: '/dashboard/ribon-color',
      order: 1,
      routeName: 'Ribon colors',
    },
  ];
  perPage = signal(50);
  page = signal(1);
  nameToSearch = signal('');
  ribonColorsHeaders$ = ['name', 'color', 'actions'];
  ribonColorsData$ = signal<GetRibonColor[]>([]);
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
