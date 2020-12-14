/// <reference types="node" />
/**
 * Options for your command
 * @interface
 */
export interface commandOptions {
    /**
     * Description for your command.
     */
    desc: string;
    /**
     * Command Arguments
     */
    args?: {
        /**
         * @name length
         * Length of your argument (including spaces).
         */
        length: number;
        /**
         * @name default
         * Defualt value for argument if one is not passed.
         */
        default: string;
    }[];
}
/**
 * Callback for commands
 * @typedef
 */
export declare type commandCallback = (req: any, res: any, next: any) => Promise<void> | void;
/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('MY_TOKEN_HERE', '?'); // init the Client
 *
 */
declare class Client {
    private token;
    private prefix;
    private commands;
    private middlware;
    /**
     *
     * @param {string|Buffer} token The token for your bot
     * @param {string} prefix The prefix for your bot
     */
    constructor(token: string | Buffer, prefix: string);
    /**
     * Command function
     * @param {string|string[]} name Name of the command,
     * @param {commandCallback} cb The function that is called when the command is ran
     * @param {commandOptions} options Options for your command
     * @returns {Client}
     * @example
     *
     * cli.command(['ping', 'latency'], (res, res, next) => {
     *      res.send('Pong!'); // send message
     *      next(); // run next function
     * });
     */
    command(name: string | string[], cb: commandCallback, options?: commandOptions): this;
    use(cb: commandCallback): this;
}
export default Client;
