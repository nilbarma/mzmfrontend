import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private logged = false;
  private token: string;

  constructor(public router: Router) {}

  public isLogged(): boolean {
    return this.logged || false;
  }

  public setLogged(login: boolean): void {
    this.logged = login;
  }

  public getToken(): string {
    return this.token;
  }

  public setToken(token: string): void {
    this.token = token;
  }
}
