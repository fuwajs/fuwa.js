/// <reference types="node" />
import User from './User';
import Request from './Request';
import Response from './Reponse';
import Emitter from './Emitter';
export declare type statusType = 'playing' | 'listening' | 'streaming' | 'competing';
export declare type status = 'dnd' | 'offline' | 'idle' | 'online';
/**
 * status options for bot
 */
export interface statusOptions {
    /**
     * status that will be displayed
     */
    name: string;
    /**
     * available types are playing , listening , streaming ,  competing
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
         * Length of your argument (including spaces).
         */
        length: number;
        /**
         * Defualt value for argument if one is not passed.
         */
        default: string;
    }[];
}
/**
 * Callback for commands
 * TODO: change request res and next function types to actual types
 */
export declare type commandCallback = (req: Request, res: Response, next: any) => Promise<void> | void;
export interface Events {
    ready(): void | Promise<void>;
    msg(req: Request): void | Promise<void>;
    cmdNotFound(req: Request, cmd: commandCallback): void | Promise<void>;
    err(err: Error): void | Promise<void>;
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
 * ```typescript
 * const fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('?'); // Init The Client
 * ```
 */
declare class Client extends Emitter {
    bot: User | null;
    private sessionId;
    protected debugMode: boolean;
    protected status: any;
    protected events: Map<keyof Events, Function>;
    protected prefix: string | string[] | ((req: Request) => Promise<string> | string);
    protected options: Map<string, any>;
    protected loop?: NodeJS.Timeout;
    protected commands: Map<string, {
        cb: commandCallback;
        options: commandOptions;
    }[]>;
    protected middleware: commandCallback[];
    protected statusTypeOp: any;
    /**
     * @param prefix The prefix for your bot
     */
    constructor(prefix: string | string[] | ((req: Request) => Promise<string> | string), options?: clientOptions);
    protected debug(bug: Error | any): void;
    /**
     * Command function
     * @param name Name of the command,
     * @param cb The function that is called when the command is ran
     * @param  options Options for your command
     * @returns client
     * ```typescript
     * cli.command(['ping', 'latency'], (req, res) => {
     *      res.send('Pong!)
     * ```
     * });
     */
    command(name: string | string[], cb: commandCallback, options?: commandOptions): this;
    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * cli.on('ready', () => console.log('Up and ready to go!'));
     * ```
     */
    on<T extends keyof Events>(event: T, cb: Events[T]): this;
    /**
     * a function that is ran before every command
     * @param  cb Your middleware function
     * @returns A client
     * @description
     * ```typescript
     * cli.use((req, res, next) => {
     *      req.send(`${req.command} has been used!`);
     *      next(); // call the next middlware/command
     * })
     * ```
     */
    use(cb: commandCallback): this;
    /**
     * options for bot status
     */
    /**
     * Log your bot into discord
     * @param token Your bot token
     * @param status Your Bot Status Options
     */
    login(token: string | Buffer): Promise<void>;
    logout(end?: boolean): void;
    set(opt: string, val: any): this;
}
export default Client;
