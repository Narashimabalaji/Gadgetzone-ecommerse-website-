import { Component } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shoppingcartdetail',
  templateUrl: './shoppingcartdetail.component.html',
  styleUrls: ['./shoppingcartdetail.component.css']
})
export class ShoppingcartdetailComponent {
  cartlist: any="";
  searchfor: any="";
  finalproduct: any="";

  constructor(private service:DbseviceService,private router:ActivatedRoute){}

ngOnInit(){
  this.service.getProducts().subscribe(data=>{
    this.cartlist=data;

    this.router.params.subscribe(paramdata=>{
      this.searchfor=paramdata['check'];

      for(let product of this.cartlist){
        if(product.model==this.searchfor){
          this.finalproduct=product;
          break
        }
      }

    })
  })
}

}
