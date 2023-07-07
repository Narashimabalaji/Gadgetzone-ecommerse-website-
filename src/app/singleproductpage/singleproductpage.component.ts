import { Component, OnInit } from '@angular/core';
import { SingleproductviewService } from '../singleproductview.service';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { DbseviceService } from '../dbservice.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-singleproductpage',
  templateUrl: './singleproductpage.component.html',
  styleUrls: ['./singleproductpage.component.css']
})
export class SingleproductpageComponent implements OnInit {
 
  particularproduct:any;
  product: any;
  
  constructor(private showproduct:SingleproductviewService,private http:HttpClient,
    private dbservice:DbseviceService,private cartservice:CartService) { 
    
  }

  ngOnInit() {
   

  this.getmultipledata().subscribe(([o,k,l])=>{
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
         
    const finaldata =[...user,...user2,...user3];
    this.product =finaldata;

    console.log("user",user);

    console.log("finaldata",finaldata);

  
  })

}


  getmultipledata(){
    
    const laptops =this.http.get<any>("http://localhost:3000/laptops");
    const telivision =this.http.get<any>("http://localhost:3000/telivision");
    const mobiles =this.http.get<any>("http://localhost:3000/mobiles");


    return forkJoin([telivision,laptops,mobiles]);

  }

  addingtocart(item:any){
    alert("added to your cart" );
    const loggedemailid = localStorage.getItem('loggedemailid');

    this.cartservice.addtocart(item,loggedemailid);
  

    
    
  }

  directbuy(item:any){

    alert("Directbuy");

    this.dbservice.buynowservice(item);
    localStorage.setItem('buy',"buy");


  }
}
