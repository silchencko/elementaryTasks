import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }
  validateInt(num: string) {
    return !isNaN(+num) && +num % 1 === 0 && +num >= 0 && num !== '';
  }
  isInt(num) {
    return (num % 1 === 0);
  }
}
