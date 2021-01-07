"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
class Emitter {
    constructor() {
        this.OPevents = {};
        this.APIEvents = {};
        this.WSEvents = {};
        this.response = {
            op: {
                emit: (op, d) => {
                    this.ws.send(JSON.stringify({
                        op,
                        d,
                        t: null,
                    }));
                },
            },
            events: {
                emit: (t, d) => {
                    this.ws.send(JSON.stringify({
                        t,
                        d,
                        op: 0,
                    }));
                },
            },
        };
    }
    connect(url) {
        this.ws = new ws_1.default(url);
        this.ws.on('open', () => {
            var _a;
            console.log('Connected');
            this.WSEvents.open ? this.WSEvents.open() : 0;
            (_a = this.ws) === null || _a === void 0 ? void 0 : _a.on('message', (data) => {
                this.WSEvents.message ? this.WSEvents.message() : 0;
                let res = JSON.parse(data.toString());
                console.log(res);
                if (res.op === 0) {
                    if (!res.t)
                        throw new Error(`The event is undefined while the OP Code is 0\n ${res.t}\n${res.d}\n${res.op}`);
                    this.APIEvents[res.t] ? this.APIEvents[res.t](res.d) : 0;
                }
                else
                    this.OPevents[res.op] ? this.OPevents[res.op](res.d) : 0;
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
