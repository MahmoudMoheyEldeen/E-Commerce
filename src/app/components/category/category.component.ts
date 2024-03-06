import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { Products } from 'src/app/interfaces/products';
import { SearchPipe } from 'src/app/pipes/search.pipe';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  term: string = '';
  first = 0;
  eachObject: any = {};
  userSelectedRating: number = 3;
  allCategories: any[] = [];
  allCategoriesName: string[] = [];

  form: FormGroup = new FormGroup({
    selectCategory: new FormControl(''),
  });

  rows = 10;
  ngOnInit(): void {
    this.getspecificCategories();
    this.getAllCategories();
  }
  constructor(private _productService: ProductsService) {}

  getSeverity(inventoryStatus: string): string {
    // Your logic to determine severity based on inventoryStatus
    // For example, you can return 'success', 'info', 'warning', or 'danger'
    // based on different statuses.
    return 'info';
  }

  getspecificCategories() {
    this._productService
      .getSpecificCategory('6439d61c0049ad0b52b90051')
      .subscribe({
        next: (response) => {
          console.log('this is category', response.data);
          this.allCategories = response.data;
          console.log(this.allCategories);
        },
      });
  }
  getAllCategories() {
    let allCategories: any[] = [];
    this._productService.getAllCategory().subscribe({
      next: (response) => {
        console.log('hhhhhhhhhhhhhhhhhhhhh', response.data.length);
        for (let i = 0; i < response.data.length; i++) {
          let name = response.data[i].name;
          allCategories.push(name);
          console.log('the name is', name);
          // this.allCategories.push(name);
        }
        this.allCategoriesName = allCategories;
        console.log('this is array of names', this.allCategoriesName);
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
    return this.allCategories
      ? this.first === this.allCategories.length - this.rows
      : true;
  }

  isFirstPage(): boolean {
    return this.allCategories ? this.first === 0 : true;
  }
}
