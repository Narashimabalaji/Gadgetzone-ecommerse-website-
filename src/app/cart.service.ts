import { HttpClient,  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DbseviceService } from './dbservice.service';
import { map } from 'rxjs';
import { JsonPipe, KeyValuePipe } from '@angular/common';
import { KeyedRead } from '@angular/compiler';

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


constructor(private http:HttpClient,private dbservice:DbseviceService) { 
  this.mail=this.dbservice.b;
 
}


ngOnInit(){
 
}


getProducts(){
  return this.productlist.asObservable();
}

// setproduct(product :any){
//   this.cartitems.push(product);
//   this.productlist.next(product);
// }


store:any="";
orderarray:any;
order:any={};
cartcount(){
  
}

addtocart(a:any,email:any) {

  this.dbservice.addtocartdb(a,email).subscribe((data)=>{
         
    console.log(data);
  })




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
  
 
  

}

gettotalprice():number{

let grandtotal =0;
this.cartitems.map((a:any)=>{
  grandtotal += a.total;
})
return grandtotal;
}

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


postgrandtotal(price:any){
  return this.http.post<any>("http://localhost:3000/carttotal/",price);
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
