import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  taskNum = 1;
  taskName = 'Task';
  @Output() showTask = new EventEmitter<{num: number, name: string}>();

  tasks = [{
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
  current = this.tasks[0];
  constructor() { }

  ngOnInit() {
  }
  chooseTask(num: number) {
    this.current = this.tasks[num - 1];
  }
  showCurrentTask() {
    this.showTask.emit({
      num: this.current.num,
      name: this.current.name
    });
  }
}
