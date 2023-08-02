import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { SingleproductviewService } from '../singleproductview.service';

@Component({
  selector: 'app-smartwatches',
  templateUrl: './smartwatches.component.html',
  styleUrls: ['./smartwatches.component.css']
})
export class SmartwatchesComponent implements OnInit {
  product:any;
  constructor(private dbservice:DbseviceService,private showproduct:SingleproductviewService) { }

  ngOnInit() {

    this.dbservice.getsmartwatch().subscribe(res=>{
      this.product=res;
    });

}

productview(item:any) {

  this.showproduct.newtab(item);
}
}
