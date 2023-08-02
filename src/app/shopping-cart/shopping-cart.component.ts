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
  k: number=0;
  p:number=0;
  cartcheckout: any;
  productl: any;
  dis: any;
  delivery:any;
  d: number=0;
  
  
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
      console.log("User data:", user.length);

      this.productl =user.length;

    

             console.log("delivery",this.delivery);
    
  if(this.productl.length>1){

    this.delivery ='Free delivery';

  }

 else if(this.productl.length<1){
  this.delivery ='40';
 }




      
this.http.get<any>("http://localhost:3000/carttotal/").subscribe((t:any)=>{
  const m =this.product.price;
let j =0;
for(let item of this.product){
    
  j +=item.price*item.quantity;
}

let Q =0;
let r=0;
  for(let item of this.product){
      
    Q =item.discount-item.price;
    r+=Q*item.quantity;
    
  }
  
  const e =t.find((u:any)=>{
      return u.emailid === loggedemailid;
       
  })


  
  
  

if(e){
  this.http.patch<any>("http://localhost:3000/carttotal/"+loggedemailid ,{total:j,discount:r}).subscribe((d)=>{
    // alert("patched successfully");
    

        this.dis= d.discount;
  })
}



  


else{
  this.http.post<any>("http://localhost:3000/carttotal/",{total:j,emailid:loggedemailid,discount:Q}).subscribe((d)=>{
                
  this.dis =d.discount;
                      // alert("posted success");
})

}
      

//for discount information



  
})});




    }


 
  


  removeitem(id:any,index:any){
    this.cartservice.deleteitem(id).subscribe((d) =>{
         
      // alert("User deleted");
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

  


   let h =0;

    h +=item.price*item.quantity;

    let Q=0;
    let r=0;
    let t=0;
   
    for(let item of this.product){
      
      Q =item.discount-item.price;
      r+=Q*item.quantity;
      
    }

    const total=item.price*item.quantity
    this.dis =r;

    this.k =h;
   
    const loggedemailid = localStorage.getItem('loggedemailid');

    this.http.patch<any>("http://localhost:3000/cart/"+item.emailid,{quantity:item.quantity,total:total}).subscribe((j)=>{



    });
  
    

  
  }

  decrementquantity(item:any){
    if(item.quantity>1){
      item.quantity--;
   
    }
    console.log(item.emailid);

    const t=item.quantity * item.price;
    
    this.http.patch<any>("http://localhost:3000/cart/"+item.emailid,{quantity:item.quantity,total:t}).subscribe((o)=>{
     console.log(o);
    });
    let w =0;

    for (let item of this.product){
 
     w  +=item.price*item.quantity;
    }
 
     this.p =w;
     const loggedemailid = localStorage.getItem('loggedemailid');
     
     let Q=0;
     let r=0;
    
     for(let item of this.product){
       
       Q =item.discount-item.price;
       r+=Q*item.quantity;
       
     }
 
     this.dis =r;
     
   
    
  }

    getCartTotal() {
    
  
    let total=0;
   
    for (const item of this.product) { 
      total += item.price * item.quantity;
    }
    console.log("ok",{total});

  
    return  total;
  }

 
  addcartset(){

    localStorage.removeItem('buy');

    this.cartcheckout =this.product;

    console.log("ok addcartset",this.cartcheckout);

    this.dbservice.cartbuy(this.product);

    localStorage.setItem('cartitems',"cart");

    const loggedemailid = localStorage.getItem('loggedemailid');
  
this.http.get<any>("http://localhost:3000/carttotal/").subscribe((t:any)=>{
  const m =this.product.price;
let j =0;
for(let item of this.product){
    
  j +=item.price*item.quantity;
}


  let Q =0;
let r=0;
  for(let item of this.product){
      
    Q =item.discount-item.price;
    r+=Q*item.quantity;
    
  }
 
  const e =t.find((u:any)=>{
      return u.emailid === loggedemailid;
       
  })


  
  
  

if(e){
  this.http.patch<any>("http://localhost:3000/carttotal/"+loggedemailid ,{total:j,discount:r}).subscribe((d)=>{
    // alert("patched successfully");
    

        this.dis= d.discount;
  })
}




});

  
}
}



