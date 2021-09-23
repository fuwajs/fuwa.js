/******************************************************************************
 * @file src/lib/Command.ts
 * @fileoverview Exports the Argument class, the commandOptions interface,
 * and the commandCallback type alias.
 *****************************************************************************/

import Request from './Request';
import Response from './Response';

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
    aliases?: string[];
    /**
     * Command Arguments
     */
    // args?: Argument[];
}

/**
 * Callback for commands
 */
export type CommandCallback = (req: Request, res: Response, next: () => void, prefix: string) => any;
