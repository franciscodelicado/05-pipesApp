import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../pages/interfaces/hero';

@Pipe({
  name: 'sortbykey',
  standalone: true,
})
export class SortbykeyPipe implements PipeTransform {

  transform(value: Hero[], key: 'name'|'power'|'color' = 'name'): Hero[] {
    if (key === 'name') {
      return value.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (key === 'power') {
      return value.sort((a, b) => a.power.localeCompare(b.power));
    }
    if (key === 'color') {
      return value.sort((a, b) => a.color.localeCompare(b.color));
    }
    return value; // Add this line to return the original value if the key is not valid
  }

}
