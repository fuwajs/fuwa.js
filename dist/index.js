"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = exports.Request = exports.Embed = exports.Client = exports.Colorus = exports.Colors = void 0;
/* eslint-disable @typescript-eslint/ban-ts-comment */
const Client_1 = __importDefault(require("./lib/Client"));
const Embed_1 = __importDefault(require("./lib/discord/Embed"));
const Colors_1 = __importDefault(require("./lib/Colors"));
// @ts-ignore
if (typeof window !== undefined) {
    // For browser support
    // @ts-ignore
    window.Colors = Colors_1.default;
    // @ts-ignore
    window.Colours = Colors_1.default;
    // @ts-ignore
    window.Client = Client_1.default;
    // @ts-ignore
    window.Embed = Embed_1.default;
}
exports.Colors = Colors_1.default;
exports.Colorus = Colors_1.default;
exports.Client = Client_1.default;
exports.Embed = Embed_1.default;
