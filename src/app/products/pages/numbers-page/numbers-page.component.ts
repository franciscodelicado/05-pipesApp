import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-numbers-page',
  standalone: true,
  imports: [
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    PrimeNgModule,
  ],
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public totalSells: number = 2569566.75897;
  public percent: number = 0.2556;
}
