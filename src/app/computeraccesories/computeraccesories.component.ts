import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { SingleproductviewService } from '../singleproductview.service';

@Component({
  selector: 'app-computeraccesories',
  templateUrl: './computeraccesories.component.html',
  styleUrls: ['./computeraccesories.component.css']
})
export class ComputeraccesoriesComponent implements OnInit {

product:any;

  constructor(private dbservice:DbseviceService,private showproduct:SingleproductviewService) { }

 
  ngOnInit() {

    this.dbservice.getcomputeraccesories().subscribe(res=>{
      this.product=res;
    });

}

productview(item:any) {

  this.showproduct.newtab(item);
}
}
