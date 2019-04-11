import {Component, OnInit} from '@angular/core';
// import { TaskListService } from './task-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Elementary tasks!';

  ngOnInit() { }

}
