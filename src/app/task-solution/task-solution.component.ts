import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { TaskListService } from '../services/task-list.service';
import { ChessTaskService } from '../services/chess-task.service';
import { EnvelopesTaskService } from '../services/envelopes-task.service';
import {Subscription} from 'rxjs';
import {TrianglesService} from '../services/triangles.service';

@Component({
  selector: 'app-task-solution',
  templateUrl: './task-solution.component.html',
  styleUrls: ['./task-solution.component.css']
})
export class TaskSolutionComponent implements OnInit {
  tasks = [];
  current = {};
  result = null;
  @Input() task: {num: number, name: string};
  subs = new Subscription();

  // Triangles Task
  triangles = [];

  constructor(private taskList: TaskListService,
              private chessTask: ChessTaskService,
              private envelopsTask: EnvelopesTaskService,
              private trianglesTask: TrianglesService) {
    this.tasks = this.taskList.elementaryTasks;
    this.triangles = this.trianglesTask.triangles;
  }

  ngOnInit() {
    const sub = this.taskList.getCurrent()
      .subscribe((data: any) => {
      this.current = data;
    });
    this.subs.add(sub);
  }
  drawChess(l: string, w: string, symb: string) {
    const len = Number(l);
    const wid = Number(w);
    this.result = this.chessTask.drawBoard(len, wid, symb);
  }
  checkEnvelopes(length1: string, width1: string, length2: string, width2: string) {
    const env1 = {
      len: Number(length1),
      wid: Number(width1)};
    const env2 = {
      len: Number(length2),
      wid: Number(width2)
    };
    this.result = this.envelopsTask.checkEnvelopes(env1, env2);
  }
  addTriangle() {
    this.trianglesTask.addTriangle({
      side1: null,
      side2: null,
      side3: null
    });
  }
  sortTriangles() {
    const triangleList = this.trianglesTask.getTriangles();
    this.result = this.trianglesTask.sortTriangles(triangleList);
  }
}
