import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitString',
})
export class SplitStringPipe implements PipeTransform {
  transform(str: string, num: number): unknown {
    return str.split(' ').splice(0, num).join('');
  }
}
