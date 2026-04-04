import { Component, resource, signal } from '@angular/core';
import { RibonColorSetService } from '../../../../service/ribon-color-set.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-ribon-color-set-landing-page',
  imports: [],
  templateUrl: './ribon-color-set-landing-page.html',
  styleUrl: './ribon-color-set-landing-page.css',
})
export class RibonColorSetLandingPage {
  constructor(private ribonColorSetService: RibonColorSetService) {}
  page = signal(1);
  nameToSearch = signal('');
  ribonColorSetRessource$ = resource({
    params: () => ({ page: this.page(), name: this.nameToSearch() }),
    loader: ({ params }) => {
      const obs = this.ribonColorSetService.getAllWithPagination({
        page: params.page,
        name: params.name,
      });
      return firstValueFrom(obs);
    },
  });
}
