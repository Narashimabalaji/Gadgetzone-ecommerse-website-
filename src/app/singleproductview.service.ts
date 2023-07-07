import { Injectable } from '@angular/core';
import { DbseviceService } from './dbservice.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SingleproductviewService {
public product: any;



constructor(private dbservice:DbseviceService,private http:HttpClient) { }


  newtab(item:any){
    
    const url ="/singlepageview"
    const fil=this.product;
  window.open(url,fil);
  
   localStorage.setItem('model',item.model);
  }


 
  
}


