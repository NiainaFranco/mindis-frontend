import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  imports: [],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.css',
})
export class Breadcrumb {
  @Input()
  links: BreadCrumbLinkType[] = []
}

export type BreadCrumbLinkType = {
  order: number
  href: string
  routeName: string
}
