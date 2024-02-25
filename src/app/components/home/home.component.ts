import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  products: any[] = [
    {
      name: 'Dress',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 20,
      category: 'Women Clothes',
      reviews: 'asdas',
      status: 'asd',
    },
  ];
}
