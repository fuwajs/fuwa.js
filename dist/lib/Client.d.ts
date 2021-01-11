/// <reference types="node" />
import Request from './Request';
import { User } from './_DiscordAPI';
import Emitter from './Emitter';
import { commandCallback, commandOptions } from './Command';
export declare type statusType = 'playing' | 'listening' | 'streaming' | 'competing';
declare enum statusCode {
    playing = 0,
    streaming = 1,
    listening = 2,
    custom = 3,
    competing = 4
}
/**
 * status options for bot
 */
export interface statusOptions {
    /**
     * The status message to be displayed
     */
    name: string;
    /**
     * The available status types are playing, listening, streaming, and
     * competing.
     */
    type?: statusCode;
    /**
     * The URL of a stream
     */
    url?: string;
    /**
     * The status of your bot. Online by default
     */
    status?: 'dnd' | 'offline' | 'idle' | 'online';
    /**
     * Whether or not the bot is afk.
     */
    afk?: boolean;
}
export interface Events {
    READY(): void | Promise<void>;
    MSG(req: Request): void | Promise<void>;
    CMD_NOT_FND(req: Request, cmd: commandCallback): void | Promise<void>;
    ERR(err: Error): void | Promise<void>;
}
export interface clientOptions {
    /**
     * The owners' discord ID
     */
    owners?: string[] | string;
    /**
     * To turn on the debug mode, not recommed to turn this on unless your debugging
     * the library.
     */
    debug?: boolean;
    /**
     * If this is turned on (true) When someone mentions your bot it will behave
     * as a prefix.
     */
    useMentionPrefix?: boolean;
}
/**
 * Client Class
 * ```typescript
 * const fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('?'); // Init The Client
 * ```
 */
declare class Client extends Emitter {
    bot: User;
    private sessionId;
    protected debugMode: boolean;
    protected status: any;
    protected events: Map<keyof Events, Function>;
    protected prefix: string | string[] | ((req: Request) => Promise<string> | string);
    protected options: clientOptions;
    protected loop?: NodeJS.Timeout;
    protected commands: Map<string, {
        cb: commandCallback;
        options: commandOptions;
    }[]>;
    protected middleware: commandCallback[];
    /**
     * The Bot Token
     */
    token: string;
    /**
     * @param prefix The prefix for your bot
     */
    constructor(prefix: string | string[] | ((req: Request) => Promise<string> | string), options?: clientOptions);
    protected debug(bug: Error | any): void;
    /**
     * Command function
     * @param name Command name(s).
     * @param cb The function that is called when the command is ran.
     * @param  options Options for your command.
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
    set<T extends keyof clientOptions>(key: T, val: clientOptions[T]): this;
    setStatus(status: statusOptions): void;
    deleteMessages(amt: number, channelID: string): Promise<void>;
}
export default Client;
