import {
  Component,
  OnInit,
  Input, OnChanges, SimpleChanges
} from '@angular/core';
import { TaskListService } from '../services/task-list.service';
import { ChessTaskService } from '../services/chess-task.service';
import { EnvelopesTaskService } from '../services/envelopes-task.service';
import {TrianglesService} from '../services/triangles.service';
import {PalindromService} from '../services/palindrom.service';
import {TicketsMethodsService} from '../services/tickets-methods.service';
import {IntegersTaskService} from '../services/integers-task.service';
import {CommonFunctionsService} from '../services/common-functions.service';
import {FiboTaskService} from '../services/fibo-task.service';

@Component({
  selector: 'app-task-solution',
  templateUrl: './task-solution.component.html',
  styleUrls: ['./task-solution.component.css']
})
export class TaskSolutionComponent implements OnInit, OnChanges {
  result: string;

  @Input() task: {num: number, name: string};

  // Triangles Task
  triangles = [];
  // Fibonacci Task
  isFiboRangeDisabled = false;
  isFiboLengthDisabled = false;

  constructor(private taskList: TaskListService,
              private commonFunctions: CommonFunctionsService,
              private chessTask: ChessTaskService,
              private envelopsTask: EnvelopesTaskService,
              private trianglesTask: TrianglesService,
              private palindromTask: PalindromService,
              private ticketsTask: TicketsMethodsService,
              private integersTask: IntegersTaskService,
              private fiboTask: FiboTaskService) {
    this.triangles = this.trianglesTask.triangles;
  }

  ngOnInit() {  }
  ngOnChanges(changes: SimpleChanges): void {
    this.result = null;
  }

  // 1. Chess board Task
  drawChess(l: string, w: string, symb: string) {
    if (!this.commonFunctions.validateInputInt(l) || !this.commonFunctions.validateInputInt(w)) {
      this.result = 'Длина и ширина должны быть целыми положительными числами';
    } else if (this.commonFunctions.isEmpty(symb)) {
      this.result = 'Заполните символ';
    } else {

      this.result = this.chessTask.drawBoard(Number(l), Number(w), symb);
    }
  }

  // 2. Envelopes Task
  checkEnvelopes(length1: string, width1: string, length2: string, width2: string) {
    const args = [length1, width1, length2, width2];
    if (args.every(side => this.commonFunctions.validatePositiveInputNum(side) && +side > 0)) {
      const env1 = {
        len: Number(length1),
        wid: Number(width1)};
      const env2 = {
        len: Number(length2),
        wid: Number(width2)
      };
      this.result = this.envelopsTask.checkEnvelopes(env1, env2);
    } else {
      this.result = 'Все стороны должны быть положительными числами';
    }
  }

  // 3. Triangles Task
  addTriangle() {
    this.trianglesTask.addTriangle({
      name: null,
      side1: null,
      side2: null,
      side3: null
    });
  }
  sortTriangles() {
    const nameSize = 3;
    const triangleList = this.trianglesTask.getTriangles();
    if (!triangleList.every(item => this.commonFunctions.validateFigureName(item.name, nameSize))) {
      this.result = 'Имя треугольника - 3 буквы';
    } else if (!triangleList.every(item => this.commonFunctions.validateTriangle(item))) {
      this.result = 'Стороны триугольника должны быть положительными числами';
    } else if (!triangleList.every(item => this.commonFunctions.isTriangleReal(item))) {
      this.result = 'Нереальные стороны триугольника';
    } else {
      this.result = this.trianglesTask.sortTriangles(triangleList);
    }
  }

  // 4. Palindrom Task
  checkPalindrom(palindromField: string) {
    const field = palindromField.trim();
    if (this.commonFunctions.validateInputInt(field) && +field >= 10) {
      this.result = this.palindromTask.checkPalindrom(field.trim());
    } else {
      this.result = 'Ведице целое положительное число не меньше 10';
    }
  }

  // 5. Happy tickets Task
  findTicketsMethod(minTicket: string, maxTicket: string) {
    if (this.commonFunctions.validateFixedSizeNum(minTicket, 6) && this.commonFunctions.validateFixedSizeNum(maxTicket, 6)) {
      const context = {min: minTicket, max: maxTicket};
      this.result = this.ticketsTask.findTicketsMethod(context);
    } else {
      this.result = 'Введите шестизначные целые числа';
    }
  }

  // 6. Integers Task
  drawIntegers(integersLength: string, minSquare: string) {
    if (this.commonFunctions.validateInputInt(integersLength) && this.commonFunctions.validatePositiveInputNum(minSquare)) {
      this.result = this.integersTask.drawIntegers(Number(integersLength), Number(minSquare));
    } else {
      this.result = 'Длина ряда должна быть положительным целым числом. Минимальный квадрат - положительным числом';
    }
  }

  // 7. Fibonacci Task
  disableFiboRange(value) {
    this.isFiboRangeDisabled = value !== '';
  }
  disableFibolength(value) {
    this.isFiboLengthDisabled = value !== '';
  }
  showFibo(min: string, max: string, listLength: string) {
    const context = {
      min: undefined,
      max: undefined,
      listLength: undefined
    };
    if (this.commonFunctions.validateInputInt(listLength)) {
      context.listLength = Number(listLength);
      this.result = this.fiboTask.showFibo(context).toString();

    } else if (this.commonFunctions.validateInputInt(min) && this.commonFunctions.validateInputInt(max)) {
      if (+min < +max) {
        context.min = Number(min);
        context.max = Number(max);
        this.result = this.fiboTask.showFibo(context).toString();
      } else {
        this.result = 'Минимальное число должно быть меньше максимального';
      }

    } else {
      this.result = 'Введите минимальное и максимальное число или длину ряда';
    }
  }

}
