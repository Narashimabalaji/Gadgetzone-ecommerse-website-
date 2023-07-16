import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
selectaddress: any;
  addressid: string | any;
  selectedAddress: any;

constructor(private  http:HttpClient) { }

selectedaddress(item:any){
  console.log("item received",item);



  this.http.get<any>("http://localhost:3000/billingdetail/").subscribe((address:any)=>{

  const l =address.filter((k:any)=>{

    return k.emailid == item.emailid

  })
    
  this.selectaddress = l;
  console.log("geted address", this.selectaddress);
             
  })


}

sendaddress(){

  this.addressid = localStorage.getItem("address");

  return this.http.get<any>("http://localhost:3000/billingdetail/"+this.addressid);
  

}






}
