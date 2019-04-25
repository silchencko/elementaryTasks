import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TrianglesService } from '../services/triangles.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  @Input() index: number;
  name: string;
  side1: string;
  side2: string;
  side3: string;
  constructor(private trianglesTask: TrianglesService) { }

  ngOnInit() {
  }
  updateTriangle(index: number, side: string, sideNum: number) {
    this.trianglesTask.updateList(index, side, sideNum);
  }
}
