"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Colours = exports.Colors = exports.Embed = exports.User = exports.Client = void 0;
const Client_1 = __importDefault(require("./lib/Client"));
const User_1 = __importDefault(require("./lib/User"));
const Embed_1 = __importDefault(require("./lib/Embed"));
const Colors_1 = __importDefault(require("./lib/Colors"));
exports.Client = Client_1.default;
exports.User = User_1.default;
exports.Embed = Embed_1.default;
exports.Colors = Colors_1.default;
// for all you canadians
exports.Colours = exports.Colors;
