import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DbseviceService {
  b:any="";
  u:any="";
  user:any="";
  isLoggedIn:boolean = false;
  loggedemailid: string | any;
constructor(private http:HttpClient,private route:Router) { }

getproducts(){
  return this.http.get('http://localhost:3000/profile')
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
 

  if(user){
    alert('You are successfully login');
    //for storing data in local storage 
  localStorage.setItem('loggedInUser',user.username);
  localStorage.setItem('loggedemailid',user.emailid);

  localStorage.setItem('userid',user.id);
  
    // this.LoginForm.reset();
    // this.isLoggedIn=true;
     this.route.navigate(['home']).then(()=>{
      window.location.reload();
       });
    }
  else{
    alert('user not found. please register first')
  }
})
}

getusersdetails(){
  return this.http.get<any>('http://localhost:3000/users/');
}

isUserLoggedIn(){
  return this.isLoggedIn;

}

userLoggedout(){
  this.isLoggedIn=false;
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
    
addtocartdb(body:any,email:any){
  this.loggedemailid=localStorage.getItem('loggedemailid');
 
  const data ={...body,email:this.loggedemailid,id:email}
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
}


