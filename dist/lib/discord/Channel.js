"use strict";
/******************************************************************************
 * @file src/lib/discord/Channel.ts
 * @fileoverview Exports a class implementation of the Channel Interface
 * (IChannel)
 *****************************************************************************/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
const _http_1 = __importDefault(require("../_http"));
const Message_1 = __importDefault(require("./Message"));
const Embed_1 = __importDefault(require("./Embed"));
class Channel {
    constructor(data) {
        Object.assign(this, data);
    }
    delete(reason) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield _http_1.default.DELETE(`/channels/${this.id}`, {
                'X-Audit-Log-Reason': reason,
            });
        });
    }
    send(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = {};
            if (typeof content === 'string') {
                // Just a normal message
                data.content = content;
                data.tts = false;
            }
            else if (content instanceof Embed_1.default) {
                data.embeds = [content];
                data.tts = false;
            }
            else {
                // throw new TypeError(`Expected type 'string | Embed' instead found ${typeof content}`);
                return;
            }
            return new Message_1.default(yield _http_1.default.POST(`/channels/${this.id}/messages`, JSON.stringify(data)));
        });
    }
    getMessage(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Message_1.default(yield _http_1.default.GET(`/channels/${this.id}/messages/${id}`));
        });
    }
    modify(data, reason) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Channel(yield _http_1.default.PATCH(`/channels/${this.id}`, JSON.stringify(data), {
                'X-Audit-Log-Reason': reason,
            }));
        });
    }
}
exports.Channel = Channel;
//# sourceMappingURL=Channel.js.map