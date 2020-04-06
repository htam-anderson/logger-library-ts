import { LogInterface } from './log-interface';
export declare class Log implements LogInterface {
    debug(msg: string, supportingDetails: any[]): void;
    info(msg: string, supportingDetails: any[]): void;
    warn(msg: string, supportingDetails: any[]): void;
    error(msg: string, supportingDetails: any[]): void;
    private emitLogMessage;
}
