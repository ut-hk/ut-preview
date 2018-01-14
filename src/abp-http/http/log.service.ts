import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

  constructor() {
  }

  public debug(logObject?: any): void {
    console.log(logObject);
  }

  public info(logObject?: any): void {
    console.info(logObject);
  }

  public warn(logObject?: any): void {
    console.warn(logObject);
  }

  public error(logObject?: any): void {
    console.error(logObject);
  }

  public fatal(logObject?: any): void {
    console.error(logObject);
  }

}
