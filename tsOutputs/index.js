"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Throw = function (/** @type {ErrorEvent} */ err) {
    console.warn("Log Catch", err.message || err);
    throw err;
};
var Return = function (/** @type {ErrorEvent} */ err) {
    console.warn("Log Catch", err.message || err);
    return err;
};
exports.default = { Throw: Throw, Return: Return };
