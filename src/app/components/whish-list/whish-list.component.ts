import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-whish-list',
  templateUrl: './whish-list.component.html',
  styleUrls: ['./whish-list.component.scss'],
})
export class WhishListComponent {
  cartProducts: any[] = [];
  cartResponseMessage: any = {};
  cartId: string = '';
  productId: string = '';

  constructor(private _cartService: CartService) {}
  ngOnInit(): void {
    // this.increaseQuantity(0);
    this.getLoggedFavouriteList();
  }
  userSelectedRating: number = 1;
  quantity: number = 1;
  totalPrice: number = 0;
  getLoggedUserCart() {
    this._cartService.getLoggedUserCart().subscribe({
      next: (response) => {
        this.cartId = response.data._id;
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
        this._cartService.numberofcartItems.next(response.numOfCartItems);
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
        this._cartService.numberofcartItems.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getLoggedFavouriteList() {
    this._cartService.getLoggedUserFavouriteList().subscribe({
      next: (response) => {
        this.cartId = response.data._id;
        this.cartProducts = response.data;
        this.quantity = response.numOfCartItems;
        this.totalPrice = response.data.totalCartPrice;

        console.log('this is the respnse for favourite', response.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  removeProductfromfavouriteList(productId: string) {
    this._cartService.removeProducttoFavourite(productId).subscribe({
      next: (response) => {
        this.cartId = response.data._id;
        this.cartProducts = response.data;
        console.log('this is remvoed from favourite response ', response);
      },
      error: (err) => {
        console.log('this is error to  remove favourite response', err);
      },
    });
  }
}
