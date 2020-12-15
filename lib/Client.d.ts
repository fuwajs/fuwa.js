/// <reference types="node" />
import WebSocket from 'ws';
import User from './User';
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
 * TODO: change request res and next function types to actual types
 */
export declare type commandCallback = (req: any, res: any, next: any) => Promise<void> | void;
export declare type eventNames = 'READY';
export interface clientOptions {
    /**
     * The owners' discord ID
     */
    owners: string[] | string;
    /**
     * To turn on the debug mode, not recommed to turn this on unless your debugging
     * the library itself
     */
    debug?: boolean;
}
/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('MY_TOKEN_HERE', '?'); // init the Client
 */
declare class Client {
    bot: User | null;
    ws: WebSocket | undefined;
    private debugMode;
    private events;
    private prefix;
    private loop;
    private commands;
    private middlware;
    /**
     * @param {string} prefix The prefix for your bot
     */
    constructor(prefix: string, options?: clientOptions);
    debug(bug: Error | string): void;
    /**
     * Command function
     * @param {string|string[]} name Name of the command,
     * @param {commandCallback} cb The function that is called when the command is ran
     * @param {commandOptions} options Options for your command
     * @returns {Client}
     * @example
     * cli.command(['ping', 'latency'], (res, res) => {
     *      res.send('Pong!'); // send message
     * });
     */
    command(name: string | string[], cb: commandCallback, options?: commandOptions): this;
    on(event: eventNames, cb: Function): this;
    /**
     * Add a middleware
     * @param {commandCallback} cb Your middleware function
     * @returns {Client}
     * @description a function that is ran before every command
     * @example
     *
     * cli.use((req, res, next) => {
     *      req.send(`${req.command} has been used!`);
     *      next(); // call the next middlware/command
     * })
     */
    use(cb: commandCallback): this;
    /**
     * Log your bot into discord
     * @param {string|Buffer} token Your bot token
     */
    login(token: string | Buffer): void;
    logout(end?: boolean): void;
}
export default Client;
