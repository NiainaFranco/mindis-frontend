import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthentifiedUser } from '../types/authentified-user.type';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  login(args: { email: string; password: string }) {
    return this.httpClient.post('/auth/login', args);
  }
  logout(): void {}
  whoami(): Observable<AuthentifiedUser> {
    return this.httpClient.get<AuthentifiedUser>('/auth/whoami');
  }
}
