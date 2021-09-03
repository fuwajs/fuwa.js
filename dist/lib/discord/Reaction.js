"use strict";
/******************************************************************************
 * @file src/lib/discord/Reaction.ts
 * @fileoverview Exports a class implementation of the Reaction Interface
 * (IReaction)
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
const Response_1 = __importDefault(require("../Response"));
const _http_1 = __importDefault(require("../_http"));
const Message_1 = __importDefault(require("./Message"));
class Reaction {
    constructor(json, token, bot) {
        this.token = token;
        this.bot = bot;
        Object.assign(this, json);
    }
    /**
     * Get the message the reaction was on
     */
    getMessage() {
        return __awaiter(this, void 0, void 0, function* () {
            const json = yield _http_1.default.GET(`/channels/${this.channel_id}
            /messages/${this.message_id}`);
            return new Message_1.default(json, this.token, this.bot);
        });
    }
    getResponse() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Response_1.default(yield _http_1.default.GET(`/channels/${this.channel_id}
                /messages/${this.message_id}`), this.token, this.bot);
        });
    }
}
exports.default = Reaction;
