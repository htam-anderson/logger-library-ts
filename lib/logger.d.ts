import {LogInterface} from './interface/log-interface';
export declare class Logger implements LogInterface {
  private logLevelStr;
  private level;
  private logLevel;
  private allLevels;
  constructor(logLevelStr?: string);
  debug(msg: string, supportingDetails?: any[]): void;
  info(msg: string, supportingDetails?: any[]): void;
  warn(msg: string, supportingDetails?: any[]): void;
  error(msg: string, supportingDetails?: any[]): void;
  private emitLogMessage;
  private createStack;
}
