import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-admineditproduct',
  templateUrl: './admineditproduct.component.html',
  styleUrls: ['./admineditproduct.component.css']
})
export class AdmineditproductComponent implements OnInit {

  mobileproduct:any;

  Mobiledata = false;

  Television=false;

  Laptopdata =false;

  delproduct:any;

  Model:any;
  idendity: any;

  constructor(private dbservice:DbseviceService,private http:HttpClient,private forms:FormBuilder) { }

  ngOnInit() {
       
    // this.http.get("http://localhost:3000/mobiles").subscribe((data=>{

    // this.mobileproduct=data;

    // console.log(this.mobileproduct+":geted data")

    // }))
    
  }
  

  Productaddform=this.forms.group({

    model:[,[Validators.required,]],
    description1:[,[Validators.required,]],
    description2:[,[Validators.required,]],
    price:[,[Validators.required,]],
    discount:[,[Validators.required,]],
    delivery:[,[Validators.required,]],
    image:[,[Validators.required,]],
    rating:[,[Validators.required,]],
    quantity:[,[Validators.required,]],
    emailid:[,[Validators.required,]],
    


  })
  addProduct(){

    if(this.Mobiledata == true) {

    this.http.post<any>("http://localhost:3000/mobiles",this.Productaddform.value).subscribe((data=>{
      console.log("product details",data);
      alert("Form submitted");
          this.Productaddform.reset();
          window.location.reload();

    }))
  }

  if(this.Television == true){

    this.http.post<any>("http://localhost:3000/telivision",this.Productaddform.value).subscribe((data=>{
      console.log("product details",data);
      alert("Product Added to Televison");
          this.Productaddform.reset();
          window.location.reload();

    }))



  }

  
  if(this.Laptopdata == true){

    this.http.post<any>("http://localhost:3000/laptops",this.Productaddform.value).subscribe((data=>{
      console.log("product details",data);
      alert("Product Added to laptops");
          this.Productaddform.reset();
          window.location.reload();

    }))


  }
    


  }


  getmultipledata(){
    
    const laptops =this.http.get<any>("http://localhost:3000/laptops");
    const telivision =this.http.get<any>("http://localhost:3000/telivision");
    const mobiles =this.http.get<any>("http://localhost:3000/mobiles");


    return forkJoin([telivision,laptops,mobiles]);

  }

datadel(item:any){

  if(this.Mobiledata == true){

    this.http.delete<any>("http://localhost:3000/laptops/" +item.emailid).subscribe((res=>{
      alert("deleted");
    }));
  }

  if(this.Television == true){
    this.http.delete<any>("http://localhost:3000/telivision/" +item.emailid).subscribe((res=>{
      alert("deleted");
    }))

  }

  if(this.Mobiledata == true){
    this.http.delete<any>("http://localhost:3000/mobiles/" +item.emailid).subscribe((res=>{
      alert("delted");
    }))
  }
    
   

    console.log(item)

  


}

  laptopdata(){
    this.http.get("http://localhost:3000/laptops/").subscribe((data=>{

    this.mobileproduct=data;

    console.log(this.mobileproduct+":geted data");

    }))
 
    this.Laptopdata =true;

   
  }
mobilesdata(){
  this.http.get("http://localhost:3000/mobiles/").subscribe((data=>{

    this.mobileproduct=data;

    console.log(this.mobileproduct+":geted data")

    }))

    this.Mobiledata=true;
}

televisiondata(){
  this.http.get("http://localhost:3000/telivision/").subscribe((data=>{

    this.mobileproduct=data;

    console.log(this.mobileproduct+":geted data")

    }));

    this.Television=true;
}

}
