import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntegersTaskService {

  constructor() { }
  validate(intLength: number, minSquare: number) {
    return (intLength % 1 === 0 && intLength > 0 && minSquare % 1 === 0 && minSquare > 0);

  }
  drawIntegers(intLength: number, minSquare: number) {
    let result = '';
    if (this.validate(intLength, minSquare)) {
      const integers = [];
      const min = Math.ceil(Math.sqrt(minSquare));
      for (let i = 0; i < intLength; i++) {
        integers.push(min + i);
      }
      result = integers.join(', ');
    } else {
      result = 'Заполните все поля целыми числами';
    }
    return result;
  }
}
