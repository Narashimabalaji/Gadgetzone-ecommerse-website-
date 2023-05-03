import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, Validators } from '@angular/forms';
import { DbseviceService } from '../dbservice.service';

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
    username:[,[Validators.required,Validators.minLength(4)]],
    emailid:[,[Validators.required, Validators.email]],
    password:[,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]],
    cpassword:[,[Validators.required,Validators.minLength(8), Validators.maxLength(15)]],

  })
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