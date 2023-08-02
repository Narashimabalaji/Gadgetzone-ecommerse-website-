import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductconfirmedService {
  product: any;

constructor(private http:HttpClient) { }


productconfirmed(){
this.http.get<any>("http://localhost:3000/carttotal/").subscribe((t:any)=>{
  const m =this.product.price;
let j =0;
for(let item of this.product){
    
  j +=item.price*item.quantity;
}

let Q =0;
  for(let item of this.product){
      
    Q +=item.discount*item.quantity;
  }
  
  const e =t.find((u:any)=>{
      return u.emailid === loggedemailid;
       
  })


  
  
  

if(e){
  this.http.patch<any>("http://localhost:3000/carttotal/"+loggedemailid ,{total:j,discount:Q}).subscribe((d)=>{
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



  
})};




    
  
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
  // alert("updated inc");
})
     

  })

}

}
