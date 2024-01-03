import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DbseviceService } from './dbservice.service';
import { map } from 'rxjs';
import { AuthGuard } from './services/auth.guard';
import { AuthguardGuard } from './services/authguard.guard';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  Userid:any|string;
  uname :number|undefined;
  public cartitems:any[]=[];
  public productlist =new BehaviorSubject<any>([]);
  jsonObject:any;
 public data:any=[];
public email2:any;
 public cart:any=[];
  loggedemailid: any | string;
  mail: any;
 productcount: any;
  cartproduct: any;
  cartid: any;
  samecartitem: any;


constructor(private http:HttpClient,private dbservice:DbseviceService,private authservice:AuthguardGuard) { 
 
 
}


ngOnInit(){


  
}


getProducts(){
  console.log("length of item",this.productlist);
  return this.productlist.asObservable();
}

// setproduct(product :any){
//   this.cartitems.push(product);
//   this.productlist.next(product);
// }


store:any="";
orderarray:any;
order:any={};
f:number=0;
gt:number=0;

addtocart(a:any) {

  this.http.get<any>("http://localhost:3000/cart/").subscribe((cartitemsdata:any)=>{
    this.cartproduct =cartitemsdata;

    const checkcart = cartitemsdata.filter((sameproduct:any)=>{
      return sameproduct.model === a.model && sameproduct.email === this.loggedemailid;
      
    })
  
    if (checkcart.length > 0){
      alert("your item is already added to cart");
    }

    else{
      this.dbservice.addtocartdb(a).subscribe((data)=>{
        alert("product added to your cart" );
        console.log(data);
      })
 
    }

    })

    

  
  this.loggedemailid=localStorage.getItem('loggedemailid');

// for(var cartpro in this.cartproduct ){
//   this.cartid=this.cartproduct[cartpro].model;
  
//   if(a.model==this.cartid && this.loggedemailid==this.cartproduct.email){
//     this.samecartitem=this.cartid;
//   }
// }
// if(a.model==this.samecartitem ){
//   alert("your item is already added to cart");
// }



}


 









//   this.http.get<any>("http://localhost:3000/users/").subscribe((z)=>{
//   const user1=z.find((data2:any)=>{
//     this.loggedemailid=localStorage.getItem('loggedemailid');
//     this.store=data2;
//     console.log(data2,'data2')
//     this.orderarray=this.store.order;
//     return data2.emailid === this.loggedemailid;
   

//   });

  
// console.log(this.loggedemailid,"userDetails")
//   if(user1){
//     if(this.store.order != null){
//       alert('Cart Order Added Successfully');
//       this.orderarray.push(a);
//       console.log("CART getted ",a);
//       this.http.patch<any>("http://localhost:3000/users/"+ this.loggedemailid,{order:this.orderarray}).subscribe((o)=>{

//       console.log("added ",o);

//       });
//     }
//     else{
//       alert("Order Added");
//       console.log("mail",this.loggedemailid);
//        console.log("order",[a]);
//       this.http.patch<any>("http://localhost:3000/users/" + this.loggedemailid , {order:[a]}).subscribe((y)=>{
//         console.log("order",y);

//       });
      
//     }
//   }
//   else{
//     alert("user not found");
//   }
//     })
  
 
  





Decrementqty(item:any|number){
 if(item.quantity>1){
     item.quantity--;
     }
console.log(item)    
this.loggedemailid=localStorage.getItem('loggedemailid');


this.http.patch<any>('http://localhost:3000/users/order/'+item.id,{quantity:item.quantity}).subscribe((i)=>{
  console.log(i);
})





}




// removecartitem(product:any){
//   // this.cartitems.map((a:any, index:any)=>{
//   //   if(product.id===a.id){
//   //     this.cartitems.splice(index,1);
//   //     this.productlist.next(this.cartitems);
//   //   }
//   // })

  

// }

deleteitem(id:any){
  

  return this.http.delete("http://localhost:3000/cart/"+id);


}


emptycart(){
  this.cartitems =[];
  this.productlist.next(this.cartitems);
}


}

