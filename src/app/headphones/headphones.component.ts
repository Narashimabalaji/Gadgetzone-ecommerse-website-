import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { SingleproductviewService } from '../singleproductview.service';

@Component({
  selector: 'app-headphones',
  templateUrl: './headphones.component.html',
  styleUrls: ['./headphones.component.css']
})
export class HeadphonesComponent implements OnInit {

  product:any;

  constructor(private dbservice:DbseviceService,private showproduct:SingleproductviewService) { }

  ngOnInit() {

    this.dbservice.getHeadphones().subscribe(res=>{
      this.product=res;
    });

}

productview(item:any) {

  this.showproduct.newtab(item);
}

}
