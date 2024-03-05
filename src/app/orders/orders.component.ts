import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  ngOnInit(): void {
    this.getAllOrders();
  }
  constructor(private _cartService: CartService) {}

  getAllOrders() {
    this._cartService.getAllorders().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
