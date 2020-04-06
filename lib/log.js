"use strict";
exports.__esModule = true;
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.prototype.debug = function (msg, supportingDetails) {
        this.emitLogMessage('debug', msg, supportingDetails);
    };
    Log.prototype.info = function (msg, supportingDetails) {
        this.emitLogMessage('info', msg, supportingDetails);
    };
    Log.prototype.warn = function (msg, supportingDetails) {
        this.emitLogMessage('warn', msg, supportingDetails);
    };
    Log.prototype.error = function (msg, supportingDetails) {
        this.emitLogMessage('error', msg, supportingDetails);
    };
    Log.prototype.emitLogMessage = function (msgType, msg, supportingDetails) {
        if (supportingDetails.length > 0) {
            console[msgType](msg, supportingDetails);
        }
        else {
            console[msgType](msg);
        }
    };
    return Log;
}());
exports.Log = Log;
