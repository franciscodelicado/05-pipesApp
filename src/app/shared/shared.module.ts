import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
  ],
  exports: [
    MenuComponent,
  ]
})
export class SharedModule { }
