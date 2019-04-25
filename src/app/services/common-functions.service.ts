import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor() { }
  isEmpty(field: string) {
    return field.trim() === '';
  }
  validateInputInt(num: string) {
    return !isNaN(+num) && Number.isInteger(+num) && +num >= 0 && num !== '';
  }
  validatePositiveInputNum(num: string) {
    return !isNaN(+num) && +num >= 0 && num !== '';
  }
  validateFixedSizeNum(num: string, size: number) {
    const regex = new RegExp(`^\\d{${size}}$`);
    return regex.test(num);
  }
  validateFigureName(name: string, size: number) {
    const regEx = new RegExp(`^[a-zA-Z]{${size}}$`);
    return regEx.test(name);
  }
  validateTriangle(triangle) {
    return (!isNaN(triangle.side1) && !isNaN(triangle.side2) && !isNaN(triangle.side3));
  }
  isTriangleReal(triangle) {
    return (!(triangle.side1 + triangle.side2 <= triangle.side3)
      && !(triangle.side1 + triangle.side3 <= triangle.side2)
      && !(triangle.side3 + triangle.side2 <= triangle.side1));
  }
}
