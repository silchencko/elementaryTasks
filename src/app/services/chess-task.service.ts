import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChessTaskService {

  constructor() { }
  validate(l: number, w: number, symb: string) {
    if (!Number.isInteger(l) || l < 1 || !Number.isInteger(w) || 1 > w) {
      return false;
    } else if (symb === '') {
      return false;
    }
    return true;
  }
  drawLine(l: number, w: number, sym: string) {
    let line = '';
    const linePart = l % 2 === 0 ? ' ' + sym : sym + ' ';
    while (w > 0) {
      line = line + linePart;
      w--;
    }
    return line;
  }
  drawBoard(l: number, w: number, sym: string) {
    let result = '';
    if (!this.validate(l, w, sym)) {
      result = 'Заполните все поля. Длина и ширина должны быть целыми числами, не меньше 1';
    } else {
      while (l > 0) {
        result = result + this.drawLine(l, w, sym);
        result = result + '\n';
        l--;
      }
    }
    return result;
  }
}
