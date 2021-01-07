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
const path_1 = require("path");
const fs_1 = require("fs");
const _Const_1 = require("./_Const");
const Emitter_1 = __importDefault(require("./Emitter"));
/**
 * Client Class
 * ```typescript
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
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
        this.debugMode = (options === null || options === void 0 ? void 0 : options.debug) || false;
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
    command(name, cb, options) {
        if (Array.isArray(name)) {
            name.forEach((key) => {
                const option = options || {
                    desc: 'No description was provided',
                };
                let commands = this.commands.get(key);
                commands ? commands.push({ cb, options: option }) : 0;
                this.commands.set(key, commands || [{ cb, options: option }]);
            });
        }
        else {
            const option = options || {
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
            if (!this.prefix)
                throw new Error('No prefix provided');
            if (token.toString().length !== 59 /* discord token length */) {
                token = fs_1.readFileSync(path_1.join(__dirname, token.toString()));
            }
            this.connect(_Const_1.discordAPI.gateway);
            this.op(10 /* Hello */, (data) => {
                this.loop = setInterval(() => this.response.op.emit(1, { d: 251 }));
                this.response.op.emit(2 /* Identify */, {
                    d: {
                        token: token.toString(),
                        intents: 513,
                        properties: {
                            $os: process.platform,
                            $browser: 'Fuwa.js',
                            $device: 'Fuwa.js',
                        },
                    },
                });
            });
            this.op(9 /* Invalid Session */, () => {
                throw new Error('Invalid token');
            });
            this.event('READY', ({ d: data }) => {
                this.sessionId = data.session_id;
                this.bot = data.user;
                let READY = this.events.get('READY');
                READY ? READY() : 0;
            });
            const self = this;
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
        });
    }
    logout(end = true) {
        if (this.ws && this.loop) {
            clearInterval(this.loop);
            end ? process.exit() : 0;
        }
    }
    setStatus(status) {
        let cred = {};
        let activities = [
            {
                name: status.name,
            },
        ];
        status.type && status.type.toLowerCase() !== 'streaming'
            ? (activities[0]['type'] = this.statusTypeOp[status.type.toLowerCase()])
            : status.type &&
                status.type.toLowerCase() === 'streaming' &&
                status.url
                ? ((activities[0].type = 1), (activities[0].url = status.url))
                : (activities[0]['type'] = 4);
        cred.d.presence.activities = activities;
        status.status
            ? (cred.d.presence.status = status.status)
            : (cred.d.presence.status = 'online');
        status.afk
            ? (cred.d.presence.afk = status.afk)
            : (cred.d.presence.afk = 'false');
        this.status = cred;
    }
}
exports.default = Client;
