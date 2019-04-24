import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }
  validateInputInt(num: string) {
    return !isNaN(+num) && +num % 1 === 0 && +num >= 0 && num !== '';
  }
  validatePositiveInputNum(num: string) {
    return !isNaN(+num) && +num >= 0 && num !== '';
  }
  validateFixedSizeNum(num: string, size: number) {
    const regex = new RegExp(`^\\d{${size}}$`);
    return regex.test(num);
  }
  isInt(num) {
    return (num % 1 === 0);
  }
}
