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
  term: string = '';
  first = 0;
  allCategories: any[] = [];

  rows = 10;
  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
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
        this.allProducts = Response.data;
        console.log(this.allProducts);
      },
    });
  }
  getAllCategories() {
    // let allCategories: { id: number; name: string }[] = [];
    this._productService.getAllCategory().subscribe({
      next: (response) => {
        console.log('this is all categories', response.data);
        this.allCategories = response.data;
        // console.log('hhhhhhhhhhhhhhhhhhhhh', response.data[0]._id);
        // for (let i = 0; i < response.data.length; i++) {
        //   let category = {
        //     id: response.data[i]._id, // Fix the property name to _id
        //     name: response.data[i].name,
        //   };
        //   allCategories.push(category); // Fix the array to allCategories
        //   console.log(category);
        // }
        // this.allCategoriesName = allCategories.map((category) => ({
        //   label: category.name,
        //   value: category.id,
        // }));
        // console.log('new with map', this.allCategoriesName);
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
