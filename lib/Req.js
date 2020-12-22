"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Channel_1 = __importDefault(require("./Channel"));
var Req = /** @class */ (function () {
    function Req(token, res) {
        this.token = token;
        this.res = res;
        var channel = new Channel_1.default(this.token, this.res);
        this.channel = {
            get: channel.get.bind(channel),
            find: channel.find.bind(channel),
            findFirst: channel.findFirst.bind(channel)
        };
    }
    return Req;
}());
exports.default = Req;
