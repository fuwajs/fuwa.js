import WebSocket from 'ws';
import User from './User';
import { join } from 'path';
import { readFileSync as readFile } from 'fs';
import Request from './Request';
import {
    discordAPI,
    DiscordAPIEvents,
    DiscordAPIEventResponse,
    OPCodes,
    OPCodeMap,
} from './_DiscordAPI';
import Response from './Reponse';
import Emitter from './Emitter';
export type statusType = 'playing' | 'listening' | 'streaming' | 'competing';
export type status = 'dnd' | 'offline' | 'idle' | 'online';
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
export type commandCallback = (
    req: Request,
    res: Response,
    next: any
) => Promise<void> | void;
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
 * ```typescript
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('?'); // Init The Client
 * ```
 */
class Client extends Emitter {
    public bot: User | null = null;
    private sessionId = '';
    protected debugMode: boolean;
    protected status: any = [];
    protected events: Map<keyof Events, Function> = new Map();
    protected prefix:
        | string
        | string[]
        | ((req: Request) => Promise<string> | string);
    protected loop?: NodeJS.Timeout;
    protected commands: Map<
        string,
        { cb: commandCallback; options: commandOptions }[]
    > = new Map();
    protected middleware: commandCallback[] = [];
    protected statusTypeOp: any = {
        playing: 0,
        streaming: 1,
        listening: 2,
        custom: 4,
        competing: 5,
    };
    /**
     * @param prefix The prefix for your bot
     */
    constructor(
        prefix:
            | string
            | string[]
            | ((req: Request) => Promise<string> | string),
        options?: clientOptions
    ) {
        super();
        this.debugMode = options?.debug || false;
        this.prefix = prefix;
    }
    protected debug(bug: Error | any) {
        if (this.debugMode) {
            if (bug instanceof Error) {
                throw bug;
            } else {
                console.log(bug + '\n');
            }
        }
    }

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
    command(
        name: string | string[],
        cb: commandCallback,
        options?: commandOptions
    ) {
        if (Array.isArray(name)) {
            name.forEach((key) => {
                const option: commandOptions = options || {
                    desc: 'No description was provided',
                };
                let commands = this.commands.get(key);
                commands ? commands.push({ cb, options: option }) : 0;
                this.commands.set(key, commands || [{ cb, options: option }]);
            });
        } else {
            const option: commandOptions = options || {
                desc: 'No description was provided',
            };
            let commands = this.commands.get(this.prefix + name);
            commands ? commands.push({ cb, options: option }) : undefined;
            this.commands.set(name, commands || [{ cb, options: option }]);
        }
        return this;
    }
    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * cli.on('READY', () => console.log('Up and ready to go!'));
     * ```
     */
    on<T extends keyof Events>(event: T, cb: Events[T]) {
        this.events.set(event, cb);
        return this;
    }
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
    use(cb: commandCallback) {
        this.middleware.push(cb);
        return this;
    }
    /**
     * options for bot status
     */

    /**
     * Log your bot into discord
     * @param token Your bot token
     * @param status Your Bot Status Options
     */

    async login(token: string | Buffer) {
        if (!this.prefix) throw new Error('No prefix provided');
        console.log(token.toString());
        this.connect(discordAPI.gateway);

        this.op(10 /* Hello */, (data) => {
            console.log(data);
            this.loop = setInterval(
                () => this.response.op.emit(1, 251),
                data.heartbeat_interval
            );
            this.response.op.emit(2 /* Identify */, {
                token: token.toString(),
                intents: 513,
                properties: {
                    $os: process.platform,
                    $browser: 'Fuwa.js',
                    $device: 'Fuwa.js',
                },
            });
        });
        this.op(9 /* Invalid Session */, () => {
            throw new Error('Invalid token');
        });
        this.event('READY', (data) => {
            this.sessionId = data.session_id;
            this.bot = data.user;
            let READY = this.events.get('READY');
            READY ? READY() : 0;
        });
        //         this.ws.on('open', async function () {
        //             self.debug(`Connect to ${discordAPI.gateway}`);
        //             this.on('message', async (e) => {
        //                 const res = JSON.parse(e.toString());
        //                 self.debug(`Incoming message from ${discordAPI.gateway}:
        // Event: ${res.t}
        // OPCOde: ${res.op}
        // Other: ${res.s}
        // Data: ${JSON.stringify(res.d, null, self.debugMode ? 4 : 0).replace(
        //                     '\\',
        //                     ''
        //                 )}`);
        //                 switch (res.op) {
        //                     case OPCodes.HELLO:
        //                         // Start heartbeat loop

        //                         self.debug(
        //                             `Attempting to identify with the following credentials: ${identify.replace(
        //                                 '\\',
        //                                 ''
        //                             )}`
        //                         );
        //                         self.debug('Credentials sent');

        //                         break;
        //                 }

        //                 switch (res.t) {
        //                     case 'READY':
        //                         self.debug(`
        //                             Logged in on ${new Date().toDateString()}
        //                         `);

        //                         self.bot = new User(res.d.user);
        //                         let fn = self.events.get('READY');
        //                         fn ? fn() : 0;
        //                         break;
        //                     case 'MESSAGE_CREATE':
        //                         let __ = self.events.get('MSG');
        //                         __ ? __() : 0;
        //                         self.debug('Recived A Message :' + res.d.content);
        //                         let request: any = null; // new Request(token.toString(), res.d);
        //                         let response = new Response(res.d, token.toString());
        //                         const next = (
        //                             req: Request,
        //                             res: Response,
        //                             arr: { cb: commandCallback }[],
        //                             i = 0,
        //                             secoundArr?: { cb: commandCallback }[]
        //                         ) => {
        //                             return () => {
        //                                 arr[i + 1]
        //                                     ? arr[i + 1].cb(
        //                                           req,
        //                                           res,
        //                                           next(req, res, arr, i++)
        //                                       )
        //                                     : secoundArr
        //                                     ? secoundArr[0]
        //                                         ? secoundArr[0].cb(
        //                                               req,
        //                                               res,
        //                                               next(req, res, secoundArr, i++)
        //                                           )
        //                                         : 0
        //                                     : 0;
        //                             };
        //                         };
        //                         const prefix =
        //                             typeof self.prefix === 'function'
        //                                 ? await self.prefix(request)
        //                                 : Array.isArray(self.prefix)
        //                                 ? self.prefix.find((p) =>
        //                                       res.d.content.startsWith(p)
        //                                   )
        //                                 : self.prefix;

        //                         if (!prefix) {
        //                             throw new Error('No valid prefix found');
        //                         }
        //                         if (!res.d.content.startsWith(prefix)) break;
        //                         self.debug(
        //                             res.d.content.replace(prefix, '').toLowerCase()
        //                         );
        //                         let command = self.commands.get(
        //                             res.d.content.replace(prefix, '').toLowerCase()
        //                         );
        //                         console.log(command);
        //                         console.log(self.commands);
        //                         if (!command) {
        //                             let ___ = self.events.get('CMD_NOT_FOUND');
        //                             ___ ? ___() : 0;
        //                             break;
        //                         }
        //                         let _: any[] = [];
        //                         self.middleware.forEach((v) => _.push({ cb: v }));
        //                         self.middleware[0]
        //                             ? self.middleware[0](
        //                                   request,
        //                                   response,
        //                                   next(request, response, _, 0, command)
        //                               )
        //                             : 0;

        //                         try {
        //                             command[0].cb(
        //                                 request,
        //                                 response,
        //                                 next(request, response, command, 0)
        //                             );
        //                         } catch (e) {
        //                             let ____ = self.events.get('ERR');
        //                             if (!____) throw e;
        //                             ____();
        //                         }
        //                 }
        //             });
        //         });
    }
    logout(end: boolean = true) {
        if (this.ws && this.loop) {
            clearInterval(this.loop);
            end ? process.exit() : 0;
        }
    }

    // setStatus(status: statusOptions) {
    //     let cred: any = {};
    //     let activities: any = [
    //         {
    //             name: status.name,
    //         },
    //     ];
    //     status.type && status.type.toLowerCase() !== 'streaming'
    //         ? (activities[0]['type'] = this.statusTypeOp[
    //               status.type.toLowerCase()
    //           ])
    //         : status.type &&
    //           status.type.toLowerCase() === 'streaming' &&
    //           status.url
    //         ? ((activities[0].type = 1), (activities[0].url = status.url))
    //         : (activities[0]['type'] = 4);
    //     cred.d.presence.activities = activities;
    //     status.status
    //         ? (cred.d.presence.status = status.status)
    //         : (cred.d.presence.status = 'online');
    //     status.afk
    //         ? (cred.d.presence.afk = status.afk)
    //     : (cred.d.presence.afk = 'false');
    // this.status = cred;
    // }
}

export default Client;
