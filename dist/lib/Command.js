"use strict";
/******************************************************************************
 * @file src/lib/Command.ts
 * @fileoverview Exports the Argument class, the commandOptions interface,
 * and the commandCallback type alias.
 *****************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Argument = void 0;
class Argument {
    constructor(desc, defaultValue) {
        this.defaultValue = defaultValue;
        this.desc = desc;
    }
}
exports.Argument = Argument;
//# sourceMappingURL=Command.js.map