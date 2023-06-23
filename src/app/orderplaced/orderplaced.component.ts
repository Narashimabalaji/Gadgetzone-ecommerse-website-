import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DbseviceService } from '../dbservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orderplaced',
  templateUrl: './orderplaced.component.html',
  styleUrls: ['./orderplaced.component.css']
})
export class OrderplacedComponent implements OnInit {
  product: any;
  name: any;
  grandtotal: any;
  ordersummary: any;
  dt: any;
 


  constructor(private route:Router,private orderdataservice:DbseviceService,private http:HttpClient) { }

  ngOnInit() {

    this.http.get<any>("http://localhost:3000/cart/").subscribe((o)=>{
      console.log("API response:", o);
  
      const loggedemailid = localStorage.getItem('loggedemailid');
      console.log("Logged in user email:", loggedemailid);
  
      const user = o.filter((data:any)=>{
        console.log("Email address in data:", data.email);
        return data.email === loggedemailid;
      });
           
      this.product =user;
      console.log("User data:", user);
     
      
      this.name = user.username;

      this.http.get<any>("http://localhost:3000/carttotal/").subscribe((k)=>{
               
               const l =k.filter((total:any)=>{
                 
                       return total.emailid === loggedemailid;
               })

               this.grandtotal =l;

               console.log("total",this.grandtotal);

      });
     
     
      

    
    })


    //for billing detail display
    
    this.http.get<any>("http://localhost:3000/billingdetail/").subscribe((o)=>{
      console.log("API response:", o);
  
      const loggedemailid = localStorage.getItem('loggedemailid');
      console.log("Logged in user email:", loggedemailid);
  
      const user = o.filter((data:any)=>{
        console.log("Email address billing in data:", data.emailid);
        return data.emailid === loggedemailid;
      });
           
      this.ordersummary =user;
      console.log("User data:", user);


  
  
  
    })
  
  
  this.dt= new Date();

  
  
  
  }


 






}
