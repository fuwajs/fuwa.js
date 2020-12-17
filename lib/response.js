"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var _Const_1 = require("./_Const");
var response = /** @class */ (function () {
    function response(req, token) {
        this.req = req;
        this.token = token;
    }
    response.prototype.reply = function (content) {
        if (content.length > 2000) {
            throw new Error('message should be less than 2000 characters');
        }
        axios_1.default(_Const_1.discordAPI.api + ("/channels/" + this.req.channel_id + "/messages"), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': ' Bot ' + this.token
            },
            data: {
                content: "<@" + this.req.author.id + ">, " + content,
            }
        }).then().catch(function (err) { return console.log(err.data); });
    };
    response.prototype.send = function (content) {
        if (content.length > 2000) {
            throw new Error('message should be less than 2000 characters');
        }
        else {
            axios_1.default(_Const_1.discordAPI.api + (this.req.channel_id + "/messages"), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': ' Bot ' + this.token
                },
                data: {
                    content: content
                }
            }).then().catch(function (err) { return console.log(err.data); });
        }
    };
    return response;
}());
exports.default = response;
