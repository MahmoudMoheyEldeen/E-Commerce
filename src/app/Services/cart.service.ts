import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl: string = 'https://ecommerce.routemisr.com';

  constructor(private _httpClient: HttpClient) {}

  addProductToCart(productId: string): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/api/v1/cart`, {
      productId: productId,
    });
  }
  getLoggedUserCart(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/api/v1/cart`);
  }

  deleteProductToCart(productId: string): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}/api/v1/cart/${productId}`);
  }
}
