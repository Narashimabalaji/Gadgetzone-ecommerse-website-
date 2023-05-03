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
  
data:any;
  
  
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
    });
  }


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

   this.http.patch<any>("http://localhost:3000/cart/"+item.emailid,{quantity:item.quantity}).subscribe((o)=>{
    console.log(o);
   })
    
  }
  decrementquantity(item:any){
    if(item.quantity>1){
      item.quantity--;
    }
    console.log(item.emailid);

    this.http.patch<any>("http://localhost:3000/cart/"+item.emailid,{quantity:item.quantity}).subscribe((o)=>{
     console.log(o);
    })
  }
  getCartTotal() {
    let total = 0;

    for (const item of this.product) {
      total += item.price * item.quantity;
    }

    const grant =total;
    console.log("grand total",grant);
    return  total;
  };

 
storedprice(){
  var data =this.getCartTotal();
  console.log("grand t",data);

 


}
}
