import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthentifiedUser } from "../types/authentified-user.type";

@Injectable({ providedIn: 'root' })
export class AuthService{
  constructor(private httpClient: HttpClient) {}
  login(args: { username: string; password: string }) {
    return this.httpClient.post('/api/login', args);
  }
  logout(): void{

  }
  whoami(): Observable<AuthentifiedUser>{
    return this.httpClient.get<AuthentifiedUser>('/api/whoami');
  }
}