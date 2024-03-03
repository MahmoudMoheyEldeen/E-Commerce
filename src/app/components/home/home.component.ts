import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Products } from '../../interfaces/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [ProductsService, HttpClient],
})
export class HomeComponent implements OnInit {
  first = 0;

  rows = 10;
  ngOnInit(): void {
    this.getAllProducts();
  }
  constructor(private _productService: ProductsService) {}
  userSelectedRating: number = 3;
  allProducts: Products[] = [];

  getSeverity(inventoryStatus: string): string {
    // Your logic to determine severity based on inventoryStatus
    // For example, you can return 'success', 'info', 'warning', or 'danger'
    // based on different statuses.
    return 'info';
  }

  getAllProducts() {
    this._productService.getAllProducts().subscribe({
      next: (Response) => {
        console.log(
          'this is subcategory ',
          Response.data[0].subcategory[0].name
        );
        this.allProducts = Response.data;
        console.log(this.allProducts);
      },
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.allProducts
      ? this.first === this.allProducts.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.allProducts ? this.first === 0 : true;
  }
}
