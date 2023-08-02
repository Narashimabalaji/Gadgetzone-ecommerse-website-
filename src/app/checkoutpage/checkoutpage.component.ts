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
  itemid: any;
  buttontext: any;
  Edit:boolean=false;

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

   
           
   
  this.buttontext='+ Add New Address'
  
  }
    
    
  

 
  BillingForm=this.form.group({
    username:[,[Validators.required,Validators.minLength(4)]],
    phonenumber:[,[Validators.required,Validators.pattern("^[7-9][0-9]{9}$")]],
    address:[,[Validators.required,]],
    city:[,[Validators.required,]],
    state:[,[Validators.required,]],
    pincode:[,[Validators.required,Validators.pattern]]


  })

  addaddress(){

    
          alert("Address Added");

        
          this.dbservice.addbillinginfo(this.BillingForm.value).subscribe((d) =>{
               alert("billdata");

               window.location.reload();

              //  this.route.navigate(['/productconfirmation']);

          });
     
        
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


      deleteaddress(item:any){
        this.http.delete<any>("http://localhost:3000/billingdetail/" +item.emailid).subscribe((res=>{
      alert("deleted");
      window.location.reload();
    }));

      }

      onedit(item:any){

        this.itemid =item.emailid;

        this.BillingForm.controls['username'].setValue(item.username);
        this.BillingForm.controls['phonenumber'].setValue(item.phonenumber);
        this.BillingForm.controls['address'].setValue(item.address);
        this.BillingForm.controls['city'].setValue(item.city);
        this.BillingForm.controls['pincode'].setValue(item.pincode);  
        this.BillingForm.controls['state'].setValue(item.state);

        this.buttontext='Update Address';

        this.Edit = true;

      }

      update(){
        this.http.patch<any>("http://localhost:3000/billingdetail/" +this.itemid,this.BillingForm.value).subscribe(res=>{
  alert("Updated successfully");
  this.BillingForm.reset();
  window.location.reload();

});

      }

  }


