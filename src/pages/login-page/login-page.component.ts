import { Component } from '@angular/core';
import { LoginInput } from '../../components/login-page/login-input/input.component';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  imports: [LoginInput],
})
export class LoginPage {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}
  email = new FormControl('');
  password = new FormControl('');
  login(event: SubmitEvent) {
    event.preventDefault();
    this.authService
      .login({
        email: this.email.value || '',
        password: this.password.value || '',
      })
      .subscribe({
        complete: () => {
          console.log('done');
        },
        next: (authentifiedUser) => {
          this.router.navigate(['dashboard']);
          console.log(authentifiedUser);
        },
        error: () => {
          console.log('something happened');
        },
      });
  }
}
