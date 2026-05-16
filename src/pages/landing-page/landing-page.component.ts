import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  templateUrl: './landing-page.component.html',
  imports: [RouterLink],
})
export class LandingPage {
  toIncrement = 1;
  increment() {
    this.toIncrement++;
  }
}
