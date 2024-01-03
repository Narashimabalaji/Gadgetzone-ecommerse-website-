import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DbseviceService } from '../dbservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {
  
  isclicked1=false;
  isclicked2=false;
  isclicked3=false;
  cardNumber: string|any;
  cardType: string|any;
  Cardname: any;
  pricedetail: any;
 

  constructor(private route:Router,private forms:FormBuilder,private dbservice:DbseviceService,private http:HttpClient) { }

  ngOnInit() {
    this.pricedetails()
  }

  CardForm = this.forms.group({
    cardnumber:[,[Validators.required,Validators.minLength(16)]],
    cardmonth:[,[Validators.required,]],
    cvv:[,[Validators.required,]],

  });

  checkCard() {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^(?:5[1-5][0-9]{14})$/;

    if (this.cardNumber.match(visaPattern)) {
      this.cardType = 'assets/images/visalogo.png';
      this.Cardname ='Visacard'
    }  else if (this.cardNumber.match(mastercardPattern)) {
      this.cardType = 'assets/images/mastercardlogo.png';
      this.Cardname='Mastercard'
    } else {
      this.cardType = null;
    }
  }

  pricedetails(){
    const loggedemailid = localStorage.getItem('loggedemailid');

    this.http.get<any>("http://localhost:3000/carttotal/"+loggedemailid).subscribe((res: any) => {

    this.pricedetail =res;

    console.log(res);
    })
  }


submit(){
  if(this.CardForm.valid){
    


       this.dbservice.buynowpaymentverified();



const addressid = localStorage.getItem('address');


       
this.http.get<any>("http://localhost:3000/billingdetail/").subscribe((k)=>{
         
const l =k.filter((address:any)=>{
  
        return address.emailid == addressid;
})
if(l){
this.http.patch<any>("http://localhost:3000/billingdetail/"+addressid,{Payment:this.Cardname}).subscribe((res:any)=>{
 console.log(res,"data");
})
}

else{
  this.http.post<any>("http://localhost:3000/billingdetail/"+addressid,{Payment:this.Cardname}).subscribe((res:any)=>{
 console.log(res,"data");
})
}
});

}

this.route.navigate(['orderplaced']).then(()=>{
  window.location.reload();
   });

}

  orderplace(){

    this.Cardname="Cash On Deilvery"
       this.dbservice.buynowpaymentverified();

       const addressid = localStorage.getItem('address');


       
      this.http.get<any>("http://localhost:3000/billingdetail/").subscribe((k)=>{
               
      const l =k.filter((address:any)=>{
        
              return address.emailid === addressid;
      })

if(l){


      this.http.patch<any>("http://localhost:3000/billingdetail/"+addressid,{Payment:"Cash On Delivery"}).subscribe((res:any)=>{
       console.log(res,"data");

       alert("posted Cash on delivery")
     })
    }

    else{
      this.http.post<any>("http://localhost:3000/billingdetail/"+addressid,{Payment:"Cash On Delivery"}).subscribe((res:any)=>{
        console.log(res,"data");
        alert("error data received")
      })
    }
});
    
this.route.navigate(['orderplaced']).then(()=>{
  window.location.reload();
   });
      
  }
  toggledown1(){
    this.isclicked1 =!this.isclicked1;
  }
  toggledown2(){
    this.isclicked2 =!this.isclicked2;
  }
  toggledown3(){
    this.isclicked3 =!this.isclicked3;
  }

  

}
