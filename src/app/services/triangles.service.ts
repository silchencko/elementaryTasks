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
  updateList(idx, side, sideNum) {
    this.triangles[idx]['side' + sideNum] = +side;
  }
  validateTriangle(triangle) {
    for (const prop in triangle) {
      if (triangle.hasOwnProperty(prop) && isNaN(triangle[prop])) {
        return false;
      }
    }
    return true;
  }
  isTriangleReal(triangle) {
    if (triangle.side1 + triangle.side2 <= triangle.side3
      || triangle.side1 + triangle.side3 <= triangle.side2
      || triangle.side3 + triangle.side2 <= triangle.side1) {
      return false;
    } else {
      return true;
    }
  }
  validateTriangleList(triangleList) {
    for (const item of triangleList) {
      if (!this.validateTriangle(item)) {
        return false;
      } else if (!this.isTriangleReal(item)) {
        return false;
      }
    }
    return true;
  }
  addSquare(triangle) {
    const p = (triangle.side1 + triangle.side2 + triangle.side3) / 2;
    triangle.square = Math.sqrt(p * (p - triangle.side1) * (p - triangle.side2) * (p - triangle.side3));
  }
  compareSquare(a, b) {
    if (a.square < b.square) { return 1; }
    if (a.square > b.square) { return -1; }
  }
  sortTriangles(triangleList) {
    let result = '';
    if (this.validateTriangleList(triangleList)) {
      triangleList.forEach((triangle, index) => {
        this.addSquare(triangle);
        triangle.name = index + 1;
      });
      triangleList.sort(this.compareSquare);
      for (const triangle of triangleList) {
        result = result + triangle.name + ' ';
      }
    } else {
      result = 'Введите все стороны треугольников. Стороны должны быть числами и формировать реальный треугольник';
    }
    return result;
  }
}
