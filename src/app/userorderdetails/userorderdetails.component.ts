import { Component, OnInit } from '@angular/core';
import { DbseviceService } from '../dbservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userorderdetails',
  templateUrl: './userorderdetails.component.html',
  styleUrls: ['./userorderdetails.component.css']
})
export class UserorderdetailsComponent implements OnInit {
  order: any;
  mail:any;

  constructor(private dbservice:DbseviceService,private http:HttpClient) { }

  ngOnInit() {

    this.mail=localStorage.getItem('loggedemailid');
    this.dbservice.getorderdetails().subscribe((data)=>{

      const user = data.filter((data:any)=>{
        console.log("Email address in data:", data.email);
        return data.email === this.mail;
      
    })

    this.order = user;
    })

}
}
