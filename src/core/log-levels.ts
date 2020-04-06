export class LogLevel {
  constructor(private level: number, private levelStr: string) {
    this.level = level;
    this.levelStr = levelStr;
  }

  static getLevel(
    sArg: any | string | LogLevel,
    defaultLevel?: string | LogLevel,
  ): LogLevel {
    if (sArg instanceof LogLevel) {
      return sArg;
    }

    if (typeof sArg === 'string') {
      const index: any = sArg.toUpperCase();
      return (LEVELS as any)[index] || defaultLevel;
    }

    return this.getLevel(sArg.toString());
  }

  toString() {
    return this.levelStr;
  }

  toNumber() {
    return this.level;
  }

  isEnableLog(otherLevel: LogLevel | string) {
    if (typeof otherLevel === 'string') {
      otherLevel = LogLevel.getLevel(otherLevel);
    }
    return this.level >= otherLevel.level;
  }
}

const LEVELS = {
  ALL: new LogLevel(5, 'ALL'),
  DEBUG: new LogLevel(4, 'DEBUG'),
  INFO: new LogLevel(3, 'INFO'),
  WARN: new LogLevel(2, 'WARNING'),
  ERROR: new LogLevel(1, 'ERROR'),
  OFF: new LogLevel(0, 'OFF'),
};

export function levels() {
  return LEVELS;
}
