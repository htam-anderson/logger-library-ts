import {LogLevel, levels} from './core/log-levels';
import {LogInterface} from './interface/log-interface';
import moment from 'moment';

export class Logger implements LogInterface {
  private level: LogLevel;
  private logLevel: LogLevel;
  private allLevels = levels();

  constructor(private logLevelStr: string = 'all') {
    this.level = LogLevel.getLevel(logLevelStr);
    this.logLevel = new LogLevel(this.level.toNumber(), this.level.toString());
  }

  public debug(msg: string, supportingDetails?: any[]): void {
    this.emitLogMessage(this.allLevels.DEBUG, msg, supportingDetails);
  }

  public info(msg: string, supportingDetails?: any[]): void {
    this.emitLogMessage(this.allLevels.INFO, msg, supportingDetails);
  }

  public warn(msg: string, supportingDetails?: any[]): void {
    this.emitLogMessage(this.allLevels.WARN, msg, supportingDetails);
  }

  public error(msg: string, supportingDetails?: any[]): void {
    if (Array.isArray(supportingDetails) && supportingDetails.length > 0) {
      const stack = '\n' + this.createStack() + '\n';
      supportingDetails.push(stack);
    }

    this.emitLogMessage(this.allLevels.ERROR, msg, supportingDetails);
  }

  private emitLogMessage(
    msgType: LogLevel,
    msg: string,
    supportingDetails?: any[],
  ) {
    if (this.logLevel.isEnableLog(msgType)) {
      const logTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
      console.log(`[${logTime}] | [${msgType.toString()}] | ${msg}`);
      if (Array.isArray(supportingDetails) && supportingDetails.length > 0) {
        console.log(
          `[${logTime}] | [${msgType.toString()}] | ${supportingDetails}`,
        );
      }
    }
  }

  private createStack(): string {
    const stack: string = new Error().stack!.replace('Error\n', '');
    const array: string[] = stack.split('\n');

    if (array[0].indexOf('Logger.') > -1) {
      array.splice(0, 1);
    }

    return array.join('\n');
  }
}
