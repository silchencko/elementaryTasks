import { Component, OnInit } from '@angular/core';
import { TaskListService } from '../services/task-list.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  current = {};

  constructor(private taskList: TaskListService) {
    this.tasks = this.taskList.elementaryTasks;
    this.current = this.taskList.current;
  }
  ngOnInit() {
  }
  chooseTask(task: {num: number, name: string}) {
    this.taskList.setCurrent(task.num);
  }
}
