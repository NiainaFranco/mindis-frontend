import { Component, OnInit } from "@angular/core";
import { MatButton, MatFabAnchor } from "@angular/material/button";
import { MatIcon, MatIconRegistry } from "@angular/material/icon";
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
    MatIcon,
    MatFabAnchor,
    MatListItemTitle,
    RouterLinkWithHref,
    MatListItemIcon,
  ],
  providers: [MatIconRegistry, IconsService],
})
export class DashboardPage implements OnInit {
  constructor(
    private iconsService: IconsService
  ) {}
  ngOnInit(): void {
    this.iconsService.registerSvgIcon('dashboard:home')
  }
}