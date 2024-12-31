import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { ProductVisageComponent } from './components/product-visage/product-visage.component';
import { ProductCorpsComponent } from './components/product-corps/product-corps.component';  
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component'; // Importer le composant du panier
import { CartComponent } from './components/carts/carts.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'visage', component: ProductVisageComponent },
  { path: 'corps', component: ProductCorpsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'reservation' , component: ReservationFormComponent}
  


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
