import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DbseviceService } from '../dbservice.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';

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
  buyproduct: any;
  buy: any;
 gettime:any;
  getdate: any;


  constructor(private route:Router,private orderdataservice:DbseviceService,private http:HttpClient) { }

  ngOnInit() {
    this.buy=localStorage.getItem('buy');

      
    if(this.buy=="buy"){
      this.getmultipledata().subscribe(([o,k,l])=>{
            console.log("API response:", o,k);
        
            const loggedemailid = localStorage.getItem('loggedemailid');
            console.log("Logged in user email:", loggedemailid);
            const itemmodel = localStorage.getItem('model');
        
            
        
        
        
            const user = o.filter((data:any)=>{
              console.log("Email address in data:", data.email);
              return data.model === itemmodel;
            });
        
            const user2 =k.filter((data2:any)=>{
              console.log("user2"+data2);
              return data2.model === itemmodel;
            })
            const user3 =l.filter((data3:any)=>{
              console.log("user3"+data3);
              return data3.model === itemmodel;
            })
                 
            const finaldata =[...user,...user2,...user3];
            this.buyproduct =finaldata;

            
            console.log("user",user);
        
            console.log("finaldata",finaldata);
        
          
          })

    }

    else{
      
    this.http.get<any>("http://localhost:3000/cart/").subscribe((o)=>{
      console.log("API response:", o);
  
      const loggedemailid = localStorage.getItem('loggedemailid');
      console.log("Logged in user email:", loggedemailid);
  
      const user = o.filter((data:any)=>{
        console.log("Email address in data:", data.email);
        return data.email === loggedemailid;
      });
           
      
            this.buyproduct=user;
            
     
      console.log("User data:", user);
     
      
      this.name = user.username;

      this.http.get<any>("http://localhost:3000/carttotal/").subscribe((k)=>{
               
               const l =k.filter((total:any)=>{
                 
                       return total.emailid === loggedemailid;
               })

               this.grandtotal =l;

               console.log("total",this.grandtotal);

      });
    });
  } 

    


    //for billing detail display
    
    this.http.get<any>("http://localhost:3000/billingdetail/").subscribe((o)=>{
      console.log("API response:", o);
  
      const loggedemailid = localStorage.getItem('loggedemailid');
      console.log("Logged in user email:", loggedemailid);
  
      const user = o.filter((data:any)=>{
        console.log("Email address billing in data:", data.emailid);
        return data.email === loggedemailid;
      });
           
      this.ordersummary =user;
      console.log("User data:", user);


  
  
  
    })
  
  
  this.dt= new Date;
  
  this.gettime=this.dt.toLocaleString('en-US', {day:'numeric',month:'long',year:'numeric', hour: 'numeric', minute: 'numeric', hour12: true });

  
  this.getdate.getdate();
  
  }

    getCartTotal() {
    
  
    let total=0;
   
    for (const item of this.buyproduct) { 
      total += item.price * item.quantity;
    }
    console.log("ok",{total});

  
    return  total;
  }


  getmultipledata(){
    
    const laptops =this.http.get<any>("http://localhost:3000/laptops");
    const telivision =this.http.get<any>("http://localhost:3000/telivision");
    const mobiles =this.http.get<any>("http://localhost:3000/mobiles");


    return forkJoin([telivision,laptops,mobiles]);

  }
 






}
