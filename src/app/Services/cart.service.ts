import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  headers: any = {
    // token: localStorage.getItem('usertoken' || ''),
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTQ1ODE5YmU4YjUyMzIzNWQwNjNlMiIsIm5hbWUiOiJheWE1NjciLCJyb2xlIjoidXNlciIsImlhdCI6MTcwOTU3NDE2NCwiZXhwIjoxNzE3MzUwMTY0fQ.OCMAmFp8Mm57wBmrOUguDP-BAK-s1sZeCEICg9OG68A',
  };

  constructor(private _httpClient: HttpClient) {}

  addProductToCart(productId: string): Observable<any> {
    return this._httpClient.post(
      `${this.baseUrl}/api/v1/cart`,
      { productId: productId },
      { headers: this.headers }
    );
  }
  getLoggedUserCart(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/api/v1/cart`, {
      headers: this.headers,
    });
  }
}
