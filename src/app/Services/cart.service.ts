import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl: string = 'https://ecommerce.routemisr.com';
  numberofcartItems = new BehaviorSubject(0);
  numberoffavItems = new BehaviorSubject(0);

  constructor(private _httpClient: HttpClient) {
    this.getLoggedUserCart().subscribe({
      next: (response) => {
        console.log(response);
        this.numberofcartItems.next(response.numOfCartItems);
        console.log(
          'this is the number of cart items come from service',
          this.numberofcartItems
        );
      },
      error: (err) => {
        console.log(err);
      },
    });

    this.getLoggedUserFavouriteList().subscribe({
      next: (response) => {
        console.log('favourite response', response.count);
        this.numberoffavItems.next(response.count);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

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
  updateQuantityInCart(productId: string, count: number): Observable<any> {
    return this._httpClient.put(`${this.baseUrl}/api/v1/cart/${productId}`, {
      count: count,
    });
  }

  clearWholecart(): Observable<any> {
    return this._httpClient.delete(`${this.baseUrl}/api/v1/cart`);
  }
  getAllorders(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/api/v1/orders/`);
  }
  addProducttoFavourite(productId: string): Observable<any> {
    return this._httpClient.post(`${this.baseUrl}/api/v1/wishlist`, {
      productId: productId,
    });
  }
  removeProducttoFavourite(productId: string): Observable<any> {
    return this._httpClient.delete(
      `${this.baseUrl}/api/v1/wishlist/${productId}`
    );
  }
  getLoggedUserFavouriteList(): Observable<any> {
    return this._httpClient.get(`${this.baseUrl}/api/v1/wishlist`);
  }
}
