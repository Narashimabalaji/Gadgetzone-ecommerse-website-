import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressService } from './address.service';
import { LoggerService } from './logger.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DbseviceService {
  b:any="";
  u:any="";
  user:any="";
  // adminlogin:boolean=false;
  private readonly isLoggedInkey ='isLoggedIn';
  loggedemailid: string | any;
   adminloggedin:boolean =false;
   adminname:any;
   password:any="";

   buynowproduct:any
  uname: any;
  pass: any;
  loggedInUser:any|string;
  isloggedin: boolean=false;
  retUrl:any='home';
  address: any;
  cartproducts: any;
  buyside: any;
  cartside: any=[];
  dt: any;
  gettime: any;
  mail: string | any;
  selectedAddress: any;
  finaladdress: any;
  addressid: any|number;
  selectaddress: any;
  address2: any;
  pudhuadress: any|string;
  add3: any;
  orderstatus:any;
  paymentway: any|string;

   
constructor(private http:HttpClient,
  private route:Router, 
  private routerguard:ActivatedRoute,
  private https:HttpClientModule,
  private addressservice:AddressService,
  private logger:LoggerService) { }

ngOnInit(){
 
  
 
}

// getadmins():boolean{
  
//   return this.adminlogin;
// }

getproducts(){
  return this.http.get('http://localhost:3000/profile')
}

adminlog(u:any,p:any){
  this.adminname=u;
  this.password=p;
  this.adminloggedin=true;


    
      
  }




isuserloggedin():boolean{
  this.loggedemailid=localStorage.getItem('loggedemailid');
  
  if(this.loggedemailid!==null ){
    return this.isloggedin=true;
  }else{
    return this.isloggedin=false;
  }
  }



isadminloggedin(){
  return this.adminloggedin;
}



logindetails(log:any,log1:any){
  console.log(log);
  this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
  const user = res.find((a:any)=>{
    this.b = a.emailid;
    this.u=a.username;

    
    console.log(this.b);  
   
    return a.emailid === log && a.password === log1;
  });
 
  if(this.adminname==environment.adminemail&& this.password==environment.adminpassword){

    alert("Welcome Admin!")

    localStorage.setItem('loggedemailid',"admin@gmail.com");

    localStorage.setItem('loggedInUser',"Admin");


    this.route.navigate(['/admin']).then(()=>{
       
      window.location.reload()}
         
     
      )

      close();
    
    }

  else if(user){
    alert('welcome again ' +user.username);
  
    //for storing data in local storage 
  localStorage.setItem('loggedInUser',user.username);
  localStorage.setItem('loggedemailid',user.emailid);

  localStorage.setItem('userid',user.id);

  this.route.navigate([this.retUrl]).then(()=>{
       
    window.location.reload();})
         
    // this.LoginForm.reset();
    if(this.retUrl!=null){
      this.routerguard.queryParamMap.subscribe(parama=>{
        this.retUrl=parama.get('retUrl');
        
        // console.log("LoginComponent/ngOnInit",this.retUrl);
      })
      this.route.navigate([this.retUrl]).then(()=>{
       
       window.location.reload();
      
         
       })


        }

      
    }
    else{
      this.logger.warn('No details found');
      alert('user not found. please register first');

     
    }
   

 
}
);
}

// isLoggedIn(): boolean{
//   return sessionStorage.getItem(this.isLoggedInkey) === 'true';
// }


getusersdetails(){
  return this.http.get<any>('http://localhost:3000/users/');
}





getmobiles(){
  return this.http.get('http://localhost:3000/mobiles')
}

getlaptops(){
  return this.http.get('http://localhost:3000/laptops')
}

gettelivision(){
  return this.http.get('http://localhost:3000/telivision')
}

getsmartwatch(){
  return this.http.get('http://localhost:3000/smartwatch')
}
getcomputeraccesories(){
  return this.http.get('http://localhost:3000/computeraccesories')
}
getHeadphones(){
  return this.http.get('http://localhost:3000/Headphones')
}
adduserinformation(body:any){
         
  return this.http.post("http://localhost:3000/users",body)
    }
  

    getorderdetails(){

     

     return this.http.get<any>("http://localhost:3000/directbuynowproducts");

    }




addtocartdb(body:any) {
  
  this.loggedemailid=localStorage.getItem('loggedemailid');
  
  // const data ={...body,email:this.loggedemailid,productid:body.emailid}

  let data1 ={
    image:body.image,
    model:body.model,
    detailmodel:body.detailmodel,
    quantity:body.quantity,
    rating:body.rating,
    email:this.loggedemailid,
    delivery:body.delivery,
    discount:body.discount,
    price:body.price,
    description1:body.description1,
    description2:body.description2,
    quantities:body.quantity,
    total:body.total


  }

  return this.http.post<any>("http://localhost:3000/cart/",data1);
 }



getProducts(){
  return this.http.get('http://localhost:3000/products')
  .pipe(map((res=>{
    return res;
  })))

}

getdataforcart(){
  const url='http://localhost:3000/users'

  return this.http.get<any>(url).pipe(map(res =>{
    return res;


  }));
 
}

addbillinginfo(body:any){
  this.loggedemailid=localStorage.getItem('loggedemailid');
       const mail={...body,email:this.loggedemailid}
       this.address=mail.address;
       
  return this.http.post<any>("http://localhost:3000/billingdetail/",mail)
}

totalproductincart(){
 return  this.http.get<any>("http://localhost:3000/cart/").subscribe((o)=>{
    console.log("API response:", o);

    const loggedemailid = localStorage.getItem('loggedemailid');
    console.log("Logged in user email:", loggedemailid);

    const user = o.filter((data:any)=>{
      console.log("Email address in data:", data.email);
      return data.email === loggedemailid;
    });
         
         return user;
})}


buynowservice(data:any){

  this.buynowproduct=data;
  console.log("buy now product",this.buynowproduct);
  this.addressid = localStorage.getItem('address');

   this.http.get<any>("http://localhost:3000/billingdetail/"+this.addressid).subscribe((res:any) =>{
                 
               this.add3=res;

})

}
  


cartbuy(data:any){
  this.cartproducts =data;
  this.addressid = localStorage.getItem('address');

  this.http.get<any>("http://localhost:3000/billingdetail/"+this.addressid).subscribe((res:any) =>{
                
              this.add3=res;

})

}
buynowdatachange():Boolean{

  return true;

}

paymentmethod(way:any){

  this.paymentway = way;

}

buynowpaymentverified(){
  this.loggedemailid=localStorage.getItem('loggedemailid');
  this.buyside=localStorage.getItem('buy');
  this.cartside=localStorage.getItem('cartitems');

  

  this.dt= new Date;
  
  this.gettime=this.dt.toLocaleString('en-US', {day:'numeric',weekday: 'short',month:'long',year:'numeric', hour: 'numeric', minute: 'numeric', hour12: true });



if(this.buyside == 'buy'){


   const data ={...this.buynowproduct,email:this.loggedemailid,address:this.address,time:this.gettime}

  const body =this.buynowproduct;

  

  const payment=this.paymentway; 
   
 

const address4=this.add3;


  const data1={
    image:body.image,
    model:body.model,
    detailmodel:body.detailmodel,
    quantity:body.quantity,
    rating:body.rating,
    email:this.loggedemailid,
    delivery:body.delivery,
    discount:body.discount,
    price:body.price,
    description1:body.description1,
    description2:body.description2,
    Time:this.gettime,
    Total:body.total,
    


  
   

  }

  const data2 ={...data1,Name:address4.username,Address:address4.address,City:address4.city,
    State:address4.state,
    Phonenumber:address4.phonenumber,Payment:address4.Payment,
    Orderstatus:"Order in Transit",payment:payment}

   this.http.post<any>("http://localhost:3000/directbuynowproducts/",data2).subscribe((f=>{
    alert("Your order has been placed successfully");
   }))
  
}

else if(this.cartside == 'cart'){

  const payment=this.paymentway;

  const address4=this.add3;
  


  this.cartproducts.forEach((product: any)=>{
    // const data ={...product,payment:payment,Name:this.address,time:this.gettime};

    const body =product;

   
     
   
   
    const data1={
      image:body.image,
      model:body.model,
      detailmodel:body.detailmodel,
      quantity:body.quantity,
      rating:body.rating,
      email:this.loggedemailid,
      delivery:body.delivery,
      discount:body.discount,
      price:body.price,
      description1:body.description1,
      description2:body.description2,
      Time:this.gettime,
      Payment:payment,
      total:body.total,
      
     
     
  
    }

    const data2 ={...data1,Name:address4.username,Address:address4.address,City:address4.city,
      State:address4.state,
      Phonenumber:address4.phonenumber,Payment:address4.Payment,
      Orderstatus:"Order in Transit"}

    this.http.post<any>("http://localhost:3000/directbuynowproducts/",data2).subscribe((f=>{
      alert("Success");

    }))
alert("no directbuynow products")
  
  })

  


  }

  

}

Addressavail(){
       
  return this.http.get<any>("http://localhost:3000/billingdetail")
}
}
