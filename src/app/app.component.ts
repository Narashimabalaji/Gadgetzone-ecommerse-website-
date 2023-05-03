import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DbseviceService } from './dbservice.service';
import { CartService } from './cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gadgetzone2';
  public totalitem :number=0;
  loggedInUser:any|string;

constructor(private cartservice :CartService,private router:Router){}

ngOnInit(): void {
  
  this.cartservice.getProducts().subscribe(res=>{
    this.totalitem=res.length;
  })

  //for login logout 
  this.loggedInUser=localStorage.getItem('loggedInUser');
  
  if(this.loggedInUser =='')
  {
    this.loggedInUser =null;
  }
}

logout(){
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('loggedemailid');
  this.router.navigate(['/home']).then(()=>{
    window.location.reload();

  })
}
}
