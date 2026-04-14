import { Component, Input, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-input',
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule ],
  templateUrl: './form-input.html',
  styleUrl: './form-input.css',
})
export class FormInput {
  @Input()
  label = ""
  @Input()
  errorMessage = ""
  @Input()
  inputControl = new FormControl('')
  @Input()
  blur: ()=>void = ()=>{}
  @Input()
  placeholder = ""
}
