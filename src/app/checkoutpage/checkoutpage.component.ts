import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbseviceService } from '../dbservice.service';
import { Router } from '@angular/router';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-checkoutpage',
  templateUrl: './checkoutpage.component.html',
  styleUrls: ['./checkoutpage.component.css']
})


export class CheckoutpageComponent implements OnInit {
  
  form2!: FormGroup;

  Address:any|string;

  selectedAddress:any;
  router: any;


  constructor(private form:FormBuilder,private http:HttpClient,private dbservice:DbseviceService,
    private route:Router,
    private addressservice:AddressService) { }

  ngOnInit() {

    this.dbservice.Addressavail().subscribe((address:any)=>{

      const loggedemailid = localStorage.getItem('loggedemailid');
      
      const user = address.filter((data:any)=>{
        console.log("Email address in data:", data.email);
        return data.email === loggedemailid;
      
               
      
    })
  this.Address = user;
  
  })

   
           
   
    
  
  }
    
    
  

 
  BillingForm=this.form.group({
    username:[,[Validators.required,Validators.minLength(4)]],
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

               window.location.reload();

              //  this.route.navigate(['/productconfirmation']);

          });
     
        }
      }

      selectAddress(address: any) {
        this.selectedAddress = address;
          
        // this.dbservice.address1(address);
        this.addressservice.selectedaddress(address);

        localStorage.setItem('address',address.emailid );
    

        
        this.route.navigate(['/productconfirmation']);
        console.log(address,"address selected");
        // const addressString = JSON.stringify(this.selectedAddress);
        // this.route.navigate(['/productconfirmation'], { queryParams: { address:  JSON.stringify(this.selectedAddress) }  }) ;


      }


  }


