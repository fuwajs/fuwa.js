"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/ban-ts-comment */
/******************************************************************************
 * @file src/lib/Emitter.ts
 * @fileoverview Exports the emitter class. It is the baseclass for the
 * Client class.
 ******************************************************************************/
const _DiscordAPI_1 = require("./_DiscordAPI");
const _erlpack_1 = require("./_erlpack");
const ws_1 = __importDefault(require("ws"));
/**
 * The baseclass for the Client class.
 */
class Emitter {
    constructor() {
        this.OPevents = {};
        this.APIEvents = {};
        this.response = {
            op: {
                emit: (op, d) => {
                    var _a;
                    //this.ws.send(JSON.stringify({ op, d, t: null, }));
                    (_a = this.ws) === null || _a === void 0 ? void 0 : _a.send(_erlpack_1.pack({ op, d, t: null }));
                },
            },
            events: {
                emit: (t, d) => {
                    // this.ws.send(JSON.stringify({ t, d, op: 0 }));
                    this.ws.send(_erlpack_1.pack({ t, d, op: _DiscordAPI_1.OpCodes.dispatch }));
                },
            },
        };
    }
    connect(url, query) {
        var _a;
        const encoding = (query === null || query === void 0 ? void 0 : query.encoding) || (_erlpack_1.erlpack ? 'etf' : 'json');
        if (!_erlpack_1.erlpack && encoding === 'etf') {
            throw new Error('ETF encoding selected but erlpack not found');
        }
        this.ws = new ws_1.default(url + `?v=${(_a = query.v) !== null && _a !== void 0 ? _a : 8}&encoding=${encoding}`);
        this.ws.onopen = () => {
            var _a;
            (_a = this.WSEvents) === null || _a === void 0 ? void 0 : _a.open();
            this.ws.onmessage = ({ data }) => {
                var _a;
                const res = _erlpack_1.unpack(data, encoding);
                (_a = this.WSEvents) === null || _a === void 0 ? void 0 : _a.message();
                if (res.op === _DiscordAPI_1.OpCodes.dispatch) {
                    if (!res.t)
                        throw new Error(`The event is undefined while the OP Code is 0\n ${res}`);
                    if (this.APIEvents[res.t])
                        this.APIEvents[res.t](res.d);
                }
                else if (this.OPevents[res.op])
                    this.OPevents[res.op](res.d);
            };
        };
    }
    op(op, cb) {
        this.OPevents[op] = cb;
    }
    event(e, cb) {
        this.APIEvents[e] = cb;
    }
}
exports.default = Emitter;
//# sourceMappingURL=Emitter.js.map