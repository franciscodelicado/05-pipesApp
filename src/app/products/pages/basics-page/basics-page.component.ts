import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    DatePipe,
    LowerCasePipe,
    PrimeNgModule,
    TitleCasePipe,
    UpperCasePipe,
  ],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public name: string = 'Francisco Manuel dElICAdo';
  public date: Date = new Date();


}
