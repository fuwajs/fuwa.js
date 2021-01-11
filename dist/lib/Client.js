"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("./Request"));
const _DiscordAPI_1 = require("./_DiscordAPI");
const Response_1 = __importDefault(require("./Response"));
const Emitter_1 = __importDefault(require("./Emitter"));
/**
 * Client Class
 * ```typescript
 * const fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('?'); // Init The Client
 * ```
 */
class Client extends Emitter_1.default {
    /**
     * @param prefix The prefix for your bot
     */
    constructor(prefix, options) {
        super();
        this.bot = null;
        this.sessionId = '';
        this.status = [];
        // protected events: Map<keyof Events, eventCallback> = new Map();
        /* eslint-disable */
        this.events = new Map();
        this.commands = new Map();
        this.middleware = [];
        this.statusTypeOp = {
            playing: 0,
            streaming: 1,
            listening: 2,
            custom: 4,
            competing: 5,
        };
        this.options = options;
        this.prefix = prefix;
    }
    debug(bug) {
        if (this.debugMode) {
            if (bug instanceof Error) {
                throw bug;
            }
            else {
                console.log(bug + '\n');
            }
        }
    }
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
    command(name, cb, options) {
        const option = options || {
            desc: 'No description was provided',
        };
        if (Array.isArray(name)) {
            name.forEach((key) => {
                const commands = this.commands.get(key);
                commands === null || commands === void 0 ? void 0 : commands.push({ cb, options: option });
                this.commands.set(key, commands || [{ cb, options: option }]);
            });
        }
        else {
            const commands = this.commands.get(this.prefix + name);
            commands === null || commands === void 0 ? void 0 : commands.push({ cb, options: option });
            this.commands.set(name, commands || [{ cb, options: option }]);
        }
        return this;
    }
    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * cli.on('ready', () => console.log('Up and ready to go!'));
     * ```
     */
    on(event, cb) {
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
    use(cb) {
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
    login(token) {
        return __awaiter(this, void 0, void 0, function* () {
            const next = (req, res, arr, i = 0, secondArr) => {
                return () => {
                    var _a, _b;
                    if (arr[i + 1]) {
                        (_a = arr[i + 1]) === null || _a === void 0 ? void 0 : _a.cb(req, res, next(req, res, arr, i++));
                    }
                    else if (secondArr) {
                        (_b = secondArr[0]) === null || _b === void 0 ? void 0 : _b.cb(req, res, next(req, res, secondArr, i++));
                    }
                };
            };
            console.log(`Your Bot Token: ${token.toString()}`);
            this.connect(_DiscordAPI_1.discordAPI.gateway);
            this.op(_DiscordAPI_1.opCodes.hello, (data) => {
                console.log(data);
                this.loop = setInterval(() => this.response.op.emit(1, 251), data.heartbeat_interval);
                this.response.op.emit(_DiscordAPI_1.opCodes.indentify, {
                    token: token.toString(),
                    intents: 513,
                    properties: {
                        $os: process.platform,
                        $browser: 'Fuwa.js',
                        $device: 'Fuwa.js',
                    },
                });
            });
            this.op(_DiscordAPI_1.opCodes.invalidSession, () => {
                throw new Error('Invalid token');
            });
            this.event('READY', (data) => {
                this.sessionId = data.session_id;
                this.bot = data.user;
                const ready = this.events.get('READY');
                if (ready)
                    ready();
            });
            this.event('MESSAGE_CREATE', (msg) => __awaiter(this, void 0, void 0, function* () {
                const res = new Response_1.default(msg, token.toString());
                let prefix = '';
                if (typeof this.prefix === 'function') {
                    throw new TypeError('functions arent supported yet.');
                    // await this.prefix(msg)
                }
                else if (Array.isArray(this.prefix)) {
                    prefix = this.prefix.find((p) => msg.content.startsWith(p));
                }
                else if (typeof this.prefix === 'string') {
                    prefix = this.prefix;
                }
                else {
                    throw new TypeError('Invalid prefix type');
                }
                if (!prefix)
                    return;
                let commandName = '';
                let args = [];
                if (this.options.useMentionPrefix) {
                    const firstWord = msg.content.split(' ')[0];
                    if (firstWord === `<@!${this.bot.id}>`) {
                        args = msg.content
                            .split(' ')
                            .slice(2); // 'delete' 1st 2 items (@mention & cmd name)
                        commandName = msg.content.split(' ')[1].toLowerCase();
                    }
                    else {
                        args = msg.content
                            .split(' ')
                            .splice(1);
                        commandName = msg.content
                            .replace(prefix, '')
                            .split(' ')[0]
                            .toLowerCase();
                    }
                }
                else {
                    args = msg.content
                        .split(' ')
                        .splice(1);
                    commandName = msg.content
                        .replace(prefix, '')
                        .split(' ')[0]
                        .toLowerCase();
                }
                const command = this.commands.get(commandName);
                if (!command)
                    return;
                const _ = [];
                this.middleware.forEach((v) => _.push({ cb: v }));
                const req = new Request_1.default(msg);
                req.args = args;
                if (this.middleware[0]) {
                    this.middleware[0](req, res, next(req, res, _, 0, command));
                }
                this.bot;
                if (!this.middleware[0])
                    command[0].cb(req, res, next(req, res, command, 0));
            }));
            //         this.ws.on('open', async function () {
            //             this.debug(`Connect to ${ discordAPI.gateway } `);
            //             this.on('message', async (e) => {
            //                 const res = JSON.parse(e.toString());
            //                 this.debug(`Incoming message from ${ discordAPI.gateway }:
            // Event: ${res.t}
            // OPCOde: ${res.op}
            // Other: ${res.s}
            // Data: ${JSON.stringify(res.d, null, this.debugMode ? 4 : 0).replace(
            //                     '\\',
            //                     ''
            //                 )}`);
            //                 switch (res.op) {
            //                     case opCodes.hello:
            //                         // Start heartbeat loop
            //                         this.debug(
            //                             `Attempting to identify with the following credentials: ${identify.replace(
            //                                 '\\',
            //                                 ''
            //                             )}`
            //                         );
            //                         this.debug('Credentials sent');
            //                         break;
            //                 }
            //                 switch (res.t) {
            //                     case 'ready':
            //                         this.debug(`
            //                             Logged in on ${new Date().toDateString()}
            //                         `);
            //                         this.bot = new User(res.d.user);
            //                         let fn = this.events.get('ready');
            //                         fn ? fn() : 0;
            //                         break;
            //                     case 'messageCreate':
            //                         let __ = this.events.get('msg');
            //                         __ ? __() : 0;
            //                         this.debug('Recived A Message :' + res.d.content);
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
            //                             typeof this.prefix === 'function'
            //                                 ? await this.prefix(request)
            //                                 : Array.isArray(this.prefix)
            //                                 ? this.prefix.find((p) =>
            //                                       res.d.content.startsWith(p)
            //                                   )
            //                                 : this.prefix;
            //                         if (!prefix) {
            //                             throw new Error('No valid prefix found');
            //                         }
            //                         if (!res.d.content.startsWith(prefix)) break;
            //                         this.debug(
            //                             res.d.content.replace(prefix, '').toLowerCase()
            //                         );
            //                         let command = this.commands.get(
            //                             res.d.content.replace(prefix, '').toLowerCase()
            //                         );
            //                         console.log(command);
            //                         console.log(this.commands);
            //                         if (!command) {
            //                             let ___ = this.events.get('CMD_NOT_FOUND');
            //                             ___ ? ___() : 0;
            //                             break;
            //                         }
            //                         let _: any[] = [];
            //                         this.middleware.forEach((v) => _.push({ cb: v }));
            //                         this.middleware[0]
            //                             ? this.middleware[0](
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
            //                             let ____ = this.events.get('err');
            //                             if (!____) throw e;
            //                             ____();
            //                         }
            //                 }
            //             });
            //         });
        });
    }
    logout(end = true) {
        if (this.ws && this.loop) {
            clearInterval(this.loop);
            if (end)
                process.exit();
        }
    }
    set(key, val) {
        this.options[key] = val;
        return this;
    }
}
exports.default = Client;
