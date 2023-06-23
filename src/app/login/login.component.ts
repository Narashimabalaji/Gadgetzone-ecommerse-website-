import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { DbseviceService } from '../dbservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // username:any="";
  // password:any="";
  // user:any;
  // saved:any;
  showPassword:boolean=false;
  email:any="";
  returl:any="home";

  constructor(private http:HttpClient,private service:DbseviceService,private route:Router,private routerguard:ActivatedRoute, private forms:FormBuilder) { 

  
  }


  LoginForm = this.forms.group({
    emailid:[,[Validators.required, Validators.email]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],

  })
  login(){
    const emailval=this.LoginForm.controls['emailid'].value;
    const passwordval=this.LoginForm.controls['password'].value;
    this.service.logindetails(emailval,passwordval);
 console.log("logged in user",this.LoginForm.value);
 
 this.service.adminlog(emailval,passwordval);

  }


  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


  ngOnInit() {
    // this.routerguard.queryParamMap.subscribe(parama=>{
    //   this.returl=parama.get('returl');
    //   console.log("Logincomponent/ngOnInit",this.returl);
    // })
  }

}