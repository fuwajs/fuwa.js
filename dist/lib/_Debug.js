"use strict";
/******************************************************************************
 * @file src/lib/_Debug.ts
 * @fileoverview Exports the Debug class.
 *****************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
let chalk = {
    bold: { blue: (s) => s },
    yellow: (s) => s,
    red: (s) => s,
    grey: (s) => s,
    green: (s) => s,
};
try {
    chalk = require('chalk');
}
catch (_a) {
    void 0;
}
/**
 * @description This class acts as a namespace for pretty-printed debugging
 * messages.
 */
class Debug {
    constructor(enabled = false) {
        this.enabled = enabled;
    }
    /**
     * Log a string paired with an event to stdout
     * @param event The event to log
     * @param str The message to log (must be a string)
     */
    log(event, str) {
        var _a;
        if (!this.enabled)
            return;
        console.log(`${(_a = chalk === null || chalk === void 0 ? void 0 : chalk.bold) === null || _a === void 0 ? void 0 : _a.blue('[' + event.toUpperCase() + ']')}: ${str} - ${chalk === null || chalk === void 0 ? void 0 : chalk.grey(new Date().toLocaleString())}`);
    }
    error(event, str) {
        var _a;
        if (!this.enabled)
            return;
        console.log(`${(_a = chalk === null || chalk === void 0 ? void 0 : chalk.bold) === null || _a === void 0 ? void 0 : _a.blue('[' + event.toUpperCase() + ']')}: ${chalk === null || chalk === void 0 ? void 0 : chalk.red(str)} - ${chalk === null || chalk === void 0 ? void 0 : chalk.grey(new Date().toLocaleString())}`);
    }
    success(event, str) {
        var _a;
        if (!this.enabled)
            return;
        console.log(`${(_a = chalk === null || chalk === void 0 ? void 0 : chalk.bold) === null || _a === void 0 ? void 0 : _a.blue('[' + event.toUpperCase() + ']')}: ${chalk === null || chalk === void 0 ? void 0 : chalk.green(str)} - ${chalk === null || chalk === void 0 ? void 0 : chalk.grey(new Date().toLocaleString())}`);
    }
    /**
     * Print an object or primitive to stdout
     * ! This function can be recursive
     * @param obj The object or primitive to print out.
     * @param tabWidth The indentation size in tabs (4 spaces)
     */
    object(obj, tabWidth = 0) {
        let str = '';
        // let tabs = '';
        // for (const e of new Array(tabWidth)) tabs += '    ';
        const tab = ''.padStart(tabWidth * 4);
        let i = 0;
        for (const k in obj) {
            let val = obj[k];
            if (val === null)
                val = chalk.red('null');
            if (typeof val === 'object' && !Array.isArray(val))
                val = '\n' + this.object(val, tabWidth + 1);
            if (Array.isArray(val))
                val = '\n' + this.object(Object.assign({}, val), tabWidth + 1);
            // extra syntax highlighting
            if (typeof val === 'number')
                val = chalk.yellow(val);
            let isObj = false;
            try {
                JSON.parse(val);
                isObj = true;
            }
            catch (_a) {
                void 0;
            }
            if (typeof val === 'string' && isObj && val !== 'null')
                val = chalk.green(`"${val}"`);
            str += `${tab}${chalk.bold.blue(`[${k}]`)}: ${val}${Object.keys(obj).length !== i && !val.startsWith('\n')
                ? ',\n'
                : ''}`;
            i++;
        }
        return str;
    }
}
exports.default = Debug;
