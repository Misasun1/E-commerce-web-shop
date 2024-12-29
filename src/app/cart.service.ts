import { Injectable } from '@angular/core';
import { productsModel } from './shared/productsModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

cartProducts : productsModel[] = []

  constructor() {}


   getItems() {
      return this.cartProducts
    }
   
  onAddtoCart(prod:productsModel){

    const article = this.cartProducts.find((product) => {
      return product === prod
    }
  )

  if (!article){
     this.cartProducts.push(prod)
  }else  {
      article.qtty ++
    }
  }

  clearCart(): any[] {
    this.cartProducts = [];
    return this.cartProducts;
  }
  
  getTotal() : number{
    let total = 0;
    this.cartProducts.forEach(element =>{
      total += element.qtty * element.price
    })
    return total

  }

// for cart-section.cooponent.html

increaseQuantity(item: any): void {
  const article = this.cartProducts.find(prod => prod.name === item.name);
  if (article) {
    article.qtty++;
  }
}

decreaseQuantity(item: any): void {
  const article = this.cartProducts.find(prod => prod.name === item.name);
  if (article && article.qtty > 1) {
    article.qtty--;
  } else {
    this.removeItem(item);
  }
}

removeItem(item: any): void {
  // this.cartProducts = this.cartProducts.filter(prod => prod.name !== item.name);
  this.cartProducts.splice(this.cartProducts.indexOf(item), 1);
}

   
  //service fee 
  getServiceCharge(): number {
    return this.getTotal() * 0.10;
  }



  getDiscount(): number {
    const total = this.getTotal();
    return total > 40 ? total * 0.15 : 0;
  }


  // total amount(including VAT)
  getFinalTotal(): number {
    const total = this.getTotal();
    const serviceCharge = this.getServiceCharge();
    const discount = this.getDiscount();
    return total + serviceCharge - discount;
  }

  //   getDiscount (a.  b){
    
  //   return Math.round((a / b) * 15);
  //   }
   }
  



