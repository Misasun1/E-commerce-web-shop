import { Component } from '@angular/core';
import { productsModel } from '../shared/productsModel';
import { products } from '../shared/productsArray';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  products : productsModel [] = products
 

  constructor ( 
   
    private cartSer : CartService
  ){
    let id =  parseInt('id');
    
    
 
  }

  ngOnInit(): void {
  }

  addToCart(item: any):void{
    this.cartSer.onAddtoCart(item);
    // alert(`${item.name} has been added to the cart!`);

      Swal.fire({
            title: "Success!",
            text: `${item.name} has been added to the cart!`,
            icon: "success",
            showConfirmButton: false,
            background: '#a57db1',
            color: '#dcf1e8',
            timer: 2000
          })
   
  }



}





