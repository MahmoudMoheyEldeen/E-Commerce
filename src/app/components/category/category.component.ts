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
  cart: any = {};
  allCategoriesName: {}[] = [];
  specificCategoryId: string = '';

  form: FormGroup = new FormGroup({
    selectCategory: new FormControl(''),
  });

  rows = 10;
  ngOnInit(): void {
    this.getAllCategories();
    this.submitDropMenue();
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
      .getSpecificCategory(this.specificCategoryId)
      .subscribe({
        next: (response) => {
          console.log('this is category', response.data);
          this.cart = response.data;
          console.log('tesssssssssssssssst', this.cart.name);
        },
      });
  }
  getAllCategories() {
    let allCategories: { id: number; name: string }[] = [];
    this._productService.getAllCategory().subscribe({
      next: (response) => {
        console.log('hhhhhhhhhhhhhhhhhhhhh', response.data[0]._id);
        for (let i = 0; i < response.data.length; i++) {
          let category = {
            id: response.data[i]._id, // Fix the property name to _id
            name: response.data[i].name,
          };
          allCategories.push(category); // Fix the array to allCategories
          console.log(category);
        }
        this.allCategoriesName = allCategories.map((category) => ({
          label: category.name,
          value: category.id,
        }));
        console.log('new with map', this.allCategoriesName);
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

  submitDropMenue() {
    this.form.get('selectCategory')?.valueChanges.subscribe((value) => {
      console.log('Selected category changed to:', value);
      this.specificCategoryId = value;
      this.getspecificCategories();
    });
  }
}
