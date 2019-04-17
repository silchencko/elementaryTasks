import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TaskListService} from '../services/task-list.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  title = 'Задачи!';
  data;
  current: {num: number, name: string};

  constructor(private taskList: TaskListService) {
    this.data = this.taskList.elementaryTasks;
    this.current = this.data[0];
  }
  ngOnInit() {
  }
  updateCurrentTask(newCurrent: {num: number, name: string}) {
    this.current = newCurrent;
  }
}
