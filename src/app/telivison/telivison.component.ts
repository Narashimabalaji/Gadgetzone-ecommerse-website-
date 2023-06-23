import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import * as moment from 'moment';
import { SingleproductviewService } from '../singleproductview.service';

@Component({
  selector: 'app-telivison',
  templateUrl: './telivison.component.html',
  styleUrls: ['./telivison.component.css']
})
export class TelivisonComponent implements OnInit {
  product: any;
  expirationdate!: Date;
  remainingtime!: string;
  originalprice!:number;
  discountedprice!:number;
  test: any;
  disprice: any;
  

  constructor(private dbservice:DbseviceService,private showproduct:SingleproductviewService) { }

  ngOnInit() {

    this.dbservice.gettelivision().subscribe(res=>{
      this.product=res;  
      
    });

    
 
    this.dbservice.gettelivision().subscribe(p=>{

      for(let item of this.product){
        this.test=item.price;
        this.disprice=item.discountedprice
      }
      this.originalprice = this.test;
      this.discountedprice=this.disprice
    })
    
    this.expirationdate = moment().add(0.01,'hour').toDate();
    
 

    // this.updateremainingtime();

  

  }

  offerok(){

    //for triggering purposes only
    setInterval(()=>{
      this.updateremainingtime();

    },1000);

    this.test=this.discountedprice;
  }





  updateremainingtime(){
    const now =moment();
    const expiration =moment(this.expirationdate);
    const duration =moment.duration(expiration.diff(now));


    if(duration.asSeconds() <= 0){
      this.remainingtime = '';

      this.offerok ()

      //offer ok function will return to original price
      this.discountedprice = this.originalprice;

    }

    else{
      const days =duration.days();
      const hours =duration.hours();
      const minutes =duration.minutes();
      const seconds =duration.seconds();

      this.remainingtime =`${days}d ${hours}h ${minutes}m ${seconds}s`;

      // implement logic for calulating the disounted price based on remaining time
      //reduce price based on remaining time

      // const discountedpercentage = 20; //20% discount
      // const timeremainingpercentage = duration.asSeconds() /(60*60);
      // const discountamount = this.originalprice * (discountedpercentage /100)* timeremainingpercentage;
      // this.discountedprice = this.originalprice-discountamount;


    }
  }
 

  productview(item:any){
    this.showproduct.newtab(item);
  }

}
