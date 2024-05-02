import { Injectable } from '@angular/core';
import { delay, firstValueFrom, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

   getProducts() { 
    console.log('llego')
    return firstValueFrom(of([
      {
        id: 1,
        name: 'Product 1'
      },
      {
        id: 2,
        name: 'Product 2'
      }
    ]).pipe(
      delay(100),
    ))
  }
}
