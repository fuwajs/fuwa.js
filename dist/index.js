"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Client_1 = __importDefault(require("./lib/Client"));
const Embed_1 = __importDefault(require("./lib/Embed"));
const Colors_1 = __importDefault(require("./lib/Colors"));
const Command_1 = require("./lib/Command");
module.exports = {
    Colors: Colors_1.default,
    Client: Client_1.default,
    Embed: Embed_1.default,
    Argument: Command_1.Argument,
    // for my canadian friends
    Colours: Colors_1.default
};
