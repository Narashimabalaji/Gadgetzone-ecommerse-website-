import { Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DbseviceService } from './dbservice.service';
import { CartService } from './cart.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gadgetzone2';

  isLoading: boolean = false;
   totalitem :number=0;
  loggedInUser:any|string;
  loggedemailid:any;
  adminlogin:boolean=false;
  product: any=[];
  searchText: string ='';
  searchResult: any[]=[];

constructor(private cartservice :CartService,private router:Router,private dbservice :DbseviceService,private http:HttpClient,
  private logger:LoggerService,
  private searchservice:SearchService){}

ngOnInit(): void {

  this.cartservice.getProducts().subscribe(length=>{
    this.totalitem = length.length;
  })

 this.loggedemailid =localStorage.getItem('loggedemailid');
  this.cartservice.getProducts().subscribe(res=>{
    this.totalitem=res.length;

    console.log("length of total item",this.totalitem);
  })
 
 
  //for login logout 
  this.loggedInUser=localStorage.getItem('loggedInUser');
  
  if(this.loggedInUser =='')
  {
    this.loggedInUser =null;
    
   

  }
 this.getadmin();
 
}


loadData() {
  this.isLoading = true;
  // Perform data loading or any asynchronous operation here
  // After the operation is complete, set isLoading to false
}

getadmin(){
  // this.dbservice.getadmins();
  // console.log("gsm", this.dbservice.getadmins());
  this.http.get<any>('http://localhost:3000/admin').subscribe(res=>{
    res.filter((data:any)=>{
      console.log("login",this.adminlogin);
      if(data.emailid===this.loggedemailid)
      {
        this.adminlogin=true;
      }
    })
  })
    }

logout(){
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('loggedemailid');
  localStorage.clear();




  this.router.navigate(['/home']).then(()=>{
    this.isLoading = true;
    // this.logger.log('User logged out');
    window.location.reload();
 

  })

}

search(){

  this.dbservice.getmobiles().subscribe(res=>{
    this.product=res;
  });

this.searchservice.search(this.searchText).subscribe((result: any) =>{
  this.searchResult = result;
})
}



}
