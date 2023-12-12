import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { Hero } from '../interfaces/hero';
import { SortbykeyPipe } from '../../pipes/sortbykey.pipe';




@Component({
    selector: 'products-order',
    templateUrl: './order.component.html',
    styleUrl: './order.component.css',
    standalone: true,
    imports: [
      PrimeNgModule,
      ToggleCasePipe,
      SortbykeyPipe,
    ],
})
export class OrderComponent {

  public toUpper: boolean = false;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      power: 'Super strength',
      color: 'blue'
    },
    {
      name: 'Batman',
      power: 'Rich',
      color: 'black'
    },
    {
      name: 'Robin',
      power: 'Sidekick',
      color: 'green'
    },
    {
      name: 'Flash',
      power: 'Super speed',
      color: 'red'
    },
    {
      name: 'Aquaman',
      power: 'Talk to fish',
      color: 'orange'
    }
  ];

  public sortkey?: keyof Hero = 'name';

  public changeToUpper(): void {
    this.toUpper = !this.toUpper;
  }

  public changeSortKey(sortKey: keyof Hero): void {
    this.sortkey = sortKey;
  }

}
