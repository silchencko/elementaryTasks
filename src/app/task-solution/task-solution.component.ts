import {
  Component,
  OnInit,
  Input
} from '@angular/core';

@Component({
  selector: 'app-task-solution',
  templateUrl: './task-solution.component.html',
  styleUrls: ['./task-solution.component.css']
})
export class TaskSolutionComponent implements OnInit {
  @Input() task: {num: number, name: string};
  constructor() { }

  ngOnInit() {
  }

}
