export declare class LogLevel {
  private level;
  private levelStr;
  constructor(level: number, levelStr: string);
  static getLevel(
    sArg: any | string | LogLevel,
    defaultLevel?: string | LogLevel,
  ): LogLevel;
  toString(): string;
  toNumber(): number;
  isEnableLog(otherLevel: LogLevel | string): boolean;
}
export declare function levels(): {
  ALL: LogLevel;
  DEBUG: LogLevel;
  INFO: LogLevel;
  WARN: LogLevel;
  ERROR: LogLevel;
  OFF: LogLevel;
};
