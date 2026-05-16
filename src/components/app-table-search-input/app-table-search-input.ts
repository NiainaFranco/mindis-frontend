import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatHint } from '@angular/material/select';

@Component({
  selector: 'app-table-search-input',
  imports: [MatFormFieldModule, MatInputModule, MatHint],
  templateUrl: './app-table-search-input.html',
  styleUrl: './app-table-search-input.css',
})
export class AppTableSearchInput {
  @Input()
  label: string = '';

  @Input()
  placeHolder: string = '';

  @Input()
  change: (event: Event) => void = () => {
    console.log('no event configured for this input');
  };
}
