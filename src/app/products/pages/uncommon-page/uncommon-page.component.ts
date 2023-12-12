import { Component } from '@angular/core';

import { FieldsetModule } from 'primeng/fieldset';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    CommonModule,
    FieldsetModule,
    PrimeNgModule,
    TitleCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  // i18en Select
  public name: string = 'Francisco';
  public gender: 'male'|'female' = 'male';
  public invitationMap ={
    male: 'invitarlo',
    female: 'invitarla',
  }

  public changeClient(): void {
    this.name = 'Adoración';
    this.gender = 'female';
  }

  // i18en plural
  public clients: string[] = ['Francisco', 'Adoración', 'Juan', 'María'];
  public clientsMap ={
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }
  public deleteClients(): void {
    this.clients.pop();

  }

  // KeyValue Pipe
  public person = {
    name: 'Francisco',
    age: 35,
    address: 'Madrid, España',
  }

  //Async Pipe
  public myObservableTimer:Observable<number> = interval(1000); // 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14...

  public promiseValue= new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
  });
}
