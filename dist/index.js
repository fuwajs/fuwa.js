"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colors = exports.Embed = exports.User = exports.Client = void 0;
var Client_1 = __importDefault(require("./lib/Client"));
var User_1 = __importDefault(require("./lib/User"));
var Embed_1 = __importDefault(require("./lib/Embed"));
exports.Client = Client_1.default;
exports.User = User_1.default;
exports.Embed = Embed_1.default;
exports.Colors = {
    rgb: function (r, g, b) {
        return ('#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    },
    mind: '#3EB489',
    white: '#FFFFFF',
    snow: '#FFFAFA',
    aliceBlue: '#f0f8ff',
    antiqueWhite: '#faebd7',
    aqua: '#00ffff',
    aquaMarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedAlmond: '#ffebcd',
    blue: '#0000ff',
    blueViolet: '#8a2be2',
    brown: '#a52a2a',
};
