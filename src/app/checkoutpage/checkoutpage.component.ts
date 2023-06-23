import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DbseviceService } from '../dbservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})


export class CheckoutpageComponent implements OnInit {
  



  constructor(private form:FormBuilder,private http:HttpClient,private dbservice:DbseviceService,private route:Router) { }

  ngOnInit() {
  }


  BillingForm=this.form.group({
    username:[,[Validators.required,Validators.minLength(4)]],
    email:[,[Validators.required, Validators.email,Validators.pattern("[a-zA-Z0-9.-]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{3,}")]],
    phonenumber:[,[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]],
    address:[,[Validators.required,]],
    city:[,[Validators.required,]],
    state:[,[Validators.required,]],
    pincode:[,[Validators.required,Validators.pattern]]


  })

  submitform(){
    if(this.BillingForm.valid){
    
          alert("Form submitted");

        
          this.dbservice.addbillinginfo(this.BillingForm.value).subscribe((d) =>{
               alert("billdata");
               this.route.navigate(['/productconfirmation']);

          });
     
        }
      }
  }


