import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  product: any;

  constructor(private dbservice:DbseviceService) { }

  ngOnInit() {
    this.dbservice.getlaptops().subscribe(res=>{
      this.product=res;
  });

}


}

