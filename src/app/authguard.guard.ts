import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DbseviceService } from './dbservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private dbservice:DbseviceService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
      if (this.dbservice.isUserLoggedIn()){
        return true;
      }
     else{
      alert("auth user not logged in");
      this.router.navigate(["/login"],{queryParams:{returl:route.url}});
      return false;
     }
  }
  
}
