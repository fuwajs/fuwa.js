/******************************************************************************
 * @file src/lib/_Debug.ts
 * @fileoverview Exports the Debug class.
 *****************************************************************************/

let chalk = {
    bold: { blue: s => s },
    yellow: s => s,
    red: s => s,
    grey: s => s,
    green: s => s,
};

try {
    chalk = require('chalk');
} catch {
    void 0;
}

/**
 * @description This class acts as a namespace for pretty-printed debugging
 * messages.
 */
class Debug {
    protected enabled: boolean;
    constructor(enabled = false) {
        this.enabled = enabled;
    }
    /**
     * Log a string paired with an event to stdout
     * @param event The event to log
     * @param str The message to log (must be a string)
     */
    log(event: string, str: any): void {
        if (!this.enabled) return;
        console.log(
            `${chalk?.bold?.blue(
                '[' + event.toUpperCase() + ']'
            )}: ${str} - ${chalk?.grey(new Date().toLocaleString())}`
        );
    }
    error(event: string, str: any): void {
        if (!this.enabled) return;
        console.log(
            `${chalk?.bold?.blue('[' + event.toUpperCase() + ']')}: ${chalk?.red(
                str
            )} - ${chalk?.grey(new Date().toLocaleString())}`
        );
    }
    success(event: string, str: any): void {
        if (!this.enabled) return;
        console.log(
            `${chalk?.bold?.blue('[' + event.toUpperCase() + ']')}: ${chalk?.green(
                str
            )} - ${chalk?.grey(new Date().toLocaleString())}`
        );
    }

    /**
     * Print an object or primitive to stdout
     * ! This function can be recursive
     * @param obj The object or primitive to print out.
     * @param tabWidth The indentation size in tabs (4 spaces)
     */
    object(obj: any, tabWidth = 0) {
        let str = '';
        // let tabs = '';
        // for (const e of new Array(tabWidth)) tabs += '    ';

        const tab = ''.padStart(tabWidth * 4);

        let i = 0;

        for (const k in obj) {
            let val = obj[k];
            if (val === null || val === undefined) {
                val = chalk.red('null');
                continue;
            }
            if (typeof val === 'object' && !Array.isArray(val))
                val = '\n' + this.object(val, tabWidth + 1);
            if (Array.isArray(val)) val = '\n' + this.object({ ...val }, tabWidth + 1);
            // extra syntax highlighting
            if (typeof val === 'number') val = chalk.yellow(val);
            if (typeof val === 'boolean') val = chalk.bold.blue(`__${val}__`);
            let isObj = false;
            try {
                JSON.parse(val);
                isObj = true;
            } catch {
                void 0;
            }
            if (typeof val === 'string' && isObj && val !== 'null')
                val = chalk.green(`"${val}"`);
            str += `${tab}${chalk.bold.blue(`[${k}]`)}: ${val}${
                Object.keys(obj).length !== i && !val.startsWith('\n') ? ',\n' : ''
            }`;
            i++;
        }
        return str;
    }
}

export default Debug;
