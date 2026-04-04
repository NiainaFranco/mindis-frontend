import { Component } from "@angular/core";
import { MatButton, MatFabAnchor } from "@angular/material/button";
import { MatList, MatListItem, MatNavList, MatListItemTitle } from "@angular/material/list";
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatDrawerContainer } from "@angular/material/sidenav";
import { RouterOutlet, RouterLinkWithHref, RouterLink } from "@angular/router";

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
    MatFabAnchor,
    MatListItemTitle,
    RouterLinkWithHref,
  ],
})
export class DashboardPage {}