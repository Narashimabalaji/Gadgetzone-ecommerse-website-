import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DbseviceService } from './dbservice.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

 constructor(private adminloginservice:DbseviceService){}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
       if(this.adminloginservice.isadminloggedin()){

        return true;
       }

       else{
        console.log("login admin");
        return false;
       }
     
  }
  

  


}
