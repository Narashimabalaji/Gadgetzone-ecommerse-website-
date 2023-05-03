import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  product: any;

  constructor(private dbservice:DbseviceService) { }

  ngOnInit() {

    this.dbservice.getmobiles().subscribe(res=>{
      this.product=res;
    });

}
}
