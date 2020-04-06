'use strict';
Object.defineProperty(exports, '__esModule', {value: true});
class LogLevel {
  constructor(level, levelStr) {
    this.level = level;
    this.levelStr = levelStr;
    this.level = level;
    this.levelStr = levelStr;
  }
  static getLevel(sArg, defaultLevel) {
    if (sArg instanceof LogLevel) {
      return sArg;
    }
    if (typeof sArg === 'string') {
      const index = sArg.toUpperCase();
      return LEVELS[index] || defaultLevel;
    }
    return this.getLevel(sArg.toString());
  }
  toString() {
    return this.levelStr;
  }
  toNumber() {
    return this.level;
  }
  isEnableLog(otherLevel) {
    if (typeof otherLevel === 'string') {
      otherLevel = LogLevel.getLevel(otherLevel);
    }
    return this.level >= otherLevel.level;
  }
}
exports.LogLevel = LogLevel;
const LEVELS = {
  ALL: new LogLevel(5, 'ALL'),
  DEBUG: new LogLevel(4, 'DEBUG'),
  INFO: new LogLevel(3, 'INFO'),
  WARN: new LogLevel(2, 'WARNING'),
  ERROR: new LogLevel(1, 'ERROR'),
  OFF: new LogLevel(0, 'OFF'),
};
function levels() {
  return LEVELS;
}
exports.levels = levels;
