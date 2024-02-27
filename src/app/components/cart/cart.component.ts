import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  ngOnInit(): void {
    // this.increaseQuantity(0);
  }
  userSelectedRating: number = 3;
  quantity: number = 1;
  products: any[] = [
    {
      id: 0,
      name: 'Dress',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 50,
      category: 'Women Clothes',
      reviews: 3,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
      quantity: 20,
    },
    {
      id: 1,
      name: 'Dress',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 70,
      category: 'Women Clothes',
      reviews: 3,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 5,
      quantity: 6,
    },
    {
      id: 2,
      name: 'skirt',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 10,
      category: 'Women Clothes',
      reviews: 3,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
      quantity: 8,
    },
    {
      id: 3,
      name: 'Dress',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 50,
      category: 'Women Clothes',
      reviews: 5,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
      quantity: 12,
    },
    {
      id: 4,
      name: 'playstation 5 ',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 800,
      category: 'Toys',
      reviews: 5,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
      quantity: 1,
    },
    {
      id: 5,
      name: 'Jeans pants',
      image: "src='assets/imgs/main-slider-1.jpeg'",
      price: 25,
      category: 'Women Clothes',
      reviews: 3,
      status: 'asd',
      inventoryStatus: 'InStock',
      userSelectedRating: 2,
      quantity: 1,
    },
  ];

  increaseQuantity(index: number) {
    console.log('index is', index);
    let upadetdQuantity = this.products[index].quantity++;
    console.log(upadetdQuantity);
  }
  decreaseQuantity(index: number) {
    console.log('index is', index);
    let upadetdQuantity = this.products[index].quantity--;
    console.log(upadetdQuantity);
  }
}
