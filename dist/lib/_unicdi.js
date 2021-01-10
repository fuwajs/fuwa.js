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
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
const undici_1 = require("undici");
const _DiscordAPI_1 = require("./_DiscordAPI");
const http = new undici_1.Client(_DiscordAPI_1.discordAPI.discord);
exports.default = {
    GET(path, token) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const res = yield http.request({
                path,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
            });
            const chunks = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                resolve(JSON.parse(Buffer.concat(chunks).toString()));
            });
        }));
    },
    DELETE(path, token) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const res = yield http.request({
                path: path,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
            });
            const chunks = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                resolve(JSON.parse(Buffer.concat(chunks).toString()));
            });
        }));
    },
    OTHER(method, path, token, data) {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            const res = yield http.request({
                path: path,
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
                body: data,
            });
            const chunks = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                resolve(JSON.parse(Buffer.concat(chunks).toString()));
            });
        }));
    },
};
