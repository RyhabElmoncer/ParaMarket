import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SliderComponent } from './components/slider/slider.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ProductVisageComponent } from './components/product-visage/product-visage.component';
import { ProductService } from './services/product.service';  // Importez le service
import { HttpClientModule } from '@angular/common/http';
import { ProductCorpsComponent } from './components/product-corps/product-corps.component';
import { CartComponent } from './components/carts/carts.component';
import { ReservationFormComponent } from './components/reservation-form/reservation-form.component';  
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    SliderComponent,
    ContactComponent,
    LoginComponent,
    ProductVisageComponent,
    ProductCorpsComponent,
    CartComponent,
    ReservationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
