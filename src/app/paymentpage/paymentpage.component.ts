import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.css']
})
export class PaymentpageComponent implements OnInit {


  constructor(private route:Router,private forms:FormBuilder) { }

  ngOnInit() {
  }

  paymentform = this.forms.group({
    cardnumber:[,[Validators.required,Validators.minLength(16)]],
   

  })






  orderplace(){

    if(this.paymentform.valid){
    this.route.navigate(['orderplaced']).then(()=>{
      window.location.reload();
       });
      }
  }



}
