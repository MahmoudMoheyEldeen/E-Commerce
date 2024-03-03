import { Pipe, PipeTransform } from '@angular/core';
import { Products } from '../interfaces/products';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(productlist: Products[], terms: string): Products[] {
    return productlist.filter((p) =>
      p.title.toLowerCase().includes(terms.toLowerCase())
    );
  }
}
