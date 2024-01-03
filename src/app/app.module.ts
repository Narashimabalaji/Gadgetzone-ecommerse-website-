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
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { ProductconfirmationComponent } from './productconfirmation/productconfirmation.component';
import { MessageService } from './message.service';
import { AdminviewComponent } from './adminview/adminview.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { AdminorderdetailsComponent } from './adminorderdetails/adminorderdetails.component';
import { SingleproductpageComponent } from './singleproductpage/singleproductpage.component';
import { SingleproductviewService } from './singleproductview.service';
import { AddressstoredComponent } from './addressstored/addressstored.component';
import { LayoutComponent } from './layout/layout.component';
import { SmartwatchesComponent } from './smartwatches/smartwatches.component';
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component';
import { UserorderdetailsComponent } from './userorderdetails/userorderdetails.component';
import { LoaderComponent } from './Loader/Loader.component';
import { ImagechangeDirective } from './singleproductpage/imagechange.directive';
import { CancelrequestuserComponent } from './Cancelrequestuser/Cancelrequestuser.component';
import { ComputeraccesoriesComponent } from './computeraccesories/computeraccesories.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { AdminstockdetailsComponent } from './adminstockdetails/adminstockdetails.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SearchedproductComponent } from './searchedproduct/searchedproduct.component';

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
      CheckoutpageComponent,
      PaymentpageComponent,
      ProductconfirmationComponent,
      AdminviewComponent,
      OrderplacedComponent,
      AdminorderdetailsComponent,
      SingleproductpageComponent,
      AddressstoredComponent,
      LayoutComponent,
      SmartwatchesComponent,
      AdmineditproductComponent,
      UserorderdetailsComponent,
      LoaderComponent,
      ImagechangeDirective,
      CancelrequestuserComponent,
      ComputeraccesoriesComponent,
      HeadphonesComponent,
      AdminstockdetailsComponent,
      ForgotpasswordComponent,
      SearchedproductComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [SingleproductviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
