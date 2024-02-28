import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  images: any[] = [
    { source: 'assets/imgs/main-slider-1.jpeg' },
    { source: 'assets/imgs/main-slider-2.jpeg' },
    { source: 'assets/imgs/main-slider-3.jpeg' },
    { source: 'assets/imgs/main-slider-1.jpeg' },
    { source: 'assets/imgs/main-slider-2.jpeg' },
    { source: 'assets/imgs/main-slider-3.jpeg' },
    { source: 'assets/imgs/main-slider-1.jpeg' },
    { source: 'assets/imgs/main-slider-2.jpeg' },
    { source: 'assets/imgs/main-slider-3.jpeg' },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5,
    },
    {
      breakpoint: '768px',
      numVisible: 3,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
    },
  ];
}
