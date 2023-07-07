import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DbseviceService } from '../dbservice.service';
import { BuynowrestrictService } from '../Buynowrestrict.service';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  loggedInUser:any|string;
  

  constructor(private dbservice:DbseviceService,private route:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
     
      if(!this.dbservice.isuserloggedin()){
        alert("You are not logged in to view the page");
        this.route.navigate(["login"],{queryParams:{retUrl:route.url/*checkout*/}}); //localhost:4200/login?retUrl=product
        return false;
        }
          return true;
        }
    }

    
  



