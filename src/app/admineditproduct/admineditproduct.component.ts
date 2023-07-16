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

  Edit :boolean=false;

  delproduct:any;

  Model:any;
  idendity: any;
  itemid: any;

  buttontext:any

  constructor(private dbservice:DbseviceService,private http:HttpClient,private forms:FormBuilder) { }

  ngOnInit() {
       
    // this.http.get("http://localhost:3000/mobiles").subscribe((data=>{

    // this.mobileproduct=data;

    // console.log(this.mobileproduct+":geted data")

    // }))

    this.buttontext='Select product to Add'
    
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
    this.buttontext ='Add Laptop Products';

   
  }
mobilesdata(){
  this.http.get("http://localhost:3000/mobiles/").subscribe((data=>{

    this.mobileproduct=data;

    console.log(this.mobileproduct+":geted data")

    }))

    this.Mobiledata=true;

    this.buttontext ='Add mobile Products';
}

televisiondata(){
  this.http.get("http://localhost:3000/telivision/").subscribe((data=>{

    this.mobileproduct=data;

    console.log(this.mobileproduct+":geted data")

    }));

    this.Television=true;

    this.buttontext ='Add Television Products';

}


onEdit(item:any){
  this.itemid=item.emailid;
   this.Productaddform.controls['model'].setValue(item.model);
   this.Productaddform.controls['description1'].setValue(item.description1);
   this.Productaddform.controls['description2'].setValue(item.description2);
   this.Productaddform.controls['price'].setValue(item.price);
   this.Productaddform.controls['discount'].setValue(item.discount);
   this.Productaddform.controls['delivery'].setValue(item.delivery);
   this.Productaddform.controls['quantity'].setValue(item.quantity);
   this.Productaddform.controls['rating'].setValue(item.rating);
   this.Productaddform.controls['image'].setValue(item.image);


    

   this.Edit ==true;

  

   this.buttontext ='Edit Product';

}
   
update(){
  

    if(this.Mobiledata == true)
this.http.put<any>('http://localhost:3000/mobiles/'+this.itemid,this.Productaddform.value).subscribe(res=>{
  alert("Updated successfully");
  this.Productaddform.reset();

});

if(this.Television == true){
  this.http.put<any>("http://localhost:3000/telivision/" +this.itemid,this.Productaddform.value).subscribe((res=>{
    alert("Updated successfully");
  }))

}

if(this.Mobiledata == true){
  this.http.put<any>("http://localhost:3000/mobiles/" +this.itemid,this.Productaddform.value).subscribe((res=>{
    alert("Updated successfully");
  }))
  
}}


}

