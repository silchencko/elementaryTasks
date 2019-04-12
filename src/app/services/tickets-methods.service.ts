import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsMethodsService {

  constructor() { }
  validate(minTicket: string, maxTicket: string) {
    const regex = /^\d{6}$/;
    return (regex.test(minTicket) && regex.test(maxTicket));
  }
  findTicketsMethod(minTicket: string, maxTicket: string) {
    if (this.validate(minTicket, maxTicket)) {}
  }
}
