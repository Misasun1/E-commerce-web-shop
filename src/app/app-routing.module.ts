import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartSectionComponent } from './cart-section/cart-section.component';
import { HomeComponent } from './home/home.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'products-list',
    component: ProductsListComponent
  },

{
  path: 'cart',
  component:CartSectionComponent

},
{
  path: 'details/:id',
  component: DetailsComponent
},
// {
//   path:'**',
//   redirectTo: '/home'
// }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
