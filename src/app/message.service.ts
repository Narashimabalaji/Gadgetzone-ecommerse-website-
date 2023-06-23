import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private emailUrl ='http://localhost:3000/sendemail/';

  constructor(private http :HttpClient) { }

  sendEmail(email:string){
    const data ={
      emailid:email,
    };

    return this.http.post(this.emailUrl, data);
  }
}
