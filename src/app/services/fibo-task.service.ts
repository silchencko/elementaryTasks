import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiboTaskService {
  context: {min: number, max: number, listLength: number};

  constructor() { }
  // validateRange(context: {min: number, max: number, listLength: number}) {
  //   return context.min < context.max;
  // }
  showFiboRange(context: {min: number, max: number, listLength: number}) {
    const fibo = [];
    let current = 0;
    let next = 1;
    let prev = null;
    while (current <= context.max) {
      if (current >= context.min) {
        fibo.push(current);
      }
      prev = current;
      current = next;
      next = current + prev;
    }
    return fibo;
  }
  showFiboLength(context: {min: number, max: number, listLength: number}) {
    const fibo = [];
    let current = 0;
    let next = 1;
    let prev = null;
    while (fibo.length < context.listLength) {
      fibo.push(current);
      prev = current;
      current = next;
      next = current + prev;
    }
    return fibo;
  }
  showFibo(context: {min: number, max: number, listLength: number}) {
    let result = [];
    if (context.min !== undefined && context.max !== undefined) {
      result = this.showFiboRange(context);
    } else {
      result = this.showFiboLength(context);
    }
    return result;
  }
}
