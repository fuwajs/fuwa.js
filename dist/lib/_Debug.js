"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let chalk = {
    bold: { blue: s => s },
    yellow: s => s,
    red: s => s,
    grey: s => s,
    green: s => s
};
try {
    chalk = require('chalk');
}
catch (_a) { }
class Debug {
    constructor(enabled = false) { this.enabled = enabled; }
    log(event, str) {
        var _a;
        if (!this.enabled)
            return;
        console.log(`${(_a = chalk === null || chalk === void 0 ? void 0 : chalk.bold) === null || _a === void 0 ? void 0 : _a.blue('[' + event.toUpperCase() + ']')}: ${str} - ${chalk.grey(new Date().toLocaleString())}`);
    }
    error(event, str) {
        var _a;
        if (!this.enabled)
            return;
        console.log(`${(_a = chalk === null || chalk === void 0 ? void 0 : chalk.bold) === null || _a === void 0 ? void 0 : _a.blue('[' + event.toUpperCase() + ']')}: ${chalk.red(str)} - ${chalk.grey(new Date().toLocaleString())}`);
    }
    success(event, str) {
        var _a;
        if (!this.enabled)
            return;
        console.log(`${(_a = chalk === null || chalk === void 0 ? void 0 : chalk.bold) === null || _a === void 0 ? void 0 : _a.blue('[' + event.toUpperCase() + ']')}: ${chalk.green(str)} - ${chalk.grey(new Date().toLocaleString())}`);
    }
    //! This function can be recurssive
    object(obj, tabWidth = 0) {
        let str = '';
        let tabs = '';
        for (const e of new Array(tabWidth))
            tabs += '    ';
        let i = 0;
        for (const key in obj) {
            let val = obj[key];
            if (val === null)
                val = chalk.red('null');
            if (typeof val === 'object' && !Array.isArray(val))
                val = '\n' + this.object(val, tabWidth + 1);
            if (Array.isArray(val))
                val = '\n' + this.object(Object.fromEntries(val.entries()), tabWidth + 1);
            // extra syntax highlighting
            if (typeof val === 'number')
                val = chalk.yellow(val);
            let isObj = false;
            try {
                JSON.parse(val);
                isObj = true;
            }
            catch (_a) { }
            if (typeof val === 'string' && isObj && val !== 'null')
                val = chalk.green(`"${val}"`);
            str += `${tabs}${chalk.bold.blue(`[${key}]`)}: ${val}${Object.keys(obj).length !== i && !val.startsWith('\n') ? ',\n' : ''}`;
            i++;
        }
        return str;
    }
}
exports.default = Debug;
