"use strict";
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
exports.default = {
    /**
     * Use this if you want to handle Discord Rate limits automatically.
     * ! Be aware that this function is **recursive**
     * Note: this automatically 'catch'es on rejection
     * @param method The HTTP method to execute
     * @param path The path from 'https://discord.com/api/v{version} to execute
     * the described {@see method} from
     * @param token The bots token (for authorization)
     * @param data The data (if any) to send
     * @param version Discord API version to use {@default v 8}
     */
    REQUEST(method, path, token, data, version) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const params = {

    },
    GET(path, token) {
        return this.REQUEST('GET', path, token);
    },
    DELETE(path, token) {
        return this.REQUEST('DELETE', path, token);
    },
    POST(path, token, data) {
        return this.REQUEST('POST', path, token, data);
    },
    PUT(path, token, data) {
        return this.REQUEST('PUT', path, token, data);
    },
    PATCH(path, token, data) {
        return this.REQUEST('PATCH', path, token, data);
};
