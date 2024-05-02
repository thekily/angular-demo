import { Injectable } from '@angular/core';
import { delay, firstValueFrom, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductDetails(id: number) {
    return firstValueFrom(of({
      id: id,
      name: 'Product ' + id,
      price: 100 + id,
      description: 'Description for product ' + id
    }).pipe(delay(100)))
  }
}
