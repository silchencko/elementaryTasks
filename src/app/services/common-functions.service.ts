import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }
  isInt(num) {
    return (num % 1 === 0);
  }
}
