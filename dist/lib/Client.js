"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const _Cache_1 = __importDefault(require("./_Cache"));
const _DiscordAPI_1 = require("./_DiscordAPI");
const User_1 = __importDefault(require("./User"));
const _unicdi_1 = __importDefault(require("./_unicdi"));
const Response_1 = __importDefault(require("./Response"));
const Emitter_1 = __importDefault(require("./Emitter"));
const Embed_1 = __importDefault(require("./Embed"));
const Colors_1 = __importDefault(require("./Colors"));
const erlpack = Promise.resolve().then(() => __importStar(require('erlpack')));
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
        var _a, _b, _c, _d;
        super();
        this.sessionId = '';
        this.status = [];
        // protected events: Map<keyof Events, eventCallback> = new Map();
        /* eslint-disable */
        this.events = new Map();
        this.commands = new Map();
        this.middleware = [];
        this.options = options;
        this.prefix = prefix;
        const caching = {
            clearAfter: ((_a = options === null || options === void 0 ? void 0 : options.cachingSettings) === null || _a === void 0 ? void 0 : _a.clearAfter) === false ? false : 1.08e+7,
            cacheOptions: ((_b = options === null || options === void 0 ? void 0 : options.cachingSettings) === null || _b === void 0 ? void 0 : _b.cacheOptions) || {
                channels: true,
                guilds: true,
                users: true
            }
        };
        this.cache = new _Cache_1.default(caching);
        // Bootleg auto-help command
        // TODO: Make it less bootleg 
        if ((_d = (_c = options === null || options === void 0 ? void 0 : options.builtinCommands) === null || _c === void 0 ? void 0 : _c.help) !== null && _d !== void 0 ? _d : true) {
            this.command(['help', 'commands', 'h'], (req, res, next) => {
                let embed = new Embed_1.default()
                    .setColor(Colors_1.default.blue)
                    .setThumbnail(this.bot.avatar);
                if (req.args.length > 0) {
                    const cmdName = req.args[0];
                    const cmd = this.commands.get(cmdName.toLowerCase());
                    if (!cmd) {
                        res.send(embed.setColor(Colors_1.default.red)
                            .setTitle('Error')
                            .setDescription(`${cmdName} is not a valid command name.`));
                        return;
                    }
                    else {
                        const fields = [
                            {
                                name: 'Example',
                                value: 'Soon'
                            }
                        ];
                        if (cmd[0].options.aliases) {
                            fields.push({
                                name: 'Aliases',
                                value: `\`${cmd[0].options.aliases.join(', ')}\``
                            });
                        }
                        embed
                            .setTitle(`Help | ${cmdName}`)
                            .setDescription(cmd[0].options.desc)
                            .addFields(fields);
                    }
                }
                else {
                    embed.setTitle('Help | All');
                    this.commands.forEach((cmd, name) => {
                        embed.addField({ name, value: cmd[0].options.desc });
                    });
                }
                res.send(embed);
                next();
            }, { desc: 'Get help on the usage of a command.' });
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
        const option = {
            desc: (options === null || options === void 0 ? void 0 : options.desc) || 'No description was provided',
            aliases: Array.isArray(name) ? name.slice(1) : []
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
            // this.connect(discordAPI.gateway);
            erlpack.then(() => {
                this.connect(_DiscordAPI_1.discordAPI.gateway, {
                    v: 8,
                    encoding: 'etf'
                });
            });
            erlpack.catch(() => {
                this.connect(_DiscordAPI_1.discordAPI.gateway, {
                    v: 8,
                    encoding: 'json'
                });
            });
            this.op(_DiscordAPI_1.opCodes.hello, (data) => {
                // console.log (data);
                this.loop = setInterval(() => this.response.op.emit(_DiscordAPI_1.opCodes.heartbeat, 251), data.heartbeat_interval);
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
                this.bot = new User_1.default(data.user, token.toString());
                data.guilds.forEach(g => g.unavailable ? '' : this.cache.cache('guilds', g));
                const ready = this.events.get('READY');
                if (ready)
                    ready();
            });
            this.event('GUILD_CREATE', guild => this.cache.cache('guilds', guild));
            this.event('MESSAGE_CREATE', (msg) => __awaiter(this, void 0, void 0, function* () {
                console.time('command run');
                if (!msg.content)
                    return;
                const res = new Response_1.default(msg, token.toString());
                let prefix = '';
                console.time('prefix parsing');
                if (typeof this.prefix === 'function') {
                    prefix = yield this.prefix(new Request_1.default(msg, this.token, this.cache));
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
                console.timeEnd('prefix parsing');
                if (!prefix)
                    return;
                console.time('command parsing');
                let commandName = '';
                let args = [];
                const str = msg.content.split(' ');
                const a = this.options.useMentionPrefix && str[0] === `<@!${this.bot.id}>`;
                if (str[0][0] !== prefix && !a)
                    return;
                if (this.options.debug)
                    console.log(str);
                args = str.slice(a ? 2 : 1);
                commandName = (a ? str[1] : str[0])
                    .replace(prefix, '')
                    .toLowerCase();
                let c = [...this.commands.entries()].find(v => {
                    var _a;
                    if (v[0] === commandName
                        || ((_a = v[1][0]
                            .options
                            .aliases) === null || _a === void 0 ? void 0 : _a.includes(commandName))) {
                        return true;
                    }
                    else
                        return false;
                });
                if (!c)
                    return;
                const command = c[1];
                if (!command)
                    return;
                console.timeEnd('command parsing');
                console.time('middleware');
                const _ = [];
                this.middleware.forEach((v) => _.push({ cb: v }));
                const req = new Request_1.default(msg, token.toString(), this.cache);
                req.args = args;
                // console.log (req)
                if (this.middleware[0]) {
                    this.middleware[0](req, res, next(req, res, _, 0, command));
                }
                console.timeEnd('middleware');
                console.time('run command');
                if (!this.middleware[0])
                    command[0].cb(req, res, next(req, res, command, 0));
                console.timeEnd('run command');
                console.timeEnd('command run');
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
            const msgs = yield _unicdi_1.default.GET(`/channels/${channelID}/messages?limit=${amt}`, this.token).catch(e => { console.error(e); });
            _unicdi_1.default.POST(`/channels/${channelID}/messages/bulk-delete`, this.token, JSON.stringify({ messages: msgs.map(m => m.id) })).catch(e => { console.error(e); });
        });
    }
}
exports.default = Client;
