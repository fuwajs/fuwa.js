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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var User_1 = __importDefault(require("./User"));
var Req_1 = __importDefault(require("./Req"));
var _Const_1 = require("./_Const");
var Res_1 = __importDefault(require("./Res"));
function next() {
    console.log('Will Do Something');
}
/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('?'); // Init The Client
 */
var Client = /** @class */ (function () {
    /**
     * @param {string} prefix The prefix for your bot
     */
    function Client(prefix, options) {
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
    Client.prototype.debug = function (bug) {
        if (this.debugMode) {
            if (bug instanceof Error) {
                throw bug;
            }
            else {
                console.log(bug + '\n');
            }
        }
    };
    /**
     * Command function
     * @param {string|string[]} name Name of the command,
     * @param {commandCallback} cb The function that is called when the command is ran
     * @param {commandOptions} options Options for your command
     * @returns {Client}
     * @example
     * cli.command(['ping', 'latency'], (req, res) => {
     *      res.send('Pong!'); // send message
     * });
     */
    Client.prototype.command = function (name, cb, options) {
        var _this = this;
        if (Array.isArray(name)) {
            name.forEach(function (key) {
                var option = options || {
                    desc: 'No description was provided',
                };
                var commands = _this.commands.get(key);
                commands ? commands.push({ cb: cb, options: option }) : 0;
                _this.commands.set(key, commands || [{ cb: cb, options: option }]);
            });
        }
        else {
            var option = options || {
                desc: 'No description was provided',
            };
            var commands = this.commands.get(this.prefix + name);
            commands ? commands.push({ cb: cb, options: option }) : undefined;
            this.commands.set(this.prefix + name, commands || [{ cb: cb, options: option }]);
        }
        return this;
    };
    Client.prototype.on = function (event, cb) {
        this.events.set(event, cb);
        return this;
    };
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
    Client.prototype.use = function (cb) {
        this.middleware.push(cb);
        return this;
    };
    /**
     * options for bot status
     *  @interface
     */
    /**
     * Log your bot into discord
     * @param {string|Buffer} token Your bot token
     * @param {statusOptions} status Your Bot Status Options
     */
    Client.prototype.login = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                if (!this.prefix)
                    throw new Error('No prefix provided');
                this.ws = new ws_1.default(_Const_1.discordAPI.gateway);
                self = this;
                this.ws.on('open', function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            self.debug("Connect to " + _Const_1.discordAPI.gateway);
                            this.on('message', function (e) { return __awaiter(_this, void 0, void 0, function () {
                                var res, lastHeartbeat, identify, _a, fn, __, request, response, next_1, prefix, _b, command, ___, _1, ____;
                                var _this = this;
                                return __generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            res = JSON.parse(e.toString());
                                            self.debug("Incoming message from " + _Const_1.discordAPI.gateway + ":\nEvent: " + res.t + "\nOPCOde: " + res.op + "\nOther: " + res.s + "\nData: " + JSON.stringify(res.d, null, self.debugMode ? 4 : 0).replace('\\', ''));
                                            lastHeartbeat = Date.now();
                                            self.cred.d.token = token.toString();
                                            switch (res.op) {
                                                case _Const_1.OPCodes.HELLO:
                                                    // Start heartbeat loop
                                                    self.loop = setInterval(function () {
                                                        if (!self.bot)
                                                            throw new Error('Unable to login to discord');
                                                        _this.send(JSON.stringify({
                                                            op: 1,
                                                            d: 251,
                                                        }));
                                                        var now = Date.now();
                                                        self.debug("Requested a heartbeat " + new Date(now).toDateString() + " with a " + (now - lastHeartbeat) / 1000 + "ms delay\n                            ");
                                                        lastHeartbeat = now;
                                                    }, res.d.heartbeat_interval);
                                                    identify = JSON.stringify(self.cred, null, self.debugMode ? 4 : 0);
                                                    self.debug("Attempting to identify with the following credentials: " + identify.replace('\\', ''));
                                                    this.send(identify);
                                                    self.debug('Credentials sent');
                                                    break;
                                            }
                                            _a = res.t;
                                            switch (_a) {
                                                case 'READY': return [3 /*break*/, 1];
                                                case 'MESSAGE_CREATE': return [3 /*break*/, 2];
                                            }
                                            return [3 /*break*/, 6];
                                        case 1:
                                            self.debug("\n                            Logged in on " + new Date().toDateString() + "\n                        ");
                                            self.bot = new User_1.default(res.d.user);
                                            fn = self.events.get('READY');
                                            fn ? fn() : 0;
                                            return [3 /*break*/, 6];
                                        case 2:
                                            __ = self.events.get('MSG');
                                            __ ? __() : 0;
                                            self.debug('Recived A Message :' + res.d.content);
                                            request = new Req_1.default(token.toString(), res.d);
                                            response = new Res_1.default(res.d, token.toString());
                                            next_1 = function (req, res, arr, i, secoundArr) {
                                                if (i === void 0) { i = 0; }
                                                return function () {
                                                    arr[i + 1]
                                                        ? arr[i + 1].cb(req, res, next_1(req, res, arr, i++))
                                                        : secoundArr
                                                            ? secoundArr[0]
                                                                ? secoundArr[0].cb(req, res, next_1(req, res, secoundArr, i++))
                                                                : 0
                                                            : 0;
                                                };
                                            };
                                            if (!(typeof self.prefix === 'function')) return [3 /*break*/, 4];
                                            return [4 /*yield*/, self.prefix(request)];
                                        case 3:
                                            _b = _c.sent();
                                            return [3 /*break*/, 5];
                                        case 4:
                                            _b = Array.isArray(self.prefix)
                                                ? self.prefix.find(function (p) {
                                                    return res.d.content.startsWith(p);
                                                })
                                                : self.prefix;
                                            _c.label = 5;
                                        case 5:
                                            prefix = _b;
                                            self.debug(res.d.content.replace(prefix, '').toLowerCase());
                                            if (!prefix) {
                                                throw new Error('No valid prefix found');
                                            }
                                            command = self.commands.get(res.d.content.replace(prefix, '').toLowerCase());
                                            if (!command) {
                                                ___ = self.events.get('CMD_NOT_FOUND');
                                                ___ ? ___() : 0;
                                                return [3 /*break*/, 6];
                                            }
                                            _1 = [];
                                            self.middleware.forEach(function (v) { return _1.push({ cb: v }); });
                                            self.middleware[0]
                                                ? self.middleware[0](request, response, next_1(request, response, _1, 0, command))
                                                : 0;
                                            try {
                                                command[0].cb(request, response, next_1(request, response, command, 0));
                                            }
                                            catch (e) {
                                                ____ = self.events.get('ERR');
                                                if (!____)
                                                    throw e;
                                                ____();
                                            }
                                            _c.label = 6;
                                        case 6: return [2 /*return*/];
                                    }
                                });
                            }); });
                            return [2 /*return*/];
                        });
                    });
                });
                return [2 /*return*/];
            });
        });
    };
    Client.prototype.logout = function (end) {
        if (end === void 0) { end = true; }
        if (this.ws && this.loop) {
            clearInterval(this.loop);
            end ? process.exit() : 0;
        }
    };
    Client.prototype.setStatus = function (status) {
        var activities = [
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
    };
    return Client;
}());
exports.default = Client;
