import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrianglesService {
  triangles = [];

  constructor() { }

  addTriangle(triangle) {
    this.triangles.push(triangle);
  }
  getTriangles() {
    return this.triangles;
  }
  updateList(idx: number, param: string, sideNum: number) {
    if (sideNum) {
      this.triangles[idx]['side' + sideNum] = +param;
    } else {
      this.triangles[idx].name = param;
    }
  }
  addSquare(triangle) {
    const p = (triangle.side1 + triangle.side2 + triangle.side3) / 2;
    triangle.square = Math.sqrt(p * (p - triangle.side1) * (p - triangle.side2) * (p - triangle.side3));
  }
  compareSquare(a, b) {
    if (a.square < b.square) { return 1; }
    if (a.square > b.square) { return -1; }
  }
  copyTriangles(list) {
    const newList = [];
    for (const triangle of list) {
      newList.push(triangle);
    }
    return newList;
  }
  sortTriangles(triangleList) {
    let result = '';
    // if (this.validateTriangleList(triangleList)) {
    triangleList.forEach((triangle) => {
      this.addSquare(triangle);
    });
    const sortedTriangles = this.copyTriangles(triangleList);
    sortedTriangles.sort(this.compareSquare);
    for (const triangle of sortedTriangles) {
      result = result + triangle.name + ' ';
    }
    return result;
  }
}
