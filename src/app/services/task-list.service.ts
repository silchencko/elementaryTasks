import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  elementaryTasks = [{
      num: 1,
      name: 'Chess'
    }, {
      num: 2,
      name: 'Envelopes'
    }, {
      num: 3,
      name: 'Triangles'
    }, {
      num: 4,
      name: 'Palindrome'
    }, {
      num: 5,
      name: 'Happy tickets'
    }, {
      num: 6,
      name: 'Numeric sequence'
    }, {
      num: 7,
      name: 'Fibonacci'
    }];
  current = new Subject();

  constructor() { }

  getCurrent(): Observable<any> {
    return this.current.asObservable();
  }
  setCurrent(num: number): void {
    this.current.next(this.elementaryTasks[num - 1]);
  }
}
