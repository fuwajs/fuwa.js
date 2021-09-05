"use strict";
/******************************************************************************
 * @file src/lib/_erlpack.ts
 * @fileoverview Provides alternative functions if erlpack is not installed.
 *****************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.unpack = exports.pack = exports.erlpack = void 0;
try {
    // import() doesnt work for whatever reason
    exports.erlpack = require('erlpack');
    if (!exports.erlpack)
        exports.erlpack = null;
}
catch (_a) {
    exports.erlpack = null;
}
exports.pack = exports.erlpack ? exports.erlpack.pack : JSON.stringify;
function unpack(data, encoding) {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        }
        catch (_a) {
            return {};
        }
    }
    if (Buffer.isBuffer(data)) {
        if (encoding === 'etf') {
            return exports.erlpack.unpack(data);
        }
        else if (encoding === 'json') {
            return JSON.parse(data.toString());
        }
    }
}
exports.unpack = unpack;
//# sourceMappingURL=_erlpack.js.map