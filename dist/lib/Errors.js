"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandParsing = exports.InvalidPrefix = exports.InvalidToken = void 0;
/******************************************************************************
 * @file src/lib/Errors.ts
 * @fileoverview Error classes
 *****************************************************************************/
class InvalidToken extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'InvalidTokenError';
    }
}
exports.InvalidToken = InvalidToken;
class InvalidPrefix extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'InvalidPrefix';
    }
}
exports.InvalidPrefix = InvalidPrefix;
class CommandParsing extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'CommandParsingError';
    }
}
exports.CommandParsing = CommandParsing;
