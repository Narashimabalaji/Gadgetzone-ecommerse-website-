import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbseviceService } from '../dbservice.service';
import { Confirmedvalidators } from '../confirmvalidation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;
  showConfirmPassword:boolean=false;
  constructor(private  service:DbseviceService,private forms:FormBuilder ,private route:Router,private http:HttpClient) { }

  ResisterForm = this.forms.group({
    username:[,[Validators.required,Validators.pattern(/^(?!.*([a-zA-Z0-9])\1{3})[a-zA-Z0-9!@#$%^&*-_]+$/)]],
emailid:[,[Validators.required, Validators.email,Validators.pattern(/^(?!.*([a-zA-Z])\1{3})[\w-]+(\.[\w-]+)*@((gmail|yahoo|email|outlook)+\.)+(com|net|org|edu|gov|int|mil|biz|info|name|museum|coop|aero|[a-zA-Z]{2})$/)]],    password:[,[Validators.required,Validators.minLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]){8,32}.+$/)]],    cpassword:[,[Validators.required,Validators.minLength(8), Validators.maxLength(8)]],

  },{validator: Confirmedvalidators('password', 'cpassword')})
  submitform(){

    this.http.get<any>("http://localhost:3000/users").subscribe(res=>{
      const user = res.find((a:any)=>{
        console.log(a.emailid);
        return a.emailid === this.ResisterForm.value.emailid ;
      });

      if(user){
        alert('You are already register using this email-id');
      }

      else if(this.ResisterForm.valid){
        this.service.adduserinformation(this.ResisterForm.value).subscribe(data=>{
              alert("Form submitted");
              this.ResisterForm.reset();
              this.route.navigate(['/login'])
            })
          }
  })
  
   
  }
  



  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  ngOnInit() {
  }

}