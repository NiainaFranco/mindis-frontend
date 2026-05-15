import { Component, OnInit, resource, signal, WritableSignal } from '@angular/core';
import { Router } from '@angular/router';
import { GetRibonColorSetType } from '../../../../types/get-ribon-color-set.type';
import { Breadcrumb, BreadCrumbLinkType } from '../../../../components/breadcrumb/breadcrumb';
import { RouteInfoType, Status } from '../../../../types/route-info.type';
import { RibonColorService } from '../../../../service/ribon-color.service';
import { RibonColorSetService } from '../../../../service/ribon-color-set.service';
import { firstValueFrom } from 'rxjs';
import { GetRibonColor } from '../../../../types/get-ribon-color.type';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CreateRibonColorSetService } from '../create-ribon-color-set-page/create-ribon-color-set-service';

@Component({
  selector: 'app-edit-ribon-color-set-page',
  imports: [Breadcrumb, ReactiveFormsModule ],
  templateUrl: './edit-ribon-color-set-page.html',
  styleUrl: './edit-ribon-color-set-page.css',
})
export class EditRibonColorSetPage {
  breadcrumbLinks: BreadCrumbLinkType[] = [
    {
      order: 1,
      routerLink: '/dashboard/ribon-color-set',
      routeName: 'Ribon colors sets',
    },
    {
      order: 2,
      routerLink: '/dashboard/ribon-color-set/edit',
      routeName: 'Edit',
    },
  ];
  nameForm! : FormControl<string | null>
  page = signal(1);
  nameToSearch = signal('');
  ribonColorsToAddArray$! : WritableSignal<GetRibonColor[]>
  ribonColorSetToEdit?: GetRibonColorSetType;
  ribonColorsData$ = signal<GetRibonColor[]>([])
  ribonColorRessource$ = resource({
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
  })
  updateRibonColorSet = (event: Event)=>{
    event.preventDefault()
    if(this.ribonColorSetToEdit){
      this.ribonColorSetService.updateRibonColorSet({
        ribonColorSet: {
          id: this.ribonColorSetToEdit?.id,
          name: this.nameForm.value,
          ribonColors: this.ribonColorsToAddArray$()
        }
      }).subscribe(()=>{
        this.router.navigate(['dashboard','ribon-color-set'], {
          info: {
            message: 'Updated successfully',
            status: Status.SUCCESS,
          } as RouteInfoType,
        });
      })
    }
  }
  ribonColorsMap$! : WritableSignal<Map<string, GetRibonColor>>
  addOrRemoveRibonColor = (arg: GetRibonColor)=>{
    this.createRibonColorSetService.addOrRemoveRibonColorFromSignal(this.ribonColorsMap$, arg).then(()=>{
        this.ribonColorsToAddArray$.set(
          Array.from(this.ribonColorsMap$().entries()).map((_) => _[1]),
        );
    })
  }

  constructor(private router: Router, private ribonColorService: RibonColorService, private ribonColorSetService: RibonColorSetService, private createRibonColorSetService: CreateRibonColorSetService) {
    const state = this.router.currentNavigation()?.extras.state;
    if (!state) {
      router.navigate(['dashboard','ribon-color-set'], {
        info: {
          message: 'page refreshed',
          status: Status.INFO,
        } as RouteInfoType,
      });
    } else {
      this.ribonColorSetToEdit = state['ribonColorSet'] as GetRibonColorSetType;
      this.nameForm = new FormControl(this.ribonColorSetToEdit.name || "")
      this.ribonColorsToAddArray$ = signal(this.ribonColorSetToEdit.ribonColors)
      this.ribonColorsMap$ = signal(new Map(this.ribonColorSetToEdit.ribonColors.map((ribonColor)=>{
        return [ribonColor.id, ribonColor]
      })))
    }
  }
}
