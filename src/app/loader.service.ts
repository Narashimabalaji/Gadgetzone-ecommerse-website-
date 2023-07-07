import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading: Subject<boolean> = new Subject<boolean>();

constructor() { }

show() {
  this.isLoading.next(true);
}

hide() {
  this.isLoading.next(false);
}
}
