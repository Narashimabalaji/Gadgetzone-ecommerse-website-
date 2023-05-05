import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { DbseviceService } from '../dbservice.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

   product :any=[];
  public grandTotal :number = 0;
  ttl: number|any;
  granttotal: any|number;
  loggedemailid: any|string;
  cart: any=[];
  email:any;
  f:any=[];
data:any;

gt:number=0;
  
  
  constructor( private cartservice:CartService,private http:HttpClient,private dbservice:DbseviceService) {

   }

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
        
   
      
this.http.get<any>("http://localhost:3000/carttotal/").subscribe((t:any)=>{

let j =0;
for(let item of this.product){
    
  j +=item.price*item.quantity;
}



  const e =t.find((u:any)=>{
      return u.emailid === loggedemailid;
       
  })
if(e){
  this.http.patch<any>("http://localhost:3000/carttotal/"+loggedemailid ,{total:j}).subscribe((d)=>{
    alert("patched successfully");
  })
}

else{
  this.http.post<any>("http://localhost:3000/carttotal/",{total:j,emailid:loggedemailid}).subscribe((d)=>{
                
                      alert("posted success");
})

}
      

  
})});

    }
  
  
patchgt(){
  this.http.get<any>("http://localhost:3000/cart/").subscribe((o)=>{
      console.log("API response:", o);
  
      const loggedemailid = localStorage.getItem('loggedemailid');
      console.log("Logged in user email:", loggedemailid);
  
      const user = o.filter((data:any)=>{
        console.log("Email address in data:", data.email);
        return data.email === loggedemailid;
      });
     

      this.f=user;

       
    let gt=0;

    for(let item of this.f){
      gt +=item.price*item.quantity;
    }
      
    this.gt =gt;


  console.log("gt:",{gt});

this.http.patch<any>("http://localhost:3000/carttotal/"+loggedemailid ,{total:gt}).subscribe((g)=>{
  alert("updated inc");
})
     

  })};

 
  


  removeitem(id:any,index:any){
    this.cartservice.deleteitem(id).subscribe((d) =>{
         
      alert("User deleted");
    })
    
    // if(this.product === id){
    //   this.product.splice(index,1);
    // }
      window.location.reload();
      
     
 
}




  
  

  emptycart(){
      

    this.http.delete<any>("http://localhost:3000/cart/"+this.loggedemailid).subscribe((o)=>{
      alert("User deleted");
    })

     this.product=[];
  }

  incrementquantity(item:any|number){
    item.quantity++;
   console.log(item.emailid);

   const t =item.quantity *item.price;
   
   this.patchgt();
   this.http.patch<any>("http://localhost:3000/cart/"+item.emailid,{quantity:item.quantity,total:t}).subscribe((o)=>{
    console.log(o);
   })

  
  }

  decrementquantity(item:any){
    if(item.quantity>1){
      item.quantity--;
    }
    console.log(item.emailid);

    const t=item.quantity * item.price;
    this.patchgt();
    this.http.patch<any>("http://localhost:3000/cart/"+item.emailid,{quantity:item.quantity,total:t}).subscribe((o)=>{
     console.log(o);
    });
    
   
    
  }

    getCartTotal() {
    
  
    let total=0;
   
    for (const item of this.product) { 
      total += item.price * item.quantity;
    }
    console.log("ok",{total});

  
    return  total;
  }

 
 

  
}



