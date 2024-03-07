import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  userData = new BehaviorSubject(null);
  constructor(private _httpClient: HttpClient, private _Router: Router) {}

  signUp(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/signup`, data);
  }

  logIn(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/signin`, data);
  }
  decodeUserToken() {
    let userToken = localStorage.getItem('userToken') || '';
    let decodeToken: any = jwtDecode(userToken);
    this.userData.next(decodeToken);
    console.log(this.userData);
  }
  logOut() {
    localStorage.removeItem('userToken');
    this.userData.next(null);
    this._Router.navigate(['/login']);
  }
}
