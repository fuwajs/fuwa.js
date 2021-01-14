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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
const _DiscordAPI_1 = require("./_DiscordAPI");
const erlpackPromise = Promise.resolve().then(() => __importStar(require('erlpack')));
let hasErlPack = true;
let PACK;
let UNPACK;
erlpackPromise.then(v => {
    // Has erlpack
    hasErlPack = true;
    console.info('Hooray! You have erlpack.');
    console.info('Enjoy your boost of speed.');
    PACK = v.pack;
    UNPACK = v.unpack;
});
erlpackPromise.catch(e => {
    // Doesnt have erlpack
    hasErlPack = false;
    console.info('You don\'t have erlpack.');
    console.info('That\'s ok, fuwa still works without it.');
    PACK = a => JSON.stringify(a);
    UNPACK = a => JSON.parse(a.toString('utf-8'));
});
class Emitter {
    constructor() {
        this.OPevents = {};
        this.APIEvents = {};
        this.response = {
            op: {
                emit: (op, d) => {
                    var _a;
                    //this.ws.send(JSON.stringify({ op, d, t: null, }));
                    (_a = this.ws) === null || _a === void 0 ? void 0 : _a.send(PACK({ op, d, t: null }));
                },
            },
            events: {
                emit: (t, d) => {
                    // this.ws.send(JSON.stringify({ t, d, op: 0 }));
                    this.ws.send(PACK({ t, d, op: _DiscordAPI_1.opCodes.dispatch }));
                },
            },
        };
    }
    connect(url, query) {
        const encoding = (query === null || query === void 0 ? void 0 : query.encoding) || (hasErlPack ? 'etf' : 'json');
        if (!hasErlPack && encoding === 'etf') {
            throw new Error('ETF encoding selected but erlpack not found');
        }
        this.ws = new ws_1.default(url + `?v=${query.v || 8}&encoding=${encoding}`);
        this.ws.on('open', () => {
            var _a, _b;
            console.log('Connected');
            (_a = this.WSEvents) === null || _a === void 0 ? void 0 : _a.open();
            (_b = this.ws) === null || _b === void 0 ? void 0 : _b.on('message', (data) => {
                var _a;
                const res = UNPACK(data);
                (_a = this.WSEvents) === null || _a === void 0 ? void 0 : _a.message();
                if (res.op === _DiscordAPI_1.opCodes.dispatch) {
                    if (!res.t)
                        throw new Error(`The event is undefined while the OP Code is 0\n ${res}`);
                    if (this.APIEvents[res.t])
                        this.APIEvents[res.t](res.d);
                }
                else if (this.OPevents[res.op])
                    this.OPevents[res.op](res.d);
            });
        });
    }
    op(op, cb) {
        this.OPevents[op] = cb;
    }
    event(e, cb) {
        this.APIEvents[e] = cb;
    }
}
exports.default = Emitter;
