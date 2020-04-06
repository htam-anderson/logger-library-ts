import {LogLevels} from "./log-levels";
import {LogInterface} from './log-interface'
import * as moment from 'moment'

export class Logger implements LogInterface{
  private logLevel : LogLevels;

  constructor(private level: LogLevels = LogLevels.DEBUG) {
    this.logLevel = level;
  }

  public debug(msg: string, supportingDetails: any[]): void {
    this.emitLogMessage(LogLevels.DEBUG, msg, supportingDetails);
  }

  public info(msg: string, supportingDetails: any[]): void {
    this.emitLogMessage(LogLevels.INFO, msg, supportingDetails);
  }

  public warn(msg: string, supportingDetails: any[]): void {
    this.emitLogMessage(LogLevels.WARN, msg, supportingDetails);
  }

  public error(msg: string, supportingDetails: any[]): void {
    this.emitLogMessage(LogLevels.ERROR, msg, supportingDetails);
  }

  private emitLogMessage(msgType: LogLevels, msg: string, supportingDetails: any[]) {
    if (this.logLevel >= msgType) {
      const logTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
      console.log(`${logTime} | [${LogLevels[msgType]}] | ${msg}`);
      if (supportingDetails.length > 0){
        console.log(`${logTime} | [${LogLevels[msgType]}] | ${supportingDetails}`);
      }
    }
  }
}
