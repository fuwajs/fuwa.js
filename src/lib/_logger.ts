import chalk from 'chalk';
import { logger } from './_globals';

export class Logger {
    constructor(public level: Level) { }
}

export enum Level {
    Error,
    Warn,
    Info,
    Debug,
    Trace,
}

export namespace log {
    export function trace(event: string, message: any) {
        if (logger.level < Level.Trace) return;
        console.log(chalk`{bold.blue [${event.toUpperCase()}] TRACE:} {grey ${message}} - {grey ${new Date().toLocaleString()}}`);
    }

    export function debug(event: string, message: any) {
        if (logger.level < Level.Debug) return;
        console.log(chalk`{bold.blue [${event.toUpperCase()}] DEBUG:} {blue ${message}} - {grey ${new Date().toLocaleString()}}`);
    }

    export function info(event: string, message: any) {
        if (logger.level < Level.Info) return;
        console.log(chalk`{bold.blue [${event.toUpperCase()}] INFO:} {green ${message}} - {grey ${new Date().toLocaleString()}}`);
    }

    export function warn(event: string, message: any) {
        if (logger.level < Level.Warn) return;
        console.log(chalk`{bold.blue [${event.toUpperCase()}] WARNING:} {pink ${message}} - {grey ${new Date().toLocaleString()}}`);
    }

    export function error(event: string, message: any) {
        if (logger.level < Level.Error) return;
        console.log(chalk`{bold.blue [${event.toUpperCase()}] ERROR:} {red ${message}} - {grey ${new Date().toLocaleString()}}`);

    }

    export function object(obj: any, indentation = 4) {

    }
}