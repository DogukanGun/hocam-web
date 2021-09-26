import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  constructor() { }

  static isEmpty(val: any) {
    return (val === undefined || val == null || val.length <= 0) ? true : false;
  }
}
