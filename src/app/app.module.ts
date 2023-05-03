import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{HttpClientModule}from'@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TelivisonComponent } from './telivison/telivison.component';
import { ShoppingcartdetailComponent } from './shoppingcartdetail/shoppingcartdetail.component';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';

@NgModule({
  declarations: [										
    AppComponent,
    HomeComponent,
      RegisterComponent,
      LoginComponent,
      ShoppingCartComponent,
      MobilesComponent,
      LaptopsComponent,
      TelivisonComponent,
      ShoppingcartdetailComponent,
      CheckoutpageComponent,
      PaymentpageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
