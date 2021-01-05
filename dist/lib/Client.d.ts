/// <reference types="node" />
import User from './User';
import Request from './Request';
import Response from './Reponse';
import Emitter from './Emitter';
export declare type statusType = 'playing' | 'listening' | 'streaming' | 'competing';
export declare type status = 'dnd' | 'offline' | 'idle' | 'online';
/**
 * status options for bot
 * @interface
 */
export interface statusOptions {
    /**
     * status that will be displayed
     */
    name: string;
    /**
     *available types are playing , listening , streaming ,  competing
     */
    type?: statusType;
    /**
     * only if type is streaming
     * supports youtube and twitch
     */
    url?: string;
    /**
     * status of your bot
     * default is online
     */
    status?: status;
    /**
     * whether or not the bot is afk
     * default false
     */
    afk?: boolean;
}
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
export declare type commandCallback = (req: Request, res: Response, next: any) => Promise<void> | void;
export interface Events {
    READY(): void | Promise<void>;
    MSG(req: Request): void | Promise<void>;
    CMD_NOT_FOUND(req: Request, cmd: commandCallback): void | Promise<void>;
    ERR(err: Error): void | Promise<void>;
}
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
 * const cli = new Fuwa.Client('?'); // Init The Client
 */
declare class Client extends Emitter {
    bot: User | null;
    private sessionId;
    protected debugMode: boolean;
    protected events: Map<keyof Events, Function>;
    protected prefix: string | string[] | ((req: Request) => Promise<string> | string);
    protected loop?: number;
    protected commands: Map<string, {
        cb: commandCallback;
        options: commandOptions;
    }[]>;
    protected middleware: commandCallback[];
    protected statusTypeOp: any;
    /**
     * @param {string} prefix The prefix for your bot
     */
    constructor(prefix: string | string[] | ((req: Request) => Promise<string> | string), options?: clientOptions);
    protected debug(bug: Error | any): void;
    /**
     * Command function
     * @param {string|string[]} name Name of the command,
     * @param {commandCallback} cb The function that is called when the command is ran
     * @param {commandOptions} options Options for your command
     * @returns {Client}
     * @example
     * cli.command(['ping', 'latency'], (req, res) => {
     *      res.send('Pong!'-+
     * ); // send message
     * });
     */
    command(name: string | string[], cb: commandCallback, options?: commandOptions): this;
    /**
     * @param {keyof Events} event The event
     * @param {Function} cb The callback function
     * @example
     *
     * cli.on('READY', () => console.log('Up and ready to go!'));
     */
    on<T extends keyof Events>(event: T, cb: Events[T]): this;
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
     * options for bot status
     *  @interface
     */
    /**
     * Log your bot into discord
     * @param {string|Buffer} token Your bot token
     * @param {statusOptions} status Your Bot Status Options
     */
    login(token: string | Buffer): Promise<void>;
    logout(end?: boolean): void;
    setStatus(status: statusOptions): void;
}
export default Client;
