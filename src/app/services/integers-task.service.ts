import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntegersTaskService {

  constructor() { }
  drawIntegers(intLength: number, minSquare: number) {
    const integers = [];
    const min = Math.ceil(Math.sqrt(minSquare));
    for (let i = 0; i < intLength; i++) {
      integers.push(min + i);
    }
    return integers.join(', ');
  }
}
