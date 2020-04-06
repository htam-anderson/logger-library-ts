'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
const tslib_1 = require('tslib');
const log_levels_1 = require('./core/log-levels');
const moment_1 = tslib_1.__importDefault(require('moment'));
class Logger {
  constructor(logLevelStr = 'all') {
    this.logLevelStr = logLevelStr;
    this.allLevels = log_levels_1.levels();
    this.level = log_levels_1.LogLevel.getLevel(logLevelStr);
    this.logLevel = new log_levels_1.LogLevel(
      this.level.toNumber(),
      this.level.toString(),
    );
  }
  debug(msg, supportingDetails) {
    this.emitLogMessage(this.allLevels.DEBUG, msg, supportingDetails);
  }
  info(msg, supportingDetails) {
    this.emitLogMessage(this.allLevels.INFO, msg, supportingDetails);
  }
  warn(msg, supportingDetails) {
    this.emitLogMessage(this.allLevels.WARN, msg, supportingDetails);
  }
  error(msg, supportingDetails) {
    if (supportingDetails.length > 0) {
      const stack = '\n' + this.createStack() + '\n';
      supportingDetails.push(stack);
    }
    this.emitLogMessage(this.allLevels.ERROR, msg, supportingDetails);
  }
  emitLogMessage(msgType, msg, supportingDetails) {
    if (this.logLevel.isEnableLog(msgType)) {
      const logTime = moment_1
        .default(new Date())
        .format('YYYY-MM-DD HH:mm:ss');
      console.log(`[${logTime}] | [${msgType.toString()}] | ${msg}`);
      if (supportingDetails.length > 0) {
        console.log(
          `[${logTime}] | [${msgType.toString()}] | ${supportingDetails}`,
        );
      }
    }
  }
  createStack() {
    const stack = new Error().stack.replace('Error\n', '');
    const array = stack.split('\n');
    if (array[0].indexOf('Logger.') > -1) {
      array.splice(0, 1);
    }
    return array.join('\n');
  }
}
exports.Logger = Logger;
