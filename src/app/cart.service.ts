import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

//a service doesn't use component decoratorbut rather "Injectable"
@Injectable({
  providedIn: 'root'  //we always give providedIn a string of "root". the root means this service is available application wide

})

//Most of the time a service in an angular is a singleton
export class CartService {

  cart: IProduct[] = [];

  constructor() {


  }

  add(product: IProduct) {
    this.cart.push(product); //adding product to a list
     console.log(`product ${product.name} added to cart`);
    }
}
