"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Client Class
 * @example
 * const Fuwa = require('fuwa.js'); // Import Fuwa library
 * const cli = new Fuwa.Client('MY_TOKEN_HERE', '?'); // init the Client
 *
 */
var Client = /** @class */ (function () {
    /**
     *
     * @param {string|Buffer} token The token for your bot
     * @param {string} prefix The prefix for your bot
     */
    function Client(token, prefix) {
        this.commands = new Map;
        this.middlware = [];
        this.token = token.toString();
        this.prefix = prefix;
    }
    /**
     * Command function
     * @param {string|string[]} name Name of the command,
     * @param {commandCallback} cb The function that is called when the command is ran
     * @param {commandOptions} options Options for your command
     * @returns {Client}
     * @example
     *
     * cli.command(['ping', 'latency'], (res, res, next) => {
     *      res.send('Pong!'); // send message
     *      next(); // run next function
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
    Client.prototype.use = function (cb) {
        this.middlware.push(cb);
        return this;
    };
    Client.prototype.on = function (event) { };
    ;
    Client.prototype.on = function (event) { };
    ;
    return Client;
}());
exports.default = Client;
