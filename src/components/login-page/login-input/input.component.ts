import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  templateUrl: './input.component.html',
  selector: 'app-login-input',
  imports: [ReactiveFormsModule],
})
export class LoginInput {
  @Input() type?: 'text' | 'password';
  @Input() label: string = '';
  @Input() value = new FormControl('');
}
