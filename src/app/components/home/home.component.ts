import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userSelectedRating: number = 3;
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
}
