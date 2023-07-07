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
  


  constructor(private route:Router,private forms:FormBuilder,private dbservice:DbseviceService,private http:HttpClient) { }

  ngOnInit() {
  }

  paymentform = this.forms.group({
    cardnumber:[,[Validators.required,Validators.minLength(16)]],
   

  })


submit(){
  if(this.paymentform.valid){
    this.route.navigate(['orderplaced']).then(()=>{
      window.location.reload();
       });


       this.dbservice.buynowpaymentverified();



}

}

  orderplace(){

    if(this.paymentform.valid){
    this.route.navigate(['orderplaced']).then(()=>{
      window.location.reload();
       });
      }
  }

directbuynow(){
    
}

}
