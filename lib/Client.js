"use strict";
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
    console.log("Will Do Something");
}
/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('MY_TOKEN_HERE', '?'); // init the Client
 */
var Client = /** @class */ (function () {
    /**
     * @param {string} prefix The prefix for your bot
     */
    function Client(prefix, options) {
        this.bot = null;
        this.events = new Map();
        this.commands = new Map();
        this.middlware = [];
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
                    $browser: "fuwa.js",
                    $device: "fuwa.js",
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
                console.log(bug + "\n");
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
                    desc: "No description was provided",
                };
                var commands = _this.commands.get(key);
                commands ? commands.push({ cb: cb, options: option }) : undefined;
                _this.commands.set(key, commands || [{ cb: cb, options: option }]);
            });
        }
        else {
            var option = options || {
                desc: "No description was provided",
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
        this.middlware.push(cb);
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
        if (!this.prefix)
            throw new Error('No prefix provided');
        this.ws = new ws_1.default(_Const_1.discordAPI.gateway);
        var self = this;
        this.ws.on("open", function () {
            var _this = this;
            self.debug("Connect to " + _Const_1.discordAPI.gateway);
            this.on("message", function (e) {
                var res = JSON.parse(e.toString());
                self.debug("Incoming message from " + _Const_1.discordAPI.gateway + ":\nEvent: " + res.t + "\nOPCOde: " + res.op + "\nOther: " + res.s + "\nData: " + JSON.stringify(res.d, null, self.debugMode ? 4 : 0).replace("\\", ""));
                var lastHeartbeat = Date.now();
                self.cred.d.token = token;
                switch (res.op) {
                    case _Const_1.OPCodes.HELLO:
                        // Start heartbeat loop
                        self.loop = setInterval(function () {
                            _this.send(JSON.stringify({
                                op: 1,
                                d: 251,
                            }));
                            var now = Date.now();
                            self.debug("Requested a heartbeat " + new Date(now).toDateString() + " with a " + (now - lastHeartbeat) / 1000 + "ms delay\n                            ");
                            lastHeartbeat = now;
                        }, res.d.heartbeat_interval);
                        // Send Identify
                        var identify = JSON.stringify(self.cred, null, self.debugMode ? 4 : 0);
                        self.debug("Attempting to identify with the following credentials: " + identify.replace("\\", ""));
                        _this.send(identify);
                        self.debug("Credentials sent");
                        break;
                }
                switch (res.t) {
                    case "READY":
                        self.debug("\n                            Logged in on " + new Date().toDateString() + "\n                        ");
                        self.bot = new User_1.default(res.d.user);
                        var fn = self.events.get("READY");
                        fn ? fn() : 0;
                        break;
                    case "MESSAGE_CREATE":
                        self.debug("Recived A Message :" + res.d.content);
                        var request = new Req_1.default(token.toString(), res.d);
                        var response = new Res_1.default(res.d, token.toString());
                        var command = self.commands.get(res.d.content);
                        command ? command[0].cb(request, response, next) : 0;
                }
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
        status.type && status.type.toLowerCase() !== "streaming"
            ? (activities[0]["type"] = this.statusTypeOp[status.type.toLowerCase()])
            : status.type && status.type.toLowerCase() === "streaming" && status.url
                ? ((activities[0].type = 1), (activities[0].url = status.url))
                : (activities[0]["type"] = 4);
        this.cred.d.presence.activities = activities;
        status.status
            ? (this.cred.d.presence.status = status.status)
            : (this.cred.d.presence.status = "online");
        status.afk
            ? (this.cred.d.presence.afk = status.afk)
            : (this.cred.d.presence.afk = "false");
    };
    return Client;
}());
exports.default = Client;
