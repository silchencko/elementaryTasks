import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: [{num: number, name: string}];
  @Output() currentChanged = new EventEmitter<{num: number, name: string}>();

  constructor(private taskList: TaskListService) {
    // this.tasks = this.taskList.elementaryTasks;
    // this.current = this.taskList.current;
  }
  ngOnInit() {
  }
  chooseTask(task: {num: number, name: string}) {
    this.currentChanged.emit({
      num: task.num,
      name: task.name
    });
    // this.taskList.setCurrent(task.num);
  }
}
