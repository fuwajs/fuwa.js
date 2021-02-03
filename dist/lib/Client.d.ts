/******************************************************************************
 * @file src/lib/Client.ts
 * @fileoverview The Client class - the main class in FuwaJS - alongside other
 * helper functions, interfaces, types, etc.
 *****************************************************************************/
/// <reference types="node" />
import Request from './Request';
import Cache from './_Cache';
import Debug from './_Debug';
import { UserStatus, ActivityType } from './_DiscordAPI';
import User from './User';
import Response from './Response';
import Emitter from './Emitter';
import { commandCallback, commandOptions } from './Command';
import Reaction from './discord/Reaction';
export declare type statusType = 'playing' | 'listening' | 'streaming' | 'competing';
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
    type?: ActivityType;
    /**
     * The URL of a stream
     */
    url?: string;
    /**
     * The status of your bot. Online by default
     */
    status?: UserStatus;
    /**
     * Whether or not the bot is afk.
     */
    afk?: boolean;
}
export interface Events {
    ready(): void | Promise<void>;
    message(req: Request, res: Response): void | Promise<void>;
    commandNotFound(req: Request, cmd: commandCallback): void | Promise<void>;
    reaction(reaction: Reaction): any;
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
    /**
     *
     */
    builtinCommands?: {
        help?: {
            embedColor?: string | number;
        } | false;
    };
    /**
     * @see GatewayIntents
     */
    intents: number;
    /**
     * If the bot should cache guilds/channels/users or not.
     * It's suggested to keep this on for smaller bots
     * but for larger ones turn this off,
     * caching increases the speed of sending messages, but takes up memory.
     * meaning caching on = faster guild replies
     * caching off = more memory for other tasks
     */
    cache?: true;
    /**
     * Settings for caching
     */
    cachingSettings?: {
        /**
         * Clear the cache after a certain amount of time (in ms)
         * If this is false then the cache will never be cleared
         */
        clearAfter?: number | false;
        cacheOptions?: {
            guilds: boolean;
            channels: boolean;
            users: boolean;
        };
        /**
         * Maximum amount of items to cache at once. Set this to 0 if you want
         * an unlimited cache size
         */
        maxSize?: number;
    };
}
/**
 * The Client Class
 * @description The client class is the main starting point of your discord bot.
 * ```typescript
 * const fuwa = require('fuwa.js'); // Import Fuwa library
 * const client = new fuwa.Client('?'); // Create and initialize a Client
 * ```
 */
declare class Client extends Emitter {
    bot: User;
    protected debug: Debug;
    private sessionId;
    cache: Cache;
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
    /**
     * Command function
     * @param name Command name(s).
     * @param cb The function that is called when the command is ran.
     * @param options Options for your command.
     * @returns Command Options
     * @example
     * ```typescript
     * cli.command(['ping', 'latency'], (req, res) => {
     *      res.send('Pong!');
     *
     * });
     * ```
     */
    command(name: string | string[], cb: commandCallback, options?: commandOptions): {
        addAlias: (...aliases: string[]) => any;
        addArgument: <T>(name: string, desc: string, defaultVal?: T) => any;
    };
    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * cli.on('ready', () => console.log ('Up and ready to go!'));
     * ```
     */
    on<T extends keyof Events>(event: T, cb: Events[T]): this;
    /**
     * @description A function that is ran before every command
     * @param  cb Your middleware function
     * @returns A **client** so you can *chain* methods.
     * @example
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
     * @description Log your bot into discord
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
