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
  ngOnInit(): void {
    this.getAllProducts();
  }
  constructor(private _productService: ProductsService) {}
  userSelectedRating: number = 3;
  allProducts: Products[] = [];
  products: any[] = [
    {
      name: 'Dress',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 50,
      category: 'Women Clothes',
      reviews: 3,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
    },
    {
      name: 'Dress',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 70,
      category: 'Women Clothes',
      reviews: 3,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 5,
    },
    {
      name: 'skirt',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 10,
      category: 'Women Clothes',
      reviews: 3,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
    },
    {
      name: 'Dress',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 50,
      category: 'Women Clothes',
      reviews: 5,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
    },
    {
      name: 'playstation 5 ',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 800,
      category: 'Toys',
      reviews: 5,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
    },
    {
      name: 'Jeans pants',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 25,
      category: 'Women Clothes',
      reviews: 3,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
    },
  ];

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
}
