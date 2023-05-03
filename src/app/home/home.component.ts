import { Component } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public productList :any;
  public email:any;
  loggedemailid:any|string;
  constructor(private service:DbseviceService,private cartservice:CartService){
    
    this.email=this.service.u;
 
  }
  
  
  ngOnInit():void{
  this.service.getProducts().subscribe(value=>{
    this.productList = value;
    console.log(this.productList);

  });
  
  

  // this.productList.forEach((a:any)=> {
  //   Object.assign(a,{quantity:1,total:a.price});
    
  // });
  
  
  }

  

  
  addtocart(item:any){
   this.cartservice.addtocart(item,this.loggedemailid);
   this.loggedemailid=localStorage.getItem('loggedemailid');
   console.log(this.loggedemailid)
   
    
  }
}

