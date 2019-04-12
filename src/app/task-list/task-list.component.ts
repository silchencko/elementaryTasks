import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  @Input() arg1
  @Output() onItemChanged = new EventEmitter<number>();

  constructor(private taskList: TaskListService) {
    this.tasks = this.taskList.elementaryTasks;
    // this.current = this.taskList.current;
    this.onItemChanged.emit(22);
  }
  ngOnInit() {
  }
  chooseTask(task: {num: number, name: string}) {
    this.taskList.setCurrent(task.num);
  }
}
