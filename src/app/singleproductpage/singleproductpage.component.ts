import { Component, OnInit } from '@angular/core';
import { SingleproductviewService } from '../singleproductview.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { DbseviceService } from '../dbservice.service';
import { CartService } from '../cart.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-singleproductpage',
  templateUrl: './singleproductpage.component.html',
  styleUrls: ['./singleproductpage.component.css'],
  providers: [DatePipe]
})
export class SingleproductpageComponent implements OnInit {
 
  particularproduct:any;
  product: any;
  
  constructor(private showproduct:SingleproductviewService,private http:HttpClient,
    private dbservice:DbseviceService,private cartservice:CartService,private datePipe: DatePipe) { 
    
  }

  ngOnInit() {
   

  this.getmultipledata().subscribe(([o,k,l,m,n,p])=>{
    console.log("API response:", o,k);

    const loggedemailid = localStorage.getItem('loggedemailid');
    console.log("Logged in user email:", loggedemailid);
    const itemmodel = localStorage.getItem('model');

    



    const user = o.filter((data:any)=>{
      console.log("Email address in data:", data.email);
      return data.model === itemmodel;
    });

    const user2 =k.filter((data2:any)=>{
      console.log("user2"+data2);
      return data2.model === itemmodel;
    })
    const user3 =l.filter((data3:any)=>{
      console.log("user3"+data3);
      return data3.model === itemmodel;
    })
    const user4 =m.filter((data4:any)=>{
      console.log("user4"+data4);
      return data4.model === itemmodel;
    })
    const user5 =n.filter((data5:any)=>{
      console.log("user4"+data5);
      return data5.model === itemmodel;
    })
         
    const user6 =p.filter((data6:any)=>{
      console.log("user4"+data6);
      return data6.model === itemmodel;
    })
    const finaldata =[...user,...user2,...user3,...user4,...user5,...user6];
    this.product =finaldata;

    console.log("user",user);

    console.log("finaldata",finaldata);

  })

  this. calculateDeliveryDate();

   this.lowstockalert()


}


  getmultipledata(){
    
    const laptops =this.http.get<any>("http://localhost:3000/laptops");
    const telivision =this.http.get<any>("http://localhost:3000/telivision");
    const mobiles =this.http.get<any>("http://localhost:3000/mobiles");
    const smartwatch =this.http.get<any>("http://localhost:3000/smartwatch");
    const computeraccesories =this.http.get<any>("http://localhost:3000/computeraccesories");
    const Headphones =this.http.get<any>("http://localhost:3000/Headphones");




    return forkJoin([telivision,laptops,mobiles,smartwatch,computeraccesories,Headphones]);

  }

  addingtocart(item:any){
  
    const loggedemailid = localStorage.getItem('loggedemailid');

    this.cartservice.addtocart(item);

  }
  calculateDeliveryDate() {
    const currentDate = new Date();
    const deliveryDate = new Date(currentDate.getTime() + (3 * 24 * 60 * 60 * 1000));
    return this.datePipe.transform(deliveryDate, 'dd MMMM yyyy');
  }
  
  directbuy(item:any){

    alert("Directbuy");

    this.dbservice.buynowservice(item);
    localStorage.setItem('buy',"buy");


  }

  lowstockalert(){

    const productstock =this.product;

    console.log("Product stock",productstock.stock)
    
  }
}
