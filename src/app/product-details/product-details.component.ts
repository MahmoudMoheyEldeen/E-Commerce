import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Products, Brand } from '../interfaces/products';
import { ProductsService } from '../Services/products.service';
import { ProductDetails } from '../interfaces/product-details';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  providers: [MessageService],
})
export class ProductDetailsComponent implements OnInit {
  productDetails!: ProductDetails;
  productId: string = '';
  brand: Brand[] = [];
  x: boolean = true;
  constructor(
    private messageService: MessageService,
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService
  ) {}
  ngOnInit(): void {
    this.getProductById();
  }

  images: any[] = [];

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

  showSuccess() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'The product Added to cart',
    });
  }
  showError() {
    this.messageService.add({
      severity: 'error',
      summary: 'error',
      detail: 'The product Not added ',
    });
  }
  showInfo() {
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Message Content',
    });
  }

  showWarn() {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warn',
      detail: 'Message Content',
    });
  }

  getProductById() {
    this._activatedRoute.params.subscribe((params) => {
      this.productId = params['id'];
      console.log('this is the id', this.productId);
    });
    this._productService.getProductByID(this.productId).subscribe({
      next: (response) => {
        // console.log('this is the response', response);
        this.productDetails = response.data;
        this.images = response.data.images;
        console.log('this is the response', this.productDetails);
        console.log('this is the images', this.images);
      },
      error: (err) => {
        console.log('this is the error', err);
      },
    });
  }

  addProductToCart() {
    this._cartService.addProductToCart(this.productId).subscribe({
      next: (response) => {
        console.log(response);
        this.showSuccess();
        this._cartService.numberofcartItems.next(response.numOfCartItems);
      },
      error: (err) => {
        console.log(err);
        this.showError();
      },
    });
  }
}
