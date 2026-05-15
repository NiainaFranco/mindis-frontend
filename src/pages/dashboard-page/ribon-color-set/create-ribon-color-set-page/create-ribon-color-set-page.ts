import { Component, resource, signal } from '@angular/core';
import { BreadCrumbLinkType, Breadcrumb } from '../../../../components/breadcrumb/breadcrumb';
import { Router } from '@angular/router';
import { GetRibonColor } from '../../../../types/get-ribon-color.type';
import { RibonColorService } from '../../../../service/ribon-color.service';
import { firstValueFrom } from 'rxjs';
import { CreateRibonColorSetService } from './create-ribon-color-set-service';
import { RibonColorSetService } from '../../../../service/ribon-color-set.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAnchor, MatButton } from '@angular/material/button';
import { RouteInfoType, Status } from '../../../../types/route-info.type';

@Component({
  selector: 'app-create-ribon-color-set-page',
  imports: [Breadcrumb, MatButton, ReactiveFormsModule, MatAnchor],
  templateUrl: './create-ribon-color-set-page.html',
  styleUrl: './create-ribon-color-set-page.css',
})
export class CreateRibonColorSetPage {
  constructor(
    private ribonColorSetService: RibonColorSetService,
    private ribonColorService: RibonColorService,
    private createRibonColorSetService: CreateRibonColorSetService,
    private router: Router,
  ) {}
  nameForm = new FormControl('');
  breadCrumbRoutes: BreadCrumbLinkType[] = [
    {
      routerLink: '/dashboard/ribon-color-set',
      order: 1,
      routeName: 'Ribon colors sets',
    },
    {
      routerLink: '/dashboard/ribon-color-set/create',
      order: 2,
      routeName: 'Create',
    },
  ];
  createRibonColorSet(e: Event) {
    e.preventDefault();
    if (this.nameForm.value)
      this.ribonColorSetService
        .createRibonColorSet({
          ribonColorSet: {
            name: this.nameForm.value,
            ribonColors: this.ribonColorsToAddArray$(),
          },
        })
        .subscribe({
          next: (created) => {
            this.router.navigate(['dashboard', 'ribon-color-set'], {
              info: {
                message: created.name + ' created successfully',
                status: Status.SUCCESS,
              } as RouteInfoType,
            });
          },
          error: () => {
            this.router.navigate(['dashboard', 'ribon-color-set'], {
              info: {
                message: 'An error occured',
                status: Status.ERROR,
              } as RouteInfoType,
            });
          },
        });
  }
  ribonColorsToAddArray$ = signal<GetRibonColor[]>([]);
  ribonColorsMap$ = signal<Map<string, GetRibonColor>>(new Map());
  addOrRemoveRibonColor = (ribonColor: GetRibonColor) => {
    this.createRibonColorSetService
      .addOrRemoveRibonColorFromSignal(this.ribonColorsMap$, ribonColor)
      .then(() => {
        this.ribonColorsToAddArray$.set(
          Array.from(this.ribonColorsMap$().entries()).map((_) => _[1]),
        );
      });
  };
  page = signal(1);
  nameToSearch = signal('');
  ribonColorsData$ = signal<GetRibonColor[]>([]);
  ribonColorsRessource$ = resource({
    params: () => ({ page: this.page(), name: this.nameToSearch() }),
    loader: async ({ params }) => {
      const obs = this.ribonColorService.getAllWithPagination({
        page: params.page,
        name: params.name,
      });
      const value = await firstValueFrom(obs);
      this.ribonColorsData$.set([...value.data]);
      return value;
    },
  });
}
