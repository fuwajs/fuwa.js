"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var _Const_1 = require("./_Const");
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
    function Client(prefix) {
        this.events = new Map;
        this.commands = new Map;
        this.middlware = [];
        this.prefix = prefix;
    }
    /**
     * Command function
     * @param {string|string[]} name Name of the command,
     * @param {commandCallback} cb The function that is called when the command is ran
     * @param {commandOptions} options Options for your command
     * @returns {Client}
     * @example
     * cli.command(['ping', 'latency'], (res, res) => {
     *      res.send('Pong!'); // send message
     * });
     */
    Client.prototype.command = function (name, cb, options) {
        var _this = this;
        if (Array.isArray(name)) {
            name.forEach(function (key) {
                var option = options || { desc: 'No description was provided' };
                var commands = _this.commands.get(key);
                commands ? commands.push({ cb: cb, options: option }) : undefined;
                _this.commands.set(key, commands || [{ cb: cb, options: option }]);
            });
        }
        else {
            var option = options || { desc: 'No description was provided' };
            var commands = this.commands.get(name);
            commands ? commands.push({ cb: cb, options: option }) : undefined;
            this.commands.set(name, commands || [{ cb: cb, options: option }]);
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
     * Log your bot into discord
     * @param {string|Buffer} token Your bot token
     */
    Client.prototype.login = function (token) {
        this.ws = new ws_1.default('wss://gateway.discord.gg/?v=6&encoding=json');
        var self = this;
        this.ws.onopen = function () {
            var _this = this;
            this.onmessage = function (e) {
                var res = JSON.parse(e.data.toString());
                console.log(res);
                switch (res.op) {
                    case (_Const_1.OPCodes.HELLO):
                        self.loop = setInterval(function () {
                            _this.send(JSON.stringify({
                                op: 1,
                                d: 251
                            }));
                        }, res.d.heartbeat_interval);
                        break;
                }
                switch (res.t) {
                    case 'READY':
                        var fn = self.events.get('READY');
                        if (fn) {
                            fn();
                        }
                        break;
                }
            };
            this.send(JSON.stringify({
                op: _Const_1.OPCodes.IDENTIFY,
                d: {
                    token: token.toString(),
                    intents: 513,
                    properties: {
                        $os: "linux",
                        $browser: "fuwa.js",
                        $device: "fuwa.js"
                    }
                }
            }));
        };
        var secret = token.toString();
        // TODO: Login to discord  
    };
    Client.prototype.logout = function (end) {
        if (end === void 0) { end = true; }
        if (this.ws && this.loop) {
            clearInterval(this.loop);
            if (end) {
                process.exit();
            }
        }
    };
    return Client;
}());
exports.default = Client;
