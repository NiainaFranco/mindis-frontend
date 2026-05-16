import { Component } from '@angular/core';
import { MatButton, MatFabAnchor } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatListItem, MatNavList, MatListItemTitle, MatListItemIcon } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { IconsService } from '../../service/icons.service';

@Component({
  templateUrl: './dashboard-page.component.html',
  imports: [
    RouterLink,
    RouterOutlet,
    MatSidenavContainer,
    MatSidenav,
    MatSidenavContent,
    MatButton,
    MatListItem,
    MatNavList,
    MatIconModule,
    MatListItemTitle,
    RouterLinkWithHref,
    MatListItemIcon,
  ],
  providers: [MatIconRegistry, IconsService],
})
export class DashboardPage {
  constructor(private iconsService: IconsService) {
    this.iconsService.registerSvgIconInNamespace('dashboard', 'home');
    this.iconsService.registerSvgIconInNamespace('dashboard', 'delete');
    this.iconsService.registerSvgIconInNamespace('dashboard', 'add');
    this.iconsService.registerSvgIconInNamespace('dashboard', 'edit');
  }
}
