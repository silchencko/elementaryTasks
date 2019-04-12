import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalindromService {

  constructor() { }
  validate(field: string) {
    return (!isNaN(+field) && +field >= 10 && field.length > 1);
  }
  findPalindrom(field: string, min: number, max: number) {
    let palindrom = '';
    while (min >= 0 && max < field.length) {
      if (field[min] !== field[max]) {
        return palindrom;
      } else {
        palindrom = field.substr(min, max - min + 1);
      }
      min--;
      max++;
    }
    return palindrom;
  }
  findAllPalindroms(field: string) {
    const palindromList = [];
    let i = 0;
    while (i < field.length - 1) {
      const evenPalindrom = this.findPalindrom(field, i, i + 1);
      const oddPalindrom = this.findPalindrom(field, i, i + 2);
      if (evenPalindrom !== '') {
        palindromList.push(evenPalindrom);
      }
      if (oddPalindrom !== '') {
        palindromList.push(oddPalindrom);
      }

      i++;
    }
    return palindromList;
  }
  compare(a, b) {
    if (a.length < b.length) { return 1; }
    if (a.length > b.length) { return -1; }
  }
  checkPalindrom(field: string) {
    let result = '';
    if (this.validate(field)) {
      const palindromList = this.findAllPalindroms(field);
      if (palindromList.length > 0) {
        palindromList.sort(this.compare);
        result = palindromList[0];
      } else {
        result = '0';
      }
    } else {
      result = 'Заполните поле числами, не менее 2-х символов';
    }
    return result;
  }
}
