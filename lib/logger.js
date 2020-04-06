"use strict";
exports.__esModule = true;
var log_levels_1 = require("./log-levels");
var Logger = /** @class */ (function () {
    function Logger(level) {
        if (level === void 0) { level = log_levels_1.LogLevels.DEBUG; }
        this.level = level;
        this.logLevel = level;
    }
    Logger.prototype.debug = function (msg, supportingDetails) {
        this.emitLogMessage(log_levels_1.LogLevels.DEBUG, msg, supportingDetails);
    };
    Logger.prototype.info = function (msg, supportingDetails) {
        this.emitLogMessage(log_levels_1.LogLevels.INFO, msg, supportingDetails);
    };
    Logger.prototype.warn = function (msg, supportingDetails) {
        this.emitLogMessage(log_levels_1.LogLevels.WARN, msg, supportingDetails);
    };
    Logger.prototype.error = function (msg, supportingDetails) {
        this.emitLogMessage(log_levels_1.LogLevels.ERROR, msg, supportingDetails);
    };
    Logger.prototype.emitLogMessage = function (msgType, msg, supportingDetails) {
        if (this.logLevel >= msgType) {
            if (supportingDetails.length > 0) {
                console[msgType](msg, supportingDetails);
            }
            else {
                console[msgType](msg);
            }
        }
    };
    return Logger;
}());
exports.Logger = Logger;
