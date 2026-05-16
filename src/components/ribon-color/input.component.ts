import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './input.component.html',
  selector: 'app-input',
  imports: [ReactiveFormsModule],
})
export class AppInput {
  @Input() type?: 'text' | 'password' | 'color';
  @Input() label: string = '';
  @Input() value: FormControl | AbstractControl | null = new FormControl('');
  usedValue = this.value as FormControl;
}
