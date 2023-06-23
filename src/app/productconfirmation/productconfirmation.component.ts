import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-productconfirmation',
  templateUrl: './productconfirmation.component.html',
  styleUrls: ['./productconfirmation.component.css']
})
export class ProductconfirmationComponent implements OnInit {
  product: any=[];
  grandtotal: any;


  name: string|any;
  email:string|any;
  message: string|any;
  

  constructor(private dbservice:DbseviceService,private http:HttpClient,private messageservice:MessageService,private route:Router) { }

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


  
  
  
  }


  confirmproduct(){
    const loggedemailid = localStorage.getItem('loggedemailid');
         
           this.email = loggedemailid;

           this.route.navigate(['/payment']);

           console.log(this.email)
           console.log(this.name)
       
       this.messageservice.sendEmail(this.email).subscribe(
        
        (f)=>{
             console.log(f);  
          console.log('email sent successfully');


       },
         
       error =>{
        console.log('error sending email',error);

       })

       


  }

}

