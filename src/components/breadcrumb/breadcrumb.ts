import { Component, Input } from '@angular/core';
import { MatAnchor, MatButton } from "@angular/material/button";
import { IconsService } from '../../service/icons.service';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  imports: [MatAnchor, MatButton, MatIcon, RouterLink],
  templateUrl: './breadcrumb.html',
  styleUrl: './_breadcrumb.scss',
})
export class Breadcrumb {
 constructor(private iconsService: IconsService){
   this.iconsService.registerSvgIconInNamespace(
    "breadcrumb",
    "chevron-right"
   )
 }

  @Input()
  links: BreadCrumbLinkType[] = []
}

export type BreadCrumbLinkType = {
  order: number
  routerLink?: string
  routeName: string
}
