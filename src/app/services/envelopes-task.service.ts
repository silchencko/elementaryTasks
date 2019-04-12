import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvelopesTaskService {

  constructor() { }
  validate(env1: {len: number, wid: number}, env2: {len: number, wid: number}) {
    if (isNaN(env1.len) || isNaN(env1.wid) || isNaN(env2.len) || isNaN(env2.wid)) {
      return false;
    } else if (env1.len <= 0 || env1.wid <= 0 || env2.len <= 0 || env2.wid <= 0) {
      return false;
    }
    return true;
  }
  canPutOneInAnother(env1: {len: number, wid: number}, env2: {len: number, wid: number}) {
    if (env1.len > env2.len && env1.wid > env2.wid) {
      return true;
    } else if (env1.len > env2.wid && env1.wid > env2.len) {
      return true;
    }
    return false;
  }
  checkEnvelopes(env1: {len: number, wid: number}, env2: {len: number, wid: number}) {
    let result = '';
    if (!this.validate(env1, env2)) {
      result = 'Внесите длины и ширины конвертов. Размеры должны быть числами больше 0';
    } else if (this.canPutOneInAnother(env1, env2)) {
      result = '2';
    } else if (this.canPutOneInAnother(env2, env1)) {
      result = '1';
    } else {
      result = '0';
    }
    return result;
  }
}
