"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class _Cache {
    constructor(options) {
        this.options = options;
        this.data = {
            guilds: new Map()
        };
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
            : this.options.cacheOptions[type])
            this.data[type].set(data.id, data);
    }
}
exports.default = _Cache;
