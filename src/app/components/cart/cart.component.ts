import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { Products } from '../../interfaces/products';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  cartResponseMessage: any = {};

  constructor(
    private _cartService: CartService,
    private _payment: PaymentService
  ) {}
  ngOnInit(): void {
    // this.increaseQuantity(0);
    this.getLoggedUserCart();
  }
  userSelectedRating: number = 1;
  quantity: number = 1;
  totalPrice: number = 0;
  getLoggedUserCart() {
    this._cartService.getLoggedUserCart().subscribe({
      next: (response) => {
        this.cartProducts = response.data.products;
        this.quantity = response.numOfCartItems;
        this.totalPrice = response.data.totalCartPrice;

        console.log('this is the respnse', response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeItemforLoggedUserCart(productId: string) {
    this._cartService.deleteProductToCart(productId).subscribe({
      next: (response) => {
        this.cartProducts = response.data.products;
        this.quantity = response.numOfCartItems;
        this.totalPrice = response.data.totalCartPrice;
        console.log(' this is response', this.cartProducts);
      },
      error: (err) => {
        console.log('this is error', err);
      },
    });
  }

  updateCartQuantity(productId: string, count: number) {
    this._cartService.updateQuantityInCart(productId, count).subscribe({
      next: (response) => {
        this.cartProducts = response.data.products;
        this.quantity = response.numOfCartItems;
        this.totalPrice = response.data.totalCartPrice;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  clearCart() {
    this._cartService.clearWholecart().subscribe({
      next: (response) => {
        this.cartProducts = [];
        this.quantity = 0;
        this.totalPrice = 0;
        // response.numOfCartItems = 0;
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
