"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _Debug_1 = __importDefault(require("./_Debug"));
class Cache {
    constructor(options) {
        this.options = options;
        this.data = { guilds: new Map() };
        if (options.clearAfter !== false) {
            setInterval(() => {
                delete this.data;
                this.data = {
                    guilds: new Map()
                };
            }, options.clearAfter);
        }
    }
    cache(type, data) {
        var _a;
        if (((_a = this.options) === null || _a === void 0 ? void 0 : _a.cacheOptions[type]) === undefined
            ? true
            : this.options.cacheOptions[type]) {
            this.data[type].set(data.id, data);
            const debug = new _Debug_1.default(true);
            debug.log('CACHE', debug.object(this.data));
        }
    }
}
exports.default = Cache;
