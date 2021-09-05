"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
/******************************************************************************
 * @file src/lib/_http.ts
 * @fileoverview Provides http functions using undici or fetch() depending on
 * the JavaScript/TypeScript environment.
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
const undici_1 = require("undici");
const _Debug_1 = __importDefault(require("./_Debug"));
const _DiscordAPI_1 = require("./_DiscordAPI");
const _globals_1 = require("./_globals");
let http = new undici_1.Client(_DiscordAPI_1.discordAPI.discord);
exports.default = {
    /**
     * Use this if you want to handle Discord Rate limits automatically.
     * ! Be aware that this function is **recursive**
     * Note: this automatically 'catch'es on rejection
     * @param method The HTTP method to execute
     * @param path The path from 'https://discord.com/api/v{version} to execute
     * the described {@see method} from
     * @param data The data (if any) to send
     * @param version Discord API version to use {@default v 8}
     */
    REQUEST(method, path, data, 
    // version?: 6 | 8 | 9,
    headers) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            const params = {
                path: '/api/v8' + path,
                method,
                headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
                body: data,
            };
            if (_globals_1.token)
                params.headers.authorization = `Bot ${_globals_1.token}`;
            const res = yield http.request(params);
            const chunks = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                var _a;
                const str = Buffer.concat(chunks).toString();
                let d;
                if (!str)
                    resolve({});
                // Sucess 200->299
                if (res.statusCode > 199 && res.statusCode < 300) {
                    try {
                        d = JSON.parse(str);
                    }
                    catch (e) {
                        reject(e);
                    }
                }
                else if (res.statusCode === 429) {
                    // Handle Discord Rate Limits
                    setTimeout(() => {
                        this.REQUEST(method, path, data, headers).catch((e) => console.error(e));
                    }, ((_a = JSON.parse(str)) === null || _a === void 0 ? void 0 : _a.retry_after) * 1000); // seconds -> milliseconds
                }
                resolve(d);
            });
        })).catch((e) => {
            new _Debug_1.default(true).log(method, e);
            console.trace();
        });
    },
    GET(path, headers) {
        return this.REQUEST('GET', path, undefined, headers);
    },
    DELETE(path, headers) {
        return this.REQUEST('DELETE', path, undefined, headers);
    },
    POST(path, data, headers) {
        return this.REQUEST('POST', path, data, headers);
    },
    PUT(path, data, headers) {
        return this.REQUEST('PUT', path, data, headers);
    },
    PATCH(path, data, headers) {
        return this.REQUEST('PATCH', path, data, headers);
    },
};
