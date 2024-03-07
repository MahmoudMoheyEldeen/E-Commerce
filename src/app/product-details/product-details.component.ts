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
  defaultProduct: Products = {
    sold: 0,
    images: [],
    subcategory: [],
    ratingsQuantity: 0,
    _id: '',
    title: '',
    slug: '',
    description: '',
    quantity: 0,
    price: 0,
    imageCover: '',
    category: {
      _id: '',
      name: '',
      slug: '',
    },
    brand: {
      _id: '',
      name: '',
      slug: '',
    },
    ratingsAverage: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    id: '',
    priceAfterDiscount: 0,
    availableColors: [],
  };
  productId: string = '';
  IsFavourite: boolean = false;
  brand: Brand = {
    _id: '',
    name: '',
    slug: '',
    image: '',
    category: [],
  };
  number: number = 0;
  compareProductID: string = '';
  x: boolean = true;
  constructor(
    private messageService: MessageService,
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute,
    private _cartService: CartService
  ) {}
  ngOnInit(): void {
    this.getProductById();
    this.getLoggedFavouriteList();
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
        this.defaultProduct = response.data;
        this.images = response.data.images;
        this.brand = response.data.brand;
        console.log('this is the response', this.defaultProduct);
        console.log('this is the Brand', this.brand);
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
  addProductTofavouriteList() {
    this._cartService.addProducttoFavourite(this.productId).subscribe({
      next: (response) => {
        console.log('this is length', response.data.length);
        console.log('this is count', response.length);
        this.IsFavourite = true;
        this._cartService.numberoffavItems.next(response.data.length);
        console.log('this is add to favourite response ', response);
      },
      error: (err) => {
        console.log('this is error to  add favourite response', err);
      },
    });
  }
  removeProductfromfavouriteList() {
    this._cartService.removeProducttoFavourite(this.productId).subscribe({
      next: (response) => {
        this._cartService.numberoffavItems.next(response.data.length);

        this.IsFavourite = false;
        console.log('this is remvoed from favourite response ', response);
      },
      error: (err) => {
        console.log('this is error to  remove favourite response', err);
      },
    });
  }
  getLoggedFavouriteList() {
    let matchFound = false;
    this._cartService.getLoggedUserFavouriteList().subscribe({
      next: (response) => {
        console.log('all data in favourite', response.data[0].id);
        for (let i = 0; i < response.data.length; i++) {
          const currentId = response.data[i].id;

          // Compare currentId with productId
          if (currentId === this.productId) {
            matchFound = true;
            this.IsFavourite = true;
            console.log('found');
            break;
          }
        }
        if (!matchFound) {
          this.IsFavourite = false;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
