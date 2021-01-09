"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = __importDefault(require("ws"));
class Emitter {
    constructor() {
        this.response = {
            op: {
                emit: (op, d) => {
                    this.ws.send(JSON.stringify({ op, d, t: null, }));
                },
            },
            events: {
                emit: (t, d) => {
                    this.ws.send(JSON.stringify({ t, d, op: 0 }));
                },
            },
        };
    }
    connect(url) {
        this.ws = new ws_1.default(url);
        this.ws.on('open', () => {
            var _a;
            console.log('Connected');
            this.WSEvents.open();
            (_a = this.ws) === null || _a === void 0 ? void 0 : _a.on('message', (data) => {
                this.WSEvents.message();
                const res = JSON.parse(data.toString());
                console.log(res);
                if (res.op === 0) {
                    if (!res.t)
                        throw new Error(`The event is undefined while the OP Code is 0\n ${res.t}\n${res.d}\n${res.op}`);
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
