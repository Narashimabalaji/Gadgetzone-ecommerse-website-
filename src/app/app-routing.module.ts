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
import { AdminviewComponent } from './adminview/adminview.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { AdminorderdetailsComponent } from './adminorderdetails/adminorderdetails.component';
import { SingleproductpageComponent } from './singleproductpage/singleproductpage.component';
import { AuthguardGuard } from './services/authguard.guard';
import { SmartwatchesComponent } from './smartwatches/smartwatches.component';
import { AdmineditproductComponent } from './admineditproduct/admineditproduct.component';
import { UserorderdetailsComponent } from './userorderdetails/userorderdetails.component';
import { CancelrequestuserComponent } from './Cancelrequestuser/Cancelrequestuser.component';
import { ComputeraccesoriesComponent } from './computeraccesories/computeraccesories.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { AdminstockdetailsComponent } from './adminstockdetails/adminstockdetails.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SearchedproductComponent } from './searchedproduct/searchedproduct.component';


const routes: Routes =[

  { 
    path:'',
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
  path:'smartwatches',
  component:SmartwatchesComponent

},
{
  path:'computeraccesories',
  component:ComputeraccesoriesComponent
  

},
{
  path:'headphones',
  component:HeadphonesComponent

},
{
  path:'checkout',
  canActivate:[AuthguardGuard],
  component:CheckoutpageComponent

},


 
{
  path:'payment',
  component:PaymentpageComponent
},
{
  path:'productconfirmation',
  component:ProductconfirmationComponent

},

{

  path:'orderplaced',
  component:OrderplacedComponent

},
{
  path:'singlepageview',
  component:SingleproductpageComponent

},

{

    path:'admin',
    component:AdminviewComponent,
   
},
{
  path:'orderview',
  component:AdminorderdetailsComponent
},
{
  path:'adminedit',
  component:AdmineditproductComponent
},
{
  path:'userorderview',
  component:UserorderdetailsComponent
},
{
  path:':emailid/cancelrequest',
  component:CancelrequestuserComponent
},
{
  path:'stockdetails',
  component:AdminstockdetailsComponent
},
{
  path:'forgotpassword',
  component:ForgotpasswordComponent
},
{
  path:'searchedproduct',
  component:SearchedproductComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule {}
