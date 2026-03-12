import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  login(args: { username: string; password: string }) {
    return this.httpClient.post('/api/login', args);
  }
}