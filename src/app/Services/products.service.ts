import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://ecommerce.routemisr.com';

  constructor(private _httpclients: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this._httpclients.get(`${this.baseUrl}/api/v1/products`);
  }
  getProductByID(id: any): Observable<any> {
    return this._httpclients.get(`${this.baseUrl}/api/v1/products/${id}`);
  }
  getSpecificCategory(productId: string): Observable<any> {
    return this._httpclients.get(
      `${this.baseUrl}/api/v1/categories/${productId}`
    );
  }
  getAllCategory(): Observable<any> {
    return this._httpclients.get(`${this.baseUrl}/api/v1/categories`);
  }
  getSubCategory(productId: string): Observable<any> {
    return this._httpclients.get(
      `${this.baseUrl}/api/v1/categories/${productId}/subcategories`
    );
  }
}
