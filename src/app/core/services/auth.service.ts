import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(emailAddress: string, password: string) {
    return this.http.post('auth/user/login', { EmailAddress: emailAddress, Password: password });
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (token) {
      return true; //!this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  getAuthenticationToken() {
    return localStorage.getItem('token');
  }

  setAuthenticated(token: any) {
    if (token && token.token) {
      localStorage.setItem('token', token.token);
    };
  }

  // getUserRole() {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     return '';
  //   }
  //   const tokenPayload = decode(token);
  //   return tokenPayload.role;
  // }
}
