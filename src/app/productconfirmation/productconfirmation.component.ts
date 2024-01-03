import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../message.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { AddressService } from '../address.service';
import { isTemplateMiddle } from 'typescript';

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
  productlength: any;
  discount: any;
  productprice: number|any;
  discountprice: number|any;

  buynow=false;
  dis: any;
  

  

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
      this.getmultipledata().subscribe(([o,k,l,m,n,z])=>{
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
            const user4 =m.filter((data4:any)=>{
              console.log("user4"+data4);
              return data4.model === itemmodel;
            })
            const user5 =n.filter((data5:any)=>{
              console.log("user4"+data5);
              return data5.model === itemmodel;
            })
            const user6 =z.filter((data6:any)=>{
              console.log("user4"+data6);
              return data6.model === itemmodel;
            })
            const finaldata =[...user,...user2,...user3,...user4,...user5,...user6];
            this.buyproduct =finaldata;

            const itemdata =finaldata;

           
           
            console.log("user",user);
        
            console.log("finaldata",finaldata);

        this.buynow=true;

          
let p=0;
let t=0;
let total=0;
    let w=0;    
    for(let item of finaldata){
      
      p =item.discount-item.price;
      t=p*item.quantity;

      w=item.discount;

      total=item.price;
      
    }

    this.dis =t;
          this.productprice=w;


        
        
        this.http.patch<any>("http://localhost:3000/carttotal/"+loggedemailid,{itemprice:w,itemlength:"1",discount:t,total:total}).subscribe((res:any)=>{
          console.log(res,"data");
        })
       
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
           this.buyproduct =user;
      
            this.productlength =user.length;

            let Q =0;
            for(let item of this.buyproduct){
                
              if (typeof item.discount === 'number') {
                Q += item.discount;
              } else if (typeof item.discount === 'string') {
                Q += parseFloat(item.discount);
              }
            }
          this.productprice = Q;

          this.http.patch<any>("http://localhost:3000/carttotal/"+loggedemailid,{itemprice:this.productprice,itemlength:this.productlength}).subscribe((res:any)=>{
            console.log(res,"data");
          })
     
      console.log("User data:", user);
     
      
      this.name = user.username;

      this.http.get<any>("http://localhost:3000/carttotal/").subscribe((k)=>{
               
               const l =k.filter((total:any)=>{
                 
                       return total.emailid === loggedemailid;
               })

               this.grandtotal =l;
               this.discount = l.discount;

               let Q =0;
               for(let item of this.grandtotal){
                   
                 if (typeof item.total === 'number') {
                   Q += item.discount - item.total;
                 } 
               }
             this.discountprice = Q;

               console.log("total",this.grandtotal);
               this.http.patch<any>("http://localhost:3000/carttotal/"+loggedemailid,{itemdiscount:this.discountprice}).subscribe((res:any)=>{
                console.log(res,"data");
              })

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
        }
    
 



      

  getmultipledata(){
    
    const laptops =this.http.get<any>("http://localhost:3000/laptops");
    const telivision =this.http.get<any>("http://localhost:3000/telivision");
    const mobiles =this.http.get<any>("http://localhost:3000/mobiles");
    const Headphones =this.http.get<any>("http://localhost:3000/Headphones");
    const computeraccesories=this.http.get<any>("http://localhost:3000/computeraccesories");
    const smartwatch=this.http.get<any>("http://localhost:3000/smartwatch");




    return forkJoin([telivision,laptops,mobiles,Headphones,computeraccesories,smartwatch]);

  }

 
}

