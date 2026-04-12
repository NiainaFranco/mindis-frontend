import { Component, Input } from '@angular/core';
import { MatAnchor, MatButton } from "@angular/material/button";

@Component({
  selector: 'app-breadcrumb',
  imports: [MatAnchor, MatButton],
  templateUrl: './breadcrumb.html',
  styleUrl: './_breadcrumb.scss',
})
export class Breadcrumb {
  @Input()
  links: BreadCrumbLinkType[] = []
}

export type BreadCrumbLinkType = {
  order: number
  href?: string
  routeName: string
}
