import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

constructor() { }

log(message:string){
  console.log(`[INFO] ${this.getTimestamp()} - ${message}`);
}

warn(message:string){
  console.log(`[WARN] ${this.getTimestamp()} -  ${message}`);
}
private getTimestamp():string {
  return new Date().toISOString();

}
}
