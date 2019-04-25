import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChessTaskService {

  constructor() { }
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
    while (l > 0) {
      result = result + this.drawLine(l, w, sym);
      result = result + '\n';
      l--;
    }
    return result;
  }
}
