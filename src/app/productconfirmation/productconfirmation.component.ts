import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-productconfirmation',
  templateUrl: './productconfirmation.component.html',
  styleUrls: ['./productconfirmation.component.css']
})
export class ProductconfirmationComponent implements OnInit {

  
  product: any=[];
  grandtotal: any|number;


  name: string|any;
  email:string|any;
  message: string|any;
  buyproduct: any;
  buy: string | any;
  selectedAddress: any;
  addressid:any|number; 

  

  constructor(private dbservice:DbseviceService,private http:HttpClient,private messageservice:MessageService,private route:Router,
    
    private router:ActivatedRoute,
    private addressservice:AddressService) { 

    
  }

  // ngOnInit() {
    
    // this.http.get<any>("http://localhost:3000/cart/").subscribe((o)=>{
    //   console.log("API response:", o);
  
    //   const loggedemailid = localStorage.getItem('loggedemailid');
    //   console.log("Logged in user email:", loggedemailid);
  
    //   const user = o.filter((data:any)=>{
    //     console.log("Email address in data:", data.email);
    //     return data.email === loggedemailid;
    //   });
           
      

     
    //   console.log("User data:", user);
     
      
    //   this.name = user.username;

    //   this.http.get<any>("http://localhost:3000/carttotal/").subscribe((k)=>{
               
    //            const l =k.filter((total:any)=>{
                 
    //                    return total.emailid === loggedemailid;
    //            })

    //            this.grandtotal =l;

    //            console.log("total",this.grandtotal);

    //   });
     
     
      

    
  //   })
  //   this.getmultipledata().subscribe(([o,k,l])=>{
  //     console.log("API response:", o,k);
  
  //     const loggedemailid = localStorage.getItem('loggedemailid');
  //     console.log("Logged in user email:", loggedemailid);
  //     const itemmodel = localStorage.getItem('model');
  
      
  
  
  
  //     const user = o.filter((data:any)=>{
  //       console.log("Email address in data:", data.email);
  //       return data.model === itemmodel;
  //     });
  
  //     const user2 =k.filter((data2:any)=>{
  //       console.log("user2"+data2);
  //       return data2.model === itemmodel;
  //     })
  //     const user3 =l.filter((data3:any)=>{
  //       console.log("user3"+data3);
  //       return data3.model === itemmodel;
  //     })
           
  //     const finaldata =[...user,...user2,...user3];
  //     this.buyproduct =finaldata;
  
  //     console.log("user",user);
  
  //     console.log("finaldata",finaldata);
  
    
  //   })

   
  // this.datachanging();
  
  // }


  ngOnInit(): void {
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
 
   
 this.addressservice.sendaddress().subscribe((address:any)=>{

          this.selectedAddress = address;
          console.log("selected112 address",this.selectedAddress);
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

this.datachanging();

  }

  getmultipledata(){
    
    const laptops =this.http.get<any>("http://localhost:3000/laptops");
    const telivision =this.http.get<any>("http://localhost:3000/telivision");
    const mobiles =this.http.get<any>("http://localhost:3000/mobiles");


    return forkJoin([telivision,laptops,mobiles]);

  }

  datachanging(){
   
  }

}

