import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  userData: any = null;
  constructor(private _httpClient: HttpClient) {}

  signUp(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/signup`, data);
  }

  logIn(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/signin`, data);
  }
  decodeUserToken() {
    let userToken = localStorage.getItem('userToken') || '';
    let decodeToken = jwtDecode(userToken);
    this.userData = decodeToken;
    console.log(this.userData);
  }
}
