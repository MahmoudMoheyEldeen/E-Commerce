import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss'],
})
export class SubCategoryComponent {
  term: string = '';
  first = 0;
  allCategories: any[] = [];
  categoryId: string = '';

  rows = 10;
  ngOnInit(): void {
    this.getSubCategory();
  }
  constructor(
    private _productService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}
  userSelectedRating: number = 3;
  allProducts: any[] = [];

  getSubCategory() {
    this._activatedRoute.params.subscribe((params) => {
      this.categoryId = params['id'];
      console.log('this is the id', this.categoryId);
    });
    this._productService.getSubCategory(this.categoryId).subscribe({
      next: (response) => {
        console.log('this is subcategory', response);
        this.allProducts = response.data;
        console.log('subcategory', this.allProducts);
      },
    });
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
    this.first = 0;
  }

  isLastPage(): boolean {
    return this.allProducts
      ? this.first === this.allProducts.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.allProducts ? this.first === 0 : true;
  }
}
