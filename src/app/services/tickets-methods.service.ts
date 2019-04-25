import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsMethodsService {
  result: {winner: string, easyMethodNum: number, difficultMethod: number} = {
    winner: '',
    easyMethodNum: 0,
    difficultMethod: 0
  };

  constructor() { }

  countElementsSum(str: string) {
    let result = 0;
    for (const item of str) {
      result = + item + result;
    }
    return result;
  }
  fillFullTicket(ticket: string, length: number) {
    while (ticket.length < length) {
      ticket = '0' + ticket;
    }
    return ticket;
  }
  countByEasyMethod(ticket: string, ticketLength: number) {
    let result = 0;
    const firstPart = ticket.substr(0, ticketLength / 2);
    const secondPart = ticket.substr(ticketLength / 2);
    if (this.countElementsSum(firstPart) === this.countElementsSum(secondPart)) {
      result += 1;
    }
    return result;
  }
  countByDifficultMethod(ticket: string) {
    let result = 0;
    let oddSum = 0;
    let evenSum = 0;
    for (const item of ticket) {
      if (+ item % 2 === 0) {
        evenSum = + item + evenSum;
      } else {
        oddSum =  + item + oddSum;
      }
    }
    if (evenSum === oddSum) {
      result += 1;
    }
    return result;
  }
  countHappyTickets(minNum: string, maxNum: string) {
    this.result.easyMethodNum = 0;
    this.result.difficultMethod = 0;
    let current = +minNum;
    const max = +maxNum;
    const ticketLength = minNum.length;
    // let result = 0;
    while (current <= max) {
      let ticket = current.toString();
      ticket = this.fillFullTicket(ticket, ticketLength);
      this.result.easyMethodNum += this.countByEasyMethod(ticket, ticketLength);
      this.result.difficultMethod += this.countByDifficultMethod(ticket);
      current++;
    }
    return this.result;
  }
  findTicketsMethod(context: {min: string, max: string}) {
    this.countHappyTickets(context.min, context.max);
    if (this.result.easyMethodNum > this.result.difficultMethod) {
      this.result.winner = 'Простой метод';
    } else if (this.result.easyMethodNum < this.result.difficultMethod) {
      this.result.winner = 'Сложный метод';
    } else {
      this.result.winner = 'Ничья';
    }
    return `Победитель: ${this.result.winner};
    количество счастливых билетов по простому методу: ${this.result.easyMethodNum};
    количество счастливых билетов по сложноому методу: ${this.result.difficultMethod}`;
  }
}
