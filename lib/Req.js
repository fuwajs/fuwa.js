"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Channel_1 = __importDefault(require("./Request/Channel"));
var Req = /** @class */ (function () {
    function Req(token, res) {
        this.token = token;
        this.res = res;
        this.channel = new Channel_1.default(this.token, this.res);
    }
    return Req;
}());
exports.default = Req;
