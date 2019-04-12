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
  updateList(idx, param, sideNum) {
    if (sideNum) {
      this.triangles[idx]['side' + sideNum] = +param;
    } else {
      this.triangles[idx].name = param;
    }
  }
  validateTriangleName(triangle) {
    const regEx = /^[a-z]{3}$/;
    return regEx.test(triangle.name);
  }
  validateTriangle(triangle) {
    return (!isNaN(triangle.side1) && !isNaN(triangle.side2) && !isNaN(triangle.side3));
  }
  isTriangleReal(triangle) {
    return (!(triangle.side1 + triangle.side2 <= triangle.side3)
      && !(triangle.side1 + triangle.side3 <= triangle.side2)
      && !(triangle.side3 + triangle.side2 <= triangle.side1));
  }
  validateTriangleList(triangleList) {
    for (const item of triangleList) {
      if (!this.validateTriangle(item)) {
        return false;
      } else if (!this.isTriangleReal(item)) {
        return false;
      } else if (!this.validateTriangleName(item)) {
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
  copyTriangles(list) {
    const newList = [];
    for (const triangle of list) {
      newList.push(triangle);
    }
    return newList;
  }
  sortTriangles(triangleList) {
    let result = '';
    if (this.validateTriangleList(triangleList)) {
      triangleList.forEach((triangle) => {
        this.addSquare(triangle);
      });
      const sortedTriangles = this.copyTriangles(triangleList);
      sortedTriangles.sort(this.compareSquare);
      for (const triangle of sortedTriangles) {
        result = result + triangle.name + ' ';
      }
    } else {
      result = 'Запоните все поля. Стороны должны быть числами и формировать реальный треугольник. Имя треугольника - 3 буквы';
    }
    return result;
  }
}
