import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({ providedIn: 'root' })
export class IconsService {
  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {}
  registerSvgIconInNamespace(namespace: string, name: string) {
    const registry = this.iconRegistry.addSvgIconInNamespace(
      namespace,
      name,
      this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`),
    );
    console.log(registry)

  }
  registerSvgIcon(name: string) {
    return this.iconRegistry.addSvgIcon(
      name,
      this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/icons/${name}.svg`),
    );
  }
}