import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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

   
constructor(private http:HttpClient,private route:Router, private routerguard:ActivatedRoute,private https:HttpClientModule) { }

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
 
  if(this.adminname=="admin@gmail.com"&& this.password=="Gadgetz!"){

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

      sessionStorage.setItem(this.isLoggedInkey, 'true');
  
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
      alert('user not found. please register first');
    }
   

 
}
);


}

isLoggedIn(): boolean{
  return sessionStorage.getItem(this.isLoggedInkey) === 'true';
}


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

adduserinformation(body:any){
         
  return this.http.post("http://localhost:3000/users",body)
    }
  

    getorderdetails(){

     

     return this.http.get<any>("http://localhost:3000/directbuynowproducts");

    }




addtocartdb(body:any,emailid:any) {
  
  this.loggedemailid=localStorage.getItem('loggedemailid');
  const data ={...body,email:this.loggedemailid,}
  return this.http.post<any>("http://localhost:3000/cart/",data);
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
  
 
    

}
cartbuy(data:any){
  this.cartproducts =data;
}
buynowdatachange():Boolean{

  return true;

}

buynowpaymentverified(){
  this.loggedemailid=localStorage.getItem('loggedemailid');
  this.buyside=localStorage.getItem('buy');
  this.cartside=localStorage.getItem('cartitems');

  this.dt= new Date;
  
  this.gettime=this.dt.toLocaleString('en-US', {day:'numeric',month:'long',year:'numeric', hour: 'numeric', minute: 'numeric', hour12: true });



if(this.buyside == 'buy'){

const payment="debit";
  const data ={...this.buynowproduct,email:this.loggedemailid,payment:payment,address:this.address,time:this.gettime}

   this.http.post<any>("http://localhost:3000/directbuynowproducts/",data).subscribe((f=>{
    alert("Your order has been placed successfully");
   }))

   
}

else if(this.cartside == 'cart'){

  const payment="debit";

  this.cartproducts.forEach((product: any)=>{
    const data ={...product,payment:payment,address:this.address,time:this.gettime};
    this.http.post<any>("http://localhost:3000/directbuynowproducts/",data).subscribe((f=>{

    }))

   

  })

  

}
}
}
