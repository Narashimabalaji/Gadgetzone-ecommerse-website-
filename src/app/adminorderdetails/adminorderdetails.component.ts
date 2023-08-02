import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminorderdetails',
  templateUrl: './adminorderdetails.component.html',
  styleUrls: ['./adminorderdetails.component.css']
})
export class AdminorderdetailsComponent implements OnInit {

  product:any;
  products:any[]=[];
  address: any;
  len:any;
  pro:any;
  sendemail:string|any;
mergedata:any;
buttontext:any;
orderstatus:any="Order in Transit";
  orderstatus1:any="Approved";
  orderstatus2:any="Ready to shipment";
  orderstatus3:any="Order Delivered";

  constructor(private http:HttpClient) { }

  ngOnInit() {

   
    this.getorderitem();
    

    
    }


    getorderitem(){
      this.http.get<any>('http://localhost:3000/directbuynowproducts/').subscribe(data => {

      this.product = data;
  
       
      console.log("profbggfbgfb",this.products);
      // for(var det in this.product) {
      //   // var i=0;
      //   this.pro=this.product[det];
      //  this.len=this.pro.length
      //   // console.log("pro",this.pro);
      //   for(var i=0;i<this.len;i++){
      //     // console.log("pro1",this.pro[i]);
      //     this.products[i]=this.pro[i];
      //     console.log("profbggfbgfb",this.products);
  
          
    
      //   }
       
      // }
      
  
    
      })
    }

    sendEmail(item:string|any){

       this.sendemail=item.email;
    
    this.http.post<any>('http://localhost:3000/approveemail/',{email:item.email}).subscribe((res =>{
      console.log("emailsent successfully sent",res);

      console.log("emailthat sent",item.email);

   

    
    }));

   

    let emailObject = {
      email:item.email,
      address:item.address,
      image:item.image,
      model:item.model,
      description:item.description1,
      quantity:item.quantity,
      price:item.price,
      total:item.total

    
    };
    
    this.http.post<any>("http://localhost:3001/approveemail",emailObject).subscribe((res =>{
      console.log(res);
    }));

     
}

status(item:any){
  if(item.Orderstatus==this.orderstatus){
    const data={Orderstatus:this.orderstatus1}
    // console.log("da",orderstatus:this.orderstatus)
    this.http.patch('http://localhost:3000/directbuynowproducts/'+item.emailid,data).subscribe(data=>{
      this.getorderitem();
    })
  }
  if(item.Orderstatus==this.orderstatus1){
    const data={Orderstatus:this.orderstatus2}
    // console.log("da",orderstatus:this.orderstatus)
    this.http.patch('http://localhost:3000/directbuynowproducts/'+item.emailid,data).subscribe(data=>{
      this.getorderitem();
    })
  }

  if(item.Orderstatus==this.orderstatus1){
    const data={Orderstatus:this.orderstatus2}
    // console.log("da",orderstatus:this.orderstatus)
    this.http.patch('http://localhost:3000/directbuynowproducts/'+item.emailid,data).subscribe(data=>{
      this.getorderitem();
    })
  }
         
  if(item.Orderstatus==this.orderstatus2){
    const data={Orderstatus:this.orderstatus3}
    // console.log("da",orderstatus:this.orderstatus)
    this.http.patch('http://localhost:3000/directbuynowproducts/'+item.emailid,data).subscribe(data=>{
      this.getorderitem();
    })
  }
  // this.buttontext="Approve"

  //   if(this.product.Orderstatus="Ready For shipment"){
  //     this.buttontext="shipped"
  //   }

}

}