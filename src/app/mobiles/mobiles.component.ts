import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { SingleproductviewService } from '../singleproductview.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  product: any;

  constructor(private dbservice:DbseviceService,private showproduct:SingleproductviewService) { }

  ngOnInit() {

    this.dbservice.getmobiles().subscribe(res=>{
      this.product=res;
    });

}

productview(item:any) {

  this.showproduct.newtab(item);
}
}
