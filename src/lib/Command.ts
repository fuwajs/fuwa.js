/******************************************************************************
 * @file src/lib/Command.ts
 * @fileoverview Exports the Argument class, the commandOptions interface,
 * and the commandCallback type alias.
 *****************************************************************************/

import Request from './Request';
import Response from './Response';

export class Argument<T extends number | string | unknown> {
    /**
     * Default value of the argument
     */
    readonly defaultValue: T;

    /**
     * A description of the argument
     */
    readonly desc: string;

    constructor(desc: string, defaultValue: T) {
        this.defaultValue = defaultValue;
        this.desc = desc;
    }
}


/**
 * Options for your command
 * @interface
 */
export interface commandOptions {
    /**
     * Description for your command.
     */
    desc?: string;
    /**
     * Aliases for your command
     * @private
     */
    aliases?: string[]
    /**
     * Command Arguments
     */
    args?: Map<string, Argument<unknown>>;
}

/**
 * Callback for commands
 */
export type CommandCallback = (
    req: Request,
    res: Response,
    next: () => void,
) => any;
