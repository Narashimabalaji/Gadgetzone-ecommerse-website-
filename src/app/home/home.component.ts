import { Component } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { CartService } from '../cart.service';
import { SingleproductviewService } from '../singleproductview.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public productList :any;
  public email:any;
  loggedemailid:any|string;
  product2: any;
  product3: any;
  constructor(private service:DbseviceService,private cartservice:CartService,private showproduct:SingleproductviewService){
    
    this.email=this.service.u;
 
  }
  
  
  ngOnInit():void{
  this.service.getProducts().subscribe(value=>{
    this.productList = value;
    console.log(this.productList);

  });

  this.service.gettelivision().subscribe(res=>{
    this.product2=res;  
    
  });

  this.service.getlaptops().subscribe(res=>{
    this.product3=res;
});

  
  
  

  // this.productList.forEach((a:any)=> {
  //   Object.assign(a,{quantity:1,total:a.price});
    
  // });
  
  
  }

  
  productview(item:any) {

    this.showproduct.newtab(item);
  }

  
  addtocart(item:any){
   this.cartservice.addtocart(item,this.loggedemailid);
   this.loggedemailid=localStorage.getItem('loggedemailid');
   console.log(this.loggedemailid)
   
    
  }
}

