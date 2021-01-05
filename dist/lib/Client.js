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
const ws_1 = __importDefault(require("ws"));
const User_1 = __importDefault(require("./User"));
const _Const_1 = require("./_Const");
const Reponse_1 = __importDefault(require("./Reponse"));
function next() {
    console.log('Will Do Something');
}
/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('?'); // Init The Client
 */
class Client {
    /**
     * @param {string} prefix The prefix for your bot
     */
    constructor(prefix, options) {
        this.bot = null;
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
        this.cred = {
            op: _Const_1.OPCodes.IDENTIFY,
            d: {
                token: null,
                intents: 513,
                properties: {
                    $os: process.platform,
                    $browser: 'fuwa.js',
                    $device: 'fuwa.js',
                },
                presence: {},
            },
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
    APIEvent(event, data) {
        switch (event) {
            case 'READY':
                event;
        }
    }
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
     * @param {keyof Events} event The event
     * @param {Function} cb The callback function
     * @example
     *
     * cli.on('READY', () => console.log('Up and ready to go!'));
     */
    on(event, cb) {
        this.events.set(event, cb);
        return this;
    }
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
    use(cb) {
        this.middleware.push(cb);
        return this;
    }
    /**
     * options for bot status
     *  @interface
     */
    /**
     * Log your bot into discord
     * @param {string|Buffer} token Your bot token
     * @param {statusOptions} status Your Bot Status Options
     */
    login(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.prefix)
                throw new Error('No prefix provided');
            this.ws = new ws_1.default(_Const_1.discordAPI.gateway);
            const self = this;
            this.ws.on('open', function () {
                return __awaiter(this, void 0, void 0, function* () {
                    self.debug(`Connect to ${_Const_1.discordAPI.gateway}`);
                    this.on('message', (e) => __awaiter(this, void 0, void 0, function* () {
                        const res = JSON.parse(e.toString());
                        self.debug(`Incoming message from ${_Const_1.discordAPI.gateway}:
Event: ${res.t}
OPCOde: ${res.op}
Other: ${res.s}
Data: ${JSON.stringify(res.d, null, self.debugMode ? 4 : 0).replace('\\', '')}`);
                        let lastHeartbeat = Date.now();
                        self.cred.d.token = token.toString();
                        switch (res.op) {
                            case _Const_1.OPCodes.HELLO:
                                // Start heartbeat loop
                                self.loop = setInterval(() => {
                                    if (!self.bot)
                                        throw new Error('Unable to login to discord');
                                    this.send(JSON.stringify({
                                        op: 1,
                                        d: 251,
                                    }));
                                    let now = Date.now();
                                    self.debug(`Requested a heartbeat ${new Date(now).toDateString()} with a ${(now - lastHeartbeat) / 1000}ms delay
                            `);
                                    lastHeartbeat = now;
                                }, res.d.heartbeat_interval);
                                // Send Identify
                                let identify = JSON.stringify(self.cred, null, self.debugMode ? 4 : 0);
                                self.debug(`Attempting to identify with the following credentials: ${identify.replace('\\', '')}`);
                                this.send(identify);
                                self.debug('Credentials sent');
                                break;
                        }
                        switch (res.t) {
                            case 'READY':
                                self.debug(`
                            Logged in on ${new Date().toDateString()}
                        `);
                                self.bot = new User_1.default(res.d.user);
                                let fn = self.events.get('READY');
                                fn ? fn() : 0;
                                break;
                            case 'MESSAGE_CREATE':
                                let __ = self.events.get('MSG');
                                __ ? __() : 0;
                                self.debug('Recived A Message :' + res.d.content);
                                let request = null; // new Request(token.toString(), res.d);
                                let response = new Reponse_1.default(res.d, token.toString());
                                const next = (req, res, arr, i = 0, secoundArr) => {
                                    return () => {
                                        arr[i + 1]
                                            ? arr[i + 1].cb(req, res, next(req, res, arr, i++))
                                            : secoundArr
                                                ? secoundArr[0]
                                                    ? secoundArr[0].cb(req, res, next(req, res, secoundArr, i++))
                                                    : 0
                                                : 0;
                                    };
                                };
                                const prefix = typeof self.prefix === 'function'
                                    ? yield self.prefix(request)
                                    : Array.isArray(self.prefix)
                                        ? self.prefix.find((p) => res.d.content.startsWith(p))
                                        : self.prefix;
                                if (!prefix) {
                                    throw new Error('No valid prefix found');
                                }
                                if (!res.d.content.startsWith(prefix))
                                    break;
                                self.debug(res.d.content.replace(prefix, '').toLowerCase());
                                let command = self.commands.get(res.d.content.replace(prefix, '').toLowerCase());
                                console.log(command);
                                console.log(self.commands);
                                if (!command) {
                                    let ___ = self.events.get('CMD_NOT_FOUND');
                                    ___ ? ___() : 0;
                                    break;
                                }
                                let _ = [];
                                self.middleware.forEach((v) => _.push({ cb: v }));
                                self.middleware[0]
                                    ? self.middleware[0](request, response, next(request, response, _, 0, command))
                                    : 0;
                                try {
                                    command[0].cb(request, response, next(request, response, command, 0));
                                }
                                catch (e) {
                                    let ____ = self.events.get('ERR');
                                    if (!____)
                                        throw e;
                                    ____();
                                }
                        }
                    }));
                });
            });
        });
    }
    logout(end = true) {
        if (this.ws && this.loop) {
            clearInterval(this.loop);
            end ? process.exit() : 0;
        }
    }
    setStatus(status) {
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
        this.cred.d.presence.activities = activities;
        status.status
            ? (this.cred.d.presence.status = status.status)
            : (this.cred.d.presence.status = 'online');
        status.afk
            ? (this.cred.d.presence.afk = status.afk)
            : (this.cred.d.presence.afk = 'false');
    }
}
exports.default = Client;
