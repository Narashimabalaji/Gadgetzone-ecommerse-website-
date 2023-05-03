import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';

@Component({
  selector: 'app-telivison',
  templateUrl: './telivison.component.html',
  styleUrls: ['./telivison.component.css']
})
export class TelivisonComponent implements OnInit {
  product: any;

  constructor(private dbservice:DbseviceService) { }

  ngOnInit() {

    this.dbservice.gettelivision().subscribe(res=>{
      this.product=res;
    });

  }

}
