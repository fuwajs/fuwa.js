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
const _unicdi_1 = __importDefault(require("./_unicdi"));
const Response_1 = __importDefault(require("./Response"));
const Emitter_1 = __importDefault(require("./Emitter"));
const Embed_1 = __importDefault(require("./Embed"));
const Colors_1 = __importDefault(require("./Colors"));
var statusCode;
(function (statusCode) {
    statusCode[statusCode["playing"] = 0] = "playing";
    statusCode[statusCode["streaming"] = 1] = "streaming";
    statusCode[statusCode["listening"] = 2] = "listening";
    statusCode[statusCode["custom"] = 3] = "custom";
    statusCode[statusCode["competing"] = 4] = "competing";
})(statusCode || (statusCode = {}));
/**
 * The Client Class
 * @description The client class is the main starting point of your discord bot.
 * ```typescript
 * const fuwa = require('fuwa.js'); // Import Fuwa library
 * const client = new fuwa.Client('?'); // Create and initialize a Client
 * ```
 */
class Client extends Emitter_1.default {
    /**
     * @param prefix The prefix for your bot
     */
    constructor(prefix, options) {
        var _a;
        super();
        this.sessionId = '';
        this.cache = {
            guilds: new Map()
        };
        this.status = [];
        // protected events: Map<keyof Events, eventCallback> = new Map();
        /* eslint-disable */
        this.events = new Map();
        this.commands = new Map();
        this.middleware = [];
        this.options = options;
        this.prefix = prefix;
        this.bot;
        // Bootleg auto-help command
        // TODO: Make it less bootleg 
        if (((_a = options === null || options === void 0 ? void 0 : options.builtinCommands) === null || _a === void 0 ? void 0 : _a.help) === undefined ? true : options.builtinCommands.help) {
            this.command(['h', 'help'], (req, res) => {
                let embed = new Embed_1.default().setColor(Colors_1.default.blue);
                if (req.args.length > 0) {
                    const cmd = req.args[0];
                    if (!this.commands.has(cmd)) {
                        res.send(embed.setColor(Colors_1.default.red)
                            .setTitle('Error')
                            .setDescription(`${cmd} is not a valid command name.`));
                        return;
                    }
                    embed.setTitle(`Help | ${cmd}`);
                    embed.addField({
                        name: 'Description', value: this.commands.get(cmd)[0].options.desc
                    });
                    embed.addField({
                        name: 'Usage', value: 'Coming Soon!'
                    });
                }
                else {
                    embed.setTitle('Help | All');
                    embed.setThumbnail('https://cdn.discordapp.com/avatars/'
                        + `${this.bot.id}/${this.bot.avatar}.png`);
                    this.commands.forEach((cmd, name) => {
                        embed.addField({ name, value: cmd[0].options.desc });
                    });
                }
                res.send(embed);
            }, { desc: 'Get help on the usage of a command.' });
        }
    }
    debug(bug) {
        if (this.debugMode) {
            if (bug instanceof Error) {
                throw bug;
            }
            else {
                // console.log (bug + '\n');
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
            aliases: Array.isArray(name) ? name.slice(1) : undefined
        };
        let defaultName = Array.isArray(name) ? name[0] : name;
        let old = this.commands.get(defaultName);
        let cmd = { cb, options: option };
        if (old) {
            old.push(cmd);
        }
        else {
            old = [cmd];
        }
        this.commands.set(defaultName, old);
        return this;
    }
    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * cli.on('ready', () => console.log ('Up and ready to go!'));
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
            this.token = token.toString();
            // console.log (`Your Bot Token: ${token.toString()}`);
            this.connect(_DiscordAPI_1.discordAPI.gateway);
            this.op(_DiscordAPI_1.opCodes.hello, (data) => {
                // console.log (data);
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
            this.event('GUILD_CREATE', guild => this.cache.guilds.set(guild.id, guild));
            this.event('MESSAGE_CREATE', (msg) => __awaiter(this, void 0, void 0, function* () {
                console.timeEnd('command-all');
                console.time('command-all');
                if (!msg.content)
                    return;
                const res = new Response_1.default(msg, token.toString());
                let prefix = '';
                if (typeof this.prefix === 'function') {
                    yield this.prefix(new Request_1.default(msg, this.token, this.cache));
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
                const str = msg.content.split(' ');
                const a = this.options.useMentionPrefix && str[0] === `<@!${this.bot.id}>`;
                // console.log(str);
                if (str[0][0] !== prefix && !a)
                    return;
                args = str.slice(a ? 2 : 1);
                commandName = (a ? str[1] : str[0])
                    .replace(prefix, '')
                    .toLowerCase();
                const command = this.commands.get(commandName);
                if (!command)
                    return;
                const _ = [];
                this.middleware.forEach((v) => _.push({ cb: v }));
                const req = new Request_1.default(msg, token.toString(), this.cache);
                req.args = args;
                // console.log (req)
                if (this.middleware[0]) {
                    this.middleware[0](req, res, next(req, res, _, 0, command));
                }
                this.bot;
                if (!this.middleware[0])
                    command[0].cb(req, res, next(req, res, command, 0));
                console.timeEnd('command-all');
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
            //                         // console.log (command);
            //                         // console.log (this.commands);
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
    setStatus(status) {
        let cred = {
            d: {
                presence: {
                    activities: [],
                    status: 'online',
                    afk: false,
                },
            }
        };
        let activities = [
            {
                name: status.name,
            },
        ];
        activities[0] = status === null || status === void 0 ? void 0 : status.type;
        cred.d.presence.activities = activities;
        cred.d.presence.status = status.status || 'online';
        cred.d.presence.afk = status.afk || false;
        this.status = cred;
    }
    deleteMessages(amt, channelID) {
        return __awaiter(this, void 0, void 0, function* () {
            const msgs = yield _unicdi_1.default.GET(`/api/v8/channels/${channelID}/messages?limit=${amt}`, this.token).catch(e => { console.error(e); });
            _unicdi_1.default.OTHER('POST', `/api/v8/channels/${channelID}/messages/bulk-delete`, this.token, JSON.stringify({ messages: msgs.map(m => m.id) })).catch(e => { console.error(e); });
        });
    }
}
exports.default = Client;
