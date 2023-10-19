import { Injectable } from '@angular/core';
import { Product, products } from './products';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items:  Product[] = [];
  constructor(private http: HttpClient) {
   if(localStorage.getItem("Items")){
      this.items = JSON.parse(localStorage.getItem("Items")!)
   } else{
     console.log(this.items)
   }
   

   }

  addTocart(product: Product){
    console.log(this.items,product)
    this.items.push(product)
    localStorage.setItem("Items",JSON.stringify(this.items))
  }


  getItems(){
    return this.items
  }

  clearCart(){
    this.items = []
    return this.items;
  }



  
getShippingPrices(){  
  return this.http.get<{type: string, price: number}[]>('/assets/shipping.json')
}

  
     
  
}
