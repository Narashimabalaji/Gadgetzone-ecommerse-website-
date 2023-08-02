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

  buttontext:any;
  Computeraccessories=false;
  ComputerAccesories: any;

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
    availoffer1:[,[Validators.required,]],
    availoffer2:[,[Validators.required,]],
    availoffer3:[,[Validators.required,]],
    box:[,[Validators.required,]],
    OTGCompaitable:[,[Validators.required,]],
    Touchscreen:[,[Validators.required,]],
    ModelName:[,[Validators.required,]],
    ModelNumber:[,[Validators.required,]],
    Resolution:[,[Validators.required,]],
    InternalStorage:[,[Validators.required,]],
    HybridSim:[,[Validators.required,]],
    MemoryCardSlotType:[,[Validators.required,]],
    BatteryCapacity:[,[Validators.required,]],
    NetworkType:[,[Validators.required,]],
    BrowseType:[,[Validators.required,]],
    SupportedNetworks:[,[Validators.required,]],
    WarrantySummary:[,[Validators.required,]],
    RAM:[,[Validators.required,]],
    colour:[,[Validators.required]],
    PrimaryCamera:[,[Validators.required]],
    SimType:[,[Validators.required]]








    


  })
  addProduct(){

    

    if(this.Mobiledata == true) {

    this.http.post<any>("http://localhost:3000/mobiles/",this.Productaddform.value).subscribe((data=>{
      console.log("product details",data);
      alert("Form submitted");
          this.Productaddform.reset();
          window.location.reload();

    }))
  }

  if(this.Television == true){

    this.http.post<any>("http://localhost:3000/telivision/",this.Productaddform.value).subscribe((data=>{
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
    
  if(this.ComputerAccesories == true){
    this.http.post<any>("http://localhost:3000/computeraccesories/",this.Productaddform.value).subscribe((data=>{
      alert("product added to computer accesories");
      this.Productaddform.reset();
      window.location.reload();
    }))
  }
 

    }

   


  getmultipledata(){
    
    const laptops =this.http.get<any>("http://localhost:3000/laptops");
    const telivision =this.http.get<any>("http://localhost:3000/telivision");
    const mobiles =this.http.get<any>("http://localhost:3000/mobiles");
    const computeraccesories =this.http.get<any>("http://localhost:3000/computeraccesories");



    return forkJoin([telivision,laptops,mobiles,computeraccesories]);

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

computeraccesories(){

  this.dbservice.getcomputeraccesories().subscribe((data=>{
    this.mobileproduct=data;
  }));

  this.ComputerAccesories=true;

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
   this.Productaddform.controls['availoffer1'].setValue(item.availoffer1);
   this.Productaddform.controls['availoffer2'].setValue(item.availoffer2);
   this.Productaddform.controls['availoffer3'].setValue(item.availoffer2);
   this.Productaddform.controls['box'].setValue(item.box);
   this.Productaddform.controls['Touchscreen'].setValue(item.Touchscreen);
   this.Productaddform.controls['HybridSim'].setValue(item.HybridSim);
   this.Productaddform.controls['BrowseType'].setValue(item.BrowseType);
   this.Productaddform.controls['NetworkType'].setValue(item.NetworkType);
   this.Productaddform.controls['WarrantySummary'].setValue(item.WarrantySummary);
   this.Productaddform.controls['BatteryCapacity'].setValue(item.BatteryCapacity);
   this.Productaddform.controls['SupportedNetworks'].setValue(item.SupportedNetworks);
   this.Productaddform.controls['RAM'].setValue(item.RAM);
   this.Productaddform.controls['OTGCompaitable'].setValue(item.OTGCompaitable);
   this.Productaddform.controls['OTGCompaitable'].setValue(item.OTGCompaitable);
   this.Productaddform.controls['SimType'].setValue(item.SimType);
   this.Productaddform.controls['OTGCompaitable'].setValue(item.OTGCompaitable);
   this.Productaddform.controls['MemoryCardSlotType'].setValue(item.OTGCompaitable);
   this.Productaddform.controls['PrimaryCamera'].setValue(item.PrimaryCamera);
   this.Productaddform.controls['InternalStorage'].setValue(item.InternalStorage);
   this.Productaddform.controls['Resolution'].setValue(item.OTGCompaitable);
   this.Productaddform.controls['ModelNumber'].setValue(item.OTGCompaitable);
   this.Productaddform.controls['ModelName'].setValue(item.OTGCompaitable);
   this.Productaddform.controls['colour'].setValue(item.color);




















   





   




    

   this.Edit == true;

  

   this.buttontext ='Edit Product';

}
   
update(){
  

    if(this.Mobiledata == true)
this.http.patch<any>('http://localhost:3000/mobiles/'+this.itemid,this.Productaddform.value).subscribe(res=>{
  alert("Updated successfully");
  this.Productaddform.reset();

});

if(this.Television == true){
  this.http.patch<any>("http://localhost:3000/telivision/" +this.itemid,this.Productaddform.value).subscribe((res=>{
    alert("Updated successfully");
  }))

}

if(this.Laptopdata == true){
  this.http.patch<any>("http://localhost:3000/laptops/" +this.itemid,this.Productaddform.value).subscribe((res=>{
    alert("Updated successfully");
  }))
  
}


}


}

