import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  constructor(private httpClient: HttpClient) {}
}

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  constructor(private _httpClient: HttpClient) {}

  signUp(data: any): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/api/v1/auth/signup`, data);
  }
}
