import { Component, Input, OnInit } from '@angular/core';
import { TrianglesService } from '../services/triangles.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
  @Input() index: number;

  constructor(private trianglesTask: TrianglesService) { }

  ngOnInit() {
  }
  updateTriangle(index, side, sideNum) {
    this.trianglesTask.updateList(index, side, sideNum);
  }
}
