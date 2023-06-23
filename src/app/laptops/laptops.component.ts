import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { SingleproductviewService } from '../singleproductview.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  
  product: any;

  constructor(private dbservice:DbseviceService,private singleproductservice:SingleproductviewService) { }

  ngOnInit() {
    this.dbservice.getlaptops().subscribe(res=>{
      this.product=res;
  });

}

productview(item:any){

  console.log("model getted"+item.model);


  this.singleproductservice.newtab(item);




}

}

