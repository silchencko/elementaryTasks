import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskListService {
  elementaryTasks = [{
      num: 1,
      name: 'Шахматная доска'
    }, {
      num: 2,
      name: 'Конверты'
    }, {
      num: 3,
      name: 'Треугольники'
    }, {
      num: 4,
      name: 'Палиндром'
    }, {
      num: 5,
      name: 'Счастливые билетики'
    }, {
      num: 6,
      name: 'Числовая последовательность'
    }, {
      num: 7,
      name: 'Ряд Фибоначчи'
    }];

  constructor() { }
}
