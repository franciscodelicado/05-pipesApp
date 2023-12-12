import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';


@NgModule({


  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,

  ]
})
export class ProductsModule { }
