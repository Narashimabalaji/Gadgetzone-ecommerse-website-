import { Injectable } from '@angular/core';
import { DbseviceService } from './dbservice.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  products:any;
  constructor(private dbservice:DbseviceService) { }

 
 
  search(query: string){

    this.dbservice.getmobiles().subscribe(mobileproucts=>{
      this.products = mobileproucts;
    });

    const filterdresult = this.products.filter((product:any) =>{
      if(product.Searchname == query){

        console.log("Filter",)

      }
    })
    return filterdresult;
    }
    
  }

