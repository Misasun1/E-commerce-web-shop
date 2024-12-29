import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { productsModel } from '../shared/productsModel';
import { products } from '../shared/productsArray';
import { CartService } from '../cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 
  itemFam : productsModel;

  constructor (
    private route : ActivatedRoute, 
    private cartSer : CartService) 
    
  {
    let id =  parseInt(this.route.snapshot.params['id']);
    
    this.itemFam = products[id]
  }
  addToCart(){
    this.cartSer.onAddtoCart(this.itemFam);

    Swal.fire({
      title: "Success!",
      text: `${this.itemFam.name} has been added to the cart!`,
      icon: "success",
      showConfirmButton: false,
      background: '#a57db1',
      color: '#dcf1e8',
      timer: 2000
    })
    
  }
}
