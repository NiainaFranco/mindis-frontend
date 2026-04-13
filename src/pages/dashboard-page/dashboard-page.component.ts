import { Component, OnInit } from "@angular/core";
import { MatButton, MatFabAnchor } from "@angular/material/button";
import { MatIcon, MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatList, MatListItem, MatNavList, MatListItemTitle, MatListItemIcon } from "@angular/material/list";
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatDrawerContainer } from "@angular/material/sidenav";
import { DomSanitizer } from "@angular/platform-browser";
import { RouterOutlet, RouterLinkWithHref, RouterLink } from "@angular/router";
import { IconsService } from "../../service/icons.service";

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
    MatFabAnchor,
    MatListItemTitle,
    RouterLinkWithHref,
    MatListItemIcon,
  ],
  providers: [MatIconRegistry, IconsService],
})
export class DashboardPage {
  constructor(private iconsService: IconsService) {
    this.iconsService.registerSvgIconInNamespace('dashboard', 'home');
  }
}