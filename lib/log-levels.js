"use strict";
exports.__esModule = true;
var LogLevels;
(function (LogLevels) {
    LogLevels[LogLevels["ALL"] = Number.MAX_SAFE_INTEGER] = "ALL";
    LogLevels[LogLevels["DEBUG"] = 4] = "DEBUG";
    LogLevels[LogLevels["INFO"] = 3] = "INFO";
    LogLevels[LogLevels["WARN"] = 2] = "WARN";
    LogLevels[LogLevels["ERROR"] = 1] = "ERROR";
    LogLevels[LogLevels["OFF"] = Number.MIN_SAFE_INTEGER] = "OFF";
})(LogLevels = exports.LogLevels || (exports.LogLevels = {}));
