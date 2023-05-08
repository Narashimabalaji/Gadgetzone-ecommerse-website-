import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { TelivisonComponent } from './telivison/telivison.component';
import { AuthGuard } from './services/auth.guard';
import { CheckoutpageComponent } from './checkoutpage/checkoutpage.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { ProductconfirmationComponent } from './productconfirmation/productconfirmation.component';


const routes: Routes =[

  { path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  
{
  path: "register",
  component:RegisterComponent,
},
{
  path:"cart",
  component:ShoppingCartComponent,

},
{
  path:'login',
  component:LoginComponent
},
{
  path:'mobiles',
  component:MobilesComponent
},
{
  path:'laptops',
  component:LaptopsComponent
},
{
  path:'telivision',
  component:TelivisonComponent
},

{
  path:'checkout',
  component:CheckoutpageComponent
},
{
  path:'payment',
  component:PaymentpageComponent
},
{
  path:'productconfirmation',
  component:ProductconfirmationComponent

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {}
