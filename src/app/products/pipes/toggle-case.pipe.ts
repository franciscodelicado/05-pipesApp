import { Pipe, PipeTransform } from '@angular/core';

// francisco | toggleCase => FRANCISCO
// FRANCISCO | toggleCase => francisco

@Pipe({
  name: 'toggleCase',
  standalone: true,
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false ): string {
    if (toUpper) {
      return value.toUpperCase();
    }
    return value.toLowerCase();
  }
}
