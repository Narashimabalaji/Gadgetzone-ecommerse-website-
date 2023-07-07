import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbseviceService } from '../dbservice.service';
import { Confirmedvalidators } from '../confirmvalidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  showPassword: boolean = false;
  showConfirmPassword:boolean=false;
  constructor(private  service:DbseviceService,private forms:FormBuilder ,private route:Router) { }

  ResisterForm = this.forms.group({
    username:[,[Validators.required,Validators.minLength(4),Validators.pattern(/^(?!.*([a-zA-Z])\1)[a-zA-Z]+$/)]],
    emailid:[,[Validators.required, Validators.email,Validators.pattern(/^(?!.*([a-zA-Z ])\1)[\w-]+(\.[\w-]+)*@([\w-]+\.)+(com|net|org|edu|gov|int|mil|biz|info|name|museum|coop|aero|[a-zA-Z]{2})$/
    )]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(8),Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/)]],
    cpassword:[,[Validators.required,Validators.minLength(8), Validators.maxLength(8)]],

  },{validator: Confirmedvalidators('password', 'cpassword')})
  submitform(){
    if(this.ResisterForm.valid){
    this.service.adduserinformation(this.ResisterForm.value).subscribe(data=>{
          alert("Form submitted");
          this.ResisterForm.reset();
          this.route.navigate(['/login'])
        })
      }
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