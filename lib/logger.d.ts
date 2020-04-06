import { LogLevels } from "./log-levels";
import { LogInterface } from './log-interface';
export declare class Logger implements LogInterface {
    private level;
    private logLevel;
    constructor(level?: LogLevels);
    debug(msg: string, supportingDetails: any[]): void;
    info(msg: string, supportingDetails: any[]): void;
    warn(msg: string, supportingDetails: any[]): void;
    error(msg: string, supportingDetails: any[]): void;
    private emitLogMessage;
}
