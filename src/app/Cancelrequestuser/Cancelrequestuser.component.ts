import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Cancelrequestuser',
  templateUrl: './Cancelrequestuser.component.html',
  styleUrls: ['./Cancelrequestuser.component.css']
})
export class CancelrequestuserComponent implements OnInit {
  productid:string|any;
  product: any;
  isclicked=false;

  constructor(private http:HttpClient,private form:FormBuilder,private Activateroute:ActivatedRoute) { }

  ngOnInit() {

  this.Activateroute.params.subscribe(params => {

    this.productid =params['emailid'];

    console.log(this.productid,"Product");
  })
   
  this.http.get<any>("http://localhost:3000/directbuynowproducts/"+this.productid).subscribe((product:any)=>{
        this.product =product

        console.log(product,"pro");
  })

  }

  cancelrequestform = this.form.group({
    reason:[,[Validators.required]],
    additionalcomment:[,[Validators.required]],

  })


  toggledown(){
    this.isclicked =!this.isclicked;
  }

  submit(){
    this.http.post<any>("http://localhost:3000/cancelrequest/",this.cancelrequestform.value).subscribe((res:any)=>{
      console.log(res,"posted data"),
      alert("requested")
    })
  }
}
