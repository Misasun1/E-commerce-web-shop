import { Component } from '@angular/core';
import { productsModel } from '../shared/productsModel';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-section',
  templateUrl: './cart-section.component.html',
  styleUrl: './cart-section.component.css'
})
export class CartSectionComponent {
  prodFromCart : productsModel[];
  total: number = 0;
  serviceCharge: number = 0;
  discount: number = 0;
  finalTotal: number = 0;


  constructor(private cartSer : CartService){
    this.prodFromCart = cartSer.getItems();
    this.updateTotals();
  }

  increase(item: productsModel): void {
    this.cartSer.increaseQuantity(item);
    this.updateTotals();
  }

  decrease(item: productsModel): void {
    this.cartSer.decreaseQuantity(item);
    this.updateTotals();
  }

  remove(item: productsModel): void {
    this.cartSer.removeItem(item);
    this.updateTotals();
  }

  updateTotals(): void {
    this.total = this.cartSer.getTotal();
    this.serviceCharge = this.cartSer.getServiceCharge();
    this.discount = this.cartSer.getDiscount();
    this.finalTotal = this.cartSer.getFinalTotal();
  }

}
